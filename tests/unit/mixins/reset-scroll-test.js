import Ember from 'ember';
import ResetScrollMixin from 'a55-lab-institutional-web/mixins/reset-scroll';
import { module, test } from 'qunit';

module('Unit | Mixin | reset scroll');

// Replace this with your real tests.
test('it works', function(assert) {
  let ResetScrollObject = Ember.Object.extend(ResetScrollMixin);
  let subject = ResetScrollObject.create();
  assert.ok(subject);
});
