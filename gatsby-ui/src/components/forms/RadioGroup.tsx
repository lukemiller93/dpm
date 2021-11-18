import styled from '@emotion/styled';
import { ReactElement } from 'react';

interface RadioGroupInterface {
  className?: string;
  name: string;
  labelText: string;
  errors?: any;
  description?: string;
  layout?: string;
  children: React.ReactNode | React.ReactNode[];
}

const RadioStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;

  input {
    font-size: calc(var(--font-size-default) / 1.125);
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 4px;
    border: none;
    border-radius: var(--border-radius-sm);
    background-color: #fff;
    box-shadow: var(--bs);
  }

  .description {
    margin-bottom: var(--spacing-xs);
  }

  .layout-horizontal {
    display: flex;
    gap: var(--spacing-xs);
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

export default function RadioGroup({
  children,
  errors,
  description,
  labelText,
  className,
  layout = 'horizontal',
  name,
}: RadioGroupInterface): ReactElement {
  return (
    <RadioStyles
      className={`form-group radio-group ${
        (className && className) || ''
      } layout-${layout}`}
    >
      <label htmlFor={name}>{labelText}</label>
      {description && <small className="description">{description}</small>}
      <div className={`radio-options layout-${layout}`}>{children}</div>
      {errors && <small className="errors">{errors?.message}</small>}
    </RadioStyles>
  );
}
