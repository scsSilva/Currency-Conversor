import { useEffect, useState, ChangeEvent } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import * as Styles from "./styles";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { Currency } from "../../utils/types";
import { data } from "../../utils/data";
import api from "../../utils/api";

const Home = () => {
  const [mainCurrency, setMainCurrency] = useState<Currency>(data[0]);
  const [secondaryCurrency, setSecondaryCurrency] = useState<Currency>(data[1]);
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(0);
  const [conversionRate, setConversionRate] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getConversionRate();

    setLoading(false);
  }, [mainCurrency, secondaryCurrency]);

  useEffect(() => {
    setSecondValue(conversionRate);
  }, [conversionRate]);

  const getConversionRate = async () => {
    setIsDisabled(true);

    await api
      .get(`/last/${mainCurrency.acronym}-${secondaryCurrency.acronym}`)
      .then((response) => {
        setConversionRate(
          +response.data[`${mainCurrency.acronym}${secondaryCurrency.acronym}`]
            .high
        );
      })
      .catch((error) => console.log(error));

    setIsDisabled(false);
  };

  const handleClick = async () => {
    const tempCurrency = mainCurrency;
    setMainCurrency(secondaryCurrency);
    setSecondaryCurrency(tempCurrency);
    setFirstValue(1);

    try {
      await getConversionRate();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Styles.Container>
      <Styles.ConversorSection
        style={
          loading ? { alignItems: "center", justifyContent: "center" } : {}
        }
      >
        {loading ? (
          <ClipLoader color="#16a085" size={80} />
        ) : (
          <>
            <Styles.ButtonConversor onClick={handleClick}>
              <MdCurrencyExchange size={25} color="#fff" />
            </Styles.ButtonConversor>
            <Styles.ContentConversorSection>
              <p>{mainCurrency.country}</p>
              <div>
                <Input
                  value={firstValue}
                  disabled={isDisabled}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setFirstValue(+event.target.value);
                    setSecondValue(+event.target.value * conversionRate);
                  }}
                />
                <Select
                  value={mainCurrency}
                  otherCurrencyAcronym={secondaryCurrency.acronym}
                  setValue={setMainCurrency}
                  disabled={isDisabled}
                />
              </div>
            </Styles.ContentConversorSection>
            <Styles.ContentConversorSection>
              <p>{secondaryCurrency.country}</p>
              <div>
                <Input
                  value={secondValue.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: secondaryCurrency.acronym,
                  })}
                  disabled={!isDisabled}
                  readOnly
                />
                <Select
                  value={secondaryCurrency}
                  otherCurrencyAcronym={mainCurrency.acronym}
                  setValue={setSecondaryCurrency}
                  disabled={isDisabled}
                />
              </div>
            </Styles.ContentConversorSection>
          </>
        )}
      </Styles.ConversorSection>
    </Styles.Container>
  );
};

export default Home;
