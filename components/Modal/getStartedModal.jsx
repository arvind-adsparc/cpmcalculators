import { Modal } from "antd";
import styles from "../../styles/CalculateModal.module.scss";
import ModalForm from "../Forms/modalForm";

const GetStartedModal = ({ openModal, closeModal }) => {
  return (
    <Modal
      title=""
      centered
      visible={openModal}
      //   onOk={() => closeModal(false)}
      onCancel={() => closeModal(false)}
      width={1000}
    >
      <div className={styles.modalContent}>
        <ModalForm />
      </div>
    </Modal>
  );
};

export default GetStartedModal;
