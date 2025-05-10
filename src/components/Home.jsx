import { Link } from 'react-router-dom';
import img1 from "../assets/Natural tub-thumbnail.jpg";
import img2 from "../assets/Walking through tall grass lake-thumbnail.jpg";
import img3 from "../assets/6. Ibaraki_6-thumbnail.jpg";
import img4 from "../assets/plf1-thumbnail.jpg";
import img5 from "../assets/vp4-thumbnail.jpg";
import img6 from "../assets/Father gardening-thumbnail.jpg";
import img7 from "../assets/Project People 8-thumbnail.jpg";
import img8 from "../assets/1. Under a big tree-thumbnail.jpg";
import img9 from "../assets/oka6-thumbnail.jpg";
import img10 from "../assets/hkb6-thumbnail.jpg";
import img11 from "../assets/hka15-thumbnail.jpg";
import img12 from "../assets/Blue zone-thumbnail.jpg";
import img13 from "../assets/Blue zone concept-thumbnail.jpg";
import img14 from "../assets/inr2-thumbnail.jpg";
import img15 from "../assets/th2-thumbnail.jpg";

const images = [
  { src: img1, title: "Project Places", year: "2025", slug: "project-places" },
  { src: img2, title: "Tallgrass lake", year: "2025", slug: "tallgrass-lake" },
  { src: img3, title: "Ibaraki", year: "2025", slug: "ibaraki" },
  { src: img4, title: "Provence Lavender Fields", year: "2025", slug: "plf" },
  { src: img5, title: "Valletta Viewing Platform", year: "2025", slug: "vp" },
  { src: img6, title: "Father", year: "2024", slug: "father" },
  { src: img7, title: "Project People 2", year: "2024", slug: "project-people" },
  { src: img8, title: "Snagov", year: "2023", slug: "snagov" },
  { src: img9, title: "Okayama", year: "2022", slug: "oka" },
  { src: img10, title: "Hokkaido 2", year: "2022", slug: "hkb" },
  { src: img11, title: "Hokkaido 1", year: "2021", slug: "hka" },
  { src: img12, title: "Farmorama", year: "2020", slug: "farmorama" },
  { src: img13, title: "Dissipating Domesticity", year: "2019", slug: "zones" },
  { src: img14, title: "Introrama", year: "2018", slug: "inr" },
  { src: img15, title: "Tea House", year: "2016", slug: "th" },
];

const Home = () => {
  return (
    <main className="flex-1 flex items-start justify-center bg-white dark:bg-black">
      <div className="w-[80vw] max-w-[1000px] max-h-[70vh] p-4 overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <Link
              key={index}
              to={`/projects/${img.slug}`}
              className="relative w-full aspect-square group overflow-hidden rounded select-none"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover rounded-md"
              />
              {/* Title and year container */}
              <div className="absolute bottom-0 left-0 w-full p-3 backdrop-blur-sm bg-white/100 text-black group-hover:opacity-100 md:opacity-0 transition-opacity duration-300 z-10 rounded-b text-left md:group-hover:opacity-100 md:flex md:flex-col md:justify-center md:items-center md:h-full opacity-0 sm:opacity-100">
                <h1 className="text-base md:text-xl lg:text-2xl font-extralight leading-tight uppercase font-mono select-none md:text-center md:font-semibold">
                  {img.title}
                </h1>
                <p className="text-sm md:text-base lg:text-xl mt-0 opacity-80 select-none md:text-center md:opacity-100">
                  {img.year}
                </p>
              </div>
              <div className="absolute inset-0 border-3 border-amber-300 opacity-0 group-hover:opacity-80 transition-all duration-300 rounded z-20 pointer-events-none" />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;