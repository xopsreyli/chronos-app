import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton } from '@mui/material'
import useDrawerStore from '../../../../../stores/useDrawerStore/useDrawerStore.ts'

const Header = () => {
    const close = useDrawerStore((state) => state.close)

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 1,
                mb: 1,
            }}
        >
            <IconButton onClick={close} color="inherit">
                <CloseIcon />
            </IconButton>
        </Box>
    )
}

export default Header
