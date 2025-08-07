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
        <span className="font-medium">Three years ago</span>, I stumbled upon an HTML tutorial online that changed everything. 
        What started as curiosity quickly became an obsession. After graduation, I enrolled in a coding bootcamp to master{" "}
        <span className="font-medium">full-stack web development</span>, and I haven't looked back since.
      </p>

      <p className="mb-3">
        I'm passionate about <span className="italic">solving real problems through technology</span>. My core stack includes{" "}
        <span className="font-medium">React, Node.js, Express, MongoDB, Next.js, and Tailwind CSS</span>. 
        What I love most is taking projects from initial concept all the way through deployment, 
        always keeping the <span className="font-medium">user experience</span> at the center of every decision.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy working out, watching movies, and playing football. 
        I'm passionate about <span className="font-medium">continuous learning</span> and currently exploring 
        self-development and trading. I'm excited about opportunities where I can contribute to meaningful projects 
        while helping other developers grow too.
      </p>
    </motion.section>
  );
}