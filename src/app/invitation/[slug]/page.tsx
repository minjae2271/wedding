'use client'

import Invitation from "@/app/_components/Invitation"
import { useInvitation } from "../_hooks/useInvitation"

type Props = {
    params : {
        slug: string
    }
}

export default function InvitationPage({ params }: Props) {
    const { slug } = params

    const {data, isError, isLoading, error } =useInvitation(slug)

    if(isLoading) return <div>Loading</div>

    if(isError) throw error

    return ( 
        <Invitation registerInfo={data}/>
    )
}