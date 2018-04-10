import _ from 'lodash/fp'

import * as semanticUIReact from 'src'
import { META } from 'src/lib'

export * from './constants'
export getComponentGroup from './getComponentGroup'
export getSeeItems from './getSeeItems'
export scrollToAnchor from './scrollToAnchor'
if (process.env.NODE_TEST_ENV === 'jest') {
  const fs = require('fs');
  const path = require('path');

  require.context = (base = '.', scanSubDirectories = false, regularExpression = /\.js$/) => {
    const files = {};

    function readDirectory(directory) {
      fs.readdirSync(directory).forEach((file) => {
        const fullPath = path.resolve(directory, file);

        if (fs.statSync(fullPath).isDirectory()) {
          if (scanSubDirectories) readDirectory(fullPath);

          return;
        }

        if (!regularExpression.test(fullPath)) return;

        files[fullPath] = true;
      });
    }

    readDirectory(path.resolve(__dirname, '../../../', base));

    function Module(file) {
      return require(file);
    }

    Module.keys = () => Object.keys(files);

    return Module;
  };
}
/**
 * Get the Webpack Context for all doc site examples.
 */
export const exampleContext = require.context('docs/app/Examples/', true, /(\w+Example\w*|index)\.js$/)

export const parentComponents = _.flow(
  _.filter(META.isParent),
  _.sortBy('_meta.name'),
)(semanticUIReact)
