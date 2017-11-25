'use strict';

exports.__esModule = true;
exports.confirmProps = confirmProps;

// eslint-disable-next-line import/prefer-default-export
function confirmProps(obj, arrProps) {
  var objName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  arrProps.forEach(function (x) {
    if (!obj[x]) {
      throw new Error('missing ' + objName + ' property: ' + x + ' - need import?');
    }
  });
}