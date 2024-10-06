import "./App.css";

function App() {
  const chapters =
    Array.from({ length: 21 }, (_, i) => `Chapter ${i + 1}`) || [];

  chapters.splice(11, 0, "Chapter 11.5");

  return (
    <>
      {chapters.map((chapter) => (
        <p>{chapter}</p>
      ))}
    </>
  );
}

export default App;
