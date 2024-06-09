import { Injectable } from '@angular/core';
import { faCoffee, faUser, faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

const ICONS = {
  faCoffee,
  faUser,
  faHome,
};

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  private icons: { [key: string]: IconDefinition } = ICONS;
  private iconMap: { [key: string]: string } = {};

  constructor(private http: HttpClient) {}

  loadIcons(): Observable<void> {
    return this.http.get<{ [key: string]: string }>('./assets/icons.json').pipe(
      tap((iconMap) => {
        this.iconMap = iconMap;
      }),
      map(() => void 0)
    );
  }

  getIcon(name: string): IconDefinition {
    const iconKey = this.iconMap[name];
    return this.icons[iconKey];
  }
}
