import { z } from 'zod'

export const emailField = z.email()
export const passwordField = z
    .string()
    .min(8)
    .regex(/[a-zA-Z]/, { error: 'Password must contain a letter' })
    .regex(/[0-9]/, { error: 'Password must contain a number' })

export const signUpSchema = z
    .object({
        nickname: z
            .string()
            .min(1, { error: 'Nickname is required' })
            .max(16)
            .regex(/[a-zA-Z]/, {
                error: 'Nickname must contain at least 1 letter',
            }),
        email: emailField,
        password: passwordField,
        confirmPassword: z
            .string()
            .min(1, { error: 'Please confirm your password' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords dont't match",
        path: ['confirmPassword'],
    })

export const signInSchema = z.object({
    email: emailField,
    password: passwordField,
})
