import "./index.css";
import embed from "vega-embed";

type ConstructorOptions = {
    data: { source: string };
};

class VegaLite {
    data: { source: string };
    wrapper: HTMLElement | null;

    constructor({ data }: ConstructorOptions) {
        this.data = data;
        this.wrapper = null;
    }

    static get toolbox(): { title: string; icon: string } {
        return {
            title: "Vega Lite",
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 48.08"><defs><style>.cls-1{fill:#fbc02d;}.cls-2{fill:#0692f2;}.cls-3{fill:#2450b2;}.cls-4{opacity:0.3;}</style></defs><title>VL_Color</title><g id="Layer_2" data-name="Layer 2"><g id="VL_Color"><polygon class="cls-1" points="37 48 64 48 64 36 50 36 50 0 37 0 37 48"/><polygon class="cls-2" points="17 48 33 48 16 0 0 0 17 48"/><polygon class="cls-3" points="33 48 17 48 34 0 50 0 33 48"/><polygon class="cls-4" points="17 48.08 25 25.5 23.87 22.3 17 48.08"/><polyline class="cls-4" points="37 42.24 37 36.79 50 0.08"/></g></g></svg>',
        };
    }

    render(): HTMLElement {
        this.wrapper = document.createElement("div");
        this.wrapper.classList.add("vega-lite");

        if (this.data.source) {
            this._view(this.data.source);
            return this.wrapper;
        }

        const input = document.createElement("input");
        input.value = this.data.source;
        input.placeholder = "Paste an Vega Lite Spec...";
        input.addEventListener("paste", (event: ClipboardEvent) => {
            if (event.clipboardData) {
                const source = event.clipboardData.getData("text");
                this.data.source = source;
                this._view(source);
            }
        });

        this.wrapper.appendChild(input);
        return this.wrapper;
    }

    private _view(vegaLiteText: string): void {
        const vegaLiteSpec = JSON.parse(vegaLiteText);
        if (this.wrapper) {
            embed(this.wrapper, vegaLiteSpec);
        }
    }

    save(): { source: string } {
        return {
            source: this.data.source,
        };
    }

    validate(savedData: { source: string }): boolean {
        return savedData.source.trim().length > 0;
    }

    static get isReadOnlySupported() {
        return false;
    }
}
export default VegaLite;
