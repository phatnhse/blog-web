import React, { useEffect } from "react";
import Prism from "prismjs";

export default function PreCode({ ...otherProps }) {

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  
  const rawCode = otherProps.children.props.children
  const className = otherProps.children.props.className
  
  if (rawCode && rawCode.length) {
    return <div className="text-base font-medium not-italic">
      <pre>
        <code className={className}>{rawCode}</code>
      </pre>
    </div>
  } else {
    return null
  }
}