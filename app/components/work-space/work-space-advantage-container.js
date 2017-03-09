import Ember from 'ember';
import ParseHelpers from '55-lab-web-front-end/helpers/parse-helpers';

export default Ember.Component.extend({

    contentObject: {
        
    },

    houseContentObject: {

        planSelected:true,
        title: "VEJA OUTROS TIPOS DE LOCAÇÃO E VANTAGENS",
        description: "Para Membros e Não-Membros",

        contentObjectWithoutTable: {
            image: "/assets/images/meeting-icon.png",
            title: "Salas de Reunião",

            firstSubsubtitle: "Sala de reunião para 2 pessoas",
            firstPriceFirstSubsubtitle: " R$15,00 hora",
            secondPriceFirstSubsubtitle: " R$25,00 hora",
            secondSubsubtitle: "Sala de reunião para 4 pessoas",
            firstPriceSecondSubsubtitle: " R$25,00 hora",
            secondPriceSecondSubsubtitle: " R$35,00 hora",

            firstTitlePriceSubsubtitle: "Membros:",
            secondTitlePriceSubsubtitle: "Não-Membros:",

            description: "Nossas salas são completamente equipadas com tudo o que você precisa para tornar sua reunião o mais produtiva possível: serviços de água e café, equipamentos audiovisuais e internet dedicada. Acomodando até 5 pessoas, temos salas disponíveis em dois espaços diferentes: .work e .house, com diferenças nos recursos disponibilizados e preços.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui"

        },

        contentSecondObjectWithoutTable: {
            image: "/assets/images/icon-conference.png",
            title: "Salas de Conferência",

            firstSubtitle: "Para até 6 pessoas",
            firstPriceFirstSubtitle: " R$55,00 hora",
            secondPriceFirstSubtitle: " R$65,00 hora",

            firstTitlePriceSubtitle: "Membros:",
            secondTitlePriceSubtitle: "Não-Membros:",

            description: "Entendemos as dificuldades que podem surgir quando precisamos nos reunir. Por isso, temos salas preparadas para a realização de videoconferências que acomodam até 10 pessoas na .Work e até 06 pessoas na .House.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui"
        }
    },

    storeContentObject: {
        
        planSelected:true,
        title: "VEJA OUTROS TIPOS DE LOCAÇÃO E VANTAGENS",
        description: "Para Membros e Não-Membros",

        contentObjectDoubleTable: {
            image: "/assets/images/icon-address.png",
            title: "Endereço Fiscal",
            description: "Um bom endereço profissional é essencial para qualquer negócio. Por isso, oferecemos locação de endereço fiscal para pessoas físicas e jurídicas.",
            titleTable: "VOCÊ PODE ESCOLHER ENTRE DUAS OPÇÕES E DOIS ENDEREÇOS DIFERENTES",
            descriptionActionButton: "Para Contratar esse serviço",
            titleActionButton: "Acesse aqui",
            firstRowTitle: "Endereço fiscal",
            firstRowSubtitle: "R$ 95,00 mês",
            firstRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. Valor sem desconto: R$ 109,00",
            firstRowDescription: "Com este serviço, você pode registrar a sua empresa na junta comercial com um endereço privilegiado e, ainda, pode contar com o serviço de Caixa Postal para recebimento de correspondências. Ah, e não precisa ter pressa para fazer a retirada dos recebimentos, nossa equipe os gerencia e armazena por até 30 dias.",
            secondRowTitle: "Endereço fiscal e atendimento telefônico personalizado",
            secondRowSubtitle: "R$ 320,00 MÊS - serviço disponível apenas no .work",
            secondRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. valor sem desconto R$340,00",
            secondRowDescription: "Agora ficou fácil ter uma equipe administrativa sem sair de casa. Com este pacote, você poderá registrar e divulgar o endereço privilegiado de sua empresa, ter o serviço de gerenciamento e armazenamento de caixa postal e, além disso, contar com um(a) profissional responsável por atender uma linha telefônica exclusiva e encaminhar seus recados por e-mail."
        },

        contentObjectSecondTable: {
            image: "/assets/images/icon-topspace.png",
            title: "Espaço de Eventos - Andar Superior",
            firstSubsubtitle: "Segunda a Sexta - 19h às 22h",
            firstTitlePriceSubsubtitle: "Membros:",
            firstPriceFirstSubsubtitle: " R$240,00 periodo",
            secondTitlePriceSubsubtitle: "Não-Membros:",
            secondPriceFirstSubsubtitle: " R$290,00 periodo",
            secondSubsubtitle: "Sábado e Domingo - 09h às 18h(diária)",
            firstPriceSecondSubsubtitle: " R$495,00 periodo",
            secondPriceSecondSubsubtitle: " R$595,00 periodo",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui"
        },

        contentObjectThirdTable: {
            image: "/assets/images/icon-kitchen.png",
            title: "Espaço de Eventos - Andar Inferior (Co-Kitchen)",
            firstSubsubtitle: "Segunda a Sexta - 09h às 18h(diária)",
            firstTitlePriceSubsubtitle: "Membros:",
            firstPriceFirstSubsubtitle: " R$390,00 periodo",
            secondTitlePriceSubsubtitle: "Não-Membros:",
            secondPriceFirstSubsubtitle: " R$465,00 periodo",
            secondSubsubtitle: "Segunda a Sexta - 09h às 22h",
            firstPriceSecondSubsubtitle: " R$550,00 periodo",
            secondPriceSecondSubsubtitle: " R$660,00 periodo",
            thirdSubsubtitle: "Sábado e Domingo - 09h às 18h",
            firstPriceThirdSubsubtitle: " R$550,00 periodo",
            secondPriceThirdSubsubtitle: " R$660,00 periodo",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui",
            titleTable: "ACOMODAÇÕES E SUPORTES DISPONÍVEIS NA STORE(15 pessoas):",
            itensTable: ["TV", "Co-kitchen", "Mesas e cadeiras", "Recepção", "Internet", "Projetor + tela ", "Cabos HDMI/VGA", "Água e café", "Serviços de limpeza"]
        },

        contentSecondObjectOneTable: {
            image: "/assets/images/showroom-icon.png",
            title: "Showroom",
            description: "Nesse espaço seu produto fica exposto com a visibilidade que precisa, em um box do tamanho ideal para você. Não vamos ficar com qualquer percentual de venda e nem fazer estoque… a ideia aqui é que os clientes comprem direto com você usando o canal de sua preferência – loja online, whatsapp, facebook, etc. Ah, e nossa equipe estará preparada para fazer a ponte entre os visitantes e você!",
            descriptionActionButton: "Se quiser alugar uma de nossas acomodações",
            titleActionButton: "Faça aqui",
            titleTable: "INCLUI E ACOMODAÇÕES PARA O SEU PRODUTO:",
            itensWithIconTable: ["Nichos 0,40m x 0,40m", "Nichos 1,36m x 1,10m", "Nichos 0,60m x 0,60m", "Nichos 1,00m x 0,30m", "Nichos 0,90m x 0,30m", "Carrinho", "Prateleira 1,85m x 0,70m", "Prateleira 2,05m x 0,40m"],
            itensTable: ["R$ 175,00", "R$ 350,00", "R$ 220,00", "R$ 280,00", "R$ 280,00", "R$ 535,00", "R$ 390,00", "R$ 430,00"]
        }
    },

    workContentObject: {

        planSelected:true,
        title: "VEJA OUTROS TIPOS DE LOCAÇÃO E VANTAGENS",
        description: "Para Membros e Não-Membros",

        contentObjectDoubleTable: {
            image: "/assets/images/icon-address.png",
            title: "Endereço Fiscal",
            description: "Um bom endereço profissional é essencial para qualquer negócio. Por isso, oferecemos locação de endereço fiscal para pessoas físicas e jurídicas.",
            titleTable: "VOCÊ PODE ESCOLHER ENTRE DUAS OPÇÕES E DOIS ENDEREÇOS DIFERENTES",
            descriptionActionButton: "Para Contratar esse serviço",
            titleActionButton: "Acesse aqui",
            firstRowTitle: "Endereço fiscal",
            firstRowSubtitle: "R$ 115 mês",
            firstRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. Valor sem desconto: R$ 135,00",
            firstRowDescription: "Com este serviço, você pode registrar a sua empresa na junta comercial com um endereço privilegiado e, ainda, pode contar com o serviço de Caixa Postal para recebimento de correspondências. Ah, e não precisa ter pressa para fazer a retirada dos recebimentos, nossa equipe os gerencia e armazena por até 30 dias.",
            secondRowTitle: "Endereço fiscal e atendimento telefônico personalizado",
            secondRowSubtitle: "R$ 320,00 MÊS - serviço disponível apenas no .work (SAUS)",
            secondRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. valor sem desconto R$340,00",
            secondRowDescription: "Agora ficou fácil ter uma equipe administrativa sem sair de casa. Com este pacote, você poderá registrar e divulgar o endereço privilegiado de sua empresa, ter o serviço de gerenciamento e armazenamento de caixa postal e, além disso, contar com um(a) profissional responsável por atender uma linha telefônica exclusiva e encaminhar seus recados por e-mail."
        },

        contentObjectOneTable: {
            image: "/assets/images/icon-space.png",
            title: "Espaço de Eventos",
            firstSubsubtitle: "Segunda a sexta - 09h às 18h",
            firstTitlePriceSubsubtitle: "Membros:",
            firstPriceFirstSubsubtitle: " R$150,00 hora",
            secondTitlePriceSubsubtitle: "Não-Membros:",
            secondPriceFirstSubsubtitle: " R$180,00 hora",
            secondSubsubtitle: "Segunda a sexta - 18h às 22h",
            firstPriceSecondSubsubtitle: " R$200,00 hora",
            secondPriceSecondSubsubtitle: " R$240,00 hora",
            thirdSubsubtitle: "Finais de semana",
            firstPriceThirdSubsubtitle: " R$200,00 hora",
            secondPriceThirdSubsubtitle: " R$240,00 hora",
            description: "Seja happy hour, workshop ou desfile de moda, nossos espaços e equipe são + que preparados para receber você e seus convidados para uma experiência com a identidade +55Lab. Estamos acostumados pois também promovemos nossos próprios eventos, que são uma parte muito importante da nossa cultura de promover encontro entre pessoas, aprendizado, e conexões com o novo. Veja aqui nossa agenda.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui",
            titleTable: "ACOMODAÇÕES E SUPORTES DISPONÍVEIS NO WORK(30 pessoas):",
            itensTable: ["Ar Condicionado", "30 mesas e cadeiras", "TV", "Projetor + Tela", "Cabos HDMI, VGA e MAC", "Água e café", "Local para coffee break", "Serviço de limpeza", "Visa cooler"]
        },

        contentObjectWithoutTable: {
            image: "/assets/images/meeting-icon.png",
            title: "Sala de Reunião",
            firstSubsubtitle: "Sala de reunião para 5 pessoas",
            firstPriceFirstSubsubtitle: " R$25,00 hora",
            secondPriceFirstSubsubtitle: " R$35,00 hora",
            firstTitlePriceSubsubtitle: "Membros:",
            secondTitlePriceSubsubtitle: "Não-Membros:",

            description: "Uma reunião precisa ser produtiva, mesmo. E nossas salas de reuniões, que acomodam até 5 pessoas, são preparadas para isso. Elas são completamente equipadas com tudo o que você precisa em um local de  reunião: água, café, equipamentos audiovisuais e internet dedicada. Temos salas de reunião em dois espaços diferentes: .work e .house, com diferenças nos recursos disponíveis e nos preços.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui"

        },

        contentSecondObjectWithoutTable: {
            image: "/assets/images/icon-conference.png",
            title: "Sala de Conferência",

            firstSubtitle: "Para até 10 pessoas",
            firstPriceFirstSubtitle: " R$55,00 hora",
            secondPriceFirstSubtitle: " R$65,00 hora",
            firstTitlePriceSubtitle: "Membros:",
            secondTitlePriceSubtitle: "Não-Membros:",
            description: "Entendemos as dificuldades que podem surgir quando precisamos reunir todo mundo. Por isso, também temos salas preparadas para a realização de videoconferências que acomodam até 10 pessoas disponíveis para locação em nossos espaços.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui"
        }
    },

    didInsertElement() {
        this._super(...arguments);
        this.get('changeInfoDelegate').send('setAdvantagePlansChild', this);
        this.selectPlanBasedOnUrl();
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
            // console.log(currentSelectedPlan)
            // console.log(this.get('contentObject'))

            if (currentSelectedPlan === "house") {
                this.set('contentObject', this.houseContentObject);
            } else if (currentSelectedPlan === "store") {
                this.set('contentObject', this.storeContentObject);
            } else if (currentSelectedPlan === "work") {
                this.set('contentObject', this.workContentObject);
            }
            this.set('displayType', "flex");
        }
    }

});
