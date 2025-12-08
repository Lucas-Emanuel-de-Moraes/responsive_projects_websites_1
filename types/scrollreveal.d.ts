declare module "scrollreveal" {
  export interface ScrollRevealOptions {
    origin?: "top" | "bottom" | "left" | "right";
    distance?: string;
    duration?: number;
    delay?: number;
    interval?: number;
    opacity?: number;
    scale?: number;
    reset?: boolean;
    easing?: string;
  }

  export interface ScrollRevealObject {
    reveal(
      target: string | Element | Element[] | NodeListOf<Element>,
      options?: ScrollRevealOptions
    ): void;
  }

  export default function ScrollReveal(options: ScrollRevealOptions): ScrollRevealObject;
}
