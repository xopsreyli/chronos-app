import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import MenuButton from '../MenuButton/MenuButton.tsx'
import useDrawerStore from '../../../../../stores/useDrawerStore/useDrawerStore.ts'
import CalendarInviteForm from '../../../../../components/ui/app/CalendarInviteForm/CalendarInviteForm.tsx'

const InviteButton = () => {
    const open = useDrawerStore((state) => state.open)

    const onClick = () => {
        open('right', <CalendarInviteForm />)
    }

    return (
        <MenuButton Icon={PersonAddAltIcon} text={'invite'} onClick={onClick} />
    )
}

export default InviteButton
