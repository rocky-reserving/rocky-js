import { useState, useEffect } from "react";
import propTypes from "prop-types";

const BlankWindowTitle = ({
  title,
  windowType,
  windowTypes,
  isMinimized,
  handleMinimize,
  isFullScreen,
  handleFullScreen,
  handleClose,
  isEditing,
  setIsEditing
  }) => {
  // state vars
  const [curTitle, setCurTitle] = useState(title || 'window');
  const [newTitle, setNewTitle] = useState(title || 'window');
  

  const handleTitleDoubleClick = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    // setNewTitle(prompt('Enter new title', curTitle));
  };

  

  const handleBlur = () => {
    setIsEditing(false);
    setCurTitle(newTitle);
  };

  const handleKeyDown = (e) => {
    if (isEditing) {
      if (e.key === "Enter") {
        console.log('enter', e.target)
        setIsEditing(false);
        setNewTitle(e.target);
      } else if (e.key === "Escape") {
        console.log('esc', e.target)
        setIsEditing(false);
        setNewTitle(curTitle);
      }
    }
  };

  useEffect(() => {
    if (newTitle) {
      setCurTitle(newTitle);
    }
  }, [newTitle]);

  useEffect(() => {
    if (isEditing) {
      // watch for escape key and set isEditing to false if pressed
      document.addEventListener('keydown', (e) => handleKeyDown(e));
        
      } else {
        document.removeEventListener('keydown', (e) => handleKeyDown(e));
      }
  }, [isEditing]);
      
  useEffect(() => {
    if (isEditing) {
      console.log('editing');
    }
  }, [isEditing]);

  return (
  <div
    className={`window-header 
    ${isMinimized ? 'window-header-closed' : 'window-header-open'}
    ${windowTypes[windowType] || 'window-header-default'}`}
  >
  { isEditing ? (
    <span
      className="window-title-input"
    >
      <input
        
        type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        onBlur={handleBlur}
        autoFocus
        value={newTitle}
      />
    </span>
    ) : (
    <span
      className="window-title"
      onDoubleClick={handleTitleDoubleClick}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      {curTitle || 'window'}
    </span>
  )}
    <span className="window-buttons">
      <button
        className="min-max-button window-button"
        onClick={handleMinimize}
      >
        {isMinimized ? '+' : '-'}
      </button>
      <button
        className="fullscreen-button window-button"
        onClick={handleFullScreen}
      >
        {isFullScreen ? '↙' : '⤢'}
      </button>
      <button
        className="close-button window-button"
        onClick={handleClose}
      >
        {'×'}
      </button>
    </span>
  </div>
  )
}

BlankWindowTitle.propTypes = {
  title: propTypes.string,
  isMinimized: propTypes.bool.isRequired,
  handleMinimize: propTypes.func.isRequired,
  isFullScreen: propTypes.bool.isRequired,
  handleFullScreen: propTypes.func.isRequired,
  handleClose: propTypes.func.isRequired,
  isEditing: propTypes.bool.isRequired,
  setIsEditing: propTypes.func.isRequired,
  windowType: propTypes.string.isRequired,
  windowTypes: propTypes.object.isRequired,
};

export default BlankWindowTitle;