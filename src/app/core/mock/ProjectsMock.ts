import { Project } from "../models/ProjectModel";

export const ProjectsMock : Project[] = [

    {
        title: "Website EVA",
        description: `
            Projeto com foco na apresentação da empresa EVA Agricultura Urbana, 
            uma empresa focada na produtividade e sustentabilidade do ambiente 
            urbano.
        `,
        githubVisibility: 'PRIVATE',
        status: 'LIVE',
        websiteLink: 'https://eva-au.com',
        stacks: [ {tool: 'Angular'}, {tool: 'Firebase'} ],
    },

    {
        title: "Aplicativo Minha EVA",
        description: `
            Projeto que tem como objetivo a gestão dos mais variados cultivos,
            permitindo um acompanhamento mais profundo das suas plantas,
            com funcionalidades como Criação de Tarefas e Suporte Especializado com IA.
        `,
        githubVisibility: 'PRIVATE',
        status: 'LIVE',
        websiteLink: 'https://play.google.com/store/apps/details?id=com.eva.app_minha_eva',
        stacks: [ {tool: 'Flutter'}, {tool: 'Firebase'} ],
    },
    
    {
        title: "Site NM - Nail Designer",
        description: `
            Projeto focado no agendamento de serviços voltados a manicure.
            Possui serviços como alongamento de unhas, blindagem, fibra de vidro, e muito mais.
        `,
        githubVisibility: 'PUBLIC',
        status: 'LIVE',
        githubRepo: 'https://github.com/PAFONTINHAS/Projeto-Nail-Designer.git',
        websiteLink: 'https://nm-nail-designer.web.app/',
        stacks: [ {tool: 'Angular'}, {tool: 'Firebase'} ],
    },
    {
        title: "Gestão de Agendamentos para o website Nail Designer",
        description: `
            Projeto open-source focado na gestão dos agendamentos de serviços, permitindo
            um controle de horários, relatórios mensais, visualização dos próximos agendamentos,
            e integração com o WhatsApp.
        `,
        githubVisibility: 'PUBLIC',
        status: 'LIVE',
        githubRepo: 'https://github.com/PAFONTINHAS/Projeto-Nail-Designer.git',
        stacks: [ {tool: 'Flutter'}, {tool: 'Firebase'} ],
    },
    {
        title: "Website CERENA TEA",
        description: `

            Projeto com o foco na migracação da arquitetura do site CERENA para uma mais robusta,
            com modernização de componentes e redesign de seções críticas do site, também melhorando
            a perfomance do site e diminuindo o custo de hospedagem do site para a empresa.
            
        `,
        githubVisibility: 'PUBLIC',
        status: 'LIVE',
        githubRepo: 'https://github.com/PAFONTINHAS/Projeto-Cerena-TEA.git',
        websiteLink: 'https://cerenatea.com.br/',
        stacks: [ {tool: 'Flutter'}, {tool: 'Firebase'} ],
    },
    {
        title: "Projeto MMTADS",
        description: `

            Projeto facultativo disponibilizado pela Universidade Federal do Paraná (UFPR) 
            focado no desenvolvimento de um sistema de manutenção de equipamentos, utilizando 
            ferramentas e tecnologias conhecidas no mercado. Projeto ministrado pelo professor
            Dr. Razer Anthon Nizer Montano
        `,
        githubVisibility: 'PUBLIC',
        status: 'LAB',
        githubRepo: 'https://github.com/PAFONTINHAS/Trabalho-Pratico-WEB-II.git',
        stacks: [ 
            {tool: 'Angular'}, 
            {tool: 'JAVA'}, 
            {tool: 'Spring Boot'}, 
            {tool: 'MySQL'}, 
            {tool: 'Padrões REST'}

        ],
    },
    {
        title: "Projeto BANTADS",
        description: `

            Projeto facultativo disponibilizado pela Universidade Federal do Paraná (UFPR) 
            focado no desenvolvimento de um sistema bancário, utilizando padrões de arquitetura 
            como Arquitetura de Microsserviços, bem como padrões de projetos como CQRS, SAGA e ApiComposition, 
            utilizando Docker para compilação e containerização da aplicação.
            Projeto ministrado pelo professor Dr. Razer Anthon Nizer Montano
        `,
        githubVisibility: 'PUBLIC',
        status: 'LAB',
        githubRepo: 'https://github.com/cissamil/TrabalhoDAC.git',
        stacks: [ 
            {tool: 'Angular'}, 
            {tool: 'JAVA'}, 
            {tool: 'Spring Boot'}, 
            {tool: 'PostgreSQl'}, 
            {tool: 'MongoDB'},
            {tool: 'Arquitetura de Microsserviços'},
            {tool: 'Padrões REST'},
            {tool: 'Docker'}
        ],
    },
    {
        title: "Projeto DevMarket",
        description: `

            Projeto facultativo disponibilizado pela Universidade Federal do Paraná (UFPR) 
            focado no desenvolvimento de um sistema de marketplace, com foco na gestão e 
            implementação de pipelines, containerização e deploy da aplicação, 
            possuindo equipes que cuidavam das tarefas, pipelines e arquiteturas, 
            aplicando conceitos conhecidos como DevOps
            Projeto ministrado pelo professor Dr. Alexander Robert Kutzke
        `,
        githubVisibility: 'PUBLIC',
        status: 'LAB',
        websiteLink: 'https://ds881-2026-alexkutzke.github.io/ds881-devmarket-2026-1-t/',
        githubRepo: 'https://github.com/ds881-2026-alexkutzke/ds881-devmarket-2026-1-t.git',
        stacks: [ 
            {tool: 'REACT'}, 
            {tool: 'Vite'}, 
            {tool: 'Typescript'}, 
            {tool: 'Docker'},
            {tool: 'Github Actions'}
        ],
    },
]