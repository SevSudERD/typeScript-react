export interface BadgeInterface {
  text: string;
  filled?: boolean;
}

export interface ButtonInterface {
  text: string;
  filled?: boolean;
  type: string;
  href: string;
  icon?: JSX.Element;
}

export interface CardInterface {
  indicator?: string,
  badge?: BadgeInterface,
  image?: string,
  title: string,
  subtitle?: string,
  body: string,
  btn: ButtonInterface,
}
