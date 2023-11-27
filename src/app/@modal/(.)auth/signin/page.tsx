import PassiveModal from "@/components/PassiveModal";
import { Input } from "@nextui-org/input";

export default function SigninModal() {
  return (
    <PassiveModal title="로그인">
      <form className="flex flex-col gap-3">
        <Input
          isRequired
          isClearable
          color="success"
          variant="bordered"
          type="email"
          label="Email"
          placeholder="이메일을 입력해주세요"
        />
        <Input
          isRequired
          isClearable
          color="success"
          variant="bordered"
          type="password"
          label="Password"
          placeholder="비밀번호를 입력해주세요"
        />
      </form>
    </PassiveModal>
  );
}
