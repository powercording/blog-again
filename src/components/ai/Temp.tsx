import React from 'react';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

type TempProps = {
  isOpen: boolean;
};

export default function Temp({ isOpen }: TempProps) {
  return (
    <div
      className={`${
        isOpen ? 'translate-x-full' : ''
      } absolute right-0 top-0 h-full w-[500px] border-l px-2 py-20 transition-transform`}
    >
      <p>Ai 이미지 생성</p>
      <Input radius="sm" placeholder="Please type a image prompt" />
      <Button radius="sm" variant="ghost" fullWidth>
        이미지 적용하기
      </Button>
    </div>
  );
}
