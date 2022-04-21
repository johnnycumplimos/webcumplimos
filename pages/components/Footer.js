import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Footer.module.css'
import iconCumplimos from '../../public/images/logo-cumplimos-footer.svg'
import iconYoutube from  '../../public/images/youtube.svg'
import iconInstagram from '../../public/images/instagram.svg'
import iconLinkedin from '../../public/images/linkedin.svg'


const EMAIL="correo.cumplimos@cumplimos.co"

export default function Footer() {
  return (
    <footer className={styles.container}>
        <Image 
            src={iconCumplimos}
            width={200}
            height={150}
            alt='logo-cumplimos'
        />
        <p className={styles.textFooter}>
            <strong style={{'color':'#EE7128'}}>OFICINA</strong><br/>
            Bogotá: Calle 72 A #22 - 07<br/><br/>
            <strong style={{'color':'#EE7128'}}>CONTACTANOS:</strong><br/>
            emaildecontacto@cumplimos.co<br/>
        </p>
        <ul className={styles.ulCumplimos}>
            <p> <strong style={{'color':'#EE7128'}}>SOMOS GRUPO CUMPLIMOS</strong></p>
            <li>
                <Link href='/nosotros'>
                    <a className={styles.aCumplimos}>Nosotros</a>
                </Link>
            </li>
            <li>
                <Link href='/politica_tratamientos_personales'>
                    <a className={styles.aCumplimos}>Política de tratamiento de datos personales</a>
                </Link>
            </li>
            <li>
                <Link href='/preguntas_frecuentes'>
                    <a className={styles.aCumplimos}>Preguntas frecuentes</a>
                </Link>
            </li>
            <li>
                <Link href='/contactenos'>
                    <a className={styles.aCumplimos}>Contáctenos</a>
                </Link>             
            </li>
        </ul>
        <ul className={styles.listSocialNetworks}>
            <li className={styles.itemSocialMedia}><a className={styles.aSocialNetworks}><Image src={iconYoutube} width={20} height={20} alt='logo-facebook'/></a></li>
            <li className={styles.itemSocialMedia}><a className={styles.aSocialNetworks}><Image src={iconInstagram} width={15} height={15} alt='logo-twitter'/></a></li>
            <li><a className={styles.aSocialNetworks}><Image src={iconLinkedin} width={15} height={15} alt='logo-linkedin'/></a></li>
            {/* <li ><a className={styles.aSocialNetworks}><Image src={LogoWhatsapp}width={18} height={18   } /></a></li> */}
        </ul>
        
    </footer>
  )
}
