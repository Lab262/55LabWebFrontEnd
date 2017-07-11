import Ember from 'ember';

export default Ember.Component.extend({

    contentObject:{
        headerContent: {
            headerContentTitle: "MEMBERSHIP",
            headerContentPrice: "R$ 49,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerContentBackgroundUrl: "./assets/images/background-image.png"
        }, 

        descriptionContent: "Acesso a qualquer espaço de trabalho dispomível na área comum do +55lab. O plano inclui o +55 Membership e 1 crédito na \"meeting room\".",

        subInfoContentObject: { 
            subInfoContentTitle: "ANUIDADE",
            subInfoContentDescription: "para 1 pessoa fica R$ 1800,00 / mês, de acordo com a quantidade de pessoas aumenta o preço. Para 2 pessoas ou mais:"
        },

        subInfoContentObject2: { 
            subInfoContentTitle: "ANUIDADE",
            subInfoContentDescription: "para 1 pessoa fica R$ 1800,00 / mês, de acordo com a quantidade de pessoas aumenta o preço. Para 2 pessoas ou mais:"
        },

        subInfoContentObject3: { 
            subInfoContentTitle: "ANUIDADE",
            subInfoContentDescription: "para 1 pessoa fica R$ 1800,00 / mês, de acordo com a quantidade de pessoas aumenta o preço. Para 2 pessoas ou mais:",
        },

        subInfoContentObject4: { 
            subInfoContentTitle: "ANUIDADE",
            subInfoContentDescription: "para 1 pessoa fica R$ 1800,00 / mês, de acordo com a quantidade de pessoas aumenta o preço. Para 2 pessoas ou mais:",
        },

        subInfoContentObject5: { 
            subInfoContentTitle: "ANUIDADE",
            subInfoContentDescription: "para 1 pessoa fica R$ 1800,00 / mês, de acordo com a quantidade de pessoas aumenta o preço. Para 2 pessoas ou mais:",
            subInfoContentActionName: "VEJA AQUI"
        }

    },

    responsiveMode: Ember.computed(function () { 

        if (window.innerWidth < 600) {
                return true;
        }else{
            return false;
        }
    })

});

