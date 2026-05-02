import { Stack, Box, Divider } from '@mui/material'
import Appearance from './Appearance/Appearance.tsx'
import EventColors from './EventColors/EventColors.tsx'
import SaveButton from './SaveButton/SaveButton.tsx'
import { FormProvider, useForm } from 'react-hook-form'
import useUpdateSettings from '../../../../../hooks/api/users/current/settings/useUpdateSettings/useUpdateSettings.ts'
import type {
    SettingsFormData,
    SettingsUpdationData,
} from '../../../../../types/settings/types.ts'
import { SYSTEM } from '../../../../../enums/theme/enums.ts'
import useSettings from '../../../../../hooks/api/users/current/settings/useSettings/useSettings.ts'
import { zodResolver } from '@hookform/resolvers/zod'
import { settingsSchema } from '../../../../../schemas/settings/schemas.ts'
import { useEffect } from 'react'

const Settings = () => {
    const { data: settings } = useSettings()
    const methods = useForm<SettingsFormData>({
        defaultValues: settings
            ? {
                  theme: settings.theme ?? SYSTEM,
                  arrangementColor: settings.arrangementColor,
                  reminderColor: settings.reminderColor,
                  taskColor: settings.taskColor,
              }
            : undefined,
        resolver: zodResolver(settingsSchema),
    })
    const {
        reset,
        handleSubmit,
        formState: { dirtyFields },
    } = methods
    const { mutate } = useUpdateSettings()

    useEffect(() => {
        if (settings) {
            reset({
                theme: settings.theme ?? SYSTEM,
                arrangementColor: settings.arrangementColor,
                reminderColor: settings.reminderColor,
                taskColor: settings.taskColor,
            })
        }
    }, [settings])

    const onSubmit = (data: SettingsFormData) => {
        const updationData: SettingsUpdationData = {}
        for (let key in dirtyFields) {
            const k = key as keyof SettingsFormData
            if (k === 'theme') {
                updationData[k] = data[k] === SYSTEM ? null : data[k]
            } else {
                updationData[k] = data[k]
            }
        }

        mutate(updationData)
    }

    if (!settings) return null

    return (
        <FormProvider {...methods}>
            <Stack
                component={'form'}
                onSubmit={handleSubmit(onSubmit)}
                spacing={3}
                useFlexGap
            >
                <Appearance />
                <Divider />
                <EventColors />
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    <SaveButton />
                </Box>
            </Stack>
        </FormProvider>
    )
}

export default Settings
