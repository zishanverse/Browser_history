import './index.css'

const HistoryItem = props => {
  const {item, func} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const deleteItem = () => {
    func(id)
  }

  return (
    <li className="each">
      <p className="date">{timeAccessed}</p>
      <div className="content">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="siteName">
          <p className="title">{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <button
          type="button"
          data-testid="delete"
          className="btn"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
