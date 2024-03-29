import Ember from 'ember';
import ParseHelpers from 'a55-lab-institutional-web/helpers/parse-helpers';
import VindiAdapter from 'a55-lab-institutional-web/adapters/vindi';

export default Ember.Component.extend({

    housePlans: [{
        headerContent: {
            headerContentTitle: "+55LAB COMMUNITY",
            headerContentPrice: "R$ 49,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerDifferentLink:"sign-up-membership",
            headerContentBackgroundUrl: "./assets/images/work-space-membership-house-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-house.png",
            headerColorBackground: "#85BF47",
            headerColorBorderBackground: "#0A365C"
        },

        descriptionContent: "Acesso a plataforma digital de uma comunidade diversificada, com mais de 500 membros, que vai te inspirar, facilitar o desenvolvimento de seus negócios e te conectar com novos parceiros.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "1 hora de meeting room ou open desk que podem ser usadas em qualquer unidade +55Lab.co que tenha essas opções de espaço de trabalho, com a possibilidade de adquirir mais quando necessário."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "Segunda a sexta, das 09h às 18h, mediante agendamento"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Acesso a plataforma digital com + de 500 membros. Acesso aos espaços +55Lab.co. Rede de benefícios exclusivos"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Diária em open desk (na .Store ou na .Work)"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "R$ 49,00/mês. Se quiser experimentar por apenas 1 mês, você paga R$ 60,00.",
            subInfoContentActionName: "VISITE"
        }
    },
    /*{
        headerContent: {
            headerContentTitle: "OPEN DESK",
            headerContentPrice: "A partir de R$ 865,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-opendesk-house-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-house.png",
            headerColorBackground: "#85BF47",
            headerColorBorderBackground: "#0A365C"
        },

        descriptionContent: "Acesso a qualquer desk disponível na área comum do +55Lab em três locais diferentes: .work, .house e .store. Esse plano inclui o membership do +55.community e 1 hora de meeting room por mês.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "É um espaço reservado para você chegar e produzir sem preocupações, e não precisa de agendamento. É só trazer o seu laptop, escolher uma mesa e começar a trabalhar. Você encontra as estações de trabalho nos três espaços - .work, .house e .store - e pode usá-las 24h por dia nos 7 dias na semana."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Bônus",
            subInfoContentDescription: "Por mês, você ganha 1h de meeting room."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "Mais benefícios",
            subInfoContentDescription: "Não está disponível"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Sala de reunião: a partir de R$ 25,00/hora, Sala de conferência: a partir de R$ 55,00/hora, Atendimento telefônico: R$ 60,00 + tarifário/mês, Serviços de caixa postal: R$ 50,00/mês, Serviços de impressão: R$ 25,00 + tarifário/mês."
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 865,00/mês. Se quiser experimentar por apenas 1 mês, você paga a partir de R$ 995,00.",
            subInfoContentActionName: "VISITE"
        }
    },*/

    {
        headerContent: {
            headerContentTitle: "FIXED DESK",
            headerContentPrice: "A partir de R$ 985,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-fixeddesk-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-house.png",
            headerColorBackground: "#85BF47",
            headerColorBorderBackground: "#0A365C"
        },

        descriptionContent: "Neste plano, você pode usufruir de todos os benefícios que trabalhar em um espaço compartilhado te proporciona sem abrir mão de ter uma estação de trabalho exclusiva.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Mesa e cadeira para chamar de suas em um espaço compartilhado.Você vai poder sentar no mesmo lugar todos os dias, deixar tudo montado com a sua cara e focar apenas na sua produção."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "24 horas / dia x 7 dias da semana"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Membership do +55Lab.Community. Atendimento telefônico personalizado (paga apenas o que consumir de telefonia). Endereço comercial. Serviço de caixa postal. Suporte administrativo . 1 hora de meeting room/mês (a ser usada na .House). Suporte administrativo"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Serviço de impressão. Suporte administrativo"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 985,00/mês. Se você quiser experimentar por apenas um mês, você paga a partir de R$ 1.135,00.",
            subInfoContentActionName: "VISITE"
        }
    },

    {
        headerContent: {
            headerContentTitle: "PRIVATE ROOM",
            headerContentPrice: "A partir de R$ 5.200,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-privateroom-house-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-house.png",
            headerColorBackground: "#85BF47",
            headerColorBorderBackground: "#0A365C"
        },

        descriptionContent: "Para você que deseja uma sala exclusiva e quer criar a sua própria cultura, mas também deseja fazer parte da comunidade e garantir todos os benefícios.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Salas exclusivas, mobiliadas e equipadas para receber executivos que buscam privacidade ou times com até mais de 20 pessoas. Um espaço privativo onde você pode imprimir características do seu negócio e ainda curtir os benefícios da comunidade."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "24 horas / dia x 7 dias da semana"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Membership do +55Lab.Community para cada integrante do time. Atendimento telefônico personalizado (paga apenas o que consumir de telefonia). Endereço comercial. Serviço de caixa postal. Suporte administrativo. 1 hora de meeting room/mês (a ser usada na .House)"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Serviço de impressão. Suporte administrativo"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 5.200,00/mês, para uma pessoa. O valor é calculado de acordo com a quantidade de pessoas que utilizarão o espaço.",
            subInfoContentActionName: "VISITE"
        }
    }

    ],


    storePlans: [{
        headerContent: {
            headerContentTitle: "+55LAB COMMUNITY",
            headerContentPrice: "R$ 49,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerDifferentLink:"sign-up-membership",
            headerContentBackgroundUrl: "./assets/images/work-space-membership-store-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-store.png",
            headerColorBackground: "#D8AD09",
            headerColorBorderBackground: "#AC0049"
        },

        descriptionContent: "Acesso a plataforma digital de uma comunidade diversificada, com mais de 500 membros, que vai te inspirar, facilitar o desenvolvimento de seus negócios e te conectar com novos parceiros.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "1 hora de meeting room ou open desk que podem ser usadas em qualquer unidade +55Lab.co que tenha essas opções de espaço de trabalho, com a possibilidade de adquirir mais quando necessário."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "Segunda a sexta, das 09h às 18h, mediante agendamento"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Acesso a plataforma digital com + de 500 membros. Acesso aos espaços +55Lab.co. Rede de benefícios exclusivos"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Diária em open desk (na .Store ou na .Work)"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "R$ 49,00/mês. Se quiser experimentar por apenas 1 mês, você paga R$ 60,00.",
            subInfoContentActionName: "VISITE"
        }
    },
    {
        headerContent: {
            headerContentTitle: "OPEN DESK",
            headerContentPrice: "A partir de R$ 320,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-opendesk-store-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-store.png",
            headerColorBackground: "#D8AD09",
            headerColorBorderBackground: "#AC0049"
        },

        descriptionContent: "Acesso a qualquer desk disponível na área comum do +55Lab.Store. É só chegar com as  suas coisas, escolher o lugar que mais lhe agrada e começar a trabalhar no gás!",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Espaço de trabalho para trabalhar nas áreas comuns mais descoladas da região. A cada dia, os primeiros a chegar são os primeiros a escolher suas posições de trabalho preferidas."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "Segunda a sexta, das 09h às 18h, sem necessidade de agendamento."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Membership do +55Lab.Community. 1 hora de meeting room por mês (a ser usada na .work). Rede de benefícios exclusivos"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Diária em open desk (na .Store ou na .Work). Serviço de caixa postal. Atendimento telefônico"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 320,00/mês. Se quiser experimentar por apenas 1 mês, você paga a partir de R$ 365,00.",
            subInfoContentActionName: "VISITE"
        }
    },

    {
        headerContent: {
            headerContentTitle: "SHOWROOM",
            headerContentPrice: "A partir de R$ 175,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-showroom-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-store.png",
            headerColorBackground: "#D8AD09",
            headerColorBorderBackground: "#AC0049"
        },

        descriptionContent: "Um box do tamanho certo para dar visibilidade ao seu produto e fazer com que seu público possa interagir com a sua marca em uma loja física sem toda a burocracia de abrir e gerir uma própria.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "8 tamanhos diferentes de expositores de produtos (nichos) para vocês escolher qual se adapta melhor ao tipo de visibilidade que você quer dar para a sua marca."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "Segunda a sexta, das 10h às 18h"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Membership do +55Lab.Community. Rede de benefícios exclusivos"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Diária em open desk (na .Store ou na .Work). Serviço de caixa postal"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 175,00/mês.",
            subInfoContentActionName: "VISITE"
        }
    }

    ],


    workspacePlans: [{
        headerContent: {
            headerContentTitle: "+55LAB COMMUNITY",
            headerContentPrice: "R$ 49,00/MÊS",
            headerContentWorkspacePlanButton: "FAÇA PARTE",
            headerDifferentLink:"sign-up-membership",
            headerContentBackgroundUrl: "./assets/images/work-space-membership-work-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-work.png",
            headerColorBackground: "#AC0049",
            headerColorBorderBackground: "#D8AD09"
        },

        descriptionContent: "Acesso a plataforma digital de uma comunidade diversificada, com mais de 500 membros, que vai te inspirar, facilitar o desenvolvimento de seus negócios e te conectar com novos parceiros.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "1 hora de meeting room ou open desk que podem ser usadas em qualquer unidade +55Lab.co que tenha essas opções de espaço de trabalho, com a possibilidade de adquirir mais quando necessário."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "Segunda a sexta, das 09h às 18h, mediante agendamento"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Acesso a plataforma digital com + de 500 membros. Acesso aos espaços +55Lab.co. Rede de benefícios exclusivos"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Diária em open desk (na .Store ou na .Work)"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "R$ 49,00 mês. Se quiser experimentar por apenas 1 mês, você paga R$ 60,00.",
            subInfoContentActionName: "VISITE"
        }
    },
    {
        headerContent: {
            headerContentTitle: "OPEN DESK",
            headerContentPrice: "A partir de R$ 575,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-opendesk-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-work.png",
            headerColorBackground: "#AC0049",
            headerColorBorderBackground: "#D8AD09"
        },

        descriptionContent: "Acesso a qualquer desk disponível na área comum do +55Lab.Work. É só chegar com as  suas coisas, escolher o lugar que mais lhe agrada e começar a trabalhar no gás!",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Espaço de trabalho para trabalhar nas áreas comuns mais bem equipadas da região. A cada dia, os primeiros a chegar são os primeiros a escolher suas posições de trabalho preferidas."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "Segunda a sexta, das 09h às 18h, sem necessidade de agendamento."
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Membership do +55Lab.Community. 1 hora de meeting room por mês (a ser usada na .work). Rede de benefícios exclusivos"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Diária em open desk (na .Store ou na .Work). Serviço de caixa postal. Atendimento telefônico"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 575,00/mês. Se quiser experimentar por apenas 1 mês, você paga a partir de R$ 685,00.",
            subInfoContentActionName: "VISITE"
        }
    },

    {
        headerContent: {
            headerContentTitle: "FIXED DESK",
            headerContentPrice: "A partir de R$ 820,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-fixeddesk-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-work.png",
            headerColorBackground: "#AC0049",
            headerColorBorderBackground: "#D8AD09"
        },

        descriptionContent: "Neste plano, você pode usufruir de todos os benefícios que trabalhar em um espaço compartilhado te proporciona sem abrir mão de ter uma estação de trabalho exclusiva.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Mesa e cadeira para chamar de suas em um espaço compartilhado.Você vai poder sentar no mesmo lugar todos os dias, deixar tudo montado com a sua cara e focar apenas na sua produção."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "24 horas / dia x 7 dias da semana"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Membership do +55Lab.Community. Atendimento telefônico personalizado (paga apenas o que consumir de telefonia). Endereço comercial. Serviço de caixa postal. Suporte administrativo . 1 hora de meeting room/mês (a ser usada na .Work). Suporte administrativo"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Serviço de impressão. Suporte administrativo"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 820,00/mês. Se você quiser experimentar por apenas um mês, você paga a partir de R$ 945,00.",
            subInfoContentActionName: "VISITE"
        }
    },

    {
        headerContent: {
            headerContentTitle: "PRIVATE ROOM",
            headerContentPrice: "A partir de R$ 1.800,00/MÊS",
            headerContentWorkspacePlanButton: "VISITE",
            headerContentBackgroundUrl: "./assets/images/work-space-privateroom-background.jpg",
            headerContentBacgroundButtonUrl: "./assets/images/workspace-anuity-button-image-work.png",
            headerColorBackground: "#AC0049",
            headerColorBorderBackground: "#D8AD09"
        },

        descriptionContent: "Para você que deseja uma sala exclusiva e quer criar a sua própria cultura, mas também deseja fazer parte da comunidade e garantir todos os benefícios.",

        subInfoContentObject: {
            subInfoContentTitle: "Espaço de trabalho",
            subInfoContentDescription: "Salas exclusivas, mobiliadas e equipadas para receber executivos que buscam privacidade ou times com até mais de 20 pessoas. Um espaço privativo onde você pode imprimir características do seu negócio e ainda curtir os benefícios da comunidade."
        },

        subInfoContentObject2: {
            subInfoContentTitle: "Acesso",
            subInfoContentDescription: "24 horas / dia x 7 dias da semana"
        },

        subInfoContentObject3: {
            subInfoContentTitle: "O que inclui",
            subInfoContentDescription: "Membership +55Lab.Community para cada integrante do time. Atendimento telefônico personalizado (paga apenas o que consumir de telefonia). Endereço comercial. Serviço de caixa postal. Suporte administrativo . 1 hora de meeting room/mês (a ser usada na .Work)"
        },

        subInfoContentObject4: {
            subInfoContentTitle: "Adicionais disponíveis",
            subInfoContentDescription: "Salas de reunião. Salas de eventos. Salas de conferências. Endereço Fiscal. Serviço de impressão. Suporte administrativo"
        },

        subInfoContentObject5: {
            subInfoContentTitle: "Anuidade",
            subInfoContentDescription: "A partir de R$ 1800,00/mês, para uma pessoa. O valor é calculado de acordo com a quantidade de pessoas que utilizarão o espaço.",
            subInfoContentActionName: "VISITE"
        }
    }

    ],

    selectedPlan: [],

    displayType: "none",

    didInsertElement() {
        this._super(...arguments);
        this.get('changeInfoDelegate').send('setWorkspacePlansChild', this);
        this.selectPlanBasedOnUrl();
        // this.setMembershipPriceFromVindi();
    },

    setMembershipPriceFromVindi() {
      var vindiAdapter = VindiAdapter.create()
      var self = this
      vindiAdapter.requestVindiManager('plans', 'GET', null, 'query= status=active code=membership').then(function(result){
        var products = result.result.plans[0].plan_items
        products.sort(function compare(current, next) {
            return current.product.pricing_schema.price - next.product.pricing_schema.price
        })
        var cheaperProductPrice = products[0].product.pricing_schema.price
        var membersshipPriceString = "A PARTIR DE R$ " + cheaperProductPrice + "/MÊS"
        self.housePlans[0].headerContent.headerContentPrice = membersshipPriceString
        self.storePlans[0].headerContent.headerContentPrice = membersshipPriceString
        self.workspacePlans[0].headerContent.headerContentPrice = membersshipPriceString
      }).catch(function(error){
        //empty
      })
    },

    selectPlanBasedOnUrl() {
        let spaceType = ParseHelpers.urlParamWithName("spaceType", window.location.href);
        let isAValidatedType = (spaceType === "house" || spaceType === "store" || spaceType === "work");
        if (spaceType !== undefined && isAValidatedType) {
            this.send('selectPlan', spaceType);
        }
    },

    actions: {
        selectPlan(currentSelectedPlan) {
            if (currentSelectedPlan === "house") {
                this.set('selectedPlan', this.housePlans);
            } else if (currentSelectedPlan === "store") {
                this.set('selectedPlan', this.storePlans);
            } else if (currentSelectedPlan === "work") {
                this.set('selectedPlan', this.workspacePlans);
            }
            this.set('displayType', "flex");
        }
    }

});
