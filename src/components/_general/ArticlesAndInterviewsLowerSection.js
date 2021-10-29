import React, { useState } from "react";
import ArticlesAndInterviewsGrid from "./ArticlesAndInterviewsGrid";
import { useEffect } from "react/cjs/react.development";

import "../../styles/_general/articles_and_interviews_lower_sec.css";

import ArticlesAndInterviewsDataObj from "./helpers/articles_and_interviews_data_constructor";
import SortingComp from "./SortingComp";

import parseDate from "./helpers/dateConverter";
import sortDataBy from "./helpers/articles_and_interviews_sorter";

function ArticlesAndInterviewsLowerSection({ dataSrcFun }) {
  const [articlesData, setArticlesData] = useState([]);

  useEffect(async () => {
    let tempData = [];

    let rawData = (await dataSrcFun()).data;
    for (let index = 0; index < rawData.length; index++) {
      tempData.push(
        new ArticlesAndInterviewsDataObj(
          rawData[index].thumbnail,
          rawData[index].title,
          new Date(rawData[index].date).getTime(),
          parseDate(rawData[index].date),
          rawData[index].url
        )
      );
    }

    setArticlesData(tempData);
  }, []);

  function handlSortChange(newSortState) {
    setArticlesData(
      sortDataBy(
        articlesData,
        "timeStamp",
        newSortState === "NEWEST_FIRST" ? -1 : 1
      )
    );
  }

  return (
    <div className="articles-lower-section-primary-wrapper">
      <SortingComp onSortChangeFun={handlSortChange} />
      <ArticlesAndInterviewsGrid inputData={articlesData} />
    </div>
  );
}

export default ArticlesAndInterviewsLowerSection;
