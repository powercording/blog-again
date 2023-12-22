'use client';

import React from 'react';
import { Textarea } from '@nextui-org/input';
import { Image } from '@nextui-org/react';
import { useFormStatus } from 'react-dom';
import { Spinner } from '@nextui-org/spinner';
import FormButton from '../FormButton';
export default function AIimageGenerator() {
  const [images, setImages] = React.useState<string[]>([]); // [image, image, image]
  const { pending } = useFormStatus();

  const action = async (formData: FormData) => {
    const prompt = formData.get('prompt') as string;
    // const prompt = (document.querySelector('textarea[name="prompt"]')! as HTMLInputElement).value;

    const response = await fetch('/api/ai?prompt=' + prompt, { method: 'GET' });
    const data = await response.json();
    console.log(data);

    setImages([...data.imageUrls]);
  };

  return (
    <form
      action={action}
      className="flex w-full max-w-[500px] flex-col items-start justify-start gap-2"
    >
      <div className="min-h-[300px] w-full grow rounded-lg border-3 border-dashed border-gray-700">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="ai generated_image"
            draggable={false}
            onClick={() => {
              const header = document.querySelector(
                'section[data-id="post-header"]',
              )! as HTMLInputElement;

              header.style.backgroundImage = `url(${image})`;
              header.style.backgroundSize = 'cover';
              header.style.backgroundPosition = 'center';

              console.log(typeof header.style.backgroundImage);
              // const index = temp.indexOf('http');
              // const fful = temp.slice(index, -2);
            }}
          />
        ))}
      </div>
      <Textarea
        radius="sm"
        placeholder="Please type a image prompt"
        name="prompt"
        className="mt-auto"
      />
      <FormButton
        startContent={pending && <Spinner />}
        radius="sm"
        variant="ghost"
        fullWidth
        type="submit"
      >
        이미지 만들기 🖼️
      </FormButton>
    </form>
  );
}
