// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of projects that I have worked on over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "These are the courses I have taught over the years.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is my Curriculum Vitae. You can download it by clicking the button on the top right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-successfully-defended-my-ph-d-dissertation",
          title: 'Successfully defended my Ph.D. dissertation! 🎓',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-04-23-phd-defense/";
            },},{id: "news-started-a-research-scientist-position-at-nyu-tandon-school-of-engineering-computer",
          title: 'Started a Research Scientist Position at NYU Tandon School of Engineering! :computer:',
          description: "",
          section: "News",},{id: "news-presented-a-poster-at-the-2024-ieee-engineering-medicine-and-biology-conference",
          title: 'Presented a Poster at the 2024 IEEE Engineering Medicine and Biology Conference 📊...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024-07-17-embc/";
            },},{id: "news-started-an-adjunct-professor-position-at-nyu-tandon-school-of-engineering-computer",
          title: 'Started an Adjunct Professor Position at NYU Tandon School of Engineering! :computer:',
          description: "",
          section: "News",},{id: "projects-wireless-earphone-based-monitoring-of-breathing-exercises",
          title: 'Wireless Earphone-based Monitoring of Breathing Exercises',
          description: "This work proposes using commodity earphones for real-time breathing channel and phase detection for breathing therapy compliance monitoring.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/audio-breathing/";
            },},{id: "projects-remote-control-of-a-dialysis-machine-using-a-human-robot-interaction",
          title: 'Remote Control of a Dialysis Machine using a Human-Robot Interaction',
          description: "In this work we propose an emergency, non-invasive remote monitoring and control response system to retrofit dialysis machines with robotic manipulators for safely supporting the treatment of patients with acute kidney disease.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/covid-project/";
            },},{id: "projects-embodied-agents-using-a-turtlebot3",
          title: 'Embodied Agents using a Turtlebot3',
          description: "Understanding embodied agents with a Turtlebot3 and ROS.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/robot-llm/";
            },},{id: "projects-using-capability-maps-and-virtual-reality-for-occupational-therapy",
          title: 'Using Capability Maps and Virtual Reality for Occupational Therapy',
          description: "This work proposes using arm kinematic modeling and capability maps to allow a VR system to understand a user’s physical capability and limitation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rom-capability/";
            },},{id: "projects-range-of-motion-assessment-using-a-digital-voice-assistant",
          title: 'Range of Motion Assessment using a Digital Voice Assistant',
          description: "This work proposes using a Digital Voice Assistant for Range of Motion measurement by utilizing 2D pose estimation techniques to estimate 3D limb pose for specific exercises.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rom-dva/";
            },},{id: "projects-wearable-pendant-sensor-for-therapy-compliance",
          title: 'Wearable Pendant Sensor for Therapy Compliance',
          description: "A wearable pendant sensor to monitor compliance with range of motion lymphatic health exercise",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rom-wps/";
            },},{id: "projects-a-minimalistic-puppeteering-robot",
          title: 'A minimalistic puppeteering robot',
          description: "A minimalistic puppeteering robot that can convey human emotions. The robot was featured in the theatrical production Rescate at the La Moneda Cultural Center, Chile.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/speaker-project/";
            },},{id: "projects-simulating-a-swarm-of-robots-in-gazebo",
          title: 'Simulating a Swarm of Robots in Gazebo',
          description: "In this project, I simulated a swarm of robots in Gazebo. The robots were controlled using a decentralized control algorithm that allowed them to move in a formation while avoiding obstacles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/swarm-simulation/";
            },},{id: "projects-werable-inertial-sensors-for-exergames",
          title: 'Werable Inertial Sensors for Exergames',
          description: "This work presents the design and development of wearable inertial sensors (WIS) for real-time simultaneous triplanar motion capture of the upper extremity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wise/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%68%61%73%73%61%6D.%77%61%7A%69%72@%69%62%62%6C%61%62.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/hassamwazir", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/hassam-wazir", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4930-3259", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=hBetThYAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
