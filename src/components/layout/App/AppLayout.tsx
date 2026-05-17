import Header from '../Header/Header.tsx'
import { Outlet } from 'react-router'
import AppDialog from '../../ui/app/AppDialog/AppDialog.tsx'
import useUser from '../../../hooks/api/users/current/useUser/useUser.ts'
import { useEffect } from 'react'
import AppDrawer from '../../ui/app/AppDrawer/AppDrawer.tsx'
import useSettings from '../../../hooks/api/users/current/settings/useSettings/useSettings.ts'

const AppLayout = () => {
    const { data: user, isPending } = useUser()
    const {} = useSettings()

    useEffect(() => {
        if (!user && !isPending) window.location.replace('/')
    }, [user, isPending])

    return (
        <>
            <Header />
            <Outlet />
            <AppDialog />
            <AppDrawer />
        </>
    )
}

export default AppLayout
