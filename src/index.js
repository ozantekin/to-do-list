import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
class App extends React.Component {
  render() {
    return <div className='text-red-500'>Hello World !</div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
