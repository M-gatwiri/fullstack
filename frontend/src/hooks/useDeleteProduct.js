import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteProduct as deleteProductApi } from "@/services/apiProducts ";

export function useDeleteProduct (){
    const queryClient = useQueryClient()
    const {mutate:deleteProduct,isPending:isDeleting} =useMutation({
        mutationFn:({id}) =>deleteProductApi(id),
        onSuccess:()=> {
            toast.success("Product deleted successfully")
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: ()=>{
            toast.error("failed to delete product")
        }
    })
    return{deleteProduct,isDeleting}

}