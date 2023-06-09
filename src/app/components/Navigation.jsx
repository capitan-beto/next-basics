import Link from "next/link"
import styles from "./Navigation.module.css"

const links = [{
    label: "Home",
    route: "/"
  }, {
    label: "About",
    route: "/about"
  }, {
    label: "Posts",
    route: "/posts"
  }]
  
export function Navigation() {
    return(
        <header className={styles.header}>
        <nav className={styles.navigation}>
          <ul className={styles.ul}>
            {links.map(({ label, route }) => {
              return <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            })}
          </ul>
        </nav>
      </header>
    )
}