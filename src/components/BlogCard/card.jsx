import React from "react";
import Blog1 from "../../assets/BlogCard/Bolg1.webp";
import Blog2 from "../../assets/BlogCard/blog2.avif";
import Blog4 from "../../assets/BlogCard/blog3.avif";
import Blog5 from "../../assets/BlogCard/blog3.avif";
import Blog6 from "../../assets/BlogCard/Bolg1.webp";
import Blog7 from "../../assets/BlogCard/blog3.avif";
import Blog8 from "../../assets/BlogCard/Bolg1.webp";
import Blog9 from "../../assets/BlogCard/blog3.avif";
import Blog10 from "../../assets/BlogCard/blog10.webp";



const card = () => {
  return (
    <>
      
        {/* ======= card1 ======= */}
      <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mx-auto my-6 hover:shadow-2xl duration-500">
      <img
        src={Blog2}
        alt="Blog Post Image"
        width={400}
        height={240}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">August 10, 2024</div>
        <h3 className="text-2xl font-bold">Artsy: A Global Hub for Contemporary Art</h3>
        <p className="text-gray-600">
        Artsy’s blog offers daily artist interviews, reviews, exhibition news, and thought-provoking pieces on art movements, feminism, craft, and more—perfect for exploring today's leading artists.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
        >
          Read More
        </a>
      </div>
    </div>

        {/* ======= card2 ======= */}
             <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mx-auto my-6 hover:shadow-2xl duration-500">
      <img
        src={Blog9}
        alt="Blog Post Image"
        width={400}
        height={240}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">August 11, 2024</div>
        <h3 className="text-2xl font-bold">Cass Art: Your Go-To for Art Supplies and Tips</h3>
        <p className="text-gray-600">
        Cass Art’s blog offers practical tips for artists of all levels, covering techniques like hand lettering and fashion illustration. With step-by-step guides, expert advice on art materials, creative opportunities, and artist interviews, it’s a valuable resource for any artist.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-gray-50 bg-[#e7f3ff] shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
        >
          Read More
        </a>
      </div>
    </div>

        {/* ======= card3 ======= */}
             <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mx-auto my-6 hover:shadow-2xl duration-500">
      <img
        src={Blog8}
        alt="Blog Post Image"
        width={400}
        height={240}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">August 12, 2024</div>
        <h3 className="text-2xl font-bold">Art Basel</h3>
        <p className="text-gray-600">
        Art Basel's "Stories" section offers video-focused content, featuring renowned artists presenting their work from their studios. Each video is paired with a short text, allowing viewers to either read or listen. The site also includes panel discussion videos, making it a great educational resource for art enthusiasts.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
        >
          Read More
        </a>
      </div>
    </div>

        {/* ======= card4 ======= */}
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mx-auto my-6 hover:shadow-2xl duration-500">
      <img
        src={Blog4}
        alt="Blog Post Image"
        width={400}
        height={240}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">August 15, 2024</div>
        <h3 className="text-2xl font-bold">Aesthetica</h3>
        <p className="text-gray-600">
        Aesthetica is a visually stunning blog with a clean, minimalistic design and an airy feel. It features in-depth articles on innovative artists across various disciplines, discussing topics like sustainability, inclusivity, and digital ethics in art. Whether you're into digital illustration, photography, film, or architecture, Aesthetica offers inspiration and recommendations for must-see exhibitions.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
        >
          Read More
        </a>
      </div>
    </div>

        {/* ======= card5 ======= */}
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mx-auto my-6 hover:shadow-2xl duration-500">
      <img
        src={Blog1}
        alt="Blog Post Image"
        width={400}
        height={240}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">June 10, 2024</div>
        <h3 className="text-2xl font-bold">GARAGE</h3>
        <p className="text-gray-600">
        GARAGE, Vice’s art, fashion, and culture publication, features a mix of emerging and established artists. It covers art, film, fashion, photography, architecture, and design with a unique, witty perspective. The blog's entertaining articles offer a fresh take on current art world topics, while clever microcopy adds playful touches to the overall reading experience. Available both online and in print, GARAGE is a fun and educational resource.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
        >
          Read More
        </a>
      </div>
    </div>

        {/* ======= card6 ======= */}
             <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg mx-auto my-6 hover:shadow-2xl duration-500">
      <img
        src={Blog6}
        alt="Blog Post Image"
        width={400}
        height={240}
        className="w-full h-60 object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="text-sm text-gray-500">June 10, 2024</div>
        <h3 className="text-2xl font-bold">Juxtapoz</h3>
        <p className="text-gray-600">
        Juxtapoz is a vibrant art blog that highlights contemporary art, street art, and underground culture. It features a diverse range of artists, from emerging talents to established creatives, offering interviews, exhibition reviews, and artist spotlights. Juxtapoz often covers unconventional and edgy art forms, making it a great resource for those interested in graffiti, pop surrealism, and alternative visual culture. The blog's colorful design and engaging content make it both visually stimulating and informative, providing art enthusiasts with a fresh perspective on modern creativity.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
        >
          Read More
        </a>
      </div>
    </div>
    </>
  );
};

export default card;
