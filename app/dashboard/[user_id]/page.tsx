import AuthButton from "@/components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { QueryData } from "@supabase/supabase-js";
import AddPartnerOrganization from "../PartnerOrganizationForm";
import Image from "next/image";
import RemovePartnerButton from "@/components/removePartnerButton";

export default async function Dashboard() {
  const supabase = createClient();

  let { data: organizations, error } = await supabase
    .from("organizations")
    .select("*");

  return (
    <div className="flex-1 w-full flex flex-col items-center gap-4">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <AuthButton />
        </div>
      </nav>
      {organizations?.map((organization, index) => (
        <div
          key={index}
          className="border-gray-400 border-4 p-4 rounded-2xl w-1/4"
        >
          <div className="flex justify-center">
            <Image
              src={organization.logo_url}
              alt="Image Link Invalid"
              unoptimized
              width={200}
              height={200}
            />
          </div>
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl font-bold"> {organization.name} </h1>
              <h1
                className={
                  organization.active ? "text-green-500" : "text-red-500"
                }
              >
                {organization.active ? "Active" : "Inactive"}
              </h1>
            </div>
            <RemovePartnerButton organizationId={organization.id} />
          </div>
          <p> {organization.description} </p>
        </div>
      ))}
      <AddPartnerOrganization />
    </div>
  );
}
