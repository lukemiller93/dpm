/* eslint-disable no-control-regex */
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
        message: "Required"
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
    return {
      minLength: {
        error: false,
        message: ''
      }
    }
  }
}

function isEmail(value: string): ValidatorResult {
  const emailRegex =
    /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
  if(!value.match(emailRegex)) {
    return {
      isEmail: {
        error: true,
        message: "Please enter a valid email"
      }
    }
  }
  return {
    isEmail: {
      error: false,
      message: ''
    }
  }
}

export const Validators = {
  required,
  minLength,
  isEmail
}
