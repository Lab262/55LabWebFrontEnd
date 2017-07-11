import DS from 'ember-data';

var VindiAdapter = DS.JSONAPIAdapter.extend({

  requestVindiManager: function(pathPlusParams, requestMethod, requestBody, requestParams){
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
          pathPlusParams: pathPlusParams,
          requestMethod: requestMethod,
          requestBody: requestBody,
          requestParams: requestParams
        })
      }).then(
        function( json ) {
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
