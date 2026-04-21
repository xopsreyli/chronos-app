import { create } from 'zustand'
import type { ReactNode } from 'react'

type Anchor = 'top' | 'bottom' | 'left' | 'right'

type State = {
    isOpen: boolean
    anchor: Anchor | undefined
    content: ReactNode
}

type Actions = {
    open: (anchor: Anchor, content: ReactNode) => void
    close: () => void
}

type DrawerStore = State & Actions

const useDrawerStore = create<DrawerStore>()((set) => ({
    isOpen: false,
    anchor: undefined,
    content: null,
    open: (anchor, content) =>
        set({
            isOpen: true,
            anchor: anchor,
            content: content,
        }),
    close: () =>
        set({
            isOpen: false,
            content: null,
        }),
}))

export default useDrawerStore
