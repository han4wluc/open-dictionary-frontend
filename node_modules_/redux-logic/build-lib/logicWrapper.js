'use strict';

exports.__esModule = true;
exports['default'] = logicWrapper;

var _Observable = require('rxjs/Observable');

require('rxjs/add/observable/merge');

require('rxjs/add/operator/debounceTime');

require('rxjs/add/operator/filter');

require('rxjs/add/operator/mergeMap');

require('rxjs/add/operator/share');

require('rxjs/add/operator/throttleTime');

var _createLogicAction$ = require('./createLogicAction$');

var _createLogicAction$2 = _interopRequireDefault(_createLogicAction$);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// confirm custom Rx build imports
(0, _utils.confirmProps)(_Observable.Observable, ['merge'], 'Observable');
(0, _utils.confirmProps)(_Observable.Observable.prototype, ['debounceTime', 'filter', 'mergeMap', 'share', 'throttleTime'], 'Observable.prototype');

function logicWrapper(logic, store, deps, monitor$) {
  var type = logic.type,
      cancelType = logic.cancelType,
      latest = logic.latest,
      debounce = logic.debounce,
      throttle = logic.throttle;

  // cancel on cancelType or if take latest specified

  var cancelTypes = [].concat(type && latest ? type : []).concat(cancelType || []);

  var debouncing = debounce ? function (act$) {
    return act$.debounceTime(debounce);
  } : function (act$) {
    return act$;
  };

  var throttling = throttle ? function (act$) {
    return act$.throttleTime(throttle);
  } : function (act$) {
    return act$;
  };

  var limiting = function limiting(act) {
    return throttling(debouncing(act));
  };

  return function wrappedLogic(actionIn$) {
    // we want to share the same copy amongst all here
    var action$ = actionIn$.share();

    var cancel$ = cancelTypes.length ? action$.filter(function (action) {
      return matchesType(cancelTypes, action.type);
    }) : _Observable.Observable.create(function () /* obs */{}); // shouldn't complete

    // types that don't match will bypass this logic
    var nonMatchingAction$ = action$.filter(function (action) {
      return !matchesType(type, action.type);
    });

    var matchingAction$ = limiting(action$.filter(function (action) {
      return matchesType(type, action.type);
    })).mergeMap(function (action) {
      return (0, _createLogicAction$2['default'])({ action: action, logic: logic, store: store, deps: deps,
        cancel$: cancel$, monitor$: monitor$ });
    });

    return _Observable.Observable.merge(nonMatchingAction$, matchingAction$);
  };
}

function matchesType(tStrArrRe, type) {
  /* istanbul ignore if  */
  if (!tStrArrRe) {
    return false;
  } // nothing matches none
  if (typeof tStrArrRe === 'string') {
    return tStrArrRe === type || tStrArrRe === '*';
  }
  if (Array.isArray(tStrArrRe)) {
    return tStrArrRe.some(function (x) {
      return matchesType(x, type);
    });
  }
  // else assume it is a RegExp
  return tStrArrRe.test(type);
}