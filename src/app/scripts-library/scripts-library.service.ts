import {Injectable} from "@angular/core";
import {GlobalVariables} from "./scripts.model";
import {ScriptsProvider} from "./scripts.provider";
import {Store} from "@ngrx/store";
import {selectAppFeature} from "../state/app.selector";
import {GlobalState} from "../state/app.reducer";

@Injectable({
  providedIn: "root",
})
export class ScriptsLibraryService {
  globalVariables: GlobalVariables;

  constructor(private readonly scripts: ScriptsProvider, private readonly store: Store<GlobalState>) {
    store.select(selectAppFeature).subscribe(state => this.globalVariables = state);
  }

  execute(scriptName: string, props: object & { globalVariablesOverride?: object } = {}) {
    const {globalVariablesOverride, ...propsWithoutOverrides} = props;

    // const newScriptsLibrary = this.overrideGlobalVariables(globalVariablesOverride);

    const script = this.scripts.execute(scriptName, {...this.globalVariables, ...globalVariablesOverride});
    const result = script.script({scriptsLibrary: this, ...this.globalVariables, ...script.globalVariables});
    console.debug("Executing script.", `scriptName:${scriptName}`, "props:", props, "globalVariables:", this.globalVariables, "result:", result);
    return result;
  }

  // private overrideGlobalVariables(globalVariablesOverride: object | undefined) {
  //     if (!globalVariablesOverride) {
  //         return this;
  //     }
  //     console.warn("Script overrides found.", "globalVariablesOverride:", globalVariablesOverride)
  //     const newScriptsLibrary = new ScriptsLibraryService(this.scripts);
  //     newScriptsLibrary.globalVariables = { ...this.globalVariables, ...globalVariablesOverride };
  //     return newScriptsLibrary;
  // }
}
