'use client'

import { removePartnerOrganization } from "@/app/actions"
import { Button } from "./ui/button"

export default function RemovePartnerButton({organizationId}: {organizationId: string}) {
    return (

        <Button variant="destructive" onClick={()=> removePartnerOrganization(organizationId)}type="button"> Remove Organization </Button>

    )
}