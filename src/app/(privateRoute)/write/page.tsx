import Editor from '@/components/markdown/Editor';
import Markdown from '@/components/markdown/Markdown';
import React from 'react';

export default function page() {
  return (
    <>
      {/* <section className="h-fit w-full max-w-[700px] border-b-[0.5px] border-gray-400 p-3 pb-8">
        <div className="relative flex h-28 items-end overflow-hidden">
          <h1
            autoFocus
            contentEditable
            data-placeholder="제목을 입력하세요"
            className="absolute bottom-0 h-auto max-w-full cursor-text text-3xl before:empty:text-3xl before:empty:text-gray-500 before:empty:content-[attr(data-placeholder)] focus:outline-none"
          />
        </div>
        <div className="relative w-full overflow-ellipsis">
          <p
            contentEditable
            data-placeholder="부제목을 입력하세요"
            className="h-8 w-full cursor-text py-2 text-base text-gray-400 before:empty:text-base before:empty:text-gray-500 before:empty:content-[attr(data-placeholder)] focus:outline-none"
          />
        </div>
      </section>
      <section className="relative mt-8 h-fit min-h-full w-full max-w-[700px] border">
        <div
          contentEditable
          data-placeholder="여기에 글을 입력하세요"
          className="h-full cursor-text before:empty:text-base before:empty:text-gray-500 before:empty:content-[attr(data-placeholder)] focus:outline-none"
        />
      </section> */}
      <Markdown />
    </>
  );
}
