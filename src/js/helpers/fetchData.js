  const fetchData = async (locationSearchUrl, weatherFetchUrl, city, property, proxyUrl) => {
    // Fetch city
    const woeid = fetch(proxyUrl + locationSearchUrl + city).then((resp) => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then((data) => {
            const err = { errorMessage: data.message };
            throw err;
          });
        }
          const err = { errorMessage: "Please try again later, server failed to respond." };
          throw err;
      }
      return resp.json();
});

    const weatherData = await woeid.then(d => fetch(proxyUrl + weatherFetchUrl + d[0][property])).then(d => d.json()).catch(() => console.log("City not found!"));

    // Return an object containing all the necessary data for display

    return weatherData;
  };


  const fetchCities = async (locationSearchUrl, term, proxyUrl) => fetch(proxyUrl + locationSearchUrl + term).then((resp) => {
      if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
          return resp.json().then((data) => {
            const err = { errorMessage: data.message };
            throw err;
          });
        }
          const err = { errorMessage: "Please try again later, server failed to respond." };
          throw err;
        }
        return resp.json();
      })
      .catch(err => console.log(err.message));

  export { fetchData, fetchCities };