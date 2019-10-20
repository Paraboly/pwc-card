import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "pwc-card",
  styleUrl: "pwc-card.css",
  shadow: true
})
export class PWCCard {
  render() {
    return (
      <div class="outer-container shadow-xl">
        <div class="inner-container">
          <img class="logo-style" src="../../assets/logo.png" /> {/* Logo */}
          <div class="text-container">
            <h2 class="title-style">Title</h2>
            <p class="desc-style">Description</p>
          </div>
          {/* Text Container */}
        </div>
        {/*  Inner Container */}
      </div>
      /*  Outer Container */
    );
  }
}
