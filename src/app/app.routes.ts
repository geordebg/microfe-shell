import { Routes } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/native-federation";
import {WrapperComponent} from "./wrapper/wrapper.component";
import {WrapperConfig} from "./shared/wrapper-config/wrapper-config.interface";
import {HomeComponent} from "./home/home.component";

export const APP_ROUTES: Routes = [
  {
    path: 'flights',
    loadChildren: () => loadRemoteModule('mfe1', './routes').then((m) => m.APP_ROUTES)
  },
  {
    path: 'packages',
    loadChildren: () => loadRemoteModule('angular16', './routes').then((m) => m.routes)
  },
  {
    path: 'app',
    loadChildren: () => loadRemoteModule('angular16', './Holidays').then((m) => m.HolidaysComponent)
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'web-components',
    component: WrapperComponent,
    data: {
      config: {
        remoteName: 'mfe1',
        exposedModule: './WebComponents',
        elementName: 'web-components',
      } as WrapperConfig
    }
  }
];
