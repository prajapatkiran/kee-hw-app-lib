const path = require('path');
const gulp = require('gulp');
const inlineResources = require('./scripts/release/inline-resources');

const PROJECT_ROOT = __dirname;
const DIST_ROOT = path.join(PROJECT_ROOT, 'lib');
const DIST_COMPONENTS_ROOT = path.join(DIST_ROOT, '.');


/** Inlines resources (html, css) into the JS output (for either ESM or CJS output). */
gulp.task(':inline-resources', () => inlineResources(DIST_COMPONENTS_ROOT));
