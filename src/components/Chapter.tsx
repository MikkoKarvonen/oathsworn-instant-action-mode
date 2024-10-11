import Chapter1 from "./chapter/Chapter1";
import Chapter2 from "./chapter/Chapter2";
import Chapter3 from "./chapter/Chapter3";
import Chapter4 from "./chapter/Chapter4";
import Chapter5 from "./chapter/Chapter5";
import Chapter6 from "./chapter/Chapter6";
import Chapter7 from "./chapter/Chapter7";
import Chapter8 from "./chapter/Chapter8";
import Chapter9 from "./chapter/Chapter9";
import Chapter10 from "./chapter/Chapter10";
import Chapter11 from "./chapter/Chapter11";
import Chapter12 from "./chapter/Chapter12";
import Chapter13 from "./chapter/Chapter13";
import Chapter14 from "./chapter/Chapter14";
import Chapter15 from "./chapter/Chapter15";
import Chapter16 from "./chapter/Chapter16";
import Chapter17 from "./chapter/Chapter17";
import Chapter18 from "./chapter/Chapter18";
import Chapter19 from "./chapter/Chapter19";
import Chapter20 from "./chapter/Chapter20";
import Chapter21 from "./chapter/Chapter21";
import Chapter11_5 from "./chapter/Chapter11.5";

const Chapter = ({ chapter }: { chapter: number }) => {
  const chapters: { [key: number]: React.ComponentType } = {
    1: Chapter1,
    2: Chapter2,
    3: Chapter3,
    4: Chapter4,
    5: Chapter5,
    6: Chapter6,
    7: Chapter7,
    8: Chapter8,
    9: Chapter9,
    10: Chapter10,
    11: Chapter11,
    11.5: Chapter11_5,
    12: Chapter12,
    13: Chapter13,
    14: Chapter14,
    15: Chapter15,
    16: Chapter16,
    17: Chapter17,
    18: Chapter18,
    19: Chapter19,
    20: Chapter20,
    21: Chapter21,
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
