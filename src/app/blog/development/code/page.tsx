import { getSession } from '@/service/user';

export default async function CodePage() {
  const session = await getSession();
  return (
    <>
      <h1>코드페이지</h1>
    </>
  );
}
