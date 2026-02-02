export const pt = {
    header: [
        "Início", "Sobre", "Catálogo", "Contato", "Whatsapp"
    ],
    hero: {
        title1: {
            start: "Terços artesanais feitos com ",
            highlight1: "fé ",
            mid: "e ",
            highlight2: "carinho",
            end: ".",
        },
        description:
            "Terços artesanais, duráveis e belos, feitos com fé e carinho para honrar a Jesus e a Santíssima Virgem.",
        button1: "Ver mais",
        button2: "Contato",
        verse: {
            text1: "Rezem o terço todos os dias...",
            text2: "-Virgem de Fátima"
        }
    },
    about: {
        title: "Sobre",
        texts: [
            {
                title: {
                    start: "Olá, eu sou ",
                    highlight1: "Ana Elisa",
                    mid: "",
                    highlight2: "",
                    end: ". [ 1 ]"
                },
                text: "Sempre acreditei que a fé se vive nas pequenas coisas, nos gestos simples e na forma como escolhemos enxergar a vida. É em Deus que encontro calma, direção e força, e é essa confiança que guia quem eu sou e tudo o que faço."
            },
            {
                title: {
                    start: "Cada ",
                    highlight1: "Terço ",
                    mid: "que produzo é feito em ",
                    highlight2: "oração",
                    end: ". [ 2 ]"
                },
                text: "Para mim, ele não é apenas um objeto, mas um símbolo de devoção, um instrumento de encontro com Deus e uma forma de espalhar a paz que sinto enquanto crio. Em cada detalhe coloco carinho, intenção e fé, para que quem receba também sinta essa presença."
            },
            {
                title: {
                    start: "A ",
                    highlight1: "Divinum Rosarium ",
                    mid: "nasceu com uma ",
                    highlight2: "missão",
                    end: ". [ 3 ]"
                },
                text: "Mais do que uma loja, é uma forma de unir trabalho e propósito: levar adiante a fé, a esperança e o amor que me acompanham em cada terço. Meu desejo é que cada pessoa que o receba se sinta acolhida, fortalecida e mais próxima de Deus."
            },
        ],
    },
    case: {
        title: "Trabalho de conclusão de curso",
    },
    project: {
        options: [
            {
                title: {
                    start: "Problema",
                    highlight: "?",
                },
                text: "Um evento com muitas pessoas e sem sistema para controlar clientes, despesas ou receitas, apenas folhas de papel que inspiram nenhuma confiança. Um verdadeiro caos operacional em uma das maiores escolas do estado de São Paulo.",
            },
            {
                title: {
                    start: "Solução",
                    highlight: "!",
                },
                text: "Um sistema integrado para compras feitas nas lojas do evento e controle de clientes e créditos. Foi essa nossa solução com a criação do Viva Pay, um sistema que atendeu mais de 5.000 clientes em um evento de três dias no início."
            },
            {
                title: {
                    start: "Resultado",
                },
                text: "O projeto foi concluído dois meses antes do evento e utilizado com sucesso em um ambiente de produção real. Durante três dias, o sistema atendeu mais de 5.000 clientes, lidando com transações reais e fluxos operacionais. O ciclo completo de desenvolvimento levou aproximadamente seis meses, desde o conceito inicial até a entrega final.",
            },
        ],
        architecture: {
            title: "Arquitetura",
            description: "O projeto foi dividido em três sistemas:",
            texts: [
                "[ 1 ]. API autenticada para comunicação e segurança entre as outras duas partes do sistema, para transferência de crédito do cliente para compras nas lojas do evento.",
                "[ 2 ]. Software de gestão responsável por gerenciar eventos, controlar caixa, lojas, vendedores e controle de crédito do cliente.",
                "[ 3 ]. Aplicação para gerenciamento de lojas, usada pelos vendedores para verificar saldos, debitar e verificar informações da loja, como valores arrecadados e histórico de transações.",
                "Além do sistema principal, também foi desenvolvido um site de apresentação, disponibilizando o sistema para download e explicando como ele funciona.",
            ],
        },
        stack: {
            title: "Stack",
            technologies: [
                { name: "Design", icon: "fa-pen-nib", technologies: ["Figma"] },
                {
                    name: "Management",
                    icon: "fa-file-alt",
                    technologies: ["Notion", "Docs"],
                },
                {
                    name: "Database",
                    icon: "fa-database",
                    technologies: ["PostgreSQL", "PgAdmin4"],
                },
                { name: "Backend", icon: "fa-server", technologies: ["AdonisJS"] },
                {
                    name: "Frontend",
                    icon: "fa-laptop-code",
                    technologies: ["Vue3", "IonicJS", "JavaFx"],
                },
            ],
        },
    },
    contact: {
        contact_info: {
            title: "Informações de Contato",
            infos: ["Email", "Telefone"]
        },
        social_info: "Informações Sociais",
        form: {
            title: {
                start: "Vamos trabalhar",
                highlight: "juntos",
            },
            inputs: ["Nome *", "Email *", "Seu assunto *", "Sua mensagem *"],
            button: "Enviar mensagem",
        },
    },
};
