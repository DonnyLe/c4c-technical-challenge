"use client";
import {
  AllPartnersData,
  formSchema,
  partnerFormSchema,
  PartnerOrganizationData,
} from "@/lib/types";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitPartnerOrganization } from "../actions";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function AddPartnerOrganization() {
  const form = useForm<AllPartnersData>({
    resolver: zodResolver(formSchema),
  });

  const { fields, append, remove } = useFieldArray({
    name: "partners",
    control: form.control,
  });

  const onSubmit = async (data: AllPartnersData) => {
    console.log("entered");
    await SubmitPartnerOrganization(data);
    form.reset();
    remove();
  };

  return (
    <div className="flex flex-col items-center w-full gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-5/6 flex flex-col gap-4 items-center"
        >
          {fields.map((field, partner_index) => (
            <div
              key={field.id}
              className="border-gray-400 border-4 p-4 rounded-2xl  flex flex-col gap-4 w-1/2"
            >
              <FormField
                control={form.control}
                name={`partners.${partner_index}.partner_name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Partner Name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`partners.${partner_index}.partner_description`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Partner Description</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`partners.${partner_index}.logo_link`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Partner Logo Source</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`partners.${partner_index}.active`}
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        className="flex flex-col justify-center"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel>Active?</FormLabel>

                    <FormMessage />
                  </FormItem>
                )} 
              />
              <div className="flex justify-center"> 
              <Button className="w-1/6"type="button"  variant="destructive" onClick={() => remove(partner_index)}>
                Remove
              </Button>
              </div>
            </div>
          ))}
          <Button
            className="w-1/2"
            type="button"
            onClick={() =>
              append({
                partner_description: "",
                partner_name: "",
                logo_link: "",
                active: true,
              })
            }
          >
            Add Partner
          </Button>

          <Button className="w-1/2" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
