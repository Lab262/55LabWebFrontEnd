import Ember from 'ember';
import Eventick from "npm:eventick";

export default Ember.Component.extend({
    eventsImages: [
        "./assets/images/image-curse1.jpg",
        "./assets/images/image-curse2.jpg",
        "./assets/images/image-curse3.jpg",
        "./assets/images/image-curse-tapa-cara.png",
        "./assets/images/image-curse4.jpg",
        "./assets/images/image-curse-peteleco.png",

    ],
    events: [
        {
            title: "Peteleco",
            local: "55Lab.Store",
            image: "./assets/images/image-curse-peteleco.png",
            description: "Peteleco é o evento do Acelere.me que vai te dar aquele toque esperto pra você perceber que empreender é muito mais do que ter uma empresa ou um CNPJ.",
            descriptionOrganizer: "Acelere.me",
            descriptionSupporter: "55Lab.Store",
            descriptionDate: "16 de fevereiro e 16 de março",
            descriptionAmount: "indefinida",
            descriptionMoreInformation: "O Peteleco é o evento de conteúdo e experiência do Acelere.me que estimula a percepção que empreender é muito mais do que ter uma empresa ou um CNPJ. Empreender é um estilo de vida, um estado de espírito. Já em sua terceira edição, o evento impactou mais de 400 empreendedores ao longo de 2016."
        },

        {
            title: "A Nova Lei do Investidor Anjo",
            local: "55Lab.Work",
            image: "./assets/images/image-curse3.jpg",
            description: "Entenda como ficaram as regras para receber ou fazer investimento anjo no Brasil depois que a Lei complementar nº 155 entrou em vigor no país.",
            descriptionOrganizer: "Acelere.me",
            descriptionSupporter: "55Lab.Work",
            descriptionDate: "09 de março",
            descriptionAmount: "15 pessoas",
            descriptionMoreInformation: "No dia 1º de janeiro de 2017 entrou em vigor a Lei complementar nº 155 que define estrutura de investimento-anjo e segurança jurídica para esta modalidade de aporte de capital. Atentos a essa nova realidade montamos um curso para orientar pessoas físicas e jurídicas que queiram fazer aportes de capital e/ou empreendedores que necessitam de investimento."
        },
        {
            title: "Noções Jurídicas para usuários",
            local: "55Lab.Store",
            image: "./assets/images/image-curse4.jpg",
            description: "Saiba + sobre a atual realidade jurídico/social da cannabis e do usuário no Brasil.",
            descriptionOrganizer: "4E20.CLUB",
            descriptionSupporter: "Acelere.me e 55Lab.Store",
            descriptionDate: "14 de março",
            descriptionAmount: "10 pessoas",
            descriptionMoreInformation: "Preparamos um workshop para mostrar a atual realidade jurídico/social no Brasil em relação a cannabis e ao usuário. O objetivo do workshop é orientar e educar os cidadãos que são usuários de cannabis a minimizarem seus riscos jurídicos ao iniciarem um cultivo ou clube, terem mais informação para lutar pelo seus direitos de usuário (recreativo ou medicinal) e terem um panorama geral das decisões do judiciário brasileiro em relação a auto cultivo, aquisição de sementes e clubes sociais canábicos."
        },
        {
            title: "Acelereção de negócios de lifestyle",
            local: "55Lab.Store",
            image: "./assets/images/image-curse2.jpg",
            description: "Sabia que é possível montar um negócio relacionado a cannabis de forma legal no Brasil?",
            descriptionOrganizer: "Acelere.me",
            descriptionSupporter: "55Lab.Store",
            descriptionDate: "28 de março",
            descriptionAmount: "10 pessoas",
            descriptionMoreInformation: "Isso é o que chamamos de empreendedorismo de lifestyle. Somos pioneiros na disseminação deste conceito e no apoio a estes negócios em nosso país, contribuindo para torná-los mais liberado, mais regulado, mais conhecido e reafirmá-lo como tendência de negócio emergente na sociedade brasileira. Diante disso, preparamos um workshop para orientar e capacitar empreendedores que queiram fazer ou tenham negócios nesse mercado de lifestyle."
        },
        {
            title: "Tapa na Cara",
            local: "55Lab.Work",
            image: "./assets/images/image-curse-tapa-cara.png",
            description: "Um choque de realidade para você entender que empreender com planejamento é possível e muito menos arriscado!",
            descriptionOrganizer: "Acelere.me",
            descriptionSupporter: "55Lab.Work",
            descriptionDate: "04 e 06 de abril",
            descriptionAmount: "15 pessoas",
            descriptionMoreInformation: "O Tapa na Cara é um evento que tem 16 horas seguidas de capacitação por meio de experiência empreendedora com a metodologia de implementação de negócios do Acelere.me. Este evento busca dar um “tapa na cara” dos participantes para que eles possam entender que, apesar de não ser fácil, empreender com planejamento, metas e objetivos claros é possível e muito menos arriscado."
        },
        {
            title: "Experience",
            local: "MODIFICAR",
            image: "./assets/images/image-curse1.jpg",
            description: "MODIFICAR é o evento de conteúdo e experiência do Acelere.me que estimula a percepção que empreender é muito mais do que ter uma empresa ou um CNPJ.",
            descriptionOrganizer: "MODIFICAR",
            descriptionSupporter: "MODIFICAR",
            descriptionDate: "MODIFICAR",
            descriptionAmount: "MODIFICAR",
            descriptionMoreInformation: "No Experience você pode participar de um dia de trabalho para entrar em contato com  a metodologia de implementação de negócios do Acelere.me, descobrir a importância de definição de propósito para o seu projeto e aprender sobre desenvolvimento de modelo de negócios, metas e plano de ação."
        },
        {
            title: "Maratona Ignition",
            local: "CTJ",
            image: "./assets/images/image-curse4.jpg",
            description: "Evento do Acelere.me que busca pré-acelerar negócios e empresas por meio de intensas capacitações e mentorias com profissionais do mercado.",
            descriptionOrganizer: "Acelere.me",
            descriptionSupporter: "55Lab",
            descriptionDate: "14,15 e 16 de julho",
            descriptionAmount: "50 pessoas",
            descriptionMoreInformation: "O Maratona Ignition é conhecido como o primeiro programa de pré-aceleração de negócios e empresas desenvolvido no Distrito Federal. Na última edição, 10 ideias e projetos de negócios foram selecionados para participar de 48h intensas de capacitações com experiências empreendedoras e mentorias com profissionais do mercado."
        }

    ],

    didInsertElement() {
        this._super(...arguments);

        this.loadEventickData();
    },

    loadEventickData: function () {
        var _eventick = null;

        Eventick.login('jguimaraes@4legal.com.br', 'juliana30').then((eventick) => {
            _eventick = eventick;
            return _eventick.events.getList();
        }).then((events) => {

            var futureEvents = events.filter(this.checkIfIsFutureEvent);
            this.set('events', []);
            console.log(events);

            this.loadEventInfo(0, futureEvents, _eventick, []);

        }).catch((error) => {
            console.log(error);
        });

    },

    loadEventInfo: function (i, allEvents, _eventick, parsedEvents) {

        var currentEvent = allEvents[i];

        _eventick.events.get(currentEvent.id).then((currentEventItem) => {
            var parsedEventObject = {
                title: currentEventItem.title,
                image: this.eventsImages[i%6],
                description: this.parseDateEvent(currentEventItem.start_at),
                url: "https://www.eventick.com.br/" + currentEventItem.slug,
                startDate: currentEventItem.start_at
            };
            parsedEvents.push(parsedEventObject);
            parsedEvents = this.sortParsedEvents(parsedEvents);

            var newIndex = i + 1;
            if (newIndex < allEvents.length) {
                this.loadEventInfo(newIndex, allEvents, _eventick, parsedEvents);
            } else {
                this.set('events', parsedEvents);
            }
        });
    },

    sortParsedEvents: function (parsedEvents) {
        parsedEvents.sort(function (a, b) {
            if (a.startDate < b.startDate) {
                return 1;
            }
            if (a.startDate > b.startDate) {
                return -1;
            }
            return 0;
        });

        return parsedEvents.reverse();
    },

    checkIfIsFutureEvent: function (eventObject) {
        var date = new Date();
        var dateISO = date.toISOString();
        var convertedTodayDate = dateISO.substring(0, 10);
        var currentItem = eventObject;
        var reducedItemStartDay = currentItem.start_at.substring(0, 10);
        return reducedItemStartDay > convertedTodayDate;

    },

    parseDateEvent: function (dateStart){
        var yearDate = dateStart.substring(0,4);
        var monthDate = dateStart.substring(5,7);
        var dayDate = dateStart.substring(8,10);
        var stringDate = "DATA: " + dayDate + "/" + monthDate + "/" + yearDate;
        return stringDate;
    }

});
