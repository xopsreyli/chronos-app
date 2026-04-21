import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import useDrawerStore from '../../../../../stores/useDrawerStore/useDrawerStore.ts'
import EventForm from '../../../../../components/ui/app/EventForm/EventForm.tsx'

const AddEventButton = () => {
    const open = useDrawerStore((state) => state.open)

    const handleOpen = () => {
        open('right', <EventForm />)
    }

    return (
        <Button
            onClick={handleOpen}
            variant="contained"
            startIcon={<AddIcon />}
            sx={{
                textTransform: 'capitalize',
                fontSize: '15px',
            }}
        >
            add event
        </Button>
    )
}

export default AddEventButton
