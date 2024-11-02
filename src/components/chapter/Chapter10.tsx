import { useState } from "react";

import audio1 from "../../assets/audio/chapter10/1.mp3";
import audio2 from "../../assets/audio/chapter10/2.mp3";
import audio3 from "../../assets/audio/chapter10/3.mp3";
import audio4 from "../../assets/audio/chapter10/4.mp3";
import audio5 from "../../assets/audio/chapter10/5.mp3";
import audio6 from "../../assets/audio/chapter10/6.mp3";
import audio7 from "../../assets/audio/chapter10/7.mp3";
import audio8 from "../../assets/audio/chapter10/8.mp3";
import audio9 from "../../assets/audio/chapter10/9.mp3";
import audio10 from "../../assets/audio/chapter10/10.mp3";

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
        The final mendicant has died of the plague and hope has died with them.
        The plague has spread throughout the Gutters and The Cobbles now,
        claiming thousands of lives.
      </p>
      <p>
        The mood around The Broken Oak is grim. Greycane, ever the optimist,
        does his best to maintain morale. "Sometimes hope is found when you
        least expect it," he says. Just then, there is a knock at the door. "Ah!
        Just in time," he grins, heading to the tavern entrance.
      </p>
      <p>
        An A'Dendri refugee from the Green Streets district enters The Broken
        Oak and introduces herself as "Guide" using The Knock sign language.
        Replying with his own hand gestures, claps and clicks, Greycane welcomes
        her and explains to the that the A'Dendri refugees believe the cure to
        the group plague may lie within The Wychwood, their former home.
        "Convince the King to send an expedition there, and Guide here, will
        help you find the cure to save Verum," Greycane translates.
      </p>
      <p>
        It does not take long for the 'Heroes of Bastone' to get an audience
        with young King Favian.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 23 (GUIDE).</p>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF YOU
        HAVE THE WARDEN WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A REDRAW
        TOKEN FOR CONVINCING THE KING.
      </p>
    </>,
    <>
      <p>
        The King, with assent from his Watcher council, agrees to the
        expedition. You are assigned a group of botanists and archivists to
        assist with the effort, and an arrogant knight by the name of Cyprian,
        attached as their ward. As a last minute addition, the Watchers also
        assign an 'asset' from the Raven Spire to accompany you.
      </p>
    </>,
    <>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
    </>,
    <>
      <p>
        With preparations complete, you depart the plagued city once more. Many
        marches into the journey, you reach the end of the Wire Road. This is
        the furthest anyone has ventured into the Deepwood and the end of your
        lifeline to civilization. From this point forward, your life is in the
        hands of your A'Dendri, Guide.
      </p>
      <p>
        Travel is slow with such a large caravan, and Guide frequently scouts
        ahead to spot potential danger while the group rests. On one such
        morning, you are attacked by a snarling, wolf-like creature. The beast
        is an amalgam of tree and animal with plates of bark protecting its body
        like a suit of armor.
      </p>
    </>,
    <>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.</p>{" "}
    </>,
    <>
      <p>
        You manage to slay the beast, but when Guide returns, she is shocked to
        see the corpse and releases a cloud of her spores in distress. As the
        spores rest on you, a sense of great sorrow and fear rushes through you.
        She does not communicate anymore to you, but you are sure the creature
        you slew was no ordinary beast of the Deepwood.
      </p>
      <p>
        In the nights that follow, you cannot escape the feeling of being
        watched and the normal chittering and snarling in the darkness of the
        Deepwood is replaced by an eerie silence.
      </p>
    </>,
    <>
      <p>
        PERFORM A SPOT CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOU HAVE AN
        A'DENDRI OATHSWORN WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A
        DEFENSE TOKEN AS YOU CATCH A GLIMPSE OF A SHADOWING FOLLOWING YOU.
      </p>{" "}
    </>,
    <>
      <p>
        Each morning, you search in vain for tracks left behind but never find
        any. Less experienced members of your party are convinced you are
        hallucinating, but your instincts tell you - you are being stalked.
      </p>
    </>,
    <>
      <p>
        EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT
        SUCCEED GAIN A BATTLEFLOW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.
      </p>
    </>,
    <>
      <p>
        Your fears are confirmed one afternoon as your caravan passes between a
        pair of hollowed out tree husks. Suddenly, Cyprian's squire is yanked
        off the ground, up into the canopy above. You dive for cover as arrows
        fly, pinning the boy to a tree and then, silence. With the boy's death,
        no one doubts you anymore.
      </p>
    </>,
    <>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>{" "}
    </>,
    <>
      <p>
        Once it is safe again, you can see Guide standing in front of what looks
        like an ancient mural on a stone slab engraved with organic looking
        lines. Its meaning is lost on you, but Guide is obviously disturbed by
        it. She tries to explain it to you, but The Knock signs she gestures are
        not commonly used. ...A crown stalks the Wychwood border?'
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 6). IF YOU HAVE AN A'DENDRI
        OATHSWORN, YOU IMMEDIATELY SUCCEED IN THIS CHECK. IF YOU SUCCEED, MARK
        THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 10 ON YOUR FREE
        COMPANY SHEET.
      </p>
    </>,
    <>
      <p>
        Whatever is out there, you need to get to the Wychwood. You sense the
        Wychwood cannot be far, as the environment has gradually become a mix of
        color and enchanting scents intermingled with the drab foulness of the
        Deepwood. You have also noticed several husks of A'Dendri Ancient's
        rotting in these lands, like scattered gravestones upon a long-
        forgotten battlefield. Checking your packs, you find your rations are
        running low.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. Take the last rations for yourself.</p>
      <p>ALL OATHSWORN LOSE A RANDOM COMBAT TOKEN.</p>
      <p>B. Give the last of the rations to the expedition.</p>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
      <p>ALL OATHSWORN LOSE 1 HIT POINT.</p>
    </>,
    <>
      <p>
        Finally, the sickly trees entwined with the brush of the Deepwood give
        way to an explosion of color and foliage unlike any you have seen.
        Between the Deepwood and the dense, green wall of the Wychwood lies a
        veritable 'no man's land' littered with the skeletal remains of
        eviscerated bioforms. Much like humanity's battle against the
        encroaching nightmare of trees and roots, the Wychwood is engaged in a
        war with the Deepwood all its own.
      </p>
      <p>
        You press on as a low fog rolls in, and suddenly hear a scream. You turn
        around to see the tips of arrows protruding from the chest of an
        archivist. As though to stop you gaining entry to the Wychwood, your
        pursuer chose this moment to strike.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 10.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 10.</p>
      {/* <img src={map} /> */}
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        The Forgotten King who has preyed on your party is on his knees before
        you. How many has he killed in his one man war against all outsiders? As
        you raise your weapon to finish off the great warrior, you hear the
        unmistakable sound of arrows being knocked into their bows. Frozen where
        you stand, the Wychwood suddenly comes to life.
      </p>
    </>,
    <>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 10 ON YOUR FREE
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
