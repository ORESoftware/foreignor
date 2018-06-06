'use strict';

import util = require('util');

export const foreignor = function (...args: any[]) {

  return args.map(function (a) {
    return typeof a === 'string' ? a : util.inspect(a);
  })
  .join(' ');

};

export default foreignor;

export const r2gSmokeTest = function () {
  return true;
};
