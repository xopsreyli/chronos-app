import { Typography } from '@mui/material'

type Props = {
    title: string
}

const Title = ({ title }: Props) => {
    return <Typography variant="h3">{title}</Typography>
}

export default Title
