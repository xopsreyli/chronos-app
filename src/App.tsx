import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import AppLayout from './components/layout/App/AppLayout.tsx'
import SignIn from './pages/Auth/SignIn/SignIn.tsx'
import SignUp from './pages/Auth/SignUp/SignUp.tsx'

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path={'/signin'} element={<SignIn />} />
                <Route path={'/signup'} element={<SignUp />} />

                <Route path={'/'} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App
