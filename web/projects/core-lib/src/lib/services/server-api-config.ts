import { InjectionToken } from '@angular/core';

export const SERVER_API_CONFIG: InjectionToken<ServerApiConfig> =
  new InjectionToken<ServerApiConfig>('SERVER_API_CONFIG');

export interface ServerApiConfig {
  baseUrl: string;
}
