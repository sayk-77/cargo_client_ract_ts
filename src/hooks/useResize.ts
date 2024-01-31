import { useEffect } from 'react';

export const useResize = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 600;
    if (isMobile) return;

    const textarea = document.querySelector('textarea');

    if (textarea) {
      let animationFrameId: number;

      console.log('Resize script is running');

      const adjustTextareaHeight = () => {
        textarea.style.height = 'auto';
        const newHeight = `${textarea.scrollHeight}px`;

        if (textarea.style.height !== newHeight) {
          textarea.style.height = newHeight;
        }

        animationFrameId = requestAnimationFrame(adjustTextareaHeight);
      };

      textarea.addEventListener('input', () => {
        cancelAnimationFrame(animationFrameId);
        adjustTextareaHeight();
      });

      return () => {
        textarea.removeEventListener('input', adjustTextareaHeight);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);
};