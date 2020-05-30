import * as t from 'io-ts/lib'
import { isValid, parseISO } from 'date-fns'

type DateString = Date | string;

export const date = new t.Type<DateString, Date, unknown>(
  'Date',
    (u): u is Date | string => u instanceof Date || typeof u === 'string',
    (u, c) => {
        let checker;
        if (u instanceof Date) {
            checker = new Date(u);
        }

        // if u is a date string
        if (typeof u === 'string' && isValid(new Date(u))) {
            checker = new Date(u);
        }
        // if u is string and u can parse if error throw Invalid Date
        else if (typeof u === 'string') {
            checker = parseISO(u);
        }

        return isValid(checker) && (u instanceof Date || typeof u === 'string')
            ? t.success(new Date(u))
            : t.failure(u, c);
    },
    (d) => new Date(d),
)

