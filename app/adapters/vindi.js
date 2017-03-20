import DS from 'ember-data';
import Request from 'npm:request'
var VindiAdapter = DS.JSONAPIAdapter.extend({

  init: function(){
    this._super();
    debugger
    // this.set( 'headers', {
    //   'Authorization' : 'Basic SWNHWjBxc3dPOExUMGh3M1U5SnpWNU5PcEdrWnQ2cWY6KioqKiogSGlkZGVuIGNyZWRlbnRpYWxzICoqKioq'
    // });
  },

  find: function(id){
    // return $.ajax({
    //   type: "GET",
    //   url: 'https://app.vindi.com.br/api/v1/plans'
    // });

    return Request.get('https://app.vindi.com.br/api/v1/plans').auth('IcGZ0qswO8LT0hw3U9JzV5NOpGkZt6qf', '', true);

    // return Request.get('https://app.vindi.com.br/api/v1/plans', {
    //   'auth': {
    //     'user': 'IcGZ0qswO8LT0hw3U9JzV5NOpGkZt6qf',
    //     'password': '',
    //     'sendImmediately': false
    //   }
    // });

  }
});

export default VindiAdapter;
