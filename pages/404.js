import Link from "../src/components/Link"
import PageTitle from "../src/components/PageTitle"

export default function Page404() {
  return (
    <div>
      <PageTitle> 404 - Alura Cases </PageTitle>
      <h1>Você se perdeu e acabou caindo na página 404! </h1>
      <Link href='/'> Voltar pra Home </Link>
    </div>
  )
}

