const getImagen = async () => {
  try {
    const apiKey = "M1Jbawg51O4AXWipNcgsw1MQuI48NecD";
    const respuesta = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await respuesta.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    console.error(error);
  }
};

getImagen();
