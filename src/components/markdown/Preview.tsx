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
      className="prose box-border h-full 
    w-full min-w-full 
    overflow-auto
    bg-transparent
    p-3
    text-[#abb2bf] prose-headings:pb-4 prose-h1:border-b prose-h1:text-[#abb2bf] prose-h2:border-b prose-h2:text-[#abb2bf] prose-a:text-primary prose-blockquote:text-center prose-blockquote:text-white prose-th:text-success-500"
    >
      {md}
    </div>
  );
}
