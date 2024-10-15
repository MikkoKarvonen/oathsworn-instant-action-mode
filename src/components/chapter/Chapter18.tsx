import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter18/1.mp3";
import audio2 from "../../assets/audio/chapter18/2.mp3";
import audio3 from "../../assets/audio/chapter18/3.mp3";
import audio4 from "../../assets/audio/chapter18/4.mp3";
import audio5 from "../../assets/audio/chapter18/5.mp3";
import audio6 from "../../assets/audio/chapter18/6.mp3";
import audio7 from "../../assets/audio/chapter18/7.mp3";
import audio8 from "../../assets/audio/chapter18/8.mp3";
import audio9 from "../../assets/audio/chapter18/9.mp3";
import audio10 from "../../assets/audio/chapter18/10.mp3";
import audio11 from "../../assets/audio/chapter18/11.mp3";
import audio12 from "../../assets/audio/chapter18/12.mp3";

import map from "../../assets/images/1.png";
import { AudioButton } from "../../assets/audioHandler";
import Collapse from "../Collapse";
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
  audio12,
];

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
        You arrive back in Verum to find the Inquisition waiting for you.
        Relieving you of the witch, Aurelia, they commit a Warden to watch over
        her while you prepare for what is to come. In only a few days the army
        will muster and the greatest crusade into the Deepwood for hundreds of
        will begin. A crusade you will lead.
      </p>
      <p>
        Heading for the Palace you weave your way through the vast expanse of
        refugees from north of the river and enter the army tent that is now the
        third iteration of The Broken Oak. Cheers go up at your return and,
        taking your seats, an Apothecary sent by the crown goes to work on your
        injuries.
      </p>
    </>,
    <>
      <p>
        ALL OATHSWORN LOSE ALL INJURY CARDS (EXCEPT THE PLAGUE CARD), RETURNING
        THEM TO THE BOTTOM OF THE INJURY DECK.
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
        You can feel the plague within you grow and fester. You cannot spread
        it, but also do not know how long you will last. If you can just reach
        the Heart of Darkness and find the cure...
      </p>
    </>,
    <>
      <p>
        INCREASE THE NUMBER NEXT TO 'PLAGUE STAGE' ON YOUR FREE COMPANY SHEET BY
        1.
      </p>
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
        With the time at hand the muster begins. You will invoke The Keening by
        burning the witch and gain access to the Heart of Darkness, the very
        center of the Deepwood, to find a cure for everyone. You sit with
        Greycane, Bram and Midge for what you know might be the last time and
        share a meal of sausages, eggs, yams and fresh bread. "The best Verum
        has to offer for the best Verum has to offer," Greycane says pointing to
        the plates and then to you.
      </p>
    </>,
    <>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>{" "}
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
        After your meal, Midge breaks the silence. He wants to come with He has
        been with since the start. Though you you. you know the mission will be
        a one-way trip, you accept him. He is not a boy anymore, he has grown
        into a young man these past months. The choice is his to make.
      </p>
    </>,
    <>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND THE APOTHECARY.</p>
      <p>
        IF YOU HAVE ANY OF THE FOLLOWING ALLY CARDS, ARCHIVE THEM AND GAIN THE
        UPGRADED ALLY CARD.
      </p>
      <p>
        SWAP ALLY CARD 17 FOR 43, ALLY CARD 18 FOR 44, ALLY CARD 21 FOR 46, ALLY
        CARD 19 FOR 47.
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
        {" "}
        The army soldiers clad in steel is gathered before a dais in front of
        the Palace. You stand behind the King for his speech. He does not make
        light of the efforts. There are no promises of glorious deeds or a
        righteous return. Instead, it is a testament to the strength and honor
        of those who are willing to risk everything to protect their friends,
        their families and Verum itself.
      </p>
      <p>
        As the King introduces you to the army, it is your turn to make a
        speech.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED ALL OATHSWORN
        GAIN AN EMPOWERED X3 TOKEN AS YOU ENCOURAGE THE MEN AND WOMEN BEFORE
        YOU.
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
        You tell the army to keep alert and stay in formation. They have one
        task, to keep faith and keep it together. As you step down from the
        dias, weapon shafts pound the flagstone in a military 'hooah'. They are
        ready.
      </p>
      <p>
        The army rolls out. Many soldiers touch Verum's walls one last time as
        they take hold of the Wire and let the shadows of the canopy consume
        them. You know the best way to lead is from the front, so you take up
        the vanguard and lead the soldiers into the Deepwood. Your first stop
        will be the Salt Tower, an ancient fortification halfway between Verum
        and your target, Raven's Reach. The Watchers have decreed that Raven's
        Reach would be the site of The Keening, a defensible position that is
        close to the Heart of Darkness. If all goes well, you will be able to
        draw the monsters circling the heart away from the entrance and gain
        access.
      </p>
    </>,
    <>
      <p>
        PERFORM A LISTENING CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A DEFENSE TOKEN FOR KEEPING THE ARMY ALERT.
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
        As the days stretch, the journey gets harder. The Deepwood reacts
        heavily against such a massive group of life moving through it. You are
        faced with a choice to pick up the pace or not.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. Move fast and keep up morale.</p>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 11.</p>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
      <p>B. Move slow and safe.</p>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.</p>
    </>,
    <>
      <AudioButton
        index={7}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        The deeper you delve, the more monsters you awake. Wyrm attacks become a
        daily occurrence, and only a dwindling supply of amber bombs keep the
        Deepwood at bay. By the second week, the amber bombs are gone. As the
        attacks continue, men are pulled from the line by plants and beasts and
        it is all you can do to hold the army together.
      </p>
    </>,
    <>
      <p>TWO RANDOM OATHSWORN LOSE 1 HIT POINT EACH.</p>
    </>,
    <>
      <AudioButton
        index={8}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        Then you spot it, rising above the twisted trees: The Salt Tower. You
        only need to push your wounded army a bit further.
      </p>
    </>,
    <>
      <p>
        PERFORM A LISTENING CHECK (DIFFICULTY 5). IF YOU FAIL, YOU ARE AMBUSHED.
        MARK THE AMBUSHED BOX FOR CHAPTER 18 ON YOUR FREE COMPANY SHEET.
      </p>
    </>,
    <>
      <AudioButton
        index={9}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        As you reach the base of the tower walls, the ground rumbles hard enough
        to make you stumble. As if trying to stop you reaching your destination,
        a great beast rises from the depths. What bursts from the earth is like
        no Wyrm you have ever seen. An ancient black hide covers it and great
        tusks jut from its enormous maw. Worse still, it is among the soldiers
        where Midge was. Sure enough, you see him bravely slashing at the flank
        of the great beast. As the Wyrm writhes, you lose sight of him once
        more.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, MARK THE
        ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 18 ON YOUR FREE COMPANY
        SHEET.
      </p>
    </>,
    <>
      <AudioButton
        index={10}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        Wyrm hide is thinner on top, if you can get enough soldiers into the
        Salt Tower they can rain down fire from above and help bring this thing
        down. By saving the soldiers, you may also save Midge. Drawing weapons,
        you charge into the fray.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 3.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 3.</p>
      <img src={map} />
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>
      <AudioButton
        index={11}
        audioPlaying={audioPlaying}
        currentSoundIndex={currentSoundIndex}
        soundPlayers={soundPlayers}
        setAudioPlaying={setAudioPlaying}
        setCurrentSoundIndex={setCurrentSoundIndex}
      />
      <p>
        You drag yourselves into the Salt Tower and check on your witches.
        Finding them safe, you command the army to rest. Your army is
        diminished, and you are only halfway to your destination. You hope the
        rest have what it takes to get to Raven's Reach.
      </p>
    </>,
    <>
      <p>
        IF 5 OR MORE SOLDIERS DIED IN THE ENCOUNTER, ARCHIVE ALLY CARD 1
        (MIDGE).
      </p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 18 ON YOUR FREE
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
