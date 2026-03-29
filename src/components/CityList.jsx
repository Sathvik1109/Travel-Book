import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

/*
const CityList = ({ cities, loading }) => {
  const safeCities = Array.isArray(cities) ? cities : [];

  return (
    <ul className={styles.cityList}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        safeCities.map((city, idx) => <li key={idx}>{city.cityName}</li>)
      )}
    </ul>
  );
};
*/

const CityList = ({ cities, loading }) => {
  if (loading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map." />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
export default CityList;
