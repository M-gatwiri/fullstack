import { useMutation, useQueryClient } from "@tanstack/react-query";
import {updateProduct as updateProductApi} from "@/services/apiProducts "
import { toast } from "sonner";

export function useUpdateProduct (){
    const queryClient = useQueryClient ()
    const {mutate:updateProduct,isPending:isUpdating} = useMutation({
        mutationFn:({id,productData})=>
updateProductApi(id,productData),
    onSuccess:()=>{
        toast.success("Product updated successfully!")
        queryClient.invalidateQueries({
            queryKey: ["products"]
        })
    },
onError:(err)=>
    toast.error(err.message)
  })

return{updateProduct,isUpdating}
}