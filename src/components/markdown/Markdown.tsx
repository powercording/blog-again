'use client';

import React from 'react';
import Editor from './Editor';
import Preview from './Preview';
import { LiaImageSolid } from 'react-icons/lia';
import Temp from '../ai/Temp';

export default function Markdown() {
  const [doc, setDoc] = React.useState<string>('hello world');
  const [preview, setPreview] = React.useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);

  const handleChange = React.useCallback((doc: string) => {
    setDoc(doc);
  }, []);

  return (
    <>
      <div className="-top-7 flex w-full">
        <button
          onClick={() => {
            const title = document.getElementById('code-submit-title');
            const subtitle = document.getElementById('code-submit-subtitle');
            setPreview(false);
          }}
          className={`${
            preview ? 'border-[0.5px] border-gray-500 text-gray-500' : 'rounded-tl-md border'
          }  border-b-0 p-1 text-sm font-normal`}
        >
          글 쓰기
        </button>
        <button
          onClick={() => setPreview(true)}
          className={`${
            preview ? 'rounded-tr-md border' : 'border-[0.5px] border-gray-500 text-gray-500'
          } border-b-0 p-1 text-sm font-normal`}
        >
          미리 보기
        </button>
        <button
          className="ml-auto flex items-center gap-2 text-sm text-primary-500"
          onClick={() => setIsMenuOpen(prev => !prev)}
        >
          <LiaImageSolid className="inline-block text-lg" />
          <span>이미지 생성</span>
        </button>
      </div>
      <div className="flex h-full w-full">
        {preview ? <Preview doc={doc} /> : <Editor onChange={handleChange} initialDoc={doc} />}
      </div>
      <div>게시글 작성하기</div>
      <Temp isOpen={isMenuOpen} />
    </>
  );
}
