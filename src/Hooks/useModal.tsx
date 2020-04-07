// Modules
import { useState } from 'react';

type Modal = {
  visible: boolean;
  onConfirm(data?:unknown): void;
  data: unknown;
};

const InitModal: Modal = {
  visible: false,
  onConfirm: () => {},
  data: {},
};

const useModal = () => {
  const [modal, setModal] = useState(Object.assign(InitModal, {}));

  return {
    modal,
    setModal,
  };
};

export {
  useModal,
};