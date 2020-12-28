import Layout from '../../components/layout'
import styles from '../../styles/page/menu.module.scss'

import Foodcard from '../../components/foodcard'

export default function Menu() {
  return (
    <Layout>
      <div className={styles.intro}>
        <h1>Menu.</h1>
      </div>
      <div className={styles.gallery}>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
      </div>
    </Layout>
  );
}