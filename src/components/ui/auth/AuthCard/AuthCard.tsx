import { Card, Stack } from '@mui/material'
import type { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const AuthCard = ({ children }: Props) => {
    return (
        <Card
            sx={{
                width: '100%',
                p: '32px 32px 24px',
                mb: 3,
            }}
        >
            <Stack spacing={3} useFlexGap>
                {children}
            </Stack>
        </Card>
    )
}

export default AuthCard
