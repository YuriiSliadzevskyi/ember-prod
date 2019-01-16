'use strict';



;define("prodl/app", ["exports", "prodl/resolver", "ember-load-initializers", "prodl/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("prodl/components/prod-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    ajax: Ember.inject.service(),
    addEnab: true,
    newProd: {
      homepage: '',
      description: ''
    },
    actions: {
      actAdd() {
        fetch("https://www.onlinetool.in/api/products/", {
          method: "POST",
          body: JSON.stringify(this.newProd),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          }
        }).then(response => {
          response.json().then(data => {
            alert("Successful\rcreatedAt " + data.createdAt + "\rdescription " + data.description + "\rhomepage " + data.homepage + "\rid " + data.id);
          });
        });
      },

      actClear() {
        this.set("newProd.homepage", '');
        this.set("newProd.description", '');
        this.set("addEnab", true);
      },

      handleChIn() {
        this.set("addEnab", this.newProd.homepage.length === 0 || this.newProd.description.length === 0);
      }

    }
  });

  _exports.default = _default;
});
;define("prodl/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("prodl/helpers/app-version", ["exports", "prodl/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("prodl/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("prodl/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("prodl/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "prodl/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("prodl/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("prodl/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("prodl/initializers/export-application-global", ["exports", "prodl/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("prodl/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("prodl/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("prodl/router", ["exports", "prodl/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('prod');
  });
  var _default = Router;
  _exports.default = _default;
});
;define("prodl/routes/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    beforeModel() {
      this.replaceWith('prod');
    }

  });

  _exports.default = _default;
});
;define("prodl/routes/prod", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    ajax: Ember.inject.service(),

    model() {
      return this.get('ajax').request("https://www.onlinetool.in/api/products/");
    }

  });

  _exports.default = _default;
});
;define("prodl/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("prodl/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "NwgxCwGI",
    "block": "{\"symbols\":[],\"statements\":[[7,\"nav\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"nav-wrapper container\"],[9],[7,\"a\"],[11,\"id\",\"logo-container\"],[11,\"href\",\"#\"],[11,\"class\",\"brand-logo\"],[9],[0,\"Logo\"],[10],[0,\"\\n    \"],[7,\"ul\"],[11,\"class\",\"right hide-on-med-and-down\"],[9],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://www.emberjs.com/\"],[9],[0,\"Ember\"],[10],[10],[0,\"\\n      \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"https://materializecss.com/\"],[9],[0,\"Materialize\"],[10],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"div\"],[11,\"class\",\"container\"],[9],[0,\"\\n  \"],[1,[21,\"outlet\"],false],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "prodl/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("prodl/templates/components/prod-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "egkvo65+",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"col s12\"],[9],[0,\"\\n\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"key-up\"],[\"light\",[22,0,[\"newProd\",\"homepage\"]],[27,\"action\",[[22,0,[]],\"handleChIn\"],null]]]],false],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"homepage\"],[9],[0,\"Homepage\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"input-field col s6\"],[9],[0,\"\\n      \"],[1,[27,\"input\",null,[[\"class\",\"value\",\"key-up\"],[\"light\",[22,0,[\"newProd\",\"description\"]],[27,\"action\",[[22,0,[]],\"handleChIn\"],null]]]],false],[0,\"\\n      \"],[7,\"label\"],[11,\"for\",\"description\"],[9],[0,\"Description\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn waves-effect waves-light\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"actAdd\"],null]],[12,\"disabled\",[22,0,[\"addEnab\"]]],[9],[0,\"\\n      Add\\n    \"],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"btn waves-effect waves-light\"],[12,\"onclick\",[27,\"action\",[[22,0,[]],\"actClear\"],null]],[9],[0,\"\\n      Clear\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "prodl/templates/components/prod-form.hbs"
    }
  });

  _exports.default = _default;
});
;define("prodl/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "IS25AtjH",
    "block": "{\"symbols\":[],\"statements\":[[1,[21,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "prodl/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("prodl/templates/prod", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "yawXjfFZ",
    "block": "{\"symbols\":[\"item\"],\"statements\":[[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n  \"],[1,[21,\"prod-form\"],false],[0,\"\\n\"],[10],[0,\"\\n\"],[7,\"h4\"],[9],[0,\"List of Product\"],[10],[0,\"\\n\"],[7,\"table\"],[11,\"border\",\"1\"],[9],[0,\"\\n  \"],[7,\"thead\"],[9],[0,\"\\n  \"],[7,\"tr\"],[9],[0,\"\\n    \"],[7,\"td\"],[9],[0,\"Id\"],[10],[0,\"\\n    \"],[7,\"td\"],[9],[0,\"Homepage\"],[10],[0,\"\\n    \"],[7,\"td\"],[9],[0,\"Description\"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"tbody\"],[9],[0,\"\\n\"],[4,\"each\",[[22,0,[\"model\"]]],null,{\"statements\":[[0,\"    \"],[7,\"tr\"],[9],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"id\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"homepage\"]],false],[10],[0,\"\\n      \"],[7,\"td\"],[9],[1,[22,1,[\"description\"]],false],[10],[0,\"\\n    \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "prodl/templates/prod.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('prodl/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("prodl/app")["default"].create({"name":"prodl","version":"0.0.0"});
          }
        
//# sourceMappingURL=prodl.map
