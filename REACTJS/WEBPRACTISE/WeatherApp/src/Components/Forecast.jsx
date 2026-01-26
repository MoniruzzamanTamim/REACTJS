import React,{useState,useEffect} from 'react'

function Forecast({city,API_KEY}) {

    const [forecast, setForecast] = useState([]);

    useEffect(() => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.list) {
          setForecast(data.list.slice(0, 5)); // next 5 time slots
        }
      })
      .catch(() => setForecast([]));
  }, [city]);

  return (
    <>

        {/* 🔹 Forecast Section */}
            {forecast  && (
              <div className="mt-4">
                <h5 className="text-center">Next Forecast</h5>

                <div className="d-flex justify-content-between">
                  {forecast.map((item, i) => (
                    <div key={i} className="text-center small">
                      <p>{item.dt_txt.split(" ")[0]}</p>
                      <p>{item.main.temp}°C</p>
                    </div>
                  ))}
                </div>

              </div>
            )}
    
    
    </>
  )
}

export default Forecast