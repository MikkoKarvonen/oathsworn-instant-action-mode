import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter15/1.mp3";
import audio2 from "../../assets/audio/chapter15/2.mp3";
import audio3 from "../../assets/audio/chapter15/3.mp3";
import audio4 from "../../assets/audio/chapter15/4.mp3";
import audio5 from "../../assets/audio/chapter15/5.mp3";
import audio6 from "../../assets/audio/chapter15/6.mp3";
import audio7 from "../../assets/audio/chapter15/7.mp3";
import audio8 from "../../assets/audio/chapter15/8.mp3";

import map from "../../assets/images/1.png";
import { AudioButton } from "../../assets/audioHandler";

const sounds = [audio1, audio2, audio3, audio4, audio5, audio6, audio7, audio8];

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
            Finding the Wire Road again you eventually make it to Thrace - The
            City of Masks. The sounds of whips greet you as a chain gang of
            slaves is driven by a person in a porcelain mask. Here, only those
            who wear a mask are considered human, everyone else is merely the
            'Faceless'
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>
            OPEN MYSTERY ENVELOPE 'G' AND PLACE ITS CONTENTS IN THE CENTER OF
            PLAY.
          </p>
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
            Your best shot at finding a witch may be the Coliseum, and you head
            to the great structure in the center of the city, where you know
            many exotic beings are used for sport. Entering the expansive space,
            a wave of cheering rolls over it seems a fight is about to begin.
          </p>
          <p>
            No witch is present today. Instead, a group of Faceless wait
            nervously in the pit below. Suddenly the far gate opens and a
            captive Deepwood monster claws its way onto the sand. With morbid
            curiosity, you watch as it tears through the Faceless until only a
            young woman remains. She had been denied a weapon, yet she stands
            defiantly against the creature. This is no way for someone to die.
            In the moment, make a choice and jump over the edge.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Give the girl a weapon, and stand by her.</p>
          <p>ALL OATHSWORN GAIN A DEFENSE TOKEN.</p>
          <p>LOSE 1 WEAPON (YOUR CHOICE).</p>
          <p>
            PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9. THE THRACIAN BLADE ONLY
            FAILS ON 3 BLANKS.
          </p>
          <p>B. Fight the monster.</p>
          <p>ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.</p>
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 10.</p>
          <p>THE THRACIAN BLADE ONLY FAILS ON 3 BLANKS.</p>
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
            The crowd roars as you slay the beast and exit the arena. Waiting in
            the tunnels is the woman's masked owner. He is furious, but with one
            look at you and the blood still dripping I am Polus," from your
            weapons, he backs away. "Thank you, the woman says. She is more than
            she appears, and reveals that there is an underground movement in
            Thrace, those who stand up to the slavery of the city. She says they
            have a proposition for you.
          </p>
          <p>
            Meeting with the underground elders they tell you that they fear one
            of the five families, the Great Masks of Thrace, are planning to
            kill a large number of Faceless. They promise you a witch if you can
            find out who and how. You accept the contract for more than one
            reason and are pointed to a masquerade ball where the five, the
            leaders of the great families, will be in attendance. Your Oathmark
            gets you in.
          </p>
          <p>
            The masquerade is a hedonistic gathering of wine and want. All the
            great families are here, except one - the Pytone. You feel all
            conversation halt as you pass the clustered masks, so eavesdropping
            will have to suffice.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>
            PERFORM A LISTENING CHECK (DIFFICULTY 5). ADD 1 TO YOUR RESULT IF
            YOU HAVE THE CUR WITH YOU. IF YOU SUCCEED, ALL OATHSWORN GAIN A
            REDRAW TOKEN FOR BEING INCONSPICUOUS.
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
            You listen to a conversation between the Volpe and Carnedine. They
            are talking of tunnels underneath the Cattedrale where the Pytone
            are moving something.
          </p>
          <p>
            Suddenly, the great stained glass window shatters, and a man in a
            tear-drop mask lands in the middle of the ballroom. "Rubeo," you
            hear from the gasped whispers all around. You have heard of him, a
            vigilante who hunts the masked, too bloody for even the underground
            to accept. He empties a sack, dropping five heads of members of the
            great families on the floor.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Attack Rubeo.</p>
          <p>ALL OATHSWORN GAIN AN EMPOWERED X3 TOKEN.</p>
          <p>PERFORM A ROUND OF COMBAT AGAINST DEFENSE 9.</p>
          <p>B. Just watch.</p>
          <p>YOU WAIT TO SEE WHAT UNFOLDS.</p>{" "}
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
            Guards swarm the room and Rubeo cuts down several. He flows between
            blade forms with perfection, one killer to another, you are driven
            to respect the man behind the mask. He escapes through a window
            before the heads stop rolling.
          </p>
          <p>
            From what you have gathered, you judge that the Pytone must be
            behind the plot, and leave for the Cattedrale to investigate the
            tunnels. A search confirms your suspicion and leads you down into a
            confusing labyrinth of catacombs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 3). IF YOU SUCCEED, ALL
            OATHSWORN GAIN A +2 ANIMUS TOKEN AS YOU DO NOT GET LOST.
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
            You find a well-guarded cavern crammed with barrels of poison. You
            realize they are trying to poison the Amiese Faceless, some family
            feud where innocents get caught in the middle. Without the manpower
            to overcome the heavy guard, you return to the underground elders
            with your findings. There you learn that the Pytone leader will come
            out of hiding for a grand procession. You are suspicious of the
            timing, but have no other option. This will be your chance to gain
            access to him, stop the plot and secure your witch.
          </p>
          <p>
            You arrive at the Pytone grounds with a plan to replace the Pytone
            leaders guard and abduct him. Infiltrating the compound, you find
            uniforms and blend in. You take your places, and the procession
            begins through the streets. That is when you hear a slow clap from
            within the palanquine. "I had almost thought you wouldn't make it,"
            the Pytone says. This was all part of his plan. He makes it clear
            that if you abduct or kill him, the faceless die and besides there
            is something he wants more than revenge on the Amiese. He wants
            Rubeo. Kill Rubeo and he will call off the culling of the faceless.
            "Fortunately for you," he adds, "I have brought your quarry to you.
            Rubeo is elusive but I knew this ill-guarded procession would draw
            him out," his eyes look up onto a roof, where you see the tear drop
            mask. "My own men have proven they are not up to the task, but
            perhaps you will be. Make your decision quickly, Oathsworn. If I
            die, so do the faceless."
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>
            PERFORM A SPOT CHECK (DIFFICULTY 3). IF YOU FAIL, YOU ARE AMBUSHED.
            MARK THE AMBUSHED BOX FOR CHAPTER 15 ON YOUR FREE COMPANY SHEET.
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
            All around you, faceless loyal to Rubeo pull daggers. The contract
            binds you, and seeing no other way to save the Amiese faceless, you
            draw blades.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>IF YOU HAVE THE MYSTERY CHEST, OPEN MYSTERY BOX 15.</p>
          <p>IF YOU DO NOT HAVE THE MYSTERY CHEST, OPEN MYSTERY ENVELOPE 15.</p>
          <img src={map} />
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">15</div>
        <div className="collapse-content">
          <h3 className="text-1xl font-bold">Epilogue</h3>
          <AudioButton
            index={7}
            audioPlaying={audioPlaying}
            currentSoundIndex={currentSoundIndex}
            soundPlayers={soundPlayers}
            setAudioPlaying={setAudioPlaying}
            setCurrentSoundIndex={setCurrentSoundIndex}
          />
          <p>
            Rubeo is dead and the Pytone smiles. "You have done me a great
            service, Free Company. You can trust our contract, though I cannot
            say the same for your patrons in the underground. Go see if they
            have your witch, then return to find out the truth." me when you
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>YOU GAIN 32 IRON.</p>
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 15 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
