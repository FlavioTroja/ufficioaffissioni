import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../layouts/Layout";
import HeaderPage from "../../components/header/Header";
import { PrismaClient, City } from "@prisma/client";

type CityProps = {
    city: City;
}

const CityPage: NextPage<CityProps> = ({ city }) => {
    return (
        <Layout>
            <HeaderPage />
            <h1>{city.name}</h1>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const prisma = new PrismaClient();
    console.log(context.params);

    const city = await prisma.city.findFirst({
        where: {
            slug: context.params?.slug?.[0] ?? ""
        }
    });
    if (!city) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            city
        } as CityProps
    }
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [
            { params: { slug: [ "andria" ] }}
        ],
        fallback: false
    }
}

export default CityPage;