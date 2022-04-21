import React,{useState,useEffect,useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo_cumplimos from '../../public/images/logo-cumplimos.svg'
import menu_icon from '../../public/images/menu.jpg'
import closeIcon from '../../public/images/close.png'
import styles from '../../styles/Navbar.module.css'


export default function Navbar() {

    const [expandMenu, setExpandMenu]=useState(false)
    const container=useRef(null)

    useEffect(()=>{

        const handleScrollEvent=()=>{
            if(window.pageYOffset>7){
                container.current.style.transition='1s'
                container.current.style.backgroundColor='white'
            }else{
                container.current.style.backgroundColor='transparent'    
            }
        }

        window.addEventListener('scroll',handleScrollEvent)

        return ()=>{
            window.removeEventListener('scroll',handleScrollEvent)
        }
    },[])

    console.log(expandMenu)
  return (
    <nav ref={container} className={styles.nav_container}>
        <div className={styles.icon_cumplimos}>
            <Image 
                src={logo_cumplimos}
                alt='logo-cumplimos'
                objectFit="contain"
                quality={100}
            />
        </div>
        <div className={styles.menu_icon}>
            <Image
                src={menu_icon}
                objectFit="cover"
                quality={100}
                alt='close-icon'
                onClick={()=>setExpandMenu(true)}
            />
        </div>
        <ul className={expandMenu ? `${styles.menu_list} ${styles.activate}` : styles.menu_list}>
            <li className={styles.menu_close}>
                <Image
                        src={closeIcon}
                        width={50}
                        height={50}
                        alt='close-icon'
                        onClick={()=>setExpandMenu(false)}
                    />
            </li>
            <li className={styles.menu_item}>
            
            <Link href='/'>
                <a className={styles.a_inicio} onClick={()=>setExpandMenu(false)}>Inicio</a> 
            </Link>
            </li>
            <li className={styles.menu_item}>Nosotros</li>
            <li className={styles.menu_item}>Soluciones</li>
            <li className={styles.menu_item}>Contáctanos</li>
        </ul>
    </nav>
  )
}
