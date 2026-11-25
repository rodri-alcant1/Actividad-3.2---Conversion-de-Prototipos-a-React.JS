/* Usamos el prop { texto } para que los datos de la barra de búsqueda coincida con el artista, el album y
    la foto del artisita cuando se modifique en `App.jsx`
*/
function SearchBar({ texto }) {
  return <div className="search">{texto}</div>;
}

export default SearchBar;