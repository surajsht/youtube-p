import { useState, useEffect } from "react";
import Test from "./Test";
import VideoLength from "./VideoLength";

let URL = 'https://youtube138.p.rapidapi.com/search/?q=greenday&hl=en&gl=US'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '137a591ce0mshb488325be3f2a30p129609jsnb8c7608a1bf9',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

const App = () => {
  let [apiData, setApiData] = useState([])

  let getApi = async () => {
    let fetchApi = await fetch(URL, options)
    let response = await fetchApi.json()
    setApiData(response.contents)
  }

  useEffect(() => {
    getApi()
  }, [])

  return (
    <div>
      {apiData.map((item, itemIdx) => {
        let Totalviews = item?.video && item?.video?.stats?.views
        let totalTime = item?.video && item?.video?.lengthSeconds

        return <div className="item" key={itemIdx}>
          <img src={item?.video?.thumbnails?.[0]?.url} alt="" />
          <h2> {item?.video?.title} </h2>
          <VideoLength totalTime={totalTime} />
          {item?.video && <span> Published: {item?.video?.publishedTimeText} </span>}
          {item?.video && <span> Views: {<Test Totalviews={Totalviews} />} </span>}
        </div>
      })}
    </div>
  )
}

export default App