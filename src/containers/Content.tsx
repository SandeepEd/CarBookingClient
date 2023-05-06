import { Route, Routes } from 'react-router-dom'
import routes from '../routes'

function Content() {
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.id} path={route.path} Component={route.component} />
            ))}
        </Routes>
    )
}

export default Content