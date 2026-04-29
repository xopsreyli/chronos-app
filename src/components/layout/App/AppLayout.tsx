import Header from '../Header/Header.tsx'
import { Outlet, useNavigate } from 'react-router'
import AppDialog from '../../ui/app/AppDialog/AppDialog.tsx'
import useUser from '../../../hooks/api/users/current/useUser/useUser.ts'
import { useEffect } from 'react'
import AppDrawer from '../../ui/app/AppDrawer/AppDrawer.tsx'
import useSettings from '../../../hooks/api/users/current/useSettings/useSettings.ts'

const AppLayout = () => {
    const navigate = useNavigate()
    const { data: user, isPending } = useUser()
    const {} = useSettings()

    useEffect(() => {
        if (!user && !isPending) navigate('/', { replace: true })
    }, [user, isPending, navigate])

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
