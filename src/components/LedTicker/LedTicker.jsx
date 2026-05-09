import React from 'react';
import './LedTicker.css';

function TickerPhrase() {
  return (
    <span className="led-ticker-phrase">
      <span className="led-ticker-word">Venkateswara</span>
      <span className="led-ticker-led">
        <span className="led-ch led-ch--r">L</span>
        <span className="led-ch led-ch--g">E</span>
        <span className="led-ch led-ch--b">D</span>
      </span>
      <span className="led-ticker-word">Displays</span>
    </span>
  );
}

/** One loop unit: single line “Venkateswara LED Displays” + long gap (duplicate segment only for seamless scroll). */
function TickerSegment() {
  return (
    <div className="led-ticker-segment">
      <TickerPhrase />
      <span className="led-ticker-runway" aria-hidden />
    </div>
  );
}

export default function LedTicker() {
  return (
    <div className="led-ticker" aria-hidden>
      <div className="led-ticker-viewport">
        <div className="led-ticker-track">
          <TickerSegment />
          <TickerSegment />
        </div>
      </div>
    </div>
  );
}
