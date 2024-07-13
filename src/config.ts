import { workspace } from 'vscode';

import { EXT_ID } from './constants';
import { getLanguageDefaultLimiters, wrapLimiters } from './limiters';
import { IConfig, PresetId, Height, Align, Transform, ILanguagesMapConfig, ILimiters } from './types';

// Default Line Filler Symbols 
export const defaultLimiters: ILimiters = (([left, right]) => ({ left, right }))(workspace.getConfiguration(EXT_ID).get('limiters'));
console.log("Default Limiters", defaultLimiters); // DELETE:

const getDefaultConfig = (type: PresetId, lang: string): IConfig => {
  const section = workspace.getConfiguration(EXT_ID);

  const lineLen: number = section.get('lineLen');
  const includeIndent: boolean = section.get('shouldLengthIncludeIndent');
  const height: Height = section.get(`${type}.height`);
  const align: Align = section.get(`${type}.align`);
  const transform: Transform = section.get(`${type}.transform`);
  const filler: string = section.get(`${type}.filler`);

  const limiters: ILimiters = getLanguageDefaultLimiters(lang);

  return {
    lineLen,
    includeIndent,
    height,
    align,
    transform,
    filler,
    limiters
  };
};

/**
 * gets the comment-divider.languagesMap object from configuration
 * @returns function call of comment-divider.languagesMap
 */
const getLanguagesMapConfig = () =>
  workspace.getConfiguration(EXT_ID).inspect('languagesMap')
    .globalValue as ILanguagesMapConfig;


/** 
 *  Creates a Language IConfig Object
 *  @returns: IConfig interface where userLangaugesMap[language] overrides default values if they exist
 */
export function getLanguageConfig(
  language: string,
  presetId: PresetId,
  defaults: IConfig,
  getUserLanguagesMap: () => ILanguagesMapConfig
): IConfig {

  const userLanguagesMap = getUserLanguagesMap();

  /// Partial Config from Language Map
  const userLanguageConfig: Partial<IConfig> = userLanguagesMap[language]?.[presetId] || {};

  // Handle Limiters
  let userLimiters = userLanguagesMap[language]?.limiters;
  const limiters: ILimiters = userLimiters !== undefined ?
    wrapLimiters(userLimiters[0], userLimiters[1] || '') : defaults.limiters;

  // Return Config Value (userLanguageConfig overwrites any defined values in defaults)
  const config: IConfig = {
    ...defaults,
    ...userLanguageConfig,
    limiters: limiters
  };

  console.log("New Config", config); // DELETE:
  return config;
}

/**
 *  Call getLanguageConfig and return a config
 *  @returns: IConfig the config for the language or defaults
 */
export const getConfig = (presetId: PresetId, lang: string): IConfig => {
  const defaultConfig = getDefaultConfig(presetId, lang);
  console.log("Default Config:", defaultConfig); // DELETE:
  return getLanguageConfig(lang, presetId, defaultConfig, getLanguagesMapConfig);
}

