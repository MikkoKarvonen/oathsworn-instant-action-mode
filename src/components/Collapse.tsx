import React from "react";

interface CollapseProps {
  children: React.ReactNode;
  index: number;
  checked?: boolean;
}

const Collapse = ({ children, index, checked }: CollapseProps) => {
  return (
    <div className="collapse collapse-plus bg-base-200 mb-2 ">
      <input type="radio" name="my-accordion-3" defaultChecked={checked} />
      <div className="collapse-title text-xl font-medium">{index}</div>
      <div className="collapse-content">{children}</div>
    </div>
  );
};

export default Collapse;
