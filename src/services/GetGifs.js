const apiKey = "hsThNjqAO3FGpAwDp8XWjKUAwtxVmLD5";

export default function GetGifs({ keyword = "morty" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=0&rating=r&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const gifs = data.map((image) => {
        const { title, id } = image;

        const uri = image.images.downsized_medium.url;
        return { title, id, uri };
      });
      return gifs;
    });
}
