"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Interest {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const interests: Interest[] = [
  {
    title: "Games",
    description: "I love playing games and I am a big fan of Valorant!",
    image: "/assets/img/about/game.jpg",
    imageAlt: "Aditya Mohan Playing Video Games",
  },
  {
    title: "Music",
    description:
      "I love listening to music and I am a big fan of Rock and Metal!",
    image: "/assets/img/about/music.jpg",
    imageAlt: "Aditya Mohan Playing Guitar",
  },
  {
    title: "Books",
    description:
      "I love reading books and I am a big fan of Dan Brown&apos;s work!",
    image: "/assets/img/about/books.jpg",
    imageAlt: "Aditya Mohan Reading Books",
  },
  {
    title: "Stand-up Comedy",
    description:
      "Passionate about stand-up comedy, with a particular admiration for comedians like Joe Rogan, Joe List, and Dave Chappelle!",
    image: "/assets/img/about/standup.jpg",
    imageAlt: "Aditya Mohan Performing Stand-up Comedy",
  },
  {
    title: "Travelling",
    description: "Been travelling the USA and have been to 10+ states already!",
    image: "/assets/img/about/travel.jpg",
    imageAlt: "Aditya Mohan Traveling",
  },
  {
    title: "Beaches",
    description:
      "Beaches are my happy place—I&apos;m basically a professional beach bum!",
    image: "/assets/img/about/beaches.jpg",
    imageAlt: "Aditya Mohan at the Beach",
  },
];

const Interests = () => {
  return (
    <section id="interests" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold mb-6 text-primary dark:text-white">
            MY INTERESTS
          </h2>
          <blockquote className="text-3xl italic text-gray-700 dark:text-gray-300 border-l-4 border-purple-500 pl-4 mb-8">
            I&apos;m a developer, Musician and bibliophile who has been around
            the software industry in some capacity since 2017. I am ambitious
            and driven, fast learner, a people person, hardworking &
            outrageously creative.
          </blockquote>
          <a
            href="https://www.adityamohan.me"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out my blog!
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-lg shadow-lg group bg-white dark:bg-gray-800 hover:shadow-purple-100 dark:hover:shadow-purple-900/20"
            >
              <div className="relative h-64">
                <Image
                  src={interest.image}
                  alt={interest.imageAlt}
                  fill
                  className="object-cover transition-transform group-hover:scale-110 duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 transition-opacity group-hover:bg-opacity-30 dark:group-hover:bg-opacity-50" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-4xl font-bold mb-2 text-white">
                  {interest.title}
                </h3>
                <p className="text-xl text-gray-100 dark:text-gray-200">
                  {interest.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
