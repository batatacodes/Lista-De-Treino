import React from 'react'

export default function Routine(){
  return (
    <section className="routine">
      <div className="card">
        <h2>Alongamento</h2>
        <ul className="list">
          <li>10 abdominal</li>
          <li>10 flexão</li>
          <li>10 polichinelo</li>
          <li>1 corrida</li>
        </ul>
      </div>

      <div className="card">
        <h2>Alongamento corporal</h2>
        <ul className="list">
          <li>10 bate braço</li>
          <li>10 alonga braço</li>
          <li>10 alonga perna</li>
          <li>10 estica perna</li>
          <li>10 estica braço (pra cima/pro lado)</li>
        </ul>
      </div>

      <div className="card">
        <h2>Treino</h2>
        <p className="note">Recomendado treinar ouvindo músicas</p>
        <ol className="list numbered">
          <li>Capoeira</li>
          <li>KunKa</li>
          <li>Musculo</li>
          <li>Força</li>
        </ol>
        <div className="schedule">
          <div className="time">20:00</div>
          <div className="dash">—</div>
          <div className="time">22:00</div>
          <div className="when">De 8 horas da noite às 22 horas</div>
        </div>
      </div>
    </section>
  )
}
