import MenuLayout from '../../components/menuLayout'
import styles from '../../styles/page/menuHome.module.scss'
import Foodcard from '../../components/foodcard'
import { readDir } from '../../lib/fileServices'

export default function MenuHome(props) {
  return (
    <MenuLayout categories={props.categories}>
      <div className={styles.gallery}>
        
      </div>
    </MenuLayout>
  );
}


export async function getStaticProps() {
  const categories = readDir('/data/menu')

  return {
    props: {
      categories: categories.map(c => c.replace(/\.json$/, ''))
    }
  }
}