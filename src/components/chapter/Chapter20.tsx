import { useState } from "react";

import audio1 from "../../assets/audio/chapter20/1.mp3";
import audio2 from "../../assets/audio/chapter20/2.mp3";
import audio3 from "../../assets/audio/chapter20/3.mp3";
import audio4 from "../../assets/audio/chapter20/4.mp3";
import audio5 from "../../assets/audio/chapter20/5.mp3";
import audio6 from "../../assets/audio/chapter20/6.mp3";
import audio7 from "../../assets/audio/chapter20/7.mp3";
import audio8 from "../../assets/audio/chapter20/8.mp3";
import audio9 from "../../assets/audio/chapter20/9.mp3";

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
];

const Chapter = () => {
  const [currentAudio, setCurrentAudio] = useState(0);

  const sections = [
    <>
      <p>
        Barring the great gate of the ancient fortress of Raven's Reach, you
        take in your surroundings. Her walls are high and towers strong. There
        is no better place to defend while performing the Keening, but your
        numbers have dwindled. Now a few dozen dirty, weary men and women stand
        in the rain awaiting your command. They are not defeated however and you
        can see the same light in their eyes that you know they see in yours.
        Failure is not an option. You must perform The Keening to draw the
        monsters protecting the Heart of Darkness away while you get inside.
      </p>
      <p>
        The Deepwood is a cacophony of screeches, snorts and howls. They will be
        coming soon and the only thing that will stop them swarming your
        position will be those at your side. Barking commands, you order some to
        bolster the defenses, while others prepare the pyre. It must be the same
        as Bastone and you have to hold out long enough to make sure you draw in
        all the beasts protecting the Heart of Darkness.
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'H' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
      </p>
      <p>
        REVEAL ALL ITEMS FROM THE CHAPTER 20 COMMON ITEM DECK AND GAIN ANY 4
        ITEMS FROM IT.
      </p>
    </>,
    <>
      <p>
        Whilst the army prepares, you look down at your arm. The black spots
        have become roots now, curling around you, reaching up to your shoulder.
        The pain is getting worse, you do not have long.
      </p>
    </>,
    <>
      <p>
        INCREASE THE PLAGUE LEVEL BY ONE ON THE FREE COMPANY SHEET. IF IT
        ALREADY IS AT 3, EACH OATHSWORN LOSES A COMBAT TOKEN (YOUR CHOICE).
      </p>
    </>,
    <>
      <p>
        A guard calls out through the rain, something is coming. Has the attack
        begun? A streak of lightning illuminates a large avian silhouette
        perched on a tower, its eyes glowing as they gaze at you. What is one of
        the enigmatic Avi doing here? Suddenly, an ephemeral voice sounds in
        your head.
      </p>
      <p>"The Darkness calls your name. We hear it also. As above, so below.</p>
      <p>
        The end of paths draws near, where madness is reason, and reason
        madness.
      </p>
      <p>
        Darkness or death will be your choice. And your choice it will be. No
        others.
      </p>
      <p>Choose wisely, marked ones, for the world turns on it,"</p>
      <p>
        You demand the Avi explain itself, but you are met only by silence.
        Another flash of lightning sees the Avi disappear.
      </p>
    </>,
    <>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
    </>,
    <>
      <p>
        As the thunder rolls, it is overshadowed by another sound. The
        scrabbling and thudding of thousands of feet. The gate nearly buckles as
        the first wave hits. You can hear them on all sides, trying to climb the
        walls. Spears arc down into the oncoming tide as they scale the wet
        stones. Fur and fang are met with cold steel and iron wills. With the
        pyre still being built, you bellow one last command and join the fray.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. Defend all points.</p>
      <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
      <p>
        PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10 ANY THAT FAIL, LOSE A
        COMBAT TOKEN AS WELL AS A HIT POINT.
      </p>
      <p>ARCHIVE 2 RANDOM COMBAT ALLIES.</p>
      <p>B. Focus defenses on a few points.</p>
      <p>
        PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9 - ALL OATHSWORN THAT SUCCEED
        AND CRITICAL GAIN AN EMPOWERED X3 TOKEN.
      </p>
      <p>ARCHIVE 1 RANDOM COMBAT ALLY.</p>{" "}
    </>,
    <>
      <p>
        No cry of victory goes up as you repel the first wave. Everyone knows it
        will not be the last. Even the Deepwood trees seem to reach out for the
        walls as though to crush the invaders who dare enter its domain. Looking
        to the pyre, you see it will take more time. You need to hold the line a
        little longer.
      </p>
      <p>
        Your eyes move to the witches in your charge and you see Aurelia, the
        witch you brought from Thrace. Her eyes are moving behind their lids.
        You reach for the aether before remembering you have none left. All you
        can do is hope she does not wake up.
      </p>
      <p>
        Turning your attention to your defenses, you have a choice to make. As
        the sound of another wave approaches, you must either draw back to the
        inner bailey or continue to hold the battlements.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. Abandon the battlements and draw back to the inner bailey.</p>
      <p>ALL OATHSWORN LOSE 1 HIT POINT.</p>
      <p>ALL OATHSWORN GAIN A BATTLEFLOW TOKEN.</p>
      <p>B. Keep defending the battlements.</p>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.</p>
      <p>IN EITHER CASE, ARCHIVE 2 RANDOM COMBAT ALLIES.</p>
    </>,
    <>
      <p>
        Soaked in rain and the blood of your enemies, you hack and slash at
        countless nightmares of the Deepwood. Just as you feel your strength
        threatening to fail you, the wave breaks. You cannot rest however,
        drawing deep, and using this lull in the fighting, you race to the
        completed pyre.
      </p>
    </>,
    <>
      <p>ALL OATHSWORN GAIN A +2 ANIMUS TOKEN.</p>{" "}
    </>,
    <>
      <p>
        You had hoped it would not come to this, but at the end of it all there
        had been no other way. With Aurelia bound to the pyre, you spark an
        amber torch. The least you can do is bear this burden yourself. As you
        set light to the pyre, you stare into the Thracian witch's face - then
        you freeze.
      </p>
      <p>She is staring back at you. She is awake!</p>
      <p>
        You land ten feet away as an explosion of kinetic force erupts from the
        witch's body. Aurelia lets out a scream of rage, and the pyre is torn
        asunder. The flames are immediately extinguished and the remains of the
        other witches are scattered to the walls by waves of force. Aurelia
        rises from the ruin of the pyre, and you can see the rain striking a
        nimbus of shimmering air rolling around her, in a sphere of telekinetic
        protection. You have faced potent witches before, but this woman might
        be the most powerful ever recorded. Hovering above the ground, inside
        her kinetic bubble, you see the wrath in her eyes. She had been drugged
        and dragged through the Deepwood and she does not know what is
        happening. The only thing she does know, is that for the first time she
        is free of the delirium, and she means to exact her revenge.
      </p>
    </>,
    <>
      <p>
        PERFORM A SURVIVAL CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
        GAIN AN EMPOWERED X3 TOKEN FOR STANDING STRONG.
      </p>
    </>,
    <>
      <p>
        The few remaining soldiers charge Aurelia, but to no avail. With a hand
        gesture, she raises the men and women into the air, and crushes them
        against flagstone. What rises then are corpses that start to swirl
        around Aurelia in a macabre pattern. Now it is just you and the witch.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF YOU
        HAVE THE WITCH. IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES BOARD
        BOX FOR CHAPTER 20 ON YOUR FREE COMPANY SHEET.
      </p>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 20.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 20.</p>
      {/* <img src={map} /> */}
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        With her last breath, the witch lets out a psychic scream that shreds
        your senses. You have heard this before. The Keening. Against all odds,
        it has worked. Wiping blood from your ears, you rush to escape Raven's
        Reach before what happens next. In the distance, you hear a deep
        rumbling and you know what that means. The way to the Heart of Darkness
        is open.
      </p>
    </>,
    <>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 20 ON YOUR FREE
        COMPANY SHEET.
      </p>
      <p>TALLY LEVEL, LOOT AND LOSSES.</p>
      <p>
        GAIN NEW UNIQUE ITEMS AS USUAL, BUT DO NOT GAIN ANY NEW COMMON ITEMS
        DURING LOOTING.
      </p>
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
