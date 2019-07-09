import React from 'react'
import PropTypes from 'prop-types'

function getNewStatuses(statuses, checked, index) {
  const status = checked ? 'fulfilled' : 'rejected'
  return statuses.map((s, i) =>
    i === index ? { label: s.label, status } : Object.assign({}, s)
  )
}

const StatusSwitcher = ({ statuses, onChange }) => (
  <div className="status-switcher">
    <h3>Change the result of the async methods</h3>
    {statuses.map((s, i) => (
      <div className="status-switcher--group" key={i}>
        <label className="status-switcher--label">
          {s.label}&nbsp;{s.status}
          <input
            className="status-switcher--checkbox"
            type="checkbox"
            value={s.label}
            checked={s.status === 'fulfilled'}
            data-index={i}
            onChange={(e) =>
              onChange(
                getNewStatuses(
                  statuses,
                  e.target.checked,
                  +e.target.dataset.index
                )
              )
            }
          />
        </label>
      </div>
    ))}
  </div>
)

StatusSwitcher.propTypes = {
  onChange: PropTypes.func,
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      status: PropTypes.oneOf(['fulfilled', 'rejected'])
    })
  )
}

export default StatusSwitcher
