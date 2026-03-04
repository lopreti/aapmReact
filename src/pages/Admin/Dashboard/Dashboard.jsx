import { useState } from "react";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
    return (
        <>
            <div className={styles.principalBox}>
                <div className={styles.cardsRow}>
                    <div className={styles.col}>
                        <a href="../armarios/armarios.html">
                            <div className={`${styles.containerLG} ${styles.cardArmarios}`} id="Armarios">
                                <span className={`material-symbols-outlined ${styles.materialSymbolsOutlined}`}>
                                    inventory_2
                                </span>
                                <h3>Controle de Armários</h3>
                            </div>
                        </a>
                    </div>

                    <div className={styles.col}>
                        <div className={`${styles.containerLG} ${styles.cardEstacionamento}`} id="Estacionamento">
                            <span className={`material-symbols-outlined ${styles.materialSymbolsOutlined}`}>
                                two_wheeler
                            </span>
                            <h3>Gestão do Estacionamento</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}