import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LivroListaComponent } from "./livro-lista/livro-lista.component";
import { LivroDadosComponent } from "./livro-dados/livro-dados.component";
import { ControleEditoraService } from "./controle-editora.service";
import { ControleLivrosService } from "./controle-livros.service";
import { RouterModule } from "@angular/router";
import { routes } from "./app.routes";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        LivroDadosComponent,
        LivroListaComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        FormsModule
    ],
    providers: [
        ControleEditoraService,
        ControleLivrosService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}