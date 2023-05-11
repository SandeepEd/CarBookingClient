import { lazy } from 'react';

const CarListComponent = lazy(() => import('../pages/cars/CarList'));
const SignUpComponent = lazy(() => import('../pages/auth/SignUp'));
const HomeComponent = lazy(() => import('../pages/home/index'));

export interface CarBookingRoutes {
    id: number;
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

const routes: CarBookingRoutes[] = [
    {
        id: 2,
        path: '/',
        component: HomeComponent,
        exact: true,
    },
    {
        id: 1,
        path: '/cars',
        component: CarListComponent,
        exact: true,
    },
    {
        id: 3,
        path: '/sign-up',
        component: SignUpComponent,
        exact: true,
    },
];

export default routes;