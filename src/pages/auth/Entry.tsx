import { Suspense, lazy } from 'react'
import { useAuth } from '../../context/AuthContext'
import Loading from '../../reusable/Loading'

const AuthenticatedAppComponent = lazy(() => import('./Authenticated'))
const LogInComponent = lazy(() => import('./LogIn'))


function Entry() {
    const { user } = useAuth()
    console.log(`user :::`, user)
    return (
        <Suspense fallback={<Loading />}>
            {user ? <AuthenticatedAppComponent /> : <LogInComponent />}
        </Suspense>
    )
}

export default Entry