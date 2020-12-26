import Nav from './navbar'

export default function Layout({children}) {
  return (
    <div>
      <Nav></Nav>
      {children}
    </div>
  );
}