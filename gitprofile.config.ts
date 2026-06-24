// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'anish-kumar1999', // Your GitHub username
  },
  base: '/', // Since your repo is anish-kumar1999.github.io
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'updated',
        limit: 10,
        exclude: {
          forks: false,
          projects: [], // Add repos to exclude if needed
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Featured Projects',
      projects: [
        {
          title: 'HCFX - Foreign Exchange Portal',
          description: 'Foreign exchange portal built with WordPress, integrated with Salesforce for user onboarding and API-driven data synchronization.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Chartprime - Subscription Management',
          description: 'Integrated Chargebee subscription management with WordPress. Built custom subscription UI for plan and add-on management beyond default capabilities.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Nory - HubSpot UI Extension',
          description: 'Custom HubSpot UI Extension built with React. Serverless backend functions in Node.js within HubSpot\'s ecosystem for workflow automation.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'Nordics NG - Serverless Onboarding',
          description: 'Serverless onboarding workflow using AWS Lambda triggered by Webflow webhooks. Automated customer creation, subscription setup across Chargebee and Norwegian banking systems.',
          imageUrl: '',
          link: '',
        },
        {
          title: 'RAG-Based Proposal Generation System',
          description: 'In-house RAG system leveraging LLMs, built with Python (FastAPI), Next.js, LangChain, OpenAI APIs, and vector databases including ChromaDB and OpenSearch.',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Anish Kumar - Full-Stack Developer | SaaS Builder | AI Chatbots & Automation',
    description: 'Full-Stack Developer with 5 years experience in PHP, Laravel, Node.js, React.js, Python, AI/LLM, and cloud integrations. Building scalable web apps, APIs, and automation solutions.',
    imageURL: '',
  },
  social: {
    linkedin: 'anish-kumar1999', // Update with your LinkedIn username
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    discord: '',
    telegram: '',
    website: '',
    phone: '+918054877087',
    email: 'akbhuria0786@gmail.com',
  },
  resume: {
    fileUrl: '', // Upload your PDF to the repo and add path here
  },
  skills: [
    // Backend Technologies
    'PHP',
    'Laravel',
    'CodeIgniter',
    'Node.js',
    'Python',
    'FastAPI',
    'Core PHP',
    'REST APIs',
    'Webhooks',
    'Sequelize',
    'AWS Lambda',
    'Serverless Architecture',
    
    // Frontend Technologies
    'HTML5',
    'CSS3',
    'JavaScript',
    'jQuery',
    'AJAX',
    'React.js',
    'Next.js',
    'Bootstrap',
    
    // CMS & Platforms
    'WordPress',
    'Shopify',
    'Webflow',
    'Headless CMS',
    
    // Databases
    'MySQL',
    'MongoDB',
    'VectorDB',
    'ChromaDB',
    'OpenSearch',
    
    // AI & LLM
    'LLM',
    'LangChain',
    'RAG Systems',
    'OpenAI APIs',
    
    // CRM & Integrations
    'HubSpot CRM',
    'HubSpot Developer',
    'GoHighLevel',
    'Salesforce',
    'Chargebee',
    'Stripe',
    'Payment Gateways',
    
    // DevOps & Hosting
    'AWS S3',
    'Cloudways',
    'DigitalOcean',
    'Hostinger',
    'GoDaddy',
    'Git',
    'GitHub',
    'Bitbucket',
  ],
  experiences: [
    {
      company: 'Techglock Software Solutions',
      position: 'Web Developer',
      from: 'November 2021',
      to: 'November 2025',
      companyLink: 'https://techglock.com',
    },
    {
      company: 'Amrsoftec',
      position: 'Junior PHP Developer',
      from: 'July 2021',
      to: 'October 2021',
      companyLink: '',
    },
    {
      company: 'Amrsoftec',
      position: 'PHP Intern',
      from: 'March 2021',
      to: 'June 2021',
      companyLink: '',
    },
  ],
  certifications: [
    // Add any certifications you have
  ],
  educations: [
    {
      institution: 'Chandigarh University',
      degree: 'Master of Computer Applications (MCA)',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Guru Nanak Dev University (GNDU)',
      degree: 'Bachelor of Computer Applications (BCA)',
      from: '2017',
      to: '2020',
    },
  ],
  publications: [],
  blog: {
    source: 'dev',
    username: '', // Leave empty to hide blog section
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dark',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,
  enablePWA: true,
};

export default CONFIG;
