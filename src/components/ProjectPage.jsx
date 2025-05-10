import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import TextView from './TextView';
import projectData from '../data/projectData';

const ProjectPage = () => {
  const { slug } = useParams();
  const [view, setView] = useState('gallery');
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = projectData[slug]?.[0];
  const images = project?.images || [];
  const title = images[0]?.title || slug.replace(/-/g, ' ');

  useEffect(() => {
    document.title = `${title} – Efim Leonov`;
    return () => {
      document.title = 'Efim Leonov'; // reset when leaving
    };
  }, [title]);

  return (
    <div className={`h-screen text-black relative ${view === 'gallery' ? 'overflow-hidden' : 'overflow-auto'}`}>
      <div className="fixed top-4 left-4 flex items-center gap-2 z-50 select-none">
        <button onClick={() => window.history.back()} aria-label="Back" className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl hover:text-amber-300 p-3 select-none dark:text-amber-300 dark:hover:text-amber-100">✕</button>
        <span className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-mono select-none dark:text-amber-300">
          {currentIndex + 1}/{images.length}
        </span>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setView(view === 'gallery' ? 'text' : 'gallery')}
          className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase font-mono border-none hover:text-amber-300 p-3 select-none dark:text-amber-300 dark:hover:text-amber-100"
        >
          {view === 'gallery' ? 'text' : 'image'}
        </button>
      </div>

      {view === 'gallery' ? (
        <Gallery images={images} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      ) : (
        <TextView slug={slug} />
      )}
    </div>
  );
};

export default ProjectPage;