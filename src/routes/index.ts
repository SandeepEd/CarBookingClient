import { lazy } from 'react';

const CarListComponent = lazy(() => import('../pages/cars/CarList'));
const SignUpComponent = lazy(() => import('../pages/auth/SignUp'));
const HomeComponent = lazy(() => import('../pages/home/index'));
const AddCarComponent = lazy(() => import('../pages/addCar/AddCar'));
const checkoutComponent = lazy(() => import('../pages/checkOut/CheckOut'));

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
        path: '/add-car',
        component: AddCarComponent,
        exact: true,
    },
    {
        id: 4,
        path: '/sign-up',
        component: SignUpComponent,
        exact: true,
    },
    {
        id: 5,
        path: '/check-out',
        component: checkoutComponent,
        exact: true,
    },
];

export default routes;