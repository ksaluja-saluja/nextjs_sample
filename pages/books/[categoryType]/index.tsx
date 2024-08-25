import { useRouter } from "next/router"

function BookCategory() {
    const router = useRouter();
    const category = router.query.categoryType;

    return (
        <h2>Book page Category {category} </h2>
    )
}

export default BookCategory