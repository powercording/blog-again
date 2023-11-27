import PassiveModal from "@/components/PassiveModal";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/auth/signin">
        <Button color="warning">버튼</Button>
      </Link>
    </>
  );
}
