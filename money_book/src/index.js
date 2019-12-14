import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css'

class MoneyBook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {books: []}
  }

  componentDidMount() {
    this.setState({books:[
      {date: "1/1", item: "お年玉", amount: 10000},
      {date: "1/3", item: "ケーキ", amount: -500},
      {date: "2/1", item: "お小遣い", amount: 3000},
      {date: "2/5", item: "マンガ", amount: -600},
    ]})
  }

  addBook(date, item, amount) {
    const book = {date: date, item: item, amount: amount}
    this.setState({books: this.state.books.concat(book)})
  }

  render() {
    return (
      <div>
        <Title>小遣い帳</Title>
        <MoneyBookList books={this.state.books} />
        <MoneyEntry add={(date, item,amount) => this.addBook(date, item, amount)} />
      </div>
    )
  }
}

class MoneyEntry extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {date: '', item: '', amount: '', payingIn: true}
    this.date = null
    this.item = null
    this.amount = null
    this.payingIn = null
  }

  onChangeDate(event) {
    this.setState({date: event.target.value})
  }

  onChangeItem(event) {
    this.setState({item: event.target.value})
  }

  onChangeAmount(event) {
    this.setState({amount: event.target.value})
  }

  onChangePaying(event) {
    console.log(event.target.value)
    this.setState({payingIn: event.target.value == "on"})
  }

  onClickSubmit() {
    // this.props.add(this.state.date, this.state.item, this.state.amount * (this.state.payingIn ? 1 : -1))
    this.props.add(this.date.value, this.item.value, this.amount.value * (this.payingIn.checked ? 1 : -1))
    // this.setState({date: '', item: '', amount: '', payingIn: false})
    this.date.value = ""
    this.item.value = ""
    this.amount.value = ""
    this.payingIn.checked = true
  }

  onChangeValue(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="entry">
        <fieldset>
          <legend>記帳</legend>
          <div>
            {/* <input type="radio" value="on" checked={this.state.payingIn} onChange={(event) => this.onChangePaying(event)} />入金 */}
            <input type="radio" defaultChecked name="payingInOut" ref={(node) => this.payingIn = node}/>入金
            {/* <input type="radio" value="off" checked={!this.state.payingIn} onChange={(event) => this.onChangePaying(event)} />出金 */}
            <input type="radio" name="payingInOut" />出金
          </div>
          {/* <div>日付: <input type="text" value={this.state.date} name="date" onChange={(event) => this.onChangeValue(event)} placeholder="3/15"/></div> */}
          <div>日付: <input type="text" defaultValue="" ref={(node) => this.date = node} placeholder="3/15" /></div>
          {/* <div>項目: <input type="text" value={this.state.item} name="item" onChange={(event) => this.onChangeValue(event)} placeholder="おこづかい" /></div> */}
          <div>項目: <input type="text" defaultValue="" ref={(node) => this.item = node} placeholder="おこづかい"/></div>
          {/* <div>金額: <input type="text" value={this.state.amount} name="amount" onChange={(event) => this.onChangeValue(event)} placeholder="1000" /></div> */}
          <div>金額: <input type="text" defaultValue="" ref={(node) => this.amount = node } placeholder="1000" /></div>
          <div><input type="submit" value="追加" onClick={() => this.onClickSubmit()} /></div>
        </fieldset>
      </div>
    )
  }
}

MoneyEntry.propTypes = {
  add: PropTypes.func.isRequired
}

const MoneyBookList = (props) => {
  return (
    <div>
      <table className="book">
        <thead data-type="ok">
          <tr><th>日付</th><th>項目</th><th>入金</th><th>出金</th></tr>
        </thead>
        <tbody>
          {props.books.map((book) => <MoneyBookItem book={book} key={book.data + book.item} />)}
        </tbody>
      </table>
    </div>
  )
}

MoneyBookList.propTypes = {
  books: PropTypes.array.isRequired
}

const MoneyBookItem = (props) => {
  const {date, item, amount} = props.book

  return (
    <tr>
      <td>{date}</td>
      <td>{item}</td>
      <td>{amount >=0 ? amount : null}</td>
      <td>{amount < 0 ? -amount : null}</td>
    </tr>
  )
}

MoneyBookItem.propTypes = {
  book: PropTypes.object.isRequired
}

const Title = (props) => {
  return (<h1>{props.children}</h1>)
}

Title.propTypes = {
  children: PropTypes.string
}

ReactDOM.render(
  <MoneyBook />,
  document.getElementById('root')
);
