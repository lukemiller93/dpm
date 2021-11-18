import styled from '@emotion/styled';
import { ReactElement } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { device } from '../../styles/theme';

interface FormInput {
  className?: string;
  name: string;
  labelText: string;
  type: string;
  register?: UseFormRegister<any>;
  errors?: any;
  description?: string;
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
  textarea {
    resize: none;
  }

  &.textarea-span-2 {
    grid-row-end: span 2;
    @media ${device.md} {
      grid-row-start: 4;
      grid-column-start: 2;
    }
  }

  .description {
    margin-bottom: var(--spacing-xs);
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
    font-size: 0.75em;
    max-width: 80ch;
    padding-left: var(--spacing-xs);
  }
`;

export default function Input({
  className,
  name,
  labelText,
  type,
  register,
  errors,
  description,
}: FormInput): ReactElement {
  return (
    <InputStyles className={`form-group ${(className && className) || ''}`}>
      <label htmlFor={name}>{labelText}</label>
      {description && <small className="description">{description}</small>}
      {type !== 'textarea' ? (
        <input type={type} {...register(name)} />
      ) : (
        <textarea {...register(name)} rows="6" />
      )}
      {errors && <small className="errors">{errors?.message}</small>}
    </InputStyles>
  );
}
