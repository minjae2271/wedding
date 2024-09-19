import { pictureInfo as IpictureInfo, registerInfo as IregisterInfo } from "@/model/Register"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import Image from "next/image"

type Props = {
    onNext: (data: IpictureInfo) => void
    onPrevPage: () => void
    onNextPage: () => void
    registerInfo: IregisterInfo
}

export default function PictureInfo({ onNext, onPrevPage, onNextPage, registerInfo }: Props) {
    const [previewImages, setPreviewImages] = useState(registerInfo.pictureInfo.previewImages);
    const [images, setImages] = useState(registerInfo.pictureInfo.images);

    const addPreview = async (files: FileList | null) => {
        if (files) {
            const fileArray = Array.from(files);
            
            for ( const file of fileArray) {
                await new Promise<void>((resolve) => {
                    const reader = new FileReader()
                    const formData = new FormData()
                    reader.readAsDataURL(file)
                    reader.onload = () => {
                        setPreviewImages((prev) => [ ...prev, reader.result as string] )
                        resolve()
                    }
                    formData.append(file.name, file)
                    setImages((prev) => [ ...prev, formData])
                })
            }
        }
    }

    return (
        <section className="flex flex-col items-center gap-6">
            <div className="flex flex-col gap-6">
                <Input type="file" multiple onChange={(e) => addPreview(e.target.files)}/>
            </div>
            {previewImages.map((image, i) => {
                return (
                    <Image key={image} src={image as string} alt="image-preview" width={300} height={300} style={{ width: 300, height: 300 }}/>
                )
            })}
            {/* {imagePreview} */}
            <button onClick={() => {
                onNext({previewImages: previewImages, images: images})
                onPrevPage()
            } }>next</button>
            <button onClick={() => {
                onNext({previewImages: previewImages, images: images})
                onNextPage()
            }}>next</button>
        </section>
    )
}