import { QueryObserverResult, useQuery } from "react-query"
import client from "../../utils/http"
import { AxiosResponse } from "axios";
import { ICar } from "../../types/Car";
import { useNotification } from "../../context/NotificationProvider";

export class CarListService {
    static async getCarsList(): Promise<AxiosResponse<ICar[]>> {
        return client.get('/cars')
    }
}

export function useGetCarsList(): QueryObserverResult<ICar[]> {
    const { createNotification } = useNotification();
    return useQuery({
        queryFn: () => CarListService.getCarsList().then(res => res.data),
        queryKey: [`cars`],
        onError: (err: any) => {
            createNotification({
                message: err.response.data.message || err.message,
                type: 'error',
            });
        }
    });
}
