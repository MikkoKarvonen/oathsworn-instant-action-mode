import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter14/1.mp3";
import audio2 from "../../assets/audio/chapter14/2.mp3";
import audio3 from "../../assets/audio/chapter14/3.mp3";
import audio4 from "../../assets/audio/chapter14/4.mp3";
import audio5 from "../../assets/audio/chapter14/5.mp3";
import audio6 from "../../assets/audio/chapter14/6.mp3";
import audio7 from "../../assets/audio/chapter14/7.mp3";
import audio8 from "../../assets/audio/chapter14/8.mp3";
import audio9 from "../../assets/audio/chapter14/9.mp3";
import audio10 from "../../assets/audio/chapter14/10.mp3";
import audio11 from "../../assets/audio/chapter14/11.mp3";
import audio12 from "../../assets/audio/chapter14/12.mp3";

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
        Surrounded by a dozen slain infected, you sit on the docks north of the
        river. You are infected. Looking down at the black spots forming on your
        arms, you know it is only a matter of time before the death bell tolls
        for you. You are broken from your reverie by a familiar voice from
        above. The 'asset' from the Raven Spire who took something from the
        Wychwood stands above you. "You are not allowed to die yet, you have
        work to do." With that, he tosses you a green elixir and tells you to
        drink. "It won't cure you, but it will buy you some time and keep you
        from spreading it to others. Drink it all, there is only one dose. Now
        follow me." Doing as he says, you drink and notice the black spots on
        your arms start to fade.
      </p>
    </>,
    <>
      <p>
        OPEN MYSTERY ENVELOPE 'Y'. EACH OATHSWORN GAINS ONE 'PLAGUE' INJURY
        CARD.
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
        Taking you through a labyrinth of tunnels, the 'asset' leads you out on
        the south side of the river to where a tent city has grown on the
        grounds of the Palace. In it, Bram has decorated an army tent with The
        Broken Oak sign he saved from the blight, and declared it a tavern.
      </p>
      <p>
        The loss of the witch mars your mood. There is not much time before the
        army sets off for the Heart of Darkness. You must find a witch soon, and
        now your best shot is Thrace, a city of masks and slaves controlled by
        five powerful families.
      </p>
    </>,
    <>
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
        Gathering your gear and checking your packs you dive back into the
        Deepwood. You start your travel in a needle-like rain, which only grows
        stronger each day. After three days on the Wire, you hear a dreaded
        buzzing. A burrower swarm is closing in.
      </p>
    </>,
    <>
      <p>
        EACH OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 6). ALL THAT FAIL,
        LOSE 1 HIT POINT.
      </p>
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
        You hurry along the Wire, having to ditch your rations to distract the
        swarm. Then suddenly, your hand grasps nothing. The Wire is gone, and if
        you stay here the swarm will find you again. Off to your side, you spot
        a faint light in the darkness, with no Wire in front and the swarm
        behind, you follow the light.
      </p>
      <p>
        Emerging from the woods, you see a prosperous looking village ahead. You
        are met by a smiling herbalist called Nydia, who welcomes you to the
        village of Refuge, and offers to take you in for the night. In the
        morning, the villagers seem to be preparing for some sort of feast. You
        ask about the Wire Road and she replies that they have also lost the
        Wire to Thrace, but there is a village close by that may have a map.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A DEFENSE TOKEN FOR NAVIGATING THE DEEPWOOD WELL.
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
        Arriving there, you find nothing but ruins and corpses. This attack did
        not happen recently, but several weeks ago. Scouring the ruins, you find
        no map and need to return to the village before nightfall.
      </p>
      <p>
        The next day, Nydia tells you of a caravan that should have arrived
        several days ago. They were carrying food, perhaps enough to get you to
        Thrace.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A +2 ANIMUS TOKEN.
      </p>{" "}
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
        You find the caravan, but it has been attacked and there are no bodies
        or food. Nydia is clearly hiding something from you, and resolve to
        investigate the village further. you Suspicions heightened, you break
        into Nydia's dwelling.
      </p>
    </>,
    <>
      <p>
        PERFORM A STEALTH CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOU HAVE
        THE CUR WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A BATTLEFLOW TOKEN.
      </p>
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
        To your surprise you find a woman. It is Nydia's daughter who is locked
        up. It seems Nydia did not want you talking to her. She manages to tell
        you about a passage in the mountains to the east that holds your
        answers. Before she you more, Nydia starts to wake. You slip away before
        can tell you raise an alarm. The next morning you go to find what the
        passage holds.
      </p>
    </>,
    <>
      <p>
        PERFORM A SEARCH CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN
        GAIN A REDRAW TOKEN.
      </p>{" "}
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
      <p>In the passage, you can see thick webs coating the walls.</p>
    </>,
    <>
      <p>
        PERFORM A REASONING CHECK (DIFFICULTY 3). IF YOU SUCCEED, MARK THE
        ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 14 ON YOUR FREE COMPANY
        SHEET.
      </p>
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
        Peering through the milky white substance, you see bodies laying on the
        floor, their chests moving up and down with their breath. You cut
        through the webs to see if they can be saved. Your answer comes as their
        chests burst open, and hundreds of small spiders emerge from their
        bodies.
      </p>
    </>,
    <>
      <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.</p>
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
        You manage to fight off the scuttling wave. If those were the babies,
        you do not want to meet the mother. Heading back, you note silk strands
        in the trees leading to the village. You have hunted enough things to
        know that the village should have been preyed upon by now. And yet,
        according to the villagers, they found a peaceful spot in the Deepwood
        and have never been attacked. Something is very wrong here.
      </p>
      <p>
        At the village, the feast is in full swing and there is merriment and
        ale flowing. You are offered food and drink but refuse. Throughout the
        night, more and more villagers try to ply you with something to eat, and
        realizing their plan, you test your theory. You take a proffered cup and
        offer it to Nydia. She refuses, but you insist. At that, all pretense is
        off. The feast turns into a melee, they had been trying to drug you.
      </p>
    </>,
    <>
      <p>
        PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. ANY THAT SUCCEED, GAIN AN
        EMPOWERED X3 TOKEN.
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
        Pushed to the edge of the village, you hear the sound of many legs
        behind you. Turning around, you see eight black orbs staring back. The
        feast was never for you, it was for her.
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 14.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 14.</p>
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
        With the Wandering Queen slain, the villagers start lamenting. They say
        without the Queen's protection they are doomed. It seems they had made
        their own oaths to darker things. You decide they will live with the
        choices they made, as you have to live with yours. Nydia died in the
        battle, but her daughter still lives. She had not been complicit in the
        village's schemes and you cannot judge her for her blood. You take her
        with you and leave the village to its fate.
      </p>
    </>,
    <>
      <p>GAIN ALLY CARD 40 (CLYDIA).</p>
      <p>YOU GAIN 32 IRON.</p>
      <p>
        IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
        OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 14 ON YOUR FREE
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
