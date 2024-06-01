import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames/bind';

import styles from './input.module.scss';

type Props = {
  type?: 'text' | 'search' | 'password' | 'number';
  errorText?: string;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

const cn = classNames.bind(styles);

export const Input = forwardRef(
  (
    {
      id,
      type = 'text',
      errorText,
      className,
      placeholder,
      ...props
    }: InputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className={styles.container}>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(
            styles.input,
            { [styles.errorInput]: !!errorText },
            className,
          )}
          {...props}
          ref={forwardedRef}
        />
        {errorText && (
          <div className={styles.error}>
            <span className={styles.errorIcon}>&#10060;</span>
            {errorText}
          </div>
        )}
      </div>
    );
  },
);
