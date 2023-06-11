class BestCodeReplaceTemp {
    private quantity:number;
    private itemPrice:number;

    calculateTotal(): number {
        if (this.basePrice() > 1000) {
          return this.basePrice() * 0.95;
        }
        else {
          return this.basePrice() * 0.98;
        }
    } 

    // create reusable temp in another with create new method

    basePrice():number {
        return this.quantity * this.itemPrice;
    }
}