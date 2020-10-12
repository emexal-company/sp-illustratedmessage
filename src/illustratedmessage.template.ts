import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import { IllustratedMessage } from './illustratedmessage.component';

import '@spectrum/sp-icon';

export default function template(this: IllustratedMessage) {

    const classes = {
        'spectrum-IllustratedMessage--cta': this.cta
    }

    return html`
    <div class="spectrum-IllustratedMessage ${classMap(classes)}">
        <svg class="spectrum-IllustratedMessage-illustration" xmlns="http://www.w3.org/2000/svg" width="200" height="98" viewBox="0 0 199 97.7"><defs><style>.cls-1,.cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round;}.cls-1{stroke-width:3px;}.cls-2{stroke-width:2px;}</style></defs><title>Asset 1</title><g id="Layer_2" data-name="Layer 2"><g id="illustrations"><path class="cls-1" d="M110.53,85.66,100.26,95.89a1.09,1.09,0,0,1-1.52,0L88.47,85.66"/><line class="cls-1" x1="99.5" y1="95.5" x2="99.5" y2="58.5"/><path class="cls-1" d="M105.5,73.5h19a2,2,0,0,0,2-2v-43"/><path class="cls-1" d="M126.5,22.5h-19a2,2,0,0,1-2-2V1.5h-31a2,2,0,0,0-2,2v68a2,2,0,0,0,2,2h19"/><line class="cls-1" x1="105.5" y1="1.5" x2="126.5" y2="22.5"/><path class="cls-2" d="M47.93,50.49a5,5,0,1,0-4.83-5A4.93,4.93,0,0,0,47.93,50.49Z"/><path class="cls-2" d="M36.6,65.93,42.05,60A2.06,2.06,0,0,1,45,60l12.68,13.2"/><path class="cls-2" d="M3.14,73.23,22.42,53.76a1.65,1.65,0,0,1,2.38,0l19.05,19.7"/><path class="cls-1" d="M139.5,36.5H196A1.49,1.49,0,0,1,197.5,38V72A1.49,1.49,0,0,1,196,73.5H141A1.49,1.49,0,0,1,139.5,72V32A1.49,1.49,0,0,1,141,30.5H154a2.43,2.43,0,0,1,1.67.66l6,5.66"/><rect class="cls-1" x="1.5" y="34.5" width="58" height="39" rx="2" ry="2"/></g></g></svg>
        <h2 class="spectrum-Heading--pageTitle spectrum-IllustratedMessage-heading">${this.heading}</h2>
        <p class="spectrum-Body--secondary spectrum-IllustratedMessage-description"><slot name="illustratedmessage-description"></slot></p>
    </div>
    `;
}