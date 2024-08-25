import { useRouter } from "next/router"

function Book() {
    const router = useRouter();
    const { bookId, categoryType}  = router.query

    return (
        <h2>Book page with Id {bookId} and Category is {categoryType}</h2>
    )
}

export default Book