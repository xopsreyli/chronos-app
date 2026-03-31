import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import AppLayout from './components/layout/App/AppLayout.tsx'
import SignIn from './pages/Auth/SignIn/SignIn.tsx'
import SignUp from './pages/Auth/SignUp/SignUp.tsx'
import Root from './components/layout/Root/Root.tsx'
import AuthLayout from './components/layout/Auth/AuthLayout.tsx'
import Calendar from './pages/Calendar/Calendar.tsx'

function App() {
    return (
        <Routes>
            <Route element={<Root />}>
                <Route element={<AuthLayout />}>
                    <Route path={'signin'} element={<SignIn />} />
                    <Route path={'signup'} element={<SignUp />} />
                </Route>
                <Route element={<AppLayout />}>
                    <Route path={'/'} element={<Home />} />
                    <Route path={'calendars'}>
                        <Route path={':id'} element={<Calendar />} />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default App
