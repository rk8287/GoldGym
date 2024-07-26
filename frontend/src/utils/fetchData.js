

export const excerciseOptions = {
	method: 'GET',
	hostname: 'exercisedb.p.rapidapi.com',
	headers: {
		'x-rapidapi-key': 'ca4be573b8msh2d26c0fbfb6c4dbp17ebfajsn88fe28ac07a9',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': 'ca4be573b8msh2d26c0fbfb6c4dbp17ebfajsn88fe28ac07a9',
	},
  };



export const fetchData = async (url, options) =>{


    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}