import {
    alpha,
    ButtonBase,
    type CssVarsTheme,
    Stack,
    Typography,
    useColorScheme,
    useTheme,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RoundIcon from '../../../../../components/ui/common/RoundIcon/RoundIcon.tsx'
import useDialogStore from '../../../../../stores/useDialogStore/useDIalogStore.ts'
import CalendarForm from '../../../../../components/ui/app/CalendarForm/CalendarForm.tsx'
import { SYSTEM } from '../../../../../enums/theme/enums.ts'

const CreateNewButton = () => {
    const theme = useTheme<CssVarsTheme>()
    const { mode, systemMode } = useColorScheme()
    const open = useDialogStore((state) => state.open)

    const handleOnClick = () => {
        open(<CalendarForm />)
    }

    const resolvedMode = mode === SYSTEM ? systemMode : mode
    const activePalette =
        theme.colorSchemes[resolvedMode!]?.palette ?? theme.palette

    const grey500 = activePalette.grey[500]

    return (
        <ButtonBase
            onClick={handleOnClick}
            sx={(theme) => ({
                border: '2px dashed',
                borderColor: 'grey.300',
                borderRadius: '16px',
                transition: 'all 0.2s linear',
                '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: `${alpha(theme.palette.secondary.main, 0.1)}`,
                },
            })}
        >
            <Stack
                spacing={2}
                useFlexGap
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <RoundIcon Icon={AddIcon} color={grey500} iconSize={28} />
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
