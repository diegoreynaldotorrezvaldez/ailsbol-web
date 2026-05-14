// src/pages/Home.jsx
// Página pública institucional de AILSBOL WEB.
// Esta pantalla presenta la información general de la institución,
// la formación de intérpretes, la acreditación, los servicios y la normativa.

import logo from "../assets/logo-ailsbol.png";

function Home({ onGoLogin }) {
  return (
    <div className="home-page">
      <header className="home-header">
        <div className="home-brand">
          <img src={logo} alt="Logo AILSBOL" />
          <div>
            <h2>AILSBOL WEB</h2>
            <span>Gestión y formación de intérpretes</span>
          </div>
        </div>

        <nav className="home-nav">
          <a href="#sobre">Sobre AILSBOL</a>
          <a href="#formacion">Formación</a>
          <a href="#servicios">Servicios</a>
          <a href="#normativa">Normativa</a>
          <button onClick={onGoLogin}>Iniciar sesión</button>
        </nav>
      </header>

      <main>
        <section className="home-hero">
          <div className="home-hero-text">
            <span className="home-label">Plataforma institucional</span>
            <h1>
              Sistema web integral para la gestión y formación de intérpretes
              de Lengua de Señas Boliviana
            </h1>
            <p>
              AILSBOL WEB apoya la organización institucional, la formación
              virtual, el seguimiento académico, la acreditación y la gestión
              de servicios de interpretación de la Asociación de Intérpretes de
              Lengua de Señas de Bolivia.
            </p>

            <div className="home-actions">
              <button onClick={onGoLogin}>Ingresar al sistema</button>
              <a href="#formacion">Conocer formación</a>
            </div>
          </div>

          <div className="home-hero-card">
            <img src={logo} alt="Logo AILSBOL" />
            <h3>AILSBOL</h3>
            <p>
              Asociación de Intérpretes de Lengua de Señas de Bolivia,
              orientada al fortalecimiento, representación y cualificación de
              intérpretes a nivel nacional.
            </p>
          </div>
        </section>

        <section className="home-section" id="sobre">
          <div className="section-heading">
            <span>Institución</span>
            <h2>Sobre AILSBOL</h2>
          </div>

          <div className="info-grid">
            <article>
              <h3>Representación nacional</h3>
              <p>
                AILSBOL articula y representa a intérpretes de Lengua de Señas
                Boliviana, promoviendo el reconocimiento profesional y la
                accesibilidad comunicacional en diferentes departamentos del
                país.
              </p>
            </article>

            <article>
              <h3>Gestión institucional</h3>
              <p>
                La plataforma permite centralizar información de usuarios,
                estudiantes, intérpretes, formación, pagos, solicitudes,
                certificados y credenciales institucionales.
              </p>
            </article>

            <article>
              <h3>Accesibilidad comunicacional</h3>
              <p>
                El sistema contribuye al fortalecimiento de servicios de
                interpretación, apoyando la inclusión y participación de la
                comunidad Sorda en distintos ámbitos sociales.
              </p>
            </article>
          </div>
        </section>

        <section className="home-section alt-section" id="formacion">
          <div className="section-heading">
            <span>Formación virtual</span>
            <h2>Proceso formativo de intérpretes</h2>
          </div>

          <div className="timeline">
            <div>
              <strong>1</strong>
              <h3>Requisitos previos</h3>
              <p>
                El estudiante o candidato presenta constancia de formación
                previa en Lengua de Señas Boliviana, como los módulos impartidos
                por ASORPAZ u otra instancia reconocida.
              </p>
            </div>

            <div>
              <strong>2</strong>
              <h3>Módulos AILSBOL</h3>
              <p>
                AILSBOL habilita módulos complementarios orientados a la
                formación del intérprete, dictados por intérpretes con
                experiencia.
              </p>
            </div>

            <div>
              <strong>3</strong>
              <h3>Seguimiento académico</h3>
              <p>
                El sistema permite controlar el avance del estudiante,
                materiales, evaluaciones y estado de aprobación de los módulos.
              </p>
            </div>

            <div>
              <strong>4</strong>
              <h3>Certificado y credencial</h3>
              <p>
                Una vez concluido el proceso, AILSBOL podrá gestionar la emisión
                del certificado de culminación y la credencial institucional del
                intérprete acreditado.
              </p>
            </div>
          </div>
        </section>

        <section className="home-section" id="servicios">
          <div className="section-heading">
            <span>Servicios</span>
            <h2>Servicios de interpretación</h2>
          </div>

          <div className="services-layout">
            <div className="service-text">
              <p>
                AILSBOL WEB contempla la gestión de solicitudes de servicios de
                interpretación para instituciones públicas, privadas,
                organizaciones sociales y personas particulares que requieran
                accesibilidad comunicacional mediante intérpretes de Lengua de
                Señas Boliviana.
              </p>

              <ul>
                <li>Registro de solicitudes de interpretación.</li>
                <li>Asignación de intérpretes acreditados.</li>
                <li>Seguimiento del estado de atención.</li>
                <li>Historial de servicios prestados.</li>
              </ul>
            </div>

            <div className="service-card">
              <h3>Estados del servicio</h3>
              <span>Pendiente</span>
              <span>En revisión</span>
              <span>Asignado</span>
              <span>Finalizado</span>
            </div>
          </div>
        </section>

        <section className="home-section alt-section" id="normativa">
          <div className="section-heading">
            <span>Marco legal</span>
            <h2>Normativa y accesibilidad</h2>
          </div>

          <div className="law-box">
            <h3>Ley N° 1658</h3>
            <p>
              La Ley de Reconocimiento de la Lengua de Señas Boliviana reconoce
              la LSB como idioma oficial de las personas Sordas y respalda la
              accesibilidad comunicacional mediante intérpretes calificados,
              certificados o profesionales.
            </p>
          </div>
        </section>

        <section className="home-final">
          <h2>Plataforma para fortalecer la formación y gestión institucional</h2>
          <p>
            AILSBOL WEB integra herramientas digitales para apoyar la formación,
            organización y coordinación de servicios vinculados a la Lengua de
            Señas Boliviana.
          </p>
          <button onClick={onGoLogin}>Iniciar sesión</button>
        </section>
      </main>
    </div>
  );
}

export default Home;