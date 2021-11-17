import { yupResolver } from '@hookform/resolvers/yup';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Input from '../forms/Input';

const schema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().email().required('Please enter a valid email.'),
  phone: yup.string().min(10, 'Please enter a valid U.S. phone number').max(10),
  companyName: yup.string(),
  currentWebsite: yup.string().url(),
  hasDomain: yup.bool().required(),
  hasHosting: yup.bool().required(),
  projectDetails: yup.string().required().min(100),
  projectBudget: yup.string().required(),
  timeline: yup.string().required().min(7),
});
type ProposalData = {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  currentWebsite: string;
  hasDomain: string;
  hasHosting: string;
  projectDetails: string;
  projectBudget: string;
  timeline: string;
};

export default function ProposalIntake(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProposalData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ProposalData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        name="companyName"
        labelText="Company Name"
        type="text"
        register={register}
        errors={errors?.companyName}
      />
      <Input
        name="currentWebsite"
        labelText="Current Website"
        type="url"
        description="If you currently have an existing website, what is the website URL? (e.g https://example.com)"
        register={register}
        errors={errors?.currentWebsite}
      />
      {/*   <Input
        name="name"
        labelText="Name"
        type="text"
        register={register}
        errors={errors?.name}
      />
      <Input
        name="name"
        labelText="Name"
        type="text"
        register={register}
        errors={errors?.name}
      /> */}
      <Input
        name="projectDetails"
        labelText="Project Details"
        description="Please write a detailed description of the scope of your project and your ideal clients as well as any features you'll need in a website. What are your goals?"
        type="textarea"
        register={register}
        errors={errors?.projectDetails}
      />
      <Input
        name="projectBudget"
        labelText="Project Budget"
        description="Please enter your ideal project budget."
        type="text"
        register={register}
        errors={errors?.projectBudget}
      />
      <Input
        name="timeline"
        description="Are you flexible on the timeframe, or does this project need to be completed by a deadline?"
        labelText="Project Timeline"
        type="text"
        register={register}
        errors={errors?.timeline}
      />
    </form>
  );
}
