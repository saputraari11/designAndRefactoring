class BestCodeExtractVariable {
    private readonly platform;
    private readonly browser;
    private readonly resize;

    renderBanner(): void {
        const isMaxOs = (this.platform.toUpperCase().indexOf("MAC") > -1)
        const isIE = (this.browser.toUpperCase().indexOf("IE") > -1)
        const wasResized = this.resize > 0

        if ( isMaxOs && isIE && this.wasInitialized() &&  wasResized)
        {
          // do something
        }
    }

    wasInitialized() {
        return false
    }

}