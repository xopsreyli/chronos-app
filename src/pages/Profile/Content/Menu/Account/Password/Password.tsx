import Item from '../../Item/Item.tsx'
import { ACCOUNT_PASSWORD } from '../../../../../../enums/profileSections/profileSections.ts'
import KeyIcon from '@mui/icons-material/Key'

const Password = () => {
    return (
        <Item
            profileSection={ACCOUNT_PASSWORD}
            text={ACCOUNT_PASSWORD}
            Icon={KeyIcon}
            backgroundOnSelect={false}
        />
    )
}

export default Password
