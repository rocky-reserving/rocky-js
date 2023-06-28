import { useState } from 'react';

const ClipboardReader = () => {
  const [text, setText] = useState('');

  const handlePaste = (e) => {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    setText(pastedData);
  };

  return (
    <div>
      <input onPaste={handlePaste} />
      <p>{text}</p>
    </div>
  );
}

export default ClipboardReader;