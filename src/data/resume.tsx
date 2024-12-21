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
      YouTube: {
        name: "YouTube",
        url: "https://youtube.com/@SprechenderTV",
        icon: Youtube,
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
      title: "duckyvid",
      href: "https://github.com/Sprechender/compressit.py",
      dates: "Dec 2024 - Now",
      active: true,
      description:
        "Developing a modular non linear video editing software.",
      technologies: [
        "Coming Soon",
      ],
      links: [
        {
          type: "Web",
          href: "https://duckyvid.github.io/",
          icon: <Globe className="icons" />,
        },
        {
          type: "Source",
          href: "https://github.com/duckyvid",
          icon: <Github className="icons" />,
        },
      ],
      image: "/duckyvid.png",
      video: "",
    },
    {
      title: "compressit.py",
      href: "https://github.com/Sprechender/compressit.py",
      dates: "Nov 2024 - Now",
      active: true,
      description:
        "Developed a python program to compress images and video to save disk space",
      technologies: [
        "Python",
        "FFmpeg",
        "Tkinter",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Sprechender/compressit.py",
          icon: <Github className="icons" />,
        },
      ],
      image: "",
      video: "/demopycompress.mp4",
    },
  ],
} as const;
