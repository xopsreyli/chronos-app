import { Dialog } from '@mui/material'
import useDialogStore from '../../../../stores/useDialogStore/useDIalogStore.ts'

const AppDialog = () => {
    const isOpen = useDialogStore((state) => state.isOpen)
    const content = useDialogStore((state) => state.content)
    const close = useDialogStore((state) => state.close)

    return (
        <Dialog open={isOpen} onClose={close} fullWidth disableRestoreFocus>
            {content}
        </Dialog>
    )
}

export default AppDialog
