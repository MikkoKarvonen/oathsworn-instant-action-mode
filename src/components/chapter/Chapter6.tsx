import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter6/1.mp3";
import audio2 from "../../assets/audio/chapter6/2.mp3";
import audio3 from "../../assets/audio/chapter6/3.mp3";
import audio4 from "../../assets/audio/chapter6/4.mp3";
import audio5 from "../../assets/audio/chapter6/5.mp3";
import audio6 from "../../assets/audio/chapter6/6.mp3";
import audio7 from "../../assets/audio/chapter6/7.mp3";
import audio8 from "../../assets/audio/chapter6/8.mp3";
import audio9 from "../../assets/audio/chapter6/9.mp3";
import audio10 from "../../assets/audio/chapter6/10.mp3";

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
            You feel the maggots writhing inside your chest, wanting to break
            out, then wake with a start realizing the bloatfly is dead.
          </p>
          <p>
            The smell of warm bread fills The Broken Oak as you join the others
            in the tap room for breakfast. As Greycane strides over, he tosses a
            scroll on the table, "Best try to polish out some of the blood
            stains from your armor. Looks like you have an audience with the
            King."
          </p>
          <p>
            You begin the walk to the palace and on your way across the Great
            Bridge spanning the Gutters, you encounter a sizable crowd gathered
            before a band of soothsayers, extolling their tales of woe.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>
            PERFORM A SPOT CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL OATHSWORN
            GAIN A +2 ANIMUS TOKEN AS YOU SPOT SAMIL.
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
            Behind the group of sackcloth-wearing prophets you see a familiar
            face, Samil, who once numbered among you before he died on the Wire
            to Bastone. He is grinning at you with the same smile he had in
            life. Then you notice one of the Doomsayers is also gazing at Samil
            in abject terror. Urine runs freely down the man's leg. You start
            toward Samil, but are stopped by a priest rushing up to meet you.
            Samil disappears as the priest petitions you. "Oathsworn! Thank the
            One. Please, you must come with me. The fate of the city is at
            stake!" You know keeping a king waiting is not done lightly or
            without danger, but the look in this man's eyes tells you ignoring
            him may be a worse fate.
          </p>
          <p>
            You oblige the priest's request, and follow him to an area of the
            city called 'The Cobbles. Upon arriving, you find a squad of guards
            desperately trying to defend a barricade erected to keep the people
            of The Cobbles from leaving.
          </p>
          <p>
            As watch the chaotic scene unfold, the priest informs you you that a
            plague has begun to ravage the streets here. Worse still, one of the
            priests, Marius, was infected and has escaped the quarantine. "He
            was seen with black lesions on his hands as he ordered the guards to
            let him pass," he tells you. "The fools let him through, and he is
            now at large in the city! You must find him before it spreads!"
          </p>
          <p>
            Just as you turn to leave, the mob has grown and you can see the
            makings of a charge. If they break through, one missing priest will
            be the least of your worries.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 6.</p>
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
            With the aid of the guards, you successfully drive the mob back and
            restore order. Confident the guards have the situation under
            control, you embark on the hunt for the infected priest.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>
            PERFORM A SEARCH CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL OATHSWORN
            GAIN A REDRAW TOKEN.
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
            You visit the Apothecary first, hoping Brother Marius may have
            sought a cure there.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>YOU MAY START A TRADE APOTHECARY.</p>{" "}
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
            You learn the priest had been there, but he did not purchase
            anything. Thankfully, no one came into physical contact with him,
            and he was last seen heading south toward the archives.
          </p>
          <p>
            Your journey to the city archives requires you to traverse the Great
            Bridge once again. As you cross, you encounter a woman speaking with
            a pair of city guards. Listening to her story, you realize she was
            knocked to the ground by Brother Marius, which means she may be
            infected as well.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Kill her.</p>
          <p>ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.</p>
          <p>B. Send her under guard to The Cobbles.</p>
          <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
          <p>C. Leave her.</p>
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
            You arrive at the archives where you enter the library to search for
            clues as to what Brother Marius was looking for.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>
            PERFORM A SEARCH CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL OATHSWORN
            GAIN A REDRAW TOKEN.
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
            Assisted by the archivists, you learn that Brother Marius removed an
            old map of the city tunnels that lie beneath the Cathedral. "Oh
            dear," an archivist laments. "Those tunnels lead directly to the
            Palace."
          </p>
          <p>
            Wasting no time, you rush to the Cathedral and order the clergymen
            to direct you toward the tunnels. After some time searching through
            the damp darkness beneath the city, you locate the priest and find
            him slumped against a wall. His skin is covered in black blisters
            that ooze pus.
          </p>
          <p>
            He turns weakly at your approach, holding out a noxious looking
            censer in his hand, "I thought I had more time. This... this is the
            source of the plague. Chief Apothecary Corbus must be informed..."
            Painful cramps halt his speech and bring him to his knees. Suddenly,
            a long, root-like tendril emerges from his mouth like an infected
            Deepwood vine. Before your eyes, Brother Marius transforms into an
            abhorrent abomination and the insidious thing lunges at you with
            razor sharp limbs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 7.</p>
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
            After securing the plague ridden censer, you bring Chief Apothecary
            Corbus with you to explain the situation to the King. Despite his
            young age, Favian is a regal monarch and listens intently to your
            report. As you finish your debrief, a Watcher - one of which is
            always at the King's side - leans forward and whispers into his ear.
          </p>
          <p>
            The King pauses for a moment in thought, then decrees that you must
            travel to Cistercia immediately. A raven will be sent ahead of you
            to instruct the Holy City to prepare its mendicants at once. You
            will escort the mendicants back to Verum to ensure their safe
            passage. As you prepare Greycane finds some hired swords, Brevik and
            Yani, who may be of use.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>ALL OATHSWORN GAIN 1 CHAPTER 6 ITEM OF THEIR CHOICE.</p>
          <p>YOU MAY START A TRADE WITH THE BANKSMITH.</p>
          <p>YOU MAY GAIN BREVIK AND/OR YANI AS ALLIES FOR 10 IRON EACH.</p>
          <p>IF YOU HIRE BREVIK, GAIN ALLY CARD 17 (BREVIK).</p>
          <p>IF YOU HIRE YANI, GAIN ALLY CARD 18 (YANI).</p>
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
            Within hours of the King's decree, you are once again on the Wire
            Road, trudging through the Deepwood. Not far from Verum's gate you
            notice the air becomes filled with a pregnant silence. The only
            thing worse than hearing noise in the Deepwood, is hearing nothing
            at all. As though they had been waiting for your arrival, three
            horrors fly at you from between the trees, whip-like arms strike out
            to impale you.
          </p>
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">18</div>
        <div className="collapse-content">
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 6.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 6.</p>
          <p>
            YOU ARE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 6 ON YOUR FREE
            COMPANY SHEET.
          </p>
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
            The mangled corpses twitch as nerves fire their death throws. You
            have never seen creatures such as these before. It is as if their
            flesh is composed of a hideous mixture of disparate skin. As you
            resume the journey to Cistercia, something in your gut tells you
            someone may not want you to succeed.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">20</div>
        <div className="collapse-content">
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 6 ON YOUR FREE
            COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
