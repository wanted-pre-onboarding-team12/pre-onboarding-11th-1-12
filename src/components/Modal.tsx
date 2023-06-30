import styles from './modal.module.scss';

type Props = {
  open: boolean;
  message: string;
  toclose: Function;
};

// 모달 사용방법
// 모달을 사용하고 싶은 페이지에서
//1. import Modal
//2. return 문 안에 <Modal open={state(boolean 값을 가져야함)} message='메시지' toclose={() => setState(false)} />

export const Modal = ({ open, message, toclose }: Props) => {
  return (
    <>
      {open ? (
        <div className={styles.backgrounddiv}>
          <div className={styles.modaldiv}>
            <span>{message}</span>
            <button onClick={() => toclose(false)}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
