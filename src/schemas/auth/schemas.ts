import { z } from 'zod'
import { emailField, nicknameField, passwordField } from '../user/schemas.ts'

export const signUpSchema = z
    .object({
        nickname: nicknameField,
        email: emailField,
        password: passwordField,
        confirmPassword: z
            .string()
            .min(1, { error: 'Please confirm your password' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    })

export const signInSchema = z.object({
    email: emailField,
    password: passwordField,
})
