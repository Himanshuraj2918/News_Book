import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = (props) => {
  const [newsData, setnewsData] = useState([])
 
  useEffect(() => {
    <div>Data Fetching..................</div>
    fetchData();
  }, [])

   
const fetchData = async () =>{
  const response = await fetch(
    
    `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.type}&apiKey=8cff025a62d745138caf318070c62e5c`
  );
  const data = await response.json();
  console.log(data);
  setnewsData(data.articles)
}



  return (
    <>
      <div className="mx-5 mt-5">

        <div className="flex">
          <div className="flex flex-wrap  ">
            {
              newsData.map((news) => <NewsItem  news={news} />)
            }

          </div>


        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  country : "in"
}

export default News;
