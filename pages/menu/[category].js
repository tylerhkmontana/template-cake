import MenuLayout from '../../components/menuLayout'
import Foodcard from '../../components/foodcard'
import styles from '../../styles/page/[category].module.scss'
import { getAllCategories, getItems } from '../../lib/menuServices'
import { readDir } from '../../lib/fileServices'

export default function Category({ categories, category, items }) {

  return (
    <MenuLayout key={category} categories={categories} currCategory={category}>
      <div className={styles.gallery}>
        {
          items.map((item, i) => 
            <Foodcard key={i} imgSrc={`/images/menu/${category}/${item.name}.png`} name={item.name} price={item.price} description={item.description}/>)
        }
      </div>
    </MenuLayout>
  );
}

export async function getStaticPaths() {
  const paths = getAllCategories()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const items = getItems(params.category)
  const categories = readDir('/data/menu')

  return {
    props: {
      items,
      category: params.category,
      categories: categories.map(c => c.replace(/\.json$/, ''))
    }
  }
}