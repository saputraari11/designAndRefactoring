class BadCodeExtractVariable {
    private readonly platform;
    private readonly browser;
    private readonly resize;

    renderBanner(): void {
        if ((this.platform.toUpperCase().indexOf("MAC") > -1) &&
             (this.browser.toUpperCase().indexOf("IE") > -1) &&
              this.wasInitialized() && this.resize > 0 )
        {
          // do something
        }
    }

    wasInitialized() {
        return false
    }

}