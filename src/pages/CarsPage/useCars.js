import axios from "axios";
import { useEffect, useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();

const API = "https://trademobile.co.il/api/cars/new";

const PARAMS = {
  year: [2014, CURRENT_YEAR],
  km: [0, 120000],
  price: [0, 80000],
};

const sortCb = (a, b) => a.DemandPrice - b.DemandPrice;

const unwantedMnfctr = ["פיג'ו", "סיטרואן", "רנו"];

const unwantedItemName = ["i10"];

const filterCb = (car, selectedMnfctr) => {
  const { Mnfctr, sold, FirstHand, ItemName } = car;

  return (
    FirstHand &&
    !sold &&
    !unwantedMnfctr.includes(Mnfctr) &&
    !unwantedItemName.includes(ItemName) &&
    (!selectedMnfctr.length || selectedMnfctr.includes(Mnfctr))
  );
};

const useCars = (selectedMnfctr) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cars, setCars] = useState([]);
  const [sortedCars, setSortedCars] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const fetchAllCars = async () => {
      for (let i = 1; i < 18; i++) {
        await fetchCars(i);
      }
    };

    fetchAllCars().then(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const res = cars
      .reduce((acc, arr) => (arr ? [...acc, ...arr] : acc), [])
      .filter((car) => filterCb(car, selectedMnfctr))
      .sort(sortCb);

    setSortedCars(res);
  }, [cars, selectedMnfctr]);

  const fetchCars = async (page) => {
    await axios
      .get(API, { params: { ...PARAMS, page: page } })
      .then(({ data }) => {
        const { page } = data.pagination;
        cars[page] = data.cars;
        setCars([...cars]);
      });
  };

  return [sortedCars, isLoading];
};

export default useCars;
