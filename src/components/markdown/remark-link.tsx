import Link from 'next/link';

type RemarkLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function RemarkLink(props: RemarkLinkProps) {
  const { children, href } = props;

  // If the link is local it will start with a "/"
  // Otherwise it'll be something like "https://"

  // return href.startsWith('http') || href === 'https' ? (
  //   <a href={href} target="_blank" rel="noopener noreferrer">
  //     {children}
  //   </a>
  // ) : (
  //   <Link href={href} className="customLink">
  //     <a>{children}</a>
  //   </Link>
  // );
  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  );
}
