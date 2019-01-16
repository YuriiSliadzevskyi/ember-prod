'use strict';

define("prodl/tests/integration/components/prod-form-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)('Integration | Component | prod-form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "XYK48cw4",
        "block": "{\"symbols\":[],\"statements\":[[1,[21,\"prod-form\"],false]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), ''); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "VQDSKsNs",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"prod-form\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));
      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define("prodl/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('components/prod-form.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/prod-form.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)\n6:3 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });
  QUnit.test('routes/prod.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/prod.js should pass ESLint\n\n4:9 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:9 - \'Ember\' is not defined. (no-undef)');
  });
});
define("prodl/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('prodl/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'prodl/templates/application.hbs should pass TemplateLint.\n\nprodl/templates/application.hbs\n  2:37  error  Incorrect indentation for `<a>` beginning at L2:C37. Expected `<a>` to be at an indentation of 4 but was found at 37.  block-indentation\n');
  });
  QUnit.test('prodl/templates/components/prod-form.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'prodl/templates/components/prod-form.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('prodl/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'prodl/templates/index.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('prodl/templates/prod.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'prodl/templates/prod.hbs should pass TemplateLint.\n\nprodl/templates/prod.hbs\n  7:2  error  Incorrect indentation for `<tr>` beginning at L7:C2. Expected `<tr>` to be at an indentation of 4 but was found at 2.  block-indentation\n  14:2  error  Incorrect indentation for `{{#each}}` beginning at L14:C2. Expected `{{#each}}` to be at an indentation of 4 but was found at 2.  block-indentation\n');
  });
});
define("prodl/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('integration/components/prod-form-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/prod-form-test.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/prod-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/prod-test.js should pass ESLint\n\n');
  });
});
define("prodl/tests/test-helper", ["prodl/app", "prodl/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("prodl/tests/unit/routes/index-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define("prodl/tests/unit/routes/prod-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | prod', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:prod');
      assert.ok(route);
    });
  });
});
define('prodl/config/environment', [], function() {
  var prefix = 'prodl';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('prodl/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
