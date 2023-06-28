/**
 * @module mdProfile
 */

import full from '../resources/profiles/full.json';
import basic from '../resources/profiles/basic.json';
import raster from '../resources/profiles/raster.json';
import product from '../resources/profiles/product.json';

import schema from '../resources/profile-schema.json';
import pkg from '../package.json';

const version = pkg.version;

function asArray() {
  return [full, basic, raster, product];
}

export default { full, basic, raster, product, schema, asArray, version };
