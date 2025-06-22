import {Movies} from "./Movies";

export default class Cart implements Movies {
  constructor (
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly slogan: string,
    readonly genre: string,
    readonly time: number,
    readonly price: number,
    readonly id: number,
    private _items: Movies[] = [],
  ) {

  }

 

  add(item: Movies): void {
    this._items.push(item)
  }

  get items(): Movies[] {
    return [...this._items]
  }

  calculateSum(): number {
    return this._items.reduce((sum, product) => sum + product.price, 0);
  }

  calculateSumDiscount (discountedAmount: number): number {
    const sum = this.calculateSum();
    return sum - (sum * discountedAmount) / 100;
  }

  deleteProduct(id: number): Movies[] {
    
    const initialLength = this._items.length;
    
    this._items = this._items.filter(item => item.id !== id);
    
    if (this._items.length === initialLength) {
        console.error(`Продукта с id ${id} не существует`);
    }
    
    return [...this._items];
  }
}

