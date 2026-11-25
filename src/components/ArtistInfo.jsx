/* Usamos el prop { foto, artista } para que cuando el `App.jsx` llame a `cantantes.js` 
    se pueda modificar los datos de los artistas y su foto 
*/
function ArtistInfo({ foto, artista }) {
  return (
    <section className="artist-info">
      <img src={foto} alt={artista} className="artist-photo" />
      <div className="text-blocks">
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
        <div className="block"></div>
      </div>
    </section>
  );
}

export default ArtistInfo;