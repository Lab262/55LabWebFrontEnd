import Ember from 'ember';

export default Ember.Component.extend({

  actionBarComponentsActive: [false,false,false,false],

  contentObject: {
    mainPhraseTitle: "+CONEXÃO +COMPARTILHAMENTO +NETWORKING",
    mainPhraseDescription: "Ser uma lab community é escrever histórias dentro de uma comunidade plural feita da soma de pessoas e suas ideias que, por meio do contato constante e da troca de experiências, sonham, fazem e compartilham mais.",
    mainTitleButton:"SEJA MEMBRO",
    actionLeftTitle: "COMUNIDADE",
    actionCenter0Title: "ESPAÇO DE TRABALHO",
    actionCenter1Title: "CONHECIMENTO",
    actionRightTitle: "CONTATOS",
    backgroundImage: "/assets/images/home-background-image.jpg",
    imageLeft: "/assets/images/home-page-image-community.png",
    imageCenter0: "/assets/images/home-page-image-work-station.png",
    imageCenter1: "/assets/images/home-page-image-knowledge.png",
    imageRight: "/assets/images/home-page-image-contact.png"
  },

  leftDetailContentObject: {
    title: "+55Lab.Community: fazer e compartilhar juntos",
    description: "Somos uma comunidade virtual e real, construída a partir da força do ecossistema empreendedor brasileiro. A Lab.Community permite + trocas de ideias entre pessoas que juntas formam uma poderosa rede de negócios.",
    subTitle: "MEMBERSHIP",
    subDescription: "Encontre parceiros de negócios, clientes, explore todos os benefícios oferecidos, fique por dentro dos assuntos do seu interesse e se conecte a empresas, mentores e entusiastas do empreendedorismo.",
    options: ["Parceiro", "Franquiado", "Mentor", "INVESTIDOR"],
    itemActions: [{url: "/community", title: "Faça Parte", image: "/assets/images/work_space_button_store.png"}]
  },

  center0DetailContentObject: {
    title: "UM LUGAR PARA CHAMAR DE SEU",
    description: "Nossos espaços de trabalho foram planejados com foco em produtividade, estilo e na sua vontade de compartilhar experiências. Se você só tem a ideia ou já tem o empreendimento, mas ainda precisa de um local, acabou de achá-lo.",
    subTitle: "Planos",
    subDescription: "Nem todos os negócios são iguais e do mesmo tamanho. Por isso, nossa estrutura é dividida em três segmentos que, com certeza, atendem às suas necessidades. Compare e agende sua visita:",
    options: [],
    image:"/assets/images/names-spaces.png",
    itemActions: [{url: "/work-space", title: "Saiba Mais", image: "/assets/images/home_page_button_work_space.png"}]
  },

  center1DetailContentObject: {
    title: "COMPARTILHAR PARA FAZER VOCÊ CHEGAR MAIS LONGE",
    description: "Acreditamos que por meio da troca de diferentes experiências empreendedoras podemos fazer com que, cada vez mais, nossa comunidade expanda e conheça novos horizontes. Por isso, sempre promovemos Eventos e Cursos em áreas-chave na implementação de negócios.",
    subTitle: "Acelere.me",
    subDescription: "Conheça os eventos e cursos da nossa parceira em geração de conhecimento para você compartilhar, trocar, ou adquirir novas ideias empreendedoras.",
    options: [],
    itemActions: [{url:"/knowledge", title: "Saiba o que está rolando", image: "/assets/images/work_space_button_work.png"}]
  },

  rightDetailContentObject: {
    title: "PRECISA DE UM HELP OU QUER CONVERSAR COM A GENTE?",
    description: "Se tiver alguma dúvida, não precisa ter vergonha, pode falar com a gente. E, se quiser nos conhecer pessoalmente, é só marcar e vir nos visitar.",
    email: "hi@55lab.co",
    phone: "(61) 3217-6800",
    socialMedia: {twitter: "url", facebook: "url", instagram: "url"},
    copyright: "© +55 Lab. Todos os direitos reservados. 2016"
  },

  haveActionBarComponentActive:  Ember.computed('actionBarComponentsActive', function() {
    let haveActiveComponent = this.actionBarComponentsActive.filter(function(actionBarItemIsActive){
      return (actionBarItemIsActive === true);
    }).length > 0;

    return haveActiveComponent;
  }),

  actions: {
      selectItem(item) {
        if (this.actionBarComponentsActive[item] === true) {
          this.set('actionBarComponentsActive',[false,false,false,false]);
        } else {
          this.set('actionBarComponentsActive',[false,false,false,false]);
          this.set('actionBarComponentsActive.'+item, true);
        }
      },

      unselectItems() {
        this.set('actionBarComponentsActive',[false,false,false,false]);
      }
    }
});
