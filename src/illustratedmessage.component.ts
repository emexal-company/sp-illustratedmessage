import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import illustratedmessageStyles from './illustratedmessage.styles';
import template from './illustratedmessage.template';

@customElement('sp-illustratedmessage')
export class IllustratedMessage extends Base {
  public static componentStyles = [ illustratedmessageStyles ];

  @property({ type: Boolean }) cta = false;
  @property({ type: String }) heading = '';
  
  protected render() {
    return template.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-illustratedmessage': IllustratedMessage;
  }
}
