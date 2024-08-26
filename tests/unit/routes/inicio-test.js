import { module, test } from 'qunit';
import { setupTest } from 'proyecto/tests/helpers';

module('Unit | Route | inicio', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:inicio');
    assert.ok(route);
  });
});
