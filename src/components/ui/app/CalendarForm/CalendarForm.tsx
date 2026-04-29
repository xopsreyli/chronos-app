import {
    alpha,
    Box,
    Button,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
} from '@mui/material'
import useDialogStore from '../../../../stores/useDialogStore/useDIalogStore.ts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useCreateCalendar from '../../../../hooks/api/calendars/useCreateCalendar/useCreateCalendar.ts'
import ErrorMessage from '../../common/Form/ErrorMessage/ErrorMessage.tsx'
import type {
    Calendar,
    CalendarFormData,
} from '../../../../types/calendar/types.ts'
import useUpdateCalendar from '../../../../hooks/api/calendars/useUpdateCalendar/useUpdateCalendar.ts'
import { calendarSchema } from '../../../../schemas/calendar/schemas.ts'

type Props = {
    calendar?: Calendar
}

const CalendarForm = ({ calendar }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid, isDirty, dirtyFields },
    } = useForm<CalendarFormData>({
        defaultValues: calendar
            ? {
                  name: calendar.name,
                  description: calendar.description,
                  color: calendar.color,
              }
            : undefined,
        resolver: zodResolver(calendarSchema),
    })
    const createMutation = useCreateCalendar()
    const updateMutation = useUpdateCalendar()
    const { isPending, isError, error } = calendar
        ? updateMutation
        : createMutation
    const close = useDialogStore((state) => state.close)

    const onSubmit = (data: CalendarFormData) => {
        if (calendar) {
            let updationData: Partial<Omit<Calendar, 'id'>> = {}
            for (let key in dirtyFields) {
                const k = key as keyof Omit<Calendar, 'id'>
                updationData[k] = data[k]
            }

            updateMutation.mutate({ id: calendar.id, ...updationData })
        } else {
            createMutation.mutate(data)
        }
    }

    return (
        <>
            <DialogTitle
                sx={{
                    textTransform: 'capitalize',
                }}
            >
                {calendar ? 'update calendar' : 'create new calendar'}
            </DialogTitle>
            <DialogContent>
                <Box
                    id={'calendar-form'}
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Stack spacing={2} useFlexGap>
                        <TextField
                            autoFocus
                            type="text"
                            label="Calendar Name *"
                            fullWidth
                            margin="dense"
                            helperText={errors.name?.message}
                            error={!!errors.name}
                            {...register('name')}
                        />
                        <TextField
                            type="text"
                            label="Description (optional)"
                            fullWidth
                            multiline
                            rows={3}
                            margin="dense"
                            {...register('description')}
                        />
                        <TextField
                            type="color"
                            label="Pick a color"
                            fullWidth
                            margin="dense"
                            {...register('color')}
                        />
                        {isError && <ErrorMessage message={error.message} />}
                    </Stack>
                </Box>
            </DialogContent>
            <DialogActions
                sx={{
                    p: 3,
                    pt: 1,
                }}
            >
                <Button
                    onClick={close}
                    size={'large'}
                    color={'inherit'}
                    sx={{
                        textTransform: 'capitalize',
                        '&:hover': {
                            backgroundColor: `${alpha('#1e293b', 0.05)}`,
                        },
                    }}
                >
                    cancel
                </Button>
                <Button
                    type={'submit'}
                    form={'calendar-form'}
                    size={'large'}
                    variant="contained"
                    disabled={!isValid || (calendar && !isDirty)}
                    loading={isPending}
                    sx={{
                        textTransform: 'capitalize',
                    }}
                >
                    {calendar ? 'update calendar' : 'create calendar'}
                </Button>
            </DialogActions>
        </>
    )
}

export default CalendarForm
