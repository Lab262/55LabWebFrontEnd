import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('work-space-type-spaces-content-item', 'Integration | Component | work space type spaces content item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{work-space-type-spaces-content-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#work-space-type-spaces-content-item}}
      template block text
    {{/work-space-type-spaces-content-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
