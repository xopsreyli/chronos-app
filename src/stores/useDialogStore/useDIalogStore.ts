import { create } from 'zustand/react'
import type { ReactNode } from 'react'

type State = {
    isOpen: boolean
    content: ReactNode
}

type Actions = {
    open: (content: ReactNode) => void
    close: () => void
}

type DialogStore = State & Actions

const useDialogStore = create<DialogStore>()((set) => ({
    isOpen: false,
    content: null,
    open: (content: ReactNode) =>
        set({
            isOpen: true,
            content: content,
        }),
    close: () =>
        set({
            isOpen: false,
            content: null,
        }),
}))

export default useDialogStore
