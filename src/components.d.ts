/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcCard {}
}

declare global {


  interface HTMLPwcCardElement extends Components.PwcCard, HTMLStencilElement {}
  const HTMLPwcCardElement: {
    prototype: HTMLPwcCardElement;
    new (): HTMLPwcCardElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-card': HTMLPwcCardElement;
  }
}

declare namespace LocalJSX {
  interface PwcCard {}

  interface IntrinsicElements {
    'pwc-card': PwcCard;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-card': LocalJSX.PwcCard & JSXBase.HTMLAttributes<HTMLPwcCardElement>;
    }
  }
}


