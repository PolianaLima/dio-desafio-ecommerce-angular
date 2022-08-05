import { Injectable } from "@angular/core";
import { Product } from "../model/product";

@Injectable
({
  providedIn: 'root'
})



export class ProductService{
  retrieveAll(): Product[]{
    return PRODUCTS ;
}
}

var PRODUCTS: Product[] = [
  {
      id: 1,
      name: 'Produto Fake 01',
      price: 55.28,
      marca:'Natura',
      quantity: 5,
      category: "Perfumes",
      img: "/assets/img/fake01.jpg",


  },
  {
    id: 2,
    name: 'Produto Fake 01',
    price: 55.28,
    marca:'Natura',
    quantity: 5,
    category: "Perfumes",
    img: "/assets/img/fake01.jpg"

},
{
  id: 3,
  name: 'Produto Fake 01',
  price: 55.28,
  marca:'Natura',
  quantity: 5,
  category: "Perfumes",
  img: "/assets/img/fake01.jpg"

},
{
  id: 4,
  name: 'EssencialEssencial Deo Parfum Feminino',
  price: 55.28,
  marca:'Natura',
  quantity: 5,
  category: "Perfumes",
  img: "/assets/img/fake02.jpg"

},
{
  id: 5,
  name: 'Produto Fake 01',
  price: 55.28,
  marca:'Natura',
  quantity: 5,
  category: "Perfumes",
  img: "/assets/img/fake02.jpg"

},
{
  id: 6,
  name: 'Produto Fake 01',
  price: 55.28,
  marca:'Natura',
  quantity: 5,
  category: "Perfumes",
  img: "/assets/img/fake01.jpg"

}
];
