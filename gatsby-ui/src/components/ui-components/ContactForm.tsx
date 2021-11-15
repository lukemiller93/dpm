import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input from "../forms/Input";

const schema = yup.object({
  name: yup
    .string()
    .required(`We like to know who we're talking to. 🙂`)
    .min(3),
  email: yup.string().email().required("Please enter a valid email."),
  phone: yup
    .string()
    .min(10, "Please enter a valid U.S. phone number.")
    .max(10),
  message: yup.string().required("Message not long enough.").min(15),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const FormStyles = styled.form`
  display: grid;
  gap: 2rem;
  box-sizing: border-box;
  width: 100%;
  padding: 4px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: var(--border-radius-sm);

  &:focus-within {
    box-shadow: var(--bs);
    background: black;
    color: white;
  }

  h2 {
    text-align: center;
  }

  .buttons {
    padding: var(--spacing-sm) 0;
    display: flex;
    justify-content: end;
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

  [type="submit"] {
    background-color: black;
    color: white;
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
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);
  return (
    <FormStyles onSubmit={handleSubmit(onSubmit)}>
      <Input
        name="name"
        labelText="Name"
        type="text"
        register={register}
        errors={errors?.name}
      />
      <Input
        name="email"
        labelText="Email"
        type="email"
        register={register}
        errors={errors?.email}
      />
      <Input
        name="phone"
        labelText="Phone"
        type="tel"
        register={register}
        errors={errors?.phone}
      />
      <Input
        name="message"
        labelText="Message"
        type="textarea"
        register={register}
        errors={errors?.message}
      />
      <div className="buttons">
        <button type="submit">Send a Message</button>
      </div>
    </FormStyles>
  );
}
