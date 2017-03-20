import Ember from 'ember';
import VindiAdapter from '../adapters/vindi';

export default Ember.Route.extend({

  adapter: VindiAdapter.create(),


  model() {
    return this.adapter.findAll();
  },

  actions: {
    signinPlan: function(plan) {
      return this.adapter.createRecord(plan);
    }
  }

});
