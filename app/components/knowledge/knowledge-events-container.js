import Ember from 'ember';
import Eventick from "npm:eventick";

export default Ember.Component.extend({
    eventsImages: [
        "/assets/images/image-curse1.jpg",
        "/assets/images/image-curse2.jpg",
        "/assets/images/image-curse3.jpg",
        "/assets/images/image-curse-tapa-cara.png",
        "/assets/images/image-curse4.jpg",
        "/assets/images/image-curse-peteleco.png",

    ],
    events: [
        {
        }
    ],

    didInsertElement() {
        this._super(...arguments);
        this.set('events', [{
          title: "MARATONA IGNITION",
          image: this.eventsImages[3],
          description: "03/06/2017",
          url: "https://www.sympla.com.br/maratona-ignition__117622",
        }]);

        //this.loadEventickData();
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
