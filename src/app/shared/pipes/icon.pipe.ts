import { Pipe, PipeTransform } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IconsService } from '../services/icons.service';

@Pipe({
  name: 'icon',
})
export class IconPipe implements PipeTransform {
  constructor(private _iconService: IconsService) {}

  transform(value: string): IconDefinition {
    return this._iconService.getIcon(value);
  }
}
