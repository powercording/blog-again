import FloatingButton from '@/components/FloatingButton';
import { getSession } from '@/service/user';
import React from 'react';
import { FaPencil } from 'react-icons/fa6';

type blogLayoutProps = {
  children: React.ReactElement;
};

const FloatingButtonContents = [
  {
    icon: <FaPencil className="text-success-500" />,
    text: '글쓰기',
    href: '/blog/development/write',
  },
];

export default async function BlogLayout({ children }: blogLayoutProps) {
  const session = await getSession();
  return (
    <>
      {children}
      {session.isLoggedIn && <FloatingButton key="code" contents={FloatingButtonContents} />}
    </>
  );
}
