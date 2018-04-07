import { createRenderer } from 'fela'
import monolithic from 'fela-monolithic'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, ThemeProvider } from 'react-fela'

import Router from './routes'
import * as defaultSiteVariables from '../../src/lib/styles/defaultSiteVariables'

// ----------------------------------------
// Style Renderer
// ----------------------------------------

const config = {
  middleware: [
    // composes style objects
  ],
  enhancers: [
    monolithic(),
  ],
}

const renderer = createRenderer(config)

// ----------------------------------------
// Rendering
// ----------------------------------------

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

const render = NewApp => ReactDOM.render(
  <Provider renderer={renderer}>
    <ThemeProvider theme={defaultSiteVariables}>
      <NewApp />
    </ThemeProvider>
  </Provider>,
  mountNode,
)

// ----------------------------------------
// HMR
// ----------------------------------------

if (__DEV__) {
  // When the application source code changes, re-render the whole thing.
  if (module.hot) {
    module.hot.accept('./routes', () => {
      // restore scroll
      const { scrollLeft, scrollTop } = document.scrollingElement
      ReactDOM.unmountComponentAtNode(mountNode)

      try {
        render(require('./routes').default)
        document.scrollingElement.scrollTop = scrollTop
        document.scrollingElement.scrollLeft = scrollLeft
      } catch (e) {
        console.error(e) // eslint-disable-line no-console
      }
    })
  }
}

// ----------------------------------------
// Start the app
// ----------------------------------------

render(Router)
