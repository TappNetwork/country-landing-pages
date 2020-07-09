import React from 'react';
import PropTypes from 'prop-types';

const XAxis = ({
  xScale,
  label,
  numTicks,
  min,
  max,
  height,
  width,
  margin,
}) => {
  return (
    <g
      role='graphics-axis'
      aria-orientation='horizontal'
      aria-datatype='datetime'
      aria-valuemin={min}
      aria-valuemax={max}
    >
      <text
        x={margin.left + (width - margin.left - margin.right) / 2}
        y={height - 4}
        fontSize='16'
        textAnchor='middle'
      >
        {label}
      </text>
      <line
        x1={margin.left}
        x2={width - margin.right}
        y1={height - margin.bottom}
        y2={height - margin.bottom}
        stroke='#333'
        strokeWidth='1'
        shapeRendering='crispEdges'
        vectorEffect='non-scaling-stroke'
      />
      <g id='itci-x-axis-ticks'>
        {xScale.ticks(numTicks).map(value => (
          <g key={`x-tick-${value}`}>
            <line
              x1={xScale(value)}
              x2={xScale(value)}
              y1={height - margin.bottom}
              y2={height - margin.bottom + 5}
              stroke='#333'
              strokeWidth='1'
              shapeRendering='crispEdges'
              vectorEffect='non-scaling-stroke'
            />
            <text
              x={xScale(value)}
              y={height - margin.bottom + 15}
              textAnchor='middle'
              fontSize='10'
            >
              {value}
            </text>
          </g>
        ))}
      </g>
    </g>
  );
};

XAxis.propTypes = {
  xScale: PropTypes.func,
  label: PropTypes.string,
  numTicks: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  height: PropTypes.number,
  width: PropTypes.number,
  margin: PropTypes.shape({
    bottom: PropTypes.number,
    left: PropTypes.number,
    right: PropTypes.number,
    top: PropTypes.number,
  }),
};

export default XAxis;
