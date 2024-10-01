import {Component} from 'react'

class Welcome extends Component {
  state = {}
  render() {
    const {name} = this.props
    return <h1>Hello,{name}</h1>
  }
}

export default Welcome
