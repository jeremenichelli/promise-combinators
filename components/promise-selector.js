import React from 'react'
import PropTypes from 'prop-types'

const PromiseSelector = ({ options, value, onChange }) => (
  <div className="promise-selector">
    <style jsx>{`
      .promise-selector--label {
        font-weight: bold;
        margin 0 0.5em 0 0;
      }

      .promise-selector--dropdown {
        font-size: 14px;
      }
    `}</style>
    <label
      htmlFor="promise-selector--dropdown"
      className="promise-selector--label"
    >
      Select a combinator
    </label>
    <select
      id="promise-selector--dropdown"
      className="promise-selector--dropdown"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">
        ...
      </option>
      {options.map((o, i) => (
        <option key={i} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
)

PromiseSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string)
}

export default PromiseSelector
