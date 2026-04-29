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
    Event,
    EventType,
} from '../../../../types/events/types.ts'
import { ARRANGEMENT, REMINDER, TASK } from '../../../../enums/events/enums.ts'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { eventSchema } from '../../../../schemas/event/schemas.ts'
import useCreateEvent from '../../../../hooks/api/calendars/events/useCreateEvent/useCreateEvent.ts'
import { useParams } from 'react-router'
import useDrawerStore from '../../../../stores/useDrawerStore/useDrawerStore.ts'
import dayjs from 'dayjs'
import useUpdateEvent from '../../../../hooks/api/events/useUpdateEvent/useUpdateEvent.ts'
import EventDetails from '../EventDetails/EventDetails.tsx'
import ErrorMessage from '../../common/Form/ErrorMessage/ErrorMessage.tsx'

type Props = {
    event?: Event
}

const EventForm = ({ event }: Props) => {
    const { id } = useParams()
    const {
        register,
        control,
        handleSubmit,
        watch,
        reset,
        setValue,
        formState: { errors, isValid, isDirty, dirtyFields },
    } = useForm<EventFormData>({
        defaultValues: event
            ? {
                  type: event.type,
                  title: event.title,
                  description: event.description,
                  ...(event.type === ARRANGEMENT && {
                      from: dayjs(event.from),
                      to: dayjs(event.to),
                  }),
                  ...(event.type === REMINDER && {
                      dateTime: dayjs(event.dateTime),
                  }),
                  ...(event.type === TASK && {
                      date: dayjs(event.dateTime),
                  }),
              }
            : {
                  type: TASK,
              },
        resolver: zodResolver(eventSchema),
    })
    const watchType = watch('type')
    const createMutation = useCreateEvent(Number(id), watchType)
    const updateMutation = useUpdateEvent(event)
    const { isPending, isError, error } = event
        ? updateMutation
        : createMutation
    const close = useDrawerStore((state) => state.close)
    const setContent = useDrawerStore((state) => state.setContent)

    const handleTypeChange = (event: SelectChangeEvent) => {
        const newType = event.target.value as EventType
        reset()
        setValue('type', newType)
    }

    const onSubmit = (data: EventFormData) => {
        if (event) {
            let updationData: Partial<EventFormData> = {}
            for (let key in dirtyFields) {
                const k = key as keyof EventFormData
                updationData[k] = data[k] as any
            }

            updateMutation.mutate(updationData, {
                onSuccess: (event: Event) => {
                    setContent(<EventDetails event={event} />)
                },
            })
        } else {
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

            createMutation.mutate(creationData!, {
                onSuccess: () => {
                    close()
                },
            })
        }
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
                                value={field.value ?? null}
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
                                value={field.value ?? null}
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
                            value={field.value ?? null}
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
                            value={field.value ?? null}
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
                flex: 1,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                }}
            >
                {event ? 'Update event' : 'Create new event'}
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
                        disabled={!!event}
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
                {isError && <ErrorMessage message={error.message} />}
            </Stack>
            <Button
                type="submit"
                variant="contained"
                fullWidth
                size="small"
                disabled={!isValid || (event && !isDirty)}
                loading={isPending}
                sx={{
                    fontWeight: 700,
                    mt: 4,
                }}
            >
                {event ? 'update' : 'create'}
            </Button>
        </Stack>
    )
}

export default EventForm
