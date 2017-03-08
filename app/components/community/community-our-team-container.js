import Ember from 'ember';

export default Ember.Component.extend({
    contentMainObject:{
        title:"VENHA SER DA NOSSA EQUIPE",
        titleButton:"FAÇA PARTE"
    },
    
    contentFirstObject:{
        title:"PARCEIRO",
        description:"Sua empresa quer conversar com nossa comunidade? Tem algum produto ou serviço que possa interessar nossos membros? Não perca tempo, venha ser nosso parceiro!",
        image:"/assets/images/icon_partner.png"
    },

    contentSecondObject:{
        title:"FRANQUEADO",
        description:"Gostou do nosso projeto e quer levar a +55Lab.co para sua cidade? Temos algumas possibilidades que podem ser adequadas para atender especificamente sua comunidade.",
        image:"/assets/images/icon_ franchisee.png"
    },

    contentThirdObject:{
        title:"MENTOR",
        description:"Você se interessou por nossa comunidade e sabe que tem muita coisa para compartilhar e nos ensinar? Aqui também é o seu lugar. ",
        image:"/assets/images/icon_mentor.png"
    },

    contentFourthObject:{
        title:"INVESTIDOR",
        description:"Quer conhecer as empresas aceleradas, coworkers ativos e encontrar oportunidades de investimento em diversos segmentos? Fique antenado no dia a dia do nosso ecossistema.",
        image:"/assets/images/icon_investor.png"
    }
});
