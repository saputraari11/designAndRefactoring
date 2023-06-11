class BadCodeSplitTemp {
    private height:number;
    private width:number;

    basePrint() {
        let temp = 2 * (this.height + this.width);
        console.log(temp);
        temp = this.height * this.width;
        console.log(temp);
    }
}