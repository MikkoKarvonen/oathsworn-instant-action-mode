import AudioPlayer from "react-h5-audio-player";

type PlayerProps = {
  sound: string;
};

const Player = ({ sound }: PlayerProps) => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-50">
      <AudioPlayer
        src={sound}
        customAdditionalControls={[]}
        style={{ background: "#000" }}
      />
    </div>
  );
};

export default Player;
