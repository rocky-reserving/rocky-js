import { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Resizable } from 're-resizable';
import Measure from 'react-measure';
import PropTypes from 'prop-types';

import './BlankWindow.styles.css';

const windowTypes = {
  default: 'window-header-default',
  loadData: 'window-header-load-data',
  modelSelection: 'window-header-model-selection',
  modelValidation: 'window-header-model-validation',
};

const BlankWindow = ({
  children,
  title,
  defautWidth,
  defaultHeight,
  windowType,
  startMinimized,
  setTriangleStyle,
}) => {
  // state vars
  const [isMinimized, setIsMinimized] = useState(startMinimized);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isVisable, setIsVisable] = useState(true);
  const [curTitle, setCurTitle] = useState(title || 'window'); // eslint-disable-line
  const [newTitle, setNewTitle] = useState(title || 'window');
  const [dimensions, setDimensions] = useState({ width: -1, height: -1 });

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    setIsFullScreen(false);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsVisable(false);
  };

  const handleEditText = (e) => {
    e.preventDefault();
    setNewTitle(prompt('Enter new title', curTitle));
  };

  useEffect(() => {
    if (newTitle) {
      setCurTitle(newTitle);
    }
  }, [newTitle]);

  useEffect(() => {
    if (setTriangleStyle) {
      setTriangleStyle({ width: defautWidth, height: defaultHeight });
    }
  }, [defautWidth, defaultHeight, setTriangleStyle]);

  const renderContent = () => {
    return (
      <Resizable
        defaultSize={dimensions}
        minWidth={300}
        minHeight={200}
        onResizeStop={(e, direction, ref) => {
          if (setTriangleStyle) {
            setTriangleStyle({
              width: parseFloat(ref.style.width),
              height: parseFloat(ref.style.height),
            });
          }
          console.log(ref);
        }}
      >
        <Measure
          bounds
          onResize={(contentRect) => {
            setDimensions(contentRect.bounds);
          }}
        >
          {({ measureRef }) => (
            <div ref={measureRef} className="window-content">
              {!isMinimized && children}
            </div>
          )}
        </Measure>
      </Resizable>
    );
  };

  // if the window is not visable, return null instead of the window
  if (!isVisable) {
    return null;
  }

  return (
    <Draggable handle=".window-header">
      <div
        className={`window ${isMinimized ? 'window-closed' : 'window-open'}`}
      >
        <div
          className={`window-header 
            ${isMinimized ? 'window-header-closed' : 'window-header-open'}
            ${windowTypes[windowType] || 'window-header-default'}`}
        >
          <span className="window-title" onDoubleClick={handleEditText}>
            {curTitle || 'window'}
          </span>
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
        <div className="total-window">{renderContent()}</div>
      </div>
    </Draggable>
  );
};
BlankWindow.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  defautWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
  startMinimized: PropTypes.bool,
  windowType: PropTypes.string,
  setTriangleStyle: PropTypes.func,
};

export default BlankWindow;
