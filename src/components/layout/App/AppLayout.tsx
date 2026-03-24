import Header from '../Header/Header.tsx'
import { Outlet } from 'react-router'

const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default AppLayout
