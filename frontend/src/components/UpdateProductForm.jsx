import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateProduct } from "@/hooks/useUpdateProduct";
import { Pen } from "lucide-react";
import { useState } from "react";

function UpdateProductForm({ product }) {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const { updateProduct, isUpdating } = useUpdateProduct();
  const [open, setOpen] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name || !quantity || !price) return;
    try {
      updateProduct({
        id: product._id,
        productData: { name, quantity, price },
      });
      setOpen (false)
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <Button variant="boost">
          <Pen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>update {product.name}</DialogTitle>
            <DialogDescription>Update {product.name} here</DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                name="name"
                placeholder="name"
              />
            </Field>
            <Field>
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                type="text"
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                id="quantity"
                name="quantity"
                placeholder="quantity"
              />
            </Field>
            <Field>
              <Label htmlFor="price">Price</Label>
              <Input
                type="text"
                value={price}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                id="price"
                name="price"
                placeholder="price"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={isUpdating}>
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default UpdateProductForm;
