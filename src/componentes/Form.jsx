import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import Error from "./Error";

const InputSubmit = styled.input`
  padding: 10px;
  width: 100%;
  border: none;
  background-color: #9497ff;
  font-size: 20px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 5px;
  font-weight: 700;
  transition: 0.8s;
  margin-top: 20px;

  &:hover {
    background-color: #6e71e4;
    cursor: pointer;
  }
`;

const Form = ({setMonedas}) => {
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas("Elige la Moneda", monedas);
  const [crypto, SelectCrypto] = useSelectMonedas("Elige la Crypto", cryptos);

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const res = await fetch(url);
      const data = await res.json();

      const arrayCrypto = data.Data.map((crypto) => {
        const obj = {
          id: crypto.CoinInfo.Name,
          nombre: crypto.CoinInfo.FullName,
        };

        return obj;
      });

      setCryptos(arrayCrypto);
    };

    consultarAPI();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, crypto].includes("")) {
      setError(true);

      return;
    }

    setError(false)
    setMonedas({
      moneda,
      crypto
    })
  };

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}

      <form onSubmit={handleSubmit}>
        <SelectMonedas />

        <SelectCrypto />

        <InputSubmit type="submit" name="" id="" value="Cotizar" />
      </form>  
    </>
  );
};

export default Form;
