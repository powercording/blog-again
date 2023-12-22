'use client';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/modal';
import { Button } from '@nextui-org/button';
import { ComponentPropsWithoutRef } from 'react';

type DefaultModalProps = {
  children?: React.ReactNode;
  title?: string;
  buttonName: React.ReactNode;
  buttonClassName?: string;
} & Omit<ComponentPropsWithoutRef<typeof Modal>, 'children' | 'title'>;

export default function ButtonModal(props: DefaultModalProps) {
  const { children, title, size, buttonName, buttonClassName, className, ...rest } = props;
  const { onOpenChange, onOpen, isOpen } = useDisclosure();
  return (
    <>
      <Button size="sm" onPress={onOpen} className={buttonClassName} variant="bordered">
        {buttonName}
      </Button>
      <Modal
        size={size}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        isDismissable={false}
        {...rest}
      >
        <ModalContent>
          {onClose => (
            <>
              {title && <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>}
              <ModalBody className={className}>{children}</ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
