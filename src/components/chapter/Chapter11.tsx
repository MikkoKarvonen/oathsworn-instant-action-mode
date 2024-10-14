import { useState } from "react";
import useSound from "use-sound";

import audio1 from "../../assets/audio/chapter11/1.mp3";
import audio2 from "../../assets/audio/chapter11/2.mp3";
import audio3 from "../../assets/audio/chapter11/3.mp3";
import audio4 from "../../assets/audio/chapter11/4.mp3";
import audio5 from "../../assets/audio/chapter11/5.mp3";
import audio6 from "../../assets/audio/chapter11/6.mp3";
import audio7 from "../../assets/audio/chapter11/7.mp3";
import audio8 from "../../assets/audio/chapter11/8.mp3";

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
            As you raise your weapon above the Forgotten King, dozens of
            A'Dendri Rangers emerge from the Wychwood with arrows trained on
            you. Guide quickly moves to diffuse the situation, and after a
            careful exchange of spores she signs to you, 'We go to Matriarch.
            Leaving the Forgotten King bowed, but not broken, you follow the
            envoy of Rangers across the Wychwood border.
          </p>
          <p>
            As you are led deeper into the Wychwood, you see A'Dendri of all
            shapes and sizes, ranging from lumbering Ancients, five times larger
            than an Ursus, to those that fit in the palm of your hand. The trees
            here are more vibrant than any you have ever seen and to witness a
            place so full of life, unmolested by the rot of the Deepwood, is
            truly a vision to behold.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">2</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 5). IF YOU SUCCEED, ALL
            OATHSWORN GAIN A BATTLEFLOW TOKEN AS YOU UNDERSTAND THEIR FUNCTION.
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
            You are ordered to stay near a small pond while awaiting your
            audience with the Matriarch, when you spot an injured dog-like
            creature you might be able to help.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">4</div>
        <div className="collapse-content">
          <p>
            PERFORM A SURVIVAL CHECK (DIFFICULTY 4). ADD 1 TO YOUR RESULT IF YOU
            HAVE AN A'DENDRI OATHSWORN WITH YOU. IF YOU SUCCEED, YOU CURE THE
            BIOFORM, GAIN ALLY CARD 34 (BIOFORM) AND ALL OATHSWORN GAIN AN
            EMPOWERED X3 TOKEN.
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
            Exploring the area further, you come across what used to be an
            enormous hall, grown out of green trees. 'Free A'Dendri built this.
            Before the Deepwood, Guide informs you. An old stone depicts a
            mural: A'Dendri fighting humans in a war long ago. 'Treekillers,
            Guide knocks, pointing to you. Another mural shows figures consumed
            by a black pool forming beneath them, a living shadow. Before you
            can ask what the shadow is, a group of Rangers arrives to bring you
            before the A'Dendri Matriarch.
          </p>
          <p>
            Thick, leafy vines pull you up into the sunlight and set you down
            upon a platform attached to a towering, palatial tree. Inside the
            Palace, the Matriarch sits atop an ornate throne of black flowers,
            their petals opened to receive her majestic form. You watch an old
            man with a root jutting from his back kneel before the Matriarch. As
            a faint stream of spores float between them, the man begins to speak
            in a broken, tortured voice, "Tree killers! You dare desecrate our
            land?"
          </p>
          <p>
            At that moment, you realize you are suddenly unable to move as the
            Matriarch's spores settle on your skin. Her power is immense. You
            must choose your next words carefully.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">6</div>
        <div className="collapse-content">
          <p>
            PERFORM A REASONING CHECK (DIFFICULTY 4). IF YOU SUCCEED, ALL
            OATHSWORN GAIN A DEFENSE TOKEN.
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
            You quickly explain the purpose of your journey, the plague
            destroying Verum. The Matriarch pauses, then releases you. She
            clearly has no love for you as "Treekillers, yet she seems
          </p>
          <p>
            willing to help. You are told that the A'Dendri have a mother who
            has been fighting a war of roots with the Deepwood since its
            beginning. They are clearly losing the battle. You are suspicious of
            her intentions, but through her mouth piece she tells you what you
            wanted to hear. "There is a way to stop the plague," the rasping man
            utters. "You will find it in the Heart of Darkness, at the center of
            the rotting wood." You ask how and a single spore lands on your
            skin. The direction is immediately made known to you.
          </p>
          <p>
            Having been granted safe passage, you plunge back into the Deepwood.
            No one knew there was a center to this cursed sea of death, and now
            you are traveling straight toward it. It is hard going as the
            underbrush becomes thicker and thicker, more intense and deadly than
            you have ever experienced.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">8</div>
        <div className="collapse-content">
          <p>
            EACH OATHSWORN PERFORMS A SURVIVAL CHECK (DIFFICULTY 7). ALL THAT
            FAIL, LOSE 1 HIT POINT.
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
            After many days travel, you come upon a massive, rocky ravine
            sloping toward an ominous, dark cave. Wicked roots snake and burst
            from the ground in every direction like a twisted prison. The very
            center of the Deepwood. Your heart sinks as you see what else awaits
            you there. All around the opening, a sea of fur and fangs, chitin
            and claws circle the opening. The great host are not attacking each
            other, but look to be guarding the entrance.
          </p>
          <p>
            You have no way to get inside with your expedition. You must return
            to Verum with what you have learnt and form a plan. This changes
            everything.
          </p>
          <p>
            As you slowly back up, a rumbling crescendo rolls in from the east.
            Panicked birds squawk as they take flight. Like an avalanche
            thundering down a mountaintop, a giant beast in organic gray armor
            barrels from the woods. The Doom of Bastone is upon you! Running for
            your lives, the beast is impossible to outpace as some of your Free
            Company begin to trail behind. If you die here, the truth will never
            reach Verum, and all will be lost.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">10</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Continue running.</p>
          <p>ARCHIVE A RANDOM COMBAT ALLY.</p>
          <p>B. Make sure everyone makes it.</p>
          <p>2 OATHSWORN LOSE 1 HIT POINT (YOUR CHOICE).</p>
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
            Your expedition scatters in different directions, but the beast has
            its sights on you. Just when it feels like you are about to be
            crushed beneath a massive footfall, your flight empties into a
            clearing. As you turn to face the approaching beast, you see it
            recoil at the field's edge and retreat back into the woods. Looking
            down, you realize you are standing in a field of corpses. Human and
            A'Dendri soldiers are scattered everywhere, dusted in hoarfrost,
            perfectly preserved along with their equipment.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">12</div>
        <div className="collapse-content">
          <p>CHOOSE EITHER:</p>
          <p>A. Loot corpses.</p>
          <p>
            REVEAL ALL CARDS FROM THE CHAPTER 11 COMMON ITEM DECK AND GAIN ANY 6
            ITEMS FROM IT.
          </p>
          <p>B. Get out quickly.</p>
          <p>
            REVEAL ALL CARDS FROM THE CHAPTER 11 COMMON ITEM DECK AND GAIN ANY 2
            ITEMS FROM IT.
          </p>
          <p>ALL OATHSWORN GAIN A REDRAW TOKEN.</p>{" "}
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
            Within seconds, a thick fog swallows the field and your A'Dendri
            freezes in her tracks. Without warning, Guide raises her spear and
            lunges toward you with a crazed look and unnatural strength. You
            manage to deflect the blow aside at the last moment and
            instinctively run her through. As she falls to the ground, she
            reaches out to you, both terror and sorrow in her eyes.
          </p>
          <p>
            As she drops down, a living shadow remains in her stead. It reaches
            out for you. You have seen this before. The mural. The living
            shadow.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">14</div>
        <div className="collapse-content">
          <p>ARCHIVE ALLY CARD 23 (GUIDE).</p>
          <p>
            MARK THE ENCOUNTER SPECIAL RULES BOARD BOX FOR CHAPTER 11 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>OPEN MYSTERY ENVELOPE 11.</p>
          <p>
            YOU ARE AMBUSHED. MARK THE AMBUSHED BOX FOR CHAPTER 11 ON YOUR FREE
            COMPANY SHEET.
          </p>
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
            Your amber torches drive back the shadows, and you make it to the
            edge of the hoarfrost, to where they do not seem to be able to
            follow. You gather yourself and think. The Deepwood has a heart, and
            therein lies the cure to the plague. You must reach Verum, and
            inform the King.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200  mb-2 ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">16</div>
        <div className="collapse-content">
          <p>YOU GAIN 24 IRON.</p>
          <p>
            IF YOU FINISHED THE ENCOUNTER WITH 9 OR MORE TOTAL HIT POINTS ON ALL
            OATHSWORN, MARK THE EXTRA UNIQUE ITEM BOX FOR CHAPTER 11 ON YOUR
            FREE COMPANY SHEET.
          </p>
          <p>TALLY LEVEL, LOOT AND LOSSES.</p>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
