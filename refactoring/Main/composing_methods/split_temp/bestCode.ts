class BestCodeSplitTemp {
    private height:number;
    private width:number;

    basePrint() {
        const perimeter = 2 * (this.height + this.width);
        console.log(perimeter);
        const area = this.height * this.width;
        console.log(area);
    }
}