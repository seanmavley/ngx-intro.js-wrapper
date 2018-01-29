import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxTourService } from './tour.service';

export * from './tour.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ],
  exports: [ ]
})
export class NgxIntroJsService {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxIntroJsService,
      providers: [NgxTourService]
    };
  }
}
