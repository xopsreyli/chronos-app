import z from 'zod'
import type { calendarSchema } from '../../schemas/calendar/schemas.ts'

export type Calendar = {
    id: number
    name: string
    description: string
    color: string
}
export type CalendarFormData = z.infer<typeof calendarSchema>
