import PersonIcon from '@mui/icons-material/Person'
import Item from '../../Item/Item.tsx'
import { ACCOUNT_NICKNAME } from '../../../../../../enums/profileSections/profileSections.ts'

const Nickname = () => {
    return (
        <Item
            profileSection={ACCOUNT_NICKNAME}
            text={ACCOUNT_NICKNAME}
            Icon={PersonIcon}
            backgroundOnSelect={false}
        />
    )
}

export default Nickname
