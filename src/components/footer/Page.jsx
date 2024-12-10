import styles from './page.module.css';

export default function Footer() {
    return(
        <footer>
            <section className={styles.section1}>
                <div className={styles.containerUl}>
                    <ul>
                        <span className={styles.titleUl}>Acerca do Turingo</span>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa coisa</li>
                    </ul>

                    <ul>
                        <span className={styles.titleUl}>Explorar</span>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa coisa</li>
                    </ul>

                    <ul>
                        <span className={styles.titleUl}>Torne-se nosso parceiro de negócio</span>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa</li>
                        <li>Alguma coisa coisa</li>

                        <span className={styles.titleUl}>Obter Aplicaçaão</span>
                        <li>Obter Applicação</li>
                        <li>Obter Applicação</li>
                    </ul>
                   

                </div>
                <div className={styles.containerCookies}>

                </div>
            </section>
            <section className={styles.section2}></section>
        </footer>
    )
}
