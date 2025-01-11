import { HomeIcon, NotebookIcon, Github, Youtube, Mail, Globe } from "lucide-react";

export const DATA = {
  name: "Marcel Schreiber (Sprechender)",
  initials: "MS",
  url: "https://marcelschreiber.de",
  location: "Berlin, DE",
  locationLink: "https://www.google.com/maps/place/berlin",
  description:
    "Programmer, YouTuber, Gamer. I love building things.",
  summary:
    "I program since the beginning of 2020. I just love to make stuff.",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "C++",
    "C#",
    "Unity",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/socials", icon: Globe, label: "Socials" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sprechender@proton.me",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sprechender",
        icon: Github,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Mail,

        navbar: false,
      },
    },
  },

  projects: [
    {
      title: "imageconvert",
      href: "https://marcelschreiber.de/imageconvert",
      dates: "Nov 2024",
      active: true,
      description:
        "Developed a web app that converts images to different formats",
      technologies: [
        "NodeJS",
        "Next.js",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Web",
          href: "https://marcelschreiber.de/imageconvert",
          icon: <Globe className="icons" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sprechender/imageconvert",
          icon: <Github className="icons" />,
        },
      ],
      image: "",
      video: "/demo_imageconvert.mp4",
    },
    {
      title: "videocompress",
      href: "https://marcelschreiber.de/videocompress",
      dates: "Nov 2024",
      active: true,
      description:
        "Developed a web app that compresses videos with ffmpeg (WebAssembly)",
      technologies: [
        "NodeJS",
        "Next.js",
        "Tailwind CSS",
        "FFmpeg",
      ],
      links: [
        {
          type: "Web",
          href: "https://marcelschreiber.de/videocompress",
          icon: <Globe className="icons" />,
        },
        {
          type: "Source",
          href: "https://github.com/Sprechender/videocompress",
          icon: <Github className="icons" />,
        },
      ],
      image: "",
      video: "/demo_videocompress.mp4",
    },
  ],
} as const;
