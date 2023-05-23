import ILanguage from "./ILanguage";
export default interface IQuote {
  id: number;
  ru_lang: ILanguage;
  en_lang: ILanguage;
}