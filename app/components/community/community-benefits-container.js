import Ember from 'ember';

export default Ember.Component.extend({
    contentMainObject:{
        title:"MOTIVOS DE SOBRA PARA SE CONECTAR",
        firstButton:"SEJA MEMBRO",
        secondButton:"CONHEÇA NOSSOS ESPAÇOS"
    },
    
    contentObjectLeftUp: {
        title: "NETWORKING",
        description: "Conexão on e offline com uma base que já começa com mais de 400 empreendedores, mentores, colaboradores e investidores que compartilham ideias, experiências e oportunidades de trabalho.",
        image:"./assets/images/icon_network.png"
    },

    contentObjectRightUp: {
        title: "ACESSO AOS ESPAÇOS +55LAB",
        descriptionOne: "Acesso flexível aos espaços +55Lab.co: como membro, você terá 01 hora em ",
        linkOne:"meeting room ou open desk",
        descriptionTwo: " por mês e ficará por dentro de tudo o que rola nos espaços de trabalho com exclusividade.",
        image:"./assets/images/icon_space.png"
    },

    contentObjectLeftDown: {
        title: "EVENTOS EXCLUSIVOS",
        description: "A +55Lab.co promove uma série de eventos sociais, palestras, programas de capacitação, workshops e cursos nos quais você pode adquirir conhecimento e compartilhar ideias sobre o universo empreendedor.",
        image:"./assets/images/icon_events.png"
    },

    contentObjectRightDown: {
        title: "DESCONTOS ESPECIAIS",
        descriptionOne: "Nossos membros tem acesso a uma rede de descontos em produtos e serviços que ajudam o empreendedor a cuidar melhor de si, da sua empresa e de seus colaboradores. Planos de saúde, os mais diversos tipos de seguros e ferramentas de comunicação digital são alguns dos benefícios que estão disponíveis. Acompanhe no ",
        linkOne:"blog",
        descriptionTwo: " as novidades.",
        image:"./assets/images/icon_discounts.png"
    }

});
