import useUser from '../../hooks/useUser/useUser.ts'
import Landing from './Landing/Landing.tsx'
import App from './App/App.tsx'

const Home = () => {
    const { data: user } = useUser()

    return user ? <App /> : <Landing />
}

export default Home
