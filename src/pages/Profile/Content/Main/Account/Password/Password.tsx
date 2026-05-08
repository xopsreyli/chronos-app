import { Box, Stack, TextField } from '@mui/material'
import SaveButton from '../../../../../../components/ui/app/Profile/Content/Main/SaveButton/SaveButton.tsx'
import Title from '../../../../../../components/ui/app/Profile/Content/Main/Title/Title.tsx'
import Subtitle from '../../../../../../components/ui/app/Profile/Content/Main/Subtitle/Subtitle.tsx'
import useUpdatePassword from '../../../../../../hooks/api/users/current/useUpdatePassword/useUpdatePassword.ts'
import { useForm } from 'react-hook-form'
import type { PasswordUpdationFormData } from '../../../../../../types/user/types.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { passwordSchema } from '../../../../../../schemas/user/schemas.ts'
import ErrorMessage from '../../../../../../components/ui/common/Form/ErrorMessage/ErrorMessage.tsx'

const Password = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<PasswordUpdationFormData>({
        defaultValues: {
            password: '',
            newPassword: '',
            confirmNewPassword: '',
        },
        resolver: zodResolver(passwordSchema),
    })
    const { mutate, isError, error } = useUpdatePassword()

    const onSubmit = (data: PasswordUpdationFormData) => {
        mutate(
            {
                password: data.password,
                newPassword: data.newPassword,
            },
            {
                onSuccess: () => reset(),
            },
        )
    }

    return (
        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
            <Title title={'Password'} />
            <Subtitle subtitle={'Update your password'} />
            <Stack
                spacing={2}
                useFlexGap
                sx={{
                    alignItems: 'flex-start',
                    mb: 2,
                }}
            >
                <TextField
                    type="password"
                    label="Password"
                    helperText={
                        errors.password?.message ?? 'At least 8 characters'
                    }
                    error={!!errors.password}
                    {...register('password')}
                />
                <TextField
                    type="password"
                    label="New Password"
                    helperText={
                        errors.newPassword?.message ?? 'At least 8 characters'
                    }
                    error={!!errors.newPassword}
                    {...register('newPassword')}
                />
                <TextField
                    type="password"
                    label="Confirm new Password"
                    helperText={
                        errors.confirmNewPassword?.message ??
                        'At least 8 characters'
                    }
                    error={!!errors.confirmNewPassword}
                    {...register('confirmNewPassword')}
                />
                {isError && <ErrorMessage message={error.message} />}
            </Stack>
            <SaveButton text={'save'} disabled={!isValid} />
        </Box>
    )
}

export default Password
