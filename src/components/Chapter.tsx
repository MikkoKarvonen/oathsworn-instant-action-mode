import Chapter1 from "./chapter/Chapter1";
// import Chapter2 from "./chapter/Chapter2";
// import Chapter3 from "./chapter/Chapter3";

const Chapter = ({ chapter }: { chapter: number }) => {
  const chapters: { [key: number]: React.ComponentType } = {
    1: Chapter1,
    // 2: Chapter2,
    // 3: Chapter3,
  };

  const SelectedChapter = chapters[chapter];

  return (
    <>
      <h2>Chapter {chapter}</h2>
      {SelectedChapter ? <SelectedChapter /> : <p>Chapter not found</p>}
    </>
  );
};

export default Chapter;
