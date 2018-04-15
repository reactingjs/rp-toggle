import React from 'react'

export default class Toggle extends React.Component {
  constructor(props) {
    super(props)

    if (PROD && Object.keys(props).length === 1 && 'children' in props) {
      console.warn('[ rp-toggle ]: Nothing provided to RPToggle to toggle.')
    }

    this.toggle = {}
    this.state = Object.entries(props).reduce((final, [name, value]) => {
      if (name === 'children') return final

      this.toggle[name] = () => {
        this._toggleValue(name)
      }

      final[name] = !!value
      return final
    }, {})
  }

  _toggleValue = (name) => {
    // TODO: Add debug option.

    // console.log(
    //   `[ rp-toggle ]: Toggling ${name} from ${this.state[name]} to ${!this.state[name]}`
    // )

    this.setState((state) => ({
      [name]: !state[name]
    }))
  }

  render() {
    return this.props.children(this.toggle, this.state)
  }
}
