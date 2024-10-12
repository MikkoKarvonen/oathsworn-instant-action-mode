import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter19/1.mp3";
import audio2 from "../../assets/audio/chapter19/2.mp3";
import audio3 from "../../assets/audio/chapter19/3.mp3";
import audio4 from "../../assets/audio/chapter19/4.mp3";
import audio5 from "../../assets/audio/chapter19/5.mp3";
import audio6 from "../../assets/audio/chapter19/6.mp3";
import audio7 from "../../assets/audio/chapter19/7.mp3";
import audio8 from "../../assets/audio/chapter19/8.mp3";
import audio9 from "../../assets/audio/chapter19/9.mp3";
import audio10 from "../../assets/audio/chapter19/10.mp3";

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
            You have reached the Salt Tower whose cold stone walls give you a
            moment's respite on your crusade. Among the stores, your men find
            several usable items and deep wells to refresh your water supplies.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.</p>
          <p>
            REVEAL ALL CARDS FROM THE CHAPTER 19 COMMON ITEM DECK AND GAIN ANY 4
            ITEMS FROM IT.
          </p>
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
            Slinging your packs on your backs, you head out on the last leg of
            your journey toward Raven's Reach. The Deepwood is getting thicker
            and noises of scuffling and scraping can be heard off in the dark on
            all sides. The rain falls and the tension builds as though the
            unseen creatures were waiting for something. As the march goes on
            you come to high walls. This is not Raven's Reach, but a city a
            Watcher had told you of before departing. Raven's Reach lies just
            beyond this city, but the Watcher had been insistent on you not
            entering. It had said the city was forbidden. Neither you, nor your
            captains, had wanted to question the cowled figure so you made plans
            to skirt around the northern edge. As you come to that point though,
            you realize that may not be possible as the Deepwood comes alive.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 8.</p>
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
            Waves of corrupt life crash into your lines. Again and again, you
            repel them, but they keep on coming, clawing over their dead to
            reach you. Forming a semicircle around the city gate, you realize
            this could be your last stand. Turning to the gate, you hammer on
            its barred entrance. Whatever is inside, it cannot be worse than
            dying out here. Your efforts are to no avail though, the way is
            shut. Then you hear a creaking. A crack of light appears in the
            door, revealing Samil's face, as he pushes the great gates open. You
            do not know how he is doing it or if you can trust the apparition of
            your dead companion, but he has saved you. You order the retreat
            just as a huge Broodmother Matriarch barrels through the horde
            toward you. If she reaches the gate, you may never get it closed.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Rush in and close the gates, leaving most soldiers outside.</p>
          <p>ALL OATHSWORN LOSE A RANDOM COMBAT TOKEN.</p>
          <p>B. Defend the gate until the last moment.</p>
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.</p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>{" "}
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
            The Broodmother screeches as you heave the gate closed and the
            sounds beyond become muffled. Turning, you are greeted with the
            worst sound in the Deepwood, an eerie silence. The city is ancient
            and wreathed in mist. Only the dead stare up at you, preserved in an
            eternal hoarfrost. You have seen the like before, when you
            encountered the Shadowman. Fear grips the army, you cannot exit
            where you entered, and will need to cross to the other side.
            Lighting torches, you walk into the mist.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>
            PERFORM A SURVIVAL CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL
            OATHSWORN GAIN A DEFENSE TOKEN FOR FINDING A GOOD PLACE TO SHELTER.
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
            You find a place to camp with an ever dwindling number of soldiers,
            and light the area well as night falls. You can feel the shadows
            moving. Curling fingers, reaching out for you and your soldiers.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10.</p>
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
            Not everyone who went to sleep is alive when you wake. Rousing the
            army, you try to find a path through the city, and find that the
            place is far bigger than you thought.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 6). IF YOU SUCCEED, ALL
            OATHSWORN GAIN A BATTLEFLOW TOKEN FOR NAVIGATING THE CITY RUINS.
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
            You find strange mechanical sculptures, machines and ornate
            buildings. This city was far more magnificent than any city under
            The Pact. At its center you find a grand spire reaching up high into
            the sky. Entering, you find at the very top of the tower, a cloaked
            skeleton sitting at an ornate desk with a hand on a book. A skeleton
            that was once a Watcher. Taking the book, you read.
          </p>
          <p>
            The journal is fragmented and rotten. It reads as a confession. A
            Watcher named Liak visited Kharnus and Soonari, the mother and
            father of the A'Dendri, under the guise of a diplomatic mission. He
            stole something called the Life Giver... a seed? After that, a war
            started that stretch on for many years. The Watchers had planned for
            it, and the A'Dendri were losing. Then something happened. Something
            airborne came, and all the citizens of the city went mad, all except
            the Watchers. In a day of blood, the mad killed one another and the
            city died. Then the Deepwood came.
          </p>
          <p>
            The entry ends, and a sound draws you to a balcony. Off to the
            north, you can see a great host of creatures moving beyond the wall.
            Those that had attacked you at the gate are moving around the city
            walls. They are trying to cut you off.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>
            EACH OATHSWORN PERFORM A STAMINA CHECK (DIFFICULTY 4). ANY THAT
            SUCCEED, GAIN A +2 ANIMUS TOKEN.
          </p>
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
            Rushing through the city with what remains of your army, you reach
            the gate and dive back into the Deepwood. You can hear them, not far
            off and closing fast. As it feels like they are on top of you, the
            walls of Raven's Reach emerge before you.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>
            PERFORM A SPOT CHECK (DIFFICULTY 3). IF YOU SUCCEED, MARK THE
            ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 19 ON YOUR FREE
            COMPANY SHEET. IF YOU FAIL, YOU WILL BE AMBUSHED. MARK THE AMBUSHED
            BOX FOR CHAPTER 19 ON YOUR FREE COMPANY SHEET.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            Just as you reach the gate, the hulking form of the Broodmother
            Matriarch crashes in front of you. With arm length incisors and an
            undulating back of swarming pups she is a terrifying sight. You do
            not miss a step, continuing your charge you know your survival, and
            the survival of all in Verum, lies on the other side of this beast.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">18</div>
        <div className="collapse-content">
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 1.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 1.</p>
          <img src={map} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
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
            With the Broodmother Matriarch slain, what is left of your decimated
            army piles into Raven's Reach. There are only a few of you now, but
            it will have to be enough. The host will return soon and in greater
            numbers. You have to perform The Keening and get to the Heart of
            Darkness.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">20</div>
        <div className="collapse-content">
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 19 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
