import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { findOneUser, signupUser } from "@/service/user";

export default function SigninPage() {
  const handleAction = async (form: FormData) => {
    "use server";
    const user = await signupUser("hateyou@kakao.com");
    console.log(user);
  };

  return (
    <form className="flex flex-col gap-3 w-96 py-10" action={handleAction}>
      <Input
        isRequired
        isClearable
        color="primary"
        variant="bordered"
        type="email"
        label="Email"
        placeholder="이메일을 입력해주세요"
        radius="sm"
        name="test"
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
      />
      <br />
      <Button
        radius="sm"
        size="md"
        variant="faded"
        color="primary"
        type="submit"
      >
        로그인
      </Button>
      <Button radius="sm" size="md" variant="faded" color="primary">
        회원 가입
      </Button>
    </form>
  );
}
