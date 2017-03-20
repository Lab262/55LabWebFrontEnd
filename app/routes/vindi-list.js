import Ember from 'ember';
import VindiAdapter from '../adapters/vindi';

export default Ember.Route.extend({


  model() {

    debugger
    var adapter = VindiAdapter.create();
    return adapter.find(1);
    // var encodedAPIKEY = btoa("IcGZ0qswO8LT0hw3U9JzV5NOpGkZt6qf")


 // var xhr = this.createCORSRequest('GET', url);
 // if (!xhr) {
 //   alert('CORS not supported');
 //   return;
 // }
 //
 //       xhr.setRequestHeader('Authorization', "Basic SWNHWjBxc3dPOExUMGh3M1U5SnpWNU5PcEdrWnQ2cWY6KioqKiogSGlkZGVuIGNyZWRlbnRpYWxzICoqKioq");
 // // Response handlers.
 // xhr.onload = function() {
 //   var text = xhr.responseText;
 //  //  var title = getTitle(text);
 //   alert('Response from CORS request to ' + url + ': ' + text);
 // };
 //
 // xhr.onerror = function() {
 //   alert('Woops, there was an error making the request.');
 // };
 //
 // xhr.send();

    // $.ajaxSetup({
    // headers: { 'Authorization': apiKey }
    // });

    // var apiKey = "Basic SWNHWjBxc3dPOExUMGh3M1U5SnpWNU5PcEdrWnQ2cWY6KioqKiogSGlkZGVuIGNyZWRlbnRpYWxzICoqKioq"
    //
    // var url = 'https://app.vindi.com.br:443/api/v1/plans?page=1&query=status';
    //
    // return $.ajax({
    //       type: "GET",
    //       url: 'https://app.vindi.com.br:443/api/v1/plans?page=1&query=status',
    //       headers: { 'Auhtorization': "Basic SWNHWjBxc3dPOExUMGh3M1U5SnpWNU5PcEdrWnQ2cWY6KioqKiogSGlkZGVuIGNyZWRlbnRpYWxzICoqKioq" },
    //       success: function (data) {
    //         debugger
    //         return data;
    //       },
    //       error: function (request, textStatus, error) {
    //         console.log(error);
    //       }
    //     });

    // return Ember.$.ajax({
    //     type: "GET",
    //     url: "https://app.vindi.com.br:443/api/v1/plans?page=1&query=status%3Aactive&sort_by=id&sort_order=asc",
    //     data: '{}',
    //     headers: {
    //         'Authorization': apiKey,
    //         'Access-Control-Allow-Origin': "app.vindi.com.br"
    //     },
    //     // beforeSend: function (xhr) {
    //     //   debugger
    //     //   xhr.setRequestHeader('Authorization', apiKey);
    //     //   xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://app.vindi.com.br:443/api/v1')
    //     //  },
    //     success: function (result) {
    //       debugger
    //     },
    //     error: function (jqXHR, exception) {
    //       debugger
    //       alert("Erro:" + jqXHR.responseText);
    //
    //      }
    // });
      // return [{title: "ok", description:"descri"},{title: "ok2", description:"descri2"},{title: "ok3", description:"descri3"}]
    }

});
