import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import type { ProfileSection } from '../../../../../types/profileSections/types.ts'
import useProfileSection from '../../../../../stores/useProfileSection/useProfileSection.ts'
import type { SvgIconComponent } from '@mui/icons-material'

type Props = {
    profileSection: ProfileSection
    Icon: SvgIconComponent
}

const Item = ({ profileSection, Icon }: Props) => {
    const section = useProfileSection((state) => state.section)
    const setSection = useProfileSection((state) => state.setSection)

    const handleClick = () => {
        setSection(profileSection)
    }

    return (
        <ListItemButton
            selected={section === profileSection}
            onClick={handleClick}
            sx={{
                '&.Mui-selected': {
                    '& .MuiListItemIcon-root': {
                        color: '#7FFFD4',
                    },
                },
            }}
        >
            <ListItemIcon
                sx={{
                    minWidth: 32,
                    color: 'inherit',
                }}
            >
                <Icon />
            </ListItemIcon>
            <ListItemText
                primary={profileSection}
                sx={{
                    textTransform: 'capitalize',
                }}
            />
        </ListItemButton>
    )
}

export default Item
