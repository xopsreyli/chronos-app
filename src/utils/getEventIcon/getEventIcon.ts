import EventIcon from '@mui/icons-material/Event'
import NotificationsIcon from '@mui/icons-material/Notifications'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import { ARRANGEMENT, REMINDER, TASK } from '../../enums/events/enums.ts'
import type { EventType } from '../../types/events/types.ts'
import type { SvgIconComponent } from '@mui/icons-material'

const IconByEventType: Record<EventType, SvgIconComponent> = {
    [ARRANGEMENT]: EventIcon,
    [REMINDER]: NotificationsIcon,
    [TASK]: TaskAltIcon,
}

const getEventIcon = (type: EventType) => {
    return IconByEventType[type]
}

export default getEventIcon
