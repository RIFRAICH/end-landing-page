import styles from "../styles/HomePage.module.scss";
import bgImg from "../assets/bg.png";
import logoImg from "../assets/logo_rifraich.png";

const HomePage = () => {
    return (
        <main className={styles.container} style={{ backgroundImage: `url(${bgImg})` }}>
            <section className={styles.content}>
                <img className={styles.logo} src={logoImg} alt="Logo RIFRAICH" />
                <p className={styles.text}>Projet terminé • 2023-2026</p>
            </section>
        </main>
    )
}

export default HomePage
