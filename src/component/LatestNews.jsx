import React from "react";

function LatestNews(props) {
    const {newsData} = props
  return (
    <div className="w-[200px] rounded-md border p-3 mt-4 text-lg font-medium hover:text-red-600 cursor-pointer ">
      <div>
      {newsData.title}
      </div>
    </div>
  );
}

export default LatestNews;
