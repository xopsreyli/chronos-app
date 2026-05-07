import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import type { ProfileSection } from '../../../../../types/profileSections/types.ts'
import useProfileSection from '../../../../../stores/useProfileSection/useProfileSection.ts'
import type { SvgIconComponent } from '@mui/icons-material'

type Props = {
    profileSection: ProfileSection
    text: string
    Icon: SvgIconComponent
    backgroundOnSelect?: boolean
    onClick?: () => void
}

const Item = ({
    profileSection,
    text,
    Icon,
    backgroundOnSelect = true,
    onClick,
}: Props) => {
    const section = useProfileSection((state) => state.section)
    const setSection = useProfileSection((state) => state.setSection)

    const handleClick = () => {
        onClick?.()
        setSection(profileSection)
    }

    return (
        <ListItemButton
            selected={section === profileSection}
            onClick={handleClick}
            sx={{
                '&.Mui-selected': {
                    ...(!backgroundOnSelect && {
                        backgroundColor: 'transparent',
                    }),
                    color: 'primary.main',
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
                primary={text}
                sx={{
                    textTransform: 'capitalize',
                }}
            />
        </ListItemButton>
    )
}

export default Item
