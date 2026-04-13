import { z } from 'zod'
import { type signInSchema, signUpSchema } from '../../schemas/auth/schemas.ts'

export type SignInData = z.infer<typeof signInSchema>
export type SignUpFormData = z.infer<typeof signUpSchema>
export type SignUpData = Omit<SignUpFormData, 'confirmPassword'>
