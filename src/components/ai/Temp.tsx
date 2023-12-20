import React from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/react';

type TempProps = {
  isOpen: boolean;
};

export default function Temp({ isOpen }: TempProps) {
  const [images, setImages] = React.useState<string[]>([]); // [image, image, image]

  const action = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const prompt = (document.querySelector('input[name="prompt"]')! as HTMLInputElement).value;

    const response = await fetch('/api/ai?prompt=' + prompt, { method: 'GET' });
    const data = await response.json();
    console.log(data);

    setImages([...data.imageUrls]);
  };

  return (
    <form
      onSubmit={action}
      className={`${
        isOpen ? 'translate-x-full' : ''
      } absolute right-0 top-0 h-full w-[500px] border-l px-2 py-20 transition-transform`}
    >
      <p>Ai 이미지 생성</p>
      {images.map((image, index) => (
        <Image key={index} src={image} alt="ai generated_image" draggable={false} />
      ))}
      <Input radius="sm" placeholder="Please type a image prompt" name="prompt" />
      <Button radius="sm" variant="ghost" fullWidth type="submit">
        이미지 적용하기
      </Button>
    </form>
  );
}
