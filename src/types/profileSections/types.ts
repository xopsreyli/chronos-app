import {
    ACCOUNT_NICKNAME,
    ACCOUNT_PASSWORD,
    SETTINGS,
} from '../../enums/profileSections/profileSections.ts'

export type ProfileSection =
    | typeof ACCOUNT_NICKNAME
    | typeof ACCOUNT_PASSWORD
    | typeof SETTINGS
