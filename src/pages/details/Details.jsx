import React from "react";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import "./style.scss";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/videosSection";
import Similar from "./carousels/Similar";
import Recommendations from "./carousels/Recommendations";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  //console.log("Hello");

  return (
    <div>
      {/* <h1>riyaaaaaaaaaa</h1> */}
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <VideosSection data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendations mediaType={mediaType} id={id} />
    </div>
  );
};
export default Details;
