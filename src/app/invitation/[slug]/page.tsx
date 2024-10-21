import Invitation from "@/components/Invitation"

type Props = {
    params : {
        slug: string
    }
}

export default function InvitationPage({ params }: Props) {
    const { slug } = params
    console.log(slug)

    return ( 
        <Invitation />
    )
}