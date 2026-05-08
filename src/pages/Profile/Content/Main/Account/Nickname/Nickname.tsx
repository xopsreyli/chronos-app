import { Box, TextField } from '@mui/material'
import Title from '../../../../../../components/ui/app/Profile/Content/Main/Title/Title'
import Subtitle from '../../../../../../components/ui/app/Profile/Content/Main/Subtitle/Subtitle.tsx'
import SaveButton from '../../../../../../components/ui/app/Profile/Content/Main/SaveButton/SaveButton.tsx'
import useUser from '../../../../../../hooks/api/users/current/useUser/useUser.ts'
import { useForm } from 'react-hook-form'
import type { NicknameUpdationData } from '../../../../../../types/user/types.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { nicknameSchema } from '../../../../../../schemas/user/schemas.ts'
import { useEffect } from 'react'
import useUpdateNickname from '../../../../../../hooks/api/users/current/useUpdateNickname/useUpdateNickname.ts'
import ErrorMessage from '../../../../../../components/ui/common/Form/ErrorMessage/ErrorMessage.tsx'

const Nickname = () => {
    const { data: user } = useUser()
    const {
        register,
        handleSubmit,
        reset,
        formState: { isDirty, errors },
    } = useForm<NicknameUpdationData>({
        defaultValues: {
            nickname: user?.nickname,
        },
        resolver: zodResolver(nicknameSchema),
    })
    const { mutate, isError, error } = useUpdateNickname()

    useEffect(() => {
        if (user) {
            reset({ nickname: user.nickname })
        }
    }, [user])

    const onSubmit = (data: NicknameUpdationData) => {
        mutate(data)
    }

    return (
        <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
            <Title title={'Nickname'} />
            <Subtitle subtitle={'Update your display name.'} />
            <TextField
                type="text"
                label={'Nickname'}
                autoFocus
                helperText={errors.nickname?.message ?? 'Max 16 characters'}
                error={!!errors.nickname}
                {...register('nickname')}
            />
            {isError && (
                <ErrorMessage
                    message={error.message}
                    sx={{
                        my: 1,
                    }}
                />
            )}
            <SaveButton text={'save'} disabled={!isDirty} />
        </Box>
    )
}

export default Nickname
