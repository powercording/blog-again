'use client';
import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkReact from 'remark-react';
import RemarkCode from './remark-code';
import RemarkLink from './remark-link';
import { defaultSchema } from 'hast-util-sanitize';
import 'github-markdown-css/github-markdown.css';

type Props = {
  doc: string;
};

const schema = {
  ...defaultSchema,
  attributes: {
    ...defaultSchema.attributes,
    code: [...(defaultSchema.attributes?.code || []), 'className'],
  },
};

export default function Preview(props: Props) {
  const md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkReact as any, {
      createElement: React.createElement,
      sanitize: schema,
      remarkReactComponents: { code: RemarkCode, a: RemarkLink },
    })
    .processSync(props.doc).result as string; // type unknown. why?

  return (
    <div
      className="prose prose-h1:border-b prose-h1:text-[#abb2bf] 
    prose-h2:border-b prose-h2:text-[#abb2bf] 
    prose-a:text-primary
    prose-blockquote:text-white prose-blockquote:text-center
    prose-th:text-success-500
    box-border h-full w-full overflow-auto bg-[#1b1f2372] bg-opacity-40 p-3 text-[#abb2bf]"
    >
      {md}
    </div>
  );
}
