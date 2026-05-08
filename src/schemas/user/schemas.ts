import { z } from 'zod'

export const nicknameField = z
    .string()
    .min(1, { error: 'Nickname is required' })
    .max(16)
    .regex(/[a-zA-Z]/, {
        error: 'Nickname must contain at least 1 letter',
    })
export const emailField = z.email()
export const passwordField = z
    .string()
    .min(8)
    .regex(/[a-zA-Z]/, { error: 'Password must contain a letter' })
    .regex(/[0-9]/, { error: 'Password must contain a number' })

export const nicknameSchema = z.object({
    nickname: nicknameField,
})

export const passwordSchema = z
    .object({
        password: passwordField,
        newPassword: passwordField,
        confirmNewPassword: passwordField,
    })
    .refine((data) => data.newPassword === data.confirmNewPassword, {
        message: "Passwords don't match",
        path: ['confirmNewPassword'],
    })
