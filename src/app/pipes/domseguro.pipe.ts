import { Pipe, PipeTransform, ɵSafeResourceUrl } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domDanitazer: DomSanitizer){}

  transform(value: string, ...args: unknown[]): ɵSafeResourceUrl {
    return this.domDanitazer.bypassSecurityTrustResourceUrl(value)
  }

}
