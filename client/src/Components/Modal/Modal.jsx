import React, {useEffect, useState} from 'react';
import {createPortal} from "react-dom";
import styles from './Modal.module.css'

const modal = document.querySelector("#modal")

const Modal = () => {
    const [modalState,setModalState] = useState(false)

    useEffect(() => {
        handleOpenModal(true)
    },[])

    const handleCloseModal = () => setModalState(false)
    const handleOpenModal = () => setModalState(true)


    return createPortal((
        <div className={modalState ? `${styles.modal} ${styles.modalOpen}` : styles.modal}>
            <div className={styles.content}>
                <span>1</span>
            </div>
            <div className={styles.overlay} onClick={handleCloseModal}/>
        </div>
    ),modal)
};

export default Modal;