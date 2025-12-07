import React, { useEffect, useRef, useState } from 'react';

type ScratchableAreaProps = {
  title: string;
  iconSrc: string;
  children: React.ReactNode;
};

export default function ScratchableArea({
  title,
  iconSrc,
  children,
}: ScratchableAreaProps) {
  const isDesktop =
    typeof window !== 'undefined' ? window.innerWidth > 700 : true;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
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
      ctx.fillStyle = '#f3f3f3';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${Math.max(
        32,
        Math.round(canvas.height / 13)
      )}px "Jersey 10", system-ui, sans-serif`;
      ctx.fillStyle = '#23272f';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.letterSpacing = '4px';
      ctx.shadowColor = '#fff';
      ctx.shadowBlur = 8;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 2;
      const titleFormatted =
        'The ' +
        title
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

      // Center title and icon vertically and horizontally
      const titleFontSize = Math.max(32, Math.round(canvas.height / 13));
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

  return (
    <div
      ref={containerRef}
      className={`relative w-[85vw] h-[150vw] max-w-[600px] max-h-[800px] ${
        !disableDivs && !animating ? '' : 'pointer-events-none'
      } ${animating ? 'scratch-revealed' : ''} ${isDesktop ? 'hover-3d' : ''}`}
      onPointerDown={handlePointerDown}
    >
      <figure className='rounded-2xl p-0 w-full h-full m-0 relative overflow-hidden'>
        {/* Underlying content */}
        <div
          className='absolute inset-0 flex items-center justify-center z-0 w-full h-full bg-[#23272f] text-white'
          style={{ userSelect: disableDivs || animating ? 'none' : 'auto' }}
        >
          {children}
        </div>
        {/* Overlay text */}
        <canvas
          ref={canvasRef}
          width={canvasSize.width}
          height={canvasSize.height}
          className='absolute inset-0 z-10 touch-none cursor-pointer rounded-2xl bg-transparent block w-full h-full'
          onPointerMove={handlePointerMove}
        />
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
