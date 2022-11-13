import React, { FC } from "react";
import { Modal, ModalProps } from "antd";
import {CustomeModalProps} from '../Interfaces'

const PopModal: FC<ModalProps &CustomeModalProps> = ({onOpen,onClose}) => {
  return (
    <Modal title="Basic Modal" open={onOpen} onCancel={onClose}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default PopModal;
