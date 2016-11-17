'use strict';

define('emberjs-weather/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('emberjs-weather/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('emberjs-weather/tests/helpers/date.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/date.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/date.js should pass jshint.');
  });
});
define('emberjs-weather/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('emberjs-weather/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('emberjs-weather/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'emberjs-weather/tests/helpers/start-app', 'emberjs-weather/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _emberjsWeatherTestsHelpersStartApp, _emberjsWeatherTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _emberjsWeatherTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _emberjsWeatherTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('emberjs-weather/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('emberjs-weather/tests/helpers/resolver', ['exports', 'emberjs-weather/resolver', 'emberjs-weather/config/environment'], function (exports, _emberjsWeatherResolver, _emberjsWeatherConfigEnvironment) {

  var resolver = _emberjsWeatherResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberjsWeatherConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberjsWeatherConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('emberjs-weather/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('emberjs-weather/tests/helpers/start-app', ['exports', 'ember', 'emberjs-weather/app', 'emberjs-weather/config/environment'], function (exports, _ember, _emberjsWeatherApp, _emberjsWeatherConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberjsWeatherConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberjsWeatherApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('emberjs-weather/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('emberjs-weather/tests/helpers/temperature.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/temperature.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/temperature.js should pass jshint.');
  });
});
define('emberjs-weather/tests/helpers/weather-icon.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/weather-icon.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/weather-icon.js should pass jshint.');
  });
});
define('emberjs-weather/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('emberjs-weather/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('emberjs-weather/tests/test-helper', ['exports', 'emberjs-weather/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberjsWeatherTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberjsWeatherTestsHelpersResolver['default']);
});
define('emberjs-weather/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('emberjs-weather/tests/unit/controllers/application-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('controller:application', 'Unit | Controller | application', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('emberjs-weather/tests/unit/controllers/application-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/controllers/application-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/application-test.js should pass jshint.');
  });
});
define('emberjs-weather/tests/unit/models/forecast-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('forecast', 'Unit | Model | forecast', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('emberjs-weather/tests/unit/models/forecast-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/models/forecast-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/forecast-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('emberjs-weather/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
