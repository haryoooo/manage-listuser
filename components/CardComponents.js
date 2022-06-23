import React from "react";
import { Card, Avatar, Modal } from "antd";
import styles from "../styles/components/Card.module.css";
import { ageConverter } from "../helpers/ageConverter";
import "antd/dist/antd.css";
import moment from "moment";
import Image from "next/image";
const { Meta } = Card;

export default function CardComponents({ data }) {
  const showModalInfo = (detailData) => {
    Modal.info({
      title: "Detail User",
      content: (
        <div className={styles.modalInfo}>
          <div>
            <Image
              src={detailData.picture.large}
              style={{ borderRadius: "50%" }}
              height={150}
              width={150}
              alt="avatar"
            />
          </div>
          <p className={styles.userInfo}>
            <strong>Name</strong>{" "}
            <span>{`${detailData.name.title} ${detailData.name.first} ${detailData.name.last}`}</span>
          </p>
          <p className={styles.userInfo}>
            <strong>Email</strong>
            <span>{detailData?.email}</span>
          </p>
          <p className={styles.userInfo}>
            <strong>City</strong>
            <span>{`${detailData?.location.city}, ${detailData?.location.country}`}</span>
          </p>
          <p className={styles.userInfo}>
            <strong>Address</strong>
            <span
              style={{ marginLeft: 20 }}
            >{`${detailData.location.state}, ${detailData.location.city} ${detailData.location.street.name}, ${detailData.location.street.number}`}</span>
          </p>
          <p className={styles.userInfo}>
            <strong>Born Date</strong>
            <span>
              {moment(detailData?.dob.date).format("DD-MM-YYYY, HH:mm:ss")}
            </span>
          </p>
          <p className={styles.userInfo}>
            <strong>Age</strong>
            <span>
              {ageConverter(moment(detailData?.dob.date).format("L")) +
                " years"}
            </span>
          </p>
        </div>
      ),

      onOk() {},
    });
  };

  return (
    <div className={styles.cardContainer}>
      {data?.results?.map((val, key) => {
        return (
          <Card
            key={key}
            style={{
              width: 300,
              borderRadius: 12,
              margin: 20,
              cursor: "pointer",
              boxShadow: "0px 0px 12px 0px rgba(95, 86, 86, 0.6)",
              wordBreak: "break-all",
            }}
            onClick={() => showModalInfo(val)}
          >
            <Meta avatar={<Avatar src={val.picture.large} />} />
            <p className={styles.userInfo}>
              <strong>Name</strong>{" "}
              <span>{`${val.name.title} ${val.name.first} ${val.name.last}`}</span>
            </p>
            <p className={styles.userInfo}>
              <strong>Email</strong>
              <span>{val.email}</span>
            </p>
            <p className={styles.userInfo}>
              <strong>City</strong>
              <span>{`${val?.location.city}, ${val?.location.country}`}</span>
            </p>
            <p className={styles.userInfo}>
              <strong>Born Date</strong>
              <span>{moment(val.dob.date).format("DD-MM-YYYY, HH:mm:ss")}</span>
            </p>
            <p className={styles.userInfo}>
              <strong>Age</strong>
              <span>
                {ageConverter(moment(val.dob.date).format("L")) + " years"}
              </span>
            </p>
          </Card>
        );
      })}
    </div>
  );
}
