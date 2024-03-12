import { Routes } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/native-federation";
import {WrapperComponent} from "./wrapper/wrapper.component";
import {WrapperConfig} from "./shared/wrapper-config/wrapper-config.interface";

export const APP_ROUTES: Routes = [
  {
    path: 'flights',
    loadChildren: () => loadRemoteModule('mfe1', './routes'),
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
