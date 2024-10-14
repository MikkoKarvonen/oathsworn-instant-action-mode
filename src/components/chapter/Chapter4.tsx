import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter4/1.mp3";
import audio2 from "../../assets/audio/chapter4/2.mp3";
import audio3 from "../../assets/audio/chapter4/3.mp3";
import audio4 from "../../assets/audio/chapter4/4.mp3";
import audio5 from "../../assets/audio/chapter4/5.mp3";
import audio6 from "../../assets/audio/chapter4/6.mp3";
import audio7 from "../../assets/audio/chapter4/7.mp3";
import audio8 from "../../assets/audio/chapter4/8.mp3";
import audio9 from "../../assets/audio/chapter4/9.mp3";

import map from "../../assets/images/1.png";
import { AudioButton } from "../../assets/audioHandler";

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
  const [currentSoundIndex, setCurrentSoundIndex] = useState<number | null>(
    null
  );
  const [audioPlaying, setAudioPlaying] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const soundPlayers = sounds.map((sound) => useSound(sound));

  return (
    <div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">1</div>
        <div className="collapse-content">
          <AudioButton
            index={0}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            After the fall of Bastone, most of your caravan is still alive...
            lost, but alive. Without the Wire Road, you have to rely on your
            other lifelines to navigate the Deepwood, your compass and an old
            map Greycane recovered before you left Bastone. Together, they will
            have to be enough to get you and your ramshackle caravan of
            survivors back to the capital city of Verum.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 6). IF YOU SUCCEED, ALL
            OATHSWORN GAIN AN EMPOWERED X3 TOKEN FOR GETTING YOUR BEARINGS
            QUICKLY.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">3</div>
        <div className="collapse-content">
          <AudioButton
            index={1}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            You travel for the rest of the day, arriving at a large stone,
            etched with some long forgotten writing. A waystone you recognize on
            Greycane's map. As the shadows lengthen, you decide to shelter here
            for the night. Looking into the haggard faces of the civilians, you
            start piling up amber nuggets to light a fire and prepare for
            whatever the Deepwood has to throw at you. As darkness wraps around
            your camp, you keep your backs to the fire and stand guard.
            Throughout the night, things stalk at the light's edge, just beyond
            sight. Claws reach out of the dark only to be cut back by your
            blades, and more than once you must brandish flaming torches to ward
            them off. It does not work every time though.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>
            EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 4). ALL THAT
            FAIL, LOSE 1 HIT POINT. ALL THAT SUCCEED GAIN A REDRAW TOKEN.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">5</div>
        <div className="collapse-content">
          <AudioButton
            index={2}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            As a dim light breaks through the thick green canopy, your group has
            grown smaller. There is a solemn silence as you break camp and
            continue the journey.
          </p>
          <p>
            The trees continue on forever, and the long trudge is all you know
            until later that day you hear someone retching down the line, and
            see a man on his knees. "He tripped over that thing and it squirted
            something at him," a woman informs you. Looking down at his feet,
            you see a pink cyst, freshly disgorged. You know all too well what
            inhaling that black cloud means. This man will not survive.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Kill him now.</p>
          <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
          <p>B. Leave him behind.</p>
          <p>ALL OATHSWORN GAIN A +2 ANIMUS TOKEN.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">7</div>
        <div className="collapse-content">
          <AudioButton
            index={3}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            Matters do not get any easier. The next day, shortly after the march
            has started, your caravan wanders into a field of bloodthorns.
            Crimson and spearlike, they poke up from the ground all around you.
            Seeing no way around the danger, you are forced to press into the
            field.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>
            ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 3). ALL THAT
            SUCCEED GAIN A BATTLEFLOW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">9</div>
        <div className="collapse-content">
          <AudioButton
            index={4}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            Beyond the bloodthorns, the green shows no sign of relenting. March
            after march continues, and soon the question of food arises. For the
            past few days, you have rationed your supplies well, but even with
            this they are coming to an end. Hungry faces stare at you as you
            take the remaining food from your backpacks. It will not be enough
            for everyone.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Take most for yourself.</p>
          <p>ALL OATHSWORN LOSE A RANDOM COMBAT TOKEN.</p>
          <p>B. Distribute it amongst the refugees.</p>
          <p>
            ALL OATHSWORN GAIN 1 REDRAW TOKEN. TWO OATHSWORN LOSE 1 HIT POINT
            (YOUR CHOICE).
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">11</div>
        <div className="collapse-content">
          <AudioButton
            index={5}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            You continue to march for what feels like an eternity, and just as
            you begin to lose hope of ever finding any sign of civilization, you
            spot an old stone bridge. In the middle, a lone Bastonian guardsman
            stands in the midst of several dead bodies. Your presence startles
            him, and he raises his sword in defense. But as you approach, he
            recognizes the Oathmark on your wrist and relaxes his shoulders in
            relief.
          </p>
          <p>
            "Our squad was attacked," he tells you. "They came from the trees.
            Hooks and chains ripped away the Sergeant. They knocked me down, and
            I blacked out. Must have thought me dead. I was lucky, I guess."
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>
            ALL OATHSWORN GAIN ONE ITEM OF THEIR CHOICE FROM THE CHAPTER 4
            COMMON ITEMS DECK. SHUFFLE THE DECK AFTERWARD.
          </p>
          <p>GAIN ALLY CARD 12 (LUCKY).</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">13</div>
        <div className="collapse-content">
          <AudioButton
            index={6}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            Not far from the bridge, you find a long forgotten village now
            overgrown with weeds and sickly Deepwood vines. Faint crying can be
            heard from the village center. Perhaps more survivors found refuge
            here.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>
            PERFORM A SPOT CHECK (DIFFICULTY 4). IF YOU SUCCEED, MARK THE
            ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 4 ON YOUR FREE COMPANY
            SHEET. IF YOU FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR
            CHAPTER 4 ON YOUR FREE COMPANY SHEET.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">15</div>
        <div className="collapse-content">
          <AudioButton
            index={7}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            As you enter the village, you find a group of refugees fearfully
            looking up into the trees. As they do so, a hulking warrior clad in
            furs and scraps of leather and iron leaps from the canopy with a
            massive double-headed axe in his hands. Then two more fighters
            emerge from other trees. These men are bare chested and wield crude
            swords fashioned with a large hook that hangs from a long chain.
            Their skin is covered in scars. You know a Scar Tribe when you see
            one, and no doubt there are more of them hiding in the shadows. As
            you heft your weapons and prepare for battle two more fighters
            emerge and join their tribesmen.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 4.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 4.</p>
          <img src={map} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">17</div>
        <div className="collapse-content">
          <h3 className="text-1xl font-bold">Epilogue</h3>
          <AudioButton
            index={8}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            Bodies litter the village. There is something different about
            killing men, even men such as these. You take in the scene and
            realize it was not all bad. The new group of survivors are flush
            with rations, enough to get you to Verum. Now you just have to find
            it.
          </p>
          <p>
            As the journey resumes, you are walking at the head of the caravan
            when a cold, metallic thrum echoes in your mind. Thrum... Again, the
            familiar sound, but it seems you are the only one who hears it.
            Thrum... Unmistakable now, it is the low plucking of the Wire Road.
            You track the sound through the trees quickening your pace with each
            step. Thrum.
          </p>
          <p>
            The noise fades, and you suddenly find yourself staring into the
            eyes of Samil as he rests a hand on the Wire Road. Thrum... Your
            dead battle brother, who you lost on the road to Bastone plucks it
            one last time and vanishes before your eyes. You do not know why you
            are seeing Samil, but he just helped you find your way home.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">18</div>
        <div className="collapse-content">
          <p>GAIN 10 IRON.</p>
          <p>
            GAIN 2 IRON PER CIVILIAN LEFT ALIVE AT THE END OF THE ENCOUNTER.
          </p>
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 4 ON YOUR FREE
            COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
