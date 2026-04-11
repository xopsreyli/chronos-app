import { Box, Button, Stack, TextField } from '@mui/material'
import CustomLink from '../../../../components/ui/auth/CustomLink/CustomLink.tsx'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import signIn from '../../../../api/auth/signIn/signIn.ts'
import ErrorMessage from '../../../../components/ui/common/Form/ErrorMessage/ErrorMessage.tsx'
import useSign from '../../../../hooks/useSign/useSign.ts'
import { emailField, passwordField } from '../../../../schemas/auth/auth.ts'

const schema = z.object({
    email: emailField,
    password: passwordField,
})

type SignInData = z.infer<typeof schema>

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { isValid, errors },
    } = useForm<SignInData>({
        resolver: zodResolver(schema),
    })
    const { mutate, isPending, isError, error } = useSign(signIn)

    const onSubmit = (data: SignInData) => {
        mutate(data)
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
                    type="email"
                    label="Email Address *"
                    fullWidth
                    helperText={errors.email?.message}
                    error={!!errors.email}
                    {...register('email')}
                />
                <Box>
                    <TextField
                        type="password"
                        label="Password *"
                        fullWidth
                        helperText={errors.password?.message}
                        error={!!errors.password}
                        {...register('password')}
                    />
                    <Box
                        sx={{
                            textAlign: 'right',
                            mt: 1,
                        }}
                    >
                        <CustomLink href="#">Forgot password?</CustomLink>
                    </Box>
                </Box>
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
                sign in
            </Button>
        </Box>
    )
}

export default Form
