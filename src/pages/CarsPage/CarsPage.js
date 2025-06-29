import "./CarsPage.scss";
import { useState } from "react";
import useCars from "./useCars";
import Table from "/src/components/Table/Table";
import Filters from "/src/components/Filters/Filters";
import Loader from "/src/components/Loader/Loader";
import Pagination from "/src/components/Pagination/Pagination";

const HEADERS = [
  { key: "DemandPrice", label: "Price" },
  { key: "Year" },
  { key: "ItemCode", label: "Car ID" },
];

const frenchMnfctr = ["יונדאי", "טויוטה", "מזדה", "סוזוקי"];

const ITEMS_PER_PAGE = 20;

const CarsPage = () => {
  const [selectedMnfctr, setSelectedMnfctr] = useState(frenchMnfctr);
  const [cars, isLoading] = useCars(selectedMnfctr);
  const [page, setPage] = useState(0);

  const pages = Math.ceil(cars.length / ITEMS_PER_PAGE);

  return (
    <div className="cars-page">
      <div className="filters-section">
        <Filters selected={selectedMnfctr} setSelected={setSelectedMnfctr} />
        <button onClick={() => setSelectedMnfctr(frenchMnfctr)}>
          Japanese brands
        </button>
        <button onClick={() => setSelectedMnfctr([])}>clear</button>
      </div>

      {isLoading && <Loader />}

      <div className="cars-table">
        <Table
          data={cars.slice(page * ITEMS_PER_PAGE, ITEMS_PER_PAGE * (page + 1))}
          headers={HEADERS}
          isLoading={isLoading}
          startIdx={page * ITEMS_PER_PAGE}
        />
      </div>

      {pages > 1 && <Pagination page={page} setPage={setPage} pages={pages} />}
    </div>
  );
};

export default CarsPage;
