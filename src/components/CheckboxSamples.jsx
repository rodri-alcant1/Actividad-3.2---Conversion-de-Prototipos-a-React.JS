function CheckboxSamples() {
  return (
    <section className="checks">
      <div className="check-column">
        <div className="check-item">
          <div className="box"></div>
          <span>not selected</span>
        </div>
        <div className="check-item">
          <div className="box filled">✔</div>
          <span>selected</span>
        </div>
        <div className="check-item">
          <div className="box filled">−</div>
          <span>indeterminate</span>
        </div>
      </div>

      <div className="check-column">
        <div className="check-item">
          <div className="box"></div>
          <span>not selected</span>
        </div>
        <div className="check-item">
          <div className="box filled">✔</div>
          <span>selected</span>
        </div>
        <div className="check-item">
          <div className="box filled">−</div>
          <span>indeterminate</span>
        </div>
      </div>
    </section>
  );
}

export default CheckboxSamples;