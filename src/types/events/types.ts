import type { Arrangement } from './arrangement/types.ts'
import type { Reminder } from './reminder/types.ts'
import type { Task } from './task/types.ts'

export type Events = {
    arrangements: Arrangement[]
    reminders: Reminder[]
    tasks: Task[]
}
