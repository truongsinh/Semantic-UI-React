import _ from 'lodash/fp'
import pipe from '../../../helpers/pipe'

const computeClassNames = pipe(
  _.toArray,
  _.map('props.className'),
  _.flatMap(_.split(/\s+/)),
  _.filter(_.identity),
  _.uniq,
)

export default computeClassNames
