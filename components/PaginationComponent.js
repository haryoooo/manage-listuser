import React from "react";
import { Pagination } from "antd";
import styles from "../styles/components/Pagination.module.css";

export default function PaginationComponent({ nextPage }) {
  const onChange = (page, pageSize) => {
    nextPage(page);
  };

  return (
    <div className={styles.container}>
      <Pagination
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${100} items`}
        onChange={onChange}
        simple
        defaultCurrent={1}
        total={100}
      />
    </div>
  );
}
