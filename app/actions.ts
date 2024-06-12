'use server'
import { createClient } from "@/utils/supabase/server";

import { AllPartnersData, PartnerOrganizationData } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function SubmitPartnerOrganization(data: AllPartnersData) {
    const supabase = createClient();
    for(let i = 0; i< data.partners.length; i++) {
    const response = await supabase.from("organizations").insert([{name: data.partners[i].partner_name,
        logo_url: data.partners[i].logo_link , 
        description: data.partners[i].partner_description, active: data.partners[i].active}]); 
    }
    revalidatePath("/dashboard/[user_id]", "page")
    

}

export async function removePartnerOrganization(organizationId: string) {
    const supabase = createClient();
    const { error } = await supabase
    .from('organizations')
    .delete()
    .eq('id', organizationId);
    
    revalidatePath("/dashboard/[user_id]", "page")

}