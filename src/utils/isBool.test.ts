import { isBool } from './isBool'
import { toTest } from '../tests/tests.utils'

toTest('isBool - 1', isBool, [1], false)
toTest('isBool - undefined', isBool, [undefined], false)
toTest('isBool - true', isBool, [true], true)
toTest('isBool - false', isBool, [false], true)
toTest('isBool - string', isBool, ['string'], false)
toTest('isBool - empty string', isBool, [''], false)
toTest('isBool - 0', isBool, [0], false)
toTest('isBool - null', isBool, [null], false)
