import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Button } from '@mui/material'
import { Link } from 'react-router'

const ButtonBack = () => {
    return (
        <Button
            to={'/'}
            component={Link}
            startIcon={<ArrowBackIcon />}
            sx={{
                textTransform: 'capitalize',
                color: 'text.secondary',
                fontSize: 15,
            }}
        >
            back
        </Button>
    )
}

export default ButtonBack
