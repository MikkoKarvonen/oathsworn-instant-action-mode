import { useState } from "react";
import "./App.css";
import Chapter from "./components/Chapter";

function App() {
  const [selectedChapter, setSelectedChapter] = useState<number>(0);

  const chapters = Array.from({ length: 21 }, (_, i) => i + 1) || [];

  chapters.splice(11, 0, 11.5);

  return (
    <>
      <h1>Oathsworn Instant Action Mode</h1>
      {selectedChapter !== 0 ? (
        <>
          <Chapter chapter={selectedChapter} />
          <button onClick={() => setSelectedChapter(0)}>Back</button>
        </>
      ) : (
        chapters.map((chapter) => (
          <button onClick={() => setSelectedChapter(chapter)}>
            Chapter {chapter}
          </button>
        ))
      )}
    </>
  );
}

export default App;
