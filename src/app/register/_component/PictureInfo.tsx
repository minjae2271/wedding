import {
  pictureInfo as IpictureInfo,
  registerInfo as IregisterInfo,
} from "@/model/Register";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { TiDelete } from "react-icons/ti";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import main from "../../../../public/main.png";

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
    }
  };
  const addPreview = async (files: FileList | null) => {
    if (files) {
      if (
        files.length > 5 ||
        images.length + files.length > 5 ||
        previewImages.length + files.length > 5
      ) {
        alert("upload less than 5 images please.");
        return;
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
    <section className="min-w-[350px] h-full flex flex-col items-center px-4 gap-6">
      <div className="mainImageSection flex flex-col gap-6 mb-6">
        <div className="w-[350px] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-quicksand">Main Photo</p>
            <HoverCard>
              <HoverCardTrigger><FaRegQuestionCircle /></HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex flex-col justify-center items-center gap-2">
                  This is for the first page of invitation.
                  <Image src={main} width={250} alt="main"/>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <Input
            type="file"
            accept="image/*"
            onChange={(e) =>
              addMainPreview(!e.target.files ? null : e.target.files[0])
            }
          />
        </div>
        {previewMainImage && (
          <div className="relative w-[350px] h-[400px] flex items-center justify-center">
            <Image
              src={previewMainImage as string}
              alt="main-image-preview"
              fill
              className='object-cover rounded-lg'
            />
            <TiDelete
              className="absolute top-1 right-4"
              onClick={deletePreviewMainImage}
              size={40}
              color="purple"
            />
          </div>
        )}
      </div>
      {/* <div className="w-full border-b-2 border-slate-500"></div> */}
      <div className="imagesSection flex flex-col items-center gap-4">
        <div className="w-[350px] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <p className="text-2xl font-quicksand">Slide Photo</p>
            <FaRegQuestionCircle />
          </div>
          <Input
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => addPreview(e.target.files)}
          />
        </div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 overflow-y-auto">
          {previewImages.map((image, i) => {
            return (
              <div key={image.name} className="relative w-[350px] h-[400px] flex items-center justify-center">
                <Image
                  src={image.image as string}
                  alt="image-preview"
                  fill
                  className={`object-cover rounded-lg`}
                  // width={300}
                  // height={300}
                  // style={{ width: 300, height: 300 }}
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
      <div className="w-full flex justify-between gap-4 p-12">
        <Button
          size={"nav"}
          variant="outline"
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
          size={"nav"}
          variant="outline"
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
