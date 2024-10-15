import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter7/1.mp3";
import audio2 from "../../assets/audio/chapter7/2.mp3";
import audio3 from "../../assets/audio/chapter7/3.mp3";
import audio4 from "../../assets/audio/chapter7/4.mp3";
import audio5 from "../../assets/audio/chapter7/5.mp3";
import audio6 from "../../assets/audio/chapter7/6.mp3";
import audio7 from "../../assets/audio/chapter7/7.mp3";
import audio8 from "../../assets/audio/chapter7/8.mp3";

import map from "../../assets/images/1.png";
import { AudioButton } from "../../assets/audioHandler";
import Collapse from "../Collapse";
const sounds = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];

const Chapter = () => {
  const [currentSoundIndex, setCurrentSoundIndex] = useState<number | null>(
    null
  );
  const [audioPlaying, setAudioPlaying] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const soundPlayers = sounds.map((sound) => useSound(sound));

  const sections = [
    <>
      <AudioButton
        index={0}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        Rays of sunlight pierce the cloud cover illuminating the majestic white
        walls of Cistercia. The expansive, tiered city is truly a sight to
        behold after many days spent stomping through the Deepwood in a
        never-ending deluge of rain. The home of the church, it is the
        birthplace of the Justinian faith that is held throughout the known
        cities. It is also second only to Verum in influence, you know to watch
        your step here.
      </p>
      <p>
        "Pillar and Path to you, Oathsworn," a priest welcomes you. "I will
        escort you to the Lord Marshall at once."
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'C' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
      </p>
    </>,
    <>
      <AudioButton
        index={1}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        You are brought to the Conclave, the seat of power in Cistercia, where
        the Lord Marshall is waiting for you. You are told the requisition of
        mendicants will be made available you, but your assistance in a delicate
        matter is required first. A Venerator, one of the most revered and
        sacred members of the military wing of the Ecclesiarch, has gone
        missing. These elite warriors are pillars of the Justinian faith. Never
        once has a Venerator failed in their duty, so for one to inexplicably
        disappear is cause for great concern. The Lord Marshall needs you to
        find the missing Venerator as discreetly as possible. Quintus, the Lord
        Marshall's adjutant, will assist you in the endeavor.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 19 (QUINTUS).</p>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
    </>,
    <>
      <AudioButton
        index={2}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        The first stop on your investigation is at the 'Hall of the Hundred'.
        This massive, cathedral-like garrison is where the towering Venerators
        are quartered. Attended by a pair of custodians, each Venerator -
        exactly one hundred in all - lives, trains and worships within these
        hallowed halls.
      </p>
      <p>
        Escorted by Quintus, you are greeted by a priest as you enter. He
        informs you that in order to gain information here you must first be
        'weighed. "One, or all, must take the trial," he says. "Iron will
        sharpen iron. The pillar must be strengthened."
      </p>
      <p>
        Seeing the confusion on your face, Quintus explains with a grin, "You
        will need to defeat one of the Venerators in a trial combat."
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. One takes the trial.</p>
      <p>
        ONE CHOSEN OATHSWORN LOSES 3 HIT POINTS. THE CHOSEN OATHSWORN GAINS A
        BATTLEFLOW TOKEN.
      </p>
      <p>B. All take the trial.</p>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.</p>{" "}
    </>,
    <>
      <AudioButton
        index={3}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        You prove your strength, or at least that you can take a hit, and are
        brought to a separate hall where the sacred Venerator armor is
        maintained. Walking past the towering armaments, you see they also serve
        as shrines, as several sets are surrounded by worshipers. Eventually,
        you arrive at an empty pedestal and are told this is where the missing
        suit of armor belonging to Venerator Logos is normally stowed.
        "Venerator Logos was an ardent champion of the written word," the priest
        says. "He was seen often in the Great Library."
      </p>
      <p>
        Heading to the Great Library, you discover that Logos had recently
        accessed a forbidden section of the library protected by a complex
        locking mechanism. Such an ancient vault is surely trapped.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A BATTLEFLOW TOKEN AS YOU MANAGE TO OPEN THE SEALED VAULT. IF YOU
        FAIL, 1 RANDOM OATHSWORN LOSES 1 HIT POINT.
      </p>{" "}
    </>,
    <>
      <AudioButton
        index={4}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        The tomes in this vault contain forbidden rituals of dark magic. One of
        them has been stolen. Whatever Venerator Logos is up to, it is outlawed
        and so he must be in hiding.
      </p>
      <p>
        The considerable size and renown of a Venerator would make it all but
        impossible to hide or blend into the crowds of Cistercia. So through a
        process of elimination you deduce he can only have chosen the remote
        mountain burial tombs to conduct his activities. As you enter the tombs,
        you are assaulted by the odor of death and decay and find fresh stains
        of blood.
      </p>
    </>,
    <>
      <p>
        PERFORM A SPOT CHECK (DIFFICULTY 4). ADD 1 TO YOUR RESULT IF YOU HAVE
        THE HUNTRESS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE
        TOKEN AS YOU AVOID SEVERAL TRAPS.
      </p>
    </>,
    <>
      <AudioButton
        index={5}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        You follow the tracks, and deeper inside, you find some huge stone
        coffins that have recently been opened. Inside them, you find scraps of
        cloth and bones, as well as blood stains on the floor. This was the work
        of the Venerator. He was here a day ago, but has now left. You make
        further inquiries throughout the city to find out where he went.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 4). ADD 1 TO YOUR RESULT IF YOU HAVE
        THE PRIEST WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED X3
        TOKEN AS YOU HOME IN ON YOUR TARGET QUICKLY.
      </p>{" "}
    </>,
    <>
      <AudioButton
        index={6}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        Following the tracks of this Venerator becomes like tracking a creature
        in the Deepwood. The clues lead you out of the city to a small village,
        just beyond Cistercia's walls. You arrive at the village after dusk and
        find the townspeople gathered together in the town square. In the center
        of the assembly, is the towering form of the Venerator.
      </p>
      <p>
        As he holds a book in one hand, the Venerator begins some kind of
        ritual, and you notice a vacant expression on each villager's face.
        Crushed corpses lay on the ground at his feet in pools of blood, and you
        immediately recognize this as blood magic.
      </p>
      <p>
        Muffled cries draw your attention to a nearby cage filled with villagers
        as you watch the Venerator select his next victim.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. Hide and observe the ritual.</p>
      <p>
        MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 7 ON YOUR FREE
        COMPANY SHEET.
      </p>
      <p>B. Reveal yourself and intervene.</p>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
      <p>
        YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 7 ON YOUR FREE
        COMPANY SHEET.
      </p>
      <p>IN EITHER CASE,</p>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 7.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 7.</p>
      <img src={map} />
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>
      <AudioButton
        index={7}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        As the Venerator lies fallen in a pool of blood, look around at the
        surrounding townspeople and see they are all still in a trance. The
        Venerator's death has not released them. On the ground beside his
        corpse, you find the wicked tome he stole from the Great Library.
      </p>
    </>,
    <>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 7 ON YOUR FREE
        COMPANY SHEET.
      </p>
      <p>TALLY LEVEL, LOOT AND LOSSES.</p>
    </>,
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <Collapse key={index} index={index + 1} checked={index === 0}>
          {section}
        </Collapse>
      ))}
    </div>
  );
};

export default Chapter;
