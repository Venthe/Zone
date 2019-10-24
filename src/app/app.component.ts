import { Component, OnInit } from '@angular/core';
import { ScriptsLibraryService } from './scripts-library/scripts-library.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'zone-prototype';
  scriptForm: FormGroup;

  constructor(private readonly scriptsLibrary: ScriptsLibraryService, private readonly formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.scriptForm = this.formBuilder.group({
      key: new FormControl('skillsBaseValueSneak', { validators: Validators.required, updateOn: 'submit' }),
      props: new FormControl('{"globalVariablesOverride":{"player":{"attributes":{"agility":5}},"game":{"difficulty":"easy"}}}', { updateOn: 'submit' })

    });
  }

  executeScript() {
    const { key, props } = this.scriptForm.value;
    this.scriptsLibrary.execute(key, JSON.parse(props))
  }
}
