export class Product{
  id: number;
  name:string;
  price: number;
  quantity: number;
  category:string;
  img: string

constructor(id: number, name: string, price: number, quantity: number, category: string, img: string){
  this.id = id,
  this.name = name,
  this.price = price,
  this.quantity = quantity,
  this.category = category,
  this.img = img
}

}


