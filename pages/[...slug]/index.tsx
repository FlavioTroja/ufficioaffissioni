import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "../../layouts/Layout";
import HeaderPage from "../../components/header/Header";
import { PrismaClient, City } from "@prisma/client";
import React from "react";

type CityProps = {
    city: City;
}

const CityPage: NextPage<CityProps> = ({ city }) => {
    return (
        <Layout>
            <HeaderPage />
            <div id="cities" className="cards-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="heading">
                                UfficioAffissioni ha tutte le caratteristiche di cui <span>hai bisogno</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div>
                                <div className="card-icon">
                                <span>{city.province}</span>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">{city.name}</h4>
                                <p>{city.geography}</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    try {
        const prisma = new PrismaClient();
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
    } catch (err) {
        return {
            notFound: true
        }
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