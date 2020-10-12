import { Base } from '@spectrum/sp-base';
export declare class IllustratedMessage extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    cta: boolean;
    heading: string;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-illustratedmessage': IllustratedMessage;
    }
}
