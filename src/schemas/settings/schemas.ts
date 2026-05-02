import { z } from 'zod'
import { DARK, LIGHT, SYSTEM } from '../../enums/theme/enums.ts'

export const settingsSchema = z
    .object({
        theme: z.enum([LIGHT, DARK, SYSTEM]),
        arrangementColor: z.string(),
        reminderColor: z.string(),
        taskColor: z.string(),
    })
    .partial()
