import { Stack, TextField, Typography } from '@mui/material'
import type { EventType } from '../../../../../../../types/events/types.ts'
import getEventIcon from '../../../../../../../utils/getEventIcon/getEventIcon.ts'
import { Controller, useFormContext } from 'react-hook-form'
import type { SettingsFormData } from '../../../../../../../types/settings/types.ts'
import {
    ARRANGEMENT,
    REMINDER,
    TASK,
} from '../../../../../../../enums/events/enums.ts'

type Props = {
    eventType: EventType
}

const FORM_FIELD_NAMES: Record<EventType, keyof SettingsFormData> = {
    [ARRANGEMENT]: 'arrangementColor',
    [REMINDER]: 'reminderColor',
    [TASK]: 'taskColor',
}

const EventColorField = ({ eventType }: Props) => {
    const { control } = useFormContext<SettingsFormData>()
    const Icon = getEventIcon(eventType)

    return (
        <Controller
            control={control}
            name={FORM_FIELD_NAMES[eventType]}
            render={({ field }) => (
                <Stack
                    direction="row"
                    spacing={3}
                    useFlexGap
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Stack
                        direction="row"
                        spacing={1}
                        useFlexGap
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Icon sx={{ color: field.value }} />
                        <Typography
                            sx={{
                                textTransform: 'capitalize',
                            }}
                        >
                            {eventType}
                        </Typography>
                    </Stack>
                    <TextField
                        value={field.value ?? '#000'}
                        onChange={field.onChange}
                        type="color"
                        size={'small'}
                        sx={{
                            width: 160,
                        }}
                    />
                </Stack>
            )}
        />
    )
}

export default EventColorField
