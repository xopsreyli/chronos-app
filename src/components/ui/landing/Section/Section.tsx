import { Box, Stack } from '@mui/material'
import Label from './Label/Label.tsx'
import Title from './Title/Title.tsx'
import Subtitle from './Subtitle/Subtitle.tsx'
import type { ReactNode } from 'react'

type Props = {
    id: string
    label: string
    title: string
    subtitle: string
    children: ReactNode
}

const Section = ({ id, label, title, subtitle, children }: Props) => {
    return (
        <Stack
            id={id}
            spacing={2}
            useFlexGap
            component="section"
            sx={{
                alignItems: 'center',
                my: 10,
            }}
        >
            <Label label={label} />
            <Title title={title} />
            <Subtitle subtitle={subtitle} />
            <Box
                sx={{
                    pt: 4,
                }}
            >
                {children}
            </Box>
        </Stack>
    )
}

export default Section
