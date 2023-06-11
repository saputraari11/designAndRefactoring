class BestCodeInline {
    private numberOfLateDeliveries:number;

    getRating(): number {
      return this.numberOfLateDeliveries > 5 ? 2 : 1;
    }
}