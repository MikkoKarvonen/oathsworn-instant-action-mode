import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter12/1.mp3";
import audio2 from "../../assets/audio/chapter12/2.mp3";
import audio3 from "../../assets/audio/chapter12/3.mp3";
import audio4 from "../../assets/audio/chapter12/4.mp3";
import audio5 from "../../assets/audio/chapter12/5.mp3";
import audio6 from "../../assets/audio/chapter12/6.mp3";
import audio7 from "../../assets/audio/chapter12/7.mp3";
import audio8 from "../../assets/audio/chapter12/8.mp3";
import audio9 from "../../assets/audio/chapter12/9.mp3";

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
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">1 </div>
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
            You arrive in Verum muddy and bloody. The city is in a After a long
            journey back through uncharted Deepwood, worse state than when you
            left, and upon entering, you find parts of Verum's Northern outer
            ring completely overrun by the plague. Traversing the city to the
            Palace is not easy, but you eventually make it through the chaos to
            the King's throne room.
          </p>
          <p>
            Flanked by Watchers, the young King listens intently as you recount
            the events which transpired in the Wychwood, and more importantly,
            the Heart of Darkness. When you finish, King Favian gives you his
            thanks and bids you find something light to occupy yourself with as
            you will no doubt be needed again soon.
          </p>
          <p>
            Walking back through the street, those around begin to recognize
            you. The 'Heroes of Bastone' have become the 'Heroes of Verum' and
            regardless of your failure to bring back a cure, the people look up
            to you with awe and expectation. A burden you never wished to bear,
            yet the faces of the desperate make it hard to ignore.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Accept responsibility for the people.</p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
          <p>B. Reject responsibility for the people.</p>
          <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            Back at The Broken Oak, you are happy to see Greycane, Bram and
            Midge again. A days rest sees Bram convince you to try his latest
            concoction, which he calls "gin" and it definitely needs work. And
            Midge shows you some jewelry he 'found', which you make him take
            back to its owner. All is turning peaceful again, until the red
            raven comes.
          </p>
          <p>
            Bearing a contract tied by a red band, the raven is the sign of a
            new mission from the Raven Spire. The band color marks it as
            'inobligatum. Again. It asks for you by name. A small village needs
            protection. You prepare for the journey, and head out.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            By the time you reach the village a few days later, it has already
            been overrun. Not by beast, but by men. Every hut is burned and the
            villagers have all been slaughtered, all but one man who still
            clings to life. "They made me send the raven," his final words.
          </p>
          <p>
            The scene is gruesome. Several villagers have been nailed to
            buildings with an Oathmark carved into their bare chests. Each of
            the hung bodies points in a single direction, clearly goading you
            into the Deepwood. This is a message meant specifically for you. Up
            ahead, you hear screams for help, not everyone is dead. Some have
            been taken, you can still fulfill your contract. Moving into the
            treeline, you expect a trap.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>
            EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 6). ADD 1 TO
            ALL RESULTS IF YOU HAVE THE EXILE WITH YOU. ALL THAT FAIL, LOSE 1
            HIT POINT.
          </p>{" "}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            Making your way carefully through the underbrush you catch sight of
            a network of platforms and rope bridges high up in the trees. Each
            platform is ramshackle and furnished with bone structures and
            leather shelters lit by a large central fire.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>
            OPEN MYSTERY ENVELOPE 'F' AND PLACE ITS CONTENTS IN THE CENTER OF
            PLAY.
          </p>{" "}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            This is a Scar Tribe encampment, no doubt the perpetrators behind
            the attack, and it seems they are holding survivors on the central
            platform. If you can keep the element of surprise, you might be able
            to take them before they know what hit them. Silently, you scale the
            trees to the first platform and spot dark shapes lying in wait. By
            fortune alone, you have seen them first, and take the opportunity to
            plan your approach.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Try to take out the ambushers quietly.</p>
          <p>
            PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8. ANY THAT SUCCEED GAIN
            AN EMPOWERED X3 TOKEN.
          </p>
          <p>B. Try to sneak past unseen.</p>
          <p>
            EACH OATHSWORN PERFORM A SNEAK CHECK (DIFFICULTY 4). ADD 1 TO YOUR
            RESULT IF YOU ARE THE CUR. IF ALL SUCCEED, ALL OATHSWORN GAIN A +2
            ANIMUS TOKEN. IF ANY FAIL, ALL OATHSWORN LOSE 1 HIT POINT.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            Past the ambush, you keep to the shadows and come to a platform
            where a beast is chained up. A thornhound, one of the tribe's
            hunting beasts. It is currently sleeping, but will wake with the
            slightest noise. You need to dispose of it quietly.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>
            PERFORM A STEALTH CHECK (DIFFICULTY 6). ADD 1 TO YOUR RESULT IF YOU
            HAVE THE CUR WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A DEFENSE
            TOKEN.
          </p>{" "}
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            Sure to stay downwind of the creature, you are able to silently slit
            its throat. Moving on, you notice a large tree limb above you,
            hanging over the central platform where the prisoners are held in
            cages. On it, sitting in a chair made entirely of human bone, is the
            Scar Tribe Chieftain.
          </p>
          <p>
            "I KNOW YOU, MARKED ONES!" the Chieftain roars. With his powerful
            voice, the warrior calls on his unholy gods for vengeance as he
            accuses you of slaying his kin. From this, you assume he is related
            to the Scar Tribe you decimated after the fall of Bastone.
          </p>
          <p>
            "BLOOD FOR BLOOD! FACE ME! OR SHALL I SLAUGHTER ANOTHER VILLAGE?!"
          </p>
          <p>
            Hefting crude weapons, the Chieftain descends the throne and strides
            to the cages. Brutal looking tribesman, far more armored than you
            would expect a Scar Tribe to be, surround him like a living
            palisade. As the Chieftain raises a spiked mace, he offers a final
            warning, "FACE ME, OR WATCH THEM ALL DIE SCREAMING!"
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Wait for an opportunity while the Chieftain kills villagers.</p>
          <p>
            MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 12 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>GAIN ALLY CARD 35 (EMRAM).</p>
          <p>B. Reveal yourself to save all the villagers.</p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
          <p>
            YOU WILL BE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 12 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>GAIN ALLY CARDS 35 AND 36 (EMRAM AND TIA).</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            You drop down onto the platform, there is not much room to maneuver
            and a deadly fall awaits any misstep. This is going to get bloody.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 12.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 12.</p>
          <img src={map} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            The fight was close combat, and the tribe fought like cornered
            animals. You hope the Chieftain does not have anymore close family
            to avenge him. The tribe is broken and the village decimated. You
            hurry to free the remaining villagers, and make it out before the
            conflagration consumes you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">18</div>
        <div className="collapse-content">
          <p>YOU GAIN 28 IRON.</p>
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 12 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
