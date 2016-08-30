/**
 * Copyright 2016, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */

import EmberValidator from 'ember-cp-validations/-private/ember-validator';

/**
 *  If `true` validates that the given value is not empty, if `false`, validates that the given value is empty.
 *
 *   #### Options
 *  - `ignoreBlank` (**Boolean**): If true, treats an empty or whitespace string as not present
 *
 *  ```javascript
 *  // Examples
 *  validator('presence', true)
 *  validator('presence', false)
 *  validator('presence', {
 *    presence: true,
 *    message: 'should not be empty'
 *  })
 *
 *  validator('presence', {
 *  	presence: true,
 *    ignoreBlank: true,
 *    message: 'should not be empty or consist only of spaces'
 *  })
 *  ```
 *
 *  @class Presence
 *  @module Validators
 *  @extends Base
 */
export default EmberValidator.extend({
  /**
   * Normalized options passed in.
   * ```js
   * validator('presence', true)
   * // Becomes
   * validator('presence', {
   *   presence: true
   * })
   * ```
   *
   * @method buildOptions
   * @param  {Object}     options
   * @param  {Object}     defaultOptions
   * @param  {Object}     globalOptions
   * @return {Object}
   */
  buildOptions(options = {}, defaultOptions = {}, globalOptions = {}) {
    let opts = options;

    if (typeof options === 'boolean') {
      opts = {
        presence: options
      };
    }
    return this._super(opts, defaultOptions, globalOptions);
  }
});
