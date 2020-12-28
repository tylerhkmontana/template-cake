import Layout from '../../components/layout'
import styles from '../../styles/menu.module.scss'

import Foodcard from '../../components/foodcard'

export default function Menu() {
  return (
    <Layout>
      <div className={styles.menu}>
        <h1>Menu Page</h1>
        <Foodcard />
      </div>
    </Layout>
  );
}