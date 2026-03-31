import { Stack } from '@mui/material'
import ButtonBack from './ButtonBack/ButtonBack.tsx'
import AddEventButton from './AddEventButton/AddEventButton.tsx'
import ViewPicker from './ViewPicker/ViewPicker.tsx'

const Header = () => {
    return (
        <Stack
            direction="row"
            sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
            }}
        >
            <ButtonBack />
            <Stack
                direction="row"
                spacing={2}
                useFlexGap
                sx={{
                    alignItems: 'center',
                }}
            >
                <ViewPicker />
                <AddEventButton />
            </Stack>
        </Stack>
    )
}

export default Header
