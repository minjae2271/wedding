import {
  pictureInfo as IpictureInfo,
  registerInfo as IregisterInfo,
} from "@/model/Register";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TiDelete } from "react-icons/ti";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

type Props = {
  onNext: (data: IpictureInfo) => void;
  onPrevPage: () => void;
  onNextPage: () => void;
  registerInfo: IregisterInfo;
};

export default function PictureInfo({
  onNext,
  onPrevPage,
  onNextPage,
  registerInfo,
}: Props) {
  const [previewMainImage, setPreviewMainImage] = useState(
    registerInfo.pictureInfo.previewMainImage
  );
  const [previewImages, setPreviewImages] = useState(
    registerInfo.pictureInfo.previewImages
  );
  const [mainImage, setMainImage] = useState(
    registerInfo.pictureInfo.mainImage
  );
  const [images, setImages] = useState(registerInfo.pictureInfo.images);

  const addMainPreview = async (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      await new Promise<void>((resolve) => {
        reader.onload = () => {
          setPreviewMainImage(reader.result as string);
          resolve();
        };
      });
      const formData = new FormData();
      formData.append(file.name, file);
      setMainImage(formData);

      // for (const x of formData.keys()) {
      //     console.log(x)
      // }
    }
  };
  const addPreview = async (files: FileList | null) => {
    if (files) {
        if (files.length > 5 || images.length + files.length > 5 || previewImages.length + files.length > 5) {
            alert('upload less than 5 images please.')
            return
        }
      const fileArray = Array.from(files);

      for (const file of fileArray) {
        const uniqueId = `${file.name}-${Date.now()}`;

        await new Promise<void>((resolve) => {
          const reader = new FileReader();
          const formData = new FormData();
          reader.readAsDataURL(file);
          reader.onload = () => {
            setPreviewImages((prev) => [
              ...prev,
              { image: reader.result as string, name: uniqueId },
            ]);
            resolve();
          };
          formData.append(uniqueId, file);
          setImages((prev) => [...prev, { formData, name: uniqueId }]);
        });
      }
    }
  };

  const deletePreviewMainImage = () => {
    setPreviewMainImage("");
    setMainImage(undefined);
  };
  const deletePreviewImages = (imageToDelete: string) => {
    const matchingName = previewImages.find(
      (item) => item.image === imageToDelete
    )?.name;
    setPreviewImages((prev) =>
      prev.filter((item) => item.image !== imageToDelete)
    );
    if (matchingName) {
      setImages((prev) => prev.filter((item) => item.name !== matchingName));
    }
  };

  return (
    <section className="w-full flex flex-col items-center gap-6">
      <div className="mainImageSection flex flex-col gap-6">
        <Input
          type="file"
          accept="image/*"
          onChange={(e) =>
            addMainPreview(!e.target.files ? null : e.target.files[0])
          }
        />
        {previewMainImage && (
          <div className="w-full flex flex-col relative">
            <Image
              src={previewMainImage as string}
              alt="main-image-preview"
              width={300}
              height={300}
              style={{ width: 300, height: 300 }}
            />
            <TiDelete
              className="absolute top-4 right-4"
              onClick={deletePreviewMainImage}
              size={40}
              color="purple"
            />
          </div>
        )}
      </div>
      <div className="imagesSection flex flex-col gap-4">
        <Input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => addPreview(e.target.files)}
        />
        <div className="w-full flex gap-4">
          {previewImages.map((image, i) => {
            return (
              <div key={image.name} className="relative">
                <Image
                  src={image.image as string}
                  alt="image-preview"
                  width={300}
                  height={300}
                  style={{ width: 300, height: 300 }}
                />
                <TiDelete
                  className="absolute top-4 right-4"
                  onClick={() => deletePreviewImages(image.image)}
                  size={40}
                  color="purple"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-around gap-4 mt-6">
        <Button
        variant='outline'
            onClick={() => {
            onNext({
                previewMainImage: previewMainImage,
                mainImage: mainImage,
                previewImages: previewImages,
                images: images,
            });
            onPrevPage();
            }}
        >
          <MdArrowBackIos />
            Location
        </Button>
        <Button
        variant='outline'
            onClick={() => {
            onNext({
                previewMainImage: previewMainImage,
                mainImage: mainImage,
                previewImages: previewImages,
                images: images,
            });
            onNextPage();
            }}
        >
            Optional
            <MdArrowForwardIos /> 
        </Button>
      </div>
    </section>
  );
}
