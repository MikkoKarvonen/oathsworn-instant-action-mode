import React from "react";

interface CollapseProps {
  children: React.ReactNode;
  index: number;
  checked?: boolean;
  audioIndex?: number;
  setCurrentAudio: (index: number) => void;
}

const Collapse = ({
  children,
  index,
  checked,
  audioIndex,
  setCurrentAudio,
}: CollapseProps) => {
  return (
    <div
      className="collapse collapse-plus bg-base-200 mb-2 "
      onClick={() => audioIndex && setCurrentAudio(audioIndex)}
    >
      <input type="radio" name="my-accordion-3" defaultChecked={checked} />
      <div className="collapse-title text-xl font-medium">{index}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};

export default Collapse;
