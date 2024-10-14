import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter8/1.mp3";
import audio2 from "../../assets/audio/chapter8/2.mp3";
import audio3 from "../../assets/audio/chapter8/3.mp3";
import audio4 from "../../assets/audio/chapter8/4.mp3";
import audio5 from "../../assets/audio/chapter8/5.mp3";
import audio6 from "../../assets/audio/chapter8/6.mp3";
import audio7 from "../../assets/audio/chapter8/7.mp3";
import audio8 from "../../assets/audio/chapter8/8.mp3";
import audio9 from "../../assets/audio/chapter8/9.mp3";
import audio10 from "../../assets/audio/chapter8/10.mp3";

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
  audio10,
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
            With many villagers still under the strange spell, you focus on
            those that had yet to fall to the Venerator's powers. From them you
            learn the Venerator arrived yesterday and immediately began the
            sacrifices. No explanation. No warning.
          </p>
          <p>
            Among the lucid is a Banksmith who, grateful for your efforts,
            offers you a selection of weapons and armor.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>
            YOU MAY START A TRADE WITH THE BANKSMITH. ALL OATHSWORN GAIN ONE
            ITEM OF THEIR CHOICE FOR FREE AND MAY TRADE FOR ADDITIONAL ITEMS AS
            USUAL.
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
            After your trade, your attention returns to the Venerator's corpse
            and the malefic tome that lies beside it, wrapped in charred black
            leather and bound by chains.
          </p>
          <p>
            Suddenly, the village is thrown into a panic. "The children! The
            children are missing!" a mother screams.
          </p>
          <p>
            During the battle with the Venerator, it seems the children ran off
            into the woods. Considering the violence, it is understandable they
            might run and hide, but flee into the woods? Surely, they know
            better. Thinking that this village cannot get much stranger, you
            move to secure the Venerator's stolen tome.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Open the book.</p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
          <p>B. Burn the book.</p>
          <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
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
          <p>The last thing you remember is touching the book.</p>
          <p>
            You awaken in a desolate field of bones beneath a twisting miasma of
            sky illuminated by twin orange suns. A young girl stands before you.
            She says her name is Lina and reveals she is one of a number of
            children trapped in this strange realm. The other children are
            scattered throughout this place on various islands floating in the
            maelstrom. Lina believes by saving them, you might save yourself.
            Leading you through the bonelands she reveals a secluded thicket
            where you find a large, wooden table surrounded by empty chairs. On
            the table is a map with a miniature statue on top. "This appeared
            when you did," Lina says.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>
            OPEN MYSTERY ENVELOPE 'D' AND PLACE ITS CONTENTS IN THE CENTER OF
            PLAY.
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
            Instinctively, you move the sculpture to one of the islands depicted
            on the map and the world around you instantly transforms. You are
            suddenly standing in an enormous silk web as a giant spider tends to
            a pair of children wrapped in cocoons. This is your chance to test
            Lina's theory, but saving both children from the spider may prove
            difficult.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Save only one.</p>
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7.</p>
          <p>PLACE A TRACKER DIE SHOWING 1 ON THE TABLE.</p>
          <p>B. Save both.</p>
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.</p>
          <p>PLACE A TRACKER DIE SHOWING 2 ON THE TABLE.</p>{" "}
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
            As life flees from the giant arachnid's eyes, again the world shifts
            in a gut wrenching swirl and you find yourself back in the thicket,
            staring at the map on the table. The chairs around the table are now
            filled with the children you saved.
          </p>
          <p>
            This realm is pure madness, but at least you have something to focus
            on. Moving the sculpture to another island brings you to a swampy
            marshland. You can hear children singing in the distance. As you
            turn, you suddenly see the face of the woman from Bastone whom you
            failed to save from the Broodmother. The giant rat screeches from
            somewhere far off in the muggy bog.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>
            EACH OATHSWORN PERFORMS A SANITY CHECK (DIFFICULTY 5). ADD ONE TO
            YOUR RESULT FOR EACH HIT POINT YOU HAVE LOST SO FAR. ALL THAT FAIL,
            LOSE A HIT POINT AS YOUR MIND BEGINS TO UNRAVEL. ALL THAT SUCCEED,
            GAIN A BATTLEFLOW TOKEN AS YOU BEGIN TO SEE THROUGH THE ILLUSION.
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
            Pressing on, you come to a clearing and see a child skipping around
            a rock with a glowing glyph carved into its surface. The young
            girl's feet are blistered and bloody. You instinctively pick her up
            and are immediately teleported back to the thicket. Another child
            sits at the table.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>INCREASE THE DIE ON THE TABLE BY 1.</p>{" "}
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
            You feel stronger. Or the hold this place has on you grows weaker.
            You think you could leave, but know there are still more children
            out on the islands.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Look for another child.</p>
          <p>INCREASE THE NUMBER ON THE TRACKER DIE BY 1.</p>
          <p>B. Leave immediately.</p>
          <p>
            ONE RANDOM OATHSWORN LOSES 1 HIT POINT, ALL OATHSWORN GAIN A +2
            ANIMUS TOKEN.
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
            With the children around you smiling, an irresistible urge causes
            you to flip the table. Time stands still as the map
          </p>
          <p>
            flies in the air and your world spins into chaos. When the swirling
            unreality settles, you are back in reality in the village, standing
            over the Venerator's corpse.
          </p>
          <p>
            Not only are you back in the village but you seem to know where the
            children are. Following your instincts, you find a den of bones,
            fetishes and many children. You note some of them are familiar. They
            are the ones you saved in the realm of madness. Other children hang
            from the trees, their eyes glowing a brilliant orange. This is a
            scene you are all too familiar with. Sentries. The Satyr is here.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>
            PERFORM A SNEAK CHECK (DIFFICULTY 7). ADD THE NUMBER ON THE TRACKER
            DIE TO YOUR RESULT. IF YOU SUCCEED, ALL OATHSWORN GAIN A COMBAT
            TOKEN OF THEIR CHOICE AND MARK THE ENCOUNTER SPECIAL RULES BOARD BOX
            FOR CHAPTER 8 ON YOUR FREE COMPANY SHEET. IF YOU FAIL, YOU WILL BE
            AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 8 ON YOUR FREE COMPANY
            SHEET.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">17</div>
        <div className="collapse-content">
          <AudioButton
            index={8}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            The great form of the Satyr is before you, wielding its massive
            staff. Atop the staff you see Lina, the girl who had guided you in
            the realm of madness. Bound to its apex, darklight streams from her
            open mouth in a silent scream. It had been the Satyr's mad realm
            that you were trapped in, and now that you have escaped it, you can
            finally end this.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">18</div>
        <div className="collapse-content">
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 2.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 2.</p>
          <img src={map} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">19</div>
        <div className="collapse-content">
          <h3 className="text-1xl font-bold">Epilogue</h3>
          <AudioButton
            index={9}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            You break the Satyr's staff and cast the fiend down. As the orange
            eyes finally go dim and lifeless, you see Samil standing behind the
            Satyr. You had hoped ending the Satyr would also end the visions of
            your dead comrade but from the look of the smirk on his face he is
            not going anywhere. As the children start crying, Samil disappears
            in a blink. You learn the young girl, Lina, was taken from a village
            near Verum, not Cistercia, and decide she will return there with
            you. After delivering the Venerator's armor to the Lord Marshall and
            collecting your mendicants, you begin the trip back to Verum.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">20</div>
        <div className="collapse-content">
          <p>GAIN ALLY CARD 21 (LINA).</p>
          <p>YOU GAIN 20 IRON.</p>
          <p>
            IF YOU HAVE THE VENERATED PLATE ITEM CARD, ARCHIVE IT AND GAIN 8
            IRON.
          </p>
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 8 ON YOUR FREE
            COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
