import styles from './styles/footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_storeinfo}>
        <div className={styles.footer_storehours}>
          <p>Mon - Sun</p>
          <p>11AM - 11PM</p>
        </div>
        <div className={styles.footer_address}>
          <p>777 Al Pacino Rd, West Hollywood, CA, 900099</p>
        </div>
        <div className={styles.footer_contact}>
          <p>Tel: +1(777) 777-777</p>
          <p>Email: trantino@hollywood.com</p>
        </div>
      </div>

      <p className={styles.footer_copyright}>&copy; 2020 by MAGI, created by <a href="https://github.com/tylerhkmontana">tylerhkmontana</a></p>

      <div className={styles.footer_attribution}>
      <span>Photo by <a href="https://unsplash.com/@angelekamp?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Angèle Kamp</a> on <a href="https://unsplash.com/s/photos/cake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <span>Photo by <a href="https://unsplash.com/@caities_cakes_amsterdam?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Caitlyn de Wild</a> on <a href="https://unsplash.com/s/photos/cake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>  
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <span>Photo by <a href="https://unsplash.com/@andoyc?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Antonio Castellano</a> on <a href="https://unsplash.com/s/photos/cake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <span>Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Louis Hansel @shotsoflouis</a> on <a href="https://unsplash.com/s/photos/fruit?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <span>Photo by <a href="https://unsplash.com/@the_modern_life_mrs?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Heather Ford</a> on <a href="https://unsplash.com/s/photos/cake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <span>Photo by <a href="https://unsplash.com/@sbellocillo?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Stephen Bellocillo</a> on <a href="https://unsplash.com/s/photos/cake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <span>Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/s/photos/cake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <a href='https://pngtree.com/so/dessert-clipart'>dessert clipart png from pngtree.com</a>
      </div>
    </div>
  );
}