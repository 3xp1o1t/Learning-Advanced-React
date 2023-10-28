import { VariantProps, cva } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

const inputStyles = cva(['transition-colors'], {
  variants: {
    variant: {
      default: [
        'bg-sky-100',
        'font-extralight',
        'rounded-md',
        'text-secondary',
      ],
      disabled: [
        'bg-sky-50',
        'font-extralight',
        'rounded-md',
        'text-rose-500',
        'border-2',
        'hover:cursor-not-allowed',
      ],
      bold: ['font-bold', 'bg-sky-100', 'text-sky-900', 'rounded-md'],
    },
    size: {
      default: ['w-1/3', 'px-1', 'py-2'],
      medium: ['w-1/2', 'px-1', 'py-2'],
      large: ['w-full', 'px-1', 'py-2'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type InputProps = VariantProps<typeof inputStyles> & ComponentProps<'input'>;
const Input = ({ variant, size, className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={twMerge(inputStyles({ variant, size }), className)}
    />
  );
};

export default Input;
