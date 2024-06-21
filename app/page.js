import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className = {styles.landing_cover}>
      <div className = {styles.banner}>
        <b>Build with NextJS. Course assignment by Yunwei Dai. <a href = "https://github.com/daiyunwei1998">About me.</a></b>
      </div>
      <div className={styles.landing_row}>
        <div className = {styles.landing_column_1}>
          <h1 className = {styles.landing_h1}>Rewatch Google I/O 2024</h1>
          <h2 className = {styles.landing_h2}>Rewind and relive Google I/O 2024. Keynotes and sessions are now available on-demand.</h2> 
          <a href = "https://io.google/2024/?utm_source=devsite-hpp&utm_medium=embedded_marketing&utm_campaign=dgc-io-24&utm_content="><button className = {styles.landingCTA}>Watch on-demand</button></a>
        </div>
        <div className = {styles.landing_column_2}>
        <Image src = '/img/landing.png' width = '300' height = '300' alt = 'DALL-E generated math symbols with google theme color'/>
        </div>
      </div>
      </section>

     
     


  

    </main>
  );
}
