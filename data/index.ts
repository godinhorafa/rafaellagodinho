export const navItems = [
  { name: "Sobre", link: "#sobre" },
  { name: "Projetos pessoais", link: "#projects" },
  { name: "Contato", link: "#contact" },
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
    title: "Carepulse (Healthcare)",
    des: "Uma aplicação de gerenciamento de pacientes na área da saúde que permite aos pacientes registrar-se, agendar e gerenciar suas consultas com médicos de forma fácil, com ferramentas administrativas para agendar, confirmar e cancelar consultas, além de notificações por SMS, tudo construído usando Next.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://carepulse-healthcare-next.vercel.app/",
  },
  //{
  //  id: 2,
  //  title:
  //    "Laravel 11 + React Full Stack App with Inertia - Project Management App",
  //  des: "Uma aplicação simples de gerenciamento de projetos, construída utilizando Laravel 11 no backend e React no frontend. A plataforma permite que os usuários criem e gerenciem projetos. O sistema inclui funcionalidades como autenticação de usuários, criação de tarefas, oferecendo uma solução completa para o controle de projetos em ambientes colaborativos.",
  //  img: "/p2.svg",
  //  iconLists: ["/php.svg", "/laravel.svg", "/re.svg", "/js.svg"],
  //  link: "https://github.com/godinhorafa",
  //},
  {
    id: 2,
    title: "University Library Management System",
    des: "Um sistema moderno de gerenciamento de biblioteca full-stack construído com Next.js 15, TypeScript e PostgreSQL. Este sistema oferece uma experiência sem interrupções tanto para estudantes quanto para administradores, permitindo o gerenciamento eficiente dos recursos da biblioteca.",
    img: "/bookwise.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://university-library-prmoz7pnc.vercel.app/",
  },
  {
    id: 3,
    title: "Contracts Dashboard",
    des: "Uma aplicação moderna e responsiva para gestão de contratos, construída com React, TypeScript e Vite. O sistema oferece uma solução completa para o gerenciamento do ciclo de vida de contratos com análises em tempo real e visualização de dados.",
    img: "/dashboard.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://contracts-dashboard-theta.vercel.app/",
  },
  // {
  //   id: 3,
  //   title: "API de Transações",
  //   des: "Uma API RESTful para gerenciamento de transações financeiras construída com Node.js, Fastify e Knex.",
  //   img: "/p2.svg",
  //   iconLists: ["/php.svg", "/laravel.svg", "/re.svg", "/js.svg"],
  //   link: "https://github.com/godinhorafa/rest-api-fastify",
  // },
  // {
  //   id: 4,
  //   title: "Book Review Laravel App",
  //   des: "This project is a book review application developed using PHP with the Laravel framework and containerized using Docker. The goal is to provide a platform where users can review books, see the most popular and highest-rated books, and interact with the features of a book review system.",
  //   img: "/p2.svg",
  //   iconLists: ["/php.svg", "/laravel.svg", "/re.svg", "/js.svg"],
  //   link: "https://github.com/godinhorafa/book-review-laravel",
  // },
  // {
  //   id: 5,
  //   title: "Sistema de Gerenciamento de Viagens - Golang",
  //   des: "Este é um sistema de gerenciamento de viagens desenvolvido em Go, que permite criar e gerenciar viagens em grupo, incluindo participantes, atividades e links relacionados.",
  //   img: "/p2.svg",
  //   iconLists: ["/php.svg", "/laravel.svg", "/re.svg", "/js.svg"],
  //   link: "https://github.com/godinhorafa/api-travel-golang",
  // },
];

export const workExperience = [
  {
    id: 1,
    title: "Desenvolvedor Full Stack - Fadami",
    desc: "Liderei o desenvolvimento full stack de uma plataforma inovadora de gestão de débitos de pedágio, incluindo portal público para pagamentos e backoffice administrativo com dashboards analíticos. \n\n Implementei soluções técnicas robustas para um website moderno, responsivo e de alta performance e dashboards interativos em React com visualizações gráficas para análise de dados de tráfego e receita, permitindo monitoramento em tempo real de métricas de negócio. \n\n Desenvolvi arquitetura de microserviços em Node.js e implementei APIs RESTful escaláveis, suportando milhares de consultas diárias e integrando sistemas de pagamento via cartão de crédito e PIX, além de middlewares robustos para autenticação e processamento de dados.",
    className: "md:col-span-2",
  },
  {
    id: 2,
    title: "Desenvolvedor Freelancer",
    desc: "Arquitetei e desenvolvi plataformas de e-commerce completas, implementando desde o carrinho de compras até sistemas de pagamento, resultando em experiências de compra fluidas e seguras para os usuários finais. \n\n Liderei o desenvolvimento de landing pages otimizadas para conversão, utilizando VueJs e Livewire, juntamente com Laravel para criar interfaces responsivas e dinâmicas que elevaram as taxas de conversão dos clientes. \n\nColaborei diretamente com stakeholders na definição de requisitos e arquitetura de soluções, mantendo projetos alinhados com objetivos de negócio e prazos estabelecidos.",
    className: "md:col-span-2",
  },
  {
    id: 3,
    title: "Analista de Desenvolvimento - Oi Fibra",
    desc: "Desempenhei papel fundamental no desenvolvimento e otimização do portal de vendas Oi Fibra (www.oi.com.br/fibra), uma das plataformas de telecomunicações mais importantes do Brasil. \n\n Desenvolvi interfaces responsivas e componentes reutilizáveis com TypeScript, ReactJS e NextJS, garantindo consistência visual e alta performance. Adotei o Design System do projeto, assegurando padronização de estilo e agilidade no desenvolvimento de novas funcionalidades. \n\n Criei middlewares em Node.js para processamento de dados e cache, além de integrações via REST APIs para comunicação com diversos serviços, melhorando significativamente a performance do sistema.",
    className: "md:col-span-2",
  },
  {
    id: 4,
    title: "Programador de Sistemas - UNIFOA",
    desc: "Desenvolvi formulários de pesquisa e extensão utilizando PHP e C# no backend e JavaScript, HTML e CSS no frontend, integrando sistemas de gerenciamento de helpdesk para otimizar a comunicação entre usuários e equipe de suporte. \n\n Implementei sistemas de controle robustos para funcionários e alunos, facilitando o gerenciamento de permissões, acessos e recursos administrativos, além de melhorar significativamente a eficiência operacional em múltiplos departamentos. \n\n Participei de todas as fases do ciclo de vida dos sistemas, desde o levantamento de requisitos até a implementação, com uma abordagem colaborativa junto a outras equipes técnicas e de negócios.",
    className: "md:col-span-2",
  },
  {
    id: 5,
    title: "Estagiário de TI",
    desc: "Ofereci assistência direta a alunos, ex-alunos, professores e funcionários em questões ligadas a sistemas acadêmicos, como bolsas de estudo, consulta e lançamento de notas, garantindo a continuidade das operações e o bom funcionamento dos processos administrativos e acadêmicos. \n\n Atuei na resolução de chamados técnicos, realizando diagnósticos e propondo soluções eficazes para otimizar a experiência dos usuários com os sistemas institucionais.",
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
