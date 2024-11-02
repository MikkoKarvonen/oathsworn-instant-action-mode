import { useState } from "react";

import audio1 from "../../assets/audio/chapter21/1.mp3";
import audio2 from "../../assets/audio/chapter21/2.mp3";
import audio3 from "../../assets/audio/chapter21/3.mp3";
import audio4 from "../../assets/audio/chapter21/4.mp3";
import audio5 from "../../assets/audio/chapter21/5.mp3";
import audio6 from "../../assets/audio/chapter21/6.mp3";
import audio7 from "../../assets/audio/chapter21/7.mp3";
import audio8 from "../../assets/audio/chapter21/8.mp3";

// import map from "../../assets/images/1.png";
import Collapse from "../Collapse";
import Player from "../Player";
const sounds = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];

const Chapter = () => {
  const [currentAudio, setCurrentAudio] = useState(0);

  const sections = [
    <>
      <p>
        Finding a tunnel that leads out beyond the walls, you collapse the way
        behind you and charge on through the darkness. Not far in, you find the
        corpses of the last defenders of Raven's Reach. Their bodies are
        decayed, but their equipment still gleams in the darkness.
      </p>
    </>,
    <>
      <p>
        REVEAL ALL CARDS FROM THE CHAPTER 19 AND 20 COMMON ITEM DECKS - YOU MAY
        GAIN UP TO 8 ITEMS FROM THEM (YOUR CHOICE). IF YOU TAKE 4 OR LESS, ALL
        OATHSWORN GAIN A REDRAW TOKEN.
      </p>
    </>,
    <>
      <p>
        You come out in the Deepwood, and turn to see the Doom of Bastone
        decimating the walls of Raven's Reach, at the head of an endless host of
        horrors. The full wrath of the Deepwood is being emptied onto the
        fortress, and it is being torn to pieces under the weight of hooves,
        claws, tails and teeth. Wasting none of the precious time that has been
        so dearly bought, you head the other way to the cave where all the
        answers await.
      </p>
      <p>
        Stepping from the Deepwood, you look down into the pitch black ravine
        once again. This time the way is clear, and no monsters block your path.
        Making your way to the great cave mouth of stone and root, you steel
        your resolve and step into darkness.
      </p>
    </>,
    <>
      <p>ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.</p>
    </>,
    <>
      <p>
        Roots surround you on all sides, and every step you take in this
        forsaken place makes your skin itch more. You can see the growths on
        your skin expanding rapidly, as if reacting in proximity to this
        forsaken place.
      </p>
    </>,
    <>
      <p>
        CHANGE THE NUMBER NEXT TO YOUR 'PLAGUE STAGE' ON YOUR FREE COMPANY SHEET
        TO 3.
      </p>{" "}
    </>,
    <>
      <p>
        Heading down dark tunnels of root and stone, hallucinations form in the
        fetid air. Fiends you have fought, and things you have only seen in your
        nightmares, slither and crawl toward you.
      </p>
    </>,
    <>
      <p>
        EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ANY THAT
        SUCCEED, GAIN A DEFENSE TOKEN AS YOU STAY CALM.
      </p>{" "}
    </>,
    <>
      <p>
        You shake yourself out of it. This is just an illusion and you will not
        let it overwhelm you. The words that were spoken on the day you took the
        Oath resound in your head like the drumbeat of war, giving you clarity
        and purpose.
      </p>
      <p>Today you take your stand.</p>
      <p>Today you join the line.</p>
      <p>The first and last line.</p>
      <p>The line of the glorious dead.</p>
      <p>None have broken it.</p>
      <p>Will you be the first?</p>
      <p>
        Moving deeper still, a terrible feeling of sickness and corruption
        washes over you, the world suddenly twisting away. The walls begin to
        close in around you as roots reach out to bind your arms and squeeze
        your chest, slithering into your eyes and mouth. You can feel the
        diseased tree inside you, crushing and choking, strangling you from
        within.
      </p>
    </>,
    <>
      <p>
        EACH OATHSWORN PERFORMS A REASONING CHECK (DIFFICULTY 5). ANY THAT
        SUCCEED, GAIN A BATTLEFLOW TOKEN AS YOU HOLD ON TO REALITY.
      </p>
    </>,
    <>
      <p>Another illusion, and again, the words of your Oath come to mind.</p>
      <p>We shall not break. We join the line.</p>
      <p>We answer the call.</p>
      <p>We will stand and die.</p>
      <p>Yet death will know our name.</p>
      <p>We are Oathsworn.</p>
      <p>
        Twenty six words that now define you. Together they draw you back to the
        surface and you gulp air. Then, suddenly, the tunnel is as it was, the
        vision gone.
      </p>
      <p>
        As you look ahead, the tunnel has come to an end, and a vast cavern now
        lies before you. Great pillar-like Deepwood trees suspend the expanse of
        the roof. Each pillar is covered in clusters of amber nuggets that pulse
        to the beat of a great heart. Roots fill the caverns and every one of
        them leads back to one central point. A colossal being tethered to one
        wall, its great back arched as it writhes in slumber as though in a
        nightmare. It was clearly an A'Dendri once, though it has now swollen to
        gigantic proportions, warped and twisted. Jutting from its chest is a
        huge amber boulder which pulses in sync with the veins on the walls.
        Looking closely, you see something move beneath its glassy orange
        surface. As you watch you realize the roots do not just bind the
        creature but emerge from it. Every root finding its source in this
        being.
      </p>
      <p>
        "Magnificent isn't he?" Samil says from behind you. Turning your weapons
        to him, he merely walks through them with a smile. You ask him who the
        creature is and Samil smiles. "He was once the father of an entire
        people. A King losing a war against the 'treekillers. He wished to
        defeat his enemies. So, I told him how. I was but a whisper when he
        first came to me. Nothing more than a worm in the ear. I gave him what
        he asked for. Though not quite the way he had intended." A smile
        broadens on Samil's face as he turns to you. "Now he is the father of a
        much greater kingdom," he says, raising his hands to gesture at the
        entirety of the Deepwood.
      </p>
      <p>
        You suddenly remember the tale you read in the Watcher's journal. The
        story of the war with the A'Dendri over the Life Giver. It said the
        A'Dendri were losing that war when the madness came, wiping out their
        city, and in its death throes, the Deepwood followed. If what Samil is
        saying is true, the massive A'Dendri buried beneath the earth here must
        be the cause of it all. This must be Kharnus, the progenitor of the
        A'Dendri race and the source of the Deepwood as well.
      </p>
      <p>
        While Samil speaks, you gauge the combat potential of the sleeping giant
        before you.
      </p>
    </>,
    <>
      <p>
        PERFORM A SPOT CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN GAIN
        A REDRAW TOKEN AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR
        CHAPTER 21 ON YOUR FREE COMPANY SHEET.
      </p>{" "}
    </>,
    <>
      <p>
        You ask Samil why he is telling you all this, and he replies, "Because
        your choice must be true. My lie has fed me well, Kharnus drank from the
        life stream and the world died. An infinite stream of tortured souls
        flowed into him, driving him utterly mad and I have grown from that
        suffering within our friend here. Yet it is only the truth that can free
        me. A pure choice. Isn't that what all this has been about?" he says,
        with disdain. "That is why you are here. I have kept you alive on the
        Wire to bring you here, because I know you will make the right choice.
      </p>
      <p>"What choice?" you ask.</p>
      <p>
        "The only one that ever mattered" Samils replies. "Whether or not to
        release me." Incredulous, you ask him why you how would, and with a
        smile returning to his face, he explains you can end the Deepwood. If
        you kill Kharnus, it will mean the decline of the Deepwood and end of
        the plague, but it will release Samil. Or you can choose to keep Samil
        bound, allowing the Deepwood to persist and the plague to continue.
      </p>
      <p>
        An opportunity to end the plague and destroy the Deepwood is before you.
        All you must do is kill Kharnus. But in doing so, you will unleash
        whatever Samil is into the world. Something primal in you warns against
        this, yet would you sacrifice Verum to stop him? He is clearly a being
        of immense power. If with one lie, he could cause the breaking of the
        world, what would he be capable of free of his bondage? Could
        sacrificing Verum mean saving the rest of the world? You look into
        Samil's eyes, seeking any sign of humanity, some reason to console you
        if you chose to free him, but he is not hiding himself from you now. His
        eyes are black pits, and in them you see only death staring back at you.
      </p>
      <p>
        The roar of the returning host of beasts stampedes down the tunnel.
        Rushing to the cavern entrance, you desperately hack at the stone and
        dirt and roots, collapsing the tunnel and sealing yourself inside.
        Looking at Samil you realize that you were never escaping this cave. All
        you can do now is make the right choice and make your death mean
        something. The cavern falls silent as the world teeters on a knife-edge.
      </p>
    </>,
    <>
      <p>CHOOSE ONE LAST TIME.</p>
      <p>EITHER:</p>
      <p>A. Free Samil.</p>
      <p>WRITE THE KEYWORD 'RELEASED' ON YOUR FREE COMPANY SHEET.</p>
      <p>B. Keep Samil bound.</p>
      <p>WRITE THE KEYWORD 'SEALED' ON YOUR FREE COMPANY SHEET.</p>
    </>,
    <>
      <p>
        Suddenly, a boulder-sized fist smashes into the ground behind you, and a
        mouthless roar rattles your bones. Kharnus, the father of the A'Dendri
        and creator of the Deepwood, driven mad, and sealed within this living
        tomb for hundreds of years, awakens!
      </p>
    </>,
    <>
      <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 21.</p>
      <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 21.</p>
      {/* <img src={map} /> */}
    </>,
    <>
      <h3 className="text-1xl font-bold">Epilogue</h3>
      <p>
        IF YOU HAVE THE 'RELEASED' KEYWORD ON YOUR FREE COMPANY SHEET TURN TO
        EPI.2 IN THE EPILOGUE OF CHAPTER 21 IN THE STORY BOOK.
      </p>
      <p>
        IF YOU HAVE THE 'SEALED' KEYWORD ON YOUR FREE COMPANY SHEET - TURN TO
        EPI.3 IN THE EPILOGUE OF CHAPTER 21 IN THE STORY BOOK.
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
