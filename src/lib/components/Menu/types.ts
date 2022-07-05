export type MenuItem = {
  text: string
  href: string
  target?: string
}

export type Menu = MenuItem[]

export enum Position {
  lt,
  rt,
  lb,
  rb
}
