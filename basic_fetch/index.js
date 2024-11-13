// const img = document.querySelector("img");
// const button = document.querySelector("button");
// const input = document.querySelector("input");

// button.addEventListener("click", () => {
//   fetchImg();
// });

// async function fetchImg() {
//   try {
//     let text = input.value.split(" ").join("-");
    
//     const response = await fetch(
//       `https://api.giphy.com/v1/gifs/translate?api_key=kBjFhTa7s4fbYZpX8YCC3NTgTfdViP3D&s=${text}`,
//       { mode: "cors" }
//     );

//     const response2 = await fetch('http://api.weatherapi.com/v1/forcast.json?key=44b21494fc7747369bb71227242602&q=London&aqi=yes')
//     const ram = await response2.json();
//     console.log(ram)
//     if (response.status === 401 ) {
      
//       console.error("fetching error");
//       throw new Error("api error");
//     }
//     let JsonResponse = await response.json();
//     let imageUrl = JsonResponse.data.images.original.url;
//     img.src = imageUrl;
//   } catch (error) {
//     console.error("network error", error);
//   }
// }


async function cityFetch() {
  try {
    const response = await fetch('https://api.weatherapi.com/v1/forecast.json?key=44b21494fc7747369bb71227242602&q=addis-ababa&days=3', {
    });

    if (!response.ok) {
      throw new Error('Network response was not OK');
    }

    const citiesjson = await response.json();
    return citiesjson.location.localtime.split(" ")[1].split(":")[0];
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the weather function and log the result
cityFetch().then((result) => {
  console.log(result);
});