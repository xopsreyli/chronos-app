import {alpha, Box, Paper, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

const WEEK_DAYS: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const DATES: number[][] = [[1, 2, 3, 4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14], [15, 16, 17, 18, 19, 20, 21], [22, 23, 24, 25, 26, 27, 28], [29, 30, 31]]

const Calendar = () => {
    return (
        <Box
            sx={(theme) => ({
                width: '100%',
                aspectRatio: '1',
                backgroundColor: 'primary.main',
                borderRadius: 4,
                boxShadow: `0 0 60px ${alpha(theme.palette.primary.main, 0.4)}`,
                p: 5,
            })}
        >
            <Paper
                elevation={0}
                sx={{
                    height: '100%',
                    borderRadius: 3,
                    overflow: 'hidden',
                    p: 2,
                }}
            >
                <Stack
                    direction='row'
                    sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <Typography
                        variant='h5'
                    >
                        March 2026
                    </Typography>
                    <Stack
                        direction='row'
                        spacing={1}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                backgroundColor: 'primary.main',
                                borderRadius: '50%',
                            }}
                        ></Box>
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                backgroundColor: 'secondary.main',
                                borderRadius: '50%',
                            }}
                        ></Box>
                    </Stack>
                </Stack>
                <Table
                    sx={{
                        width: '100%',
                        tableLayout: 'fixed',
                    }}
                >
                    <TableHead>
                        <TableRow>
                            {WEEK_DAYS.map((weekday: string) => (
                                <TableCell
                                    key={weekday}
                                    align='center'
                                    sx={{
                                        border: 'none',
                                        color: 'text.secondary'
                                    }}
                                >{weekday}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DATES.map((week: number[], i: number) => (
                            <TableRow key={i}>{
                                week.map((date: number) => (
                                    <TableCell
                                        key={date}
                                        align='center'
                                        sx={{
                                            border: 'none',
                                            fontSize: '0.75rem',
                                            p: 0
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: '100%',
                                                aspectRatio: '1',
                                                alignContent: 'center',
                                                ...(date === 10 && {
                                                    backgroundColor: 'primary.main',
                                                    borderRadius: '50%',
                                                    color: 'background.paper'
                                                })
                                            }}
                                        >{date}</Box>
                                    </TableCell>
                                ))
                            }</TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Box>
    );
};

export default Calendar;