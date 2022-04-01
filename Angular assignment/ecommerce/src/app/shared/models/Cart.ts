import { CartItem } from "./CartItem";

export class Cart{
    citems:CartItem [] = [];
    get totalPrice():number{
        let totalPrice = 0;
        this.citems.forEach(citem => {
            totalPrice += citem.price;
        });
        return totalPrice;
    }
}