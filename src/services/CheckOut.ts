import { Query, QueryObserverResult, useMutation, useQuery, useQueryClient } from "react-query";
import client from "../utils/http";
import { ICheckout } from "../types/Checkout";

export class CheckOutService {
    static addItem(carId: number) {
        return client.post(`/checkout/add/${carId}`);
    }

    static deleteItem(id: number) {
        return client.delete(`/checkout/${id}`);
    }

    static getItems() {
        return client.get('/checkout');
    }

}

export function useGetCheckoutItems(): QueryObserverResult<ICheckout[]> {
    return useQuery({
        queryFn: () => CheckOutService.getItems().then(res => res.data),
        queryKey: [`checkout-items`],
    });
}

export function useDeleteCheckoutItem() {

    const qc = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => CheckOutService.deleteItem(id),
        onSuccess: () => {
            qc.invalidateQueries('checkout-items');
        }
    });
}

export function useAddCheckoutItem() {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: (carId: number) => CheckOutService.addItem(carId),
        onSuccess: () => {
            qc.invalidateQueries('checkout-items');
        }
    });
}