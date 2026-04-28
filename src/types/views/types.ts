import { DAY, MONTH, UPCOMING, WEEK, YEAR } from '../../enums/views/enums.ts'

export type View =
    | typeof UPCOMING
    | typeof DAY
    | typeof WEEK
    | typeof MONTH
    | typeof YEAR
