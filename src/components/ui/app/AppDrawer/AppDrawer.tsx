import { Box, Drawer } from '@mui/material'
import useDrawerStore from '../../../../stores/useDrawerStore/useDrawerStore.ts'
import Header from './Header/Header.tsx'

const AppDrawer = () => {
    const isOpen = useDrawerStore((state) => state.isOpen)
    const anchor = useDrawerStore((state) => state.anchor)
    const close = useDrawerStore((state) => state.close)
    const content = useDrawerStore((state) => state.content)

    return (
        <Drawer
            open={isOpen}
            anchor={anchor}
            onClose={close}
            disableRestoreFocus
        >
            <Header />
            <Box
                sx={{
                    width: 400,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    px: 2,
                    pb: 2,
                }}
            >
                {content}
            </Box>
        </Drawer>
    )
}

export default AppDrawer
