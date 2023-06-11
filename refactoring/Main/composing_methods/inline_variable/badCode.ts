class BadCodeInlineVariable {
    hasDiscount(): boolean {
        let basePrice: number = this.basePrice();
        return basePrice > 1000;
    } 

    basePrice(){
        return 10;
    }
}