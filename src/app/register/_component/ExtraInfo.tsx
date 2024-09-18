import { extraInfo as IextraInfo } from "@/model/Register"

type Props = {
    onNext: (data: IextraInfo) => void
    onPrevPage: () => void
    onSubmitRegister: () => void
}

export default function PictureInfo({ onNext, onPrevPage, onSubmitRegister }: Props) {
    return (
        <section>
            <div>Extra</div>
            <button onClick={() => {
                onNext({dressCode: 'black suit', childrenAllowed: true, gitfPreference: 'we are planning to have a nice garden!'})
                onPrevPage()
            } }>next</button>
            <button onClick={() => {
                onNext({dressCode: 'black suit', childrenAllowed: true, gitfPreference: 'we are planning to have a nice garden!'})
                onSubmitRegister()
            }}>next</button>
        </section>
    )
}