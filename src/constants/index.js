import {
    logo,
    backend,
    creator,
    mobile,
    web,
    github,
    menu,
    close,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    mongodb,
    nodejs,
    reactjs,
    redux,
    tailwind,
    typescript,
    threejs,
    brewhemia,
    deltav,
    doordash,
    mercy,
    jobit,
    tripguide,
    sedgwick,
    unitypoint,
    socioRealm,
    comingSoon,
    librarySite,
    eCommerce
} from '../assets';

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const services = [
    {
      title: "FrontEnd Developer",
      icon: web,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "BackEnd Developer",
      icon: backend,
    }
  ];
  


  const testimonials = [
    {
      testimonial:
        "Coming Soon...",
      name: "Name 1",
      designation: "position",
      company: "Company Name",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      testimonial:
        "Coming soon...",
      name: "Name 2",
      designation: "Position",
      company: "Company Name",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      testimonial:
        "Coming Soon...",
      name: "Name 3",
      designation: "position",
      company: "Company Name",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];

  const projects = [
    {
      name: "SocioRealm",
      description:
        "SocioRealm is a social media app that allows users to connect with their friends, share posts, and much more. This repository contains the frontend part of the application, built with React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: socioRealm,
      source_code_link: "https://github.com/brosmar18/socioRealm-client",
    },
    {
      name: "Library Website",
      description:
        "This is a software development project that showcases a library. The project demonstrates the use of HTML and CSS to create a visually appealing and responsive design.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: librarySite,
      source_code_link: "https://github.com/brosmar18/se_project_library",
    },
    {
      name: "E-Commerce Website with Stripe",
      description:
        "Ecommerce Store's client-side application built with React and other modern web technologies. This project is a web storefront that showcases products, provides product details, and facilitates the checkout process.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "stripe",
          color: "green-text-gradient",
        },
        {
          name: "materialUI",
          color: "blue-text-gradient",
        },
      ],
      image: eCommerce,
      source_code_link: "https://github.com/brosmar18/ecommerce-client",
    },
  ];

  export { services, testimonials, projects };