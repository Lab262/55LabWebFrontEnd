import Ember from 'ember';

export default Ember.Component.extend({

    actions: {
        selectPlanAction(selectedPlan) {
            this.get('workspacePlansChild').send("selectPlan", selectedPlan);
            this.get('advantagePlansChild').send("selectPlan", selectedPlan);
            this.get('opinionContainerChild').send("selectPlan", selectedPlan);
        },

        setWorkspacePlansChild(workspacePlansChild) {
            this.set("workspacePlansChild",workspacePlansChild);
        },

        setAdvantagePlansChild(advantagePlansChild) {
            this.set("advantagePlansChild",advantagePlansChild);
        },

        setOpinionContainerChild(opinionContainerChild) {
            this.set("opinionContainerChild",opinionContainerChild);
        }
    }


});
