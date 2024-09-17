interface locationInfo {
    'locationName': string
    'address': string
    'lat': number
    'lng': number
    'parking': string
}

type Props = {
    onNext: (data: locationInfo) => void
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
                onNext({locationName: 'oss', address: 'straseburg', lat: 1, lng:2, parking:'yes'})
                onPrevPage()
            } }>next</button>
            <button onClick={() => {
                onNext({locationName: 'oss', address: 'straseburg', lat: 1, lng:2, parking:'yes'})
                onNextPage()
            }}>next</button>
        </section>
    )
}