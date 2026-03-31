import { Typography } from '@mui/material'

type Props = {
    title: string
}

const SectionTitle = ({ title }: Props) => {
    return (
        <Typography
            component="h6"
            color="text.secondary"
            sx={{
                textTransform: 'uppercase',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                mb: 2,
            }}
        >
            {title}
        </Typography>
    )
}

export default SectionTitle
