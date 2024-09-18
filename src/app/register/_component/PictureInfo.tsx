import { pictureInfo as IpictureInfo } from "@/model/Register"

type Props = {
    onNext: (data: IpictureInfo) => void
    onPrevPage: () => void
    onNextPage: () => void
}

export default function PictureInfo({ onNext, onPrevPage, onNextPage }: Props) {
    return (
        <section>
            <div>pic</div>
            <button onClick={() => {
                onNext({pictures: []})
                onPrevPage()
            } }>next</button>
            <button onClick={() => {
                onNext({pictures: []})
                onNextPage()
            }}>next</button>
        </section>
    )
}