import ProducetCard from "../ProducetCard"

function FeaturedProdects() {
    return (
        <div className=" lg:flex items-center justify-between gap-4">
            <ProducetCard />
            <ProducetCard />
            <ProducetCard />
            <ProducetCard />
        </div>
    )
}

export default FeaturedProdects