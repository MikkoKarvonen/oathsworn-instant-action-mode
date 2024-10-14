import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter13/1.mp3";
import audio2 from "../../assets/audio/chapter13/2.mp3";
import audio3 from "../../assets/audio/chapter13/3.mp3";
import audio4 from "../../assets/audio/chapter13/4.mp3";
import audio5 from "../../assets/audio/chapter13/5.mp3";
import audio6 from "../../assets/audio/chapter13/6.mp3";
import audio7 from "../../assets/audio/chapter13/7.mp3";
import audio8 from "../../assets/audio/chapter13/8.mp3";
import audio9 from "../../assets/audio/chapter13/9.mp3";
import audio10 from "../../assets/audio/chapter13/10.mp3";

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
            Several days after the conflagration at the Scar Tribe village
            recuperating in The Broken Oak. You can hear the wails from the
            quarantined Cobbles over the walls of the outer city ring. The
            plague has worsened and rumors abound that it is not just killing
            people now, it is also changing them.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>
            ALL OATHSWORN LOSE ALL INJURY CARDS, RETURNING THEM TO THE BOTTOM OF
            THE INJURY DECK.
          </p>
          <p>
            OPEN MYSTERY ENVELOPE 'B' AND PLACE ITS CONTENTS IN THE CENTER OF
            PLAY.
          </p>
          <p>YOU MAY START A TRADE WITH THE BANKSMITH AND APOTHECARY.</p>
          <p>
            YOU MAY LOSE 10 IRON TO UPGRADE DANE. IF YOU DO, ARCHIVE ALLY CARD 3
            (DANE) AND GAIN ALLY CARD 38 (DANE).
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
            A few days later a royal guard bangs on the door of The Broken Oak
            with a summons. A great audience is being called, and your
            attendance is requested.
          </p>
          <p>
            Joining the assembly at the Palace, you stand alongside other Free
            Companies, listening to the King address the crowd. "The plague is
            ravaging our city. Our only hope lies in a place called the Heart of
            Darkness. But we cannot reach it, not without a plan. The heart is
            surrounded by uncounted monsters, and unless we can defeat them, we
            are without hope. 'Heroes of Bastone, tell us of The Keening."
          </p>
          <p>
            Stepping forward, you recount your experience in Bastone to the
            assembly, telling them of the event which occurred just before the
            Deepwood came to life and the city was sacked. You explain how The
            Keening of the witch was like a beacon to the creatures of the
            forest, and how they were drawn from miles around by her psychic
            howl.
          </p>
          <p>
            Nodding, the King raises his voice above the crowd. "This is our
            path. If we can draw the creatures from the heart using this
            Keening, we could save Verum. I hereby order each Free Company in
            the realm to hunt and collar every witch they can find. It is a
            bloody task, but I am certain if we do not take it, we will be
            ensuring the death of thousands, and the loss of our great city. You
            have until the new moon. At that time, we shall march into the Heart
            of Darkness, witches or not. We have only one chance to succeed.
            Failure is not an option."
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. We do it for humanity.</p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>
          <p>B. We do it because we have to.</p>
          <p>ALL OATHSWORN GAIN DEFENSE TOKEN.</p>
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
            Tasked to find a witch for The Keening, you begin your search at
            Black Rock, the infamous prison of Verum. The Inquisition has no
            confirmed witches at present, but tells you of a recent sighting. It
            seems another Free Company had been on the trail of a witch several
            days before, but has missing. If only you can track them down. gone
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 5). ADD 1 TO THE RESULT IF THE
            WARDEN IS WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN AN EMPOWERED
            x3 TOKEN FOR OBTAINING THE INFORMATION QUICKLY.
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
            An inquiry with the Watchers of Raven Spire tells of the Free
            Company's mission: The Stone Dogs had been petitioned by a Warden to
            track down an escaped witch whose last sighting was in The Cobbles.
          </p>
          <p>
            With the fate of the city at stake, you put a cloth to your mouth
            and enter the quarantine zone. The plague is known to be passed by
            touch, so long as you keep your distance from the infected you
            should be okay.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>
            PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
            GAIN A +2 ANIMUS TOKEN FOR SPENDING AS LITTLE TIME AS POSSIBLE
            OUTSIDE.
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
            You find an informant who aided the Stone Dogs. She tells you that
            the witch, Marcella, defeated them, and she wants revenge on the
            Raven Spire for imprisoning her.
          </p>
          <p>
            Just as you are about to return to the search, the door is broken
            down by an abomination, thick black roots and bark spread over her
            body as she lumbers forward, reaching out to touch you. You have
            seen this before in Brother Marius, you cannot let her touch you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7.</p>
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
            You manage to end the woman's suffering without being touched, and
            rise to hear distant alarm bells. "They are breaking through! The
            infected!" The quarantine is broken, the inner city walls are being
            attacked. You need to help defend the city.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Defend The Broken Oak.</p>
          <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
          <p>TWO RANDOM OATHSWORN LOSE 1 HIT POINT.</p>
          <p>B. Defend the gates.</p>
          <p>ALL OATHSWORN GAIN A +2 ANIMUS TOKEN.</p>
          <p>LOSE ONE RANDOM COMBAT ALLY.</p>{" "}
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
            The infected are attacking. Masses of twisted flesh and roots
            advance on the defenses. You must buy time for the refugees to
            escape to the south.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.</p>
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
            A black snow is falling as the attacks roll in, wave after wave. You
            cannot protect yourself against being infected.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>
            PERFORM A SURVIVAL CHECK (DIFFICULTY 7). IF YOU SUCCEED, WRITE
            'PLAGUE STAGE 1' ON YOUR FREE COMPANY SHEET. IF YOU FAIL, WRITE
            'PLAGUE STAGE 2' ON YOUR FREE COMPANY SHEET.
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
            The horde pushes you back, until you feel an enormous heat on your
            back. The dried up river bed that separates the north and south of
            the city is being put to the torch and flames shoot up in the sky.
            The north side of the city is lost.
          </p>
          <p>
            Through the chaos, you see a woman behind the horde, fire spewing
            from her hands, driving the infected before her. She is responsible
            for the attack. Beside her, you make out a Free Company, the Stone
            Dogs. Their eyes are hazy, and they are clearly under some malefic
            power.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">18</div>
        <div className="collapse-content">
          <p>
            PERFORM A SPOT CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF THE
            WITCH IS WITH YOU. IF YOU SUCCEED, MARK THE ENCOUNTER SPECIAL RULES
            BOARD BOX FOR CHAPTER 13 ON YOUR FREE COMPANY SHEET.
          </p>
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 13.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 13.</p>
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
            Your last blow ends the witch's life. The fighting was too fierce to
            take her alive. The witch may be dead, but her vengeance is not.
            Bells continue to ring throughout the city. Half the city was lost
            today, and although you secured the escape of many, there was no
            escape for you, you too are now infected. Sitting on a barrel north
            of the river, you watch the river burn.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">20</div>
        <div className="collapse-content">
          <p>YOU GAIN 28 IRON.</p>
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 13 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
