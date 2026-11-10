import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Main from '../Main/Main'

function Layout({ token }) {
  return (
    <>
      <Header />
      <Main token={token} />
      <Outlet />
    </>
  )
}

export default Layout