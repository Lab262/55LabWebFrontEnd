import Ember from 'ember';
import ParseHelpers from 'a55-lab-institutional-web/helpers/parse-helpers'; 

export default Ember.Component.extend({

    contentObject: {
      firstOpinionObject:{
          name:"Hendrik Van Deventer",
          position:"HEDCO Global",
          opinion:"“A vantagem de espaços de coworking para uma nova empresa ou alguém que está chegando ao país, é que você encontra todos os serviços adicionais que possa precisar”",
          image:"./assets/images/work-space-hendrik-opinion-image.jpg"
      },

      secondOpinionObject:{
          name:"Anaisa",
          position:"Head Marketing Cabify",
          opinion:"“Acho que com todo mundo, em alguma coisa eles me acrescentaram sabe, seja em negócio mesmo fechado, seja só de trocar uma ideia e acrescentar pro produto”",
          image:"./assets/images/work-space-anaisa-opinion-image.jpg"
      },
    },

    houseContentObject: {

      firstOpinionObject:{
          name:"Guilherme Grande",
          position:"Videomaker",
          opinion:"“O ambiente daqui propicia negócios, esse networking que eu faço aqui, ele tem um diferencial em relação a outros profissionais da minha área, daí eu saio ganhando nisso”",
          image:"./assets/images/work-space-guilherme-opinion-image.jpg"
      },

      secondOpinionObject:{
          name:"Suênia Dantas",
          position:"Sócia Prezz Comunicação",
          opinion:"“Um lugar onde se respira empreendedorismo. Mais que a divisão de espaço de trabalho, o 55 Lab proporciona troca de experiências e bons negócios.”",
          image:"./assets/images/work-space-suenia-opinion-image.jpg"
      },

    },

    storeContentObject: {

      firstOpinionObject:{
          name:"Bruno Brum",
          position:"Netpros",
          opinion:"“E o bacana desse espaço aqui, é porque ele consegue atender como local fixo do trabalho das pessoas que elas vão todos os dias, mas ele também atende gente que procura lugar para se reunir, pra tomar uma decisão de negócio, ou pra passar um período, né.”",
          image:"./assets/images/work-space-bruno-opinion-image.jpg"
      },

      secondOpinionObject:{
          name:"Suênia Dantas",
          position:"Sócia Prezz Comunicação",
          opinion:"“Um lugar onde se respira empreendedorismo. Mais que a divisão de espaço de trabalho, o 55 Lab proporciona troca de experiências e bons negócios.”",
          image:"./assets/images/work-space-suenia-opinion-image.jpg"
      },

    },

    workContentObject: {

      firstOpinionObject:{
          name:"Hendrik Van Deventer",
          position:"HEDCO Global",
          opinion:"“A vantagem de espaços de coworking para uma nova empresa ou alguém que está chegando ao país, é que você encontra todos os serviços adicionais que possa precisar”",
          image:"./assets/images/work-space-hendrik-opinion-image.jpg"
      },

      secondOpinionObject:{
          name:"Anaisa",
          position:"Head Marketing Cabify",
          opinion:"“Acho que com todo mundo, em alguma coisa eles me acrescentaram sabe, seja em negócio mesmo fechado, seja só de trocar uma ideia e acrescentar pro produto”",
          image:"./assets/images/work-space-anaisa-opinion-image.jpg"
      },

    },

    didInsertElement() {
        this._super(...arguments);
        this.get('changeInfoDelegate').send('setOpinionContainerChild', this);
        this.selectOpinionBasedOnUrl();
    },

    selectOpinionBasedOnUrl() {
        let spaceType = ParseHelpers.urlParamWithName("spaceType", window.location.href);
        let isAValidatedType = (spaceType === "house" || spaceType === "store" || spaceType === "work");

        if (spaceType !== undefined && isAValidatedType) {
            this.send('selectPlan', spaceType);
        }
    },

    actions: {
        selectPlan(currentSelectedPlan) {
            if (currentSelectedPlan === "house") {
                this.set('contentObject', this.houseContentObject);
            } else if (currentSelectedPlan === "store") {
                this.set('contentObject', this.storeContentObject);
            } else if (currentSelectedPlan === "work") {
                this.set('contentObject', this.workContentObject);
            }
            // this.set('displayType', "flex");
        }
    }
});
