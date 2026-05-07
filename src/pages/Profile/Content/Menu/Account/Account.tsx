import ManageAccountsIcon from '@mui/icons-material/ManageAccounts'
import {
    ACCOUNT_NICKNAME,
    ACCOUNT_PASSWORD,
} from '../../../../../enums/profileSections/profileSections.ts'
import Item from '../Item/Item.tsx'
import { Collapse, Divider } from '@mui/material'
import { useEffect, useState } from 'react'
import Nickname from './Nickname/Nickname.tsx'
import Password from './Password/Password.tsx'
import useProfileSection from '../../../../../stores/useProfileSection/useProfileSection.ts'
import type { ProfileSection } from '../../../../../types/profileSections/types.ts'

const ACCOUNT_ITEMS: ProfileSection[] = [ACCOUNT_NICKNAME, ACCOUNT_PASSWORD]

const Account = () => {
    const section = useProfileSection((state) => state.section)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        if (!ACCOUNT_ITEMS.includes(section)) {
            setIsOpen(false)
        }
    }, [section])

    const handleClick = () => {
        setIsOpen((v) => !v)
    }

    const accountSection = ACCOUNT_ITEMS.includes(section)
        ? section
        : ACCOUNT_NICKNAME

    return (
        <>
            <Item
                profileSection={accountSection}
                text={'Account'}
                Icon={ManageAccountsIcon}
                onClick={handleClick}
            />
            <Collapse
                in={isOpen}
                timeout="auto"
                unmountOnExit
                sx={{
                    pl: 4,
                }}
            >
                <Divider />
                <Nickname />
                <Divider />
                <Password />
            </Collapse>
        </>
    )
}

export default Account
