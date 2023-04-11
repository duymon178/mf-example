import styles from './button.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: JSX.Element | string;
}

export function Button(props: ButtonProps) {
  return <button className={styles['shared-button']}>{props.children}</button>;
}

export default Button;
