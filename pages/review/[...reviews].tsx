import { useRouter } from "next/router"

export default function Review() {
    const router = useRouter();
    const {reviews = []} = router.query
    return (
        <h2>Reviews page {reviews[0]} and {reviews[1]}</h2>
    )
}