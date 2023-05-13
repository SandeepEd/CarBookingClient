import { useMutation, useQueryClient } from "react-query";
import { AddCarProps } from "../types/Car";
import client from "../utils/http";

export class CarService {

    static addNewCar(data: AddCarProps) {
        return client.post('/cars/add-car', data)
    }
}

export function useAddNewCar() {

    const qc = useQueryClient();
    return useMutation({
        mutationFn: (data: AddCarProps) => CarService.addNewCar(data),
        onSuccess: () => {
            console.log('success');
            qc.invalidateQueries('cars');
        },
    })
}