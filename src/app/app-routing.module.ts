import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { CreateQuestionComponent } from "./questions/createquestion/createquestion.component";
import { CreateQuestionPageComponent } from "./pages/create-question-page/create-question-page.component";

const routes: Routes = [
  { path: 'createQuestionPage', component: CreateQuestionPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
