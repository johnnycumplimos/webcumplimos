import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import iconIA from '../public/images/icon-IA.svg'
import iconCloud from '../public/images/icon-cloud.svg'
import iconBussines from '../public/images/icon-soluciones.svg'
import feesImage from '../public/images/impuestos-image.jpeg'
import healthImage from '../public/images/health-image.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Grupo Cumplimos SAS</title>
        <meta name="description" content="Grupo cumplimos SAS es una empresa esspecialistas en implementación y desarrollo de soluciones de negocio"/>
        <link rel="icon" href="/logo-cumplimos.svg" />
      </Head>
      <section className={styles.hero}>
        <div className={styles.hero_text_container}>
          <span className={styles.hero_text}>Especialistas en implementación y</span><br/>
          <span className={styles.hero_text_secundary}>desarrollo de soluciones de negocio.</span>
        </div>
      </section>
      <div className={styles.skills}>
        <div className={styles.card}>
          <div className={styles.semiCircle} color='blue'>1</div>
          <Image 
            src={iconIA}
            width={60}
            height={60}
          />
          <span className={styles.titleCardIA} color="blue">INTELIGENCIA ARTIFICIAL</span>
          <span className={styles.contentCard}>
           Inteligencia de documentos <br/>
           Robotización de procesos <br/>
           Modelos predictivos <br/>
          </span>
        </div>
        <div className={styles.card}>
        <div className={styles.semiCircle} color='orange'>2</div>
          <Image 
            src={iconCloud}
            width={60}
            height={60}
          />
          <span className={styles.titleCardIA} color="orange">SOLUCIONES EN LA NUBE</span>
          <span className={styles.contentCard}>
           Inteligencia de documentos <br/>
           Robotización de procesos <br/>
           Modelos predictivos <br/>
          </span>
        </div>
        <div className={styles.card}>
        <div className={styles.semiCircle} color='blue'>3</div>
          <Image 
            src={iconBussines}
            width={60}
            height={60}
          />
          <span className={styles.titleCardIA} color="blue">SOLUCIONES DE NEGOCIO</span>
          <span className={styles.contentCard}>
           Inteligencia de documentos <br/>
           Robotización de procesos <br/>
           Modelos predictivos <br/>
          </span>
        </div>
      </div>

      <div className={styles.containerConocenos}>
          <div className={styles.line}/>
          <span
            style={{fontSize:'2rem'}}
          >
            Conócenos
          </span>
          <div className={styles.line}/>
        </div>

      <section className={styles.sectionSections}>

        <div className={styles.cardSection}>
          <div className={styles.containerImages}>
            <Image 
              src={healthImage}
              className={styles.image_fees}
              layout='responsive'
              width={800}
              height={400}
            />
          </div>
          <div className={styles.feesDetails}>
            <span className={styles.titleFees}>
              IMPUESTOS
            </span>
            <span
              style={{
                textAlign:'justify',
                width:'80%'
              }}
            >
              El integrador de Soluciones tecnológicas
              que facilita el cumplimiento de sus
              obligaciones con el estado.
            </span>
            <button
              className={styles.button_solutions}
              style={{
                backgroundColor:'#F25D24',
              }}
            >
              VER SOLUCIONES
            </button>
          </div>
        </div>

        <div className={styles.cardSection}>
          <div className={styles.helthDetails}>
            <span className={styles.titleHealth}>
              SALUD
            </span>
            <span
              style={{
                textAlign:'justify',
                width:'80%'
              }}
            >
              Detectar las principales situaciones que
              inciden de forma negativa en los procesos
              estratégicos de la institución y optimizar
              su ejecución, generando eficiencias y
              disminución de tiempos.
            </span>
            <button
              className={styles.button_solutions}
              style={{
                backgroundColor:'#496EB6',
              }}
            >
              VER SOLUCIONES
            </button>
          </div>
          <div className={styles.containerImages}>
            <Image 
              src={feesImage}
              layout='responsive'
              width={800}
              height={400}
              className={styles.image_health}
              
            />
          </div>
        </div>

      </section>
    </div>
  )
}
