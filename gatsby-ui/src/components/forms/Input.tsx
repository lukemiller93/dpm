import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { motion, useAnimation } from 'framer-motion';
import { ReactElement, useEffect } from 'react';
import { UseFormRegister, UseFormTrigger, UseFormWatch } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import { device } from '../../styles/theme';

interface FormInput {
  className?: string;
  name: string;
  labelText: string;
  type: string;
  register?: UseFormRegister<any>;
  hasData?: UseFormWatch<any>;
  trigger: UseFormTrigger<any>;
  errors?: any;
  description?: string;
}

type FormInputStyleProps = {
  hasData: boolean;
  inputInvalid: boolean;
};

const InputStyles = styled(motion.div)<FormInputStyleProps>`
  position: relative;

  label {
    background-color: black;
    font-size: (var(--font-size-default) / 1.25);
    color: rgba(255, 255, 255, 0.25);
    font-weight: 600;
    left: 0;
    padding: 0.5em 1em;
    pointer-events: none;
    position: absolute;
    top: -0.2em;
    transform: translate3d(0, 0.75rem, 0);
    transform-origin: top left;
    transition: all 500ms ease-in-out;
  }

  input,
  textarea {
    /*
    padding: 4px;
    border: none;
    background-color: #fff;
    box-shadow: var(--bs); */
    border-radius: var(--border-radius-sm);
    font-size: (var(--font-size-default) / 1.25);
    font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: black;
    border: none;
    color: var(--white, white);
    outline: ${(props) =>
      props.hasData
        ? `2px solid rgba(255, 255, 255, 1)`
        : `2px solid rgba(255, 255, 255, .25)`};
    padding: 1.25rem 1rem;
    position: relative;
    transition: outline 500ms ease-in-out;
    width: 100%;

    + label {
      ${({ hasData }) =>
        hasData &&
        css`
          color: rgba(255, 255, 255, 1);
          transform: translateY(-1.25em);
          font-size: calc(var(--font-size-default) / 1.5);
        `}
    }

    ${({ hasData, inputInvalid }) =>
      hasData &&
      !inputInvalid &&
      css`
        outline-color: rgba(0, 219, 58, 1);

        + label {
          color: rgba(0, 219, 58, 1);
        }
      `}
    // if input is invalid
    ${({ hasData, inputInvalid }) =>
      hasData &&
      inputInvalid &&
      css`
        outline-color: tomato;

        + label {
          color: tomato;
        }
      `}

    &:focus {
      outline-color: rgba(255, 255, 255, 1);
      + label {
        font-size: calc(var(--font-size-default) / 1.5);
        color: rgba(255, 255, 255, 1);
        transform: translateY(-1.25em);
      }
    }
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
  hasData,
  description,
}: FormInput): ReactElement {
  // Animation
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start('visible');
    }
    if (!inView) {
      ctrls.start('hidden');
    }
  }, [ctrls, inView]);

  const animation = {
    hidden: {
      opacity: 0,
      y: `1rem`,
    },
    visible: {
      opacity: 1,
      y: `0rem`,
      transition: {
        duration: 0.25,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  console.log(!!errors);

  return (
    <InputStyles
      hasData={!!hasData}
      inputInvalid={!!errors}
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={animation}
      className={`form-group ${(className && className) || ''}`}
    >
      {type !== 'textarea' ? (
        <input type={type} {...register(name)} />
      ) : (
        <textarea {...register(name)} rows="6" />
      )}
      <label htmlFor={name}>{labelText}</label>
      {description && <small className="description">{description}</small>}
      {errors && <small className="errors">{errors?.message}</small>}
    </InputStyles>
  );
}
