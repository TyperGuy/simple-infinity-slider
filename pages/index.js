import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Img from '../public/assets/parceiros/agt.png'
function Home() {
  return (
    
    <div className={styles.slider}>
      <div className={styles.slide_track}>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/agt.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/bai.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/banco_sol.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/bir.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/bpc.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/confianca.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/dtser.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/ensa.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/giant.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/imprensa.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/minjusdh.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/nossa_seguros.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/seguranca_social.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/sme.png')}/>
          </div>
          <div className={styles.slide}>
            <Image src={require('../public/assets/parceiros/unitel.png')}/>
          </div>
      </div>
    </div>
  )
}

export default Home;
