import { create } from 'zustand/react'
import type { ProfileSection } from '../../types/profileSections/types.ts'
import { SETTINGS } from '../../enums/profileSections/profileSections.ts'

type State = {
    section: ProfileSection
}

type Actions = {
    setSection: (section: ProfileSection) => void
}

type ProfileSectionStore = State & Actions

const useProfileSection = create<ProfileSectionStore>()((set) => ({
    section: SETTINGS,
    setSection: (section: ProfileSection) => set({ section }),
}))

export default useProfileSection
