export interface IEmailSection {
  id: string;
  imageUrl: string;
  redirectUrl: string;
  altText: string;
}

export interface IEmailData {
  title: string;
  preheader: string;
  sections: IEmailSection[];
}