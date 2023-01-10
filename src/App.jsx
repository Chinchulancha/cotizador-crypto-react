import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import imgCrypto from './img/imagen-criptos.png'
import Form from './componentes/Form'
import Resultado from './componentes/Resultado'
import Spinner from './componentes/Spinner'

const Contenedor = styled.div`
   margin: 0 auto;
   max-width: 1200px;
   width: 90%; 

   @media (min-width: 992px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
   }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px 0 auto;
  display: block;

  @media (max-width: 992px) {
      margin: 0;
      width: 100%;
   }
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  padding: 0;
  margin: 0;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content: '';
    width: 200px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 15px auto 0 auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [res, setRes] = useState({})
  const [cargando, setCargando] = useState(false)


  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      
      const cotizarCrypto = async () => {
        setCargando(true)
        setRes({})
        const {moneda, crypto} = monedas

        const url =
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${moneda}`;

        const res = await fetch(url);
        const data = await res.json();

        setRes(data.DISPLAY[crypto][moneda]);
        setCargando(false)  
      }

      cotizarCrypto()
    }
  }, [monedas])

  return (
    <Contenedor>
      <Imagen 
        src={imgCrypto} alt='Cotizador Img'
      />

      <div>
        <Heading>Cotiza Cryptomonedas al Instante</Heading>

        <Form
          setMonedas = {setMonedas}
        />

        {cargando && <Spinner/>}
        {res.PRICE && <Resultado 
          res = {res}
        />}
      </div> 
      
    </Contenedor>
  )
}

export default App
