import type { Arrangement } from './arrangement/types.ts'
import type { Reminder } from './reminder/types.ts'
import type { Task } from './task/types.ts'
import { type ARRANGEMENT, REMINDER, TASK } from '../../enums/events/enums.ts'
import { z } from 'zod'
import type { eventSchema } from '../../schemas/event/schemas.ts'

export type EventType = typeof ARRANGEMENT | typeof REMINDER | typeof TASK

export type Event = Arrangement | Reminder | Task

export type Events = {
    arrangements: Arrangement[]
    reminders: Reminder[]
    tasks: Task[]
}

export type OmitEventCreation<T> = Omit<T, 'id' | 'calendarId' | 'userId'>
export type EventCreationData =
    | OmitEventCreation<Arrangement>
    | OmitEventCreation<Reminder>
    | OmitEventCreation<Task>
export type EventFormData = z.infer<typeof eventSchema>
