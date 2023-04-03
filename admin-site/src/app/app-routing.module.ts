import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogEditorComponent } from './admin/blog/blog-editor/blog-editor.component';

const routes: Routes = [
  {
    path:'',
    component:BlogEditorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
