import React from 'react';
import styles from './Loading.module.scss'

interface Props {
  show: boolean,
  setShow: (show: boolean) => void
}

export const Loading: React.FC<Props> = ({show, setShow}) => {
  return (
    <>
      {show ? <div className={styles.ring}>
        Loading
      </div> : setShow}
    </>
  );
}
