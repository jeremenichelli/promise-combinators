import React from 'react'
import PropTypes from 'prop-types'

const PromiseSelector = ({ options, value, onChange }) => (
  <>
    <h3>Select a combinator</h3>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option disabled value="">
        ...
      </option>
      {options.map((o, i) => (
        <option key={i} value={o}>
          {o}
        </option>
      ))}
    </select>
  </>
)

PromiseSelector.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string)
}

export default PromiseSelector
