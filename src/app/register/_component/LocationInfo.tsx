import { locationInfo as IlocationInfo } from "@/model/Register"

type Props = {
    onNext: (data: IlocationInfo) => void
    onPrevPage: () => void
    onNextPage: () => void
}
export default function BasicInfo({ onNext, onPrevPage, onNextPage }: Props) {

    return (
        <section>
            <div>
                location
            </div>
            <button onClick={() => {
                onNext({locationName: 'oss', address: 'straseburg', lat: 1, lng:2, parking:'yes', accomodation: 'Rooms are available'})
                onPrevPage()
            } }>next</button>
            <button onClick={() => {
                onNext({locationName: 'oss', address: 'straseburg', lat: 1, lng:2, parking:'yes', accomodation: 'Rooms are available'})
                onNextPage()
            }}>next</button>
        </section>
    )
}