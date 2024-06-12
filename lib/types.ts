import { z } from "zod";




 export const partnerFormSchema = z.object({
    partner_description: z.string({
      required_error: "Please input a description for the partner organization.",
    }).min(1, "Please input a name for the partner organization."),
    partner_name: z.string({
      required_error: "Please input a name for the partner organization.",
    }).min(1, "Please input a name for the partner organization."),
    logo_link: z.string({
      required_error: "Please input a link to a logo for the partner organization.",
    }).min(1, "Please input a name for the partner organization."),
    active: z.boolean({
      required_error: "Please select whether C4C is actively working with organization",
    })

  });

  export const formSchema = z.object({
    partners: z.array(partnerFormSchema)

  });
  
  export type PartnerOrganizationData = z.infer<typeof partnerFormSchema>;
  export type AllPartnersData = z.infer<typeof formSchema>;


  