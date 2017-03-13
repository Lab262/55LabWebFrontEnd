import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['nossoTime'],
  nossoTime: false,

  scrollToTeamContainer: Ember.on('init', function() {
        Ember.run.scheduleOnce('afterRender', this, function() {
          if (this.get('nossoTime')) {
            var timeScroll = 1600;

            //Responsive Mode
            if (window.innerWidth < 600) {
              timeScroll = 3200;
            }

            $('html,body').animate({scrollTop: $('.community-our-team-container').offset().top - 100},timeScroll);

          }
        });
    })
});
