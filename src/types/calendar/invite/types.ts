import type { User } from '../../user/types.ts'
import type { Calendar } from '../types.ts'

export type Invite = {
    id: number
    calendarId: number
    inviterId: number
    inviteeId: number
    inviter: User
    calendar: Calendar
}
