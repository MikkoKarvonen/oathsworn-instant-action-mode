import useSound from "use-sound";

type AudioHandlerProps = {
  index: number;
  audioPlaying: boolean;
  currentSoundIndex: number | null;
  soundPlayers: ReturnType<typeof useSound>[];
  setAudioPlaying: (playing: boolean) => void;
  setCurrentSoundIndex: (index: number | null) => void;
};

type AudioButtonProps = {
  index: number;
  audioPlaying: boolean;
  currentSoundIndex: number | null;
  soundPlayers: ReturnType<typeof useSound>[];
  setAudioPlaying: (playing: boolean) => void;
  setCurrentSoundIndex: (index: number | null) => void;
};

const audioHandler = ({
  index,
  audioPlaying,
  currentSoundIndex,
  soundPlayers,
  setAudioPlaying,
  setCurrentSoundIndex,
}: AudioHandlerProps) => {
  if (audioPlaying && currentSoundIndex !== null) {
    const [, { stop }] = soundPlayers[currentSoundIndex];
    stop();
    setAudioPlaying(false);
  }

  if (index !== currentSoundIndex || !audioPlaying) {
    const [play] = soundPlayers[index];
    play();
    setCurrentSoundIndex(index);
    setAudioPlaying(true);
  } else {
    setCurrentSoundIndex(null);
  }
};

export const AudioButton = ({
  index,
  audioPlaying,
  currentSoundIndex,
  soundPlayers,
  setAudioPlaying,
  setCurrentSoundIndex,
}: AudioButtonProps) => (
  <button
    className="btn btn-primary"
    onClick={() =>
      audioHandler({
        index,
        audioPlaying,
        currentSoundIndex,
        soundPlayers,
        setAudioPlaying,
        setCurrentSoundIndex,
      })
    }
  >
    {audioPlaying && currentSoundIndex === index ? "◼" : "▶"}
  </button>
);
