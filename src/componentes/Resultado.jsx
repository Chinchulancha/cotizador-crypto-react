import styled from "@emotion/styled";

const Contenedor = styled.div`
  text-align: center;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 992px) {
      display: block;
   }
`;

const Cajas = styled.div`
  padding: 10px 0;
  border-top: 1.5px solid #ccc;
  border-bottom: 1.5px solid #ccc;
`;

const ContenedorIMG = styled.div`
    display: grid;
    place-items: center;

    @media (max-width: 992px) {
      margin-bottom: 50px;
   }
`

const Parrafos = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 20px;
  padding: 5px 0;

  @media (max-width: 992px) {
      font-size: 15px;
   }
`;

const Precio = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 40px;
  padding: 5px 0;

  @media (max-width: 992px) {
      font-size: 30px;
   }
`;

const Spans = styled.span`
  color: #fff;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 22px;

  @media (max-width: 992px) {
      font-size: 18px;
   }
`;

const Resultado = ({ res }) => {
  const {
    PRICE,
    HIGHDAY,
    LOWDAY,
    CHANGEPCT24HOUR,
    IMAGEURL,
    LASTUPDATE,
    MKTCAP,
  } = res;

  console.log(res);
  return (
    <Contenedor>
      <ContenedorIMG>
        <img
          src={`https://cryptocompare.com/${IMAGEURL}`}
          alt="IMG crypto"
          height="100px"
        />
      </ContenedorIMG>

      <div>
        <Cajas>
          <Precio>
            El precio es de: <span>{PRICE}</span>
          </Precio>
        </Cajas>
        <Cajas>
          <Parrafos>
            Cambiós ultimas 24h: <Spans>{CHANGEPCT24HOUR + "%"}</Spans>
          </Parrafos>
        </Cajas>
        <Cajas>
          <Parrafos>
            El precio mas alto del día: <Spans>{HIGHDAY}</Spans>
          </Parrafos>
        </Cajas>
        <Cajas>
          <Parrafos>
            El precio mas bajo del día: <Spans>{LOWDAY}</Spans>
          </Parrafos>
        </Cajas>
        <Cajas>
          <Parrafos>
            El Market Cap es: <Spans>{MKTCAP}</Spans>
          </Parrafos>
        </Cajas>
        <Cajas>
          <Parrafos>
            Ultima actualización: <Spans>{LASTUPDATE}</Spans>
          </Parrafos>
        </Cajas>
      </div>
    </Contenedor>
  );
};

export default Resultado;
