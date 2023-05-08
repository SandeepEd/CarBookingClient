import { lazy } from 'react';

const CaseListComponent = lazy(() => import('../pages/cars/CarList'));
const SignUpComponent = lazy(() => import('../pages/auth/SignUp'));

export interface CarBookingRoutes {
    id: number;
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

const routes: CarBookingRoutes[] = [
    {
        id: 1,
        path: '/cars',
        component: CaseListComponent,
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