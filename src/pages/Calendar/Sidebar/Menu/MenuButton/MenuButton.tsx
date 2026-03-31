import type { SvgIconComponent } from '@mui/icons-material'
import {
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material'

type Props = {
    Icon: SvgIconComponent
    text: string
}

const MenuButton = ({ Icon, text }: Props) => {
    return (
        <ListItem disablePadding>
            <ListItemButton
                sx={{
                    gap: 2,
                    borderRadius: 2,
                }}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 'auto',
                        color: 'text.secondary',
                    }}
                >
                    <Icon />
                </ListItemIcon>
                <ListItemText
                    primary={text}
                    slotProps={{
                        primary: {
                            sx: {
                                textTransform: 'capitalize',
                                fontSize: '0.875rem',
                            },
                        },
                    }}
                />
            </ListItemButton>
        </ListItem>
    )
}

export default MenuButton
