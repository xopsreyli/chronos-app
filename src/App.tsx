import { Routes, Route } from 'react-router'
import Home from './pages/Home/Home'
import AppLayout from './components/layout/App/AppLayout.tsx'

function App() {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path={'/'} element={<Home />} />
            </Route>
        </Routes>
    )
}

export default App
