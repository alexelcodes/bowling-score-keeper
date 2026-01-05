import React, { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ResultsTable } from "./ResultsTable";

export const EndScreen = () => {
  const { game, currentRound, backToMain, restartGame, prevFrame } = useContext(GlobalContext);
  const resultRef = useRef();

  const downloadPDF = () => {
    window.print();
  };

  return (
    <div className="end-screen-container">
      <div ref={resultRef} className="print-area">
        <ResultsTable
          players={game.players}
          currentRound={currentRound}
          title="Final Results"
        />
      </div>

      <div className="form-control no-print">
        <button className="btn" onClick={prevFrame}>Modify Last Game</button>
        <button className="btn" onClick={backToMain}>Main Menu</button>
        <button className="btn" onClick={restartGame}>Restart Match</button>
        <button className="btn" onClick={downloadPDF}>Download PDF</button>
      </div>
    </div>
  );
};