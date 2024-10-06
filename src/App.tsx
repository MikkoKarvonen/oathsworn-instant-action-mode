import { useState } from "react";
import Chapter from "./components/Chapter";

function App() {
  const [selectedChapter, setSelectedChapter] = useState<number>(0);

  const chapters = Array.from({ length: 21 }, (_, i) => i + 1) || [];

  chapters.splice(11, 0, 11.5);

  return (
    <div className="flex justify-center">
      <article className="prose">
        <h1 className="text-4xl font-bold">Oathsworn Instant Action Mode</h1>
        {selectedChapter !== 0 ? (
          <>
            <Chapter chapter={selectedChapter} />
            <button
              onClick={() => setSelectedChapter(0)}
              className="btn btn-neutral"
            >
              Back
            </button>
          </>
        ) : (
          chapters.map((chapter, index) => (
            <button
              key={index}
              onClick={() => setSelectedChapter(chapter)}
              className="btn btn-neutral"
            >
              Chapter {chapter}
            </button>
          ))
        )}
      </article>
    </div>
  );
}

export default App;
