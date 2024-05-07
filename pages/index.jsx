import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Typed from "typed.js";

import LinkedinIcon from "@/components/icons/Linkedin";
import GithubIcon from "@/components/icons/Github";
import ArrowLeft from "@/components/icons/ArrowLeft";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["React Developer", "Frontend Developer"],
      typeSpeed: 70,
      backSpeed: 30,
      loop: true,
      backDelay: 1500,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Layout title={"Portfolio"} description={"My Portfolio"}>
      <motion.img
        drag
        dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -10, rotate: 90 }}
        src="/images/ball-1.svg"
        alt="ball-1"
        className="h-auto absolute w-24 md:w-52  md:block top-48  md:right-10 right-4  z-[1] "
      />
      <motion.img
        drag
        dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -10, rotate: 90 }}
        src="/images/ball-2.svg"
        alt="ball-2"
        className="h-auto absolute  hidden  xl:block md:bottom-10  md:left-10  z-[1] "
      />
      <main className="w-full h-full ">
        <section className="  h-full max-w-5xl mx-auto pt-4   md:pt-4 md:px-10">
          <div className=" flex flex-col items-center justify-center md:items-start">
            <h4 className=" text-lg text-gray-800 dark:text-white font-medium">
              <span className=" text-xl ">Hello,</span> I'm
            </h4>
            <h1 className=" mt-5 text-xl font-extrabold tracking-normal text-gray-800 uppercase md:text-4xl md:mt-3 dark:text-white">
              Ümüt Barlak
            </h1>
            <div className=" mt-5 text-2xl font-normal md:text-3xl md:mt-3  tracking-normal -webkit-bg-clip-text bg-clip-text  text-transparent bg-gradient-to-r from-pink-500 to-violet-500 h-[32px] md:h-[36px]">
              <div ref={el} />
            </div>

            <div className=" flex items-center mt-5 space-x-6 md:mt-4">
              <motion.a
                href="https://github.com/umutbarlak"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center text-gray-900 dark:text-gray-100 transition-colors duration-300 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <GithubIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/umutbarlak/"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center text-gray-900 dark:text-gray-100 transition-colors duration-300 dark:hover:text-pinkish-200 hover:text-pinkish-200"
                whileHover={{ scale: 1.1 }}
              >
                <LinkedinIcon className={"w-8 h-8 fill-current"} />
              </motion.a>
            </div>
          </div>

          <article className="mt-1 prose md:mt-4 md:prose-lg dark:prose-dark ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js </span>
                  </div>
                  <p>
                    <span className="text-gray-500 me-2">//</span>
                    <span className="text-purple-300 text-wrap">Todo:</span>
                    <span className="text-wrap ms-2">
                      You can drag these balloons, you will really like them
                      🎈🎈
                    </span>
                  </p>

                  <div className="flex justify-center items-center gap-4">
                    <img
                      src="/me/me.jpeg"
                      alt="Me"
                      className="w-16 h-16  rounded-full object-cover me-2 hidden sm:block"
                    />

                    <div className="text-sm text-wrap leading-8 m-0">
                      <p className=" ">
                        <span className="text-pink-300 me-2">{">"}</span>
                        const
                        <span className="font-bold text-pink-300 mx-2">
                          skills
                        </span>
                        = [&quot;Reactjs&quot;, &quot;Nextjs&quot;,
                        &quot;Typescript&quot;, &quot;React-Redux&quot;,
                        &quot;Redux-Toolkit&quot;, &quot;Git/Github&quot;,
                        &quot;Nodejs&quot;];
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link legacyBehavior href="/projects">
                      <a className=" text-pink-400 hover:text-pink-300 dark:text-pink-400 dark:hover:text-pink-300 transition duration-300 text-l md:text-xl">
                        Projects
                      </a>
                    </Link>
                  </div>
                </code>
              </pre>
            </div>
          </article>
        </section>
      </main>
    </Layout>
  );
}
