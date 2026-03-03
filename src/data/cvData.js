export const cvData = {
  name: 'Ashot Simonyan',
  heroTitlePrefix: 'Building scalable and high-performance',
  heroTitleGradient: 'front-end experiences',
  greeting: "Hello, I'm Ashot Simonyan",
  roleCycle: ['Senior Front-End Engineer', 'React.js / Next.js Specialist'],
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#project' },
    { name: 'Skills', href: '#skills' },
    { name: 'Connect', href: '#connect' }
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/ashot-simonyan',
      image: '/linkedin-image.png'
    },
    { name: 'Email', type: 'email', url: 'mailto:ashotsimonyan.tech@gmail.com' },
    { name: 'Phone', type: 'phone', url: 'tel:+17473327642' }
  ],
  about: {
    heading: 'Who am I?',
    profileName: 'Ashot Simonyan',
    statusCycle: ['Available for opportunities'],
    introRole: 'Senior Front-End Engineer',
    paragraph1:
      'with 7+ years of experience building scalable, high-performance web applications using React.js, TypeScript, and Next.js. I focus on creating clean, engaging, and reliable user experiences.',
    paragraph2:
      'I have deep expertise in state management with Redux, React Query, and RTK Query, plus strong experience in responsive design and front-end performance optimization for production systems.',
    paragraph3:
      'I have led front-end development across AI-driven real estate tools, no-code NFT platforms, and reusable component systems. I hold a Bachelor degree in Economics and Management from Yerevan State University and work in English, Armenian, and Russian.',
    interest: 'Scalable UI architecture, performance optimization, and AI/Web3 product experiences',
    availability: 'Open to senior front-end roles, remote opportunities, and high-impact product teams.'
  },
  projectSection: {
    kicker: 'Career impact across product teams',
    title: 'Experience',
    accent: 'Highlights'
  },
  projects: [
    {
      id: 1,
      title: 'PURLIN, CO. | Senior Front-End Engineer',
      tagline: 'Feb 2023 - Present',
      description:
        'Developing AI-driven tools for the US real estate market and improving engagement through scalable, high-performance front-end architecture.',
      images: { img1: '/projects/purlin_hero.png', img2: '/projects/purlin_portfolio.png' },
      points: [
        'Built AI-driven product features that improved user satisfaction',
        'Optimized architecture for performance and long-term scalability',
        'Collaborated with backend teams for API and front-end integration',
        'Core stack: TypeScript, React.js, Next.js, RTK Query, CSS Modules'
      ],
      tech: [
        { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React.js', image: '/Skills/react.png' },
        { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'RTK Query', image: '/Skills/redux.png' }
      ],
      links: {
        github: 'https://purlin.com/product/purlinsparks/4',
        live: 'https://purlin.com/'
      }
    },
    {
      id: 2,
      title: 'NFT STACK, LLC | Lead Front-End Engineer',
      tagline: 'Mar 2022 - Jan 2023',
      description:
        'Led front-end development of a no-code smart contract platform for artists and delivered interactive NFT-focused experiences.',
      images: { img1: '/projects/nftstack_hero.png', img2: '/projects/nftstack_portfolio.png' },
      points: [
        'Created a no-code smart contract platform to improve NFT accessibility',
        'Developed animated landing pages and minting experiences',
        'Improved user interaction across campaign and product flows',
        'Core stack: TypeScript, React.js, Gatsby.js, Redux, Web3.js, Ethers.js'
      ],
      tech: [
        { name: 'React.js', image: '/Skills/react.png' },
        { name: 'Gatsby.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
        { name: 'Redux', image: '/Skills/redux.png' },
        { name: 'Web3.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg' }
      ],
      links: {
        github: 'https://nftstack.info/',
        live: 'https://nftstack.info/'
      }
    },
    {
      id: 3,
      title: 'ULTRA LABS, LLC | Front-End Engineer',
      tagline: 'May 2021 - Feb 2022',
      description:
        'Built a website builder and reusable React components while improving the scalability and performance of user-facing features.',
      images: { img1: '/projects/ultralabs_hero.png', img2: '/projects/ultralabs_portfolio.png' },
      points: [
        'Developed reusable components for faster front-end delivery',
        'Contributed to a website builder platform using modern React practices',
        'Improved scalability and performance of core features',
        'Core stack: TypeScript, React.js, Next.js, Styled-components'
      ],
      tech: [
        { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'React.js', image: '/Skills/react.png' },
        { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'Styled-components', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg' }
      ],
      links: {
        github: 'https://ultralabs.am/our-portfolio/',
        live: 'https://ultralabs.am/'
      }
    },
    {
      id: 4,
      title: 'STDev, LLC | Front-End Engineer',
      tagline: 'Apr 2017 - Apr 2021',
      description:
        'Built responsive front-end applications with React and Redux, converting design systems into functional and maintainable code.',
      images: { img1: '/projects/stdev_hero.png', img2: '/projects/stdev_portfolio.png' },
      points: [
        'Developed responsive applications with React.js and Redux',
        'Translated design specs into production-ready UI implementations',
        'Improved usability across multiple products and interfaces',
        'Core stack: JavaScript, React.js, Redux, SASS/SCSS, Tailwind CSS'
      ],
      tech: [
        { name: 'JavaScript', image: '/Skills/js.png' },
        { name: 'React.js', image: '/Skills/react.png' },
        { name: 'Redux', image: '/Skills/redux.png' },
        { name: 'Tailwind CSS', image: '/Skills/tailwindcss.png' }
      ],
      links: {
        github: 'https://st-dev.com/portfolio',
        live: 'https://st-dev.com/'
      }
    }
  ],
  skillsHeading: 'Core Skills',
  skillsSubheading:
    'JavaScript, TypeScript, React.js, Next.js, Redux, RTK Query, and modern styling and UI tooling for scalable front-end systems.',
  skills: [
    { name: 'JavaScript', image: '/Skills/js.png' },
    { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React.js', image: '/Skills/react.png' },
    { name: 'Next.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Gatsby.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg' },
    { name: 'Redux / Redux Toolkit', image: '/Skills/redux.png' },
    { name: 'React Query / RTK Query', image: '/Skills/redux.png' },
    { name: 'CSS / SASS / SCSS', image: '/Skills/css.png' },
    { name: 'Styled-components', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-original.svg' },
    { name: 'CSS Modules / Stitches', image: '/Skills/css.png' },
    { name: 'Material UI / Ant Design', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
    { name: 'Tailwind CSS / Bootstrap', image: '/Skills/tailwindcss.png' },
    { name: 'Web3.js / Ethers.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/web3js/web3js-original.svg' },
    { name: 'Figma / Adobe XD / InVision', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Atlassian Suite', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { name: 'English / Armenian / Russian', image: 'https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/languages.svg' }
  ],
  connect: {
    headingTop: 'From architecture to user impact',
    headingBottom: 'I build reliable front-end products for scale',
    email: 'ashotsimonyan.tech@gmail.com',
    resumeUrl: '/Resume.pdf',
    availabilityLine:
      'Available for full-time senior front-end roles, remote opportunities, and contract collaborations.',
    focusLine: 'Focused on React.js, TypeScript, Next.js, performance, and user experience quality.'
  },
  assets: {
    logo: '/assets/At-Bqymh4jq.png',
    heroIllustration: '/illustration.png',
    profile: '/linkedin-image.png',
    connectMark: '/At.png',
    skillMask: '/assets/tool2-norqDBV9.png'
  }
};
