'use client';

import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

export default function Markdown() {
  const [doc, setDoc] = React.useState<string>('hello world');

  const handleChange = React.useCallback((doc: string) => {
    setDoc(doc);
  }, []);

  return (
    <div className="flex h-full w-full">
      <Editor onChange={handleChange} initialDoc={doc} />
      <Preview doc={doc} />
    </div>
  );
}
