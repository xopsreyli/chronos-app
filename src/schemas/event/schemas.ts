import { z } from 'zod'
import { ARRANGEMENT, REMINDER, TASK } from '../../enums/events/enums.ts'
import { type Dayjs } from 'dayjs'
import dayjs from 'dayjs'

const eventBase = z.object({
    title: z.string().min(1, { error: 'Title is required' }),
    description: z.string(),
})

const arrangementSchema = eventBase.extend({
    type: z.literal(ARRANGEMENT),
    from: z.custom<Dayjs>((value) => dayjs.isDayjs(value)),
    to: z.custom<Dayjs>((value) => dayjs.isDayjs(value)),
})

const reminderSchema = eventBase.extend({
    type: z.literal(REMINDER),
    dateTime: z.custom<Dayjs>((value) => dayjs.isDayjs(value)),
})

const taskSchema = eventBase.extend({
    type: z.literal(TASK),
    date: z.custom<Dayjs>((value) => dayjs.isDayjs(value)),
})

export const eventSchema = z.discriminatedUnion('type', [
    arrangementSchema,
    reminderSchema,
    taskSchema,
])
