/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 * @todo Implement
 */

'use strict';

const MissingNativeEventEmitterShim = require('MissingNativeEventEmitterShim');

class MissingNativeRCTNetworkingShim extends MissingNativeEventEmitterShim {
  isAvailable: boolean = false;
  constructor() {
    super('RCTNetworking', 'Networking');
  }

  sendRequest(...args: Array<any>) {
    this.throwMissingNativeModule();
  }

  abortRequest(...args: Array<any>) {
    this.throwMissingNativeModule();
  }

  clearCookies(...args: Array<any>) {
    this.throwMissingNativeModule();
  }
}

const RCTNetworking = new MissingNativeRCTNetworkingShim();

module.exports = RCTNetworking;
