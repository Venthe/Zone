import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
