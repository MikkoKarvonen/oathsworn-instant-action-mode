import { useState } from "react";

import audio1 from "../../assets/audio/chapter3/1.mp3";
import audio2 from "../../assets/audio/chapter3/2.mp3";
import audio3 from "../../assets/audio/chapter3/3.mp3";
import audio4 from "../../assets/audio/chapter3/4.mp3";
import audio5 from "../../assets/audio/chapter3/5.mp3";
import audio6 from "../../assets/audio/chapter3/6.mp3";
import audio7 from "../../assets/audio/chapter3/7.mp3";
import audio8 from "../../assets/audio/chapter3/8.mp3";
import audio9 from "../../assets/audio/chapter3/9.mp3";
import audio10 from "../../assets/audio/chapter3/10.mp3";

import map from "../../assets/images/3.png";
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
        No glasses are raised and no songs are sung in your honor after the
        battle with the creature. Without proof of the Satyr's death, the town
        will continue to search for the cause of the murders and nightmares.
      </p>
      <p>
        You rise the next day to see a procession heading toward the center of
        town, with more and more citizens joining it along the way.
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'A' AND PLACE ITS CONTENTS IN THE CENTER OF PLAY.
      </p>
      <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
    </>,
    <>
      <p>
        Fableman Greycane catches you in the street, he looks tired and drawn.
        "They've taken her," he tells you. "Lyceen, the Apothecary. They blame
        her for the nightmares."
      </p>
      <p>
        He hurries you to the town square where piles of timber have been
        stacked around a huge metal pole driven into the flagstone. Bound to the
        pole, Lyceen pleads with the crowd, "Please, you don't know what you are
        doing! You don't realize what will happen!"
      </p>
      <p>
        As you push through the crowd, the wood pile bursts into flames and
        Lyceen cries out. The fire rises up around her and Lyceen's cry becomes
        a soul-wrenching scream. Off to the east, something from the Deepwood
        returns the call, something big. Beyond the city wall, a deep rumbling
        sound draws closer, and then a mighty crack reverberates through the
        air. Over the rooftops, you look into the distance and see the city's
        eastern wall crack and crumble under the force of a powerful impact.
        Smoke begins to rise, and buildings collapse as something enormous
        penetrates the city.
      </p>
      <p>
        Lyceen is clearly a witch and her pain is drawing something from the
        Deepwood. You must put a stop to this. Not knowing whether killing the
        woman would make things worse, you leap onto the blazing platform and
        cut Lyceen free.
      </p>
    </>,
    <>
      <p>
        PERFORM A MIGHT CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN GAIN
        A EMPOWERED X3 TOKEN AS YOU ACT WITHOUT HESITATION.
      </p>
    </>,
    <>
      <p>
        Lyceen collapses into your arms, gasping for breath. "You should have
        done that sooner," she says. "The Keening could have been prevented."
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 9 (LYCEEN).</p>
    </>,
    <>
      <p>
        "The Deepwood's come alive!" cries a man, as he flees from the
        destruction. As buildings begin to collapse in a pattern heading
        straight toward you, you catch your first glimpse of the devastating
        beast. Great tusks ring a head of storm gray armored plates and thick
        legs the size of tree trunks pound the earth. You have never encountered
        anything so gigantic. No city can survive a breach like this. Your only
        option is to escape while you still can. You run as fast as you can
        through the city streets and alleys. Shouts and cries for help ring out
        while buildings collapse left and right.
      </p>
    </>,
    <>
      <p>
        ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 4). ALL THAT FAIL
        LOSE 1 HIT POINT.
      </p>
    </>,
    <>
      <p>
        "This is my street! Please, we need to help them!" your guide, Midge,
        shouts as he points to a half-fallen building.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. Help them.</p>
      <p>
        ALL OATHSWORN GAIN A REDRAW TOKEN, BUT EACH OATHSWORN PERFORMS A
        SURVIVAL CHECK (DIFFICULTY 4). ALL THAT FAIL, LOSE 1 HIT POINT.
      </p>
      <p>B. Continue.</p>
      <p>You continue without helping.</p>
    </>,
    <>
      <p>
        You continue running toward the main gate. It is barred shut and will
        take time to open. As you and the guards scramble to lift the heavy bar,
        the ground shakes and a smell of sulfur fills the air as the great
        beast, the Doom of Bastone, breaks through a line of houses up the
        street. One of you can try to distract it, or you can all stand together
        while the guards open the gate.
      </p>
    </>,
    <>
      <p>CHOOSE EITHER:</p>
      <p>A. One Oathsworn defends alone.</p>
      <p>ONE OATHSWORN PERFORMS TWO ROUNDS OF COMBAT AGAINST DEFENSE 6.</p>
      <p>THE CHOSEN OATHSWORN GAINS 2 COMBAT TOKENS OF THEIR CHOICE.</p>
      <p>B. You stand together.</p>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 5.</p>
      <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
    </>,
    <>
      <p>
        You finally manage to get the gate open. You turn to run, but are
        confronted with a sea of claws and teeth waiting outside. You try
        desperately to fight through the pack of beasts, but each time you
        strike one down, two more take its place. You begin to feel hope may be
        lost and your Oath soon fulfilled. As the next wave approaches, Lyceen
        limps in front of you. With cold fury in her eyes, she raises her
        outstretched arms and the blood of the fallen levitates off the ground
        into the air. As the charging beasts draw closer, Lyceen lets loose a
        furious roar and the blood coagulates into the shape of countless spikes
        and spears. With a flick of her wrist, the projectiles rip through the
        ravenous creatures, obliterating them in the hundreds, leaving nothing
        behind but a field of carnage. In the aftermath Lyceen collapses.
        Scooping her up, you take her with you. You owe her that much.
      </p>
      <p>
        With a way cleared, you press through the gate. Behind you the city
        falls, and all around you, the sounds of death can be heard as people
        stream into the Deepwood. Running through the trees you lose the great
        beast that pursued you and instead bump into another group of refugees
        led by Greycane and Bram. Thankfully, they survived the carnage as well.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARDS 7 AND 8 (GREYCANE AND BRAM).</p>
      <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
    </>,
    <>
      <p>
        Banding together, you decide on your next steps. Your only hope at this
        point is to head home to Verum, but you are going to need to find the
        Wire Road first. Several hours into the trek, the rumbling begins again.
        This time from below.
      </p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 5). IF YOU SUCCEED, MARK THE
        ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 3 ON YOUR FREE COMPANY
        SHEET.
      </p>
    </>,
    <>
      <p>
        The shaking stops for a moment, and the procession of refugees holds its
        collective breath. Suddenly, the gaping maw of a giant Wyrm bursts from
        the hard earth, swallowing one of the poor refugees whole.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 3.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 3.</p>
      <img src={map} />
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>

      <p>
        You stand triumphant over hacked bits of the massive Wyrm's corpse, but
        the battle was not without casualties. Lost in the middle of the
        Deepwood, with a group of terrified civilians and limited supplies, you
        know there will be more lives lost before you can reach the safety of
        Verum. All hope relies on you finding the Wire Road now.
      </p>
    </>,
    <>
      <p>GAIN 8 IRON.</p>
      <p></p>
      <p>GAIN 2 IRON PER CIVILIAN LEFT ALIVE AT THE END OF THE ENCOUNTER.</p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 3 ON YOUR FREE
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
