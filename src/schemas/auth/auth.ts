import { z } from 'zod'

export const emailField = z.email()
export const passwordField = z
    .string()
    .min(8)
    .regex(/[a-zA-Z]/, { error: 'Password must contain a letter' })
    .regex(/[0-9]/, { error: 'Password must contain a number' })
