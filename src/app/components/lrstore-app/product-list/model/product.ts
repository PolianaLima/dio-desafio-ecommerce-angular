export class Product{
  id: number;
  name:string;
  marca:string;
  price: number;
  quantity: number;
  category:string;
  img: string

constructor(id: number, name: string, price: number, quantity: number, category: string, img: string, marca: string){
  this.id = id,
  this.name = name,
  this.marca = marca,
  this.price = price,
  this.quantity = quantity,
  this.category = category,
  this.img = img
}

}


