import {
  require_react_dom
} from "./chunk-UWZXFKA6.js";
import {
  __commonJS,
  require_react
} from "./chunk-UPDK7Z2H.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-burger-menu/lib/helpers/baseStyles.js
var require_baseStyles = __commonJS({
  "node_modules/react-burger-menu/lib/helpers/baseStyles.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var styles = {
      overlay: function overlay(isOpen) {
        return {
          position: "fixed",
          zIndex: 1e3,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.3)",
          opacity: isOpen ? 1 : 0,
          MozTransform: isOpen ? "" : "translate3d(100%, 0, 0)",
          MsTransform: isOpen ? "" : "translate3d(100%, 0, 0)",
          OTransform: isOpen ? "" : "translate3d(100%, 0, 0)",
          WebkitTransform: isOpen ? "" : "translate3d(100%, 0, 0)",
          transform: isOpen ? "" : "translate3d(100%, 0, 0)",
          transition: isOpen ? "opacity 0.3s" : "opacity 0.3s, transform 0s 0.3s"
        };
      },
      menuWrap: function menuWrap(isOpen, width, right) {
        return {
          position: "fixed",
          right: right ? 0 : "inherit",
          zIndex: 1100,
          width,
          height: "100%",
          MozTransform: isOpen ? "" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          MsTransform: isOpen ? "" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          OTransform: isOpen ? "" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          transform: isOpen ? "" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          transition: "all 0.5s"
        };
      },
      menu: function menu() {
        return {
          height: "100%",
          boxSizing: "border-box",
          overflow: "auto"
        };
      },
      itemList: function itemList() {
        return {
          height: "100%"
        };
      },
      item: function item() {
        return {
          display: "block"
        };
      }
    };
    exports["default"] = styles;
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/helpers/dom.js
var require_dom = __commonJS({
  "node_modules/react-burger-menu/lib/helpers/dom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.focusOnFirstMenuItem = focusOnFirstMenuItem;
    exports.focusOnLastMenuItem = focusOnLastMenuItem;
    exports.focusOnCrossButton = focusOnCrossButton;
    exports.focusOnMenuButton = focusOnMenuButton;
    exports.focusOnMenuItem = focusOnMenuItem;
    exports.focusOnNextMenuItem = focusOnNextMenuItem;
    exports.focusOnPreviousMenuItem = focusOnPreviousMenuItem;
    function focusOnFirstMenuItem() {
      var firstItem = Array.from(document.getElementsByClassName("bm-item")).shift();
      if (firstItem) {
        firstItem.focus();
      }
    }
    function focusOnLastMenuItem() {
      var lastItem = Array.from(document.getElementsByClassName("bm-item")).pop();
      if (lastItem) {
        lastItem.focus();
      }
    }
    function focusOnCrossButton() {
      var crossButton = document.getElementById("react-burger-cross-btn");
      if (crossButton) {
        crossButton.focus();
      }
    }
    function focusOnMenuButton() {
      var menuButton = document.getElementById("react-burger-menu-btn");
      if (menuButton) {
        menuButton.focus();
      }
    }
    function focusOnMenuItem(siblingType) {
      if (document.activeElement.className.includes("bm-item")) {
        var sibling = document.activeElement[siblingType];
        if (sibling) {
          sibling.focus();
        } else {
          focusOnCrossButton();
        }
      } else {
        if (siblingType === "previousElementSibling") {
          focusOnLastMenuItem();
        } else {
          focusOnFirstMenuItem();
        }
      }
    }
    function focusOnNextMenuItem() {
      focusOnMenuItem("nextElementSibling");
    }
    function focusOnPreviousMenuItem() {
      focusOnMenuItem("previousElementSibling");
    }
  }
});

// node_modules/react-burger-menu/lib/components/BurgerIcon.js
var require_BurgerIcon = __commonJS({
  "node_modules/react-burger-menu/lib/components/BurgerIcon.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _get = function get(_x, _x2, _x3) {
      var _again = true;
      _function:
        while (_again) {
          var object = _x, property = _x2, receiver = _x3;
          _again = false;
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              _x = parent;
              _x2 = property;
              _x3 = receiver;
              _again = true;
              desc = parent = void 0;
              continue _function;
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        }
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var BurgerIcon = function(_Component) {
      _inherits(BurgerIcon2, _Component);
      function BurgerIcon2(props) {
        _classCallCheck(this, BurgerIcon2);
        _get(Object.getPrototypeOf(BurgerIcon2.prototype), "constructor", this).call(this, props);
        this.state = {
          hover: false
        };
      }
      _createClass(BurgerIcon2, [{
        key: "getLineStyle",
        value: function getLineStyle(index) {
          return _extends({
            position: "absolute",
            height: "20%",
            left: 0,
            right: 0,
            top: 20 * (index * 2) + "%",
            opacity: this.state.hover ? 0.6 : 1
          }, this.state.hover && this.props.styles.bmBurgerBarsHover);
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;
          var icon = void 0;
          var buttonStyle = {
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            border: "none",
            fontSize: 0,
            background: "transparent",
            cursor: "pointer"
          };
          if (this.props.customIcon) {
            var extraProps = {
              className: ("bm-icon " + (this.props.customIcon.props.className || "")).trim(),
              style: _extends({ width: "100%", height: "100%" }, this.props.styles.bmIcon)
            };
            icon = _react2["default"].cloneElement(this.props.customIcon, extraProps);
          } else {
            icon = _react2["default"].createElement(
              "span",
              null,
              [0, 1, 2].map(function(bar) {
                return _react2["default"].createElement("span", {
                  key: bar,
                  className: ("bm-burger-bars " + _this.props.barClassName + " " + (_this.state.hover ? "bm-burger-bars-hover" : "")).trim(),
                  style: _extends({}, _this.getLineStyle(bar), _this.props.styles.bmBurgerBars)
                });
              })
            );
          }
          return _react2["default"].createElement(
            "div",
            {
              className: ("bm-burger-button " + this.props.className).trim(),
              style: _extends({ zIndex: 1e3 }, this.props.styles.bmBurgerButton)
            },
            _react2["default"].createElement(
              "button",
              {
                type: "button",
                id: "react-burger-menu-btn",
                onClick: this.props.onClick,
                onMouseOver: function() {
                  _this.setState({ hover: true });
                  if (_this.props.onIconHoverChange) {
                    _this.props.onIconHoverChange({ isMouseIn: true });
                  }
                },
                onMouseOut: function() {
                  _this.setState({ hover: false });
                  if (_this.props.onIconHoverChange) {
                    _this.props.onIconHoverChange({ isMouseIn: false });
                  }
                },
                style: buttonStyle
              },
              "Open Menu"
            ),
            icon
          );
        }
      }]);
      return BurgerIcon2;
    }(_react.Component);
    exports["default"] = BurgerIcon;
    BurgerIcon.propTypes = {
      barClassName: _propTypes2["default"].string,
      customIcon: _propTypes2["default"].element,
      styles: _propTypes2["default"].object
    };
    BurgerIcon.defaultProps = {
      barClassName: "",
      className: "",
      styles: {}
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/components/CrossIcon.js
var require_CrossIcon = __commonJS({
  "node_modules/react-burger-menu/lib/components/CrossIcon.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    var _createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var _get = function get(_x, _x2, _x3) {
      var _again = true;
      _function:
        while (_again) {
          var object = _x, property = _x2, receiver = _x3;
          _again = false;
          if (object === null)
            object = Function.prototype;
          var desc = Object.getOwnPropertyDescriptor(object, property);
          if (desc === void 0) {
            var parent = Object.getPrototypeOf(object);
            if (parent === null) {
              return void 0;
            } else {
              _x = parent;
              _x2 = property;
              _x3 = receiver;
              _again = true;
              desc = parent = void 0;
              continue _function;
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;
            if (getter === void 0) {
              return void 0;
            }
            return getter.call(receiver);
          }
        }
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var CrossIcon = function(_Component) {
      _inherits(CrossIcon2, _Component);
      function CrossIcon2() {
        _classCallCheck(this, CrossIcon2);
        _get(Object.getPrototypeOf(CrossIcon2.prototype), "constructor", this).apply(this, arguments);
      }
      _createClass(CrossIcon2, [{
        key: "getCrossStyle",
        value: function getCrossStyle(type) {
          return {
            position: "absolute",
            width: 3,
            height: 14,
            transform: type === "before" ? "rotate(45deg)" : "rotate(-45deg)"
          };
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;
          var icon;
          var buttonWrapperStyle = {
            position: "absolute",
            width: 24,
            height: 24,
            right: 8,
            top: 8
          };
          var buttonStyle = {
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            margin: 0,
            padding: 0,
            border: "none",
            fontSize: 0,
            background: "transparent",
            cursor: "pointer"
          };
          if (this.props.customIcon) {
            var extraProps = {
              className: ("bm-cross " + (this.props.customIcon.props.className || "")).trim(),
              style: _extends({ width: "100%", height: "100%" }, this.props.styles.bmCross)
            };
            icon = _react2["default"].cloneElement(this.props.customIcon, extraProps);
          } else {
            icon = _react2["default"].createElement(
              "span",
              { style: { position: "absolute", top: "6px", right: "14px" } },
              ["before", "after"].map(function(type, i) {
                return _react2["default"].createElement("span", {
                  key: i,
                  className: ("bm-cross " + _this.props.crossClassName).trim(),
                  style: _extends({}, _this.getCrossStyle(type), _this.props.styles.bmCross)
                });
              })
            );
          }
          return _react2["default"].createElement(
            "div",
            {
              className: ("bm-cross-button " + this.props.className).trim(),
              style: _extends({}, buttonWrapperStyle, this.props.styles.bmCrossButton)
            },
            _react2["default"].createElement(
              "button",
              _extends({
                type: "button",
                id: "react-burger-cross-btn",
                onClick: this.props.onClick,
                style: buttonStyle
              }, !this.props.isOpen && { tabIndex: -1 }),
              "Close Menu"
            ),
            icon
          );
        }
      }]);
      return CrossIcon2;
    }(_react.Component);
    exports["default"] = CrossIcon;
    CrossIcon.propTypes = {
      crossClassName: _propTypes2["default"].string,
      customIcon: _propTypes2["default"].element,
      isOpen: _propTypes2["default"].bool,
      styles: _propTypes2["default"].object
    };
    CrossIcon.defaultProps = {
      crossClassName: "",
      className: "",
      styles: {},
      isOpen: false
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menuFactory.js
var require_menuFactory = __commonJS({
  "node_modules/react-burger-menu/lib/menuFactory.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _slicedToArray = /* @__PURE__ */ function() {
      function sliceIterator(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = void 0;
        try {
          for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i)
              break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"])
              _i["return"]();
          } finally {
            if (_d)
              throw _e;
          }
        }
        return _arr;
      }
      return function(arr, i) {
        if (Array.isArray(arr)) {
          return arr;
        } else if (Symbol.iterator in Object(arr)) {
          return sliceIterator(arr, i);
        } else {
          throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
      };
    }();
    var _extends = Object.assign || function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _react = require_react();
    var _react2 = _interopRequireDefault(_react);
    var _reactDom = require_react_dom();
    var _reactDom2 = _interopRequireDefault(_reactDom);
    var _propTypes = require_prop_types();
    var _propTypes2 = _interopRequireDefault(_propTypes);
    var _helpersBaseStyles = require_baseStyles();
    var _helpersBaseStyles2 = _interopRequireDefault(_helpersBaseStyles);
    var _helpersDom = require_dom();
    var _componentsBurgerIcon = require_BurgerIcon();
    var _componentsBurgerIcon2 = _interopRequireDefault(_componentsBurgerIcon);
    var _componentsCrossIcon = require_CrossIcon();
    var _componentsCrossIcon2 = _interopRequireDefault(_componentsCrossIcon);
    exports["default"] = function(styles) {
      if (!styles) {
        throw new Error("No styles supplied");
      }
      var ARROW_DOWN = "ArrowDown";
      var ARROW_UP = "ArrowUp";
      var ESCAPE = "Escape";
      var SPACE = " ";
      var HOME = "Home";
      var END = "End";
      function usePrevious(value) {
        var ref = _react2["default"].useRef(value);
        _react2["default"].useEffect(function() {
          ref.current = value;
        });
        return ref.current;
      }
      var Menu = function Menu2(props) {
        var _React$useState = _react2["default"].useState(false);
        var _React$useState2 = _slicedToArray(_React$useState, 2);
        var isOpen = _React$useState2[0];
        var setIsOpen = _React$useState2[1];
        var timeoutId = _react2["default"].useRef();
        var toggleOptions = _react2["default"].useRef({});
        var prevIsOpenProp = usePrevious(props.isOpen);
        _react2["default"].useEffect(function() {
          if (props.isOpen) {
            toggleMenu({ isOpen: true, noStateChange: true });
          }
          return function cleanup() {
            applyWrapperStyles(false);
            clearCurrentTimeout();
          };
        }, []);
        _react2["default"].useEffect(function() {
          var wasToggled = typeof props.isOpen !== "undefined" && props.isOpen !== isOpen && props.isOpen !== prevIsOpenProp;
          if (wasToggled) {
            toggleMenu();
            return;
          }
          if (styles.svg) {
            (function() {
              var morphShape = document.getElementById("bm-morph-shape");
              var path = styles.svg.lib(morphShape).select("path");
              if (isOpen) {
                styles.svg.animate(path);
              } else {
                setTimeout(function() {
                  path.attr("d", styles.svg.pathInitial);
                }, 300);
              }
            })();
          }
        });
        _react2["default"].useEffect(function() {
          var _toggleOptions$current = toggleOptions.current;
          var noStateChange = _toggleOptions$current.noStateChange;
          var focusOnLastItem = _toggleOptions$current.focusOnLastItem;
          if (!noStateChange) {
            props.onStateChange({ isOpen });
          }
          if (!props.disableAutoFocus) {
            if (isOpen) {
              focusOnLastItem ? (0, _helpersDom.focusOnLastMenuItem)() : (0, _helpersDom.focusOnFirstMenuItem)();
            } else {
              if (document.activeElement) {
                document.activeElement.blur();
              } else {
                document.body.blur();
              }
            }
          }
          clearCurrentTimeout();
          timeoutId.current = setTimeout(function() {
            timeoutId.current = null;
            if (!isOpen) {
              applyWrapperStyles(false);
            }
          }, 500);
          var defaultOnKeyDown = isOpen ? onKeyDownOpen : onKeyDownClosed;
          var onKeyDown = props.customOnKeyDown || defaultOnKeyDown;
          window.addEventListener("keydown", onKeyDown);
          return function cleanup() {
            window.removeEventListener("keydown", onKeyDown);
          };
        }, [isOpen]);
        function toggleMenu() {
          var options = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
          toggleOptions.current = options;
          applyWrapperStyles();
          setTimeout(function() {
            setIsOpen(function(open2) {
              return typeof options.isOpen !== "undefined" ? options.isOpen : !open2;
            });
          });
        }
        function open() {
          if (typeof props.onOpen === "function") {
            props.onOpen();
          } else {
            toggleMenu();
          }
        }
        function close() {
          if (typeof props.onClose === "function") {
            props.onClose();
          } else {
            toggleMenu();
          }
        }
        function getStyle(style, index) {
          var width = props.width;
          var right = props.right;
          var formattedWidth = typeof width !== "string" ? width + "px" : width;
          return style(isOpen, formattedWidth, right, index);
        }
        function getStyles(el, index, inline) {
          var propName = "bm" + el.replace(el.charAt(0), el.charAt(0).toUpperCase());
          var output = _helpersBaseStyles2["default"][el] ? getStyle(_helpersBaseStyles2["default"][el]) : {};
          if (styles[el]) {
            output = _extends({}, output, getStyle(styles[el], index + 1));
          }
          if (props.styles[propName]) {
            output = _extends({}, output, props.styles[propName]);
          }
          if (inline) {
            output = _extends({}, output, inline);
          }
          if (props.noTransition) {
            delete output.transition;
          }
          return output;
        }
        function handleExternalWrapper(id, wrapperStyles, set) {
          var wrapper = document.getElementById(id);
          if (!wrapper) {
            console.error("Element with ID '" + id + "' not found");
            return;
          }
          var builtStyles = getStyle(wrapperStyles);
          for (var prop in builtStyles) {
            if (builtStyles.hasOwnProperty(prop)) {
              wrapper.style[prop] = set ? builtStyles[prop] : "";
            }
          }
          var applyOverflow = function applyOverflow2(el) {
            return el.style["overflow-x"] = set ? "hidden" : "";
          };
          if (!props.htmlClassName) {
            applyOverflow(document.querySelector("html"));
          }
          if (!props.bodyClassName) {
            applyOverflow(document.querySelector("body"));
          }
        }
        function applyWrapperStyles() {
          var set = arguments.length <= 0 || arguments[0] === void 0 ? true : arguments[0];
          var applyClass = function applyClass2(el, className) {
            return el.classList[set ? "add" : "remove"](className);
          };
          if (props.htmlClassName) {
            applyClass(document.querySelector("html"), props.htmlClassName);
          }
          if (props.bodyClassName) {
            applyClass(document.querySelector("body"), props.bodyClassName);
          }
          if (styles.pageWrap && props.pageWrapId) {
            handleExternalWrapper(props.pageWrapId, styles.pageWrap, set);
          }
          if (styles.outerContainer && props.outerContainerId) {
            handleExternalWrapper(props.outerContainerId, styles.outerContainer, set);
          }
          var menuWrap = document.querySelector(".bm-menu-wrap");
          if (menuWrap) {
            if (set) {
              menuWrap.removeAttribute("hidden");
            } else {
              menuWrap.setAttribute("hidden", true);
            }
          }
        }
        function clearCurrentTimeout() {
          if (timeoutId.current) {
            clearTimeout(timeoutId.current);
          }
        }
        function onKeyDownOpen(e) {
          e = e || window.event;
          switch (e.key) {
            case ESCAPE:
              if (!props.disableCloseOnEsc) {
                close();
                (0, _helpersDom.focusOnMenuButton)();
              }
              break;
            case ARROW_DOWN:
              (0, _helpersDom.focusOnNextMenuItem)();
              break;
            case ARROW_UP:
              (0, _helpersDom.focusOnPreviousMenuItem)();
              break;
            case HOME:
              (0, _helpersDom.focusOnFirstMenuItem)();
              break;
            case END:
              (0, _helpersDom.focusOnLastMenuItem)();
              break;
          }
        }
        function onKeyDownClosed(e) {
          e = e || window.event;
          if (e.target === document.getElementById("react-burger-menu-btn")) {
            switch (e.key) {
              case ARROW_DOWN:
              case SPACE:
                toggleMenu();
                break;
              case ARROW_UP:
                toggleMenu({ focusOnLastItem: true });
                break;
            }
          }
        }
        function handleOverlayClick() {
          if (props.disableOverlayClick === true || typeof props.disableOverlayClick === "function" && props.disableOverlayClick()) {
            return;
          } else {
            close();
          }
        }
        return _react2["default"].createElement(
          "div",
          null,
          !props.noOverlay && _react2["default"].createElement("div", {
            className: ("bm-overlay " + props.overlayClassName).trim(),
            onClick: handleOverlayClick,
            style: getStyles("overlay")
          }),
          props.customBurgerIcon !== false && _react2["default"].createElement(
            "div",
            { style: getStyles("burgerIcon") },
            _react2["default"].createElement(_componentsBurgerIcon2["default"], {
              onClick: open,
              styles: props.styles,
              customIcon: props.customBurgerIcon,
              className: props.burgerButtonClassName,
              barClassName: props.burgerBarClassName,
              onIconStateChange: props.onIconStateChange
            })
          ),
          _react2["default"].createElement(
            "div",
            {
              id: props.id,
              className: ("bm-menu-wrap " + props.className).trim(),
              style: getStyles("menuWrap"),
              "aria-hidden": !isOpen
            },
            styles.svg && _react2["default"].createElement(
              "div",
              {
                id: "bm-morph-shape",
                className: ("bm-morph-shape " + props.morphShapeClassName).trim(),
                style: getStyles("morphShape")
              },
              _react2["default"].createElement(
                "svg",
                {
                  width: "100%",
                  height: "100%",
                  viewBox: "0 0 100 800",
                  preserveAspectRatio: "none"
                },
                _react2["default"].createElement("path", { d: styles.svg.pathInitial })
              )
            ),
            _react2["default"].createElement(
              "div",
              {
                className: ("bm-menu " + props.menuClassName).trim(),
                style: getStyles("menu")
              },
              _react2["default"].createElement(props.itemListElement, {
                className: ("bm-item-list " + props.itemListClassName).trim(),
                style: getStyles("itemList")
              }, _react2["default"].Children.map(props.children, function(item, index) {
                if (item) {
                  var classList = ["bm-item", props.itemClassName, item.props.className].filter(function(className) {
                    return !!className;
                  }).join(" ");
                  var extraProps = _extends({
                    key: index,
                    className: classList,
                    style: getStyles("item", index, item.props.style)
                  }, !isOpen && { tabIndex: -1 });
                  return _react2["default"].cloneElement(item, extraProps);
                }
              }))
            ),
            props.customCrossIcon !== false && _react2["default"].createElement(
              "div",
              { style: getStyles("closeButton") },
              _react2["default"].createElement(_componentsCrossIcon2["default"], {
                onClick: close,
                styles: props.styles,
                customIcon: props.customCrossIcon,
                className: props.crossButtonClassName,
                crossClassName: props.crossClassName,
                isOpen
              })
            )
          )
        );
      };
      Menu.propTypes = {
        bodyClassName: _propTypes2["default"].string,
        burgerBarClassName: _propTypes2["default"].string,
        burgerButtonClassName: _propTypes2["default"].string,
        className: _propTypes2["default"].string,
        crossButtonClassName: _propTypes2["default"].string,
        crossClassName: _propTypes2["default"].string,
        customBurgerIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].oneOf([false])]),
        customCrossIcon: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].oneOf([false])]),
        customOnKeyDown: _propTypes2["default"].func,
        disableAutoFocus: _propTypes2["default"].bool,
        disableCloseOnEsc: _propTypes2["default"].bool,
        disableOverlayClick: _propTypes2["default"].oneOfType([_propTypes2["default"].bool, _propTypes2["default"].func]),
        htmlClassName: _propTypes2["default"].string,
        id: _propTypes2["default"].string,
        isOpen: _propTypes2["default"].bool,
        itemClassName: _propTypes2["default"].string,
        itemListClassName: _propTypes2["default"].string,
        itemListElement: _propTypes2["default"].oneOf(["div", "nav"]),
        menuClassName: _propTypes2["default"].string,
        morphShapeClassName: _propTypes2["default"].string,
        noOverlay: _propTypes2["default"].bool,
        noTransition: _propTypes2["default"].bool,
        onClose: _propTypes2["default"].func,
        onIconHoverChange: _propTypes2["default"].func,
        onOpen: _propTypes2["default"].func,
        onStateChange: _propTypes2["default"].func,
        outerContainerId: styles && styles.outerContainer ? _propTypes2["default"].string.isRequired : _propTypes2["default"].string,
        overlayClassName: _propTypes2["default"].string,
        pageWrapId: styles && styles.pageWrap ? _propTypes2["default"].string.isRequired : _propTypes2["default"].string,
        right: _propTypes2["default"].bool,
        styles: _propTypes2["default"].object,
        width: _propTypes2["default"].oneOfType([_propTypes2["default"].number, _propTypes2["default"].string])
      };
      Menu.defaultProps = {
        bodyClassName: "",
        burgerBarClassName: "",
        burgerButtonClassName: "",
        className: "",
        crossButtonClassName: "",
        crossClassName: "",
        disableAutoFocus: false,
        disableCloseOnEsc: false,
        htmlClassName: "",
        id: "",
        itemClassName: "",
        itemListClassName: "",
        menuClassName: "",
        morphShapeClassName: "",
        noOverlay: false,
        noTransition: false,
        onStateChange: function onStateChange() {
        },
        outerContainerId: "",
        overlayClassName: "",
        pageWrapId: "",
        styles: {},
        width: 300,
        onIconHoverChange: function onIconHoverChange() {
        },
        itemListElement: "nav"
      };
      return Menu;
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/slide.js
var require_slide = __commonJS({
  "node_modules/react-burger-menu/lib/menus/slide.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {};
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/stack.js
var require_stack = __commonJS({
  "node_modules/react-burger-menu/lib/menus/stack.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {
      menuWrap: function menuWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "" : right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)",
          MsTransform: isOpen ? "" : right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)",
          OTransform: isOpen ? "" : right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)",
          transform: isOpen ? "" : right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)",
          transition: isOpen ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)" : "transform 0.4s cubic-bezier(0.7, 0, 0.3, 1)"
        };
      },
      item: function item(isOpen, width, right, nthChild) {
        return {
          MozTransform: isOpen ? "" : "translate3d(0, " + nthChild * 500 + "px, 0)",
          MsTransform: isOpen ? "" : "translate3d(0, " + nthChild * 500 + "px, 0)",
          OTransform: isOpen ? "" : "translate3d(0, " + nthChild * 500 + "px, 0)",
          WebkitTransform: isOpen ? "" : "translate3d(0, " + nthChild * 500 + "px, 0)",
          transform: isOpen ? "" : "translate3d(0, " + nthChild * 500 + "px, 0)",
          transition: isOpen ? "transform 0.8s cubic-bezier(0.7, 0, 0.3, 1)" : "transform 0s 0.2s cubic-bezier(0.7, 0, 0.3, 1)"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/eve/eve.js
var require_eve = __commonJS({
  "node_modules/eve/eve.js"(exports, module) {
    (function(glob) {
      var version = "0.5.4", has = "hasOwnProperty", separator = /[\.\/]/, comaseparator = /\s*,\s*/, wildcard = "*", numsort = function(a, b) {
        return a - b;
      }, current_event, stop, events = { n: {} }, firstDefined = function() {
        for (var i = 0, ii = this.length; i < ii; i++) {
          if (typeof this[i] != "undefined") {
            return this[i];
          }
        }
      }, lastDefined = function() {
        var i = this.length;
        while (--i) {
          if (typeof this[i] != "undefined") {
            return this[i];
          }
        }
      }, objtos = Object.prototype.toString, Str = String, isArray = Array.isArray || function(ar) {
        return ar instanceof Array || objtos.call(ar) == "[object Array]";
      }, eve2 = function(name, scope) {
        var oldstop = stop, args = Array.prototype.slice.call(arguments, 2), listeners = eve2.listeners(name), z = 0, l, indexed = [], queue = {}, out = [], ce = current_event;
        out.firstDefined = firstDefined;
        out.lastDefined = lastDefined;
        current_event = name;
        stop = 0;
        for (var i = 0, ii = listeners.length; i < ii; i++)
          if ("zIndex" in listeners[i]) {
            indexed.push(listeners[i].zIndex);
            if (listeners[i].zIndex < 0) {
              queue[listeners[i].zIndex] = listeners[i];
            }
          }
        indexed.sort(numsort);
        while (indexed[z] < 0) {
          l = queue[indexed[z++]];
          out.push(l.apply(scope, args));
          if (stop) {
            stop = oldstop;
            return out;
          }
        }
        for (i = 0; i < ii; i++) {
          l = listeners[i];
          if ("zIndex" in l) {
            if (l.zIndex == indexed[z]) {
              out.push(l.apply(scope, args));
              if (stop) {
                break;
              }
              do {
                z++;
                l = queue[indexed[z]];
                l && out.push(l.apply(scope, args));
                if (stop) {
                  break;
                }
              } while (l);
            } else {
              queue[l.zIndex] = l;
            }
          } else {
            out.push(l.apply(scope, args));
            if (stop) {
              break;
            }
          }
        }
        stop = oldstop;
        current_event = ce;
        return out;
      };
      eve2._events = events;
      eve2.listeners = function(name) {
        var names = isArray(name) ? name : name.split(separator), e = events, item, items, k, i, ii, j, jj, nes, es = [e], out = [];
        for (i = 0, ii = names.length; i < ii; i++) {
          nes = [];
          for (j = 0, jj = es.length; j < jj; j++) {
            e = es[j].n;
            items = [e[names[i]], e[wildcard]];
            k = 2;
            while (k--) {
              item = items[k];
              if (item) {
                nes.push(item);
                out = out.concat(item.f || []);
              }
            }
          }
          es = nes;
        }
        return out;
      };
      eve2.separator = function(sep) {
        if (sep) {
          sep = Str(sep).replace(/(?=[\.\^\]\[\-])/g, "\\");
          sep = "[" + sep + "]";
          separator = new RegExp(sep);
        } else {
          separator = /[\.\/]/;
        }
      };
      eve2.on = function(name, f) {
        if (typeof f != "function") {
          return function() {
          };
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        for (var i = 0, ii = names.length; i < ii; i++) {
          (function(name2) {
            var names2 = isArray(name2) ? name2 : Str(name2).split(separator), e = events, exist;
            for (var i2 = 0, ii2 = names2.length; i2 < ii2; i2++) {
              e = e.n;
              e = e.hasOwnProperty(names2[i2]) && e[names2[i2]] || (e[names2[i2]] = { n: {} });
            }
            e.f = e.f || [];
            for (i2 = 0, ii2 = e.f.length; i2 < ii2; i2++)
              if (e.f[i2] == f) {
                exist = true;
                break;
              }
            !exist && e.f.push(f);
          })(names[i]);
        }
        return function(zIndex) {
          if (+zIndex == +zIndex) {
            f.zIndex = +zIndex;
          }
        };
      };
      eve2.f = function(event) {
        var attrs = [].slice.call(arguments, 1);
        return function() {
          eve2.apply(null, [event, null].concat(attrs).concat([].slice.call(arguments, 0)));
        };
      };
      eve2.stop = function() {
        stop = 1;
      };
      eve2.nt = function(subname) {
        var cur = isArray(current_event) ? current_event.join(".") : current_event;
        if (subname) {
          return new RegExp("(?:\\.|\\/|^)" + subname + "(?:\\.|\\/|$)").test(cur);
        }
        return cur;
      };
      eve2.nts = function() {
        return isArray(current_event) ? current_event : current_event.split(separator);
      };
      eve2.off = eve2.unbind = function(name, f) {
        if (!name) {
          eve2._events = events = { n: {} };
          return;
        }
        var names = isArray(name) ? isArray(name[0]) ? name : [name] : Str(name).split(comaseparator);
        if (names.length > 1) {
          for (var i = 0, ii = names.length; i < ii; i++) {
            eve2.off(names[i], f);
          }
          return;
        }
        names = isArray(name) ? name : Str(name).split(separator);
        var e, key, splice, i, ii, j, jj, cur = [events], inodes = [];
        for (i = 0, ii = names.length; i < ii; i++) {
          for (j = 0; j < cur.length; j += splice.length - 2) {
            splice = [j, 1];
            e = cur[j].n;
            if (names[i] != wildcard) {
              if (e[names[i]]) {
                splice.push(e[names[i]]);
                inodes.unshift({
                  n: e,
                  name: names[i]
                });
              }
            } else {
              for (key in e)
                if (e[has](key)) {
                  splice.push(e[key]);
                  inodes.unshift({
                    n: e,
                    name: key
                  });
                }
            }
            cur.splice.apply(cur, splice);
          }
        }
        for (i = 0, ii = cur.length; i < ii; i++) {
          e = cur[i];
          while (e.n) {
            if (f) {
              if (e.f) {
                for (j = 0, jj = e.f.length; j < jj; j++)
                  if (e.f[j] == f) {
                    e.f.splice(j, 1);
                    break;
                  }
                !e.f.length && delete e.f;
              }
              for (key in e.n)
                if (e.n[has](key) && e.n[key].f) {
                  var funcs = e.n[key].f;
                  for (j = 0, jj = funcs.length; j < jj; j++)
                    if (funcs[j] == f) {
                      funcs.splice(j, 1);
                      break;
                    }
                  !funcs.length && delete e.n[key].f;
                }
            } else {
              delete e.f;
              for (key in e.n)
                if (e.n[has](key) && e.n[key].f) {
                  delete e.n[key].f;
                }
            }
            e = e.n;
          }
        }
        prune:
          for (i = 0, ii = inodes.length; i < ii; i++) {
            e = inodes[i];
            for (key in e.n[e.name].f) {
              continue prune;
            }
            for (key in e.n[e.name].n) {
              continue prune;
            }
            delete e.n[e.name];
          }
      };
      eve2.once = function(name, f) {
        var f2 = function() {
          eve2.off(name, f2);
          return f.apply(this, arguments);
        };
        return eve2.on(name, f2);
      };
      eve2.version = version;
      eve2.toString = function() {
        return "You are running Eve " + version;
      };
      glob.eve = eve2;
      typeof module != "undefined" && module.exports ? module.exports = eve2 : typeof define === "function" && define.amd ? define("eve", [], function() {
        return eve2;
      }) : glob.eve = eve2;
    })(typeof window != "undefined" ? window : exports);
  }
});

// node_modules/snapsvg-cjs/dist/snap.svg-cjs.js
var require_snap_svg_cjs = __commonJS({
  "node_modules/snapsvg-cjs/dist/snap.svg-cjs.js"(exports, module) {
    window.eve = require_eve();
    var mina = function(eve2) {
      var animations = {}, requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        setTimeout(callback, 16, (/* @__PURE__ */ new Date()).getTime());
        return true;
      }, requestID, isArray = Array.isArray || function(a) {
        return a instanceof Array || Object.prototype.toString.call(a) == "[object Array]";
      }, idgen = 0, idprefix = "M" + (+/* @__PURE__ */ new Date()).toString(36), ID = function() {
        return idprefix + (idgen++).toString(36);
      }, diff = function(a, b, A, B) {
        if (isArray(a)) {
          res = [];
          for (var i = 0, ii = a.length; i < ii; i++) {
            res[i] = diff(a[i], b, A[i], B);
          }
          return res;
        }
        var dif = (A - a) / (B - b);
        return function(bb) {
          return a + dif * (bb - b);
        };
      }, timer = Date.now || function() {
        return +/* @__PURE__ */ new Date();
      }, sta = function(val) {
        var a = this;
        if (val == null) {
          return a.s;
        }
        var ds = a.s - val;
        a.b += a.dur * ds;
        a.B += a.dur * ds;
        a.s = val;
      }, speed = function(val) {
        var a = this;
        if (val == null) {
          return a.spd;
        }
        a.spd = val;
      }, duration = function(val) {
        var a = this;
        if (val == null) {
          return a.dur;
        }
        a.s = a.s * val / a.dur;
        a.dur = val;
      }, stopit = function() {
        var a = this;
        delete animations[a.id];
        a.update();
        eve2("mina.stop." + a.id, a);
      }, pause = function() {
        var a = this;
        if (a.pdif) {
          return;
        }
        delete animations[a.id];
        a.update();
        a.pdif = a.get() - a.b;
      }, resume = function() {
        var a = this;
        if (!a.pdif) {
          return;
        }
        a.b = a.get() - a.pdif;
        delete a.pdif;
        animations[a.id] = a;
        frame();
      }, update = function() {
        var a = this, res2;
        if (isArray(a.start)) {
          res2 = [];
          for (var j = 0, jj = a.start.length; j < jj; j++) {
            res2[j] = +a.start[j] + (a.end[j] - a.start[j]) * a.easing(a.s);
          }
        } else {
          res2 = +a.start + (a.end - a.start) * a.easing(a.s);
        }
        a.set(res2);
      }, frame = function(timeStamp) {
        if (!timeStamp) {
          if (!requestID) {
            requestID = requestAnimFrame(frame);
          }
          return;
        }
        var len = 0;
        for (var i in animations)
          if (animations.hasOwnProperty(i)) {
            var a = animations[i], b = a.get(), res2;
            len++;
            a.s = (b - a.b) / (a.dur / a.spd);
            if (a.s >= 1) {
              delete animations[i];
              a.s = 1;
              len--;
              (function(a2) {
                setTimeout(function() {
                  eve2("mina.finish." + a2.id, a2);
                });
              })(a);
            }
            a.update();
          }
        requestID = len ? requestAnimFrame(frame) : false;
      }, mina2 = function(a, A, b, B, get, set, easing) {
        var anim = {
          id: ID(),
          start: a,
          end: A,
          b,
          s: 0,
          dur: B - b,
          spd: 1,
          get,
          set,
          easing: easing || mina2.linear,
          status: sta,
          speed,
          duration,
          stop: stopit,
          pause,
          resume,
          update
        };
        animations[anim.id] = anim;
        var len = 0, i;
        for (i in animations)
          if (animations.hasOwnProperty(i)) {
            len++;
            if (len == 2) {
              break;
            }
          }
        len == 1 && frame();
        return anim;
      };
      mina2.time = timer;
      mina2.getById = function(id) {
        return animations[id] || null;
      };
      mina2.linear = function(n) {
        return n;
      };
      mina2.easeout = function(n) {
        return Math.pow(n, 1.7);
      };
      mina2.easein = function(n) {
        return Math.pow(n, 0.48);
      };
      mina2.easeinout = function(n) {
        if (n == 1) {
          return 1;
        }
        if (n == 0) {
          return 0;
        }
        var q = 0.48 - n / 1.04, Q = Math.sqrt(0.1734 + q * q), x = Q - q, X = Math.pow(Math.abs(x), 1 / 3) * (x < 0 ? -1 : 1), y = -Q - q, Y = Math.pow(Math.abs(y), 1 / 3) * (y < 0 ? -1 : 1), t = X + Y + 0.5;
        return (1 - t) * 3 * t * t + t * t * t;
      };
      mina2.backin = function(n) {
        if (n == 1) {
          return 1;
        }
        var s = 1.70158;
        return n * n * ((s + 1) * n - s);
      };
      mina2.backout = function(n) {
        if (n == 0) {
          return 0;
        }
        n = n - 1;
        var s = 1.70158;
        return n * n * ((s + 1) * n + s) + 1;
      };
      mina2.elastic = function(n) {
        if (n == !!n) {
          return n;
        }
        return Math.pow(2, -10 * n) * Math.sin((n - 0.075) * (2 * Math.PI) / 0.3) + 1;
      };
      mina2.bounce = function(n) {
        var s = 7.5625, p = 2.75, l;
        if (n < 1 / p) {
          l = s * n * n;
        } else {
          if (n < 2 / p) {
            n -= 1.5 / p;
            l = s * n * n + 0.75;
          } else {
            if (n < 2.5 / p) {
              n -= 2.25 / p;
              l = s * n * n + 0.9375;
            } else {
              n -= 2.625 / p;
              l = s * n * n + 0.984375;
            }
          }
        }
        return l;
      };
      window.mina = mina2;
      return mina2;
    }(typeof eve == "undefined" ? function() {
    } : eve);
    var Snap = function(root) {
      Snap2.version = "0.5.1";
      function Snap2(w, h) {
        if (w) {
          if (w.nodeType) {
            return wrap(w);
          }
          if (is(w, "array") && Snap2.set) {
            return Snap2.set.apply(Snap2, w);
          }
          if (w instanceof Element) {
            return w;
          }
          if (h == null) {
            try {
              w = glob.doc.querySelector(String(w));
              return wrap(w);
            } catch (e) {
              return null;
            }
          }
        }
        w = w == null ? "100%" : w;
        h = h == null ? "100%" : h;
        return new Paper(w, h);
      }
      Snap2.toString = function() {
        return "Snap v" + this.version;
      };
      Snap2._ = {};
      var glob = {
        win: root.window,
        doc: root.window.document
      };
      Snap2._.glob = glob;
      var has = "hasOwnProperty", Str = String, toFloat = parseFloat, toInt = parseInt, math2 = Math, mmax = math2.max, mmin = math2.min, abs = math2.abs, pow = math2.pow, PI = math2.PI, round = math2.round, E = "", S = " ", objectToString = Object.prototype.toString, ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, colourRegExp = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, bezierrg = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/, separator = Snap2._.separator = /[,\s]+/, whitespace = /[\s]/g, commaSpaces = /[\s]*,[\s]*/, hsrg = { hs: 1, rg: 1 }, pathCommand = /([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, tCommand = /([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/ig, pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/ig, idgen = 0, idprefix = "S" + (+/* @__PURE__ */ new Date()).toString(36), ID = function(el) {
        return (el && el.type ? el.type : E) + idprefix + (idgen++).toString(36);
      }, xlink = "http://www.w3.org/1999/xlink", xmlns = "http://www.w3.org/2000/svg", hub = {}, URL = Snap2.url = function(url) {
        return "url('#" + url + "')";
      };
      function $(el, attr) {
        if (attr) {
          if (el == "#text") {
            el = glob.doc.createTextNode(attr.text || attr["#text"] || "");
          }
          if (el == "#comment") {
            el = glob.doc.createComment(attr.text || attr["#text"] || "");
          }
          if (typeof el == "string") {
            el = $(el);
          }
          if (typeof attr == "string") {
            if (el.nodeType == 1) {
              if (attr.substring(0, 6) == "xlink:") {
                return el.getAttributeNS(xlink, attr.substring(6));
              }
              if (attr.substring(0, 4) == "xml:") {
                return el.getAttributeNS(xmlns, attr.substring(4));
              }
              return el.getAttribute(attr);
            } else if (attr == "text") {
              return el.nodeValue;
            } else {
              return null;
            }
          }
          if (el.nodeType == 1) {
            for (var key in attr)
              if (attr[has](key)) {
                var val = Str(attr[key]);
                if (val) {
                  if (key.substring(0, 6) == "xlink:") {
                    el.setAttributeNS(xlink, key.substring(6), val);
                  } else if (key.substring(0, 4) == "xml:") {
                    el.setAttributeNS(xmlns, key.substring(4), val);
                  } else {
                    el.setAttribute(key, val);
                  }
                } else {
                  el.removeAttribute(key);
                }
              }
          } else if ("text" in attr) {
            el.nodeValue = attr.text;
          }
        } else {
          el = glob.doc.createElementNS(xmlns, el);
        }
        return el;
      }
      Snap2._.$ = $;
      Snap2._.id = ID;
      function getAttrs(el) {
        var attrs = el.attributes, name, out = {};
        for (var i = 0; i < attrs.length; i++) {
          if (attrs[i].namespaceURI == xlink) {
            name = "xlink:";
          } else {
            name = "";
          }
          name += attrs[i].name;
          out[name] = attrs[i].textContent;
        }
        return out;
      }
      function is(o, type) {
        type = Str.prototype.toLowerCase.call(type);
        if (type == "finite") {
          return isFinite(o);
        }
        if (type == "array" && (o instanceof Array || Array.isArray && Array.isArray(o))) {
          return true;
        }
        return type == "null" && o === null || type == typeof o && o !== null || type == "object" && o === Object(o) || objectToString.call(o).slice(8, -1).toLowerCase() == type;
      }
      Snap2.format = /* @__PURE__ */ function() {
        var tokenRegex = /\{([^\}]+)\}/g, objNotationRegex = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, replacer = function(all, key, obj) {
          var res2 = obj;
          key.replace(objNotationRegex, function(all2, name, quote, quotedName, isFunc) {
            name = name || quotedName;
            if (res2) {
              if (name in res2) {
                res2 = res2[name];
              }
              typeof res2 == "function" && isFunc && (res2 = res2());
            }
          });
          res2 = (res2 == null || res2 == obj ? all : res2) + "";
          return res2;
        };
        return function(str, obj) {
          return Str(str).replace(tokenRegex, function(all, key) {
            return replacer(all, key, obj);
          });
        };
      }();
      function clone(obj) {
        if (typeof obj == "function" || Object(obj) !== obj) {
          return obj;
        }
        var res2 = new obj.constructor();
        for (var key in obj)
          if (obj[has](key)) {
            res2[key] = clone(obj[key]);
          }
        return res2;
      }
      Snap2._.clone = clone;
      function repush(array, item) {
        for (var i = 0, ii = array.length; i < ii; i++)
          if (array[i] === item) {
            return array.push(array.splice(i, 1)[0]);
          }
      }
      function cacher(f, scope, postprocessor) {
        function newf() {
          var arg = Array.prototype.slice.call(arguments, 0), args = arg.join("␀"), cache = newf.cache = newf.cache || {}, count = newf.count = newf.count || [];
          if (cache[has](args)) {
            repush(count, args);
            return postprocessor ? postprocessor(cache[args]) : cache[args];
          }
          count.length >= 1e3 && delete cache[count.shift()];
          count.push(args);
          cache[args] = f.apply(scope, arg);
          return postprocessor ? postprocessor(cache[args]) : cache[args];
        }
        return newf;
      }
      Snap2._.cacher = cacher;
      function angle(x1, y1, x2, y2, x3, y3) {
        if (x3 == null) {
          var x = x1 - x2, y = y1 - y2;
          if (!x && !y) {
            return 0;
          }
          return (180 + math2.atan2(-y, -x) * 180 / PI + 360) % 360;
        } else {
          return angle(x1, y1, x3, y3) - angle(x2, y2, x3, y3);
        }
      }
      function rad(deg2) {
        return deg2 % 360 * PI / 180;
      }
      function deg(rad2) {
        return rad2 * 180 / PI % 360;
      }
      function x_y() {
        return this.x + S + this.y;
      }
      function x_y_w_h() {
        return this.x + S + this.y + S + this.width + " × " + this.height;
      }
      Snap2.rad = rad;
      Snap2.deg = deg;
      Snap2.sin = function(angle2) {
        return math2.sin(Snap2.rad(angle2));
      };
      Snap2.tan = function(angle2) {
        return math2.tan(Snap2.rad(angle2));
      };
      Snap2.cos = function(angle2) {
        return math2.cos(Snap2.rad(angle2));
      };
      Snap2.asin = function(num) {
        return Snap2.deg(math2.asin(num));
      };
      Snap2.acos = function(num) {
        return Snap2.deg(math2.acos(num));
      };
      Snap2.atan = function(num) {
        return Snap2.deg(math2.atan(num));
      };
      Snap2.atan2 = function(num) {
        return Snap2.deg(math2.atan2(num));
      };
      Snap2.angle = angle;
      Snap2.len = function(x1, y1, x2, y2) {
        return Math.sqrt(Snap2.len2(x1, y1, x2, y2));
      };
      Snap2.len2 = function(x1, y1, x2, y2) {
        return (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
      };
      Snap2.closestPoint = function(path, x, y) {
        function distance2(p) {
          var dx = p.x - x, dy = p.y - y;
          return dx * dx + dy * dy;
        }
        var pathNode = path.node, pathLength = pathNode.getTotalLength(), precision = pathLength / pathNode.pathSegList.numberOfItems * 0.125, best, bestLength, bestDistance = Infinity;
        for (var scan, scanLength = 0, scanDistance; scanLength <= pathLength; scanLength += precision) {
          if ((scanDistance = distance2(scan = pathNode.getPointAtLength(scanLength))) < bestDistance) {
            best = scan;
            bestLength = scanLength;
            bestDistance = scanDistance;
          }
        }
        precision *= 0.5;
        while (precision > 0.5) {
          var before, after, beforeLength, afterLength, beforeDistance, afterDistance;
          if ((beforeLength = bestLength - precision) >= 0 && (beforeDistance = distance2(before = pathNode.getPointAtLength(beforeLength))) < bestDistance) {
            best = before;
            bestLength = beforeLength;
            bestDistance = beforeDistance;
          } else if ((afterLength = bestLength + precision) <= pathLength && (afterDistance = distance2(after = pathNode.getPointAtLength(afterLength))) < bestDistance) {
            best = after;
            bestLength = afterLength;
            bestDistance = afterDistance;
          } else {
            precision *= 0.5;
          }
        }
        best = {
          x: best.x,
          y: best.y,
          length: bestLength,
          distance: Math.sqrt(bestDistance)
        };
        return best;
      };
      Snap2.is = is;
      Snap2.snapTo = function(values, value, tolerance) {
        tolerance = is(tolerance, "finite") ? tolerance : 10;
        if (is(values, "array")) {
          var i = values.length;
          while (i--)
            if (abs(values[i] - value) <= tolerance) {
              return values[i];
            }
        } else {
          values = +values;
          var rem = value % values;
          if (rem < tolerance) {
            return value - rem;
          }
          if (rem > values - tolerance) {
            return value - rem + values;
          }
        }
        return value;
      };
      Snap2.getRGB = cacher(function(colour) {
        if (!colour || !!((colour = Str(colour)).indexOf("-") + 1)) {
          return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
        }
        if (colour == "none") {
          return { r: -1, g: -1, b: -1, hex: "none", toString: rgbtoString };
        }
        !(hsrg[has](colour.toLowerCase().substring(0, 2)) || colour.charAt() == "#") && (colour = toHex(colour));
        if (!colour) {
          return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
        }
        var res2, red, green, blue, opacity, t, values, rgb = colour.match(colourRegExp);
        if (rgb) {
          if (rgb[2]) {
            blue = toInt(rgb[2].substring(5), 16);
            green = toInt(rgb[2].substring(3, 5), 16);
            red = toInt(rgb[2].substring(1, 3), 16);
          }
          if (rgb[3]) {
            blue = toInt((t = rgb[3].charAt(3)) + t, 16);
            green = toInt((t = rgb[3].charAt(2)) + t, 16);
            red = toInt((t = rgb[3].charAt(1)) + t, 16);
          }
          if (rgb[4]) {
            values = rgb[4].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red *= 2.55);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green *= 2.55);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue *= 2.55);
            rgb[1].toLowerCase().slice(0, 4) == "rgba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
          }
          if (rgb[5]) {
            values = rgb[5].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "°") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsba" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap2.hsb2rgb(red, green, blue, opacity);
          }
          if (rgb[6]) {
            values = rgb[6].split(commaSpaces);
            red = toFloat(values[0]);
            values[0].slice(-1) == "%" && (red /= 100);
            green = toFloat(values[1]);
            values[1].slice(-1) == "%" && (green /= 100);
            blue = toFloat(values[2]);
            values[2].slice(-1) == "%" && (blue /= 100);
            (values[0].slice(-3) == "deg" || values[0].slice(-1) == "°") && (red /= 360);
            rgb[1].toLowerCase().slice(0, 4) == "hsla" && (opacity = toFloat(values[3]));
            values[3] && values[3].slice(-1) == "%" && (opacity /= 100);
            return Snap2.hsl2rgb(red, green, blue, opacity);
          }
          red = mmin(math2.round(red), 255);
          green = mmin(math2.round(green), 255);
          blue = mmin(math2.round(blue), 255);
          opacity = mmin(mmax(opacity, 0), 1);
          rgb = { r: red, g: green, b: blue, toString: rgbtoString };
          rgb.hex = "#" + (16777216 | blue | green << 8 | red << 16).toString(16).slice(1);
          rgb.opacity = is(opacity, "finite") ? opacity : 1;
          return rgb;
        }
        return { r: -1, g: -1, b: -1, hex: "none", error: 1, toString: rgbtoString };
      }, Snap2);
      Snap2.hsb = cacher(function(h, s, b) {
        return Snap2.hsb2rgb(h, s, b).hex;
      });
      Snap2.hsl = cacher(function(h, s, l) {
        return Snap2.hsl2rgb(h, s, l).hex;
      });
      Snap2.rgb = cacher(function(r, g2, b, o) {
        if (is(o, "finite")) {
          var round2 = math2.round;
          return "rgba(" + [round2(r), round2(g2), round2(b), +o.toFixed(2)] + ")";
        }
        return "#" + (16777216 | b | g2 << 8 | r << 16).toString(16).slice(1);
      });
      var toHex = function(color) {
        var i = glob.doc.getElementsByTagName("head")[0] || glob.doc.getElementsByTagName("svg")[0], red = "rgb(255, 0, 0)";
        toHex = cacher(function(color2) {
          if (color2.toLowerCase() == "red") {
            return red;
          }
          i.style.color = red;
          i.style.color = color2;
          var out = glob.doc.defaultView.getComputedStyle(i, E).getPropertyValue("color");
          return out == red ? null : out;
        });
        return toHex(color);
      }, hsbtoString = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")";
      }, hsltoString = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")";
      }, rgbtoString = function() {
        return this.opacity == 1 || this.opacity == null ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")";
      }, prepareRGB = function(r, g2, b) {
        if (g2 == null && is(r, "object") && "r" in r && "g" in r && "b" in r) {
          b = r.b;
          g2 = r.g;
          r = r.r;
        }
        if (g2 == null && is(r, string)) {
          var clr = Snap2.getRGB(r);
          r = clr.r;
          g2 = clr.g;
          b = clr.b;
        }
        if (r > 1 || g2 > 1 || b > 1) {
          r /= 255;
          g2 /= 255;
          b /= 255;
        }
        return [r, g2, b];
      }, packageRGB = function(r, g2, b, o) {
        r = math2.round(r * 255);
        g2 = math2.round(g2 * 255);
        b = math2.round(b * 255);
        var rgb = {
          r,
          g: g2,
          b,
          opacity: is(o, "finite") ? o : 1,
          hex: Snap2.rgb(r, g2, b),
          toString: rgbtoString
        };
        is(o, "finite") && (rgb.opacity = o);
        return rgb;
      };
      Snap2.color = function(clr) {
        var rgb;
        if (is(clr, "object") && "h" in clr && "s" in clr && "b" in clr) {
          rgb = Snap2.hsb2rgb(clr);
          clr.r = rgb.r;
          clr.g = rgb.g;
          clr.b = rgb.b;
          clr.opacity = 1;
          clr.hex = rgb.hex;
        } else if (is(clr, "object") && "h" in clr && "s" in clr && "l" in clr) {
          rgb = Snap2.hsl2rgb(clr);
          clr.r = rgb.r;
          clr.g = rgb.g;
          clr.b = rgb.b;
          clr.opacity = 1;
          clr.hex = rgb.hex;
        } else {
          if (is(clr, "string")) {
            clr = Snap2.getRGB(clr);
          }
          if (is(clr, "object") && "r" in clr && "g" in clr && "b" in clr && !("error" in clr)) {
            rgb = Snap2.rgb2hsl(clr);
            clr.h = rgb.h;
            clr.s = rgb.s;
            clr.l = rgb.l;
            rgb = Snap2.rgb2hsb(clr);
            clr.v = rgb.b;
          } else {
            clr = { hex: "none" };
            clr.r = clr.g = clr.b = clr.h = clr.s = clr.v = clr.l = -1;
            clr.error = 1;
          }
        }
        clr.toString = rgbtoString;
        return clr;
      };
      Snap2.hsb2rgb = function(h, s, v, o) {
        if (is(h, "object") && "h" in h && "s" in h && "b" in h) {
          v = h.b;
          s = h.s;
          o = h.o;
          h = h.h;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = v * s;
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = v - C;
        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
      };
      Snap2.hsl2rgb = function(h, s, l, o) {
        if (is(h, "object") && "h" in h && "s" in h && "l" in h) {
          l = h.l;
          s = h.s;
          h = h.h;
        }
        if (h > 1 || s > 1 || l > 1) {
          h /= 360;
          s /= 100;
          l /= 100;
        }
        h *= 360;
        var R, G, B, X, C;
        h = h % 360 / 60;
        C = 2 * s * (l < 0.5 ? l : 1 - l);
        X = C * (1 - abs(h % 2 - 1));
        R = G = B = l - C / 2;
        h = ~~h;
        R += [C, X, 0, 0, X, C][h];
        G += [X, C, C, X, 0, 0][h];
        B += [0, 0, X, C, C, X][h];
        return packageRGB(R, G, B, o);
      };
      Snap2.rgb2hsb = function(r, g2, b) {
        b = prepareRGB(r, g2, b);
        r = b[0];
        g2 = b[1];
        b = b[2];
        var H, S2, V, C;
        V = mmax(r, g2, b);
        C = V - mmin(r, g2, b);
        H = C == 0 ? null : V == r ? (g2 - b) / C : V == g2 ? (b - r) / C + 2 : (r - g2) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        S2 = C == 0 ? 0 : C / V;
        return { h: H, s: S2, b: V, toString: hsbtoString };
      };
      Snap2.rgb2hsl = function(r, g2, b) {
        b = prepareRGB(r, g2, b);
        r = b[0];
        g2 = b[1];
        b = b[2];
        var H, S2, L, M, m, C;
        M = mmax(r, g2, b);
        m = mmin(r, g2, b);
        C = M - m;
        H = C == 0 ? null : M == r ? (g2 - b) / C : M == g2 ? (b - r) / C + 2 : (r - g2) / C + 4;
        H = (H + 360) % 6 * 60 / 360;
        L = (M + m) / 2;
        S2 = C == 0 ? 0 : L < 0.5 ? C / (2 * L) : C / (2 - 2 * L);
        return { h: H, s: S2, l: L, toString: hsltoString };
      };
      Snap2.parsePathString = function(pathString) {
        if (!pathString) {
          return null;
        }
        var pth = Snap2.path(pathString);
        if (pth.arr) {
          return Snap2.path.clone(pth.arr);
        }
        var paramCounts = { a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0 }, data = [];
        if (is(pathString, "array") && is(pathString[0], "array")) {
          data = Snap2.path.clone(pathString);
        }
        if (!data.length) {
          Str(pathString).replace(pathCommand, function(a, b, c) {
            var params = [], name = b.toLowerCase();
            c.replace(pathValues, function(a2, b2) {
              b2 && params.push(+b2);
            });
            if (name == "m" && params.length > 2) {
              data.push([b].concat(params.splice(0, 2)));
              name = "l";
              b = b == "m" ? "l" : "L";
            }
            if (name == "o" && params.length == 1) {
              data.push([b, params[0]]);
            }
            if (name == "r") {
              data.push([b].concat(params));
            } else
              while (params.length >= paramCounts[name]) {
                data.push([b].concat(params.splice(0, paramCounts[name])));
                if (!paramCounts[name]) {
                  break;
                }
              }
          });
        }
        data.toString = Snap2.path.toString;
        pth.arr = Snap2.path.clone(data);
        return data;
      };
      var parseTransformString = Snap2.parseTransformString = function(TString) {
        if (!TString) {
          return null;
        }
        var paramCounts = { r: 3, s: 4, t: 2, m: 6 }, data = [];
        if (is(TString, "array") && is(TString[0], "array")) {
          data = Snap2.path.clone(TString);
        }
        if (!data.length) {
          Str(TString).replace(tCommand, function(a, b, c) {
            var params = [], name = b.toLowerCase();
            c.replace(pathValues, function(a2, b2) {
              b2 && params.push(+b2);
            });
            data.push([b].concat(params));
          });
        }
        data.toString = Snap2.path.toString;
        return data;
      };
      function svgTransform2string(tstr) {
        var res2 = [];
        tstr = tstr.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function(all, name, params) {
          params = params.split(/\s*,\s*|\s+/);
          if (name == "rotate" && params.length == 1) {
            params.push(0, 0);
          }
          if (name == "scale") {
            if (params.length > 2) {
              params = params.slice(0, 2);
            } else if (params.length == 2) {
              params.push(0, 0);
            }
            if (params.length == 1) {
              params.push(params[0], 0, 0);
            }
          }
          if (name == "skewX") {
            res2.push(["m", 1, 0, math2.tan(rad(params[0])), 1, 0, 0]);
          } else if (name == "skewY") {
            res2.push(["m", 1, math2.tan(rad(params[0])), 0, 1, 0, 0]);
          } else {
            res2.push([name.charAt(0)].concat(params));
          }
          return all;
        });
        return res2;
      }
      Snap2._.svgTransform2string = svgTransform2string;
      Snap2._.rgTransform = /^[a-z][\s]*-?\.?\d/i;
      function transform2matrix(tstr, bbox) {
        var tdata = parseTransformString(tstr), m = new Snap2.Matrix();
        if (tdata) {
          for (var i = 0, ii = tdata.length; i < ii; i++) {
            var t = tdata[i], tlen = t.length, command = Str(t[0]).toLowerCase(), absolute = t[0] != command, inver = absolute ? m.invert() : 0, x1, y1, x2, y2, bb;
            if (command == "t" && tlen == 2) {
              m.translate(t[1], 0);
            } else if (command == "t" && tlen == 3) {
              if (absolute) {
                x1 = inver.x(0, 0);
                y1 = inver.y(0, 0);
                x2 = inver.x(t[1], t[2]);
                y2 = inver.y(t[1], t[2]);
                m.translate(x2 - x1, y2 - y1);
              } else {
                m.translate(t[1], t[2]);
              }
            } else if (command == "r") {
              if (tlen == 2) {
                bb = bb || bbox;
                m.rotate(t[1], bb.x + bb.width / 2, bb.y + bb.height / 2);
              } else if (tlen == 4) {
                if (absolute) {
                  x2 = inver.x(t[2], t[3]);
                  y2 = inver.y(t[2], t[3]);
                  m.rotate(t[1], x2, y2);
                } else {
                  m.rotate(t[1], t[2], t[3]);
                }
              }
            } else if (command == "s") {
              if (tlen == 2 || tlen == 3) {
                bb = bb || bbox;
                m.scale(t[1], t[tlen - 1], bb.x + bb.width / 2, bb.y + bb.height / 2);
              } else if (tlen == 4) {
                if (absolute) {
                  x2 = inver.x(t[2], t[3]);
                  y2 = inver.y(t[2], t[3]);
                  m.scale(t[1], t[1], x2, y2);
                } else {
                  m.scale(t[1], t[1], t[2], t[3]);
                }
              } else if (tlen == 5) {
                if (absolute) {
                  x2 = inver.x(t[3], t[4]);
                  y2 = inver.y(t[3], t[4]);
                  m.scale(t[1], t[2], x2, y2);
                } else {
                  m.scale(t[1], t[2], t[3], t[4]);
                }
              }
            } else if (command == "m" && tlen == 7) {
              m.add(t[1], t[2], t[3], t[4], t[5], t[6]);
            }
          }
        }
        return m;
      }
      Snap2._.transform2matrix = transform2matrix;
      Snap2._unit2px = unit2px;
      var contains = glob.doc.contains || glob.doc.compareDocumentPosition ? function(a, b) {
        var adown = a.nodeType == 9 ? a.documentElement : a, bup = b && b.parentNode;
        return a == bup || !!(bup && bup.nodeType == 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function(a, b) {
        if (b) {
          while (b) {
            b = b.parentNode;
            if (b == a) {
              return true;
            }
          }
        }
        return false;
      };
      function getSomeDefs(el) {
        var p = el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || el.node.parentNode && wrap(el.node.parentNode) || Snap2.select("svg") || Snap2(0, 0), pdefs = p.select("defs"), defs = pdefs == null ? false : pdefs.node;
        if (!defs) {
          defs = make("defs", p.node).node;
        }
        return defs;
      }
      function getSomeSVG(el) {
        return el.node.ownerSVGElement && wrap(el.node.ownerSVGElement) || Snap2.select("svg");
      }
      Snap2._.getSomeDefs = getSomeDefs;
      Snap2._.getSomeSVG = getSomeSVG;
      function unit2px(el, name, value) {
        var svg = getSomeSVG(el).node, out = {}, mgr = svg.querySelector(".svg---mgr");
        if (!mgr) {
          mgr = $("rect");
          $(mgr, { x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none" });
          svg.appendChild(mgr);
        }
        function getW(val) {
          if (val == null) {
            return E;
          }
          if (val == +val) {
            return val;
          }
          $(mgr, { width: val });
          try {
            return mgr.getBBox().width;
          } catch (e) {
            return 0;
          }
        }
        function getH(val) {
          if (val == null) {
            return E;
          }
          if (val == +val) {
            return val;
          }
          $(mgr, { height: val });
          try {
            return mgr.getBBox().height;
          } catch (e) {
            return 0;
          }
        }
        function set(nam, f) {
          if (name == null) {
            out[nam] = f(el.attr(nam) || 0);
          } else if (nam == name) {
            out = f(value == null ? el.attr(nam) || 0 : value);
          }
        }
        switch (el.type) {
          case "rect":
            set("rx", getW);
            set("ry", getH);
          case "image":
            set("width", getW);
            set("height", getH);
          case "text":
            set("x", getW);
            set("y", getH);
            break;
          case "circle":
            set("cx", getW);
            set("cy", getH);
            set("r", getW);
            break;
          case "ellipse":
            set("cx", getW);
            set("cy", getH);
            set("rx", getW);
            set("ry", getH);
            break;
          case "line":
            set("x1", getW);
            set("x2", getW);
            set("y1", getH);
            set("y2", getH);
            break;
          case "marker":
            set("refX", getW);
            set("markerWidth", getW);
            set("refY", getH);
            set("markerHeight", getH);
            break;
          case "radialGradient":
            set("fx", getW);
            set("fy", getH);
            break;
          case "tspan":
            set("dx", getW);
            set("dy", getH);
            break;
          default:
            set(name, getW);
        }
        svg.removeChild(mgr);
        return out;
      }
      Snap2.select = function(query) {
        query = Str(query).replace(/([^\\]):/g, "$1\\:");
        return wrap(glob.doc.querySelector(query));
      };
      Snap2.selectAll = function(query) {
        var nodelist = glob.doc.querySelectorAll(query), set = (Snap2.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
          set.push(wrap(nodelist[i]));
        }
        return set;
      };
      function add2group(list) {
        if (!is(list, "array")) {
          list = Array.prototype.slice.call(arguments, 0);
        }
        var i = 0, j = 0, node = this.node;
        while (this[i])
          delete this[i++];
        for (i = 0; i < list.length; i++) {
          if (list[i].type == "set") {
            list[i].forEach(function(el) {
              node.appendChild(el.node);
            });
          } else {
            node.appendChild(list[i].node);
          }
        }
        var children = node.childNodes;
        for (i = 0; i < children.length; i++) {
          this[j++] = wrap(children[i]);
        }
        return this;
      }
      setInterval(function() {
        for (var key in hub)
          if (hub[has](key)) {
            var el = hub[key], node = el.node;
            if (el.type != "svg" && !node.ownerSVGElement || el.type == "svg" && (!node.parentNode || "ownerSVGElement" in node.parentNode && !node.ownerSVGElement)) {
              delete hub[key];
            }
          }
      }, 1e4);
      function Element(el) {
        if (el.snap in hub) {
          return hub[el.snap];
        }
        var svg;
        try {
          svg = el.ownerSVGElement;
        } catch (e) {
        }
        this.node = el;
        if (svg) {
          this.paper = new Paper(svg);
        }
        this.type = el.tagName || el.nodeName;
        var id = this.id = ID(this);
        this.anims = {};
        this._ = {
          transform: []
        };
        el.snap = id;
        hub[id] = this;
        if (this.type == "g") {
          this.add = add2group;
        }
        if (this.type in { g: 1, mask: 1, pattern: 1, symbol: 1 }) {
          for (var method in Paper.prototype)
            if (Paper.prototype[has](method)) {
              this[method] = Paper.prototype[method];
            }
        }
      }
      Element.prototype.attr = function(params, value) {
        var el = this, node = el.node;
        if (!params) {
          if (node.nodeType != 1) {
            return {
              text: node.nodeValue
            };
          }
          var attr = node.attributes, out = {};
          for (var i = 0, ii = attr.length; i < ii; i++) {
            out[attr[i].nodeName] = attr[i].nodeValue;
          }
          return out;
        }
        if (is(params, "string")) {
          if (arguments.length > 1) {
            var json = {};
            json[params] = value;
            params = json;
          } else {
            return eve("snap.util.getattr." + params, el).firstDefined();
          }
        }
        for (var att in params) {
          if (params[has](att)) {
            eve("snap.util.attr." + att, el, params[att]);
          }
        }
        return el;
      };
      Snap2.parse = function(svg) {
        var f = glob.doc.createDocumentFragment(), full = true, div = glob.doc.createElement("div");
        svg = Str(svg);
        if (!svg.match(/^\s*<\s*svg(?:\s|>)/)) {
          svg = "<svg>" + svg + "</svg>";
          full = false;
        }
        div.innerHTML = svg;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
          if (full) {
            f = svg;
          } else {
            while (svg.firstChild) {
              f.appendChild(svg.firstChild);
            }
          }
        }
        return new Fragment(f);
      };
      function Fragment(frag) {
        this.node = frag;
      }
      Snap2.fragment = function() {
        var args = Array.prototype.slice.call(arguments, 0), f = glob.doc.createDocumentFragment();
        for (var i = 0, ii = args.length; i < ii; i++) {
          var item = args[i];
          if (item.node && item.node.nodeType) {
            f.appendChild(item.node);
          }
          if (item.nodeType) {
            f.appendChild(item);
          }
          if (typeof item == "string") {
            f.appendChild(Snap2.parse(item).node);
          }
        }
        return new Fragment(f);
      };
      function make(name, parent) {
        var res2 = $(name);
        parent.appendChild(res2);
        var el = wrap(res2);
        return el;
      }
      function Paper(w, h) {
        var res2, desc, defs, proto = Paper.prototype;
        if (w && w.tagName && w.tagName.toLowerCase() == "svg") {
          if (w.snap in hub) {
            return hub[w.snap];
          }
          var doc = w.ownerDocument;
          res2 = new Element(w);
          desc = w.getElementsByTagName("desc")[0];
          defs = w.getElementsByTagName("defs")[0];
          if (!desc) {
            desc = $("desc");
            desc.appendChild(doc.createTextNode("Created with Snap"));
            res2.node.appendChild(desc);
          }
          if (!defs) {
            defs = $("defs");
            res2.node.appendChild(defs);
          }
          res2.defs = defs;
          for (var key in proto)
            if (proto[has](key)) {
              res2[key] = proto[key];
            }
          res2.paper = res2.root = res2;
        } else {
          res2 = make("svg", glob.doc.body);
          $(res2.node, {
            height: h,
            version: 1.1,
            width: w,
            xmlns
          });
        }
        return res2;
      }
      function wrap(dom) {
        if (!dom) {
          return dom;
        }
        if (dom instanceof Element || dom instanceof Fragment) {
          return dom;
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "svg") {
          return new Paper(dom);
        }
        if (dom.tagName && dom.tagName.toLowerCase() == "object" && dom.type == "image/svg+xml") {
          return new Paper(dom.contentDocument.getElementsByTagName("svg")[0]);
        }
        return new Element(dom);
      }
      Snap2._.make = make;
      Snap2._.wrap = wrap;
      Paper.prototype.el = function(name, attr) {
        var el = make(name, this.node);
        attr && el.attr(attr);
        return el;
      };
      Element.prototype.children = function() {
        var out = [], ch = this.node.childNodes;
        for (var i = 0, ii = ch.length; i < ii; i++) {
          out[i] = Snap2(ch[i]);
        }
        return out;
      };
      function jsonFiller(root2, o) {
        for (var i = 0, ii = root2.length; i < ii; i++) {
          var item = {
            type: root2[i].type,
            attr: root2[i].attr()
          }, children = root2[i].children();
          o.push(item);
          if (children.length) {
            jsonFiller(children, item.childNodes = []);
          }
        }
      }
      Element.prototype.toJSON = function() {
        var out = [];
        jsonFiller([this], out);
        return out[0];
      };
      eve.on("snap.util.getattr", function() {
        var att = eve.nt();
        att = att.substring(att.lastIndexOf(".") + 1);
        var css = att.replace(/[A-Z]/g, function(letter) {
          return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
          return this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(css);
        } else {
          return $(this.node, att);
        }
      });
      var cssAttr = {
        "alignment-baseline": 0,
        "baseline-shift": 0,
        "clip": 0,
        "clip-path": 0,
        "clip-rule": 0,
        "color": 0,
        "color-interpolation": 0,
        "color-interpolation-filters": 0,
        "color-profile": 0,
        "color-rendering": 0,
        "cursor": 0,
        "direction": 0,
        "display": 0,
        "dominant-baseline": 0,
        "enable-background": 0,
        "fill": 0,
        "fill-opacity": 0,
        "fill-rule": 0,
        "filter": 0,
        "flood-color": 0,
        "flood-opacity": 0,
        "font": 0,
        "font-family": 0,
        "font-size": 0,
        "font-size-adjust": 0,
        "font-stretch": 0,
        "font-style": 0,
        "font-variant": 0,
        "font-weight": 0,
        "glyph-orientation-horizontal": 0,
        "glyph-orientation-vertical": 0,
        "image-rendering": 0,
        "kerning": 0,
        "letter-spacing": 0,
        "lighting-color": 0,
        "marker": 0,
        "marker-end": 0,
        "marker-mid": 0,
        "marker-start": 0,
        "mask": 0,
        "opacity": 0,
        "overflow": 0,
        "pointer-events": 0,
        "shape-rendering": 0,
        "stop-color": 0,
        "stop-opacity": 0,
        "stroke": 0,
        "stroke-dasharray": 0,
        "stroke-dashoffset": 0,
        "stroke-linecap": 0,
        "stroke-linejoin": 0,
        "stroke-miterlimit": 0,
        "stroke-opacity": 0,
        "stroke-width": 0,
        "text-anchor": 0,
        "text-decoration": 0,
        "text-rendering": 0,
        "unicode-bidi": 0,
        "visibility": 0,
        "word-spacing": 0,
        "writing-mode": 0
      };
      eve.on("snap.util.attr", function(value) {
        var att = eve.nt(), attr = {};
        att = att.substring(att.lastIndexOf(".") + 1);
        attr[att] = value;
        var style = att.replace(/-(\w)/gi, function(all, letter) {
          return letter.toUpperCase();
        }), css = att.replace(/[A-Z]/g, function(letter) {
          return "-" + letter.toLowerCase();
        });
        if (cssAttr[has](css)) {
          this.node.style[style] = value == null ? E : value;
        } else {
          $(this.node, attr);
        }
      });
      /* @__PURE__ */ (function(proto) {
      })(Paper.prototype);
      Snap2.ajax = function(url, postData, callback, scope) {
        var req = new XMLHttpRequest(), id = ID();
        if (req) {
          if (is(postData, "function")) {
            scope = callback;
            callback = postData;
            postData = null;
          } else if (is(postData, "object")) {
            var pd = [];
            for (var key in postData)
              if (postData.hasOwnProperty(key)) {
                pd.push(encodeURIComponent(key) + "=" + encodeURIComponent(postData[key]));
              }
            postData = pd.join("&");
          }
          req.open(postData ? "POST" : "GET", url, true);
          if (postData) {
            req.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          }
          if (callback) {
            eve.once("snap.ajax." + id + ".0", callback);
            eve.once("snap.ajax." + id + ".200", callback);
            eve.once("snap.ajax." + id + ".304", callback);
          }
          req.onreadystatechange = function() {
            if (req.readyState != 4)
              return;
            eve("snap.ajax." + id + "." + req.status, scope, req);
          };
          if (req.readyState == 4) {
            return req;
          }
          req.send(postData);
          return req;
        }
      };
      Snap2.load = function(url, callback, scope) {
        Snap2.ajax(url, function(req) {
          var f = Snap2.parse(req.responseText);
          scope ? callback.call(scope, f) : callback(f);
        });
      };
      var getOffset = function(elem) {
        var box = elem.getBoundingClientRect(), doc = elem.ownerDocument, body = doc.body, docElem = doc.documentElement, clientTop = docElem.clientTop || body.clientTop || 0, clientLeft = docElem.clientLeft || body.clientLeft || 0, top = box.top + (g.win.pageYOffset || docElem.scrollTop || body.scrollTop) - clientTop, left = box.left + (g.win.pageXOffset || docElem.scrollLeft || body.scrollLeft) - clientLeft;
        return {
          y: top,
          x: left
        };
      };
      Snap2.getElementByPoint = function(x, y) {
        var paper = this, svg = paper.canvas, target = glob.doc.elementFromPoint(x, y);
        if (glob.win.opera && target.tagName == "svg") {
          var so = getOffset(target), sr = target.createSVGRect();
          sr.x = x - so.x;
          sr.y = y - so.y;
          sr.width = sr.height = 1;
          var hits = target.getIntersectionList(sr, null);
          if (hits.length) {
            target = hits[hits.length - 1];
          }
        }
        if (!target) {
          return null;
        }
        return wrap(target);
      };
      Snap2.plugin = function(f) {
        f(Snap2, Element, Paper, glob, Fragment);
      };
      glob.win.Snap = Snap2;
      return Snap2;
    }(window || exports);
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var elproto = Element.prototype, is = Snap2.is, Str = String, unit2px = Snap2._unit2px, $ = Snap2._.$, make = Snap2._.make, getSomeDefs = Snap2._.getSomeDefs, has = "hasOwnProperty", wrap = Snap2._.wrap;
      elproto.getBBox = function(isWithoutTransform) {
        if (this.type == "tspan") {
          return Snap2._.box(this.node.getClientRects().item(0));
        }
        if (!Snap2.Matrix || !Snap2.path) {
          return this.node.getBBox();
        }
        var el = this, m = new Snap2.Matrix();
        if (el.removed) {
          return Snap2._.box();
        }
        while (el.type == "use") {
          if (!isWithoutTransform) {
            m = m.add(el.transform().localMatrix.translate(el.attr("x") || 0, el.attr("y") || 0));
          }
          if (el.original) {
            el = el.original;
          } else {
            var href = el.attr("xlink:href");
            el = el.original = el.node.ownerDocument.getElementById(href.substring(href.indexOf("#") + 1));
          }
        }
        var _ = el._, pathfinder = Snap2.path.get[el.type] || Snap2.path.get.deflt;
        try {
          if (isWithoutTransform) {
            _.bboxwt = pathfinder ? Snap2.path.getBBox(el.realPath = pathfinder(el)) : Snap2._.box(el.node.getBBox());
            return Snap2._.box(_.bboxwt);
          } else {
            el.realPath = pathfinder(el);
            el.matrix = el.transform().localMatrix;
            _.bbox = Snap2.path.getBBox(Snap2.path.map(el.realPath, m.add(el.matrix)));
            return Snap2._.box(_.bbox);
          }
        } catch (e) {
          return Snap2._.box();
        }
      };
      var propString = function() {
        return this.string;
      };
      function extractTransform(el, tstr) {
        if (tstr == null) {
          var doReturn = true;
          if (el.type == "linearGradient" || el.type == "radialGradient") {
            tstr = el.node.getAttribute("gradientTransform");
          } else if (el.type == "pattern") {
            tstr = el.node.getAttribute("patternTransform");
          } else {
            tstr = el.node.getAttribute("transform");
          }
          if (!tstr) {
            return new Snap2.Matrix();
          }
          tstr = Snap2._.svgTransform2string(tstr);
        } else {
          if (!Snap2._.rgTransform.test(tstr)) {
            tstr = Snap2._.svgTransform2string(tstr);
          } else {
            tstr = Str(tstr).replace(/\.{3}|\u2026/g, el._.transform || "");
          }
          if (is(tstr, "array")) {
            tstr = Snap2.path ? Snap2.path.toString.call(tstr) : Str(tstr);
          }
          el._.transform = tstr;
        }
        var m = Snap2._.transform2matrix(tstr, el.getBBox(1));
        if (doReturn) {
          return m;
        } else {
          el.matrix = m;
        }
      }
      elproto.transform = function(tstr) {
        var _ = this._;
        if (tstr == null) {
          var papa = this, global = new Snap2.Matrix(this.node.getCTM()), local = extractTransform(this), ms = [local], m = new Snap2.Matrix(), i, localString = local.toTransformString(), string2 = Str(local) == Str(this.matrix) ? Str(_.transform) : localString;
          while (papa.type != "svg" && (papa = papa.parent())) {
            ms.push(extractTransform(papa));
          }
          i = ms.length;
          while (i--) {
            m.add(ms[i]);
          }
          return {
            string: string2,
            globalMatrix: global,
            totalMatrix: m,
            localMatrix: local,
            diffMatrix: global.clone().add(local.invert()),
            global: global.toTransformString(),
            total: m.toTransformString(),
            local: localString,
            toString: propString
          };
        }
        if (tstr instanceof Snap2.Matrix) {
          this.matrix = tstr;
          this._.transform = tstr.toTransformString();
        } else {
          extractTransform(this, tstr);
        }
        if (this.node) {
          if (this.type == "linearGradient" || this.type == "radialGradient") {
            $(this.node, { gradientTransform: this.matrix });
          } else if (this.type == "pattern") {
            $(this.node, { patternTransform: this.matrix });
          } else {
            $(this.node, { transform: this.matrix });
          }
        }
        return this;
      };
      elproto.parent = function() {
        return wrap(this.node.parentNode);
      };
      elproto.append = elproto.add = function(el) {
        if (el) {
          if (el.type == "set") {
            var it = this;
            el.forEach(function(el2) {
              it.add(el2);
            });
            return this;
          }
          el = wrap(el);
          this.node.appendChild(el.node);
          el.paper = this.paper;
        }
        return this;
      };
      elproto.appendTo = function(el) {
        if (el) {
          el = wrap(el);
          el.append(this);
        }
        return this;
      };
      elproto.prepend = function(el) {
        if (el) {
          if (el.type == "set") {
            var it = this, first;
            el.forEach(function(el2) {
              if (first) {
                first.after(el2);
              } else {
                it.prepend(el2);
              }
              first = el2;
            });
            return this;
          }
          el = wrap(el);
          var parent = el.parent();
          this.node.insertBefore(el.node, this.node.firstChild);
          this.add && this.add();
          el.paper = this.paper;
          this.parent() && this.parent().add();
          parent && parent.add();
        }
        return this;
      };
      elproto.prependTo = function(el) {
        el = wrap(el);
        el.prepend(this);
        return this;
      };
      elproto.before = function(el) {
        if (el.type == "set") {
          var it = this;
          el.forEach(function(el2) {
            var parent2 = el2.parent();
            it.node.parentNode.insertBefore(el2.node, it.node);
            parent2 && parent2.add();
          });
          this.parent().add();
          return this;
        }
        el = wrap(el);
        var parent = el.parent();
        this.node.parentNode.insertBefore(el.node, this.node);
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
      };
      elproto.after = function(el) {
        el = wrap(el);
        var parent = el.parent();
        if (this.node.nextSibling) {
          this.node.parentNode.insertBefore(el.node, this.node.nextSibling);
        } else {
          this.node.parentNode.appendChild(el.node);
        }
        this.parent() && this.parent().add();
        parent && parent.add();
        el.paper = this.paper;
        return this;
      };
      elproto.insertBefore = function(el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
      };
      elproto.insertAfter = function(el) {
        el = wrap(el);
        var parent = this.parent();
        el.node.parentNode.insertBefore(this.node, el.node.nextSibling);
        this.paper = el.paper;
        parent && parent.add();
        el.parent() && el.parent().add();
        return this;
      };
      elproto.remove = function() {
        var parent = this.parent();
        this.node.parentNode && this.node.parentNode.removeChild(this.node);
        delete this.paper;
        this.removed = true;
        parent && parent.add();
        return this;
      };
      elproto.select = function(query) {
        return wrap(this.node.querySelector(query));
      };
      elproto.selectAll = function(query) {
        var nodelist = this.node.querySelectorAll(query), set = (Snap2.set || Array)();
        for (var i = 0; i < nodelist.length; i++) {
          set.push(wrap(nodelist[i]));
        }
        return set;
      };
      elproto.asPX = function(attr, value) {
        if (value == null) {
          value = this.attr(attr);
        }
        return +unit2px(this, attr, value);
      };
      elproto.use = function() {
        var use, id = this.node.id;
        if (!id) {
          id = this.id;
          $(this.node, {
            id
          });
        }
        if (this.type == "linearGradient" || this.type == "radialGradient" || this.type == "pattern") {
          use = make(this.type, this.node.parentNode);
        } else {
          use = make("use", this.node.parentNode);
        }
        $(use.node, {
          "xlink:href": "#" + id
        });
        use.original = this;
        return use;
      };
      function fixids(el) {
        var els = el.selectAll("*"), it, url = /^\s*url\(("|'|)(.*)\1\)\s*$/, ids = [], uses = {};
        function urltest(it2, name) {
          var val = $(it2.node, name);
          val = val && val.match(url);
          val = val && val[2];
          if (val && val.charAt() == "#") {
            val = val.substring(1);
          } else {
            return;
          }
          if (val) {
            uses[val] = (uses[val] || []).concat(function(id) {
              var attr = {};
              attr[name] = Snap2.url(id);
              $(it2.node, attr);
            });
          }
        }
        function linktest(it2) {
          var val = $(it2.node, "xlink:href");
          if (val && val.charAt() == "#") {
            val = val.substring(1);
          } else {
            return;
          }
          if (val) {
            uses[val] = (uses[val] || []).concat(function(id) {
              it2.attr("xlink:href", "#" + id);
            });
          }
        }
        for (var i = 0, ii = els.length; i < ii; i++) {
          it = els[i];
          urltest(it, "fill");
          urltest(it, "stroke");
          urltest(it, "filter");
          urltest(it, "mask");
          urltest(it, "clip-path");
          linktest(it);
          var oldid = $(it.node, "id");
          if (oldid) {
            $(it.node, { id: it.id });
            ids.push({
              old: oldid,
              id: it.id
            });
          }
        }
        for (i = 0, ii = ids.length; i < ii; i++) {
          var fs = uses[ids[i].old];
          if (fs) {
            for (var j = 0, jj = fs.length; j < jj; j++) {
              fs[j](ids[i].id);
            }
          }
        }
      }
      elproto.clone = function() {
        var clone = wrap(this.node.cloneNode(true));
        if ($(clone.node, "id")) {
          $(clone.node, { id: clone.id });
        }
        fixids(clone);
        clone.insertAfter(this);
        return clone;
      };
      elproto.toDefs = function() {
        var defs = getSomeDefs(this);
        defs.appendChild(this.node);
        return this;
      };
      elproto.pattern = elproto.toPattern = function(x, y, width, height) {
        var p = make("pattern", getSomeDefs(this));
        if (x == null) {
          x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
          y = x.y;
          width = x.width;
          height = x.height;
          x = x.x;
        }
        $(p.node, {
          x,
          y,
          width,
          height,
          patternUnits: "userSpaceOnUse",
          id: p.id,
          viewBox: [x, y, width, height].join(" ")
        });
        p.node.appendChild(this.node);
        return p;
      };
      elproto.marker = function(x, y, width, height, refX, refY) {
        var p = make("marker", getSomeDefs(this));
        if (x == null) {
          x = this.getBBox();
        }
        if (is(x, "object") && "x" in x) {
          y = x.y;
          width = x.width;
          height = x.height;
          refX = x.refX || x.cx;
          refY = x.refY || x.cy;
          x = x.x;
        }
        $(p.node, {
          viewBox: [x, y, width, height].join(" "),
          markerWidth: width,
          markerHeight: height,
          orient: "auto",
          refX: refX || 0,
          refY: refY || 0,
          id: p.id
        });
        p.node.appendChild(this.node);
        return p;
      };
      var eldata = {};
      elproto.data = function(key, value) {
        var data = eldata[this.id] = eldata[this.id] || {};
        if (arguments.length == 0) {
          eve("snap.data.get." + this.id, this, data, null);
          return data;
        }
        if (arguments.length == 1) {
          if (Snap2.is(key, "object")) {
            for (var i in key)
              if (key[has](i)) {
                this.data(i, key[i]);
              }
            return this;
          }
          eve("snap.data.get." + this.id, this, data[key], key);
          return data[key];
        }
        data[key] = value;
        eve("snap.data.set." + this.id, this, value, key);
        return this;
      };
      elproto.removeData = function(key) {
        if (key == null) {
          eldata[this.id] = {};
        } else {
          eldata[this.id] && delete eldata[this.id][key];
        }
        return this;
      };
      elproto.outerSVG = elproto.toString = toString(1);
      elproto.innerSVG = toString();
      function toString(type) {
        return function() {
          var res2 = type ? "<" + this.type : "", attr = this.node.attributes, chld = this.node.childNodes;
          if (type) {
            for (var i = 0, ii = attr.length; i < ii; i++) {
              res2 += " " + attr[i].name + '="' + attr[i].value.replace(/"/g, '\\"') + '"';
            }
          }
          if (chld.length) {
            type && (res2 += ">");
            for (i = 0, ii = chld.length; i < ii; i++) {
              if (chld[i].nodeType == 3) {
                res2 += chld[i].nodeValue;
              } else if (chld[i].nodeType == 1) {
                res2 += wrap(chld[i]).toString();
              }
            }
            type && (res2 += "</" + this.type + ">");
          } else {
            type && (res2 += "/>");
          }
          return res2;
        };
      }
      elproto.toDataURL = function() {
        if (window && window.btoa) {
          var bb = this.getBBox(), svg = Snap2.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>', {
            x: +bb.x.toFixed(3),
            y: +bb.y.toFixed(3),
            width: +bb.width.toFixed(3),
            height: +bb.height.toFixed(3),
            contents: this.outerSVG()
          });
          return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
        }
      };
      Fragment.prototype.select = elproto.select;
      Fragment.prototype.selectAll = elproto.selectAll;
    });
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var objectToString = Object.prototype.toString, Str = String, math2 = Math, E = "";
      function Matrix(a, b, c, d, e, f) {
        if (b == null && objectToString.call(a) == "[object SVGMatrix]") {
          this.a = a.a;
          this.b = a.b;
          this.c = a.c;
          this.d = a.d;
          this.e = a.e;
          this.f = a.f;
          return;
        }
        if (a != null) {
          this.a = +a;
          this.b = +b;
          this.c = +c;
          this.d = +d;
          this.e = +e;
          this.f = +f;
        } else {
          this.a = 1;
          this.b = 0;
          this.c = 0;
          this.d = 1;
          this.e = 0;
          this.f = 0;
        }
      }
      (function(matrixproto) {
        matrixproto.add = function(a, b, c, d, e, f) {
          if (a && a instanceof Matrix) {
            return this.add(a.a, a.b, a.c, a.d, a.e, a.f);
          }
          var aNew = a * this.a + b * this.c, bNew = a * this.b + b * this.d;
          this.e += e * this.a + f * this.c;
          this.f += e * this.b + f * this.d;
          this.c = c * this.a + d * this.c;
          this.d = c * this.b + d * this.d;
          this.a = aNew;
          this.b = bNew;
          return this;
        };
        Matrix.prototype.multLeft = function(a, b, c, d, e, f) {
          if (a && a instanceof Matrix) {
            return this.multLeft(a.a, a.b, a.c, a.d, a.e, a.f);
          }
          var aNew = a * this.a + c * this.b, cNew = a * this.c + c * this.d, eNew = a * this.e + c * this.f + e;
          this.b = b * this.a + d * this.b;
          this.d = b * this.c + d * this.d;
          this.f = b * this.e + d * this.f + f;
          this.a = aNew;
          this.c = cNew;
          this.e = eNew;
          return this;
        };
        matrixproto.invert = function() {
          var me = this, x = me.a * me.d - me.b * me.c;
          return new Matrix(me.d / x, -me.b / x, -me.c / x, me.a / x, (me.c * me.f - me.d * me.e) / x, (me.b * me.e - me.a * me.f) / x);
        };
        matrixproto.clone = function() {
          return new Matrix(this.a, this.b, this.c, this.d, this.e, this.f);
        };
        matrixproto.translate = function(x, y) {
          this.e += x * this.a + y * this.c;
          this.f += x * this.b + y * this.d;
          return this;
        };
        matrixproto.scale = function(x, y, cx, cy) {
          y == null && (y = x);
          (cx || cy) && this.translate(cx, cy);
          this.a *= x;
          this.b *= x;
          this.c *= y;
          this.d *= y;
          (cx || cy) && this.translate(-cx, -cy);
          return this;
        };
        matrixproto.rotate = function(a, x, y) {
          a = Snap2.rad(a);
          x = x || 0;
          y = y || 0;
          var cos = +math2.cos(a).toFixed(9), sin = +math2.sin(a).toFixed(9);
          this.add(cos, sin, -sin, cos, x, y);
          return this.add(1, 0, 0, 1, -x, -y);
        };
        matrixproto.skewX = function(x) {
          return this.skew(x, 0);
        };
        matrixproto.skewY = function(y) {
          return this.skew(0, y);
        };
        matrixproto.skew = function(x, y) {
          x = x || 0;
          y = y || 0;
          x = Snap2.rad(x);
          y = Snap2.rad(y);
          var c = math2.tan(x).toFixed(9);
          var b = math2.tan(y).toFixed(9);
          return this.add(1, b, c, 1, 0, 0);
        };
        matrixproto.x = function(x, y) {
          return x * this.a + y * this.c + this.e;
        };
        matrixproto.y = function(x, y) {
          return x * this.b + y * this.d + this.f;
        };
        matrixproto.get = function(i) {
          return +this[Str.fromCharCode(97 + i)].toFixed(4);
        };
        matrixproto.toString = function() {
          return "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")";
        };
        matrixproto.offset = function() {
          return [this.e.toFixed(4), this.f.toFixed(4)];
        };
        function norm(a) {
          return a[0] * a[0] + a[1] * a[1];
        }
        function normalize(a) {
          var mag = math2.sqrt(norm(a));
          a[0] && (a[0] /= mag);
          a[1] && (a[1] /= mag);
        }
        matrixproto.determinant = function() {
          return this.a * this.d - this.b * this.c;
        };
        matrixproto.split = function() {
          var out = {};
          out.dx = this.e;
          out.dy = this.f;
          var row = [[this.a, this.b], [this.c, this.d]];
          out.scalex = math2.sqrt(norm(row[0]));
          normalize(row[0]);
          out.shear = row[0][0] * row[1][0] + row[0][1] * row[1][1];
          row[1] = [row[1][0] - row[0][0] * out.shear, row[1][1] - row[0][1] * out.shear];
          out.scaley = math2.sqrt(norm(row[1]));
          normalize(row[1]);
          out.shear /= out.scaley;
          if (this.determinant() < 0) {
            out.scalex = -out.scalex;
          }
          var sin = row[0][1], cos = row[1][1];
          if (cos < 0) {
            out.rotate = Snap2.deg(math2.acos(cos));
            if (sin < 0) {
              out.rotate = 360 - out.rotate;
            }
          } else {
            out.rotate = Snap2.deg(math2.asin(sin));
          }
          out.isSimple = !+out.shear.toFixed(9) && (out.scalex.toFixed(9) == out.scaley.toFixed(9) || !out.rotate);
          out.isSuperSimple = !+out.shear.toFixed(9) && out.scalex.toFixed(9) == out.scaley.toFixed(9) && !out.rotate;
          out.noRotation = !+out.shear.toFixed(9) && !out.rotate;
          return out;
        };
        matrixproto.toTransformString = function(shorter) {
          var s = shorter || this.split();
          if (!+s.shear.toFixed(9)) {
            s.scalex = +s.scalex.toFixed(4);
            s.scaley = +s.scaley.toFixed(4);
            s.rotate = +s.rotate.toFixed(4);
            return (s.dx || s.dy ? "t" + [+s.dx.toFixed(4), +s.dy.toFixed(4)] : E) + (s.rotate ? "r" + [+s.rotate.toFixed(4), 0, 0] : E) + (s.scalex != 1 || s.scaley != 1 ? "s" + [s.scalex, s.scaley, 0, 0] : E);
          } else {
            return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)];
          }
        };
      })(Matrix.prototype);
      Snap2.Matrix = Matrix;
      Snap2.matrix = function(a, b, c, d, e, f) {
        return new Matrix(a, b, c, d, e, f);
      };
    });
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var has = "hasOwnProperty", make = Snap2._.make, wrap = Snap2._.wrap, is = Snap2.is, getSomeDefs = Snap2._.getSomeDefs, reURLValue = /^url\((['"]?)([^)]+)\1\)$/, $ = Snap2._.$, URL = Snap2.url, Str = String, separator = Snap2._.separator, E = "";
      Snap2.deurl = function(value) {
        var res2 = String(value).match(reURLValue);
        return res2 ? res2[2] : value;
      };
      eve.on("snap.util.attr.mask", function(value) {
        if (value instanceof Element || value instanceof Fragment) {
          eve.stop();
          if (value instanceof Fragment && value.node.childNodes.length == 1) {
            value = value.node.firstChild;
            getSomeDefs(this).appendChild(value);
            value = wrap(value);
          }
          if (value.type == "mask") {
            var mask = value;
          } else {
            mask = make("mask", getSomeDefs(this));
            mask.node.appendChild(value.node);
          }
          !mask.node.id && $(mask.node, {
            id: mask.id
          });
          $(this.node, {
            mask: URL(mask.id)
          });
        }
      });
      (function(clipIt) {
        eve.on("snap.util.attr.clip", clipIt);
        eve.on("snap.util.attr.clip-path", clipIt);
        eve.on("snap.util.attr.clipPath", clipIt);
      })(function(value) {
        if (value instanceof Element || value instanceof Fragment) {
          eve.stop();
          var clip, node = value.node;
          while (node) {
            if (node.nodeName === "clipPath") {
              clip = new Element(node);
              break;
            }
            if (node.nodeName === "svg") {
              clip = void 0;
              break;
            }
            node = node.parentNode;
          }
          if (!clip) {
            clip = make("clipPath", getSomeDefs(this));
            clip.node.appendChild(value.node);
            !clip.node.id && $(clip.node, {
              id: clip.id
            });
          }
          $(this.node, {
            "clip-path": URL(clip.node.id || clip.id)
          });
        }
      });
      function fillStroke(name) {
        return function(value) {
          eve.stop();
          if (value instanceof Fragment && value.node.childNodes.length == 1 && (value.node.firstChild.tagName == "radialGradient" || value.node.firstChild.tagName == "linearGradient" || value.node.firstChild.tagName == "pattern")) {
            value = value.node.firstChild;
            getSomeDefs(this).appendChild(value);
            value = wrap(value);
          }
          if (value instanceof Element) {
            if (value.type == "radialGradient" || value.type == "linearGradient" || value.type == "pattern") {
              if (!value.node.id) {
                $(value.node, {
                  id: value.id
                });
              }
              var fill = URL(value.node.id);
            } else {
              fill = value.attr(name);
            }
          } else {
            fill = Snap2.color(value);
            if (fill.error) {
              var grad = Snap2(getSomeDefs(this).ownerSVGElement).gradient(value);
              if (grad) {
                if (!grad.node.id) {
                  $(grad.node, {
                    id: grad.id
                  });
                }
                fill = URL(grad.node.id);
              } else {
                fill = value;
              }
            } else {
              fill = Str(fill);
            }
          }
          var attrs = {};
          attrs[name] = fill;
          $(this.node, attrs);
          this.node.style[name] = E;
        };
      }
      eve.on("snap.util.attr.fill", fillStroke("fill"));
      eve.on("snap.util.attr.stroke", fillStroke("stroke"));
      var gradrg = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
      eve.on("snap.util.grad.parse", function parseGrad(string2) {
        string2 = Str(string2);
        var tokens = string2.match(gradrg);
        if (!tokens) {
          return null;
        }
        var type = tokens[1], params = tokens[2], stops = tokens[3];
        params = params.split(/\s*,\s*/).map(function(el) {
          return +el == el ? +el : el;
        });
        if (params.length == 1 && params[0] == 0) {
          params = [];
        }
        stops = stops.split("-");
        stops = stops.map(function(el) {
          el = el.split(":");
          var out = {
            color: el[0]
          };
          if (el[1]) {
            out.offset = parseFloat(el[1]);
          }
          return out;
        });
        var len = stops.length, start = 0, j = 0;
        function seed(i2, end) {
          var step = (end - start) / (i2 - j);
          for (var k = j; k < i2; k++) {
            stops[k].offset = +(+start + step * (k - j)).toFixed(2);
          }
          j = i2;
          start = end;
        }
        len--;
        for (var i = 0; i < len; i++)
          if ("offset" in stops[i]) {
            seed(i, stops[i].offset);
          }
        stops[len].offset = stops[len].offset || 100;
        seed(len, stops[len].offset);
        return {
          type,
          params,
          stops
        };
      });
      eve.on("snap.util.attr.d", function(value) {
        eve.stop();
        if (is(value, "array") && is(value[0], "array")) {
          value = Snap2.path.toString.call(value);
        }
        value = Str(value);
        if (value.match(/[ruo]/i)) {
          value = Snap2.path.toAbsolute(value);
        }
        $(this.node, { d: value });
      })(-1);
      eve.on("snap.util.attr.#text", function(value) {
        eve.stop();
        value = Str(value);
        var txt = glob.doc.createTextNode(value);
        while (this.node.firstChild) {
          this.node.removeChild(this.node.firstChild);
        }
        this.node.appendChild(txt);
      })(-1);
      eve.on("snap.util.attr.path", function(value) {
        eve.stop();
        this.attr({ d: value });
      })(-1);
      eve.on("snap.util.attr.class", function(value) {
        eve.stop();
        this.node.className.baseVal = value;
      })(-1);
      eve.on("snap.util.attr.viewBox", function(value) {
        var vb;
        if (is(value, "object") && "x" in value) {
          vb = [value.x, value.y, value.width, value.height].join(" ");
        } else if (is(value, "array")) {
          vb = value.join(" ");
        } else {
          vb = value;
        }
        $(this.node, {
          viewBox: vb
        });
        eve.stop();
      })(-1);
      eve.on("snap.util.attr.transform", function(value) {
        this.transform(value);
        eve.stop();
      })(-1);
      eve.on("snap.util.attr.r", function(value) {
        if (this.type == "rect") {
          eve.stop();
          $(this.node, {
            rx: value,
            ry: value
          });
        }
      })(-1);
      eve.on("snap.util.attr.textpath", function(value) {
        eve.stop();
        if (this.type == "text") {
          var id, tp, node;
          if (!value && this.textPath) {
            tp = this.textPath;
            while (tp.node.firstChild) {
              this.node.appendChild(tp.node.firstChild);
            }
            tp.remove();
            delete this.textPath;
            return;
          }
          if (is(value, "string")) {
            var defs = getSomeDefs(this), path = wrap(defs.parentNode).path(value);
            defs.appendChild(path.node);
            id = path.id;
            path.attr({ id });
          } else {
            value = wrap(value);
            if (value instanceof Element) {
              id = value.attr("id");
              if (!id) {
                id = value.id;
                value.attr({ id });
              }
            }
          }
          if (id) {
            tp = this.textPath;
            node = this.node;
            if (tp) {
              tp.attr({ "xlink:href": "#" + id });
            } else {
              tp = $("textPath", {
                "xlink:href": "#" + id
              });
              while (node.firstChild) {
                tp.appendChild(node.firstChild);
              }
              node.appendChild(tp);
              this.textPath = wrap(tp);
            }
          }
        }
      })(-1);
      eve.on("snap.util.attr.text", function(value) {
        if (this.type == "text") {
          var i = 0, node = this.node, tuner = function(chunk) {
            var out = $("tspan");
            if (is(chunk, "array")) {
              for (var i2 = 0; i2 < chunk.length; i2++) {
                out.appendChild(tuner(chunk[i2]));
              }
            } else {
              out.appendChild(glob.doc.createTextNode(chunk));
            }
            out.normalize && out.normalize();
            return out;
          };
          while (node.firstChild) {
            node.removeChild(node.firstChild);
          }
          var tuned = tuner(value);
          while (tuned.firstChild) {
            node.appendChild(tuned.firstChild);
          }
        }
        eve.stop();
      })(-1);
      function setFontSize(value) {
        eve.stop();
        if (value == +value) {
          value += "px";
        }
        this.node.style.fontSize = value;
      }
      eve.on("snap.util.attr.fontSize", setFontSize)(-1);
      eve.on("snap.util.attr.font-size", setFontSize)(-1);
      eve.on("snap.util.getattr.transform", function() {
        eve.stop();
        return this.transform();
      })(-1);
      eve.on("snap.util.getattr.textpath", function() {
        eve.stop();
        return this.textPath;
      })(-1);
      (function() {
        function getter(end) {
          return function() {
            eve.stop();
            var style = glob.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + end);
            if (style == "none") {
              return style;
            } else {
              return Snap2(glob.doc.getElementById(style.match(reURLValue)[1]));
            }
          };
        }
        function setter(end) {
          return function(value) {
            eve.stop();
            var name = "marker" + end.charAt(0).toUpperCase() + end.substring(1);
            if (value == "" || !value) {
              this.node.style[name] = "none";
              return;
            }
            if (value.type == "marker") {
              var id = value.node.id;
              if (!id) {
                $(value.node, { id: value.id });
              }
              this.node.style[name] = URL(id);
              return;
            }
          };
        }
        eve.on("snap.util.getattr.marker-end", getter("end"))(-1);
        eve.on("snap.util.getattr.markerEnd", getter("end"))(-1);
        eve.on("snap.util.getattr.marker-start", getter("start"))(-1);
        eve.on("snap.util.getattr.markerStart", getter("start"))(-1);
        eve.on("snap.util.getattr.marker-mid", getter("mid"))(-1);
        eve.on("snap.util.getattr.markerMid", getter("mid"))(-1);
        eve.on("snap.util.attr.marker-end", setter("end"))(-1);
        eve.on("snap.util.attr.markerEnd", setter("end"))(-1);
        eve.on("snap.util.attr.marker-start", setter("start"))(-1);
        eve.on("snap.util.attr.markerStart", setter("start"))(-1);
        eve.on("snap.util.attr.marker-mid", setter("mid"))(-1);
        eve.on("snap.util.attr.markerMid", setter("mid"))(-1);
      })();
      eve.on("snap.util.getattr.r", function() {
        if (this.type == "rect" && $(this.node, "rx") == $(this.node, "ry")) {
          eve.stop();
          return $(this.node, "rx");
        }
      })(-1);
      function textExtract(node) {
        var out = [];
        var children = node.childNodes;
        for (var i = 0, ii = children.length; i < ii; i++) {
          var chi = children[i];
          if (chi.nodeType == 3) {
            out.push(chi.nodeValue);
          }
          if (chi.tagName == "tspan") {
            if (chi.childNodes.length == 1 && chi.firstChild.nodeType == 3) {
              out.push(chi.firstChild.nodeValue);
            } else {
              out.push(textExtract(chi));
            }
          }
        }
        return out;
      }
      eve.on("snap.util.getattr.text", function() {
        if (this.type == "text" || this.type == "tspan") {
          eve.stop();
          var out = textExtract(this.node);
          return out.length == 1 ? out[0] : out;
        }
      })(-1);
      eve.on("snap.util.getattr.#text", function() {
        return this.node.textContent;
      })(-1);
      eve.on("snap.util.getattr.fill", function(internal) {
        if (internal) {
          return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.fill", this, true).firstDefined();
        return Snap2(Snap2.deurl(value)) || value;
      })(-1);
      eve.on("snap.util.getattr.stroke", function(internal) {
        if (internal) {
          return;
        }
        eve.stop();
        var value = eve("snap.util.getattr.stroke", this, true).firstDefined();
        return Snap2(Snap2.deurl(value)) || value;
      })(-1);
      eve.on("snap.util.getattr.viewBox", function() {
        eve.stop();
        var vb = $(this.node, "viewBox");
        if (vb) {
          vb = vb.split(separator);
          return Snap2._.box(+vb[0], +vb[1], +vb[2], +vb[3]);
        } else {
          return;
        }
      })(-1);
      eve.on("snap.util.getattr.points", function() {
        var p = $(this.node, "points");
        eve.stop();
        if (p) {
          return p.split(separator);
        } else {
          return;
        }
      })(-1);
      eve.on("snap.util.getattr.path", function() {
        var p = $(this.node, "d");
        eve.stop();
        return p;
      })(-1);
      eve.on("snap.util.getattr.class", function() {
        return this.node.className.baseVal;
      })(-1);
      function getFontSize() {
        eve.stop();
        return this.node.style.fontSize;
      }
      eve.on("snap.util.getattr.fontSize", getFontSize)(-1);
      eve.on("snap.util.getattr.font-size", getFontSize)(-1);
    });
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var rgNotSpace = /\S+/g, rgBadSpace = /[\t\r\n\f]/g, rgTrim = /(^\s+|\s+$)/g, Str = String, elproto = Element.prototype;
      elproto.addClass = function(value) {
        var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
        if (classes.length) {
          j = 0;
          while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (!~pos) {
              curClasses.push(clazz);
            }
          }
          finalValue = curClasses.join(" ");
          if (className != finalValue) {
            elem.className.baseVal = finalValue;
          }
        }
        return this;
      };
      elproto.removeClass = function(value) {
        var classes = Str(value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
        if (curClasses.length) {
          j = 0;
          while (clazz = classes[j++]) {
            pos = curClasses.indexOf(clazz);
            if (~pos) {
              curClasses.splice(pos, 1);
            }
          }
          finalValue = curClasses.join(" ");
          if (className != finalValue) {
            elem.className.baseVal = finalValue;
          }
        }
        return this;
      };
      elproto.hasClass = function(value) {
        var elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [];
        return !!~curClasses.indexOf(value);
      };
      elproto.toggleClass = function(value, flag) {
        if (flag != null) {
          if (flag) {
            return this.addClass(value);
          } else {
            return this.removeClass(value);
          }
        }
        var classes = (value || "").match(rgNotSpace) || [], elem = this.node, className = elem.className.baseVal, curClasses = className.match(rgNotSpace) || [], j, pos, clazz, finalValue;
        j = 0;
        while (clazz = classes[j++]) {
          pos = curClasses.indexOf(clazz);
          if (~pos) {
            curClasses.splice(pos, 1);
          } else {
            curClasses.push(clazz);
          }
        }
        finalValue = curClasses.join(" ");
        if (className != finalValue) {
          elem.className.baseVal = finalValue;
        }
        return this;
      };
    });
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var operators = {
        "+": function(x, y) {
          return x + y;
        },
        "-": function(x, y) {
          return x - y;
        },
        "/": function(x, y) {
          return x / y;
        },
        "*": function(x, y) {
          return x * y;
        }
      }, Str = String, reUnit = /[a-z]+$/i, reAddon = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
      function getNumber(val) {
        return val;
      }
      function getUnit(unit) {
        return function(val) {
          return +val.toFixed(3) + unit;
        };
      }
      eve.on("snap.util.attr", function(val) {
        var plus = Str(val).match(reAddon);
        if (plus) {
          var evnt = eve.nt(), name = evnt.substring(evnt.lastIndexOf(".") + 1), a = this.attr(name), atr = {};
          eve.stop();
          var unit = plus[3] || "", aUnit = a.match(reUnit), op = operators[plus[1]];
          if (aUnit && aUnit == unit) {
            val = op(parseFloat(a), +plus[2]);
          } else {
            a = this.asPX(name);
            val = op(this.asPX(name), this.asPX(name, plus[2] + unit));
          }
          if (isNaN(a) || isNaN(val)) {
            return;
          }
          atr[name] = val;
          this.attr(atr);
        }
      })(-10);
      eve.on("snap.util.equal", function(name, b) {
        var A, B, a = Str(this.attr(name) || ""), el = this, bplus = Str(b).match(reAddon);
        if (bplus) {
          eve.stop();
          var unit = bplus[3] || "", aUnit = a.match(reUnit), op = operators[bplus[1]];
          if (aUnit && aUnit == unit) {
            return {
              from: parseFloat(a),
              to: op(parseFloat(a), +bplus[2]),
              f: getUnit(aUnit)
            };
          } else {
            a = this.asPX(name);
            return {
              from: a,
              to: op(a, this.asPX(name, bplus[2] + unit)),
              f: getNumber
            };
          }
        }
      })(-10);
    });
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var proto = Paper.prototype, is = Snap2.is;
      proto.rect = function(x, y, w, h, rx, ry) {
        var attr;
        if (ry == null) {
          ry = rx;
        }
        if (is(x, "object") && x == "[object Object]") {
          attr = x;
        } else if (x != null) {
          attr = {
            x,
            y,
            width: w,
            height: h
          };
          if (rx != null) {
            attr.rx = rx;
            attr.ry = ry;
          }
        }
        return this.el("rect", attr);
      };
      proto.circle = function(cx, cy, r) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
          attr = cx;
        } else if (cx != null) {
          attr = {
            cx,
            cy,
            r
          };
        }
        return this.el("circle", attr);
      };
      var preload = /* @__PURE__ */ function() {
        function onerror() {
          this.parentNode.removeChild(this);
        }
        return function(src, f) {
          var img = glob.doc.createElement("img"), body = glob.doc.body;
          img.style.cssText = "position:absolute;left:-9999em;top:-9999em";
          img.onload = function() {
            f.call(img);
            img.onload = img.onerror = null;
            body.removeChild(img);
          };
          img.onerror = onerror;
          body.appendChild(img);
          img.src = src;
        };
      }();
      proto.image = function(src, x, y, width, height) {
        var el = this.el("image");
        if (is(src, "object") && "src" in src) {
          el.attr(src);
        } else if (src != null) {
          var set = {
            "xlink:href": src,
            preserveAspectRatio: "none"
          };
          if (x != null && y != null) {
            set.x = x;
            set.y = y;
          }
          if (width != null && height != null) {
            set.width = width;
            set.height = height;
          } else {
            preload(src, function() {
              Snap2._.$(el.node, {
                width: this.offsetWidth,
                height: this.offsetHeight
              });
            });
          }
          Snap2._.$(el.node, set);
        }
        return el;
      };
      proto.ellipse = function(cx, cy, rx, ry) {
        var attr;
        if (is(cx, "object") && cx == "[object Object]") {
          attr = cx;
        } else if (cx != null) {
          attr = {
            cx,
            cy,
            rx,
            ry
          };
        }
        return this.el("ellipse", attr);
      };
      proto.path = function(d) {
        var attr;
        if (is(d, "object") && !is(d, "array")) {
          attr = d;
        } else if (d) {
          attr = { d };
        }
        return this.el("path", attr);
      };
      proto.group = proto.g = function(first) {
        var attr, el = this.el("g");
        if (arguments.length == 1 && first && !first.type) {
          el.attr(first);
        } else if (arguments.length) {
          el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
      };
      proto.svg = function(x, y, width, height, vbx, vby, vbw, vbh) {
        var attrs = {};
        if (is(x, "object") && y == null) {
          attrs = x;
        } else {
          if (x != null) {
            attrs.x = x;
          }
          if (y != null) {
            attrs.y = y;
          }
          if (width != null) {
            attrs.width = width;
          }
          if (height != null) {
            attrs.height = height;
          }
          if (vbx != null && vby != null && vbw != null && vbh != null) {
            attrs.viewBox = [vbx, vby, vbw, vbh];
          }
        }
        return this.el("svg", attrs);
      };
      proto.mask = function(first) {
        var attr, el = this.el("mask");
        if (arguments.length == 1 && first && !first.type) {
          el.attr(first);
        } else if (arguments.length) {
          el.add(Array.prototype.slice.call(arguments, 0));
        }
        return el;
      };
      proto.ptrn = function(x, y, width, height, vx, vy, vw, vh) {
        if (is(x, "object")) {
          var attr = x;
        } else {
          attr = { patternUnits: "userSpaceOnUse" };
          if (x) {
            attr.x = x;
          }
          if (y) {
            attr.y = y;
          }
          if (width != null) {
            attr.width = width;
          }
          if (height != null) {
            attr.height = height;
          }
          if (vx != null && vy != null && vw != null && vh != null) {
            attr.viewBox = [vx, vy, vw, vh];
          } else {
            attr.viewBox = [x || 0, y || 0, width || 0, height || 0];
          }
        }
        return this.el("pattern", attr);
      };
      proto.use = function(id) {
        if (id != null) {
          if (id instanceof Element) {
            if (!id.attr("id")) {
              id.attr({ id: Snap2._.id(id) });
            }
            id = id.attr("id");
          }
          if (String(id).charAt() == "#") {
            id = id.substring(1);
          }
          return this.el("use", { "xlink:href": "#" + id });
        } else {
          return Element.prototype.use.call(this);
        }
      };
      proto.symbol = function(vx, vy, vw, vh) {
        var attr = {};
        if (vx != null && vy != null && vw != null && vh != null) {
          attr.viewBox = [vx, vy, vw, vh];
        }
        return this.el("symbol", attr);
      };
      proto.text = function(x, y, text) {
        var attr = {};
        if (is(x, "object")) {
          attr = x;
        } else if (x != null) {
          attr = {
            x,
            y,
            text: text || ""
          };
        }
        return this.el("text", attr);
      };
      proto.line = function(x1, y1, x2, y2) {
        var attr = {};
        if (is(x1, "object")) {
          attr = x1;
        } else if (x1 != null) {
          attr = {
            x1,
            x2,
            y1,
            y2
          };
        }
        return this.el("line", attr);
      };
      proto.polyline = function(points) {
        if (arguments.length > 1) {
          points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
          attr = points;
        } else if (points != null) {
          attr = { points };
        }
        return this.el("polyline", attr);
      };
      proto.polygon = function(points) {
        if (arguments.length > 1) {
          points = Array.prototype.slice.call(arguments, 0);
        }
        var attr = {};
        if (is(points, "object") && !is(points, "array")) {
          attr = points;
        } else if (points != null) {
          attr = { points };
        }
        return this.el("polygon", attr);
      };
      (function() {
        var $ = Snap2._.$;
        function Gstops() {
          return this.selectAll("stop");
        }
        function GaddStop(color, offset) {
          var stop = $("stop"), attr = {
            offset: +offset + "%"
          };
          color = Snap2.color(color);
          attr["stop-color"] = color.hex;
          if (color.opacity < 1) {
            attr["stop-opacity"] = color.opacity;
          }
          $(stop, attr);
          var stops = this.stops(), inserted;
          for (var i = 0; i < stops.length; i++) {
            var stopOffset = parseFloat(stops[i].attr("offset"));
            if (stopOffset > offset) {
              this.node.insertBefore(stop, stops[i].node);
              inserted = true;
              break;
            }
          }
          if (!inserted) {
            this.node.appendChild(stop);
          }
          return this;
        }
        function GgetBBox() {
          if (this.type == "linearGradient") {
            var x1 = $(this.node, "x1") || 0, x2 = $(this.node, "x2") || 1, y1 = $(this.node, "y1") || 0, y2 = $(this.node, "y2") || 0;
            return Snap2._.box(x1, y1, math.abs(x2 - x1), math.abs(y2 - y1));
          } else {
            var cx = this.node.cx || 0.5, cy = this.node.cy || 0.5, r = this.node.r || 0;
            return Snap2._.box(cx - r, cy - r, r * 2, r * 2);
          }
        }
        function GsetStops(str) {
          var grad = str, stops = this.stops();
          if (typeof str == "string") {
            grad = eve("snap.util.grad.parse", null, "l(0,0,0,1)" + str).firstDefined().stops;
          }
          if (!Snap2.is(grad, "array")) {
            return;
          }
          for (var i = 0; i < stops.length; i++) {
            if (grad[i]) {
              var color = Snap2.color(grad[i].color), attr = { "offset": grad[i].offset + "%" };
              attr["stop-color"] = color.hex;
              if (color.opacity < 1) {
                attr["stop-opacity"] = color.opacity;
              }
              stops[i].attr(attr);
            } else {
              stops[i].remove();
            }
          }
          for (i = stops.length; i < grad.length; i++) {
            this.addStop(grad[i].color, grad[i].offset);
          }
          return this;
        }
        function gradient(defs, str) {
          var grad = eve("snap.util.grad.parse", null, str).firstDefined(), el;
          if (!grad) {
            return null;
          }
          grad.params.unshift(defs);
          if (grad.type.toLowerCase() == "l") {
            el = gradientLinear.apply(0, grad.params);
          } else {
            el = gradientRadial.apply(0, grad.params);
          }
          if (grad.type != grad.type.toLowerCase()) {
            $(el.node, {
              gradientUnits: "userSpaceOnUse"
            });
          }
          var stops = grad.stops, len = stops.length;
          for (var i = 0; i < len; i++) {
            var stop = stops[i];
            el.addStop(stop.color, stop.offset);
          }
          return el;
        }
        function gradientLinear(defs, x1, y1, x2, y2) {
          var el = Snap2._.make("linearGradient", defs);
          el.stops = Gstops;
          el.addStop = GaddStop;
          el.getBBox = GgetBBox;
          el.setStops = GsetStops;
          if (x1 != null) {
            $(el.node, {
              x1,
              y1,
              x2,
              y2
            });
          }
          return el;
        }
        function gradientRadial(defs, cx, cy, r, fx, fy) {
          var el = Snap2._.make("radialGradient", defs);
          el.stops = Gstops;
          el.addStop = GaddStop;
          el.getBBox = GgetBBox;
          if (cx != null) {
            $(el.node, {
              cx,
              cy,
              r
            });
          }
          if (fx != null && fy != null) {
            $(el.node, {
              fx,
              fy
            });
          }
          return el;
        }
        proto.gradient = function(str) {
          return gradient(this.defs, str);
        };
        proto.gradientLinear = function(x1, y1, x2, y2) {
          return gradientLinear(this.defs, x1, y1, x2, y2);
        };
        proto.gradientRadial = function(cx, cy, r, fx, fy) {
          return gradientRadial(this.defs, cx, cy, r, fx, fy);
        };
        proto.toString = function() {
          var doc = this.node.ownerDocument, f = doc.createDocumentFragment(), d = doc.createElement("div"), svg = this.node.cloneNode(true), res2;
          f.appendChild(d);
          d.appendChild(svg);
          Snap2._.$(svg, { xmlns: "http://www.w3.org/2000/svg" });
          res2 = d.innerHTML;
          f.removeChild(f.firstChild);
          return res2;
        };
        proto.toDataURL = function() {
          if (window && window.btoa) {
            return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(this)));
          }
        };
        proto.clear = function() {
          var node = this.node.firstChild, next;
          while (node) {
            next = node.nextSibling;
            if (node.tagName != "defs") {
              node.parentNode.removeChild(node);
            } else {
              proto.clear.call({ node });
            }
            node = next;
          }
        };
      })();
    });
    Snap.plugin(function(Snap2, Element, Paper, glob) {
      var elproto = Element.prototype, is = Snap2.is, clone = Snap2._.clone, has = "hasOwnProperty", p2s = /,?([a-z]),?/gi, toFloat = parseFloat, math2 = Math, PI = math2.PI, mmin = math2.min, mmax = math2.max, pow = math2.pow, abs = math2.abs;
      function paths(ps) {
        var p = paths.ps = paths.ps || {};
        if (p[ps]) {
          p[ps].sleep = 100;
        } else {
          p[ps] = {
            sleep: 100
          };
        }
        setTimeout(function() {
          for (var key in p)
            if (p[has](key) && key != ps) {
              p[key].sleep--;
              !p[key].sleep && delete p[key];
            }
        });
        return p[ps];
      }
      function box(x, y, width, height) {
        if (x == null) {
          x = y = width = height = 0;
        }
        if (y == null) {
          y = x.y;
          width = x.width;
          height = x.height;
          x = x.x;
        }
        return {
          x,
          y,
          width,
          w: width,
          height,
          h: height,
          x2: x + width,
          y2: y + height,
          cx: x + width / 2,
          cy: y + height / 2,
          r1: math2.min(width, height) / 2,
          r2: math2.max(width, height) / 2,
          r0: math2.sqrt(width * width + height * height) / 2,
          path: rectPath(x, y, width, height),
          vb: [x, y, width, height].join(" ")
        };
      }
      function toString() {
        return this.join(",").replace(p2s, "$1");
      }
      function pathClone(pathArray) {
        var res2 = clone(pathArray);
        res2.toString = toString;
        return res2;
      }
      function getPointAtSegmentLength(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length) {
        if (length == null) {
          return bezlen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y);
        } else {
          return findDotsAtSegment(
            p1x,
            p1y,
            c1x,
            c1y,
            c2x,
            c2y,
            p2x,
            p2y,
            getTotLen(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, length)
          );
        }
      }
      function getLengthFactory(istotal, subpath) {
        function O(val) {
          return +(+val).toFixed(3);
        }
        return Snap2._.cacher(function(path, length, onlystart) {
          if (path instanceof Element) {
            path = path.attr("d");
          }
          path = path2curve(path);
          var x, y, p, l, sp = "", subpaths = {}, point, len = 0;
          for (var i = 0, ii = path.length; i < ii; i++) {
            p = path[i];
            if (p[0] == "M") {
              x = +p[1];
              y = +p[2];
            } else {
              l = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
              if (len + l > length) {
                if (subpath && !subpaths.start) {
                  point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                  sp += [
                    "C" + O(point.start.x),
                    O(point.start.y),
                    O(point.m.x),
                    O(point.m.y),
                    O(point.x),
                    O(point.y)
                  ];
                  if (onlystart) {
                    return sp;
                  }
                  subpaths.start = sp;
                  sp = [
                    "M" + O(point.x),
                    O(point.y) + "C" + O(point.n.x),
                    O(point.n.y),
                    O(point.end.x),
                    O(point.end.y),
                    O(p[5]),
                    O(p[6])
                  ].join();
                  len += l;
                  x = +p[5];
                  y = +p[6];
                  continue;
                }
                if (!istotal && !subpath) {
                  point = getPointAtSegmentLength(x, y, p[1], p[2], p[3], p[4], p[5], p[6], length - len);
                  return point;
                }
              }
              len += l;
              x = +p[5];
              y = +p[6];
            }
            sp += p.shift() + p;
          }
          subpaths.end = sp;
          point = istotal ? len : subpath ? subpaths : findDotsAtSegment(x, y, p[0], p[1], p[2], p[3], p[4], p[5], 1);
          return point;
        }, null, Snap2._.clone);
      }
      var getTotalLength = getLengthFactory(1), getPointAtLength = getLengthFactory(), getSubpathsAtLength = getLengthFactory(0, 1);
      function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t, t13 = pow(t1, 3), t12 = pow(t1, 2), t2 = t * t, t3 = t2 * t, x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x, y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y, mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x), my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y), nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x), ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y), ax = t1 * p1x + t * c1x, ay = t1 * p1y + t * c1y, cx = t1 * c2x + t * p2x, cy = t1 * c2y + t * p2y, alpha = 90 - math2.atan2(mx - nx, my - ny) * 180 / PI;
        return {
          x,
          y,
          m: { x: mx, y: my },
          n: { x: nx, y: ny },
          start: { x: ax, y: ay },
          end: { x: cx, y: cy },
          alpha
        };
      }
      function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Snap2.is(p1x, "array")) {
          p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(
          bbox.min.x,
          bbox.min.y,
          bbox.max.x - bbox.min.x,
          bbox.max.y - bbox.min.y
        );
      }
      function isPointInsideBBox(bbox, x, y) {
        return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
      }
      function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
      }
      function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4, t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
      }
      function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z == null) {
          z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2, n = 12, Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816], Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472], sum = 0;
        for (var i = 0; i < n; i++) {
          var ct = z2 * Tvalues[i] + z2, xbase = base3(ct, x1, x2, x3, x4), ybase = base3(ct, y1, y2, y3, y4), comb = xbase * xbase + ybase * ybase;
          sum += Cvalues[i] * math2.sqrt(comb);
        }
        return z2 * sum;
      }
      function getTotLen(x1, y1, x2, y2, x3, y3, x4, y4, ll) {
        if (ll < 0 || bezlen(x1, y1, x2, y2, x3, y3, x4, y4) < ll) {
          return;
        }
        var t = 1, step = t / 2, t2 = t - step, l, e = 0.01;
        l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        while (abs(l - ll) > e) {
          step /= 2;
          t2 += (l < ll ? 1 : -1) * step;
          l = bezlen(x1, y1, x2, y2, x3, y3, x4, y4, t2);
        }
        return t2;
      }
      function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (mmax(x1, x2) < mmin(x3, x4) || mmin(x1, x2) > mmax(x3, x4) || mmax(y1, y2) < mmin(y3, y4) || mmin(y1, y2) > mmax(y3, y4)) {
          return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4), ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4), denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        if (!denominator) {
          return;
        }
        var px = nx / denominator, py = ny / denominator, px2 = +px.toFixed(2), py2 = +py.toFixed(2);
        if (px2 < +mmin(x1, x2).toFixed(2) || px2 > +mmax(x1, x2).toFixed(2) || px2 < +mmin(x3, x4).toFixed(2) || px2 > +mmax(x3, x4).toFixed(2) || py2 < +mmin(y1, y2).toFixed(2) || py2 > +mmax(y1, y2).toFixed(2) || py2 < +mmin(y3, y4).toFixed(2) || py2 > +mmax(y3, y4).toFixed(2)) {
          return;
        }
        return { x: px, y: py };
      }
      function inter(bez1, bez2) {
        return interHelper(bez1, bez2);
      }
      function interCount(bez1, bez2) {
        return interHelper(bez1, bez2, 1);
      }
      function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1), bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
          return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1), l2 = bezlen.apply(0, bez2), n1 = ~~(l1 / 8), n2 = ~~(l2 / 8), dots1 = [], dots2 = [], xy = {}, res2 = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
          var p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
          dots1.push({ x: p.x, y: p.y, t: i / n1 });
        }
        for (i = 0; i < n2 + 1; i++) {
          p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
          dots2.push({ x: p.x, y: p.y, t: i / n2 });
        }
        for (i = 0; i < n1; i++) {
          for (var j = 0; j < n2; j++) {
            var di = dots1[i], di1 = dots1[i + 1], dj = dots2[j], dj1 = dots2[j + 1], ci = abs(di1.x - di.x) < 1e-3 ? "y" : "x", cj = abs(dj1.x - dj.x) < 1e-3 ? "y" : "x", is2 = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
            if (is2) {
              if (xy[is2.x.toFixed(4)] == is2.y.toFixed(4)) {
                continue;
              }
              xy[is2.x.toFixed(4)] = is2.y.toFixed(4);
              var t1 = di.t + abs((is2[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t), t2 = dj.t + abs((is2[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
              if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                if (justCount) {
                  res2++;
                } else {
                  res2.push({
                    x: is2.x,
                    y: is2.y,
                    t1,
                    t2
                  });
                }
              }
            }
          }
        }
        return res2;
      }
      function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
      }
      function pathIntersectionNumber(path1, path2) {
        return interPathHelper(path1, path2, 1);
      }
      function interPathHelper(path1, path2, justCount) {
        path1 = path2curve(path1);
        path2 = path2curve(path2);
        var x1, y1, x2, y2, x1m, y1m, x2m, y2m, bez1, bez2, res2 = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
          var pi = path1[i];
          if (pi[0] == "M") {
            x1 = x1m = pi[1];
            y1 = y1m = pi[2];
          } else {
            if (pi[0] == "C") {
              bez1 = [x1, y1].concat(pi.slice(1));
              x1 = bez1[6];
              y1 = bez1[7];
            } else {
              bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
              x1 = x1m;
              y1 = y1m;
            }
            for (var j = 0, jj = path2.length; j < jj; j++) {
              var pj = path2[j];
              if (pj[0] == "M") {
                x2 = x2m = pj[1];
                y2 = y2m = pj[2];
              } else {
                if (pj[0] == "C") {
                  bez2 = [x2, y2].concat(pj.slice(1));
                  x2 = bez2[6];
                  y2 = bez2[7];
                } else {
                  bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                  x2 = x2m;
                  y2 = y2m;
                }
                var intr = interHelper(bez1, bez2, justCount);
                if (justCount) {
                  res2 += intr;
                } else {
                  for (var k = 0, kk = intr.length; k < kk; k++) {
                    intr[k].segment1 = i;
                    intr[k].segment2 = j;
                    intr[k].bez1 = bez1;
                    intr[k].bez2 = bez2;
                  }
                  res2 = res2.concat(intr);
                }
              }
            }
          }
        }
        return res2;
      }
      function isPointInsidePath(path, x, y) {
        var bbox = pathBBox(path);
        return isPointInsideBBox(bbox, x, y) && interPathHelper(path, [["M", x, y], ["H", bbox.x2 + 10]], 1) % 2 == 1;
      }
      function pathBBox(path) {
        var pth = paths(path);
        if (pth.bbox) {
          return clone(pth.bbox);
        }
        if (!path) {
          return box();
        }
        path = path2curve(path);
        var x = 0, y = 0, X = [], Y = [], p;
        for (var i = 0, ii = path.length; i < ii; i++) {
          p = path[i];
          if (p[0] == "M") {
            x = p[1];
            y = p[2];
            X.push(x);
            Y.push(y);
          } else {
            var dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
            X = X.concat(dim.min.x, dim.max.x);
            Y = Y.concat(dim.min.y, dim.max.y);
            x = p[5];
            y = p[6];
          }
        }
        var xmin = mmin.apply(0, X), ymin = mmin.apply(0, Y), xmax = mmax.apply(0, X), ymax = mmax.apply(0, Y), bb = box(xmin, ymin, xmax - xmin, ymax - ymin);
        pth.bbox = clone(bb);
        return bb;
      }
      function rectPath(x, y, w, h, r) {
        if (r) {
          return [
            ["M", +x + +r, y],
            ["l", w - r * 2, 0],
            ["a", r, r, 0, 0, 1, r, r],
            ["l", 0, h - r * 2],
            ["a", r, r, 0, 0, 1, -r, r],
            ["l", r * 2 - w, 0],
            ["a", r, r, 0, 0, 1, -r, -r],
            ["l", 0, r * 2 - h],
            ["a", r, r, 0, 0, 1, r, -r],
            ["z"]
          ];
        }
        var res2 = [["M", x, y], ["l", w, 0], ["l", 0, h], ["l", -w, 0], ["z"]];
        res2.toString = toString;
        return res2;
      }
      function ellipsePath(x, y, rx, ry, a) {
        if (a == null && ry == null) {
          ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a != null) {
          var rad = Math.PI / 180, x1 = x + rx * Math.cos(-ry * rad), x2 = x + rx * Math.cos(-a * rad), y1 = y + rx * Math.sin(-ry * rad), y2 = y + rx * Math.sin(-a * rad), res2 = [["M", x1, y1], ["A", rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
          res2 = [
            ["M", x, y],
            ["m", 0, -ry],
            ["a", rx, ry, 0, 1, 1, 0, 2 * ry],
            ["a", rx, ry, 0, 1, 1, 0, -2 * ry],
            ["z"]
          ];
        }
        res2.toString = toString;
        return res2;
      }
      var unit2px = Snap2._unit2px, getPath = {
        path: function(el) {
          return el.attr("path");
        },
        circle: function(el) {
          var attr = unit2px(el);
          return ellipsePath(attr.cx, attr.cy, attr.r);
        },
        ellipse: function(el) {
          var attr = unit2px(el);
          return ellipsePath(attr.cx || 0, attr.cy || 0, attr.rx, attr.ry);
        },
        rect: function(el) {
          var attr = unit2px(el);
          return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height, attr.rx, attr.ry);
        },
        image: function(el) {
          var attr = unit2px(el);
          return rectPath(attr.x || 0, attr.y || 0, attr.width, attr.height);
        },
        line: function(el) {
          return "M" + [el.attr("x1") || 0, el.attr("y1") || 0, el.attr("x2"), el.attr("y2")];
        },
        polyline: function(el) {
          return "M" + el.attr("points");
        },
        polygon: function(el) {
          return "M" + el.attr("points") + "z";
        },
        deflt: function(el) {
          var bbox = el.node.getBBox();
          return rectPath(bbox.x, bbox.y, bbox.width, bbox.height);
        }
      };
      function pathToRelative(pathArray) {
        var pth = paths(pathArray), lowerCase = String.prototype.toLowerCase;
        if (pth.rel) {
          return pathClone(pth.rel);
        }
        if (!Snap2.is(pathArray, "array") || !Snap2.is(pathArray && pathArray[0], "array")) {
          pathArray = Snap2.parsePathString(pathArray);
        }
        var res2 = [], x = 0, y = 0, mx = 0, my = 0, start = 0;
        if (pathArray[0][0] == "M") {
          x = pathArray[0][1];
          y = pathArray[0][2];
          mx = x;
          my = y;
          start++;
          res2.push(["M", x, y]);
        }
        for (var i = start, ii = pathArray.length; i < ii; i++) {
          var r = res2[i] = [], pa = pathArray[i];
          if (pa[0] != lowerCase.call(pa[0])) {
            r[0] = lowerCase.call(pa[0]);
            switch (r[0]) {
              case "a":
                r[1] = pa[1];
                r[2] = pa[2];
                r[3] = pa[3];
                r[4] = pa[4];
                r[5] = pa[5];
                r[6] = +(pa[6] - x).toFixed(3);
                r[7] = +(pa[7] - y).toFixed(3);
                break;
              case "v":
                r[1] = +(pa[1] - y).toFixed(3);
                break;
              case "m":
                mx = pa[1];
                my = pa[2];
              default:
                for (var j = 1, jj = pa.length; j < jj; j++) {
                  r[j] = +(pa[j] - (j % 2 ? x : y)).toFixed(3);
                }
            }
          } else {
            r = res2[i] = [];
            if (pa[0] == "m") {
              mx = pa[1] + x;
              my = pa[2] + y;
            }
            for (var k = 0, kk = pa.length; k < kk; k++) {
              res2[i][k] = pa[k];
            }
          }
          var len = res2[i].length;
          switch (res2[i][0]) {
            case "z":
              x = mx;
              y = my;
              break;
            case "h":
              x += +res2[i][len - 1];
              break;
            case "v":
              y += +res2[i][len - 1];
              break;
            default:
              x += +res2[i][len - 2];
              y += +res2[i][len - 1];
          }
        }
        res2.toString = toString;
        pth.rel = pathClone(res2);
        return res2;
      }
      function pathToAbsolute(pathArray) {
        var pth = paths(pathArray);
        if (pth.abs) {
          return pathClone(pth.abs);
        }
        if (!is(pathArray, "array") || !is(pathArray && pathArray[0], "array")) {
          pathArray = Snap2.parsePathString(pathArray);
        }
        if (!pathArray || !pathArray.length) {
          return [["M", 0, 0]];
        }
        var res2 = [], x = 0, y = 0, mx = 0, my = 0, start = 0, pa0;
        if (pathArray[0][0] == "M") {
          x = +pathArray[0][1];
          y = +pathArray[0][2];
          mx = x;
          my = y;
          start++;
          res2[0] = ["M", x, y];
        }
        var crz = pathArray.length == 3 && pathArray[0][0] == "M" && pathArray[1][0].toUpperCase() == "R" && pathArray[2][0].toUpperCase() == "Z";
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
          res2.push(r = []);
          pa = pathArray[i];
          pa0 = pa[0];
          if (pa0 != pa0.toUpperCase()) {
            r[0] = pa0.toUpperCase();
            switch (r[0]) {
              case "A":
                r[1] = pa[1];
                r[2] = pa[2];
                r[3] = pa[3];
                r[4] = pa[4];
                r[5] = pa[5];
                r[6] = +pa[6] + x;
                r[7] = +pa[7] + y;
                break;
              case "V":
                r[1] = +pa[1] + y;
                break;
              case "H":
                r[1] = +pa[1] + x;
                break;
              case "R":
                var dots = [x, y].concat(pa.slice(1));
                for (var j = 2, jj = dots.length; j < jj; j++) {
                  dots[j] = +dots[j] + x;
                  dots[++j] = +dots[j] + y;
                }
                res2.pop();
                res2 = res2.concat(catmullRom2bezier(dots, crz));
                break;
              case "O":
                res2.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res2 = res2.concat(dots);
                break;
              case "U":
                res2.pop();
                res2 = res2.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ["U"].concat(res2[res2.length - 1].slice(-2));
                break;
              case "M":
                mx = +pa[1] + x;
                my = +pa[2] + y;
              default:
                for (j = 1, jj = pa.length; j < jj; j++) {
                  r[j] = +pa[j] + (j % 2 ? x : y);
                }
            }
          } else if (pa0 == "R") {
            dots = [x, y].concat(pa.slice(1));
            res2.pop();
            res2 = res2.concat(catmullRom2bezier(dots, crz));
            r = ["R"].concat(pa.slice(-2));
          } else if (pa0 == "O") {
            res2.pop();
            dots = ellipsePath(x, y, pa[1], pa[2]);
            dots.push(dots[0]);
            res2 = res2.concat(dots);
          } else if (pa0 == "U") {
            res2.pop();
            res2 = res2.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
            r = ["U"].concat(res2[res2.length - 1].slice(-2));
          } else {
            for (var k = 0, kk = pa.length; k < kk; k++) {
              r[k] = pa[k];
            }
          }
          pa0 = pa0.toUpperCase();
          if (pa0 != "O") {
            switch (r[0]) {
              case "Z":
                x = +mx;
                y = +my;
                break;
              case "H":
                x = r[1];
                break;
              case "V":
                y = r[1];
                break;
              case "M":
                mx = r[r.length - 2];
                my = r[r.length - 1];
              default:
                x = r[r.length - 2];
                y = r[r.length - 1];
            }
          }
        }
        res2.toString = toString;
        pth.abs = pathClone(res2);
        return res2;
      }
      function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
      }
      function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3, _23 = 2 / 3;
        return [
          _13 * x1 + _23 * ax,
          _13 * y1 + _23 * ay,
          _13 * x2 + _23 * ax,
          _13 * y2 + _23 * ay,
          x2,
          y2
        ];
      }
      function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        var _120 = PI * 120 / 180, rad = PI / 180 * (+angle || 0), res2 = [], xy, rotate = Snap2._.cacher(function(x3, y3, rad2) {
          var X = x3 * math2.cos(rad2) - y3 * math2.sin(rad2), Y = x3 * math2.sin(rad2) + y3 * math2.cos(rad2);
          return { x: X, y: Y };
        });
        if (!rx || !ry) {
          return [x1, y1, x2, y2, x2, y2];
        }
        if (!recursive) {
          xy = rotate(x1, y1, -rad);
          x1 = xy.x;
          y1 = xy.y;
          xy = rotate(x2, y2, -rad);
          x2 = xy.x;
          y2 = xy.y;
          var cos = math2.cos(PI / 180 * angle), sin = math2.sin(PI / 180 * angle), x = (x1 - x2) / 2, y = (y1 - y2) / 2;
          var h = x * x / (rx * rx) + y * y / (ry * ry);
          if (h > 1) {
            h = math2.sqrt(h);
            rx = h * rx;
            ry = h * ry;
          }
          var rx2 = rx * rx, ry2 = ry * ry, k = (large_arc_flag == sweep_flag ? -1 : 1) * math2.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))), cx = k * rx * y / ry + (x1 + x2) / 2, cy = k * -ry * x / rx + (y1 + y2) / 2, f1 = math2.asin(((y1 - cy) / ry).toFixed(9)), f2 = math2.asin(((y2 - cy) / ry).toFixed(9));
          f1 = x1 < cx ? PI - f1 : f1;
          f2 = x2 < cx ? PI - f2 : f2;
          f1 < 0 && (f1 = PI * 2 + f1);
          f2 < 0 && (f2 = PI * 2 + f2);
          if (sweep_flag && f1 > f2) {
            f1 = f1 - PI * 2;
          }
          if (!sweep_flag && f2 > f1) {
            f2 = f2 - PI * 2;
          }
        } else {
          f1 = recursive[0];
          f2 = recursive[1];
          cx = recursive[2];
          cy = recursive[3];
        }
        var df = f2 - f1;
        if (abs(df) > _120) {
          var f2old = f2, x2old = x2, y2old = y2;
          f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
          x2 = cx + rx * math2.cos(f2);
          y2 = cy + ry * math2.sin(f2);
          res2 = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = math2.cos(f1), s1 = math2.sin(f1), c2 = math2.cos(f2), s2 = math2.sin(f2), t = math2.tan(df / 4), hx = 4 / 3 * rx * t, hy = 4 / 3 * ry * t, m1 = [x1, y1], m2 = [x1 + hx * s1, y1 - hy * c1], m3 = [x2 + hx * s2, y2 - hy * c2], m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
          return [m2, m3, m4].concat(res2);
        } else {
          res2 = [m2, m3, m4].concat(res2).join().split(",");
          var newres = [];
          for (var i = 0, ii = res2.length; i < ii; i++) {
            newres[i] = i % 2 ? rotate(res2[i - 1], res2[i], rad).y : rotate(res2[i], res2[i + 1], rad).x;
          }
          return newres;
        }
      }
      function findDotAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        return {
          x: pow(t1, 3) * p1x + pow(t1, 2) * 3 * t * c1x + t1 * 3 * t * t * c2x + pow(t, 3) * p2x,
          y: pow(t1, 3) * p1y + pow(t1, 2) * 3 * t * c1y + t1 * 3 * t * t * c2y + pow(t, 3) * p2y
        };
      }
      function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [], bounds = [[], []], a, b, c, t, t1, t2, b2ac, sqrtb2ac;
        for (var i = 0; i < 2; ++i) {
          if (i == 0) {
            b = 6 * x0 - 12 * x1 + 6 * x2;
            a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
            c = 3 * x1 - 3 * x0;
          } else {
            b = 6 * y0 - 12 * y1 + 6 * y2;
            a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
            c = 3 * y1 - 3 * y0;
          }
          if (abs(a) < 1e-12) {
            if (abs(b) < 1e-12) {
              continue;
            }
            t = -c / b;
            if (0 < t && t < 1) {
              tvalues.push(t);
            }
            continue;
          }
          b2ac = b * b - 4 * c * a;
          sqrtb2ac = math2.sqrt(b2ac);
          if (b2ac < 0) {
            continue;
          }
          t1 = (-b + sqrtb2ac) / (2 * a);
          if (0 < t1 && t1 < 1) {
            tvalues.push(t1);
          }
          t2 = (-b - sqrtb2ac) / (2 * a);
          if (0 < t2 && t2 < 1) {
            tvalues.push(t2);
          }
        }
        var x, y, j = tvalues.length, jlen = j, mt;
        while (j--) {
          t = tvalues[j];
          mt = 1 - t;
          bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
          bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }
        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;
        return {
          min: { x: mmin.apply(0, bounds[0]), y: mmin.apply(0, bounds[1]) },
          max: { x: mmax.apply(0, bounds[0]), y: mmax.apply(0, bounds[1]) }
        };
      }
      function path2curve(path, path2) {
        var pth = !path2 && paths(path);
        if (!path2 && pth.curve) {
          return pathClone(pth.curve);
        }
        var p = pathToAbsolute(path), p2 = path2 && pathToAbsolute(path2), attrs = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, attrs2 = { x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null }, processPath = function(path3, d, pcom2) {
          var nx, ny;
          if (!path3) {
            return ["C", d.x, d.y, d.x, d.y, d.x, d.y];
          }
          !(path3[0] in { T: 1, Q: 1 }) && (d.qx = d.qy = null);
          switch (path3[0]) {
            case "M":
              d.X = path3[1];
              d.Y = path3[2];
              break;
            case "A":
              path3 = ["C"].concat(a2c.apply(0, [d.x, d.y].concat(path3.slice(1))));
              break;
            case "S":
              if (pcom2 == "C" || pcom2 == "S") {
                nx = d.x * 2 - d.bx;
                ny = d.y * 2 - d.by;
              } else {
                nx = d.x;
                ny = d.y;
              }
              path3 = ["C", nx, ny].concat(path3.slice(1));
              break;
            case "T":
              if (pcom2 == "Q" || pcom2 == "T") {
                d.qx = d.x * 2 - d.qx;
                d.qy = d.y * 2 - d.qy;
              } else {
                d.qx = d.x;
                d.qy = d.y;
              }
              path3 = ["C"].concat(q2c(d.x, d.y, d.qx, d.qy, path3[1], path3[2]));
              break;
            case "Q":
              d.qx = path3[1];
              d.qy = path3[2];
              path3 = ["C"].concat(q2c(d.x, d.y, path3[1], path3[2], path3[3], path3[4]));
              break;
            case "L":
              path3 = ["C"].concat(l2c(d.x, d.y, path3[1], path3[2]));
              break;
            case "H":
              path3 = ["C"].concat(l2c(d.x, d.y, path3[1], d.y));
              break;
            case "V":
              path3 = ["C"].concat(l2c(d.x, d.y, d.x, path3[1]));
              break;
            case "Z":
              path3 = ["C"].concat(l2c(d.x, d.y, d.X, d.Y));
              break;
          }
          return path3;
        }, fixArc = function(pp, i2) {
          if (pp[i2].length > 7) {
            pp[i2].shift();
            var pi = pp[i2];
            while (pi.length) {
              pcoms1[i2] = "A";
              p2 && (pcoms2[i2] = "A");
              pp.splice(i2++, 0, ["C"].concat(pi.splice(0, 6)));
            }
            pp.splice(i2, 1);
            ii = mmax(p.length, p2 && p2.length || 0);
          }
        }, fixM = function(path1, path22, a1, a2, i2) {
          if (path1 && path22 && path1[i2][0] == "M" && path22[i2][0] != "M") {
            path22.splice(i2, 0, ["M", a2.x, a2.y]);
            a1.bx = 0;
            a1.by = 0;
            a1.x = path1[i2][1];
            a1.y = path1[i2][2];
            ii = mmax(p.length, p2 && p2.length || 0);
          }
        }, pcoms1 = [], pcoms2 = [], pfirst = "", pcom = "";
        for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
          p[i] && (pfirst = p[i][0]);
          if (pfirst != "C") {
            pcoms1[i] = pfirst;
            i && (pcom = pcoms1[i - 1]);
          }
          p[i] = processPath(p[i], attrs, pcom);
          if (pcoms1[i] != "A" && pfirst == "C")
            pcoms1[i] = "C";
          fixArc(p, i);
          if (p2) {
            p2[i] && (pfirst = p2[i][0]);
            if (pfirst != "C") {
              pcoms2[i] = pfirst;
              i && (pcom = pcoms2[i - 1]);
            }
            p2[i] = processPath(p2[i], attrs2, pcom);
            if (pcoms2[i] != "A" && pfirst == "C") {
              pcoms2[i] = "C";
            }
            fixArc(p2, i);
          }
          fixM(p, p2, attrs, attrs2, i);
          fixM(p2, p, attrs2, attrs, i);
          var seg = p[i], seg2 = p2 && p2[i], seglen = seg.length, seg2len = p2 && seg2.length;
          attrs.x = seg[seglen - 2];
          attrs.y = seg[seglen - 1];
          attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
          attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
          attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
          attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
          attrs2.x = p2 && seg2[seg2len - 2];
          attrs2.y = p2 && seg2[seg2len - 1];
        }
        if (!p2) {
          pth.curve = pathClone(p);
        }
        return p2 ? [p, p2] : p;
      }
      function mapPath(path, matrix) {
        if (!matrix) {
          return path;
        }
        var x, y, i, j, ii, jj, pathi;
        path = path2curve(path);
        for (i = 0, ii = path.length; i < ii; i++) {
          pathi = path[i];
          for (j = 1, jj = pathi.length; j < jj; j += 2) {
            x = matrix.x(pathi[j], pathi[j + 1]);
            y = matrix.y(pathi[j], pathi[j + 1]);
            pathi[j] = x;
            pathi[j + 1] = y;
          }
        }
        return path;
      }
      function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
          var p = [
            { x: +crp[i - 2], y: +crp[i - 1] },
            { x: +crp[i], y: +crp[i + 1] },
            { x: +crp[i + 2], y: +crp[i + 3] },
            { x: +crp[i + 4], y: +crp[i + 5] }
          ];
          if (z) {
            if (!i) {
              p[0] = { x: +crp[iLen - 2], y: +crp[iLen - 1] };
            } else if (iLen - 4 == i) {
              p[3] = { x: +crp[0], y: +crp[1] };
            } else if (iLen - 2 == i) {
              p[2] = { x: +crp[0], y: +crp[1] };
              p[3] = { x: +crp[2], y: +crp[3] };
            }
          } else {
            if (iLen - 4 == i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = { x: +crp[i], y: +crp[i + 1] };
            }
          }
          d.push([
            "C",
            (-p[0].x + 6 * p[1].x + p[2].x) / 6,
            (-p[0].y + 6 * p[1].y + p[2].y) / 6,
            (p[1].x + 6 * p[2].x - p[3].x) / 6,
            (p[1].y + 6 * p[2].y - p[3].y) / 6,
            p[2].x,
            p[2].y
          ]);
        }
        return d;
      }
      Snap2.path = paths;
      Snap2.path.getTotalLength = getTotalLength;
      Snap2.path.getPointAtLength = getPointAtLength;
      Snap2.path.getSubpath = function(path, from, to) {
        if (this.getTotalLength(path) - to < 1e-6) {
          return getSubpathsAtLength(path, from).end;
        }
        var a = getSubpathsAtLength(path, to, 1);
        return from ? getSubpathsAtLength(a, from).end : a;
      };
      elproto.getTotalLength = function() {
        if (this.node.getTotalLength) {
          return this.node.getTotalLength();
        }
      };
      elproto.getPointAtLength = function(length) {
        return getPointAtLength(this.attr("d"), length);
      };
      elproto.getSubpath = function(from, to) {
        return Snap2.path.getSubpath(this.attr("d"), from, to);
      };
      Snap2._.box = box;
      Snap2.path.findDotsAtSegment = findDotsAtSegment;
      Snap2.path.bezierBBox = bezierBBox;
      Snap2.path.isPointInsideBBox = isPointInsideBBox;
      Snap2.closest = function(x, y, X, Y) {
        var r = 100, b = box(x - r / 2, y - r / 2, r, r), inside = [], getter = X[0].hasOwnProperty("x") ? function(i2) {
          return {
            x: X[i2].x,
            y: X[i2].y
          };
        } : function(i2) {
          return {
            x: X[i2],
            y: Y[i2]
          };
        }, found = 0;
        while (r <= 1e6 && !found) {
          for (var i = 0, ii = X.length; i < ii; i++) {
            var xy = getter(i);
            if (isPointInsideBBox(b, xy.x, xy.y)) {
              found++;
              inside.push(xy);
              break;
            }
          }
          if (!found) {
            r *= 2;
            b = box(x - r / 2, y - r / 2, r, r);
          }
        }
        if (r == 1e6) {
          return;
        }
        var len = Infinity, res2;
        for (i = 0, ii = inside.length; i < ii; i++) {
          var l = Snap2.len(x, y, inside[i].x, inside[i].y);
          if (len > l) {
            len = l;
            inside[i].len = l;
            res2 = inside[i];
          }
        }
        return res2;
      };
      Snap2.path.isBBoxIntersect = isBBoxIntersect;
      Snap2.path.intersection = pathIntersection;
      Snap2.path.intersectionNumber = pathIntersectionNumber;
      Snap2.path.isPointInside = isPointInsidePath;
      Snap2.path.getBBox = pathBBox;
      Snap2.path.get = getPath;
      Snap2.path.toRelative = pathToRelative;
      Snap2.path.toAbsolute = pathToAbsolute;
      Snap2.path.toCubic = path2curve;
      Snap2.path.map = mapPath;
      Snap2.path.toString = toString;
      Snap2.path.clone = pathClone;
    });
    Snap.plugin(function(Snap2, Element, Paper, glob) {
      var mmax = Math.max, mmin = Math.min;
      var Set = function(items) {
        this.items = [];
        this.bindings = {};
        this.length = 0;
        this.type = "set";
        if (items) {
          for (var i = 0, ii = items.length; i < ii; i++) {
            if (items[i]) {
              this[this.items.length] = this.items[this.items.length] = items[i];
              this.length++;
            }
          }
        }
      }, setproto = Set.prototype;
      setproto.push = function() {
        var item, len;
        for (var i = 0, ii = arguments.length; i < ii; i++) {
          item = arguments[i];
          if (item) {
            len = this.items.length;
            this[len] = this.items[len] = item;
            this.length++;
          }
        }
        return this;
      };
      setproto.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop();
      };
      setproto.forEach = function(callback, thisArg) {
        for (var i = 0, ii = this.items.length; i < ii; i++) {
          if (callback.call(thisArg, this.items[i], i) === false) {
            return this;
          }
        }
        return this;
      };
      setproto.animate = function(attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
          callback = easing;
          easing = mina.linear;
        }
        if (attrs instanceof Snap2._.Animation) {
          callback = attrs.callback;
          easing = attrs.easing;
          ms = easing.dur;
          attrs = attrs.attr;
        }
        var args = arguments;
        if (Snap2.is(attrs, "array") && Snap2.is(args[args.length - 1], "array")) {
          var each = true;
        }
        var begin, handler = function() {
          if (begin) {
            this.b = begin;
          } else {
            begin = this.b;
          }
        }, cb = 0, set = this, callbacker = callback && function() {
          if (++cb == set.length) {
            callback.call(this);
          }
        };
        return this.forEach(function(el, i) {
          eve.once("snap.animcreated." + el.id, handler);
          if (each) {
            args[i] && el.animate.apply(el, args[i]);
          } else {
            el.animate(attrs, ms, easing, callbacker);
          }
        });
      };
      setproto.remove = function() {
        while (this.length) {
          this.pop().remove();
        }
        return this;
      };
      setproto.bind = function(attr, a, b) {
        var data = {};
        if (typeof a == "function") {
          this.bindings[attr] = a;
        } else {
          var aname = b || attr;
          this.bindings[attr] = function(v) {
            data[aname] = v;
            a.attr(data);
          };
        }
        return this;
      };
      setproto.attr = function(value) {
        var unbound = {};
        for (var k in value) {
          if (this.bindings[k]) {
            this.bindings[k](value[k]);
          } else {
            unbound[k] = value[k];
          }
        }
        for (var i = 0, ii = this.items.length; i < ii; i++) {
          this.items[i].attr(unbound);
        }
        return this;
      };
      setproto.clear = function() {
        while (this.length) {
          this.pop();
        }
      };
      setproto.splice = function(index, count, insertion) {
        index = index < 0 ? mmax(this.length + index, 0) : index;
        count = mmax(0, mmin(this.length - index, count));
        var tail = [], todel = [], args = [], i;
        for (i = 2; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        for (i = 0; i < count; i++) {
          todel.push(this[index + i]);
        }
        for (; i < this.length - index; i++) {
          tail.push(this[index + i]);
        }
        var arglen = args.length;
        for (i = 0; i < arglen + tail.length; i++) {
          this.items[index + i] = this[index + i] = i < arglen ? args[i] : tail[i - arglen];
        }
        i = this.items.length = this.length -= count - arglen;
        while (this[i]) {
          delete this[i++];
        }
        return new Set(todel);
      };
      setproto.exclude = function(el) {
        for (var i = 0, ii = this.length; i < ii; i++)
          if (this[i] == el) {
            this.splice(i, 1);
            return true;
          }
        return false;
      };
      setproto.insertAfter = function(el) {
        var i = this.items.length;
        while (i--) {
          this.items[i].insertAfter(el);
        }
        return this;
      };
      setproto.getBBox = function() {
        var x = [], y = [], x2 = [], y2 = [];
        for (var i = this.items.length; i--; )
          if (!this.items[i].removed) {
            var box = this.items[i].getBBox();
            x.push(box.x);
            y.push(box.y);
            x2.push(box.x + box.width);
            y2.push(box.y + box.height);
          }
        x = mmin.apply(0, x);
        y = mmin.apply(0, y);
        x2 = mmax.apply(0, x2);
        y2 = mmax.apply(0, y2);
        return {
          x,
          y,
          x2,
          y2,
          width: x2 - x,
          height: y2 - y,
          cx: x + (x2 - x) / 2,
          cy: y + (y2 - y) / 2
        };
      };
      setproto.clone = function(s) {
        s = new Set();
        for (var i = 0, ii = this.items.length; i < ii; i++) {
          s.push(this.items[i].clone());
        }
        return s;
      };
      setproto.toString = function() {
        return "Snap‘s set";
      };
      setproto.type = "set";
      Snap2.Set = Set;
      Snap2.set = function() {
        var set = new Set();
        if (arguments.length) {
          set.push.apply(set, Array.prototype.slice.call(arguments, 0));
        }
        return set;
      };
    });
    Snap.plugin(function(Snap2, Element, Paper, glob) {
      var names = {}, reUnit = /[%a-z]+$/i, Str = String;
      names.stroke = names.fill = "colour";
      function getEmpty(item) {
        var l = item[0];
        switch (l.toLowerCase()) {
          case "t":
            return [l, 0, 0];
          case "m":
            return [l, 1, 0, 0, 1, 0, 0];
          case "r":
            if (item.length == 4) {
              return [l, 0, item[2], item[3]];
            } else {
              return [l, 0];
            }
          case "s":
            if (item.length == 5) {
              return [l, 1, 1, item[3], item[4]];
            } else if (item.length == 3) {
              return [l, 1, 1];
            } else {
              return [l, 1];
            }
        }
      }
      function equaliseTransform(t1, t2, getBBox) {
        t1 = t1 || new Snap2.Matrix();
        t2 = t2 || new Snap2.Matrix();
        t1 = Snap2.parseTransformString(t1.toTransformString()) || [];
        t2 = Snap2.parseTransformString(t2.toTransformString()) || [];
        var maxlength = Math.max(t1.length, t2.length), from = [], to = [], i = 0, j, jj, tt1, tt2;
        for (; i < maxlength; i++) {
          tt1 = t1[i] || getEmpty(t2[i]);
          tt2 = t2[i] || getEmpty(tt1);
          if (tt1[0] != tt2[0] || tt1[0].toLowerCase() == "r" && (tt1[2] != tt2[2] || tt1[3] != tt2[3]) || tt1[0].toLowerCase() == "s" && (tt1[3] != tt2[3] || tt1[4] != tt2[4])) {
            t1 = Snap2._.transform2matrix(t1, getBBox());
            t2 = Snap2._.transform2matrix(t2, getBBox());
            from = [["m", t1.a, t1.b, t1.c, t1.d, t1.e, t1.f]];
            to = [["m", t2.a, t2.b, t2.c, t2.d, t2.e, t2.f]];
            break;
          }
          from[i] = [];
          to[i] = [];
          for (j = 0, jj = Math.max(tt1.length, tt2.length); j < jj; j++) {
            j in tt1 && (from[i][j] = tt1[j]);
            j in tt2 && (to[i][j] = tt2[j]);
          }
        }
        return {
          from: path2array(from),
          to: path2array(to),
          f: getPath(from)
        };
      }
      function getNumber(val) {
        return val;
      }
      function getUnit(unit) {
        return function(val) {
          return +val.toFixed(3) + unit;
        };
      }
      function getViewBox(val) {
        return val.join(" ");
      }
      function getColour(clr) {
        return Snap2.rgb(clr[0], clr[1], clr[2], clr[3]);
      }
      function getPath(path) {
        var k = 0, i, ii, j, jj, out, a, b = [];
        for (i = 0, ii = path.length; i < ii; i++) {
          out = "[";
          a = ['"' + path[i][0] + '"'];
          for (j = 1, jj = path[i].length; j < jj; j++) {
            a[j] = "val[" + k++ + "]";
          }
          out += a + "]";
          b[i] = out;
        }
        return Function("val", "return Snap.path.toString.call([" + b + "])");
      }
      function path2array(path) {
        var out = [];
        for (var i = 0, ii = path.length; i < ii; i++) {
          for (var j = 1, jj = path[i].length; j < jj; j++) {
            out.push(path[i][j]);
          }
        }
        return out;
      }
      function isNumeric(obj) {
        return isFinite(obj);
      }
      function arrayEqual(arr1, arr2) {
        if (!Snap2.is(arr1, "array") || !Snap2.is(arr2, "array")) {
          return false;
        }
        return arr1.toString() == arr2.toString();
      }
      Element.prototype.equal = function(name, b) {
        return eve("snap.util.equal", this, name, b).firstDefined();
      };
      eve.on("snap.util.equal", function(name, b) {
        var A, B, a = Str(this.attr(name) || ""), el = this;
        if (names[name] == "colour") {
          A = Snap2.color(a);
          B = Snap2.color(b);
          return {
            from: [A.r, A.g, A.b, A.opacity],
            to: [B.r, B.g, B.b, B.opacity],
            f: getColour
          };
        }
        if (name == "viewBox") {
          A = this.attr(name).vb.split(" ").map(Number);
          B = b.split(" ").map(Number);
          return {
            from: A,
            to: B,
            f: getViewBox
          };
        }
        if (name == "transform" || name == "gradientTransform" || name == "patternTransform") {
          if (typeof b == "string") {
            b = Str(b).replace(/\.{3}|\u2026/g, a);
          }
          a = this.matrix;
          if (!Snap2._.rgTransform.test(b)) {
            b = Snap2._.transform2matrix(Snap2._.svgTransform2string(b), this.getBBox());
          } else {
            b = Snap2._.transform2matrix(b, this.getBBox());
          }
          return equaliseTransform(a, b, function() {
            return el.getBBox(1);
          });
        }
        if (name == "d" || name == "path") {
          A = Snap2.path.toCubic(a, b);
          return {
            from: path2array(A[0]),
            to: path2array(A[1]),
            f: getPath(A[0])
          };
        }
        if (name == "points") {
          A = Str(a).split(Snap2._.separator);
          B = Str(b).split(Snap2._.separator);
          return {
            from: A,
            to: B,
            f: function(val) {
              return val;
            }
          };
        }
        if (isNumeric(a) && isNumeric(b)) {
          return {
            from: parseFloat(a),
            to: parseFloat(b),
            f: getNumber
          };
        }
        var aUnit = a.match(reUnit), bUnit = Str(b).match(reUnit);
        if (aUnit && arrayEqual(aUnit, bUnit)) {
          return {
            from: parseFloat(a),
            to: parseFloat(b),
            f: getUnit(aUnit)
          };
        } else {
          return {
            from: this.asPX(name),
            to: this.asPX(name, b),
            f: getNumber
          };
        }
      });
    });
    Snap.plugin(function(Snap2, Element, Paper, glob) {
      var elproto = Element.prototype, has = "hasOwnProperty", supportsTouch = "createTouch" in glob.doc, events = [
        "click",
        "dblclick",
        "mousedown",
        "mousemove",
        "mouseout",
        "mouseover",
        "mouseup",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel"
      ], touchMap = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      }, getScroll = function(xy, el) {
        var name = xy == "y" ? "scrollTop" : "scrollLeft", doc = el && el.node ? el.node.ownerDocument : glob.doc;
        return doc[name in doc.documentElement ? "documentElement" : "body"][name];
      }, preventDefault = function() {
        this.returnValue = false;
      }, preventTouch = function() {
        return this.originalEvent.preventDefault();
      }, stopPropagation = function() {
        this.cancelBubble = true;
      }, stopTouch = function() {
        return this.originalEvent.stopPropagation();
      }, addEvent = function(obj, type, fn, element) {
        var realName = supportsTouch && touchMap[type] ? touchMap[type] : type, f = function(e) {
          var scrollY = getScroll("y", element), scrollX = getScroll("x", element);
          if (supportsTouch && touchMap[has](type)) {
            for (var i2 = 0, ii = e.targetTouches && e.targetTouches.length; i2 < ii; i2++) {
              if (e.targetTouches[i2].target == obj || obj.contains(e.targetTouches[i2].target)) {
                var olde = e;
                e = e.targetTouches[i2];
                e.originalEvent = olde;
                e.preventDefault = preventTouch;
                e.stopPropagation = stopTouch;
                break;
              }
            }
          }
          var x = e.clientX + scrollX, y = e.clientY + scrollY;
          return fn.call(element, e, x, y);
        };
        if (type !== realName) {
          obj.addEventListener(type, f, false);
        }
        obj.addEventListener(realName, f, false);
        return function() {
          if (type !== realName) {
            obj.removeEventListener(type, f, false);
          }
          obj.removeEventListener(realName, f, false);
          return true;
        };
      }, drag = [], dragMove = function(e) {
        var x = e.clientX, y = e.clientY, scrollY = getScroll("y"), scrollX = getScroll("x"), dragi, j = drag.length;
        while (j--) {
          dragi = drag[j];
          if (supportsTouch) {
            var i2 = e.touches && e.touches.length, touch;
            while (i2--) {
              touch = e.touches[i2];
              if (touch.identifier == dragi.el._drag.id || dragi.el.node.contains(touch.target)) {
                x = touch.clientX;
                y = touch.clientY;
                (e.originalEvent ? e.originalEvent : e).preventDefault();
                break;
              }
            }
          } else {
            e.preventDefault();
          }
          var node = dragi.el.node, o, next = node.nextSibling, parent = node.parentNode, display = node.style.display;
          x += scrollX;
          y += scrollY;
          eve("snap.drag.move." + dragi.el.id, dragi.move_scope || dragi.el, x - dragi.el._drag.x, y - dragi.el._drag.y, x, y, e);
        }
      }, dragUp = function(e) {
        Snap2.unmousemove(dragMove).unmouseup(dragUp);
        var i2 = drag.length, dragi;
        while (i2--) {
          dragi = drag[i2];
          dragi.el._drag = {};
          eve("snap.drag.end." + dragi.el.id, dragi.end_scope || dragi.start_scope || dragi.move_scope || dragi.el, e);
          eve.off("snap.drag.*." + dragi.el.id);
        }
        drag = [];
      };
      for (var i = events.length; i--; ) {
        (function(eventName) {
          Snap2[eventName] = elproto[eventName] = function(fn, scope) {
            if (Snap2.is(fn, "function")) {
              this.events = this.events || [];
              this.events.push({
                name: eventName,
                f: fn,
                unbind: addEvent(this.node || document, eventName, fn, scope || this)
              });
            } else {
              for (var i2 = 0, ii = this.events.length; i2 < ii; i2++)
                if (this.events[i2].name == eventName) {
                  try {
                    this.events[i2].f.call(this);
                  } catch (e) {
                  }
                }
            }
            return this;
          };
          Snap2["un" + eventName] = elproto["un" + eventName] = function(fn) {
            var events2 = this.events || [], l = events2.length;
            while (l--)
              if (events2[l].name == eventName && (events2[l].f == fn || !fn)) {
                events2[l].unbind();
                events2.splice(l, 1);
                !events2.length && delete this.events;
                return this;
              }
            return this;
          };
        })(events[i]);
      }
      elproto.hover = function(f_in, f_out, scope_in, scope_out) {
        return this.mouseover(f_in, scope_in).mouseout(f_out, scope_out || scope_in);
      };
      elproto.unhover = function(f_in, f_out) {
        return this.unmouseover(f_in).unmouseout(f_out);
      };
      var draggable = [];
      elproto.drag = function(onmove, onstart, onend, move_scope, start_scope, end_scope) {
        var el = this;
        if (!arguments.length) {
          var origTransform;
          return el.drag(function(dx, dy) {
            this.attr({
              transform: origTransform + (origTransform ? "T" : "t") + [dx, dy]
            });
          }, function() {
            origTransform = this.transform().local;
          });
        }
        function start(e, x, y) {
          (e.originalEvent || e).preventDefault();
          el._drag.x = x;
          el._drag.y = y;
          el._drag.id = e.identifier;
          !drag.length && Snap2.mousemove(dragMove).mouseup(dragUp);
          drag.push({ el, move_scope, start_scope, end_scope });
          onstart && eve.on("snap.drag.start." + el.id, onstart);
          onmove && eve.on("snap.drag.move." + el.id, onmove);
          onend && eve.on("snap.drag.end." + el.id, onend);
          eve("snap.drag.start." + el.id, start_scope || move_scope || el, x, y, e);
        }
        function init(e, x, y) {
          eve("snap.draginit." + el.id, el, e, x, y);
        }
        eve.on("snap.draginit." + el.id, start);
        el._drag = {};
        draggable.push({ el, start, init });
        el.mousedown(init);
        return el;
      };
      elproto.undrag = function() {
        var i2 = draggable.length;
        while (i2--)
          if (draggable[i2].el == this) {
            this.unmousedown(draggable[i2].init);
            draggable.splice(i2, 1);
            eve.unbind("snap.drag.*." + this.id);
            eve.unbind("snap.draginit." + this.id);
          }
        !draggable.length && Snap2.unmousemove(dragMove).unmouseup(dragUp);
        return this;
      };
    });
    Snap.plugin(function(Snap2, Element, Paper, glob) {
      var elproto = Element.prototype, pproto = Paper.prototype, rgurl = /^\s*url\((.+)\)/, Str = String, $ = Snap2._.$;
      Snap2.filter = {};
      pproto.filter = function(filstr) {
        var paper = this;
        if (paper.type != "svg") {
          paper = paper.paper;
        }
        var f = Snap2.parse(Str(filstr)), id = Snap2._.id(), width = paper.node.offsetWidth, height = paper.node.offsetHeight, filter = $("filter");
        $(filter, {
          id,
          filterUnits: "userSpaceOnUse"
        });
        filter.appendChild(f.node);
        paper.defs.appendChild(filter);
        return new Element(filter);
      };
      eve.on("snap.util.getattr.filter", function() {
        eve.stop();
        var p = $(this.node, "filter");
        if (p) {
          var match = Str(p).match(rgurl);
          return match && Snap2.select(match[1]);
        }
      });
      eve.on("snap.util.attr.filter", function(value) {
        if (value instanceof Element && value.type == "filter") {
          eve.stop();
          var id = value.node.id;
          if (!id) {
            $(value.node, { id: value.id });
            id = value.id;
          }
          $(this.node, {
            filter: Snap2.url(id)
          });
        }
        if (!value || value == "none") {
          eve.stop();
          this.node.removeAttribute("filter");
        }
      });
      Snap2.filter.blur = function(x, y) {
        if (x == null) {
          x = 2;
        }
        var def = y == null ? x : [x, y];
        return Snap2.format('<feGaussianBlur stdDeviation="{def}"/>', {
          def
        });
      };
      Snap2.filter.blur.toString = function() {
        return this();
      };
      Snap2.filter.shadow = function(dx, dy, blur, color, opacity) {
        if (opacity == null) {
          if (color == null) {
            opacity = blur;
            blur = 4;
            color = "#000";
          } else {
            opacity = color;
            color = blur;
            blur = 4;
          }
        }
        if (blur == null) {
          blur = 4;
        }
        if (opacity == null) {
          opacity = 1;
        }
        if (dx == null) {
          dx = 0;
          dy = 2;
        }
        if (dy == null) {
          dy = dx;
        }
        color = Snap2.color(color);
        return Snap2.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {
          color,
          dx,
          dy,
          blur,
          opacity
        });
      };
      Snap2.filter.shadow.toString = function() {
        return this();
      };
      Snap2.filter.grayscale = function(amount) {
        if (amount == null) {
          amount = 1;
        }
        return Snap2.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {
          a: 0.2126 + 0.7874 * (1 - amount),
          b: 0.7152 - 0.7152 * (1 - amount),
          c: 0.0722 - 0.0722 * (1 - amount),
          d: 0.2126 - 0.2126 * (1 - amount),
          e: 0.7152 + 0.2848 * (1 - amount),
          f: 0.0722 - 0.0722 * (1 - amount),
          g: 0.2126 - 0.2126 * (1 - amount),
          h: 0.0722 + 0.9278 * (1 - amount)
        });
      };
      Snap2.filter.grayscale.toString = function() {
        return this();
      };
      Snap2.filter.sepia = function(amount) {
        if (amount == null) {
          amount = 1;
        }
        return Snap2.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {
          a: 0.393 + 0.607 * (1 - amount),
          b: 0.769 - 0.769 * (1 - amount),
          c: 0.189 - 0.189 * (1 - amount),
          d: 0.349 - 0.349 * (1 - amount),
          e: 0.686 + 0.314 * (1 - amount),
          f: 0.168 - 0.168 * (1 - amount),
          g: 0.272 - 0.272 * (1 - amount),
          h: 0.534 - 0.534 * (1 - amount),
          i: 0.131 + 0.869 * (1 - amount)
        });
      };
      Snap2.filter.sepia.toString = function() {
        return this();
      };
      Snap2.filter.saturate = function(amount) {
        if (amount == null) {
          amount = 1;
        }
        return Snap2.format('<feColorMatrix type="saturate" values="{amount}"/>', {
          amount: 1 - amount
        });
      };
      Snap2.filter.saturate.toString = function() {
        return this();
      };
      Snap2.filter.hueRotate = function(angle) {
        angle = angle || 0;
        return Snap2.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {
          angle
        });
      };
      Snap2.filter.hueRotate.toString = function() {
        return this();
      };
      Snap2.filter.invert = function(amount) {
        if (amount == null) {
          amount = 1;
        }
        return Snap2.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {
          amount,
          amount2: 1 - amount
        });
      };
      Snap2.filter.invert.toString = function() {
        return this();
      };
      Snap2.filter.brightness = function(amount) {
        if (amount == null) {
          amount = 1;
        }
        return Snap2.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {
          amount
        });
      };
      Snap2.filter.brightness.toString = function() {
        return this();
      };
      Snap2.filter.contrast = function(amount) {
        if (amount == null) {
          amount = 1;
        }
        return Snap2.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {
          amount,
          amount2: 0.5 - amount / 2
        });
      };
      Snap2.filter.contrast.toString = function() {
        return this();
      };
    });
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var box = Snap2._.box, is = Snap2.is, firstLetter = /^[^a-z]*([tbmlrc])/i, toString = function() {
        return "T" + this.dx + "," + this.dy;
      };
      Element.prototype.getAlign = function(el, way) {
        if (way == null && is(el, "string")) {
          way = el;
          el = null;
        }
        el = el || this.paper;
        var bx = el.getBBox ? el.getBBox() : box(el), bb = this.getBBox(), out = {};
        way = way && way.match(firstLetter);
        way = way ? way[1].toLowerCase() : "c";
        switch (way) {
          case "t":
            out.dx = 0;
            out.dy = bx.y - bb.y;
            break;
          case "b":
            out.dx = 0;
            out.dy = bx.y2 - bb.y2;
            break;
          case "m":
            out.dx = 0;
            out.dy = bx.cy - bb.cy;
            break;
          case "l":
            out.dx = bx.x - bb.x;
            out.dy = 0;
            break;
          case "r":
            out.dx = bx.x2 - bb.x2;
            out.dy = 0;
            break;
          default:
            out.dx = bx.cx - bb.cx;
            out.dy = 0;
            break;
        }
        out.toString = toString;
        return out;
      };
      Element.prototype.align = function(el, way) {
        return this.transform("..." + this.getAlign(el, way));
      };
    });
    Snap.plugin(function(Snap2, Element, Paper, glob, Fragment) {
      var elproto = Element.prototype, is = Snap2.is, Str = String, has = "hasOwnProperty";
      function slice(from, to, f) {
        return function(arr) {
          var res2 = arr.slice(from, to);
          if (res2.length == 1) {
            res2 = res2[0];
          }
          return f ? f(res2) : res2;
        };
      }
      var Animation = function(attr, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
          callback = easing;
          easing = mina.linear;
        }
        this.attr = attr;
        this.dur = ms;
        easing && (this.easing = easing);
        callback && (this.callback = callback);
      };
      Snap2._.Animation = Animation;
      Snap2.animation = function(attr, ms, easing, callback) {
        return new Animation(attr, ms, easing, callback);
      };
      elproto.inAnim = function() {
        var el = this, res2 = [];
        for (var id in el.anims)
          if (el.anims[has](id)) {
            (function(a) {
              res2.push({
                anim: new Animation(a._attrs, a.dur, a.easing, a._callback),
                mina: a,
                curStatus: a.status(),
                status: function(val) {
                  return a.status(val);
                },
                stop: function() {
                  a.stop();
                }
              });
            })(el.anims[id]);
          }
        return res2;
      };
      Snap2.animate = function(from, to, setter, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
          callback = easing;
          easing = mina.linear;
        }
        var now = mina.time(), anim = mina(from, to, now, now + ms, mina.time, setter, easing);
        callback && eve.once("mina.finish." + anim.id, callback);
        return anim;
      };
      elproto.stop = function() {
        var anims = this.inAnim();
        for (var i = 0, ii = anims.length; i < ii; i++) {
          anims[i].stop();
        }
        return this;
      };
      elproto.animate = function(attrs, ms, easing, callback) {
        if (typeof easing == "function" && !easing.length) {
          callback = easing;
          easing = mina.linear;
        }
        if (attrs instanceof Animation) {
          callback = attrs.callback;
          easing = attrs.easing;
          ms = attrs.dur;
          attrs = attrs.attr;
        }
        var fkeys = [], tkeys = [], keys = {}, from, to, f, eq, el = this;
        for (var key in attrs)
          if (attrs[has](key)) {
            if (el.equal) {
              eq = el.equal(key, Str(attrs[key]));
              from = eq.from;
              to = eq.to;
              f = eq.f;
            } else {
              from = +el.attr(key);
              to = +attrs[key];
            }
            var len = is(from, "array") ? from.length : 1;
            keys[key] = slice(fkeys.length, fkeys.length + len, f);
            fkeys = fkeys.concat(from);
            tkeys = tkeys.concat(to);
          }
        var now = mina.time(), anim = mina(fkeys, tkeys, now, now + ms, mina.time, function(val) {
          var attr = {};
          for (var key2 in keys)
            if (keys[has](key2)) {
              attr[key2] = keys[key2](val);
            }
          el.attr(attr);
        }, easing);
        el.anims[anim.id] = anim;
        anim._attrs = attrs;
        anim._callback = callback;
        eve("snap.animcreated." + el.id, anim);
        eve.once("mina.finish." + anim.id, function() {
          eve.off("mina.*." + anim.id);
          delete el.anims[anim.id];
          callback && callback.call(el);
        });
        eve.once("mina.stop." + anim.id, function() {
          eve.off("mina.*." + anim.id);
          delete el.anims[anim.id];
        });
        return el;
      };
    });
    Snap.plugin(function(Snap2, Element, Paper, glob) {
      var red = "#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000", pink = "#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162", purple = "#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF", deeppurple = "#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA", indigo = "#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE", blue = "#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF", lightblue = "#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA", cyan = "#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4", teal = "#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5", green = "#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853", lightgreen = "#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17", lime = "#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00", yellow = "#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600", amber = "#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00", orange = "#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00", deeporange = "#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00", brown = "#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723", grey = "#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121", bluegrey = "#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";
      Snap2.mui = {};
      Snap2.flat = {};
      function saveColor(colors) {
        colors = colors.split(/(?=#)/);
        var color = new String(colors[5]);
        color[50] = colors[0];
        color[100] = colors[1];
        color[200] = colors[2];
        color[300] = colors[3];
        color[400] = colors[4];
        color[500] = colors[5];
        color[600] = colors[6];
        color[700] = colors[7];
        color[800] = colors[8];
        color[900] = colors[9];
        if (colors[10]) {
          color.A100 = colors[10];
          color.A200 = colors[11];
          color.A400 = colors[12];
          color.A700 = colors[13];
        }
        return color;
      }
      Snap2.mui.red = saveColor(red);
      Snap2.mui.pink = saveColor(pink);
      Snap2.mui.purple = saveColor(purple);
      Snap2.mui.deeppurple = saveColor(deeppurple);
      Snap2.mui.indigo = saveColor(indigo);
      Snap2.mui.blue = saveColor(blue);
      Snap2.mui.lightblue = saveColor(lightblue);
      Snap2.mui.cyan = saveColor(cyan);
      Snap2.mui.teal = saveColor(teal);
      Snap2.mui.green = saveColor(green);
      Snap2.mui.lightgreen = saveColor(lightgreen);
      Snap2.mui.lime = saveColor(lime);
      Snap2.mui.yellow = saveColor(yellow);
      Snap2.mui.amber = saveColor(amber);
      Snap2.mui.orange = saveColor(orange);
      Snap2.mui.deeporange = saveColor(deeporange);
      Snap2.mui.brown = saveColor(brown);
      Snap2.mui.grey = saveColor(grey);
      Snap2.mui.bluegrey = saveColor(bluegrey);
      Snap2.flat.turquoise = "#1abc9c";
      Snap2.flat.greensea = "#16a085";
      Snap2.flat.sunflower = "#f1c40f";
      Snap2.flat.orange = "#f39c12";
      Snap2.flat.emerland = "#2ecc71";
      Snap2.flat.nephritis = "#27ae60";
      Snap2.flat.carrot = "#e67e22";
      Snap2.flat.pumpkin = "#d35400";
      Snap2.flat.peterriver = "#3498db";
      Snap2.flat.belizehole = "#2980b9";
      Snap2.flat.alizarin = "#e74c3c";
      Snap2.flat.pomegranate = "#c0392b";
      Snap2.flat.amethyst = "#9b59b6";
      Snap2.flat.wisteria = "#8e44ad";
      Snap2.flat.clouds = "#ecf0f1";
      Snap2.flat.silver = "#bdc3c7";
      Snap2.flat.wetasphalt = "#34495e";
      Snap2.flat.midnightblue = "#2c3e50";
      Snap2.flat.concrete = "#95a5a6";
      Snap2.flat.asbestos = "#7f8c8d";
      Snap2.importMUIColors = function() {
        for (var color in Snap2.mui) {
          if (Snap2.mui.hasOwnProperty(color)) {
            window[color] = Snap2.mui[color];
          }
        }
      };
    });
    module.exports = Snap;
  }
});

// node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js
var require_snapsvgImporter = __commonJS({
  "node_modules/react-burger-menu/lib/helpers/snapsvgImporter.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = function() {
      var Snap = void 0;
      try {
        Snap = require_snap_svg_cjs();
      } finally {
        return Snap;
      }
    };
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/helpers/utils.js
var require_utils = __commonJS({
  "node_modules/react-burger-menu/lib/helpers/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var pxToNum = function pxToNum2(val) {
      return parseInt(val.slice(0, -2), 10);
    };
    exports.pxToNum = pxToNum;
  }
});

// node_modules/react-burger-menu/lib/menus/elastic.js
var require_elastic = __commonJS({
  "node_modules/react-burger-menu/lib/menus/elastic.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _helpersSnapsvgImporter = require_snapsvgImporter();
    var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var _helpersUtils = require_utils();
    var MORPH_SHAPE_WIDTH = 120;
    var styles = {
      svg: {
        lib: _helpersSnapsvgImporter2["default"],
        pathInitial: "M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,100,800,100,800H-1V0z",
        pathOpen: "M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z",
        animate: function animate(path) {
          path.animate({ path: this.pathOpen }, 400, window.mina.easeinout);
        }
      },
      morphShape: function morphShape(isOpen, width, right) {
        return {
          position: "absolute",
          width: MORPH_SHAPE_WIDTH,
          height: "100%",
          right: right ? "inherit" : 0,
          left: right ? 0 : "inherit",
          MozTransform: right ? "rotateY(180deg)" : "",
          MsTransform: right ? "rotateY(180deg)" : "",
          OTransform: right ? "rotateY(180deg)" : "",
          WebkitTransform: right ? "rotateY(180deg)" : "",
          transform: right ? "rotateY(180deg)" : ""
        };
      },
      menuWrap: function menuWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          MsTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          OTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          WebkitTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          transform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          transition: "all 0.3s"
        };
      },
      menu: function menu(isOpen, width, right) {
        return {
          position: "fixed",
          right: right ? 0 : "inherit",
          width: (0, _helpersUtils.pxToNum)(width) - MORPH_SHAPE_WIDTH,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          overflow: "visible"
        };
      },
      itemList: function itemList(isOpen, width, right) {
        if (right) {
          return {
            position: "relative",
            left: "-110px",
            width: "170%",
            overflow: "auto"
          };
        }
      },
      pageWrap: function pageWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "" : right ? "translate3d(-100px, 0, 0)" : "translate3d(100px, 0, 0)",
          MsTransform: isOpen ? "" : right ? "translate3d(-100px, 0, 0)" : "translate3d(100px, 0, 0)",
          OTransform: isOpen ? "" : right ? "translate3d(-100px, 0, 0)" : "translate3d(100px, 0, 0)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(-100px, 0, 0)" : "translate3d(100px, 0, 0)",
          transform: isOpen ? "" : right ? "translate3d(-100px, 0, 0)" : "translate3d(100px, 0, 0)",
          transition: isOpen ? "all 0.3s" : "all 0.3s 0.1s"
        };
      },
      outerContainer: function outerContainer(isOpen) {
        return {
          overflow: isOpen ? "" : "hidden"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/bubble.js
var require_bubble = __commonJS({
  "node_modules/react-burger-menu/lib/menus/bubble.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _helpersSnapsvgImporter = require_snapsvgImporter();
    var _helpersSnapsvgImporter2 = _interopRequireDefault(_helpersSnapsvgImporter);
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var _helpersUtils = require_utils();
    var BUBBLE_WIDTH = 140;
    var styles = {
      svg: {
        lib: _helpersSnapsvgImporter2["default"],
        pathInitial: "M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z",
        pathOpen: "M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z",
        animate: function animate(path) {
          var pos = 0;
          var steps = this.pathOpen.split(";");
          var stepsTotal = steps.length;
          var mina = window.mina;
          var nextStep = function nextStep2() {
            if (pos > stepsTotal - 1)
              return;
            path.animate({ path: steps[pos] }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function() {
              nextStep2();
            });
            pos++;
          };
          nextStep();
        }
      },
      morphShape: function morphShape(isOpen, width, right) {
        return {
          position: "absolute",
          width: "100%",
          height: "100%",
          right: right ? "inherit" : 0,
          left: right ? 0 : "inherit",
          MozTransform: right ? "rotateY(180deg)" : "rotateY(0deg)",
          MsTransform: right ? "rotateY(180deg)" : "rotateY(0deg)",
          OTransform: right ? "rotateY(180deg)" : "rotateY(0deg)",
          WebkitTransform: right ? "rotateY(180deg)" : "rotateY(0deg)",
          transform: right ? "rotateY(180deg)" : "rotateY(0deg)"
        };
      },
      menuWrap: function menuWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          MsTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          OTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          WebkitTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          transform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(100%, 0, 0)" : "translate3d(-100%, 0, 0)",
          transition: isOpen ? "transform 0.4s 0s" : "transform 0.4s"
        };
      },
      menu: function menu(isOpen, width, right) {
        var finalWidth = (0, _helpersUtils.pxToNum)(width) - BUBBLE_WIDTH;
        return {
          position: "fixed",
          MozTransform: isOpen ? "" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          MsTransform: isOpen ? "" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          OTransform: isOpen ? "" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          transform: isOpen ? "" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          transition: isOpen ? "opacity 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.1s 0.4s cubic-bezier(.17, .67, .1, 1.27)" : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
          opacity: isOpen ? 1 : 0
        };
      },
      item: function item(isOpen, width, right, nthChild) {
        var finalWidth = (0, _helpersUtils.pxToNum)(width) - BUBBLE_WIDTH;
        return {
          MozTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          MsTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          OTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          WebkitTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          transform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          transition: isOpen ? "opacity 0.3s 0.4s, transform 0.3s 0.4s" : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
          opacity: isOpen ? 1 : 0
        };
      },
      closeButton: function closeButton(isOpen, width, right) {
        var finalWidth = (0, _helpersUtils.pxToNum)(width) - BUBBLE_WIDTH;
        return {
          MozTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          MsTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          OTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          WebkitTransform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          transform: isOpen ? "translate3d(0, 0, 0)" : right ? "translate3d(" + finalWidth + ", 0, 0)" : "translate3d(-" + finalWidth + ", 0, 0)",
          transition: isOpen ? "opacity 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27), transform 0.3s 0.4s cubic-bezier(.17, .67, .1, 1.27)" : "opacity 0s 0.3s cubic-bezier(.17, .67, .1, 1.27), transform 0s 0.3s cubic-bezier(.17, .67, .1, 1.27)",
          opacity: isOpen ? 1 : 0
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/push.js
var require_push = __commonJS({
  "node_modules/react-burger-menu/lib/menus/push.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {
      pageWrap: function pageWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          MsTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          OTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          transform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          transition: "all 0.5s"
        };
      },
      outerContainer: function outerContainer(isOpen) {
        return {
          overflow: isOpen ? "" : "hidden"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/pushRotate.js
var require_pushRotate = __commonJS({
  "node_modules/react-burger-menu/lib/menus/pushRotate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {
      pageWrap: function pageWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0) rotateY(15deg)" : "translate3d(" + width + ", 0, 0) rotateY(-15deg)",
          MsTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0) rotateY(15deg)" : "translate3d(" + width + ", 0, 0) rotateY(-15deg)",
          OTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0) rotateY(15deg)" : "translate3d(" + width + ", 0, 0) rotateY(-15deg)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0) rotateY(15deg)" : "translate3d(" + width + ", 0, 0) rotateY(-15deg)",
          transform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0) rotateY(15deg)" : "translate3d(" + width + ", 0, 0) rotateY(-15deg)",
          transformOrigin: right ? "100% 50%" : "0% 50%",
          transformStyle: "preserve-3d",
          transition: "all 0.5s"
        };
      },
      outerContainer: function outerContainer(isOpen) {
        return {
          perspective: "1500px",
          overflow: isOpen ? "" : "hidden"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/scaleDown.js
var require_scaleDown = __commonJS({
  "node_modules/react-burger-menu/lib/menus/scaleDown.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {
      pageWrap: function pageWrap(isOpen, width) {
        return {
          MozTransform: isOpen ? "" : "translate3d(0, 0, -" + width + ")",
          MsTransform: isOpen ? "" : "translate3d(0, 0, -" + width + ")",
          OTransform: isOpen ? "" : "translate3d(0, 0, -" + width + ")",
          WebkitTransform: isOpen ? "" : "translate3d(0, 0, -" + width + ")",
          transform: isOpen ? "" : "translate3d(0, 0, -" + width + ")",
          transformOrigin: "100%",
          transformStyle: "preserve-3d",
          transition: "all 0.5s"
        };
      },
      outerContainer: function outerContainer() {
        return {
          perspective: "1500px"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/scaleRotate.js
var require_scaleRotate = __commonJS({
  "node_modules/react-burger-menu/lib/menus/scaleRotate.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {
      pageWrap: function pageWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "" : right ? "translate3d(-100px, 0, -600px) rotateY(20deg)" : "translate3d(100px, 0, -600px) rotateY(-20deg)",
          MsTransform: isOpen ? "" : right ? "translate3d(-100px, 0, -600px) rotateY(20deg)" : "translate3d(100px, 0, -600px) rotateY(-20deg)",
          OTransform: isOpen ? "" : right ? "translate3d(-100px, 0, -600px) rotateY(20deg)" : "translate3d(100px, 0, -600px) rotateY(-20deg)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(-100px, 0, -600px) rotateY(20deg)" : "translate3d(100px, 0, -600px) rotateY(-20deg)",
          transform: isOpen ? "" : right ? "translate3d(-100px, 0, -600px) rotateY(20deg)" : "translate3d(100px, 0, -600px) rotateY(-20deg)",
          transformStyle: "preserve-3d",
          transition: "all 0.5s",
          overflow: isOpen ? "" : "hidden"
        };
      },
      outerContainer: function outerContainer(isOpen) {
        return {
          perspective: "1500px",
          overflow: isOpen ? "" : "hidden"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/fallDown.js
var require_fallDown = __commonJS({
  "node_modules/react-burger-menu/lib/menus/fallDown.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {
      menuWrap: function menuWrap(isOpen) {
        return {
          MozTransform: isOpen ? "" : "translate3d(0, -100%, 0)",
          MsTransform: isOpen ? "" : "translate3d(0, -100%, 0)",
          OTransform: isOpen ? "" : "translate3d(0, -100%, 0)",
          WebkitTransform: isOpen ? "" : "translate3d(0, -100%, 0)",
          transform: isOpen ? "" : "translate3d(0, -100%, 0)",
          transition: "all 0.5s ease-in-out"
        };
      },
      pageWrap: function pageWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          MsTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          OTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          transform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          transition: "all 0.5s"
        };
      },
      outerContainer: function outerContainer(isOpen) {
        return {
          perspective: "1500px",
          perspectiveOrigin: "0% 50%",
          overflow: isOpen ? "" : "hidden"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/menus/reveal.js
var require_reveal = __commonJS({
  "node_modules/react-burger-menu/lib/menus/reveal.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    var _menuFactory = require_menuFactory();
    var _menuFactory2 = _interopRequireDefault(_menuFactory);
    var styles = {
      menuWrap: function menuWrap(isOpen, width, right) {
        return {
          MozTransform: "translate3d(0, 0, 0)",
          MsTransform: "translate3d(0, 0, 0)",
          OTransform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)",
          transform: "translate3d(0, 0, 0)",
          zIndex: isOpen ? 1e3 : -1
        };
      },
      overlay: function overlay(isOpen, width, right) {
        return {
          zIndex: 1400,
          MozTransform: isOpen ? right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          MsTransform: isOpen ? right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          OTransform: isOpen ? right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          WebkitTransform: isOpen ? right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          transform: isOpen ? right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          transition: "all 0.5s",
          visibility: isOpen ? "visible" : "hidden"
        };
      },
      pageWrap: function pageWrap(isOpen, width, right) {
        return {
          MozTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          MsTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          OTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          WebkitTransform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          transform: isOpen ? "" : right ? "translate3d(-" + width + ", 0, 0)" : "translate3d(" + width + ", 0, 0)",
          transition: "all 0.5s",
          zIndex: 1200,
          position: "relative"
        };
      },
      burgerIcon: function burgerIcon(isOpen, width, right) {
        return {
          MozTransform: isOpen ? right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          MsTransform: isOpen ? right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          OTransform: isOpen ? right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          WebkitTransform: isOpen ? right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          transform: isOpen ? right ? "translate3d(" + width + ", 0, 0)" : "translate3d(-" + width + ", 0, 0)" : "translate3d(0, 0, 0)",
          transition: "all 0.1s",
          position: "relative",
          zIndex: 1300
        };
      },
      outerContainer: function outerContainer(isOpen) {
        return {
          overflow: isOpen ? "" : "hidden"
        };
      }
    };
    exports["default"] = (0, _menuFactory2["default"])(styles);
    module.exports = exports["default"];
  }
});

// node_modules/react-burger-menu/lib/BurgerMenu.js
var require_BurgerMenu = __commonJS({
  "node_modules/react-burger-menu/lib/BurgerMenu.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = {
      slide: require_slide(),
      stack: require_stack(),
      elastic: require_elastic(),
      bubble: require_bubble(),
      push: require_push(),
      pushRotate: require_pushRotate(),
      scaleDown: require_scaleDown(),
      scaleRotate: require_scaleRotate(),
      fallDown: require_fallDown(),
      reveal: require_reveal()
    };
    module.exports = exports["default"];
  }
});
export default require_BurgerMenu();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-burger-menu.js.map
