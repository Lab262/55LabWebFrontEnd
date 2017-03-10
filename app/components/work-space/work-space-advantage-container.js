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
            firstPriceFirstSubsubtitle: " R$15/hora",
            secondPriceFirstSubsubtitle: " R$25/hora",
            secondSubsubtitle: "Sala de reunião para 4 pessoas",
            firstPriceSecondSubsubtitle: " R$25/hora",
            secondPriceSecondSubsubtitle: " R$35/hora",

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
            firstPriceFirstSubtitle: " R$55/hora",
            secondPriceFirstSubtitle: " R$65/hora",

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
            description: "Sua empresa é prestadora de serviços e você não tem necessidade de alugar um ponto comercial para começar suas operações? Oferecemos o serviço de locação de endereço fiscal para que você possa ter um endereço válido para o registro de sua empresa.",
            titleTable: "Você pode escolher entre duas opções: com ou sem atendimento telefônico.",
            descriptionActionButton: "Para Contratar esse serviço",
            titleActionButton: "Acesse aqui",
            firstRowTitle: "Endereço fiscal",
            firstRowSubtitle: "R$ 95/mês*",
            firstRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. Valor sem desconto:R$109/mês",
            firstRowDescription: "Nesse plano você pode registrar sua empresa em um endereço privilegiado e ainda contar com o serviço de caixa postal para recebimento de correspondências. Ah! E não precisa correr para buscar suas correspondências, podemos armazená-las por até 30 dias.",
            secondRowTitle: "Endereço fiscal e atendimento telefônico personalizado",
            secondRowSubtitle: "R$ 320/mês*",
            secondRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. Valor sem desconto:R$340/mês",
            secondRowDescription: "Além de registrar sua empresa em um endereço privilegiado e contar com o serviço de caixa postal para gerenciamento de suas correspondências, você também terá à sua disposição um telefone exclusivo com serviço de atendimento e encaminhamento de recados via e-mail."
        },

        contentObjectSecondTable: {
            image: "/assets/images/icon-topspace.png",
            title: "Espaço de Eventos - Andar Superior",
            firstSubsubtitle: "Segunda a Sexta - 19h às 22h",
            firstTitlePriceSubsubtitle: "Membros:",
            firstPriceFirstSubsubtitle: " A partir de R$240/período (19h às 22h)",
            secondTitlePriceSubsubtitle: "Não-Membros:",
            secondPriceFirstSubsubtitle: " R$290/período",
            secondSubsubtitle: "Sábado e Domingo - 09h às 18h(diária)",
            firstPriceSecondSubsubtitle: " R$495/período",
            secondPriceSecondSubsubtitle: " R$595/período",
            description: "Sala com um visual super bacana para a área verde da quadra que comporta até 15 pessoas equipada com mesas, cadeiras, almofadas, internet, serviços de água e café e limpeza.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui"
        },

        contentObjectThirdTable: {
            image: "/assets/images/icon-kitchen.png",
            title: "Espaço de Eventos - Andar Inferior (Co-Kitchen)",
            firstSubsubtitle: "Segunda a Sexta - 09h às 18h(diária)",
            firstTitlePriceSubsubtitle: "Membros:",
            firstPriceFirstSubsubtitle: " A partir de R$390/período (09h às 18h)",
            secondTitlePriceSubsubtitle: "Não-Membros:",
            secondPriceFirstSubsubtitle: " R$465/período",
            secondSubsubtitle: "Segunda a Sexta - 09h às 22h",
            firstPriceSecondSubsubtitle: " R$550/período",
            secondPriceSecondSubsubtitle: " R$660/período",
            thirdSubsubtitle: "Sábado e Domingo - 09h às 18h",
            firstPriceThirdSubsubtitle: " R$550/período",
            secondPriceThirdSubsubtitle: " R$660/período",
            description: "Co-kitchen super intimista com uma área de descompressão com sofá e tv - lembra a sala de estar da sua casa! Comporta até 20 pessoas e está equipada com cozinha com área molhada e visa cooler, mesas, cadeiras, sofá, internet, serviços de água e café e limpeza.",
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
            description: "Sua empresa é prestadora de serviços e você não tem necessidade de alugar um ponto comercial para começar suas operações? Oferecemos o serviço de locação de endereço fiscal para que você possa ter um endereço válido para o registro de sua empresa.",
            titleTable: "Você pode escolher entre duas opções: com ou sem atendimento telefônico",
            descriptionActionButton: "Para Contratar esse serviço",
            titleActionButton: "Acesse aqui",
            firstRowTitle: "Endereço fiscal",
            firstRowSubtitle: "R$ 115/mês*",
            firstRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. Valor sem desconto:R$135/mês",
            firstRowDescription: "Nesse plano você pode registrar sua empresa em um endereço privilegiado e ainda contar com o serviço de caixa postal para recebimento de correspondências. Ah! E não precisa correr para buscar suas correspondências, podemos armazená-las por até 30 dias.",
            secondRowTitle: "Endereço fiscal e atendimento telefônico personalizado",
            secondRowSubtitle: "R$ 320/mês*",
            secondRowSubsubtitle: "*valor com desconto para pagamento na data de vencimento. Valor sem desconto:R$340/mês",
            secondRowDescription: "Além de registrar sua empresa em um endereço privilegiado e contar com o serviço de caixa postal para gerenciamento de suas correspondências, você também terá à sua disposição um telefone exclusivo com serviço de atendimento e encaminhamento de recados via e-mail."
        },

        contentObjectOneTable: {
            image: "/assets/images/icon-space.png",
            title: "Espaço de Eventos",
            firstSubsubtitle: "Segunda a sexta - 09h às 18h",
            firstTitlePriceSubsubtitle: "Membros:",
            firstPriceFirstSubsubtitle: " R$150/hora",
            secondTitlePriceSubsubtitle: "Não-Membros:",
            secondPriceFirstSubsubtitle: " R$180/hora",
            secondSubsubtitle: "Segunda a sexta - 18h às 22h",
            firstPriceSecondSubsubtitle: " R$200/hora",
            secondPriceSecondSubsubtitle: " R$240/hora",
            thirdSubsubtitle: "Finais de semana",
            firstPriceThirdSubsubtitle: " R$200/hora",
            secondPriceThirdSubsubtitle: " R$240/hora",
            description: "Seja um happy hour, um wokshop ou um desfile de moda, nossos espaços e equipe são + preparados para receber você e seus convidados para uma experiência com a identidade +55Lab. Sala para até 30 pessoas, com mesas e cadeiras, equipamentos de audiovisual, espaço para coffee break, serviços de limpeza e recepção, serviço de água e café e uma super internet com link dedicado.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui",
            titleTable: "ACOMODAÇÕES E SUPORTES DISPONÍVEIS NO WORK(30 pessoas):",
            itensTable: ["Ar Condicionado", "30 mesas e cadeiras", "TV", "Projetor + Tela", "Cabos HDMI, VGA e MAC", "Água e café", "Local para coffee break", "Serviço de limpeza", "Visa cooler"]
        },

        contentObjectWithoutTable: {
            image: "/assets/images/meeting-icon.png",
            title: "Salas de Reunião",
            firstSubsubtitle: "Sala de reunião para 5 pessoas",
            firstPriceFirstSubsubtitle: " R$25/hora",
            secondPriceFirstSubsubtitle: " R$35/hora",
            firstTitlePriceSubsubtitle: "Membros:",
            secondTitlePriceSubsubtitle: "Não-Membros:",

            description: "Nossas salas são completamente equipadas com tudo o que você precisa para tornar sua reunião o mais produtiva possível: serviços de água e café, equipamentos audiovisuais e internet dedicada. Acomodando até 5 pessoas, temos salas disponíveis em dois espaços diferentes: .work e .house, com diferenças nos recursos disponibilizados e preços.",
            descriptionActionButton: "Se quiser alugar uma de nossas salas",
            titleActionButton: "Faça aqui"

        },

        contentSecondObjectWithoutTable: {
            image: "/assets/images/icon-conference.png",
            title: "Salas de Conferência",

            firstSubtitle: "Sala de conferência para 10 pessoas",
            firstPriceFirstSubtitle: " R$55/hora",
            secondPriceFirstSubtitle: " R$65/hora",
            firstTitlePriceSubtitle: "Membros:",
            secondTitlePriceSubtitle: "Não-Membros:",
            description: "Entendemos as dificuldades que podem surgir quando precisamos nos reunir. Por isso, temos salas preparadas para a realização de videoconferências que acomodam até 10 pessoas na .Work e até 06 pessoas na .House.",
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
