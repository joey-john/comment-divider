import { languages, TextLine } from 'vscode';

export type Action = (type: PresetId, line: TextLine, lang: string) => void;

export type PresetId = 'subheader' | 'mainHeader' | 'line';

export type Height = 'line' | 'block';
export type Align = 'left' | 'center' | 'right';
export type Transform = 'uppercase' | 'lowercase' | 'titlecase' | 'none';

export type CharList = string[];

export interface ILimiters {
  left: string;
  right: string;
}

export interface LanguageConfig {
  solidLineSym: string;
  wordLineSym: string;
  blockSym: string;
  limiters: ILimiters;
}

export interface IPreset {
  lineLen: number;
  height: Height;
  align: Align;
  transform: Transform;
  includeIndent: boolean;
}

export interface IConfig extends IPreset, LanguageConfig { }

export interface IWordsAnchors {
  leftAnchor: number;
  rightAnchor: number;
}

export interface ILanguagesMapConfig {
  [languages: string]: LanguageConfig
}
