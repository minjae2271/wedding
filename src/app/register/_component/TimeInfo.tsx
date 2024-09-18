import { timeInfo as ItimeInfo } from "@/model/Register"

type Props = {
    onNext: (data: ItimeInfo) => void
    onPrevPage: () => void
    onNextPage: () => void
}
export default function TimeInfo({ onNext, onPrevPage, onNextPage }: Props) {

    return (
        <section>
            <div>
                Time
            </div>
            <button onClick={() => {
                onNext({date: new Date(), time: '13:30'})
                onPrevPage()
            } }>next</button>
            <button onClick={() => {
                onNext({date: new Date(), time: '13:30'})
                onNextPage()
            }}>next</button>
        </section>
    )
}