import SaveIcon from '@mui/icons-material/Save'
import { Box, Button } from '@mui/material'

type Props = {
    text: string
    disabled?: boolean
}

const SaveButton = ({ text, disabled = false }: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <Button
                type="submit"
                variant="contained"
                startIcon={<SaveIcon />}
                size="large"
                disabled={disabled}
                sx={{
                    textTransform: 'capitalize',
                    px: 4,
                }}
            >
                {text}
            </Button>
        </Box>
    )
}

export default SaveButton
