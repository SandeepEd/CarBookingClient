import { ICar } from "./Car";

export interface ICheckout {
    id: number;
    carId: number;
    userId: number;
    quantity: number;
    car?: ICar;
}