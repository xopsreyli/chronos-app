import { create } from 'zustand/react'
import type { EventType } from '../../types/events/types.ts'
import { ARRANGEMENT, REMINDER, TASK } from '../../enums/events/enums.ts'

type State = {
    filters: Record<EventType, boolean>
}

type Actions = {
    toggleFilter: (eventType: EventType) => void
}

type EventsFilterStore = State & Actions

const useEventsFilter = create<EventsFilterStore>()((set) => ({
    filters: {
        [ARRANGEMENT]: true,
        [REMINDER]: true,
        [TASK]: true,
    },
    toggleFilter: (eventType) =>
        set((state) => ({
            filters: {
                ...state.filters,
                [eventType]: !state.filters[eventType],
            },
        })),
}))

export default useEventsFilter
