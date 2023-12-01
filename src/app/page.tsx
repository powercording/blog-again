import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";

export default function Home() {
  return (
    <div className="pt-10">
      <Card shadow="none" className="max-w-[300px] border-none bg-background">
        <CardHeader className="justify-between">
          <div className="flex gap-3">
            <Avatar isBordered radius="full" size="md" src="" />
            <div className="flex flex-col items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                SangDone LEE
              </h4>
              <h5 className="text-small tracking-tight text-default-500">
                @powercording
              </h5>
            </div>
          </div>
          <Button color="primary" radius="full" size="sm">
            Follow
          </Button>
        </CardHeader>
        <CardBody className="px-3 py-0">
          <p className="text-small pl-px text-default-500">
            Frontend developer, @next.js lover
            <span aria-label="confetti" role="img">
              🎉
            </span>
          </p>
          <p>skills</p>
        </CardBody>
        <CardFooter className="gap-3">
          <div className="flex gap-1">
            <p className="font-semibold text-default-600 text-small">4</p>
            <p className=" text-default-500 text-small">Following</p>
          </div>
          <div className="flex gap-1">
            <p className="font-semibold text-default-600 text-small">97.1K</p>
            <p className="text-default-500 text-small">Followers</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
