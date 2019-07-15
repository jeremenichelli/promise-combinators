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
    <style jsx>{`
      .status-switcher--group {
        margin: 0 0 0.5em;
      }

      .status-switcher--label {
        cursor: pointer;
      }

      .status-switcher--checkbox {
        display: none;
      }

      .status-switcher--emoji {
        font-size 18px;
        margin: 0 0.5em 0 0;
      }

      .status-switcher--indicator {
        border-width: 1px;
        border-style: solid;
        border-radius: 3px;
        display: inline-block;
        font-size: 15px;
        font-weight: 500;
        letter-spacing: 0.02em;
        line-height: 1;
        min-width: 75px;
        padding: 3px;
        text-align: center;
      }
      
      .fulfilled {
        background-color: #F1F8E9;
        color: #00C853;
      }

      .rejected {
        background-color: #FFEBEE;
        color: #D50000;
      }
    `}</style>
    {statuses.map((s, i) => (
      <div className="status-switcher--group" key={i}>
        <label className="status-switcher--label">
          <span className="status-switcher--emoji">{s.label}</span>
          <span className={`status-switcher--indicator ${s.status}`}>
            {s.status}
          </span>
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
