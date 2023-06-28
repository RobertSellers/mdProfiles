/**
 * @module mdProfile
 */

import full from '../resources/profiles/full.json';
import raster from '../resources/profiles/raster.json';

import schema from '../resources/profile-schema.json';
import pkg from '../package.json';

const version = pkg.version;

function asArray() {
  return [full, raster];
}

export default { full, raster, schema, asArray, version };
