import type { NextPage } from 'next'
import Layout from "../layouts/Layout";
import HeaderPage from "../components/header/Header";
import Features from "../components/features/Features";

const Home: NextPage = () => {
  return (
      <Layout>
          <HeaderPage />
          <Features />
      </Layout>
  )
}

export default Home
