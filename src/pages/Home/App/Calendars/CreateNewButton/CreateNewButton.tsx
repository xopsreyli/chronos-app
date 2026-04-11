import { alpha, ButtonBase, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RoundIcon from '../../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import useDialogStore from '../../../../../stores/useDialogStore/useDIalogStore.ts'
import CalendarForm from '../../../../../components/ui/app/CalendarForm/CalendarForm.tsx'

const CreateNewButton = () => {
    const open = useDialogStore((state) => state.open)

    const handleOnClick = () => {
        open(<CalendarForm />)
    }

    return (
        <ButtonBase
            onClick={handleOnClick}
            sx={{
                border: '2px dashed',
                borderColor: 'grey.300',
                borderRadius: '16px',
                transition: 'all 0.2s linear',
                '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: `${alpha('#7FFF94', 0.1)}`,
                },
            }}
        >
            <Stack
                spacing={2}
                useFlexGap
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <RoundIcon Icon={AddIcon} color={'#64748b'} iconSize={28} />
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        textTransform: 'capitalize',
                        fontWeight: '500',
                    }}
                >
                    create new calendar
                </Typography>
            </Stack>
        </ButtonBase>
    )
}

export default CreateNewButton
