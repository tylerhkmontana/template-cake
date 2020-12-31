import Nav from './navbar'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <div>
      <Nav></Nav>
      {children}
      <Footer></Footer>
    </div>
  );
}