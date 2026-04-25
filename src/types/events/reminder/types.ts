import type { REMINDER } from '../../../enums/events/enums.ts'

export type Reminder = {
    id: number
    calendarId: number
    userId: number
    type: typeof REMINDER
    title: string
    description: string
    dateTime: Date
}
