import Title from '../../../../../../components/ui/app/Profile/Content/Main/Title/Title'
import Subtitle from '../../../../../../components/ui/app/Profile/Content/Main/Subtitle/Subtitle.tsx'
import {
    Box,
    Paper,
    Radio,
    RadioGroup,
    Typography,
    useMediaQuery,
} from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { DARK, LIGHT, SYSTEM } from '../../../../../../enums/theme/enums.ts'
import { Controller, useFormContext } from 'react-hook-form'
import type { SettingsFormData } from '../../../../../../types/settings/types.ts'

const APPEARANCES = [
    {
        value: LIGHT,
        icon: <LightModeIcon sx={{ color: '#fcd34d' }} />,
    },
    {
        value: DARK,
        icon: <DarkModeIcon sx={{ color: '#94a3b8' }} />,
    },
    {
        value: SYSTEM,
        icon: <AutoAwesomeIcon color={'primary'} />,
    },
]

const Appearance = () => {
    const { control, watch } = useFormContext<SettingsFormData>()
    const watchTheme = watch('theme')
    const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
    const systemPreference = prefersDark ? DARK : LIGHT

    return (
        <Box>
            <Title title="appearance" />
            <Subtitle subtitle="Choose your preferred lightTheme for the application" />
            <Controller
                name={'theme'}
                control={control}
                render={({ field }) => (
                    <RadioGroup
                        name="appearance"
                        row
                        value={field.value ?? SYSTEM}
                        onChange={field.onChange}
                        sx={{
                            gap: 3,
                        }}
                    >
                        {APPEARANCES.map((appearance) => (
                            <Paper
                                key={appearance.value}
                                component={'label'}
                                sx={{
                                    cursor: 'pointer',
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: 1,
                                    border: '2px solid',
                                    borderColor:
                                        watchTheme === appearance.value
                                            ? 'primary.main'
                                            : 'grey.100',
                                    p: 3,
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        borderColor: 'primary.main',
                                    },
                                }}
                            >
                                <Radio
                                    value={appearance.value}
                                    sx={{
                                        display: 'none',
                                    }}
                                />
                                <Box
                                    data-mui-color-scheme={
                                        appearance.value === SYSTEM
                                            ? systemPreference
                                            : appearance.value
                                    }
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: 'background.paper',
                                        border: '1px solid',
                                        borderColor: 'grey.300',
                                        borderRadius: 1,
                                    }}
                                >
                                    {appearance.icon}
                                </Box>
                                <Typography
                                    sx={{
                                        textTransform: 'capitalize',
                                    }}
                                >
                                    {appearance.value}
                                </Typography>
                            </Paper>
                        ))}
                    </RadioGroup>
                )}
            />
        </Box>
    )
}

export default Appearance
