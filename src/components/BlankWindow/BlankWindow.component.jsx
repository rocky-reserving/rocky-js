import {
  useState,
  useEffect,
  // useRef
} from 'react';
import Draggable from 'react-draggable';

import PropTypes from 'prop-types';

import './BlankWindow.styles.css';
// import { set } from 'immer/dist/internal';

import BlankWindowTitle from './BlankWindowTitle.component';
import BlankWindowContent from './BlankWindowContent.component';

const windowTypes = {
  default: 'window-header-default',
  loadData: 'window-header-load-data',
  modelSelection: 'window-header-model-selection',
  modelValidation: 'window-header-model-validation',
};

const BlankWindow = ({
  content,
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
  const [isEditing, setIsEditing] = useState(false);  
  const [dimensions, setDimensions] = useState({ width: defautWidth, height: defaultHeight });

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    setIsFullScreen(false);
    setIsEditing(false);
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    setIsMinimized(false);
  };

  const handleClose = () => {
    setIsVisable(false);
    setIsEditing(false);
  };

  useEffect(() => {
    if (setTriangleStyle) {
      setTriangleStyle({ width: defautWidth, height: defaultHeight });
    }
  }, [defautWidth, defaultHeight, setTriangleStyle]);

  

  // if the window is not visable, return null instead of the window
  if (!isVisable) {
    return null;
  }

  return (
    <Draggable handle=".window-header">
      <div
        className={`window ${isMinimized ? 'window-closed' : 'window-open'}`}
      >
        <BlankWindowTitle 
          title={title}
          windowType={windowTypes[windowType]}
          windowTypes={windowTypes}
          isMinimized={isMinimized}
          handleMinimize={handleMinimize}
          isFullScreen={isFullScreen}
          handleFullScreen={handleFullScreen}
          handleClose={handleClose}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <div className="total-window">
          <BlankWindowContent 
            dimensions={dimensions}
            setTriangleStyle={setTriangleStyle}
            setDimensions={setDimensions}
            isMinimized={isMinimized}
            content={content}
          />
        </div>
      </div>
    </Draggable>
  );
};
BlankWindow.propTypes = {
  content: PropTypes.element,
  title: PropTypes.string,
  defautWidth: PropTypes.number,
  defaultHeight: PropTypes.number,
  startMinimized: PropTypes.bool,
  windowType: PropTypes.string,
  setTriangleStyle: PropTypes.func,
};

export default BlankWindow;
