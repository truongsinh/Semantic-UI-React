import _ from 'lodash/fp'
import * as semanticUIReact from 'src'

const getComponentGroup = (docInfo, componentName) => ({
  [componentName]: {
    description: _.get('docBlock.description', docInfo[componentName]),
    props: _.get('props', docInfo[componentName]),
  },
  ..._.flow(
    _.filter(component => _.get('_meta.parent', component) === componentName),
    i => i.map(e => e._meta.name),
    i => i.map(name => ({
      name,
      description: _.get('docBlock.description', docInfo[name]),
      props: _.get('props', docInfo[name]),
    })),
    _.keyBy('name'),
  )(semanticUIReact),
})

export default getComponentGroup
