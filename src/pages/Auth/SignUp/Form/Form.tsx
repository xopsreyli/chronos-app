import { Box, Button, Stack, TextField } from '@mui/material'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import signUp from '../../../../api/auth/signUp/signUp.tsx'
import ErrorMessage from '../../../../components/ui/common/Form/ErrorMessage/ErrorMessage.tsx'
import useSign from '../../../../hooks/useSign/useSign.ts'
import { emailField, passwordField } from '../../../../schemas/auth/auth.ts'

const schema = z
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

type SignUpFormData = z.infer<typeof schema>

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(schema),
    })
    const { mutate, isPending, isError, error } = useSign(signUp)

    const onSubmit = (data: SignUpFormData) => {
        const { confirmPassword: _, ...signUpData } = data
        mutate(signUpData)
    }

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack
                spacing={2.5}
                useFlexGap
                sx={{
                    mb: 3,
                }}
            >
                <TextField
                    type="text"
                    label="Nickname *"
                    fullWidth
                    helperText={errors.nickname?.message ?? 'Max 16 characters'}
                    error={!!errors.nickname}
                    {...register('nickname')}
                />
                <TextField
                    type="email"
                    label="Email Address *"
                    fullWidth
                    helperText={errors.email?.message}
                    error={!!errors.email}
                    {...register('email')}
                />
                <TextField
                    type="password"
                    label="Password *"
                    fullWidth
                    helperText={
                        errors.password?.message ?? 'At least 8 characters'
                    }
                    error={!!errors.password}
                    {...register('password')}
                />
                <TextField
                    type="password"
                    label="Confirm Password *"
                    fullWidth
                    helperText={errors.confirmPassword?.message}
                    error={!!errors.confirmPassword}
                    {...register('confirmPassword')}
                />
            </Stack>
            {isError && <ErrorMessage message={error.message} sx={{ mb: 3 }} />}
            <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={!isValid}
                loading={isPending}
                sx={{
                    textTransform: 'capitalize',
                    fontSize: 15,
                }}
            >
                Create Account
            </Button>
        </Box>
    )
}

export default Form
