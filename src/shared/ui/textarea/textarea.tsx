import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './textarea.module.scss';

type Props = {
  errorText?: string;
};

export type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Props;

const cn = classNames.bind(styles);

export const Textarea = forwardRef(
  (
    { id, errorText, className, placeholder, ...props }: TextAreaProps,
    forwardedRef: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <textarea
        id={id}
        placeholder={placeholder}
        className={cn(styles.textarea, className)}
        {...props}
        ref={forwardedRef}
      />
    );
  },
);
