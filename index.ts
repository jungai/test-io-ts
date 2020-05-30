import * as t from 'io-ts';
import { PathReporter } from 'io-ts/lib/PathReporter'

const User = t.type({
  id: t.number,
  name: t.string,
})

type User = t.TypeOf<typeof User>

const user = User.decode({
  id: 1,
  name: 'june',
})

console.log(PathReporter.report(user))
