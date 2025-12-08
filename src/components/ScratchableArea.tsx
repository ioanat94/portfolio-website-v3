import React, { useEffect, useRef, useState } from 'react';

import type { CardType } from '../utils/types';

type ScratchableAreaProps = {
  title: string;
  iconSrc: string;
  children: React.ReactNode;
  setRevealedCards: React.Dispatch<React.SetStateAction<CardType[]>>;
  revealedCards: CardType[];
};

export default function ScratchableArea({
  title,
  iconSrc,
  children,
  setRevealedCards,
  revealedCards,
}: ScratchableAreaProps) {
  const isDesktop =
    typeof window !== 'undefined' ? window.innerWidth > 700 : true;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  // Set default to match max-w/max-h for robust initial sizing
  const [canvasSize, setCanvasSize] = useState({ width: 600, height: 800 });

  // Calculate dynamic scratch radius based on card size
  const SCRATCH_RADIUS = Math.max(24, Math.round(canvasSize.width / 18));

  // Update canvas size to match container
  useEffect(() => {
    function updateSize() {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCanvasSize({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    }
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const isDrawing = useRef(false);
  const [disableDivs, setDisableDivs] = useState(false);
  const [scratched, setScratched] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const drawOverlay = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#23272F'; // dark overlay like small cards
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw visible border on overlay
      const borderRadius = 32;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(borderRadius, 0);
      ctx.lineTo(canvas.width - borderRadius, 0);
      ctx.quadraticCurveTo(canvas.width, 0, canvas.width, borderRadius);
      ctx.lineTo(canvas.width, canvas.height - borderRadius);
      ctx.quadraticCurveTo(
        canvas.width,
        canvas.height,
        canvas.width - borderRadius,
        canvas.height
      );
      ctx.lineTo(borderRadius, canvas.height);
      ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - borderRadius);
      ctx.lineTo(0, borderRadius);
      ctx.quadraticCurveTo(0, 0, borderRadius, 0);
      ctx.closePath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#7C3AED';
      ctx.shadowColor = 'rgba(124,58,237,0.25)';
      ctx.shadowBlur = 8;
      ctx.stroke();
      ctx.restore();

      ctx.font = `bold ${Math.max(
        28,
        Math.round(canvas.height / 15.5)
      )}px "Quantico", system-ui, sans-serif`;
      ctx.fillStyle = '#fff'; // white text for overlay
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.letterSpacing = '4px';
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      const titleFormatted =
        'The ' +
        title
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

      // Center title and icon vertically and horizontally
      const titleFontSize = Math.max(28, Math.round(canvas.height / 15.5));
      const iconHeight = Math.min(canvas.height * 0.4, 180);
      const gap = Math.max(32, Math.round(canvas.height / 18));
      const totalContentHeight = titleFontSize + gap + iconHeight;
      const startY = Math.round((canvas.height - totalContentHeight) / 2);

      // Draw title
      ctx.fillText(titleFormatted, canvas.width / 2, startY);
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      // Draw SVG below title
      const img = new window.Image();
      img.src = iconSrc;
      img.onload = () => {
        const imgWidth = iconHeight;
        const imgX = (canvas.width - imgWidth) / 2;
        const imgY = startY + titleFontSize + gap;
        ctx.drawImage(img, imgX, imgY, imgWidth, iconHeight);
      };
    };
    if (document.fonts) {
      document.fonts.ready.then(drawOverlay);
    } else {
      drawOverlay();
    }
  }, [title, iconSrc, canvasSize]);

  const handleScratch = (clientX: number, clientY: number) => {
    if (scratched) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, SCRATCH_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';

    // 80% scratch detection logic
    // Only check every few scratches for performance
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const total = imageData.data.length / 4;
    let transparent = 0;
    for (let i = 0; i < imageData.data.length; i += 4) {
      if (imageData.data[i + 3] === 0) transparent++;
    }
    const percent = transparent / total;
    if (percent >= 0.8) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setScratched(true);
      setAnimating(true);
      setDisableDivs(false);
      setTimeout(() => {
        setAnimating(false);
      }, 2000);
      if (!revealedCards.includes(title as CardType)) {
        setRevealedCards([...revealedCards, title as CardType]);
      }
    }
  };

  useEffect(() => {
    if (!isDrawing.current) return;

    const moveListener = (e: PointerEvent) => {
      handleScratch(e.clientX, e.clientY);
    };
    const upListener = () => {
      isDrawing.current = false;
      setDisableDivs(false);
      window.removeEventListener('pointermove', moveListener);
      window.removeEventListener('pointerup', upListener);
    };

    window.addEventListener('pointermove', moveListener);
    window.addEventListener('pointerup', upListener);

    return () => {
      window.removeEventListener('pointermove', moveListener);
      window.removeEventListener('pointerup', upListener);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disableDivs]);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (scratched) return;

    isDrawing.current = true;
    setDisableDivs(true);
    handleScratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing.current || scratched) return;

    handleScratch(e.clientX, e.clientY);
  };

  const isRevealed = revealedCards.includes(title as CardType);

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[600px] aspect-3/4 ${
        !disableDivs && !animating ? '' : 'pointer-events-none'
      } ${animating ? 'scratch-revealed' : ''} ${isDesktop ? 'hover-3d' : ''}`}
      onPointerDown={handlePointerDown}
    >
      <figure className='rounded-2xl p-0 w-full h-full m-0 relative overflow-hidden'>
        {/* Underlying content */}
        <div
          className='absolute inset-0 flex flex-col items-center justify-center z-0 w-full h-full text-[#23272F] px-4 rounded-2xl border-2 border-[#382455] shadow-[0_0_0_4px_rgba(124,58,237,0.25)]'
          style={{
            userSelect: disableDivs || animating ? 'none' : 'auto',
            boxShadow: 'inset 0 0 0 15px #382455',
            background:
              'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 60%, #fdf6fb 100%)',
          }}
        >
          {children}
        </div>
        {/* Overlay text */}
        {!isRevealed && (
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className='absolute inset-0 z-10 touch-none cursor-pointer rounded-2xl bg-transparent block w-full h-full'
            onPointerMove={handlePointerMove}
          />
        )}
      </figure>
      {[...Array(8)].map((_, i) => {
        return (
          <div
            key={i}
            className={`pointer-events-${disableDivs ? 'none' : 'auto'}`}
          ></div>
        );
      })}
    </div>
  );
}
