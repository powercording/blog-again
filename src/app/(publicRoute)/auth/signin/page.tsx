import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { signinUser } from '@/service/user';
import { AUTH } from '@/constants/auth';

type SigninPageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default function SigninPage({ searchParams }: SigninPageProps) {
  const handleAction = async (form: FormData) => {
    'use server';

    const email = form.get('email') as string;
    const password = form.get('password') as string;

    if (!email || !password || !email.trim() || !password.trim()) {
      return;
    }

    await signinUser(email, password);
  };

  return (
    <form className="mx-auto flex w-96 flex-col gap-3 py-10" action={handleAction}>
      <Input
        isRequired
        isClearable
        color="primary"
        variant="bordered"
        type="email"
        label="Email"
        placeholder="이메일을 입력해주세요"
        radius="sm"
        name="email"
      />
      <Input
        isRequired
        isClearable
        color="primary"
        variant="bordered"
        type="password"
        label="Password"
        placeholder="비밀번호를 입력해주세요"
        radius="sm"
        name="password"
        errorMessage={
          searchParams.result === 'failed' && // "failed from searchParams will be string."
          AUTH[searchParams.message as keyof typeof AUTH]
        }
      />
      <br />
      <Button radius="sm" size="md" variant="faded" color="primary" type="submit">
        로그인
      </Button>
    </form>
  );
}
