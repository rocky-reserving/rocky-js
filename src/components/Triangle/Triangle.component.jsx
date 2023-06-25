import propTypes from 'prop-types';
import './triangle.styles.css';

const Triangle = ({ ay, dev, data, captionText, numberType }) => {
  const lenAY = ay.length;
  const lenDev = dev.length;
  const nRows = data.length;
  const nCols = data[0].length;

  // map numberType to a function that will format the number
  // according to the numberType
  const mapNumberType = (numberType) => {
    switch (numberType) {
      case 'currency':
        return 'currency';
      case 'c':
        return 'currency';
      case 'percent':
        return 'percent';
      case 'p':
        return 'percent';
      case 'percentage':
        return 'percent';
      case 'per cent':
        return 'percent';
      case 'pct':
        return 'percent';
      case 'factor':
        return 'factor';
      case 'f':
        return 'factor';
      case 'fct':
        return 'factor';
      case 'year':
        return 'year';
      case 'y':
        return 'year';
      default:
        return 'currency';
    }
  };

  // format the number according to the numberType
  const formatNumber = (number, numberType) => {
    switch (mapNumberType(numberType)) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        }).format(number);
      case 'percent':
        return new Intl.NumberFormat('en-US', {
          style: 'percent',
          minimumFractionDigits: 1,
        }).format(number);
      case 'factor':
        return new Intl.NumberFormat('en-US', {
          style: 'decimal',
          minimumFractionDigits: 3,
        }).format(number);
      case 'year':
        return new Intl.NumberFormat('en-US', {
          style: 'decimal',
          minimumFractionDigits: 0,
        }).format(number);
      default:
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
        }).format(number);
    }
  };

  // validate that lenAY = nRows and lenDev = nCols
  if (lenAY !== nRows || lenDev !== nCols) {
    // if not, then display an error message, because
    // the triangle will not be displayed correctly & could
    // be confusing to the user or just plain wrong
    return (
      <div className="triangle-error-message">
        <h1>ERROR: lenAY !== nRows || lenDev !== nCols</h1>
        <p>lenAY: {lenAY}</p>
        <p>nRows: {nRows}</p>
        <p>lenDev: {lenDev}</p>
        <p>nCols: {nCols}</p>
      </div>
    );
  } else {
    return (
      <div>
        <table className="triangle">
          <caption>{captionText ? captionText : ''} </caption>

          {/* tringle header - blank space then development periods*/}
          <thead className="triangle-header">
            <tr className="triangle-header-row">
              {/* top left corner */}
              <th className="triangle-header">&nbsp;</th>
              {dev.map((col, i) => (
                <th key={i} className="triangle-header">
                  {formatNumber(col, 'year')}
                </th>
              ))}
            </tr>
          </thead>

          {/* triangle body */}
          <tbody>
            {/* loop through all rows after the first */}
            {data.map((row, i) => (
              <tr key={i}>
                <td className="triangle-ay">{formatNumber(ay[i], 'y')}</td>
                {row.map((col, j) =>
                  isNaN(col) ? (
                    <td key={j}>&nbsp;</td>
                  ) : (
                    <td key={j}>{formatNumber(col, numberType)}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

Triangle.propTypes = {
  ay: propTypes.array.isRequired,
  dev: propTypes.array.isRequired,
  data: propTypes.arrayOf(propTypes.arrayOf(propTypes.number)).isRequired,
  captionText: propTypes.string,
  numberType: propTypes.string,
};

export default Triangle;
