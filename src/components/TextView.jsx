import { useParams } from 'react-router-dom';
import projectData from '../data/projectData';

const TextView = () => {
  const { slug } = useParams();
  const entry = projectData[slug]?.[0];

  const title = entry?.title || slug.replace(/-/g, ' ');
  const description = entry?.description || 'No description provided.';

  return (
    <div className="pt-20 pb-32 px-6 max-w-3xl mx-auto text-base leading-relaxed space-y-6">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase font-mono font-extralight selection:bg-amber-300 dark:text-amber-300 dark:selection:text-black">{title}</h1>
      <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-mono font-extralight selection:bg-amber-300 dark:text-amber-300 dark:selection:text-black">{description}</p>
    </div>
  );
};

export default TextView;