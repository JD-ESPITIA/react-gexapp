

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(category)}&api_key=GRPS7a9MapYilEebqFykUVla17nsvT2G&limit=3`;
    const resp = await fetch(url);

    const {data} = await resp.json(); // se destructura porque hay un elemento data dentro de data
    // console.log(data);

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    // console.log(gifs);

    console.log(gifs); // nuevo estado para state 

    // regresa una promesa que resuelkve la colección de gfis
    return gifs;
}