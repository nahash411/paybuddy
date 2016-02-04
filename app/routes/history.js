import Ember from 'ember';
import InfinityRoute from "ember-infinity/mixins/route";

export default Ember.Route.extend(InfinityRoute, {
  model() {
    return this.infinityModel("transaction", { perPage: 12, startingPage: 1 });
  }
});
