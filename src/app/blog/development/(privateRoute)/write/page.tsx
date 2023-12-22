import Markdown from '@/components/markdown/Markdown';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import { Button } from '@nextui-org/button';
import React, { Suspense } from 'react';
import { LiaImageSolid } from 'react-icons/lia';
import { Textarea } from '@nextui-org/input';
import ButtonModal from '@/components/ButtonModal';
import AIimageGenerator from '@/components/ai/AIimageGenerator';

export default function page() {
  return (
    <div className="flex h-[calc(100%-64px)] flex-col">
      <section
        className="h-fit w-full border-b-[0.5px] border-gray-600 p-3 pb-8"
        data-id="post-header"
      >
        <div className="relative mx-auto flex h-28 w-full max-w-[700px]  overflow-hidden">
          <h1
            id="code-submit-title"
            data-id="code-submit-title"
            autoFocus
            contentEditable
            data-placeholder="Please enter a title"
            className="absolute bottom-0 h-auto max-w-full cursor-text text-3xl before:empty:text-3xl before:empty:text-gray-500 before:empty:content-[attr(data-placeholder)] focus:outline-none"
          />
        </div>
        <div className="relative mx-auto w-full max-w-[700px] overflow-ellipsis">
          <p
            id="code-submit-subtitle"
            data-id="code-submit-subtitle"
            aria-required
            contentEditable
            data-placeholder="subtitle"
            className="h-8 w-full cursor-text py-3 text-base text-gray-400 before:empty:text-base before:empty:text-gray-500 before:empty:content-[attr(data-placeholder)] focus:outline-none"
          />
        </div>
        <div className="mx-auto flex w-full max-w-[700px]">
          {/* <Popover className="h-[500px] w-[500px]">
            <PopoverTrigger className="ml-auto">
              <Button
                startContent={<LiaImageSolid className="inline-block text-lg" />}
                variant="light"
              >
                배경 이미지
              </Button>
            </PopoverTrigger>
            <PopoverContent className="flex h-full max-h-[500px] w-full max-w-[500px] items-start justify-start gap-2 p-4">
              <b className="text-xl">이미지 생성</b>
              <div className="w-full grow rounded-md border-3 border-dashed border-gray-700"></div>
              <Textarea
                radius="sm"
                placeholder="Please type a image prompt"
                name="prompt"
                className="mt-auto"
              />
              <Button radius="sm" variant="ghost" fullWidth type="submit">
                이미지 적용하기
              </Button>
            </PopoverContent>
          </Popover> */}
          <ButtonModal
            buttonName="배경 이미지"
            title="이미지 생성"
            size="lg"
            className="flex w-full max-w-[500px] flex-col items-start justify-start gap-2"
            buttonClassName="ml-auto bg-gray-300 border border-black text-black font-bold"
          >
            <AIimageGenerator />
          </ButtonModal>
        </div>
      </section>
      <section className="sm: mx-auto mt-8 w-full max-w-[700px] grow px-3 sm:px-0">
        <Suspense fallback={<div>Loading... Suspense testing</div>}>
          <Markdown />
        </Suspense>
      </section>
    </div>
  );
}
