import { QueryObserverResult, useQuery } from "react-query"
import client from "../../utils/http"
import { AxiosResponse } from "axios";
import { ICar } from "../../types/Car";

export class CarListService {
    static async getCarsList(): Promise<AxiosResponse<ICar[]>> {
        return client.get('/cars')
    }
}

export function useGetCarsList(): QueryObserverResult<ICar[]> {
    return useQuery({
        queryFn: () => CarListService.getCarsList().then(res => res.data),
        queryKey: [`cars`],
    });
}
