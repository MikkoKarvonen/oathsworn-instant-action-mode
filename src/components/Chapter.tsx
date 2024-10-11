import Chapter1 from "./chapter/Chapter1";
import Chapter2 from "./chapter/Chapter2";
import Chapter3 from "./chapter/Chapter3";
import Chapter4 from "./chapter/Chapter4";
import Chapter5 from "./chapter/Chapter5";

const Chapter = ({ chapter }: { chapter: number }) => {
  const chapters: { [key: number]: React.ComponentType } = {
    1: Chapter1,
    2: Chapter2,
    3: Chapter3,
    4: Chapter4,
    5: Chapter5,
  };

  const SelectedChapter = chapters[chapter];

  return (
    <>
      <h2 className="text-2xl font-bold">Chapter {chapter}</h2>
      {SelectedChapter ? <SelectedChapter /> : <p>Chapter not found</p>}
    </>
  );
};

export default Chapter;
