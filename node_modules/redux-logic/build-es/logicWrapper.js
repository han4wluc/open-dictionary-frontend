import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/throttleTime';
import createLogicAction$ from './createLogicAction$';
import { confirmProps } from './utils';

// confirm custom Rx build imports
confirmProps(Observable, ['merge'], 'Observable');
confirmProps(Observable.prototype, ['debounceTime', 'filter', 'mergeMap', 'share', 'throttleTime'], 'Observable.prototype');

export default function logicWrapper(logic, store, deps, monitor$) {
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
    }) : Observable.create(function () /* obs */{}); // shouldn't complete

    // types that don't match will bypass this logic
    var nonMatchingAction$ = action$.filter(function (action) {
      return !matchesType(type, action.type);
    });

    var matchingAction$ = limiting(action$.filter(function (action) {
      return matchesType(type, action.type);
    })).mergeMap(function (action) {
      return createLogicAction$({ action: action, logic: logic, store: store, deps: deps,
        cancel$: cancel$, monitor$: monitor$ });
    });

    return Observable.merge(nonMatchingAction$, matchingAction$);
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