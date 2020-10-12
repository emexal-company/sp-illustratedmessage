import { html } from 'lit-element';
import { DemoIllustratedMessage } from './demo-illustratedmessage.component';

import '@spectrum/sp-illustratedmessage';
import '@spectrum/sp-container';
import '@spectrum/sp-link';


export default function template(this: DemoIllustratedMessage) {
  return html`
  <sp-container>
  <sp-rule medium label="Illustrated message"></sp-rule>
      <sp-demo width="400" height="500">
        <pre><div style="background-color: #F5F5F5; padding: 8px 0px 8px 0px;">   
  <sp-illustratedmessage heading="Error 404: Page Not Found">
    <p slot="illustratedmessage-description">This page isn't available. Try checking the URL or visit a different page.</p>
  </sp-illustratedmessage>
</div></pre>
      </sp-demo>
      <sp-rule medium label="Illustrated message - Cta"></sp-rule>
      <sp-demo width="300" height="500">
        <pre><div style="background-color: #F5F5F5; padding: 8px 0px 8px 0px;">
  <sp-illustratedmessage cta heading="Drag and Drop Your File">
    <p slot="illustratedmessage-description">
      <sp-link path="/illustratedmessage" label="Select a File"></sp-link>
      from your computer<br>or
      <sp-link path="/illustratedmessage" label="Search Adobe Stock"></sp-link>
    </p>
  </sp-illustratedmessage>
</div></pre>
      </sp-demo>
  </sp-container>
  `;
}
