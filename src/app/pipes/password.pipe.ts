import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, demas: boolean = true): string {
    
    return (demas) ? '*'.repeat(value.length) : value;
  }
}
