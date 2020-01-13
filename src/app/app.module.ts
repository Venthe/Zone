import {NgModule} from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {BrowserModule} from "@angular/platform-browser";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {AppComponent} from "./app.component";
import {AppEffects} from "./store/app.effects";
import {reducers} from "./store/app.reducers";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    StoreModule.forRoot(reducers, {
      initialState: {},
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    EffectsModule.forRoot([AppEffects]),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({}),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
