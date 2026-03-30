import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";

const CountriesList = ({ cities, loading }) => {
  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CountryItem country={city} key={city.id} />
      ))}
    </ul>
  );
};
export default CountriesList;
