import { useEffect, useState } from "react";
import Chapter from "./components/Chapter";

function App() {
  const [selectedChapter, setSelectedChapter] = useState<number>(0);

  const chapters = Array.from({ length: 21 }, (_, i) => i + 1) || [];

  chapters.splice(11, 0, 11.5);

  useEffect(() => {
    document.title = "Oathsworn Instant Action Mode";
  }, []);

  return (
    <div className="max-h-screen overflow-scroll mh-2">
      <div className="flex justify-center">
        <article className="prose p-4 relative">
          <h1 className="text-4xl font-bold text-center">
            Oathsworn Instant Action Mode
          </h1>
          {selectedChapter !== 0 ? (
            <div className="mb-20">
              <Chapter chapter={selectedChapter} />
              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setSelectedChapter(0)}
                  className="btn btn-neutral "
                >
                  Back
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedChapter(chapter)}
                  className="btn btn-neutral flex-1"
                >
                  Chapter {chapter}
                </button>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

export default App;
