class BadCodeReplaceTemp {
    private quantity:number;
    private itemPrice:number;

    calculateTotal(): number {
        let basePrice = this.quantity * this.itemPrice;
        if (basePrice > 1000) {
          return basePrice * 0.95;
        }
        else {
          return basePrice * 0.98;
        }
    } 
}