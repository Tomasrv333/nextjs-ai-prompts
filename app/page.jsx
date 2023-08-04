import Feed from '@components/Feed'

const Home = () => {
  return (
    <div>
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Aprende y Comparte
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center"> Blog del Estudiante</span>
            </h1>
            <p className="desc text-center">
              Un blog dedicado a todos los estudiantes que buscan aprender con experiencias y fundamentos
            </p>
            <Feed/>
        </section>
    </div>
  )
}

export default Home