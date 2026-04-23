import {
    Box,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    type SelectChangeEvent,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { MobileDatePicker, MobileDateTimePicker } from '@mui/x-date-pickers'
import type {
    EventFormData,
    EventType,
} from '../../../../types/events/types.ts'
import { ARRANGEMENT, REMINDER, TASK } from '../../../../enums/events/enums.ts'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { eventSchema } from '../../../../schemas/event/schemas.ts'
import useCreateEvent from '../../../../hooks/calendars/events/useCreateEvent/useCreateEvent.ts'
import { useParams } from 'react-router'
import useDrawerStore from '../../../../stores/useDrawerStore/useDrawerStore.ts'

const EventForm = () => {
    const { id } = useParams()
    const {
        register,
        control,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors, isValid },
    } = useForm<EventFormData>({
        defaultValues: {
            type: TASK,
        },
        resolver: zodResolver(eventSchema),
    })
    const watchType = watch('type')
    const { mutate, isPending } = useCreateEvent(Number(id), watchType)
    const close = useDrawerStore((state) => state.close)

    const handleTypeChange = (event: SelectChangeEvent) => {
        const newType = event.target.value as EventType
        reset()
        setValue('type', newType)
    }

    const onSubmit = (data: EventFormData) => {
        let creationData

        if (data.type === ARRANGEMENT) {
            creationData = {
                title: data.title,
                description: data.description,
                from: data.from.toDate(),
                to: data.to.toDate(),
            }
        } else if (data.type === REMINDER) {
            creationData = {
                title: data.title,
                description: data.description,
                dateTime: data.dateTime.toDate(),
            }
        } else if (data.type === TASK) {
            creationData = {
                title: data.title,
                description: data.description,
                dateTime: new Date(
                    `${data.date.format('YYYY-MM-DD')}T00:00:00.000Z`,
                ),
            }
        }

        mutate(creationData!, {
            onSuccess: () => {
                close()
            },
        })
    }

    const renderWhenFields = () => {
        if (watchType === ARRANGEMENT)
            return (
                <Stack spacing={1} useFlexGap>
                    <Controller
                        name={'from'}
                        control={control}
                        render={({ field }) => (
                            <MobileDateTimePicker
                                onChange={field.onChange}
                                label="Start"
                                yearsOrder="desc"
                                disablePast
                                ampm={false}
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        size: 'small',
                                        margin: 'dense',
                                        helperText: (errors as any).from
                                            ?.message,
                                        error: !!(errors as any).from,
                                    },
                                }}
                            />
                        )}
                    />
                    <Controller
                        name={'to'}
                        control={control}
                        render={({ field }) => (
                            <MobileDateTimePicker
                                onChange={field.onChange}
                                label="End"
                                yearsOrder="desc"
                                disablePast
                                ampm={false}
                                slotProps={{
                                    textField: {
                                        fullWidth: true,
                                        size: 'small',
                                        margin: 'dense',
                                        helperText: (errors as any).to?.message,
                                        error: !!(errors as any).to,
                                    },
                                }}
                            />
                        )}
                    />
                </Stack>
            )
        if (watchType === REMINDER)
            return (
                <Controller
                    name={'dateTime'}
                    control={control}
                    render={({ field }) => (
                        <MobileDateTimePicker
                            onChange={field.onChange}
                            label="Remind at "
                            yearsOrder="desc"
                            disablePast
                            ampm={false}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    size: 'small',
                                    margin: 'dense',
                                    helperText: (errors as any).dateTime
                                        ?.message,
                                    error: !!(errors as any).dateTime,
                                },
                            }}
                        />
                    )}
                />
            )
        if (watchType === TASK)
            return (
                <Controller
                    name={'date'}
                    control={control}
                    render={({ field }) => (
                        <MobileDatePicker
                            onChange={field.onChange}
                            label="Task Date"
                            yearsOrder="desc"
                            disablePast
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    size: 'small',
                                    margin: 'dense',
                                    helperText: (errors as any).date?.message,
                                    error: !!(errors as any).date,
                                },
                            }}
                        />
                    )}
                />
            )
    }

    return (
        <Stack
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                width: 368,
                flex: 1,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                }}
            >
                Create new event
            </Typography>
            <Stack
                spacing={1}
                useFlexGap
                sx={{
                    flex: 1,
                }}
            >
                <FormControl
                    sx={{
                        minWidth: 160,
                        alignSelf: 'flex-end',
                    }}
                >
                    <InputLabel id="event-type">Event Type</InputLabel>
                    <Select
                        value={watchType}
                        labelId="event-type"
                        label="Event Type"
                        onChange={handleTypeChange}
                    >
                        <MenuItem value={ARRANGEMENT}>Arrangement</MenuItem>
                        <MenuItem value={REMINDER}>Reminder</MenuItem>
                        <MenuItem value={TASK}>Task</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    autoFocus
                    type="text"
                    label="Title *"
                    fullWidth
                    size="small"
                    margin={'dense'}
                    helperText={errors.title?.message}
                    error={!!errors.title}
                    {...register('title')}
                />
                <TextField
                    type="text"
                    label="Description"
                    fullWidth
                    size="small"
                    margin={'dense'}
                    multiline
                    rows={5}
                    {...register('description')}
                />
                <Box
                    sx={{
                        px: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 1,
                        }}
                    >{`Pick a ${watchType === TASK ? 'date' : 'date and time'}:`}</Typography>
                    {renderWhenFields()}
                </Box>
            </Stack>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                size="small"
                disabled={!isValid}
                loading={isPending}
                sx={{
                    fontWeight: 700,
                    mt: 4,
                }}
            >
                create
            </Button>
        </Stack>
    )
}

export default EventForm
