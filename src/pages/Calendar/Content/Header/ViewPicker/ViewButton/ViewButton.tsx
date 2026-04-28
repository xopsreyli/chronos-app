import type { SvgIconComponent } from '@mui/icons-material'
import { ToggleButton, Typography } from '@mui/material'
import type { View } from '../../../../../../types/views/types.ts'

export type ViewButtonProps = {
    value: View
    Icon: SvgIconComponent
}

const ViewButton = ({ value, Icon }: ViewButtonProps) => {
    return (
        <ToggleButton
            value={value}
            color={'primary'}
            sx={{
                gap: 1,
                px: 2,
                py: 1,
            }}
        >
            <Icon fontSize={'small'} />
            <Typography
                component={'span'}
                sx={{
                    textTransform: 'capitalize',
                    font: 'inherit',
                }}
            >
                {value}
            </Typography>
        </ToggleButton>
    )
}

export default ViewButton
