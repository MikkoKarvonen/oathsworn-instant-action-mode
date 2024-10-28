import { useState } from "react";

import audio1 from "../../assets/audio/chapter5/1.mp3";
import audio2 from "../../assets/audio/chapter5/2.mp3";
import audio3 from "../../assets/audio/chapter5/3.mp3";
import audio4 from "../../assets/audio/chapter5/4.mp3";
import audio5 from "../../assets/audio/chapter5/5.mp3";
import audio6 from "../../assets/audio/chapter5/6.mp3";
import audio7 from "../../assets/audio/chapter5/7.mp3";
import audio8 from "../../assets/audio/chapter5/8.mp3";
import audio9 from "../../assets/audio/chapter5/9.mp3";
import audio10 from "../../assets/audio/chapter5/10.mp3";
import audio11 from "../../assets/audio/chapter5/11.mp3";

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
  audio10,
  audio11,
];

const Chapter = () => {
  const [currentAudio, setCurrentAudio] = useState(0);

  const sections = [
    <>
      <p>
        Hunger, cold and constant rain gnaw at you and the remaining survivors
        from Bastone. Finally, hope at last. Rising above the trees in the
        distance, you see the mighty walls of Verum.
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'B' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
      </p>
    </>,
    <>
      <p>
        The survivors cheer as they rush toward the sealed gate, begging for
        admittance. A Captain of the Wall Guard calls down to the caravan from
        atop the sixty-foot wall, "We do not open the gates for mobs emerging
        from the Deepwood!"
      </p>
      <p>
        Stepping to the front of the group, you brandish your Oathmark and
        demand the gate be opened.
      </p>
    </>,
    <>
      <p>
        PERFORM A THREATENING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF YOU
        HAVE AN URSUS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED
        X3 TOKEN AS YOU CONVINCE THE GUARD.
      </p>
    </>,
    <>
      <p>
        The Guard Captain looks over his shoulder and bows his head in
        deference. In his place glides the unmistakable form of a Watcher, its
        visage hidden in the signature black cloak and wielding a raven-headed
        staff. Rising the staff skyward, the towering city gates begin to grind
        open.
      </p>
      <p>
        Beyond hope, you have escorted the survivors of Bastone to Verum. After
        showering you with thanks and praise, the refugees disperse into the
        city, eager to begin their second chance at life. Before departing you
        are called before the Watcher and instructed to debrief the mysterious
        representative of the Raven Spire on the events that transpired in
        Bastone. As you provide details surrounding the events that led to the
        destruction of the city, the Watcher drinks in the knowledge and seems
        especially interested when you mention the term 'Keening.
      </p>
      <p>
        Some days later, while recovering from your injuries, you receive a
        letter containing a reward. It seems the crown has decided to use your
        story as a heroic tale to turn the focus away from Bastone's doom. And
        in light of your 'heroism', you have been granted ownership of a tavern.
      </p>
      <p>
        You have barely taken your first step into the newly acquired
        establishment before Greycane and Midge are discussing how to fix the
        place up. With a tear in his eye, Bram whispers, "She's back. The Broken
        Oak is back."
      </p>
    </>,
    <>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
      <p>
        GAIN A FREE COMPANY TRAIT OF YOUR CHOICE (MARK THIS ON YOUR FREE COMPANY
        SHEET).
      </p>
      <p>
        ALL OATHSWORN LOSE ALL INJURY CARDS, RETURNING THEM TO THE BOTTOM OF THE
        INJURY DECK.
      </p>
    </>,
    <>
      <p>
        You take a few days of rest, and see the new Broken Oak form up. The
        people from Bastone become regulars, telling of their new lives and they
        are always quick to raise a mug in your honor. However, you eventually
        become restless. Comfort is death to a Free Company.
      </p>
      <p>
        Luckily, Greycane has learned of a lord who is in need of help.
        Apparently, a Free Company and an entire logging crew were recently lost
        to the Deepwood and the lord has specifically requested aid from the
        'Heroes of Bastone' to deal with the matter, and protect the next
        logging expedition going out.
      </p>
      <p>
        The next morning you travel south into the Noble District to meet with
        the lord and sign the contract. It seems there are two survivors, a
        squire and a cur, who may be able to provide important information about
        what happened to the original expedition. But you will need to search
        the streets of Verum to find them.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 4) TO FIND THEM FASTER. IF YOU
        SUCCEED, ALL OATHSWORN GAIN A REDRAW TOKEN.
      </p>
    </>,
    <>
      <p>
        It does not take long to find the squire, Jonas, dwelling in the
        Gutters. A foul place, situated at the bottom of the old riverbed, the
        Gutters are home to Verum's poorest. When you find the squire, he
        politely refuses your offer of iron and asks only that you allow him the
        honor to serve the Oathsworn. Impressed with the young man's
        convictions, you accept.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 15 (JONAS).</p>
    </>,
    <>
      <p>
        The boy tells you that the cur, Keet, can be found at the Grand Bazaar.
        The thick crowds there are hard to navigate, but it gives you time to
        inspect the vendor's wares.
      </p>
    </>,
    <>
      <p>ALL OATHSWORN MAY TRADE 5 IRON TO GAIN A +2 ANIMUS TOKEN ONCE.</p>
    </>,
    <>
      <p>
        Jonas points out Keet to you, and before she can bolt, you corner her
        with questions. She tells you where they were attacked, but she does not
        know by what.
      </p>
      <p>
        As night falls, you gather a few amber torches and head outside the city
        walls to search for the remnants of the expedition.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 6). IF YOU SUCCEED, MARK THE
        ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 5 ON YOUR FREE COMPANY
        SHEET.
      </p>
    </>,
    <>
      <p>
        A short distance into the Deepwood, you find the broken and bloodied
        bodies of the lost expedition exactly where Keet described they would
        be. As you inspect the deceased, you can see these people were not
        bitten or mauled, but rather stung, and as you investigate the battle
        scene, you find only human tracks. Whatever killed these people must
        have been airborne, and there is only one thing you know of that flies
        and is capable of slaughtering an expedition this size - a Bloatfly.
      </p>
      <p>
        Just as you finish the thought, the bodies before you bursting, young
        bloatflies crawl out, immediately jump up in the air and attack with
        their stingers.
      </p>
    </>,
    <>
      <p>
        PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. ALL OATHSWORN THAT SUCCEED,
        GAIN A DEFENSE TOKEN.
      </p>
    </>,
    <>
      <p>
        Armed with as much knowledge as you can glean with the time you have,
        you assemble the new logging expedition and prepare yourselves.
      </p>
    </>,
    <>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
    </>,
    <>
      <p>
        Under your protection, the new expedition heads out and begins to lay
        axes to trees. They start working, and shortly thereafter, you hear it.
        The buzzing. The grotesque, bulbous shape of a bloatfly dives through
        the canopy. Desperately, you shove aside one logger before he can be
        impaled and turn to face the writhing tentacles and multifaceted eyes of
        your enemy.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 5.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 5.</p>
      <img src={map} />
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        With the bloatfly dead, and its body burned, the loggers collect the
        timber and you return to Verum. On the march back you try not to think
        about all the lives lost just so some noble could have a fine wooden
        chair to sit on, but an oath is an oath, and contracts such as these pay
        well.
      </p>
    </>,
    <>
      <p>GAIN 10 IRON.</p>
      <p>GAIN 2 IRON PER CIVILIAN LEFT ALIVE AT THE END OF THE ENCOUNTER.</p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA{" "}
      </p>
      <p>UNIQUE ITEM BOX FOR CHAPTER 5 ON YOUR FREE COMPANY SHEET.</p>
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
