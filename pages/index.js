import axios from "axios";
import { useEffect, useState } from "react";
import CardComponents from "../components/CardComponents";
import PaginationComponent from "../components/PaginationComponent";
import DropdownComponent from "../components/DropdownComponent";
import styles from "../styles/Home.module.css";
import LoadingComponent from "../components/LoadingComponent";

export default function Home() {
  const [item, setItem] = useState([]);
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);

  const filterParams = filter !== "" ? `&nat=${filter}` : "";
  const seedParams = item?.length !== 0 ? `&seed=${item.info.seed}` : "";

  const handleChange = (filterValue) => {
    const convertFilterValue = filterValue.toLowerCase();
    setFilter(convertFilterValue);
  };

  const nextPage = (currentPage) => {
    setPage(currentPage);
  };

  const fetchUsers = async () => {
    await axios
      .get(
        `https://randomuser.me/api/?page=${page}&results=10${seedParams}${filterParams}`
      )
      .then((res) => setItem(res.data))

      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, [page, filterParams]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>List Users</h1>
        <span>
          <span>Filter By Nationality</span>{" "}
          <DropdownComponent handleChange={handleChange} />
        </span>
      </div>
      <div className={styles.isLoading}>
        {item?.length === 0 ? (
          [...Array(10)].map((item, i) => <LoadingComponent key={i} />)
        ) : (
          <CardComponents data={item} />
        )}
      </div>
      <PaginationComponent nextPage={nextPage} />
    </div>
  );
}
