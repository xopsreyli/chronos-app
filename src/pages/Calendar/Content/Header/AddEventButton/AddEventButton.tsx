import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const AddEventButton = () => {
    return (
        <Button
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
