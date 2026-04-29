import useSettings from '../../api/users/current/useSettings/useSettings.ts'
import type { EventType } from '../../../types/events/types.ts'
import { ARRANGEMENT, REMINDER, TASK } from '../../../enums/events/enums.ts'
import {
    ARRANGEMENT_COLOR,
    REMINDER_COLOR,
    TASK_COLOR,
} from '../../../enums/events/defaultColors/enums.ts'

const useEventColor = (type: EventType): string => {
    const { data: settings } = useSettings()

    const colors = {
        [ARRANGEMENT]: settings?.arrangementColor ?? ARRANGEMENT_COLOR,
        [REMINDER]: settings?.reminderColor ?? REMINDER_COLOR,
        [TASK]: settings?.taskColor ?? TASK_COLOR,
    }

    return colors[type]
}

export default useEventColor
