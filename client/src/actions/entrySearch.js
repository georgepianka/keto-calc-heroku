export const getEntrySearch = (term) => {
  return dispatch => {
    var request = new Request('https://cors-anywhere.herokuapp.com/https://trackapi.nutritionix.com/v2/natural/nutrients', {
    	method: 'POST',
      body: JSON.stringify({
    		query: searchValue,
        timezone: "US/Eastern"
    	}),
    	headers: {
        'Accept': 'application/json',
    		'Content-Type': 'application/json',
        'x-app-id': `${process.env.REACT_APP_API_ID}`,
        'x-app-key': `${process.env.REACT_APP_API_KEY}`
    	},
    });
    console.log(process.env)
    return fetch(request)
      .then(response => response.json())
      .then(cb);
  }
}
