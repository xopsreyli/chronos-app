import type { ARRANGEMENT } from '../../../enums/events/enums.ts'

export type Arrangement = {
    id: number
    calendarId: number
    userId: number
    type: typeof ARRANGEMENT
    title: string
    description: string
    from: Date
    to: Date
}
