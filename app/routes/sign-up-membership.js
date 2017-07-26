import BaseRoute from './scroll-base';

export default BaseRoute.extend({
  actions: {
  showDownloadAppPage(){
      this.transitionTo("registered-download-app");
  }
}
});
