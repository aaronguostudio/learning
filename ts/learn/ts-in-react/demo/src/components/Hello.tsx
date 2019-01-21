import * as React from 'react'

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

interface IState {
  currentEnthusiasm: number;
}

export default class Hello extends React.Component<IProps, IState> {

  constructor (props: IProps) {
    super(props)
    this.state = { currentEnthusiasm: props.enthusiasmLevel || 1 }
  }

  public render () {
    const { name, enthusiasmLevel = 1 } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D')
    }

    return (
      <div>
        <div className="greeting">Hello { name + enthusiasmLevel }</div>
        <div>Current { name + this.state.currentEnthusiasm }</div>
        <button onClick={this.onIncrement}> + </button>
        <button onClick={this.onDecrement}> - </button>

      </div>
    )
  }

  private onIncrement = () => { this.updateEnthusiasm(this.state.currentEnthusiasm + 1) }
  private onDecrement = () => { this.updateEnthusiasm(this.state.currentEnthusiasm - 1) }

  private updateEnthusiasm = (currentEnthusiasm: number) => {
    this.setState({ currentEnthusiasm })
  }
}
