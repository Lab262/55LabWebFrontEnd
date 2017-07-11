import Ember from 'ember';
import ParseHelpers from 'a55-lab-institutional-web/helpers/parse-helpers';

export default Ember.Component.extend({

    planSelected: [false, false, false],

    scroller: Ember.inject.service(),


    didInsertElement() {
        this._super(...arguments);
        this.selectPlanBasedOnUrl();
    },

    selectPlanBasedOnUrl() {
        console.log("ENTROU NO SELECT PLAN BY URL");
        let spaceType = ParseHelpers.urlParamWithName("spaceType", window.location.href);
        console.log("SPACE TYPE: "+spaceType);
        let isAValidatedType = (spaceType === "house" || spaceType === "store" || spaceType === "work");
        if (spaceType !== undefined && isAValidatedType) {
            this.send('didSelectPlanCallback', spaceType);
        }
    },

    actions: {  
        didSelectPlanCallback: function (selectedPlan) {
           
           //Scroll view
            if (window.innerWidth < 600) {
                this.get('scroller').scrollVertical(this.$("#work-space-container"), {offset: 7.3*window.innerWidth, duration: 1600});
            }else{
                this.get('scroller').scrollVertical(this.$("#work-space-container"), {offset: 0.55*window.innerWidth, duration: 800});
            }
            
            if (selectedPlan === "house") {      
                this.set('planSelected', [true, false, false]);
            } else if (selectedPlan === "store") {
                this.set('planSelected', [false, true, false]);
            } else if (selectedPlan === "work") {
                this.set('planSelected', [false, false, true]);
            }
        }
    }

});
