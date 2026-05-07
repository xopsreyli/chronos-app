import { SETTINGS } from '../../../../../enums/profileSections/profileSections.ts'
import SettingsIcon from '@mui/icons-material/Settings'
import Item from '../Item/Item.tsx'

const Settings = () => {
    return (
        <Item profileSection={SETTINGS} text={SETTINGS} Icon={SettingsIcon} />
    )
}

export default Settings
