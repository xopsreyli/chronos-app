import { Chip } from '@mui/material'

type Props = {
    label: string
    color?: string
}

const Tag = ({ label, color = 'text.secondary' }: Props) => {
    return (
        <Chip
            label={label}
            size={'small'}
            sx={{
                backgroundColor: `color-mix(in srgb, ${color} 10%, transparent)`,
                color: color,
                fontSize: 12,
            }}
        />
    )
}

export default Tag
