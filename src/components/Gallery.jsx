import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';

const Gallery = ({ currentIndex, setCurrentIndex }) => {
  const { slug } = useParams();
  const project = projectData[slug]?.[0]; // Access the first (and only) object in the array
  const slides = project?.images || [];

  const [hoverSide, setHoverSide] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [touchStartX, setTouchStartX] = useState(null);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(navigator.maxTouchPoints > 0 || 'ontouchstart' in window);
  }, []);

  const prevSlide = () =>
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  const handleClick = (e) => {
    if (isTouch) return;
    const bounds = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - bounds.left;
    clickX < bounds.width / 2 ? prevSlide() : nextSlide();
  };

  const handleMouseMove = (e) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    setHoverSide(x < bounds.width / 2 ? 'left' : 'right');
    setMousePos({ x, y });
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (window.visualViewport?.scale !== 1) return;
    if (touchStartX === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;

    if (deltaX > 50) nextSlide();
    else if (deltaX < -50) prevSlide();

    setTouchStartX(null);
  };

  if (!slides.length) {
    return <div className="text-center p-8 text-xl">Project not found.</div>;
  }

  return (
    <div
      className={`h-screen w-full flex flex-col pt-16 bg-white dark:bg-black relative ${isTouch ? '' : 'cursor-none'}`}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverSide(null)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="flex-1 flex items-center justify-center px-[10px]">
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={slides[currentIndex].src}
            alt={project?.title || 'Project Image'}
            className="block mx-auto max-h-[80vh] max-w-full object-contain select-none"
          />
        </div>
      </div>

      {hoverSide && !isTouch && (
        <div
          className="pointer-events-none absolute text-6xl font-bold text-amber-400 transition-opacity duration-150 select-none"
          style={{
            left: mousePos.x,
            top: mousePos.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {hoverSide === 'left' ? '‹' : '›'}
        </div>
      )}
    </div>
  );
};

export default Gallery;