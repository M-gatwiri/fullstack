import { useProducts } from "@/hooks/useProducts";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UpdateProductForm from "./UpdateProductForm";
import {formatDate} from "@/lib/utils"
import DeleteProductForm from "./DeleteProductForm"

function ProductsTable() {
  const { isLoading, error, products } = useProducts();
  console.log(products);

  return (
    <Table>
      <TableCaption>A list of your recent products.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead className="text-right">Updated at</TableHead>
          <TableHead className="text-right"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <TableRow key={product._id}>
            <TableCell className="font-medium">{product.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell className="text-right">{formatDate(product.updatedAt)}</TableCell>
            <TableCell className="text-right flex item-centre gap-2"><UpdateProductForm product={product} key={product._id}/> <DeleteProductForm id={product._id}/></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default ProductsTable;
