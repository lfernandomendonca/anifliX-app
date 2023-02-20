import styles from "@/styles/Main.module.css";

const Main = () => {
  return(
    <main className={styles.main}>
      <video autoPlay playsInline src='./video/csmBg.mp4'></video>
    </main>

);
};

export default Main