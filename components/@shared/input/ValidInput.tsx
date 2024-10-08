import classNames from 'classnames';
import styles from './ValidInput.module.scss';
import { FieldError, FieldErrorsImpl, Merge, UseFormRegisterReturn } from 'react-hook-form';
import { HTMLInputTypeAttribute } from 'react';

interface ValidInputProps {
  label?: string;
  htmlFor?: string;
  error: FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  message: string | FieldError | Merge<FieldError, FieldErrorsImpl> | undefined;
  register: UseFormRegisterReturn;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

export default function ValidInput({
  label,
  htmlFor,
  error,
  message,
  register,
  type = 'text',
  placeholder = '',
}: ValidInputProps) {
  return (
    <div className={styles.inputWrapper}>
      {label && (
        <label htmlFor={htmlFor} className={'text-md'}>
          {label}
        </label>
      )}
      <input
        id={htmlFor}
        type={type}
        className={classNames('input', { [styles.error]: error })}
        placeholder={placeholder}
        {...register}
      />
      {message && <p className={classNames('text-xs', styles.message)}>{message.toString()}</p>}
    </div>
  );
}
