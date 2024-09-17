interface basicInfo {
    'groomName': string
    'brideName': string
}

type Props = {
    onNext: (data: basicInfo) => void
    onNextPage: () => void
}
export default function BasicInfo({ onNext, onNextPage }: Props) {

    return (
        <section>
            <div>
                basic
            </div>
            <button onClick={() => {
                onNext({groomName: 'minjae', brideName: 'Wiebke'});
                onNextPage()
            }
        }>next</button>
        </section>
    )
}