import { loadRemoteModule } from '@angular-architects/native-federation';
import {Component, ElementRef, inject, Input, Injector, OnInit} from '@angular/core';
import {initWrapperConfig} from "../shared/wrapper-config/wrapper-config.interface";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css'
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef)
  @Input() config = initWrapperConfig;
  constructor(private readonly injector: Injector) {

  }
  async ngOnInit(): Promise<void> {
    const {exposedModule, remoteName, elementName} = this.config;

    const m = await loadRemoteModule('mfe1', './WebComponents');
    new m.WebComponentWrapper(this.injector).ngOnInit();

    const root = document.createElement('web-components');
    this.elm.nativeElement.appendChild(root);
  }
}
