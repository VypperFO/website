import Image from "next/image";
import styles from './styles.module.css'

export default function Home() {
  return (
    <section className={styles.main}>
      <div className={styles.header}>
        <Image
          className={styles.img}
          src="/logo.jpeg"
          width={200}
          height={200}
          alt="Picture of my logo.">
        </Image>
        <h1>FO Latulip</h1>
        <h2>Software Developer</h2>
      </div>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vel reprehenderit dolore modi deserunt, hic omnis error. Tempore doloribus optio eum quidem adipisci quod fugit, amet hic aut accusamus? Beatae.</p>
        <br />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vel reprehenderit dolore modi deserunt, hic omnis error.</p>
      </div>
      
      <div className={styles.links}>
        <a href="https://www.linkedin.com/in/f%C3%A9lix-olivier-latulippe-22a211270">LinkedIn</a>
        <span>&#183;</span>
        <a href="https://github.com/VypperFO">Github</a>
        <span>&#183;</span>
        <a href="mailto:felixlatulip@gmail.com">Mail</a>
      </div>
    </section>
  );
}
