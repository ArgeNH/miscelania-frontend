import { types } from '../types/types';

export const setError = (err, name) => ({
   type: types.uiSetError,
   payload: {
      err,
      name
   }
})

export const removeError = () => ({
   type: types.uiRemoveError
})