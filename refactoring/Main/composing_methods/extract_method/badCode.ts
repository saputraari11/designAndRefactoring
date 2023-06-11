class BadCodeExtract {
    private readonly age;

    private printOwing(): void {
        this.printBanner();
    
        // Print details.
        console.log("age: " + this.age);
        console.log("amount: " + this.getOutstanding());
    }

    private printBanner(){
        // example of another function
    }

    private getOutstanding() {
        // example of another function
    }
}