import { workspace } from 'vscode';

import { EXT_ID } from './constants';
import { getLanguageConfig } from './limiters';
import {
  LanguageConfig,
  IPreset,
  IConfig,
  PresetId,
  Height,
  Align,
  Transform,
  ILanguagesMapConfig
} from './types';

// Default Line Filler Symbols 
export const default_solidLineSym = workspace.getConfiguration(EXT_ID).get<string>('lineFiller');
export const default_wordLineSym = workspace.getConfiguration(EXT_ID).get<string>('subheaderFiller');
export const default_blockSym = workspace.getConfiguration(EXT_ID).get<string>('mainHeaderFiller');

const getPreset = (type: PresetId): IPreset => {
  const section = workspace.getConfiguration(EXT_ID);

  const lineLen = section.get<number>('length');
  const height = section.get<Height>(`${type}Height`);
  const align = section.get<Align>(`${type}Align`);
  const transform = section.get<Transform>(`${type}Transform`);
  const includeIndent = section.get<boolean>(`shouldLengthIncludeIndent`);

  return { lineLen, height, align, transform, includeIndent };
};

const getLanguagesMapConfig = () =>
  workspace.getConfiguration(EXT_ID).inspect('languagesMap')
    .globalValue as ILanguagesMapConfig;

const mergePresetWithLanguageConfig = (preset: IPreset, config: LanguageConfig): IConfig => ({
  ...preset,
  ...config
});

export const getConfig = (presetId: PresetId, lang: string): IConfig =>
  mergePresetWithLanguageConfig(
    getPreset(presetId),
    getLanguageConfig(lang, getLanguagesMapConfig)
  );
