import Link from "../src/components/Link"
import PageTitle from "../src/components/PageTitle"

export default function Page404() {
  return (
    <div>
      <PageTitle> 404 - Alura Cases </PageTitle>
      <h1>You got lost and ended here on page 404! </h1>
      <Link href='/'> Go to Home page </Link>
    </div>
  )
}