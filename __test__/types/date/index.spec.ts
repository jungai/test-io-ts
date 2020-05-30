import { date } from '../../../types'
import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter';

const __NO_ERRORS__ = 'No errors!'

it('correct', () => {
  const d = t.type({
    dt: date,
  })

  const result =  PathReporter.report(d.decode({ dt: new Date()}))

  expect(result[0]).toBe(__NO_ERRORS__)
})
