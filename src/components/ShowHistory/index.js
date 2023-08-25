import HistoryItem from '../HistoryItems/index'
import './index.css'

const ShowHistory = props => {
  const {deleteItem, list} = props
  return (
    <div className="card">
      <ul>
        {list.map(each => (
          <HistoryItem item={each} key={each.id} func={deleteItem} />
        ))}
      </ul>
    </div>
  )
}

export default ShowHistory
