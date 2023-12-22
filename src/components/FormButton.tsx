import { Button } from '@nextui-org/button';
import { Spinner } from '@nextui-org/react';
import React from 'react';
import { useFormStatus } from 'react-dom';

type FormButtonProps = React.ComponentProps<typeof Button>;

export default function FormButton(props: FormButtonProps) {
  const { children, ...rest } = props;
  const { pending } = useFormStatus();

  return (
    <Button {...rest} disabled={pending} type="submit">
      {pending && <Spinner className="text-sm" />}
      {children}
    </Button>
  );
}
