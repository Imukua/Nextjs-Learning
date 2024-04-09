import Link from "next/link";

export default function  Page () {
    return (
        <main>
            <h1>ProductList</h1>
            <ul className="plist">
                <Link href="/product/masserati">
                    <li >Product 1</li>
                </Link>
                <Link href="/product/lambo">
                    <li >Product 2</li>
                </Link>
            </ul>

        </main>
    )
}