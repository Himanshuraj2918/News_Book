import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Shimmer from "./Shimmer";

const News = (props) => {
  const API_URL = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.type}&apiKey=${props.apikey}`
       
  const [newsData, setnewsData] = useState([])
  const [fetchError,setFetchError] = useState()
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
        setnewsData(data.articles)
      }
      catch (error) {
        setFetchError(error.message)
      }finally{
        setIsLoading(false)
      }
    }
    setTimeout(() => {
      fetchData()
    }, 3000);
  }, [props])






  return (
    <>
      <div className="mx-5 mt-5">
       
       {isLoading &&<div className="flex flex-wrap justify-center">
        
        <Shimmer/> <Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/><Shimmer/></div>}
       {fetchError && <p className="text-center text-red-600 text-3xl font-semibold">{`${fetchError}`} !!</p> }
      {!fetchError &&  <div className="flex">
          <div className="flex flex-wrap  ">
            {
              newsData.map((news, i) => <NewsItem key={i} news={news} />)
            }

          </div>


        </div>}
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in"
}

export default News;
