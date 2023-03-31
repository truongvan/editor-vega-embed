import "./index.css";
type ConstructorOptions = {
    data: {
        source: string;
    };
};
declare class VegaLite {
    data: {
        source: string;
    };
    wrapper: HTMLElement | null;
    constructor({ data }: ConstructorOptions);
    static get toolbox(): {
        title: string;
        icon: string;
    };
    render(): HTMLElement;
    private _view;
    save(): {
        source: string;
    };
    validate(savedData: {
        source: string;
    }): boolean;
    static get isReadOnlySupported(): boolean;
}
export default VegaLite;
