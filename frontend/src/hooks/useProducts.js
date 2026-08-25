import { getProducts } from "@/services/apiProducts ";
import { useQuery } from "@tanstack/react-query";

export function useProducts (){
    const{isLoading,data:products,error} = useQuery ({
        queryKey:["products"],
        queryFn: getProducts
    })
    return{isLoading,products,error}
}