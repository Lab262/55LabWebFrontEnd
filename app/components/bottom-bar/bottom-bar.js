import Ember from 'ember';

export default Ember.Component.extend({
    backgroundColor: "#000000",

  //   computedBackgroundColor: Ember.computed( function() {
  //   /* Note: You must implement #escapeCSS. */
  //   var color = escapeCSS(this.get('backgroundColor'));
  //   return Ember.String.htmlSafe("background-color: " + color);
  // }),

     footerContentObjectFirst: {
       title: "Comunidade",
       options: ["+55 LAB COMMUNITY"],
       links: ["community"]
     },

     footerContentObjectSecond: {
       title: "Espaço de Trabalho",
       options: [".House", ".Store", ".Work"],
       links: ["house", "store", "work"],
       link:"work-space",
     },

     footerContentObjectThird: {
       title: "Conhecimento",
       options: ["Acelere.me"],
       links: ["knowledge"]
     },

     footerContentObjectFourth: {
       title: "Contato",
       options: ["hi@55lab.co", "(61) 3217-6800"]
     }

});
