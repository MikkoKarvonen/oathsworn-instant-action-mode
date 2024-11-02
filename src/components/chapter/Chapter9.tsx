import { useState } from "react";

import audio1 from "../../assets/audio/chapter9/1.mp3";
import audio2 from "../../assets/audio/chapter9/2.mp3";
import audio3 from "../../assets/audio/chapter9/3.mp3";
import audio4 from "../../assets/audio/chapter9/4.mp3";
import audio5 from "../../assets/audio/chapter9/5.mp3";
import audio6 from "../../assets/audio/chapter9/6.mp3";
import audio7 from "../../assets/audio/chapter9/7.mp3";
import audio8 from "../../assets/audio/chapter9/8.mp3";
import audio9 from "../../assets/audio/chapter9/9.mp3";
import audio10 from "../../assets/audio/chapter9/10.mp3";

// import map from "../../assets/images/1.png";
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
];

const Chapter = () => {
  const [currentAudio, setCurrentAudio] = useState(0);

  const sections = [
    <>
      <p>
        After your experience in Cistercia with the Venerator and the Satyr, you
        are glad to bring the mendicants back to Verum. You are hailed as heroes
        whilst the mendicants are put to work on the sick. Looking around, you
        can see that the plague has gotten worse.
      </p>
      <p>
        You enjoy some days back home in The Broken Oak where Midge uses you for
        pickpocket practice, and Bram uses you as test subjects for his new
        ales.
      </p>
    </>,
    <>
      <p>
        ALL OATHSWORN LOSE ALL INJURY CARDS, RETURNING THEM TO THE BOTTOM OF THE
        INJURY DECK.
      </p>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
    </>,
    <>
      <p>
        Some nights later, a knock on the tavern's door empties The Broken Oak
        of all its patrons. One of the mysterious Watchers has come to speak
        with you and he has brought some kind of hulking monstrosity with him.
        The massive form remains outside the tavern, its glowing eyes pierce the
        fog.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 3). ADD 1 TO YOUR RESULT IF YOU
        HAVE THE WARDEN WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE
        TOKEN AS YOU RECOGNIZE THE THING OUTSIDE.
      </p>
    </>,
    <>
      <p>
        The Watcher hands you a contract. It is "inobligatum, meaning it cannot
        be refused. You are to travel to Glimhollow, an amber mining village
        which has gone silent. Amber is the source of much of the heat and light
        in the city and you must reopen the supply lines. Before departing, the
        Watcher hands you a rod made of a strange material. "Use this to control
        the Golem," he says. "You will find it quite useful on your journey?"
      </p>
      <p>
        The trek to Glimhollow passes without incident and you arrive at the
        town in good time. You find the palisade walls surrounding the
        settlement to be newly repaired. Judging by the damage to its exterior,
        this town is under regular assault from the beasts of the woods.
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'E' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
      </p>{" "}
    </>,
    <>
      <p>
        At the top of the walls, you are met by a dozen drawn bows. Even with
        your Oathmark, the guards are denying you entry.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>
        A. Command the Golem to break down the gates. ALL OATHSWORN GAIN A
        REDRAW TOKEN.
      </p>
      <p>B. Threaten the guards to open the gates.</p>
      <p>ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.</p>{" "}
    </>,
    <>
      <p>
        After the messy incident at the main gate, you are brought to the home
        of Glimhollow's mayor, who nervously apologizes for his guards'
        behavior. You notice there is something off about the man as he speaks
        and goes on to explain how the town has been besieged by a massive
        creature which has effectively cut them off from Verum. "Each time the
        beast attacks, it breaches the city walls and consumes our amber
        supply!" he exclaims.
      </p>
      <p>
        You are given a room at the local tavern for the night and as you bed
        down for the evening, you discover a crumpled note beneath your pillow
        from the town Apothecary who asks you to visit her the following
        morning. Sleep comes quickly, but at some point past the witching hour,
        you are awoken by the horrifying sight of the Iron Golem strangling the
        life from one of your comrades. Reaching for the control rod, you
        discover it missing. Suddenly, robed figures burst into the room and
        attack with daggers.
      </p>
    </>,
    <>
      <p>
        PERFORM A SPOT CHECK (DIFFICULTY 6). IF YOU FAIL, A RANDOM OATHSWORN
        LOSES 1 HIT POINT.
      </p>
      <p>IN EITHER CASE, PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.</p>
    </>,
    <>
      <p>
        As you hold back the Golem, and fend off the ambush, one of you has to
        dive out the window to chase the robed figure who took the control rod.
      </p>
    </>,
    <>
      <p>
        CHOOSE ONE OATHSWORN TO PERFORM A CHASE CHECK (DIFFICULTY 5). ADD 1 TO
        THE RESULT IF YOU CHOOSE THE HARBINGER.
      </p>
      <p>IF THEY SUCCEED, ALL OATHSWORN GAIN A BATTLEFLOW TOKEN.</p>{" "}
    </>,
    <>
      <p>
        You eventually catch the thief and pull back their hood to find it is a
        woman. Before you have a chance to question her, she shatters the
        control rod on the ground, pulls a dagger from her cloak, and slits her
        own throat. Holding her arm, you discover she has a chunk of gleaming
        white amber planted under the skin of her forearm. There is clearly
        something dark going on in this village.
      </p>
      <p>
        The next day, you wake to find the entire tavern empty - not a soul to
        be found except for your Iron Golem, which now lies inoperable.
      </p>
      <p>
        You decide to seek out the Apothecary, hoping her invitation means she
        can offer an explanation as to what is going on here. Her shop is found
        empty, in a state of disarray with clear signs of a struggle. Someone
        must have discovered her attempt to contact you.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A +2 ANIMUS TOKEN.
      </p>
    </>,
    <>
      <p>
        The investigation takes you throughout the village where nearly everyone
        is loath to speak with you. Finally, the folks in the poorer section of
        town provide you with some key information which leads you to the amber
        mines in the
      </p>
      <p>
        northwest part of the village. Loud chanting draws you deep inside where
        you discover a group of cultists, gathered around a massive boulder of
        white amber, in the midst of a ritual seance. Chained to the stone
        awaiting sacrifice is a woman. Wasting no time, you charge in.
      </p>
    </>,
    <>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7.</p>
    </>,
    <>
      <p>
        Making short work of the cultists, the woman you have just saved turns
        out to be the Apothecary. She tells you the cult formed around this
        amber boulder not long ago. "They said I was being sacrificed so I could
        commune with the whispers."
      </p>
      <p>
        Just then, alarms sound throughout the village. The creature preying
        upon the village has returned. It must have been called by the cultist's
        ritual. As you rush from the mines, you arrive in time to see the beast
        crash through the palisade, its skin slick with acid.
      </p>
    </>,
    <>
      <p>
        PERFORM A SPOT CHECK (DIFFICULTY 5). IF YOU SUCCEED, MARK THE ENCOUNTER
        SPECIAL RULES BOARD BOX FOR CHAPTER 9 ON YOUR FREE COMPANY SHEET. IF YOU
        FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 9 ON YOUR
        FREE COMPANY SHEET.
      </p>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 9.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 9.</p>
      {/* <img src={map} /> */}
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        With the creature slain, and the town freed from the cult, the amber
        supply line reopens. You return to Verum where you are rewarded with a
        hefty bag of iron and the repaired Iron Golem, but not all is well. The
        plague continues to spread and it has now claimed some of the lives of
        the mendicants as well.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 22 (GOLEM).</p>
      <p>YOU GAIN 32 IRON.</p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 9 ON YOUR FREE
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
