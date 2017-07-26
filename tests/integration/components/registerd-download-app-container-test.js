import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('registerd-download-app-container', 'Integration | Component | registerd download app container', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{registerd-download-app-container}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#registerd-download-app-container}}
      template block text
    {{/registerd-download-app-container}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
