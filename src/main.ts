import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, Input } from '@angular/core';

@Component({
  selector: 'nl-login', // <nl-login></nl-login>
  templateUrl: './componentA.template.html'
})
export class ComponentA {
  companyName: string = 'Nalys';
  cities: string[] = ['Brussels', 'Amsterdam', 'Lyon'];
  onChange(value: string) {
    this.companyName = value;
  }
}

@Component({
  selector: 'nl-cities',
  template: `
    <h2>Cities</h2>
    <ul *ngIf="render">
      <li ngFor="let city in cities">city</li>
    </ul>
  `
})
export class CitiesComponent {
  @Input('data')
  cities: string[] = [];

  render: boolean = false;
}

@NgModule({
  imports: [BrowserModule],
  declarations: [ComponentA, CitiesComponent]
})
export class ModuleA {}

platformBrowserDynamic().bootstrapModule(ModuleA);
