import { Autocomplete, Button, Chip, Stack, TextField } from '@mui/material'
import useUsers from '../../../../hooks/api/users/useUsers/useUsers.ts'
import { useState } from 'react'
import type { User } from '../../../../types/user/types.ts'
import PersonIcon from '@mui/icons-material/Person'
import SendIcon from '@mui/icons-material/Send'
import useSendInvites from '../../../../hooks/api/calendars/invites/useSendInvites/useSendInvites.ts'
import { useParams } from 'react-router'
import useDrawerStore from '../../../../stores/useDrawerStore/useDrawerStore.ts'

const CalendarInviteForm = () => {
    const { id } = useParams()
    const [search, setSearch] = useState<string>('')
    const [selected, setSelected] = useState<User[]>([])
    const { data: users } = useUsers(1, search)
    const { mutate } = useSendInvites()
    const close = useDrawerStore((state) => state.close)

    const handleOnSearchChange = (_: any, value: string) => {
        setSearch(value)
    }

    const handleOnSelect = (_: any, users: User[]) => {
        setSelected(users)
    }

    const handleOnRemove = (user: User) => {
        setSelected((v) => v.filter((u) => u.id !== user.id))
    }

    const handleSendInvites = () => {
        const userIds = selected.map((u) => u.id)
        const calendarId = Number(id)
        mutate(
            {
                id: calendarId,
                userIds,
            },
            {
                onSuccess: () => close(),
            },
        )
    }

    return (
        <Stack
            sx={{
                flex: 1,
            }}
        >
            <Autocomplete
                options={users ?? []}
                multiple
                value={selected}
                getOptionLabel={(user) => user.nickname}
                onInputChange={handleOnSearchChange}
                onChange={handleOnSelect}
                popupIcon={null}
                renderValue={() => null}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        type="text"
                        label="Search"
                        size="small"
                    />
                )}
            />
            <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                    flex: 1,
                    flexWrap: 'wrap',
                    mt: 2,
                }}
            >
                {selected.map((user) => (
                    <Chip
                        key={user.id}
                        label={user.nickname}
                        color={'secondary'}
                        variant={'outlined'}
                        icon={<PersonIcon />}
                        onClick={() => handleOnRemove(user)}
                        sx={(theme) => ({
                            transition: 'all 0.1s',
                            '&:hover': {
                                backgroundColor: 'transparent !important',
                                borderColor: theme.palette.error.main,
                                color: theme.palette.error.main,
                            },
                        })}
                    />
                ))}
            </Stack>
            <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={handleSendInvites}
            >
                send invites
            </Button>
        </Stack>
    )
}

export default CalendarInviteForm
