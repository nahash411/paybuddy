import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('send');
  this.route('success');
  this.route('history');
});

export default Router;
