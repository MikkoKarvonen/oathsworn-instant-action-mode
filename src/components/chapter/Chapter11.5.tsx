import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter11.5/1.mp3";
import audio2 from "../../assets/audio/chapter11.5/2.mp3";
import audio3 from "../../assets/audio/chapter11.5/3.mp3";
import audio4 from "../../assets/audio/chapter11.5/4.mp3";
import audio5 from "../../assets/audio/chapter11.5/5.mp3";
import audio6 from "../../assets/audio/chapter11.5/6.mp3";
import audio7 from "../../assets/audio/chapter11.5/7.mp3";

import map from "../../assets/images/1.png";
import { AudioButton } from "../../assets/audioHandler";

const sounds = [audio1, audio2, audio3, audio4, audio5, audio6, audio7];

const Chapter = () => {
  const [currentSoundIndex, setCurrentSoundIndex] = useState<number | null>(
    null
  );
  const [audioPlaying, setAudioPlaying] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const soundPlayers = sounds.map((sound) => useSound(sound));

  return (
    <div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">1</div>
        <div className="collapse-content">
          <p>
            THIS IS A BONUS CHAPTER, IT IS OPTIONAL AND YOU WILL NOT GAIN A
            LEVEL FOR IT, HOWEVER, FOR COMPLETING THE ENCOUNTER YOU WILL GAIN A
            FREE COMPANY TRAIT.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
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
            After your discovery of the Heart of Darkness, you are on your way
            back to Verum. Without the Wire Road or any idea where you are, your
            only hope of finding home is in a strange compass with a bloody
            needle that you were given by the Watchers before you left. You were
            told it unerringly points back to Verum and will guide you through
            the endless green.
          </p>
          <p>
            Not being on the Wire means you will have a tough journey ahead, and
            that is confirmed when you are set upon by a pack of long-limbed
            Snatchers that try to pluck you away from the fire on your first
            night.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">3</div>
        <div className="collapse-content">
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
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
            In the morning, you notice an addition to your camp. The 'asset'
            sent from Raven Spire has returned to you. He had gone missing when
            you reached the Wychwood, and now sits among you, carrying a wrapped
            package that is clearly something from the A'Dendri homeland. You
            ask him how he found you, to which he produces his own blood
            compass, this one pointing directly to you. The sight sends a chill
            up your spine and you change the topic. You ask him what he took,
            but he simply tells you, "You have your mission, and I have mine."
          </p>
          <p>
            Returning to the march, you come across a field of spreader vines.
            An agonizing death, being slowly pulled apart, awaits anyone snagged
            in their hooks. You must be careful.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">5</div>
        <div className="collapse-content">
          <p>
            EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 5). ALL THAT
            SUCCEED, GAIN A REDRAW TOKEN. ALL THAT FAIL, LOSE 1 HIT POINT.
          </p>{" "}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
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
            After several more days of travel, you hear a rumbling in the
            clouds, then the pitter-patter of rain as a storm breaks drenching
            everyone. You suspect you are someplace parallel to the Wychwood at
            this point, but there is no way to be sure. Gritting your teeth, you
            keep moving.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">7</div>
        <div className="collapse-content">
          <p>
            PERFORM A SURVIVAL CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL
            OATHSWORN GAIN A +2 ANIMUS TOKEN AS YOU MANAGE TO KEEP MOST OF YOUR
            EQUIPMENT DRY.
          </p>{" "}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
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
            The storm subsides, and another day of travel brings you to a
            clearing where you find human remains. A merchant caravan long lost
            to predators. It appears to be decades old, but there is some
            salvageable gear. You decide to make camp for the night.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">9</div>
        <div className="collapse-content">
          <p>
            REVEAL ALL CARDS FROM THE CHAPTER 11 COMMON ITEM DECK AND GAIN ANY 4
            ITEMS FROM IT.
          </p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
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
            With the dawn, you are awoken by strange movement around the
            clearing. As you get to your feet, several pod-like plants sprout
            from the mulch. You have seen these before. They are Sentinels,
            poisonous spike-firing turrets used to defend the Wychwood border,
            and each of them is aimed at you. As you take up a defensive
            posture, an A'Dendri Grove Maiden appears before you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">11</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF
            YOU HAVE THE RANGER WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A
            DEFENSE TOKEN.
          </p>{" "}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
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
            Grove Maidens are the architects of the A'Dendri bioforms, one of
            the most ancient of their race. One would never leave her unless
            under dire need. You look to the 'asset' who grove holds his package
            tightly behind his back, and before you can finish your thought, he
            is engulfed by dozens of sharp vines. As you struggle to help free
            him, the Sentinels begin to fire.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">13</div>
        <div className="collapse-content">
          <img src={map} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <h3 className="text-1xl font-bold">Epilogue</h3>
          <AudioButton
            index={6}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            You subdue the Grove Maiden. The 'asset' moves to kill her, but you
            stand in the way. He may outrank you, and his mission may be vital
            to the Raven Spire, but that does not mean you have to sit idly by
            while he assassinates this A'Dendri for trying to reclaim what is
            hers. She is broken and can do no harm. You see a cold calculation
            pass behind his eyes and he relents without expression. You are sure
            he would have the same expression, had his calculation gone the
            other way, and he had tried to kill you. The Grove Maiden seems
            confused, even inquisitive that you, a 'Treekiller, would save her.
            As you begin to head back into the green, you can see the Grove
            Maiden is wrestling with a decision.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">15</div>
        <div className="collapse-content">
          <p>
            YOU MAY NOW QUICKSWAP ONE MEMBER OF THE FREE COMPANY TO BECOME THE
            GROVE MAIDEN IF YOU CHOOSE.
          </p>
          <p>DO NOT TALLY LEVEL, LOOT AND LOSSES.</p>
          <p>GAIN A FREE COMPANY TRAIT.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
