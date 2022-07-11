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
        <div className={styles.modalForm}>
          <ModalForm />
        </div>
      </div>
    </Modal>
  );
};

export default GetStartedModal;
