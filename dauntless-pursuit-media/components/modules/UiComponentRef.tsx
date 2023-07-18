import { groq } from "next-sanity";
import dynamic from "next/dynamic";
import { z } from "zod";

export const uiComponentRefPropsZ = z.object({
  _type: z.literal("uiComponentRef"),
  name: z
    .enum([
      "brandList",
      "contactForm",
      "newsletterSignup",
      "serviceList",
      "projectList",
      "proposalRequestForm",
    ])
    .default("contactForm"),
  _key: z.string(),
});

export const UiComponentQuery = groq`
	_type == "uiComponentRef" => {
		_type,
		name,
		_key
	}
`;
export type UIComponentProps = z.infer<typeof uiComponentRefPropsZ>;

const uiComponentLookup = {
  brandList: dynamic(async () => {
    const { BrandList: Component } = await import(
      "@/components/widgets/BrandList"
    );
    return { default: Component };
  }),
  contactForm: dynamic(async () => {
    const { ContactForm: Component } = await import(
      "@/components/widgets/ContactForm"
    );
    return { default: Component };
  }),
  newsletterSignup: dynamic(async () => {
    const { NewsletterSignup: Component } = await import(
      "@/components/widgets/NewsletterSignup"
    );
    return {
      default: Component,
    };
  }),
  serviceList: dynamic(() =>
    import("@/components/widgets/ServiceList").then((mod) => mod.ServiceList)
  ),
  projectList: dynamic(() =>
    import("@/components/widgets/ProjectList").then((mod) => mod.ProjectListing)
  ),
  proposalRequestForm: dynamic(async () => {
    const { ProposalRequestForm: Component } = await import(
      "@/components/widgets/ProposalRequestForm"
    );

    return {
      default: Component,
    };
  }),
} as const;

export const UiComponentRef = (props: UIComponentProps) => {
  const Component = uiComponentLookup[props.name];
  return (
    <div>
      <h1 className="font-bold uppercase">UI component ref</h1>
      {<Component />}
    </div>
  );
};
