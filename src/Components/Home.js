import { useEffect, useState } from "react"
import Styles from './Home.module.css'

function Home() {
  const [Filme, setFilme] = useState([])
  const [Pesquisar, setPesquisar] = useState()
  const Filmepopular = 'https://api.themoviedb.org/3/movie/popular?api_key=db062eef61bbade8e68dc0439adeafb4&language=pt-BR'



  useEffect(() => {

    if (!Pesquisar) {

      fetch(Filmepopular)
        .then((res) => res.json())
        .then((data) => setFilme(data.results))
    } else {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=db062eef61bbade8e68dc0439adeafb4&language=pt-BR&query=${Pesquisar}`)
        .then((res) => res.json())
        .then((data) => setFilme(data.results))
    }




  }, [Pesquisar])
  return (
    <>
      <main className={Styles.Home}>
        <input placeholder="Pesquisar filmes" onChange={(e) => setPesquisar(e.target.value)} />
        {Filme.map((a) => <div key={a.id}>

          <section>
            <img src={`https://image.tmdb.org/t/p/w500/${a.poster_path}`} />
            <div>
              <h1>{a.title}</h1>
              <p>{a.overview} </p>
            </div>
          </section>
        </div>)}



      </main >
    </>
  )
}
export default Home