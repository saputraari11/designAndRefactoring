class BadCodeInline {
    private numberOfLateDeliveries:number;

    getRating(): number {
      return this.moreThanFiveLateDeliveries() ? 2 : 1;
    }

    moreThanFiveLateDeliveries(): boolean {
      return this.numberOfLateDeliveries > 5;
    }
}