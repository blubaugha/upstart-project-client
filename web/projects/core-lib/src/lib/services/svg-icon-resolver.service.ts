import { Inject, Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry, SafeResourceUrlWithIconOptions } from '@angular/material/icon';
import { SVG_ICON_RESOLVER_CONFIG, SvgIconResolverConfig } from './svg-icon-resolver-config';

@Injectable({
  providedIn: 'root'
})
export class SvgIconResolverService {
  constructor(
    private domSanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry,
    @Inject(SVG_ICON_RESOLVER_CONFIG) private config: SvgIconResolverConfig) {
    this.iconRegistry.addSvgIconResolver(this.resolveUrl.bind(this));
  }

  resolveUrl(name: string, namespace: string): SafeResourceUrl | SafeResourceUrlWithIconOptions | null {
    let url = this.config.baseUrl;

    if (namespace) {
      url += `/${namespace}`;
    }

    if (name) {
      url += `/${name}.svg`;
    }

    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
