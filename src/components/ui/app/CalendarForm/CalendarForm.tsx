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
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import useCreateCalendar from '../../../../hooks/useCreateCalendar/useCreateCalendar.ts'
import ErrorMessage from '../../common/Form/ErrorMessage/ErrorMessage.tsx'
import type { Calendar } from '../../../../types/calendar/types.ts'
import useUpdateCalendar from '../../../../hooks/useUpdateCalendar/useUpdateCalendar.ts'

const schema = z.object({
    name: z.string().min(1, { error: 'Name is required' }).max(24),
    description: z.string(),
    color: z.string(),
})

type CalendarFormData = z.infer<typeof schema>

type Props = {
    calendar?: Calendar
}

const CalendarForm = ({ calendar }: Props) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<CalendarFormData>({
        defaultValues: calendar
            ? {
                  name: calendar.name,
                  description: calendar.description,
                  color: calendar.color,
              }
            : undefined,
        resolver: zodResolver(schema),
    })
    const createMutation = useCreateCalendar()
    const updateMutation = useUpdateCalendar()
    const { isPending, isError, error } = calendar
        ? createMutation
        : updateMutation
    const close = useDialogStore((state) => state.close)

    const onSubmit = (data: CalendarFormData) => {
        if (calendar) {
            updateMutation.mutate({ id: calendar.id, ...data })
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
                            label="Types Name *"
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
                    disabled={!isValid}
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
