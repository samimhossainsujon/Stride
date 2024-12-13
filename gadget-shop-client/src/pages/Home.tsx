import Accordion from "../components/Home/Accordion"
import Banner from "../components/Home/Banner"
import FeaturedProdects from "../components/Home/FeaturedProdects"
import UserReview from "../components/Home/UserReview"

function Home() {
    return (
        <>
            <Banner />
            <div className="container mx-auto">
                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center">Featured Prodects</h1>
                    <FeaturedProdects />
                </div>

                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center">User Review</h1>
                    <UserReview />
                </div>


                <div className="my-24">
                    <h1 className="mb-16 text-2xl font-semibold text-center">Frequently Asked Qustion</h1>
                    <Accordion />
                </div>
            </div>
        </>
    )
}

export default Home