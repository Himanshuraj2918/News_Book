import React from 'react'
import { ArrowUpRight } from 'lucide-react'


const NewsItem = (props) => {
  const { news } = props;
  
  return (
    <div className='p-3'>
  <div className="p-3 flex max-w-lg h-[500px] w-[390px] rounded-md border flex-col">
      <div className="h-[50%] w-[99%] p-[1%] ">
        <img
          src={!news.urlToImage?"https://images.pexels.com/photos/158651/news-newsletter-newspaper-information-158651.jpeg?auto=compress&cs=tinysrgb&w=600":news.urlToImage}
          className="h-full w-full rounded-md "
        />
      </div>
      <div>
        <div className="mt-4">
          <a href={news.url} className="inline-flex items-center text-xl font-semibold hover:text-red-600 cursor-pointer">
            {news.title}
          </a>
          <p className="mt-3 text-sm text-gray-600">
            {news.description}
          </p>
          <p className="mt-4 text-sm text-black">
           <span className='text-white bg-red-600 p-1 rounded-md text-md'>{news.source.name}</span>   {new Date(news.publishedAt).toGMTString()}
        
          </p>
         
          
        </div>
      </div>
    </div>

    </div>
  )
}

export default NewsItem


