import { Modal } from "antd";
import Image from "next/image";
import styles from "../../styles/CalculateModal.module.scss";

const CalculateModal = ({ openModal, closeModal }) => {
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
        <div className={styles.modalResult}>
          <div className={styles.imageContainer}>
            <img
              src="https://res.cloudinary.com/dqove2qhg/image/upload/v1656569760/CPM%20Calculators/modal-image_mdnxw1.svg"
              alt="CPM Calculators"
              width={400}
              height={400}
            />
          </div>

          <div className={styles.calculation}>
            On —--- Impressions if the CPM is $—--- then the Campaign Cost would
            be $—---.
          </div>
        </div>

        <div className={styles.modalForm}></div>
      </div>
    </Modal>
  );
};

export default CalculateModal;
