import Head from "next/head"
import Link from "../src/components/Link"

export default function Page404() {
  return (
    <div>
      <Head>
        <title>404 - Alura Cases</title>
      </Head>
      <h1>You got lost and ended here on page 404! </h1>
      <Link href='/'> Go to Home page </Link>
    </div>
  )
}