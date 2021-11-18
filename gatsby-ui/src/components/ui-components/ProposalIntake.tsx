import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { device } from '../../styles/theme';
import Input from '../forms/Input';
import RadioGroup from '../forms/RadioGroup';
import { FormStyles } from './ContactForm';

const schema = yup.object({
  name: yup.string().required().min(3),
  email: yup.string().email().required('Please enter a valid email.'),
  phone: yup.string().min(10, 'Please enter a valid U.S. phone number').max(10),
  companyName: yup.string(),
  currentWebsite: yup
    .string()
    .url(
      'Please enter a valid website url including either (http:// | https://),'
    ),
  hasDomain: yup.bool(),
  hasHosting: yup.bool(),
  projectDetails: yup
    .string()
    .required('This field is required.')
    .min(100, 'Must be at least 100 characters long.'),
  projectBudget: yup
    .string()
    .required('Please enter your ideal project budget.'),
  timeline: yup.string().required('Project timeline is required.').min(7),
});
export type ProposalData = {
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

const ProposalIntakeStyles = styled(FormStyles)`
  display: grid;
  gap: var(--spacing-sm);
  grid-auto-flow: dense;
  place-items: start;
  max-width: var(--max-width);

  @media ${device.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

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
    <ProposalIntakeStyles
      className="container"
      onSubmit={handleSubmit(onSubmit)}
    >
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
      <Input
        name="projectBudget"
        labelText="Project Budget"
        description="Please enter your ideal project budget."
        type="text"
        register={register}
        errors={errors?.projectBudget}
      />

      <RadioGroup
        className="proposal-radios"
        name="hasDomain"
        labelText="Domain"
        description="Do you already have a domain name registered?"
        errors={errors?.hasDomain}
      >
        <label htmlFor="yes">
          Yes
          <input
            type="radio"
            id="yes"
            value="Yes"
            {...register('hasHosting')}
          />
        </label>
        <label htmlFor="no">
          No
          <input type="radio" id="no" value="No" {...register('hasHosting')} />
        </label>
      </RadioGroup>
      <RadioGroup
        className="proposal-radios"
        name="hasHosting"
        labelText="Hosting"
        description="Do you already have web hosting setup?"
        errors={errors?.hasHosting}
      >
        <label htmlFor="yes">
          Yes
          <input
            type="radio"
            id="yes"
            value="Yes"
            {...register('hasHosting')}
          />
        </label>
        <label htmlFor="no">
          No
          <input type="radio" id="no" value="No" {...register('hasHosting')} />
        </label>
      </RadioGroup>
      <Input
        name="projectDetails"
        labelText="Project Details"
        description="Please write a detailed description of the scope of your project and your ideal clients as well as any features you'll need in a website. What are your goals?"
        type="textarea"
        className="textarea-span-2"
        register={register}
        errors={errors?.projectDetails}
      />
      <Input
        name="timeline"
        description="Are you flexible on the timeframe, or does this project need to be completed by a deadline?"
        labelText="Project Timeline"
        type="text"
        register={register}
        errors={errors?.timeline}
      />
      <div className="buttons">
        <button type="submit">Submit</button>
      </div>
    </ProposalIntakeStyles>
  );
}
