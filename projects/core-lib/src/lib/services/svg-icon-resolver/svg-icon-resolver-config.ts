import { InjectionToken } from '@angular/core';

export const SVG_ICON_RESOLVER_CONFIG: InjectionToken<string> = new InjectionToken<string>('SVG_ICON_RESOLVER_CONFIG');

export interface SvgIconResolverConfig {
  baseUrl: string;
}
