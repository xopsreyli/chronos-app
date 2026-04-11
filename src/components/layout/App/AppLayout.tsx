import Header from '../Header/Header.tsx'
import { Outlet } from 'react-router'
import AppDialog from '../../ui/app/AppDialog/AppDialog.tsx'

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <AppDialog />
        </>
    )
}

export default AppLayout
