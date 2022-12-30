import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../app/store';

const Canvas = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const canvas = useSelector((state: RootState) => state.canvas);

  const [isDrawing, setIsDrawing] = useState(false);
  const [oldPosis, setOldPosis] = useState({ x: 0, y: 0 });

  useEffect((): void => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = window.innerWidth + 'px';
    canvas.style.height = window.innerHeight + 'px';

    ctx.scale(2, 2);
    ctxRef.current = ctx;
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }
    setIsDrawing(true);

    ctx.lineCap = 'round';
    ctx.lineWidth = canvas.lineWidth;
    ctx.strokeStyle = canvas.eraser.on ? canvas.eraser.color : canvas.color;

    const r = e.currentTarget.getBoundingClientRect();
    setOldPosis({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  const startMoving = (e: React.MouseEvent<HTMLCanvasElement>): void => {
    if (!isDrawing || !ctxRef.current) {
      return;
    }
    const ctx = ctxRef.current;

    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    ctx.beginPath();
    ctx.moveTo(oldPosis.x, oldPosis.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    setOldPosis({ x, y });
  };

  const stopDrawing = (): void => {
    const ctx = ctxRef.current;
    if (!ctx) {
      return;
    }
    ctx.closePath();
    setIsDrawing(false);
  };

  return (
    <div className="display">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={startMoving}
        onMouseUp={stopDrawing}
      />
    </div>
  );
};

export default Canvas;
