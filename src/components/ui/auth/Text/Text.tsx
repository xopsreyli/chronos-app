import { Typography } from '@mui/material'
import type { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const Text = ({ children }: Props) => {
    return (
        <Typography variant="body2" color="text.secondary">
            {children}
        </Typography>
    )
}

export default Text
