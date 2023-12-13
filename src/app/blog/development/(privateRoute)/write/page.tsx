import Markdown from '@/components/markdown/Markdown';
import React, { Suspense } from 'react';

export default function page() {
  return (
    <>
      <section className="h-fit w-full border-b-[0.5px] border-gray-600 p-3 pb-8">
        <div className="relative mx-auto flex h-28 w-[700px] items-end overflow-hidden">
          <h1
            id="code-submit-title"
            data-id="code-submit-title"
            autoFocus
            contentEditable
            data-placeholder="Please enter a title"
            className="absolute bottom-0 h-auto max-w-full cursor-text text-3xl before:empty:text-3xl before:empty:text-gray-500 before:empty:content-[attr(data-placeholder)] focus:outline-none"
          />
        </div>
        <div className="relative mx-auto w-[700px] overflow-ellipsis">
          <p
            id="code-submit-subtitle"
            data-id="code-submit-subtitle"
            aria-required
            contentEditable
            data-placeholder="subtitle"
            className="h-8 w-full cursor-text py-3 text-base text-gray-400 before:empty:text-base before:empty:text-gray-500 before:empty:content-[attr(data-placeholder)] focus:outline-none"
          />
        </div>
      </section>
      <section className="mt-8 h-fit w-full max-w-[700px]">
        <Suspense fallback={<div>Loading... Suspense testing</div>}>
          <Markdown />
        </Suspense>
      </section>
    </>
  );
}
