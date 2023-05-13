export interface ICar {
    id: number;
    name: string;
    price: number;
    imageSrc: string;
}

export interface AddCarProps {
    name: string;
    price: number;
    imageSrc: string;
}