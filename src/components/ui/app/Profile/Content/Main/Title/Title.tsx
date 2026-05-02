import { Typography } from '@mui/material'

type Props = {
    title: string
}

const Title = ({ title }: Props) => {
    return (
        <Typography
            variant={'h5'}
            sx={{
                textTransform: 'capitalize',
                mb: 1,
            }}
        >
            {title}
        </Typography>
    )
}

export default Title
