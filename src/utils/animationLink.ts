import { gsap } from 'gsap'

type Dom = {
  el: HTMLElement,
  text?: HTMLElement,
  line?: HTMLElement
  feTurbulence?: SVGFETurbulenceElement
  feDisplacementMap?: SVGFEDisplacementMapElement
}


class BaseAnimationLink {
  protected dom: Dom
  protected tl: GSAPTimeline | undefined
  protected filterId: string | undefined

  private onMouseEnterFn: (() => void) | undefined
  private onMouseLeaveFn: (() => void) | undefined

  constructor(el: HTMLElement,) {
    this.dom = { el }

    this.initEvent()
  }

  initEvent() {
    this.onMouseEnterFn = () => {
      this.tl ? this.tl.restart() : void 0
    }
    this.onMouseLeaveFn = () => {
      this.tl ? this.tl.progress(1).kill() : void 0
    }
    this.dom.el.addEventListener('mouseenter', this.onMouseEnterFn)
    this.dom.el.addEventListener('mouseleave', this.onMouseLeaveFn)
  }

  createTimeline() {
    this.tl = gsap.timeline({
      paused: true,
      onStart: () => {
        this.dom.el.style.filter = `url(${this.filterId})`
      },
      onComplete: () => {
        this.dom.el.style.filter = `none`
      }
    })
  }
}

export class AnimationLink1 extends BaseAnimationLink {
  private primitiveValues: { turbulence: number }

  constructor(el: HTMLElement) {
    super(el)
    this.filterId = '#filter-1'
    this.dom.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`)!
    this.primitiveValues = { turbulence: 0 }
    this.createTimeline()
    this.tl!.eventCallback('onUpdate', () => {
      this.dom.feTurbulence!.setAttribute('baseFrequency', this.primitiveValues.turbulence + '')
    })
    this.tl!.to(this.primitiveValues, {
      duration: 1.5,
      ease: 'circ.out',
      startAt: { turbulence: 0.15 },
      turbulence: 0
    })
  }
}

export class AnimationLink2 extends BaseAnimationLink {
  private primitiveValues: { scale: number }

  constructor(el: HTMLElement) {
    super(el)
    this.filterId = '#filter-2'
    this.dom.feDisplacementMap = document.querySelector(`${this.filterId} > feDisplacementMap`)!
    this.primitiveValues = { scale: 0 }
    this.createTimeline()
    this.tl!.eventCallback('onUpdate', () => {
      this.dom.feDisplacementMap!.scale.baseVal = this.primitiveValues.scale
    })
    this.tl!
      .to(this.primitiveValues, {
        duration: 1,
        ease: 'back.out(3)',
        startAt: {scale: 100},
        scale: 0
      })
  }
}

export class AnimationLink3 extends BaseAnimationLink {
  private primitiveValues: { turbulence: number }

  constructor(el: HTMLElement) {
    super(el)
    this.filterId = '#filter-3'
    this.dom.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`)!
    this.primitiveValues = { turbulence: 0 }
    this.createTimeline()
    this.tl!.eventCallback('onUpdate', () => {
      this.dom.feTurbulence!.setAttribute('baseFrequency', this.primitiveValues.turbulence + '')
    })
    this.tl!
      .to(this.primitiveValues, {
        duration: 1,
        ease: 'step(12)',
        startAt: {turbulence: 0.05},
        turbulence: 0
      })
  }
}

export class AnimationLink4 extends BaseAnimationLink {
  private primitiveValues: { scale: number }

  constructor(el: HTMLElement) {
    super(el)
    this.filterId = '#filter-4'
    this.dom.feDisplacementMap = document.querySelector(`${this.filterId} > feDisplacementMap`)!
    this.primitiveValues = { scale: 0 }
    this.createTimeline()
    this.tl!.eventCallback('onUpdate', () => {
      this.dom.feDisplacementMap!.scale.baseVal = this.primitiveValues.scale
    })
    this.tl!
      .to(this.primitiveValues, {
        duration: 0.7,
        startAt: { scale: 100 },
        ease: "rough({ template: none.out, strength: 2, points: 120, taper: 'none', randomize: true, clamp: false})",
        scale: 0
      }, 0)
      .to(this.dom.line!, {
        duration: 0.7,
        startAt: { y: -10 },
        ease: 'expo.out',
        y: 0
      }, 0);
  }
}

export class AnimationLink5 extends BaseAnimationLink {
  private primitiveValues: { turbulence: number }

  constructor(el: HTMLElement) {
    super(el)
    this.filterId = '#filter-5'
    this.dom.feTurbulence = document.querySelector(`${this.filterId} > feTurbulence`)!
    this.primitiveValues = { turbulence: 0 }
    this.createTimeline()
    this.tl!.eventCallback('onUpdate', () => {
      this.dom.feTurbulence!.setAttribute('baseFrequency', this.primitiveValues.turbulence + '')
    })
    this.tl!.to(this.primitiveValues, {
      duration: 0.6,
      ease: 'power2.out',
      startAt: { turbulence: 0 },
      turbulence: 1
    })
  }
}
