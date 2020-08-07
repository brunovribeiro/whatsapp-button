import { LitElement } from 'lit-element';
declare class SnapbotButton extends LitElement {
    icon: string;
    hash: string;
    title: string;
    message: string;
    type: string;
    button: string;
    textCancel: string;
    accountNumber: string;
    cc: string;
    static styles: import("lit-element").CSSResult;
    constructor();
    render(): import("lit-element").TemplateResult;
    firstUpdated(): void;
    loadConfig(): Promise<void>;
    getLinkToRedirect(): Promise<void>;
    sendForm(form: any): Promise<void>;
    __clickIcon(event: any): void;
    __sendForm(): void;
    __cancelForm(): void;
    __openForm(form: any, time?: number): void;
    __closeForm(form: any, time?: number): void;
    __fadeIn(element: any, time: number): void;
    __fadeOut(element: any, time: number): void;
    __processFade(element: any, time: number, initial: number, end: number): void;
    __mascara(event: any): void;
    __telefone(element: any): any;
    __submit(event: MouseEvent): void;
}
export { SnapbotButton };
//# sourceMappingURL=SnapbotButton.d.ts.map