import styled from '@emotion/styled';
import { ReactElement } from 'react';

interface FormInput {
  className?: string;
  name: string;
  labelText: string;
  type: string;
  register?: () => void;
  errors?: any;
}

const InputStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  input,
  textarea {
    font-size: calc(var(--font-size-default) / 1.125);
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 4px;
    border: none;
    border-radius: var(--border-radius-sm);
    background-color: #fff;
    box-shadow: var(--bs);
  }

  label {
    align-self: start;
    font-weight: 600;
  }
  .errors {
    color: tomato;
    display: flex;
    flex-direction: column;
  }
  small {
    font-size: 0.75rem;
  }
`;

export default function Input({
  className,
  name,
  labelText,
  type,
  register,
  errors,
}: FormInput): ReactElement {
  return (
    <InputStyles className={`form-group ${className && className}`}>
      <label htmlFor={name}>{labelText}</label>
      {type !== 'textarea' ? (
        <input type={type} {...register(name)} />
      ) : (
        <textarea {...register(name)} rows="6" />
      )}
      {errors && <small className="errors">{errors?.message}</small>}
    </InputStyles>
  );
}
