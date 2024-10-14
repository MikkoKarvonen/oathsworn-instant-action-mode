import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter17/1.mp3";
import audio2 from "../../assets/audio/chapter17/2.mp3";
import audio3 from "../../assets/audio/chapter17/3.mp3";
import audio4 from "../../assets/audio/chapter17/4.mp3";
import audio5 from "../../assets/audio/chapter17/5.mp3";
import audio6 from "../../assets/audio/chapter17/6.mp3";
import audio7 from "../../assets/audio/chapter17/7.mp3";
import audio8 from "../../assets/audio/chapter17/8.mp3";
import audio9 from "../../assets/audio/chapter17/9.mp3";

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
            With the witch, Aurelia, in tow you can finally make your way back
            to Verum. It is hard to look upon the woman. She is not just a
            target, she is a person, and you hope an alternative to The Keening
            can be found before you get to the Heart of Darkness. You learned
            long ago however, that hope is dangerous ground to stand on. On your
            way to Thrace's gate, you stop off at the merchants district for
            supplies.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
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
            Plunging into the Deepwood, once more you grip the Wire Road and put
            your head down into the long march. Rain pelts you for days, and
            only intensifies the closer you get to the cut section of the Wire
            Road. You remember the detour you had been forced to take into the
            village of Refuge, whose inhabitants had tried to sacrifice you to
            the Wandering Queen. You will have to find that village again to
            regain the Wire, and know it lies on the far side of the mountain
            range to the west. Checking your compass, you look up to face a
            swirling vortex. It is becoming a powerful storm. Sure of your
            heading, you let your hand slip from the Wire and head toward the
            village.
          </p>
          <p>
            You can barely take one step after another. Branches crack and rain
            lashes your face. The noise is deafening. Suddenly, it all dies down
            and you taste iron in your mouth. Looking at the back of your hands,
            you see crimson droplets splashing. Blood. It is raining blood. All
            thoughts of this being a natural storm flee your mind and one
            conclusion takes its place. This storm is powered by the malefic.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>
            PERFORM A SPOT CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN
            GAIN A DEFENSE TOKEN AS YOU REALIZE SOMETHING IS FOLLOWING YOU.
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
            Red mist rises and you find yourself in another place, a mirror
            version of the Deepwood. Then it comes from the edge of your vision,
            a beast which is hard to describe, translucent but seemingly made
            out of shifting swirls of blood. It emanates a palpable aura of
            revenge, and as it draws closer, a giant claw down toward sweeps
            you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>
            ONE RANDOM OATHSWORN LOSES 1 HIT POINT. PERFORM A ROUND OF COMBAT
            AGAINST DEFENSE 8.
          </p>{" "}
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
            The claw moves right through you, and as it does you see images
            flickering in your mind. The village. The eye of the storm. Whatever
            this is, it comes from there. There was something else in that
            vision. Death. Everyone in the village was dead. Whatever is
            happening there, you need to get there and end it.
          </p>
          <p>
            As pain lances through you, the blood on your face is replaced with
            murky rain water, with the wind picking up and the trees around you
            creaking. You are back in the storm in Deepwood, in reality. You can
            still feel the Blood Fiend just beyond the veil hunting you. Vowing
            to put as much distance as possible between you and that thing, you
            grasp your compass tighter and move out.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>
            EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ANY THAT
            SUCCEED, GAIN AN EMPOWERED X3 TOKEN AS YOU HOLD YOUR WAY.
          </p>{" "}
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
            After another hour of trudging through the ever increasing storm,
            you feel the familiar taste of iron on your tongue. The Blood Fiend
            has found you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Stand your ground and fight.</p>
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.</p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
          <p>B. Try to shake it off.</p>
          <p>
            EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 6). ANY THAT
            FAIL, LOSE 1 HIT POINT.
          </p>
          <p>ALL OATHSWORN GAIN A +2 ANIMUS TOKEN.</p>
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
            The vaguely humanoid fiend emerges from the Deepwood, fifteen feet
            high and formed from blood. As you battle it, another vision comes.
            You see the bodies of hundreds laid in concentric circles around a
            woman with a raised dagger. The blood is flowing past her into a
            dead figure lying on the ground. As you exert all your will upon the
            vision, you scream and the image shatters.
          </p>
          <p>
            As before, blood is replaced by water, and you are freed from 'the
            other place' once more. In that final moment, you had seen
            something. The dead figure had begun to move.
          </p>
          <p>
            You recognize the village before you, even through the rain. Where
            houses once stood there is now rubble. Where the central building
            stood, you see a whirlwind of shattered remains circling high up
            into the sky. The storm itself is trying to hold you, keep you from
            getting there.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>
            PERFORM A MIGHT CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
            GAIN AN EMPOWERED X3 TOKEN AS THE STORM FAILS TO SLOW YOU.
          </p>{" "}
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
            Each step becomes harder as the storm tears at you, but you break
            through. You can see the rings of bodies and the silhouette of a
            woman inside. Beside her is an altar of bone and upon that altar
            sits an abomination.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF
            YOU HAVE THE EXILE WITH YOU. IF YOU SUCCEED, MARK THE ENCOUNTER
            SPECIAL RULES BOARD BOX FOR CHAPTER 17 ON YOUR FREE COMPANY SHEET.
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
            As you close on it, you can see the thing more clearly. Contorted
            and twisted with one great claw and spikes jutting from its back, it
            is neither man nor beast. It is, however, familiar. It is the Scar
            Tribe Chieftain, reanimated by the Shaman you had fought in the tree
            tops only weeks before. The Shaman smiles as she sees her plan
            coming to fruition. She had followed you, had known you would return
            here, and laid a trap for you. The storm, the Blood Fiend, and this
            resurrection all for one purpose. To see you dead. To get revenge.
            She screams in ecstasy as the shadows elongate around you and the
            Chieftain advances.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>
            ALL OATHSWORN PERFORM A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT FAIL
            LOSE 1 HIT POINT.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">17</div>
        <div className="collapse-content">
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 17.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 17.</p>
          <img src={map} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">18</div>
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
            The Chieftain lies in ruins, with the Shaman not far off. The two of
            them nearly succeeded in their desire to end you. When you finally
            felled the Shaman, the storm unraveled. The shadows returned to
            their natural state and the sun finally peeked from behind the
            clouds.
          </p>
          <p>
            Making sure they can never rise again, you burn the bodies and the
            cursed village to the ground, drying yourself by the purifying
            fires. The only good in all this has been that your Thracian witch,
            Aurelia, is unharmed. Still under the effects of the aether, you get
            her to her feet and lead her to the Wire Road to Verum. Now the hard
            part begins.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">19</div>
        <div className="collapse-content">
          <p>YOU GAIN 36 IRON.</p>
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 17 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
