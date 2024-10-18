import { useState } from "react";

import audio1 from "../../assets/audio/chapter2/1.mp3";
import audio2 from "../../assets/audio/chapter2/2.mp3";
import audio3 from "../../assets/audio/chapter2/3.mp3";
import audio4 from "../../assets/audio/chapter2/4.mp3";
import audio5 from "../../assets/audio/chapter2/5.mp3";
import audio6 from "../../assets/audio/chapter2/6.mp3";
import audio7 from "../../assets/audio/chapter2/7.mp3";
import audio8 from "../../assets/audio/chapter2/8.mp3";
import audio9 from "../../assets/audio/chapter2/9.mp3";
import audio10 from "../../assets/audio/chapter2/10.mp3";
import audio11 from "../../assets/audio/chapter2/11.mp3";

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
        Thistle vines tear at your arms as you rush through the soggy
        underbrush, desperate to distance yourselves from the encroaching beast.
        Samil catches up to you, last in line as always. "It's gone," he says. A
        moment later, you hear the plucked thrum as Samil is ripped from the
        Wire by a shadow with orange eyes.
      </p>
    </>,
    <>
      <p>
        ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 4). ALL THAT SUCCEED
        GAIN A BATTLEFLOW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.
      </p>
    </>,
    <>
      <p>
        You dive for cover, suddenly awake in your straw mattress at The Broken
        Oak. The nightmare fades as you rise from your bed, bathed in sweat. One
        look at your groupmates confirms they experienced nightmares as well.
        Gathering your gear, you head downstairs to the tap room and are joined
        by Greycane for breakfast. He notices your unsettled demeanor and asks
        if you have experienced strange dreams lately. Apparently, you are not
        the only ones in the city having them. "Some go to sleep, never to
        wake," he tells you.
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'A' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
      </p>
    </>,
    <>
      <p>
        After your morning meal, you are escorted to the Palace where Lord
        Davenish wastes no time requisitioning your aid in apprehending a local
        cult leader called, 'The Piper', whose followers have been attacking
        guards and robbing shops. If the criminal is not stopped soon, Davenish
        fears there will be blood in the streets. Apparently, The Piper's
        followers mark the sites of their crimes with two orange circles, which
        some have taken to calling, 'The Eyes. Armed with this information, you
        turn to leave but immediately pause. Looking at you, through one of the
        palace windows is Samil, dead comrade. You rush to the window, but find
        he is gone. Not knowing what to make of it, you get back to the task at
        hand and head to the Banksmith for supplies.
      </p>
    </>,
    <>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH.</p>
    </>,
    <>
      <p>
        As you conduct business with Gamel, the Banksmith, he asks if anyone has
        seen his son. Gamel proceeds to tell that you his son, Tam, has gone
        missing and asks to join your group. You allow him to do so, suspecting
        the boy's disappearance could be connected to this business with The
        Piper.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 6 (GAMEL).</p>
    </>,
    <>
      <p>
        Fully equipped, your party heads out into the city in search of any
        orange circles The Piper has left behind.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A REDRAW TOKEN FOR FINDING THE EYES QUICKLY.
      </p>
    </>,
    <>
      <p>
        You find the strange circles all over the city, including on the wall of
        the Apothecary's hut, where a rabble of angry citizens has gathered to
        harass the owner, Lyceen. They accuse her of being a witch and say she
        is responsible for strange occurrences around the city. You have
        witnessed plenty of witch hunts in your days, but rarely do they
        actually expose a witch. Not wanting this to get out of hand, you
        disperse the crowd.
      </p>
    </>,
    <>
      <p>YOU MAY START A TRADE WITH APOTHECARY.</p>
    </>,
    <>
      <p>
        The trail of evidence ultimately leads you to an empty well in a poor
        section of the city. Inside the well, you find a series of handholds
        which you use to climb down into the darkness. At the bottom, a series
        of tunnels lead to a large chamber where thousands of orange eyes have
        been scrawled onto the walls, floor and ceiling. Your arrival startles a
        man standing in the corner of the room. As he turns to face you, his
        eyes glow a malefic orange color. The man quickly slips down a side
        tunnel and you bolt after him in pursuit.
      </p>
    </>,
    <>
      <p>
        PERFORM A SPEED CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN
        AN EMPOWERED X3 TOKEN AS YOU ALMOST CATCH UP TO HIM.
      </p>
    </>,
    <>
      <p>
        Your chase through the twisting tunnels ends at a tattered rope ladder.
        Climbing the ladder, you come to the top of a section of the city wall
        where you find the man, who you now deduce to be The Piper. Standing on
        the ledge beside him, you see a familiar figure - Samil. You watch as
        your dead friend whispers something into the man's ear. As if following
        his command, The Piper walks off the ledge and in a blink, he and Samil
        are gone. You rush over, and look to the ground below, where you find
        The Piper impaled on the spikes at the base of the wall. Suddenly, an
        immense, hairy arm reaches from the Deepwood and plucks the body off the
        spikes. Without a moment's hesitation, you scale down the weathered city
        wall and follow the trail of blood into the cursed woods.
      </p>
    </>,
    <>
      <p>
        ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT FAIL
        LOSE 1 HIT POINT.
      </p>
    </>,
    <>
      <p>
        The hunt through the Deepwood leads you to a gruesome scene. Several
        bodies, some of them still clinging to life, hang from the trees like
        marionettes, each with luminescent orange eyes. Noisy pots and other
        metal objects also hang from their bodies in a grotesque alarm system,
        no doubt to alert whatever it is that has lured you here.
      </p>
    </>,
    <>
      <p>
        PERFORM A SNEAKING CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A REDRAW TOKEN AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR
        CHAPTER 2 ON YOUR FREE COMPANY SHEET. IF YOU FAIL, YOU WILL BE AMBUSHED.
        MARK THE AMBUSHED BOX FOR CHAPTER 2 ON YOUR FREE COMPANY SHEET.
      </p>
    </>,
    <>
      <p>
        As if ripped from your nightmares, the giant creature stomps out of the
        shadows and you immediately recognize its haunting orange eyes from your
        shared night terror about Samil's death. Easily taller than a house, it
        wields a tree-size staff with a living man bound to the top like a
        trophy. The man's eyes beam with the same haunting orange light as the
        others and you realize these people must be controlled by the massive
        creature. As the beast raises its horned head and fixes its murderous
        stare upon you, it commands every man, woman and child under its spell
        to unleash an ear-splitting scream.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 2.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 2.</p>
      <img src={map} />
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        An explosion of darklight blinds you. When you come to your senses, the
        beast is gone. Quickly, rushing to the aid of the human puppets, you
        find none have survived the creature's wrath. Gamel finds his son, Tam,
        amongst the slain and swears vengeance. You return to Bastone without
        proof of the creature's demise. As rumors spread, the citizens will only
        become more frightened and their suspicion more extreme.
      </p>
    </>,
    <>
      <p>GAIN 8 IRON.</p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 2 ON YOUR FREE
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
