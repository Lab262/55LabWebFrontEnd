import DS from 'ember-data';

var VindiAdapter = DS.JSONAPIAdapter.extend({

  findAll: function(){
    var adapter = this;
    return  new Ember.RSVP.Promise( function( resolve, reject ) {

      Ember.$.ajax({
        url: "https://socialnetwork55lab.herokuapp.com/parse/functions/vindiManager",
        type: "POST",
        headers: {
          "X-Parse-Application-Id": "lab262_55lab_social_network",
          "Content-Type": "application/json; charset=utf-8",
        },
        contentType: "application/json",
        data: JSON.stringify({
          "pathPlusParams": "plans"
        })
      }).then(
        function( json ) {
          debugger
          resolve(json.result.plans)
        },
        function( reason ) {
          return reject(reason)
        }
      );
    });
  },

  createRecord: function(data){
    var adapter = this;

    return  new Ember.RSVP.Promise( function( resolve, reject ) {

      Ember.$.ajax({
        url: "https://socialnetwork55lab.herokuapp.com/parse/functions/vindiManager",
        type: "POST",
        headers: {
          "X-Parse-Application-Id": "lab262_55lab_social_network",
          "Content-Type": "application/json; charset=utf-8",
        },
        contentType: "application/json",
        data: JSON.stringify({
          "requestBody": {
            "customer_id": 2302252,
            "payment_method_code": "credit_card",
            "product_items": [
              {
                "product_id": data["plan_items"][0].id
              }
            ],
            "plan_id": data.id
          },
          "pathPlusParams": "subscriptions",
          "requestMethod": "POST"
        })
      }).then(
        function( json ) {
          debugger
          resolve(json)
        },
        function( reason ) {
          return reject(reason)
        }
      );
    });
  }

});
export default VindiAdapter;
