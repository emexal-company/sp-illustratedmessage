import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import illustratedmessageStyles from './illustratedmessage.styles';
import template from './illustratedmessage.template';
let IllustratedMessage = class IllustratedMessage extends Base {
    constructor() {
        super(...arguments);
        this.cta = false;
        this.heading = '';
    }
    render() {
        return template.call(this);
    }
};
IllustratedMessage.componentStyles = [illustratedmessageStyles];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], IllustratedMessage.prototype, "cta", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], IllustratedMessage.prototype, "heading", void 0);
IllustratedMessage = __decorate([
    customElement('sp-illustratedmessage')
], IllustratedMessage);
export { IllustratedMessage };
//# sourceMappingURL=illustratedmessage.component.js.map