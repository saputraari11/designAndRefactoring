class BestCodeExtract {
    private readonly age;

    private printOwing(): void {
        this.printBanner();
    
        // Print details.
        this.printDetails();
    }

    private printBanner(){
        // example of another function
    }

    private getOutstanding() {
        // example of another function
    }

    private printDetails() {
        console.log("age: " + this.age); console.log("amount: " + this.getOutstanding());
    }
}