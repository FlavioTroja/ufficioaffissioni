import type { NextPage } from 'next'
import Layout from "../layouts/Layout";
import HeaderPage from "../components/header/Header";

const Home: NextPage = () => {
  return (
      <Layout>
          <HeaderPage />
      </Layout>
  )
}

export default Home
