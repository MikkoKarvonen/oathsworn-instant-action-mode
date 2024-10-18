import { useState } from "react";

import audio1 from "../../assets/audio/chapter16/1.mp3";
import audio2 from "../../assets/audio/chapter16/2.mp3";
import audio3 from "../../assets/audio/chapter16/3.mp3";
import audio4 from "../../assets/audio/chapter16/4.mp3";
import audio5 from "../../assets/audio/chapter16/5.mp3";
import audio6 from "../../assets/audio/chapter16/6.mp3";
import audio7 from "../../assets/audio/chapter16/7.mp3";
import audio8 from "../../assets/audio/chapter16/8.mp3";
import audio9 from "../../assets/audio/chapter16/9.mp3";

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
        As you wake up to a sweltering day in the City of Masks you look down at
        your arms. The black spots are spreading and whatever effect the elixir
        is having is wearing off. The plague is growing stronger.
      </p>
    </>,
    <>
      <p>
        INCREASE THE PLAGUE STAGE' NUMBER BY ONE ON YOUR FREE COMPANY SHEET.
      </p>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
    </>,
    <>
      <p>
        When you return to the underground, you learn the Pytone had been right.
        There never was a witch. With no other lead, you return to the Pytone
        who parades a woman on a chain in front of you. "This is what you are
        looking for, I believe." The woman is heavily drugged, but as she senses
        she is not in she lashes out. The room begins to shudder. She is
        immensely powerful and you dread to think what she would be capable of
        when lucid. "Sweet of you to try, Aurelia," the Pytone coos, and forces
        a vial into the woman's mouth. The power subsidies. "Aether," the Pytone
        says. "You can have her and the sedative. In return, bring me the heart
        of the Ogre of Thrace. You consider taking the witch by force, but the
        dozens of guards within arms reach change your mind. Frustrated that
        this masked noble has you in his clutches once more, you agree to his
        terms.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A REDRAW TOKEN FOR PICKING UP A LEAD QUICKLY.
      </p>
    </>,
    <>
      <p>
        Hearing that the animal trainers may have some information, you head to
        the Coliseum. You pass many cages with creatures when one of them
        beckons you. An Ursus, kept here as a 'beast. His name is Many Winters,
        and he tells you that the Ogre you seek is somewhere outside the city.
        It recently attacked a caravan. He also asks for your help. If you can
        stage a fight in the arena enabling him to feign death, he can escape
        and join your Free Company. You must be careful not to kill him in the
        process though.
      </p>
    </>,
    <>
      <p>A. Stage a fight.</p>
      <p>
        PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. IF AT LEAST ONE OATHSWORN
        SUCCEEDS AND NO ONE HAS A RESULT OF 10 OR MORE, GAIN ALLY CARD 42 (MANY
        WINTER). THE THRACIAN BLADE MAY ADD OR SUBTRACT 2 FROM HIS RESULT.
      </p>
      <p>B. Leave.</p>
      <p>ALL OATHSWORN GAIN A +2 ANIMUS TOKEN.</p>
    </>,
    <>
      <p>
        Traveling to where the caravan had been attacked, you arrive to see the
        carnage the immense beast caused. You feel the earth shudder and
        something with the force of a rolling boulder plows through your Free
        Company.
      </p>
    </>,
    <>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10.</p>
      <p>
        PERFORM A SPOT CHECK (DIFFICULTY 6). IF YOU SUCCEED, MARK THE ENCOUNTER
        SPECIAL RULES BOARD BOX FOR CHAPTER 16 ON YOUR FREE COMPANY SHEET.
      </p>{" "}
    </>,
    <>
      <p>
        The Ogre charges into the trees. You give chase but are forced to stop
        before a sheer cliff that falls hundreds of feet into the Deepwood
        below. The tracks lead here, had it jumped?
      </p>
      <p>
        Without any clues, you wander the city and are startled to find the
        apparition of Samil. Wondering why the vision has returned now, you
        follow him to a condemned manor house sealed with warnings of the
        occult. Looking inside, you do not see Samil but do find it filled with
        strange masks and documents. "Find the Scaravelho and find the Ogre."'
        offers Samil's voice. You have never heard the vision speak before.
        Heeding the words, you start to search the documents and eventually find
        a letter sealed by a Scarab. The document reveals that the Scaravelho
        had been a powerful family in Thrace. So powerful, in fact, they had
        even had their own vault in the Catacombs beneath the city.
      </p>
      <p>
        Certain that you I will find more information within the vault, you head
        to the Catacombs and are met by a belligerent guard. Your Oathmarks will
        not be enough to get you in here, so you must choose how to proceed.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. Threaten him.</p>
      <p>
        PERFORM A THREATENING CHECK (DIFFICULTY 8). ADD 1 TO YOUR RESULT IF YOU
        HAVE AN URSUS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED
        X3 TOKEN.
      </p>
      <p>B. Bribe him.</p>
      <p>LOSE 30 IRON.</p>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
    </>,
    <>
      <p>
        Finally past the guard, you find vault doors for the five great
        families, as well as a sixth door gouged and defaced. The gouged vault
        contains more documents that evidence a sixth great family, the
        Scaravelho, who were erased from history. Led by their patriarch,
        Mycelle, the family had collapsed in on itself somehow.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A BATTLEFLOW TOKEN AS YOU FIND MORE INFORMATION.
      </p>{" "}
    </>,
    <>
      <p>
        An old city map you find shows an ancient and very different Thrace. A
        huge sixth district stretches out to the northeast, beyond the
        boundaries of the current city. It is the old Scaravelho district, now
        long consumed by the Deepwood. You will find your answers there.
        Following the landmarks, you head into the Deepwood to the northeast of
        the city, where you find old ruins, long overgrown by plants and moss.
        You can feel something watching you here. You are getting close.
      </p>
      <p>
        At the foundations of what used to be a large tower, you see Samil
        sitting on a stone, looking at human remains - a woman and a child in a
        final embrace. "See what happened," with a wave of his arm. The scene
        before you is Samil transformed, the women and the child are cowering
        behind the stone. This whole section of the city is in ruins. You can
        hear a growl, and see the Ogre of Thrace break through the forest,
        striking the two down. As she falls, the woman screams at the oncoming
        beast. "Mycelle, No...!" The vision ends. Had Mycelle become the Ogre of
        Thrace? Wondering how that is possible, you come to a clearing and a
        circle of nine standing stones. Suddenly, you hear a legion of voices
        ringing all around you. The voices are coming from the stones.
        "Oathsworn. Mycelle fed us to become eternal, and we made him so. What
        boon do you crave?"
      </p>
    </>,
    <>
      <p>CHOOSE ONE:</p>
      <p>A. Ask for power.</p>
      <p>ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.</p>
      <p>ARCHIVE A RANDOM COMBAT ALLY.</p>
      <p>B. Ask for life.</p>
      <p>ALL OATHSWORN LOSE 1 HIT POINT.</p>
      <p>DECREASE THE 'PLAGUE STAGE' ON YOUR FREE COMPANY SHEET BY ONE.</p>
      <p>C. Ask for nothing.</p>
      <p>YOU ASK FOR NOTHING FROM THE VOICES.</p>
      <p>
        IF YOU CHOSE TO ASK FOR POWER OR LIFE, YOU ARE AMBUSHED. MARK THE
        AMBUSHED BOX FOR CHAPTER 16 ON YOUR FREE COMPANY SHEET.
      </p>
    </>,
    <>
      <p>
        Your exchange with the voices over, the clearing returns to darkness and
        you hear a growl coming closer. This time it is real. Mycelle, the Ogre
        of Thrace, warped and twisted by whatever power lies within the stones
        bursts into view. Great scabs armor his immense form and with a roar he
        barrels toward you.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 16.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 16.</p>
      <img src={map} />
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        You remove the Ogre's heart as instructed. Somehow, the organ still
        beats. Returning the coveted item to the masked noble, you are given the
        reward you were promised. The witch, Aurelia, along with the aether.
        Gathering her shackles, as well as the vials to keep her under control,
        you prepare to head back to Verum. The grim reality of The Keening rises
        in your mind, and you begin to wonder if you will be able to carry the
        deed out when the moment arrives.
      </p>
    </>,
    <>
      <p>YOU GAIN 36 IRON.</p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 16 ON YOUR FREE
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
