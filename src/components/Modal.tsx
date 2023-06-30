import styles from "./modal.module.scss";

type Props = {
  open: boolean;
  message: string;
  toclose: Function;
};

export const Modal = ({ open, message, toclose }: Props) => {
  return (
    <>
      {open ? (
        <div className={styles.background}>
          <div className={styles.modaldiv}>
            <span>{message}</span>
            <button onClick={() => toclose(false)}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
