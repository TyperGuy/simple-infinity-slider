import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Home() {
  return (
    <div className={styles.wrapper}>

      <div className={styles.slider}>
        <div className={styles.slide_track}>
            <Image className={styles.img} src={require('../public/assets/parceiros/agt.png')}/>
            <Image className={styles.img} src={require('../public/assets/parceiros/bai.png')}/>
            <Image className={styles.img} src={require('../public/assets/parceiros/banco_sol.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/bir.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/bpc.png')}/>    
            <Image className={styles.img} src={require('../public/assets/parceiros/confianca.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/dtser.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/ensa.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/giant.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/imprensa.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/minjusdh.png')}/>    
            <Image className={styles.img} src={require('../public/assets/parceiros/nossa_seguros.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/seguranca_social.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/sme.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/unitel.png')}/>     
        </div>
        <div className={styles.slide_track}>
            <Image className={styles.img} src={require('../public/assets/parceiros/agt.png')}/>
            <Image className={styles.img} src={require('../public/assets/parceiros/bai.png')}/>
            <Image className={styles.img} src={require('../public/assets/parceiros/banco_sol.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/bir.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/bpc.png')}/>    
            <Image className={styles.img} src={require('../public/assets/parceiros/confianca.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/dtser.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/ensa.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/giant.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/imprensa.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/minjusdh.png')}/>    
            <Image className={styles.img} src={require('../public/assets/parceiros/nossa_seguros.png')}/>      
            <Image className={styles.img} src={require('../public/assets/parceiros/seguranca_social.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/sme.png')}/>     
            <Image className={styles.img} src={require('../public/assets/parceiros/unitel.png')}/>     
        </div>
       
      </div>

    </div>
    
  )
}

export default Home;
