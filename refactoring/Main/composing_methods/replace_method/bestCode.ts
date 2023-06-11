class BestCodeReplaceMethod {
   price(allParams:any): number {
        return new PriceCalculator(allParams).compute()
   }
}

class PriceCalculator {
    private _primaryBasePrice: number;
    private _secondaryBasePrice: number;
    private _tertiaryBasePrice: number;
    
    constructor(allParams:any) {
      // Copy relevant information from the
      // order object.
    }
    
    compute(): number {
      // Perform long computation.
      return 10;
    }
  }