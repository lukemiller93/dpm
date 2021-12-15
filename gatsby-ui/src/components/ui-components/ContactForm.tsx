import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from '@emotion/styled';
import Input from '../forms/Input';

const schema = yup.object({
  name: yup
    .string()
    .required(`We like to know who we're talking to. 🙂`)
    .min(3),
  email: yup.string().email().required('Please enter a valid email.'),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Please enter a valid U.S. phone number.'
    ),
  message: yup.string().required('Message not long enough.').min(15),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export const FormStyles = styled.form`
  display: grid;
  gap: 2rem;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: var(--border-radius-sm);

  h2 {
    text-align: center;
  }

  .buttons {
    justify-self: end;
    align-self: end;
  }

  button {
    border-radius: var(--border-radius-sm);
    border: none;
    box-shadow: var(--button-shadow);
    margin-right: 1rem;
    cursor: pointer;
    padding: 0.5rem calc(var(--spacing-sm) / 2);
    font-family: var(--font-stack-body);
  }

  [disabled=''] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  [type='submit'] {
    background-color: var(--accent-color);
    color: var(--black, black);
  }

  @media screen and (min-width: 576px) {
    form {
      padding: var(--spacing-sm);
    }
  }
`;
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        labelText="Name"
        type="text"
        hasData={watch('name', false)}
        register={register}
        errors={errors?.name}
      />
      <Input
        name="email"
        labelText="Email"
        type="email"
        register={register}
        errors={errors?.email}
        hasData={watch('email', false)}
      />
      <Input
        name="phone"
        labelText="Phone"
        type="tel"
        register={register}
        errors={errors?.phone}
        hasData={watch('phone', false)}
      />
      <Input
        name="message"
        labelText="Message"
        type="textarea"
        register={register}
        errors={errors?.message}
        hasData={watch('message', false)}
      />
      <div className="buttons">
        <button disabled={!isValid || isSubmitting} type="submit">
          Send a Message
        </button>
      </div>
    </FormStyles>
  );
}
