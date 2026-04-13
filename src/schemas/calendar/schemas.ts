import { z } from 'zod'

export const calendarSchema = z.object({
    name: z.string().min(1, { error: 'Name is required' }).max(24),
    description: z.string(),
    color: z.string(),
})
