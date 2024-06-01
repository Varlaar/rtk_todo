import styles from './error.module.scss';

interface IErrorTextProps {
  message?: string;
  statusCode?: number;
  statusText?: string;
}

export const ErrorText = ({
  message,
  statusText,
  statusCode,
}: IErrorTextProps) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <h1>Произошла ошибка!</h1>
      {statusCode && <h2 className="mt-2">{`Статус: ${statusCode}`}</h2>}
      {statusText && <p className="mt-2">{`Сообщение: ${statusText}`}</p>}
      {message && <p>{message}</p>}
    </div>
  </div>
);
