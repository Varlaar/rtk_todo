import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { ErrorText } from '@shared/ui';

export const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    const message = error.data instanceof Error ? error.data.message : '';
    const {status, statusText} = error;
    return (
      <ErrorText
        message={message}
        statusCode={status}
        statusText={statusText}
      />
    );
  }

  return <ErrorText />;
};
