import React from 'react'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {Button} from "@/components/ui/button"
import {Trash} from "lucide-react"
import { useDeleteProduct } from '@/hooks/useDeleteProduct'
function DeleteProductForm({id}) {
const {deleteProduct,isDeleting} = useDeleteProduct()

function handleDelete (){
  try {
    deleteProduct({id})
  } catch (err) {
    console.error(err);
    
  }

}

  return (
   <AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive"><Trash/></Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your account
        from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={handleDelete} >{ isDeleting ? "deleting...":"Delete"}</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
  )
}

export default DeleteProductForm