import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SampleComponent } from './sample.component';
// import { SampleDirective } from './sample.directive';
// import { SamplePipe } from './sample.pipe';
import { NgxTourService } from './tour.service';

// export * from './sample.component';
// export * from './sample.directive';
// export * from './sample.pipe';
export * from './tour.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    // SampleComponent,
    // SampleDirective,
    // SamplePipe
  ],
  exports: [
    // SampleComponent,
    // SampleDirective,
    // SamplePipe
  ]
})
export class NgxIntroJsService {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxIntroJsService,
      providers: [NgxTourService]
    };
  }
}
