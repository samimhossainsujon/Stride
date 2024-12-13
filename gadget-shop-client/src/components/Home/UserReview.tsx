import Review from "./Review"

function UserReview() {
    return (
        <div className="lg:flex items-center justify-between gap-4 ">
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    )
}

export default UserReview