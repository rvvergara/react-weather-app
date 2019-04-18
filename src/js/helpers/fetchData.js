  const fetchData = async (locationSearchUrl, weatherFetchUrl, city, property, proxyUrl) => {
    // Fetch city
    const woeid = fetch(proxyUrl + locationSearchUrl + city).then(data => data.json());

    const weatherData = await woeid.then(d => fetch(proxyUrl + weatherFetchUrl + d[0][property])).then(d => d.json()).catch(() => console.log("City not found!"));

    // Return an object containing all the necessary data for display

    return weatherData;
  };


  const fetchCities = async (locationSearchUrl, term, proxyUrl) => {
    const cities = fetch(proxyUrl + locationSearchUrl + term).then(res => res.json()).catch(() => `${term} not found`);
    return cities;
  };

  export { fetchData, fetchCities };