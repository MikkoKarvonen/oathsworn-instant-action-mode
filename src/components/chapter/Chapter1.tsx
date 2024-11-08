import { useState } from "react";
import "../Audio.scss";

import audio1 from "../../assets/audio/chapter1/1.mp3";
import audio2 from "../../assets/audio/chapter1/2.mp3";
import audio3 from "../../assets/audio/chapter1/3.mp3";
import audio4 from "../../assets/audio/chapter1/4.mp3";
import audio5 from "../../assets/audio/chapter1/5.mp3";
import audio6 from "../../assets/audio/chapter1/6.mp3";
import audio7 from "../../assets/audio/chapter1/7.mp3";
import audio8 from "../../assets/audio/chapter1/8.mp3";
import audio9 from "../../assets/audio/chapter1/9.mp3";

import map from "../../assets/images/1.png";
import Collapse from "../Collapse";
import Player from "../Player";

const sounds = [
  audio1,
  audio2,
  audio3,
  audio4,
  audio5,
  audio6,
  audio7,
  audio8,
  audio9,
];

const Chapter = () => {
  const [currentAudio, setCurrentAudio] = useState(0);

  const sections = [
    <>
      <p>
        Green mud sucks at your boots, every stride a challenge as you trudge
        through the rain. Your hands grip the thick iron cable of the Wire Road,
        pulled taut through rings sunken into the trunks of hideous trees. For
        days now, it has been the only evidence of humanity's existence in the
        Deepwood. You have lost one member of your group on the journey so far.
        The sound of the thrum as Samil was plucked from the Wire is still fresh
        in your mind.
      </p>
      <p>
        The fortress town of Bastone looms before you, its ancient gray walls
        battered by the rain. People have been dying here and you have answered
        the call, under contract, to find out why. The Oathmark on your wrist
        grants you entry through the thick gates to a quarantine area manned by
        a grim-faced guard. "Oathsworn. Heard you were coming. We found more
        bodies last night. Make your mark and enter."
      </p>
    </>,
    <>
      <p>WRITE A NAME FOR YOUR FREE COMPANY ON THE FREE COMPANY SHEET.</p>
      <p>
        ALL OATHSWORN GAIN ONE PERMANENT COMBAT TOKEN (YOUR CHOICE) TO SHOW WHAT
        KIND OF FREE COMPANY YOU ARE. THIS MUST BE THE SAME FOR ALL OATHSWORN.
        MARK THIS ON YOUR CHARACTER SHEETS.
      </p>
    </>,
    <>
      <p>
        Beyond the portcullis, you encounter a street urchin named, Midge, who
        calls himself the 'Mayor of Bastone. He convinces you to hire him to act
        as your guide during your stay here.
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'A' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
      </p>
      <p>GAIN ALLY CARD 1 (MIDGE).</p>
    </>,
    <>
      <p>
        Midge escorts you to a small tavern, The Broken Oak, to secure lodging.
        "Pot's Peace!" a burly man behind the bar calls out, "The yams are fresh
        and the rum's dark as the Deepwood."
      </p>
      <p>
        Another man chimes in, "Things are not fresh just because they are green
        Bram, especially if they're supposed to be yellow." He turns to you with
        a wry smile, "Greycane is the name. I'm the eyes and ears of this town."
      </p>
      <p>
        "The mouth, more like," Bram adds. You enquire about the rash of murders
        and Greycane recommends you speak with a body collector who may have
        information. After stocking up on supplies, you head out to begin your
        search for him.
      </p>
    </>,
    <>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY. AFTERWARD,</p>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A REDRAW TOKEN FOR QUICKLY FOLLOWING THE LEADS.
      </p>
    </>,
    <>
      <p>
        Your investigation leads you to a ramshackle hut in The Burrows where
        you find the body collector with his hungry family. "You need words, we
        need food. Iron helps," he bargains.
      </p>
    </>,
    <>
      <p>
        PERFORM A BARTERING CHECK (DIFFICULTY 7). BEFORE YOU DRAW, YOU CAN SPEND
        ANY AMOUNT OF IRON TO REDUCE THE DIFFICULTY OF THIS CHECK BY THE SAME
        AMOUNT.
      </p>
      <p>FOR EXAMPLE, SPEND 1 TO REDUCE THE DIFFICULTY BY 1.</p>
      <p>
        IF YOU SUCCEED, ALL OATHSWORN GAIN A +2 ANIMUS TOKEN FOR OBTAINING GOOD
        INFORMATION FROM THE BODY COLLECTOR AND FINDING YOUR TARGET QUICKLY.
      </p>
    </>,
    <>
      <p>
        "Not me you're looking for, I do the job proper," he says. "Jeffit's the
        one you want. He pays them guards to look the other way while he throws
        'em right over the wall. I tell ya, that's what lures the monsters."
      </p>
      <p>
        The body collector directs you to a guard tower on the outer wall of
        Bastone. Climbing the rain slicked stone steps of the tower, you
        approach a group of guards and call out to them through the dark, wet
        night. They know exactly why you have come, and what you are looking
        for. Fearing for their lives, and in an attempt to keep their secret
        safe they attack.
      </p>
    </>,
    <>
      <p>
        PERFORM A ROUND OF COMBAT AGAINST DEFENSE 5. ALL OATHSWORN THAT CRITICAL
        DURING THE COMBAT GAIN AN EMPOWERED X3 TOKEN.
      </p>
    </>,
    <>
      <p>
        After you dispatch the last guard, you begin to search for signs of
        bodies discarded by the other body collector, Jeffit. During the search,
        you encounter another guard peering into the darkness below the wall.
        "Help her!" he cries out to you. "They've been throwing bodies off the
        wall for weeks now, but she's still alive!" As you look over the
        crenelations, you see a pack of rat-like creatures crawl from the
        Deepwood and drag a woman out of a pile of corpses below.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A DEFENSE TOKEN AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR
        CHAPTER 1 ON YOUR FREE COMPANY SHEET.
      </p>
    </>,
    <>
      <p>
        You know what the creatures are. These are just the pups, and their
        mother is likely nearby. The guard, Dane, joins you as you climb down
        the wall and give pursuit.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 3 (DANE).</p>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
    </>,
    <>
      <p>
        You track the rats to a circular depression in the Deepwood and find the
        woman, torn and bloody before you. The rotten stench of death and decay
        assaults your senses as you glimpse the movement of a hulking shape
        stirring in the shadows. The massive body of a Broodmother steps into
        the clearing, her great head of rotten fur and gnawing teeth rolls
        toward you with ravenous hunger as her eyes meet yours.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 1 AND TRIANGLE(△).</p>
      <p>
        IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 1 AND
        TRIANGLE(△).
      </p>
      <img src={map} />
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        After the battle, you return to the relative comfort of The Broken Oak
        with the Broodmother's head as a trophy. Lord Davenish, the Lord of
        Bastone, sends you a small pouch of iron as a reward for slaying the
        beast and asks that you meet with him in the morning.
      </p>
    </>,
    <>
      <p>GAIN 8 IRON.</p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 1 ON YOUR FREE
        COMPANY SHEET.
      </p>
      <p>TALLY LEVEL, LOOT AND LOSSES.</p>
    </>,
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <Collapse
          key={index}
          index={index + 1}
          checked={index === 0}
          audioIndex={index % 2 === 0 ? index / 2 : undefined}
          setCurrentAudio={setCurrentAudio}
        >
          {section}
        </Collapse>
      ))}
      <Player sound={sounds[currentAudio]} />
    </div>
  );
};

export default Chapter;
