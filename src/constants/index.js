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
    carrent,
    jobit,
    tripguide,
    sedgwick,
    unitypoint,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Github",
      icon: github,
    },

  ];

  const experiences = [
    {
      title: "Software Development Instructor",
      company_name: "DeltaV Code School",
      icon: deltav,
      iconBg: "#E6DEDD",
      date: "April 2023 - Present",
      points: [
        "Instruct students in the fundamentals of programming, including the basics of HTML and CSS, providing a solid foundation for their future in software development.",
        "Deliver engaging lectures and hands-on lessons that demystify the role of a software developer, highlighting the tasks, responsibilities, and opportunities in the field.",
        "Guide students through practical exercises and projects, fostering problem-solving skills and creativity, essential for successful software development.",
        "Evaluate student progress and provide constructive feedback, ensuring they grasp core concepts and are prepared for more advanced topics in software development.",
      ],
    },
    {
      title: "Sr. Disability Representative",
      company_name: "Sedgwick",
      icon: sedgwick,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - December 2022",
      points: [
        "Analyzes, approves, and authorizes assigned claims and determines benefits due according to a disability plan",
        "Reviews and analyzes complex medical information (i.e. diagnostic tests, office notes, operative reports, etc.) to determine if the claimant is disabled as defined by the disability plan.",
        "Determines benefits due, makes timely claims payments/approvals and adjustments for workers compensation, Social Security Disability Income (SSDI), and other disability offsets.",
        "Coordinates investigative efforts ensuring appropriateness; provides a thorough review of contested claims.",
      ],
    },
    {
      title: "Food Delivery Driver",
      company_name: "DoorDash",
      icon: doordash,
      iconBg: "#E6DEDD",
      date: "Jan 2020 - Present",
      points: [
        "Loading, transporting, and delivering items to clients or businesses in a safe, timely manner. · Reviewing orders before and after delivery to ensure that orders are complete, the charges are correct, and the customer is satisfied.",
        "Providing excellent customer service, answering questions, and handling complaints from clients.",
        "Adhering to assigned routes and following time schedules.",
        "biding by all transportation laws and maintaining a safe driving record.",
      ],
    },
    {
      title: "Patient Access Technician",
      company_name: "Mercy Medical Center",
      icon: mercy,
      iconBg: "#383E56",
      date: "Oct 2019 - Nov 2020",
      points: [
        "Performed confidential patient/family interview to secure required demographic and insurance information",
        "Secured signatures for the required organizational forms and scan documents per established protocol",
        "Generated all documents and patient identification materials required by the service the patient is receiving",
        "Verify insurance materials and identification",
      ],
    },
    {
      title: "Emergency Technician",
      company_name: "Unitypoint St. Luke's Hospital",
      icon: unitypoint,
      iconBg: "#E6DEDD",
      date: "Oct 2017 - May 2019",
      points: [
        "Partnered with RN and other healthcare team members to provide adequate patient care to meet the goals of the care plan.",
        "Demonstrated skill and competency on EKGs, Urinary Catheter Insertion, Glucose Checks, and other technical tasks.",
        "Assisted in the process of registering patients.",
        "Performed and assisted in all tasks directed by RN and other health care providers under the PCT scope of practice.",
      ],
    },
    {
      title: "Kitchen Staff",
      company_name: "Brewhemia",
      icon: brewhemia,
      iconBg: "#383E56",
      date: "Oct 2016 - Oct 2017",
      points: [
        "Responsible for food preparation, including vegetables, various types of meats, and daily specials",
        "Worked alongside other staff members to provide proper meal presentations.",
      ],
    },
  ];

  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];

  export { services, technologies, experiences, testimonials, projects };