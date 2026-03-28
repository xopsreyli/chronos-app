import { CardContent, Typography } from '@mui/material'

type Props = {
    name: string
    description: string
}

const Content = ({ name, description }: Props) => {
    return (
        <CardContent
            sx={{
                p: 0,
                '&:last-child': {
                    pb: 0,
                },
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    mb: 0.5,
                }}
            >
                {name}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                    height: '2.86em',
                    maxWidth: 280,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                }}
            >
                {description}
            </Typography>
        </CardContent>
    )
}

export default Content
