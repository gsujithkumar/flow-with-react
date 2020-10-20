import React, { Component } from 'react'

type Props={
    foo: number,
    bar? : string
}

export class MyClassComponent extends Component<Props> {
    render():any {
      //  this.props.doesNotExist; // Error! You did not define a `doesNotExist` prop.
        return (
            <div>{this.props.bar}</div>
        )
    }
}

export default MyClassComponent
