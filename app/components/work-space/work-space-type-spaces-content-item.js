import Ember from 'ember';

export default Ember.Component.extend({

    titleImageSrc: "",
    description: "",
    buttonImageSrc: "",
    buttonActiveImageSrc: "",
    actualButtonImageSrc: "",
    headerImageSrc: "./assets/images/work-space-work.jpg",
    backgroundFilterHoverSrc: "./assets/images/workspace-option-background-image-filter-selected-green.png",
    opacityHoverProperty: "opacity: 0;",
    opacityOutHoverProperty: "opacity: 1;",
    planIdentification: "house",
    isSelected: false,

    isSelectedChanged: Ember.observer('isSelected', function() {
    // deal with the change
      this.selectBackgroundHoverFunction();
  }),

   selectBackgroundHoverFunction: function() {
      if (this.isSelected === false) {
         this.set('opacityHoverProperty','opacity: 0;');
         this.set('opacityOutHoverProperty','opacity: 1;');
      } else {
         this.set('opacityHoverProperty','opacity: 1;');
         this.set('opacityOutHoverProperty','opacity: 0;');   
      }    
    },

  actions: {  
    outHover: function() {  

      this.selectBackgroundHoverFunction();
    
    },

    onHover: function() {
         this.set('opacityHoverProperty','opacity: 1;');
         this.set('opacityOutHoverProperty','opacity: 0;');
  },
  

  onClick: function() {
        this.selectPlanAction(this.planIdentification);
        this.didSelectPlanCallback(this.planIdentification);
    }
   
}
});
