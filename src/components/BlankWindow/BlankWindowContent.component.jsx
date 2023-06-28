import propTypes from 'prop-types';

import { Resizable } from 're-resizable';
import Measure from 'react-measure';

const BlankWindowContent = ({content, dimensions, setTriangleStyle, setDimensions, isMinimized}) => {
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
         {({ measureRef }) => {
            return (
              <div
                ref={measureRef}
                className={`window-content ${isMinimized ? 'window-closed' : 'window-open'}`}
              >
                {content}
              </div>
            );
          }}
        </Measure>
      </Resizable>
    );
  };

BlankWindowContent.propTypes = {
  content: propTypes.element,
  dimensions: propTypes.object,
  setTriangleStyle: propTypes.func,
  setDimensions: propTypes.func,
  isMinimized: propTypes.bool
};

export default BlankWindowContent;