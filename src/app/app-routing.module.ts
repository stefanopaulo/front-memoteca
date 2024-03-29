import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarPensamentoComponent} from "./components/pensamentos/listar-pensamento/listar-pensamento.component";
import {CriarPensamentoComponent} from "./components/pensamentos/criar-pensamento/criar-pensamento.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: 'listar-pensamento',
    pathMatch: 'full'
  },
  {
    path: "listar-pensamento",
    component: ListarPensamentoComponent
  },
  {
    path: "criar-pensamento",
    component: CriarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
