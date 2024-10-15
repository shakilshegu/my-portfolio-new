"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning my graduation 
        , I pursued my career for web development and programming by enrolling
        in a coding bootcamp, where I mastered{" "}
        <span className="font-medium">full-stack web development</span>. I find
        the{" "}
        <span className="italic">problem-solving aspect of programming</span>{" "}
        particularly rewarding, and I thrive on the satisfaction of overcoming
        challenges with well-crafted solutions. My core stack includes{" "}
        <span className="font-medium">
          React, Express, Node.js, and MongoDB
        </span>
        , and I am also proficient in Next.js and Tailwind CSS. I am always
        eager to expand my skill set and explore new technologies.
      </p>

      <p>
        <span className="italic">Outside of coding</span>, I enjoy working out
        at the gym, watching movies, and playing football. I have a passion for{" "}
        <span className="font-medium">continuous learning</span> and am
        currently exploring topics in{" "}
        <span className="font-medium">self-development and trading</span>.
      </p>
    </motion.section>
  );
}
