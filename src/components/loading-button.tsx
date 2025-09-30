
'use client';
import { useFormStatus } from 'react-dom';
import { Button, type ButtonProps } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import React from 'react';

type LoadingButtonProps = ButtonProps & {
  loadingText?: string;
};

export function LoadingButton({
  children,
  loadingText = 'Please wait...',
  ...props
}: LoadingButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} {...props}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </Button>
  );
}
