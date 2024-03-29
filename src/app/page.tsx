import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from '@nextui-org/react';

export default function Home() {
  return (
    <div className="mx-auto pt-10">
      {/*TODO: 아바타 컴포넌트화 시켜서 사용자 정보 동적으로 받아오게 하면 좋을것같음. */}
      <Card shadow="none" className="max-w-[300px] border-none bg-background">
        <CardHeader className="justify-between">
          <div className="flex gap-3">
            <Avatar isBordered radius="full" size="md" src="" />
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                SangDone LEE
              </h4>
              <h5 className="text-small tracking-tight text-default-500">@powercording</h5>
            </div>
          </div>
          <Button color="primary" radius="full" size="sm">
            Follow
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0">
          <p className="pl-px text-small text-default-500">
            Frontend developer, @next.js lover
            <span aria-label="confetti" role="img">
              🎉
            </span>
          </p>
          <p>skills</p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="text-small font-semibold text-default-600">4</p>
            <p className=" text-small text-default-500">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="text-small font-semibold text-default-600">97.1K</p>
            <p className="text-small text-default-500">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
