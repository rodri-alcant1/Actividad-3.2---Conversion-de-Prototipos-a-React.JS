/* Al igual que en `ArtistInfo.jsx`, aquí usamos también un prop similar { artista, album } para que los 
    datos puedan ser modificados al momento de cambiar el nombre del artista/cantante en `App.jsx`
 */
function Header({ artista, album }) {
  return (
    <header className="header">
      <h1>{artista}</h1>
      <h2>- {album} -</h2>
    </header>
  );
}

export default Header;