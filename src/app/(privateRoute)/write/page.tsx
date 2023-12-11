import React from "react";

export default function page() {
  return (
    <>
      <section className="w-full max-w-[700px] h-fit p-3 pb-8 border-b-[0.5px] border-gray-400">
        <div className="h-28 flex items-end relative overflow-hidden">
          <h1
            autoFocus
            contentEditable
            placeholder="제목을 입력하세요"
            className="before:empty:content-[attr(placeholder)] before:empty:text-gray-500 before:empty:text-3xl text-3xl focus:outline-none absolute max-w-full bottom-0 h-auto cursor-text"
          />
        </div>
        <div className="overflow-ellipsis relative w-full">
          <p
            contentEditable
            placeholder="부제목을 입력하세요"
            className="before:empty:content-[attr(placeholder)] before:empty:text-gray-500 before:empty:text-base h-8 py-2 text-base focus:outline-none text-gray-400 w-full cursor-text"
          />
        </div>
      </section>
      <section className="h-fit min-h-full border max-w-[700px] w-full mt-8 relative">
        <div
          contentEditable
          placeholder="여기에 글을 입력하세요"
          className="focus:outline-none before:empty:content-[attr(placeholder)] before:empty:text-gray-500 before:empty:text-base cursor-text h-full"
        />
      </section>
    </>
  );
}
