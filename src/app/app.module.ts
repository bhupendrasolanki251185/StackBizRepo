import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NewColorDirective } from './new-color.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ContentParentComponent } from './content-parent/content-parent.component';
import { ContentChildComponent } from './content-parent/content-child/content-child.component';
import { ChildSubjectComponent } from './content-parent/child-subject/child-subject.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NewColorDirective,
    ParentComponent,
    ChildComponent,
    ContentParentComponent,
    ContentChildComponent,
    ChildSubjectComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
