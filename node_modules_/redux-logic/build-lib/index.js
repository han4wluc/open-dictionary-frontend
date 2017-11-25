'use strict';

exports.__esModule = true;
exports.createLogicMiddleware = exports.createLogic = undefined;

var _createLogic = require('./createLogic');

var _createLogic2 = _interopRequireDefault(_createLogic);

var _createLogicMiddleware = require('./createLogicMiddleware');

var _createLogicMiddleware2 = _interopRequireDefault(_createLogicMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.createLogic = _createLogic2['default'];
exports.createLogicMiddleware = _createLogicMiddleware2['default'];
exports['default'] = {
  createLogic: _createLogic2['default'],
  createLogicMiddleware: _createLogicMiddleware2['default']
};