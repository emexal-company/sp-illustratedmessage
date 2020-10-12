import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-illustratedmessage.styles';
import template from './demo-illustratedmessage.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { IllustratedMessage } from '@spectrum/sp-illustratedmessage';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-illustratedmessage')
export class DemoIllustratedMessage extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-illustratedmessage': DemoIllustratedMessage;
  }
}
