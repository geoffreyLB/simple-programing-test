import React, { Fragment, PureComponent } from 'react'

// ==== Part 4: React ====

// a) Why does input not set value in the state? [04ea47cc]
//    -> https://codesandbox.io/s/1yxqjjv133

export class A extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = { value: '' }
    }

    handleChange({ target: { value } }) {
        this.setState({ value })
    }

    render() {
        const { value } = this.state

        return (
            <input
                type="text"
                onChange={this.handleChange}
                value={value}
            />
        )
    }
}

// b) Why is new item not inserted in the list? [381b30d6]
//    -> https://codesandbox.io/s/ov34vwypq5

export class B extends PureComponent {
    constructor(props) {
        super(props)
  
        this.state = { items: [0, 1, 2] }
    }
  
    handleClick() {
        this.setState(({ items }) => {
            items.push(items.length)

            return { items }
        })
    }
  
    render() {
        const { items } = this.state

        return (
            <Fragment>
                <button onClick={this.handleClick.bind(this)}>
                    Insert {items.length}
                </button>
                <ul>
                    {items.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}
