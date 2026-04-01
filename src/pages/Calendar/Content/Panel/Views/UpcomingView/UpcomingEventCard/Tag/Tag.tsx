import { alpha, Chip } from '@mui/material'

type Props = {
    label: string
    color?: string
}

const Tag = ({ label, color = '#64748b' }: Props) => {
    return (
        <Chip
            label={label}
            size={'small'}
            sx={{
                backgroundColor: `${alpha(color, 0.1)}`,
                color: color,
                fontSize: 12,
            }}
        />
    )
}

export default Tag
