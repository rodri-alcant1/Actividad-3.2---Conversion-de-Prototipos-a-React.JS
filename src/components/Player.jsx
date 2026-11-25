function Player() {
  return (
    <section className="player">
      <div className="player-row">
        <button className="btn-square">⏹</button>
        <div className="track">
          <div className="track-fill"></div>
        </div>
        <button className="btn-gray">🔊</button>
      </div>

      <div className="player-controls">
        <div className="volume-track">
          <div className="volume-thumb"></div>
        </div>
        <button className="btn-control">⏪</button>
        <button className="btn-control">▶️</button>
        <button className="btn-control">⏩</button>
        <span className="speaker-gray">🔊</span>
      </div>
    </section>
  );
}

export default Player; 