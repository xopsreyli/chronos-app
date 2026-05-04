import { alpha, createTheme, type Theme } from '@mui/material'

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'data-mui-color-scheme',
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#7FFFD4',
                    light: '#b3ffe6',
                    dark: '#4dd9a8',
                    contrastText: '#1a3a2f',
                },
                secondary: {
                    main: '#7FFF94',
                    light: '#b3ffc0',
                    dark: '#4dd968',
                    contrastText: '#1a3a1f',
                },
                background: {
                    default: '#f0fff8',
                    paper: '#ffffff',
                },
                text: {
                    primary: '#1e293b',
                    secondary: '#64748b',
                },
                grey: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    300: '#cbd5e1',
                    400: '#94a3b8',
                    500: '#64748b',
                    600: '#475569',
                    700: '#334155',
                    800: '#1e293b',
                    900: '#0f172a',
                },
                success: {
                    main: '#22c55e',
                    light: '#4ade80',
                    dark: '#16a34a',
                },
                warning: {
                    main: '#f59e0b',
                    light: '#fbbf24',
                    dark: '#d97706',
                },
                error: {
                    main: '#ef4444',
                    light: '#f87171',
                    dark: '#dc2626',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    main: '#7FFFD4',
                    light: '#b3ffe6',
                    dark: '#4dd9a8',
                    contrastText: '#1a3a2f',
                },
                secondary: {
                    main: '#7FFF94',
                    light: '#b3ffc0',
                    dark: '#4dd968',
                    contrastText: '#1a3a1f',
                },
                background: {
                    default: '#1c1c1c',
                    paper: '#272727',
                },
                text: {
                    primary: '#f0faf7',
                    secondary: '#8aada5',
                },
                grey: {
                    50: '#2e2e2e',
                    100: '#363636',
                    200: '#404040',
                    300: '#4d4d4d',
                    400: '#5c5c5c',
                    500: '#6e6e6e',
                    600: '#888888',
                    700: '#a3a3a3',
                    800: '#c2c2c2',
                    900: '#e0e0e0',
                },
                success: {
                    main: '#22c55e',
                    light: '#4ade80',
                    dark: '#16a34a',
                },
                warning: {
                    main: '#f59e0b',
                    light: '#fbbf24',
                    dark: '#d97706',
                },
                error: {
                    main: '#ef4444',
                    light: '#f87171',
                    dark: '#dc2626',
                },
            },
        },
    },
    typography: {
        h1: {
            fontSize: '3.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '0.05em',
        },
        h2: {
            fontSize: '2.25rem',
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: '0.05em',
        },
        h3: {
            fontSize: '1.5rem',
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: '0.05em',
        },
        h4: {
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '0.05em',
        },
        h5: {
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '0.05em',
        },
        h6: {
            fontSize: '0.875rem',
            fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '0.05em',
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    scrollBehavior: 'smooth',
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    padding: '10px 24px',
                },
                text: ({ theme }: { theme: Theme }) => ({
                    '&:hover': {
                        backgroundColor: alpha(theme.palette.secondary.main, 0.1),
                    },
                }),
                contained: ({theme}: {theme: Theme}) => ({
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.4)}`,
                    },
                }),
            },
        },
        MuiCard: {
            styleOverrides: {
                root: ({ theme }: { theme: Theme }) => ({
                    borderRadius: 16,
                    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.06)',
                    ...theme.applyStyles('dark', {
                        boxShadow: '0 2px 12px rgba(255, 255, 255, 0.06)',
                    })
                }),
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 8,
                    },
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: ({ theme }) => ({
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
                    backgroundColor: theme.palette.background.paper,
                    ...theme.applyStyles('dark', {
                        boxShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
                    })
                }),
            },
        },
    },
})

export default theme
