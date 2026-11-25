import "./App.css";
import { alejandro, bisbal } from "./data/cantantes";
import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import ArtistInfo from "./components/ArtistInfo";
import Player from "./components/Player";
import CheckboxSamples from "./components/CheckboxSamples";
import SearchBar from "./components/SearchBar";
import EmojiCarousel from "./components/EmojiCarousel";
import BottomNav from "./components/BottomNav";

// Aquí se elige el cantante que se muestra.
// Para ver a Bisbal, cambia "alejandro" por "bisbal".
const cantante = alejandro;

function App() {
  return (
    <div className="app">
      <Header artista={cantante.artista} album={cantante.album} />
      <ProgressBar />
      <ArtistInfo foto={cantante.foto} artista={cantante.artista} />
      <Player />
      <CheckboxSamples />
      <SearchBar texto={cantante.artista} />
      <EmojiCarousel />
      <BottomNav />
    </div>
  );
}

export default App;