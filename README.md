# Reproductor de música con React

Hemos creado un prototipo similar al que hicimos en Balsamiq, pero
en este caso fue creado mediante React.js, y con el uso de props 
hemos podido hacer que los datos se puedan modiificar sin tocar el código
ya que estos permiten que al momento de cambiar un solo dato en `App.jsx`
este pueda modificar la información.

# Cómo se creó el proyecto

1. Crear el proyecto con Vite:
   /*
   npm create vite@latest conversion-a-prototipo
   cd conversion-a-prototipo
   npm install
   */
2. Modificar `index.css` y `App.css` quitando los estilos predefinidos que viene al momento de instalarlo
3. Crear la carpeta `src/components/` con un componente por cada sección del mockup
4. Montar todos los componentes en `App.jsx`
5. Dar estilo a cada parte de la `App.jsx` en `App.css`
6. Mover los datos del cantante a `src/data/cantantes.js` para poder cambiarlo fácilmente.

# Componentes

| Components |
| `Header` | Nombre del artista y título del álbum |
| `ProgressBar` | Barra de de la música |
| `ArtistInfo` | Foto del cantante y apartado que simula texto de la música |
| `Player` | Controles de play/pause, barra de progreso y volumen |
| `CheckboxSamples` | Casillas desmarcadas, marcadas e indeterminadas |
| `SearchBar` | Barra de búsqueda con el nombre del artista |
| `EmojiCarousel` | Carrusel de emojis con el emoji del centro destacado |
| `BottomNav` | Barra de navegación con tres iconos |

## Cómo cambiar de cantante

Los datos están en `src/data/cantantes.js` (imagen, título y subtítulo).

1. Las fotos de los artistas están guardados en `src/assets/`.
2. Se añadío un nuevo cantante en `src/data/cantantes.js`.
3. En `App.jsx`, se cambia la línea:
   
   `const cantante = alejandro;`
   
   por el cantante que quieras, por ejemplo `bisbal`.

`Header`, `ArtistInfo` y `SearchBar` reciben estos datos mediante props, así que no hay que tocarlos.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

