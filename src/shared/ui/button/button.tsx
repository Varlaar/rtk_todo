import classNames from 'classnames/bind';

import styles from './button.module.scss';

interface IButtonProps {
  name: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: React.ReactNode;
}

const cn = classNames.bind(styles);

export const Button = ({
  name,
  type = 'button',
  className,
  onClick,
}: IButtonProps) => (
  <button className={cn('button', className)} type={type} onClick={onClick}>
    {name}
  </button>
);
