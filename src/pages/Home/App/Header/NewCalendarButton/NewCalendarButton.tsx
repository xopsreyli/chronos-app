import AddIcon from '@mui/icons-material/Add'
import { Button } from '@mui/material'
import useDialogStore from '../../../../../stores/useDialogStore/useDIalogStore.ts'
import CalendarForm from '../../../../../components/ui/app/CalendarForm/CalendarForm.tsx'

const NewCalendarButton = () => {
    const open = useDialogStore((state) => state.open)

    const handleOnClick = () => {
        open(<CalendarForm />)
    }

    return (
        <Button
            onClick={handleOnClick}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
                textTransform: 'capitalize',
            }}
        >
            new calendar
        </Button>
    )
}

export default NewCalendarButton
