import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import App from './components/layout/App/App.tsx'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<App />}>
                <Route path={'/'} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
