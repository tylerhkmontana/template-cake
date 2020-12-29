import MenuLayout from '../../components/menuLayout'
import styles from '../../styles/page/menuHome.module.scss'
import Foodcard from '../../components/foodcard'

export default function MenuHome() {
  return (
    <MenuLayout>
      <div className={styles.gallery}>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
        <Foodcard imgSrc="/images/menu/dummyCake.png" itemName="Dummy Cake"/>
      </div>
    </MenuLayout>
  );
}