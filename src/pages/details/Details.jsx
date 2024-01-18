import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";

const Details = () => {
  // const { mediaType, id } = useParams();
  // const { data, loading } = useFetch(`/${mediaType}/{id}`);
  console.log("Hello");

  return (
    <div>
      <h1>riyaaaaaaaaaa</h1>
      <DetailsBanner />
    </div>
  );
};
export default Details;
