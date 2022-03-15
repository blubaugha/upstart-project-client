import { InjectionToken } from '@angular/core';

export const SVG_ICON_RESOLVER_CONFIG: InjectionToken<SvgIconResolverConfig> =
  new InjectionToken<SvgIconResolverConfig>('SVG_ICON_RESOLVER_CONFIG');

export interface SvgIconResolverConfig {
  baseUrl: string;
}
