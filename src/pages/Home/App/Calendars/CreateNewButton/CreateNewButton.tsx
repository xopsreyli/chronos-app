import { alpha, Box, ButtonBase, Stack, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const CreateNewButton = () => {
    return (
        <ButtonBase
            sx={{
                border: '2px dashed',
                borderColor: 'grey.300',
                borderRadius: '16px',
                transition: 'all 0.2s linear',
                '&:hover': {
                    borderColor: 'primary.main',
                    backgroundColor: `${alpha('#7FFF94', 0.1)}`,
                    '& .icon-box': {
                        backgroundColor: `${alpha('#7FFFD4', 0.2)}`,
                        color: 'primary.main',
                    },
                },
            }}
        >
            <Stack
                spacing={2}
                useFlexGap
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    className="icon-box"
                    sx={{
                        width: 56,
                        aspectRatio: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'grey.200',
                        borderRadius: '50%',
                        color: 'grey.600',
                        fontSize: 28,
                        transition: 'all 0.2s linear',
                    }}
                >
                    <AddIcon fontSize="inherit" />
                </Box>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{
                        textTransform: 'capitalize',
                        fontWeight: '500',
                    }}
                >
                    create new calendar
                </Typography>
            </Stack>
        </ButtonBase>
    )
}

export default CreateNewButton
