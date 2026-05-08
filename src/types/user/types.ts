import z from 'zod'
import {
    type nicknameSchema,
    passwordSchema,
} from '../../schemas/user/schemas.ts'

export type User = {
    id: number
    nickname: string
    email: string
}

export type NicknameUpdationData = z.infer<typeof nicknameSchema>
export type PasswordUpdationFormData = z.infer<typeof passwordSchema>
export type PasswordUpdationData = {
    password: string
    newPassword: string
}
