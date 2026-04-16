import Header from '../Header/Header.tsx'
import { Outlet, useNavigate } from 'react-router'
import AppDialog from '../../ui/app/AppDialog/AppDialog.tsx'
import useUser from '../../../hooks/useUser/useUser.ts'
import { useEffect } from 'react'

const AppLayout = () => {
    const navigate = useNavigate()
    const { data: user, isPending } = useUser()

    useEffect(() => {
        if (!user && !isPending) navigate('/', { replace: true })
    }, [user, isPending, navigate])

    return (
        <>
            <Header />
            <Outlet />
            <AppDialog />
        </>
    )
}

export default AppLayout
