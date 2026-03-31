import { Box, Card, CardActionArea } from '@mui/material'
import Header from './Header/Header.tsx'
import Content from './Content/Content.tsx'
import { Link } from 'react-router'

type CalendarProps = {
    id: number
    name: string
    description: string
}

const CalendarCard = ({ id, name, description }: CalendarProps) => {
    return (
        <Card
            sx={{
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                },
            }}
        >
            <CardActionArea to={`/calendars/${id}`} component={Link}>
                <Box
                    sx={{
                        height: 8,
                        backgroundColor: 'primary.main',
                    }}
                ></Box>
                <Box sx={{ p: 3 }}>
                    <Header />
                    <Content name={name} description={description} />
                </Box>
            </CardActionArea>
        </Card>
    )
}

export default CalendarCard
