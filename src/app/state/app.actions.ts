import { createAction } from '@ngrx/store';
import { props } from '@ngrx/store';

export const LoginAction = createAction(
    '[Login Page] Login',
    props<{ username: string; password: string }>()
  );