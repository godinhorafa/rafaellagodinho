export const navItems = [
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bookly: space booking",
    des: "A booking platform for meeting rooms, courts and event halls, built to show how I design software end to end: a Laravel API around a framework-free domain, PostgreSQL that makes double bookings impossible, Stripe payments, a transactional outbox, a NestJS real-time service and a React dashboard, with tests at every layer and a 100% mutation score.",
    img: "/bookly.png",
    iconLists: ["/php.svg", "/laravel.svg", "/re.svg", "/ts.svg"],
    link: "https://github.com/godinhorafa/bookly",
  },
  {
    id: 2,
    title: "CarePulse: healthcare",
    des: "A patient management app: patients register, book and manage appointments with doctors, and admins schedule, confirm and cancel them, with SMS notifications. Built with Next.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://carepulse-healthcare-next.vercel.app/",
  },
  {
    id: 3,
    title: "University Library",
    des: "A full-stack library management system built with Next.js 15, TypeScript and PostgreSQL, giving students and administrators a smooth way to borrow and manage the library's books.",
    img: "/bookwise.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://university-library-prmoz7pnc.vercel.app/",
  },
  {
    id: 4,
    title: "Contracts Dashboard",
    des: "A responsive contract management app built with React, TypeScript and Vite, covering the whole contract lifecycle with real-time analytics and data visualisation.",
    img: "/dashboard.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://contracts-dashboard-theta.vercel.app/",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer · Atento",
    period: "Jul 2025 – Present · Remote",
    desc: "Leading the modernization of a legacy PHP monolith used by 30,000+ people daily: audited technical debt, defined coding standards and progressively extracted services, improving scalability without disrupting operations.\n\nOwning the system end to end, from scoping with stakeholders to architecture and CI/CD improvements that cut deployment lead time by 20%.\n\nDelivered white-label, multi-tenant BI with Apache Superset, React, PostgreSQL and SSO, and built an AI data-processing platform with Python, FastAPI, Azure OpenAI and queue-based workers.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Backend Engineer (contract) · Westwing",
    period: "Nov 2025 – Present · Remote",
    desc: "Developing and optimizing NestJS/Node.js microservices for high-traffic e-commerce checkout, order and inventory flows.\n\nDesigned event-driven processing with AWS SNS/SQS and S3 to scale critical order pipelines.",
    className: "md:col-span-2",
  },
  {
    id: 3,
    title: "Full Stack Software Engineer · Verum Digital",
    period: "Feb 2025 – Jul 2025 · Remote",
    desc: "Designed a multi-tenant contract management platform in Laravel with secure isolation of company and contract data.\n\nBuilt a Laravel API that standardizes Excel files, cutting manual data processing for construction project managers by about 60%, plus React interfaces for uploads, workspaces and approval workflows, shipped with Docker and Bitbucket Pipelines.",
    className: "md:col-span-2",
  },
  {
    id: 4,
    title: "Full Stack Software Engineer · Fadami",
    period: "Dec 2023 – Feb 2025 · Rio de Janeiro",
    desc: "Architected back-end services for a toll payment platform serving 500,000+ users and processing R$20M+ in transactions, with PIX and credit card payments.\n\nKept p95 response times below 200 ms under high load (Node.js integrated with a C#/.NET back end) using Redis caching and RabbitMQ, and built real-time revenue and traffic dashboards with React, TypeScript and Recharts.",
    className: "md:col-span-2",
  },
  {
    id: 5,
    title: "Full Stack Software Engineer · Freelance",
    period: "Sep 2023 – Nov 2023 · International clients",
    desc: "Delivered Laravel applications (Livewire, Sanctum) for time tracking and financial management, with MySQL/PostgreSQL and Tailwind CSS.\n\nImplemented Stripe subscriptions and recurring payments, and deployed to Linux servers with Nginx, Docker and GitHub Actions, taking deployments from hours to minutes.",
    className: "md:col-span-2",
  },
  {
    id: 6,
    title: "Frontend Software Engineer · Elumini IT",
    period: "Oct 2021 – Sep 2023 · Remote",
    desc: "Worked on the Oi Fibra sales portal, one of Brazil's largest telecom platforms, with millions of monthly visits.\n\nGrew organic traffic by 60% through technical SEO, Core Web Vitals and Next.js server-side rendering, and built Node.js caching middlewares that cut average page load time by 40%.",
    className: "md:col-span-2",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/godinhorafa",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://br.linkedin.com/in/rafaella-godinho",
  },
];
