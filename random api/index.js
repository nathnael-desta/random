async function apiCheck() {
  const url = 'https://zappos1.p.rapidapi.com/products/detail?productId=9143855';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '9474f424eamsh8fa31bd2b0eb7ddp1cedd3jsn9990179e99f2',
      'x-rapidapi-host': 'zappos1.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

apiCheck();