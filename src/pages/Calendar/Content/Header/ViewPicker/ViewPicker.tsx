import ViewListIcon from '@mui/icons-material/ViewList'
import ViewWeekIcon from '@mui/icons-material/ViewWeek'
import { alpha, ToggleButtonGroup } from '@mui/material'
import CalendarViewMonthIcon from '@mui/icons-material/CalendarViewMonth'
import DateRangeIcon from '@mui/icons-material/DateRange'
import ViewButton, { type ViewButtonProps } from './ViewButton/ViewButton.tsx'
import { type MouseEvent } from 'react'
import { useQueryState } from 'nuqs'
import {MONTH, UPCOMING, WEEK, YEAR} from "../../../../../enums/views/enums.ts";
import type {View} from "../../../../../types/views/types.ts";

const VIEW_BUTTONS: ViewButtonProps[] = [
    {
        value: UPCOMING,
        Icon: ViewListIcon,
    },
    {
        value: WEEK,
        Icon: ViewWeekIcon,
    },
    {
        value: MONTH,
        Icon: CalendarViewMonthIcon,
    },
    {
        value: YEAR,
        Icon: DateRangeIcon,
    },
]

const ViewPicker = () => {
    const [view, setView] = useQueryState('view', {
        defaultValue: UPCOMING,
        clearOnDefault: false,
    })

    const handleViewChange = (
        _event: MouseEvent<HTMLElement>,
        newView: View | null,
    ) => {
        if (newView) {
            setView(newView)
        }
    }

    return (
        <ToggleButtonGroup
            value={view}
            size="small"
            exclusive
            onChange={handleViewChange}
            sx={{
                '& .Mui-selected': {
                    backgroundColor: `${alpha('#7FFF94', 0.1)}`,
                },
            }}
        >
            {VIEW_BUTTONS.map((viewButton) => (
                <ViewButton key={viewButton.value} {...viewButton} />
            ))}
        </ToggleButtonGroup>
    )
}

export default ViewPicker
