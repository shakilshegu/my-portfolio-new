import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import wordanalyticsImg from "@/public/wordanalytics.png";
import car from "@/public/Car.png";
import karma from "@/public/Karama.png";
import Parkspace from "@/public/Parkspace.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bcom Computer Application",
    location: "Wayanad,Kerala",
    description:
      "Graduated in BCom Computer Application from Wayanad, Kerala in 2020, cherishing a journey of challenges, triumphs, and academic growth.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Calicut,Kerala",
    description:
      "As a Full-Stack Developer intern based in Calicut, Kerala, I bring a robust skill set that includes expertise in React, Next.js, Tailwind, Express, and MongoDB.I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Frond-End Developer ",
    location: "Hong Kong - Remote ",
    description:
      "Worked at Influnance, a product-based startup in Hong Kong, where I focused on front-end development. Responsible for developing and maintaining web applications, ensuring seamless user experiences and efficient performance.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "SKL-PARKSPACE",
    description:
      "An Online Parking Management App where users can find and book parking via a map with filters. Managers can add and manage parking slots, while admins oversee all operations.",
    tags: ["Next", "Nest", "Tailwind", "PostgreSQL", "GraphQL"],
    imageUrl: Parkspace,
  },
  {
    title: "CarCR",
    description:
      "An Online Car Rental Application designed to give an efficient and seamless book checkout experience for the Users. user-friendly and partner-friendly.",
    tags: ["React", "Express", "MongoDB", "Tailwind", "Node.js", "Socket.io"],
    imageUrl: car,
  },
  {
    title: "KarmaShopping",
    description:
      "An E-Commerce application that sells Sneakers which is designed to give a seamless shopping experience for users who are looking to buy Sneakers.",
    tags: ["MongoBD", "EJS", "Express", "Bootstrap", "Node.js", "Razor pay"],
    imageUrl: karma,
  },
  {
    title: "Wayanad Blog",
    description:
      "A Serene Escape to Nature's Embrace. It shows your post , character count and social media post limits.",
    tags: ["React", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "SQL",
  "Tailwind CSS",
  "Figma",
  "Bootstrap",
  "Framer Motion",
] as const;
