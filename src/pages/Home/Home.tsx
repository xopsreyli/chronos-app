import useUser from '../../hooks/api/users/current/useUser/useUser.ts'
import Landing from './Landing/Landing.tsx'
import App from './App/App.tsx'
import Loader from '../../components/ui/common/Loader/Loader.tsx'

const Home = () => {
    const { data: user, isPending } = useUser()

    if (isPending) {
        return <Loader isFullScreen />
    }

    return user ? <App /> : <Landing />
}

export default Home
