import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home-page', { path: '/' });
  this.route('community', { path: '/comunidade' });
  this.route('work-space', { path: '/espaco-de-trabalho' });
  this.route('knowledge', { path: '/conhecimento' });
  this.route('sign-up-membership', { path: '/cadastro-membro' });
  this.route('blog');
  this.route('visit-us', { path: '/nos-visite' });
});

export default Router;
