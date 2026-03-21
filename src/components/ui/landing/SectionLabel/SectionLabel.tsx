import { alpha, Chip } from '@mui/material'

type Props = {
    label: string
}

const SectionLabel = ({ label }: Props) => {
    return (
        <Chip
            label={label}
            sx={(theme) => ({
                textTransform: 'capitalize',
                color: 'primary.main',
                fontWeight: 500,
                backgroundColor: `${alpha(theme.palette.secondary.main, 0.1)}`,
            })}
        />
    )
}

export default SectionLabel
