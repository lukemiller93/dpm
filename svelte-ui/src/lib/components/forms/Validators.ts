export interface ValidatorResult {
  [validatorName: string]: {
    error: boolean;
    message?:string;
    value?: string;
  }
}

export type ValidatorFn = (value: any) => ValidatorResult

function required(value:any): ValidatorResult {
  if(value ==='' || value == null) {
    return {
      required: {
        error: true,
        message: "Field is required"
      }
    }
  }
  return {required: {error:false}}
}

function minLength(number) {
  return function(value): ValidatorResult {
    if(value == null || value.length < number) {
      return {
        minLength: {
          error: true,
          value: number,
          message: `Needs to be at least ${number} characters`
        }
      }
    }
  }
}

export const Validators = {
  required,
  minLength
}
