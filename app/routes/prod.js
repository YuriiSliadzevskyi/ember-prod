import Route from '@ember/routing/route';

export default Route.extend({
  ajax: Ember.inject.service(),
  model() {
    return this.get('ajax').request("https://www.onlinetool.in/api/products/");
  }
});
