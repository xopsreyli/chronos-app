import Title from '../../../../../../components/ui/app/Profile/Content/Main/Title/Title'
import Subtitle from '../../../../../../components/ui/app/Profile/Content/Main/Subtitle/Subtitle.tsx'
import { Box, Paper, Radio, RadioGroup, Typography } from '@mui/material'
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

    return (
        <Box>
            <Title title="appearance" />
            <Subtitle subtitle="Choose your preferred theme for the application" />
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
                                            ? '#7FFFD4'
                                            : '#f1f5f9',
                                    p: 3,
                                    transition: 'all 0.2s',
                                    '&:hover': {
                                        borderColor: '#7FFFD4',
                                    },
                                }}
                            >
                                <Radio
                                    value={appearance.value}
                                    sx={{
                                        display: 'none',
                                    }}
                                />
                                {appearance.icon}
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
