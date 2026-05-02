import { z } from 'zod'
import type { settingsSchema } from '../../schemas/settings/schemas.ts'
import { DARK, type LIGHT } from '../../enums/theme/enums.ts'

export type Settings = {
    id: number
    userId: number
    theme: typeof LIGHT | typeof DARK | null
    arrangementColor: string
    reminderColor: string
    taskColor: string
}

export type SettingsFormData = z.infer<typeof settingsSchema>

export type SettingsUpdationData = Partial<Omit<Settings, 'id' | 'userId'>>
