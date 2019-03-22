export default class Circle extends React.Component {
  constructor (props) {
    super(props)
    this.handleMouseDown = this.handleMouseDown.bind(this)
  }

  handleMouseDown (event) {
    const { draggable, toggleIsDraggingPoint, x, y, updateLastSelectedPoint } = this.props
    if ( draggable ){
      toggleIsDraggingPoint()
      updateLastSelectedPoint(x, y)
    }else{
      event.preventDefault();
    }
  }

  render () {
    let { x, y, size, fill, stroke, draggable, centered } = this.props
    if (centered) {
      x = x - size / 2
      y = y - size / 2
    }
    return (
      <React.Fragment>
        <style jsx>{`
                        .circle {
                            cursor: ${ draggable ? "grab" : "auto" };
                            pointer-events: ${ draggable ? "auto" : "none" };
                        }
                        text{
                            font-family: Sans-Serif;
                            font-size: 10px;
                            pointer-events: none;
                            user-select: none;
                        }
                `}</style>
        <circle
          cx={x}
          cy={y}
          r={size}
          fill={fill}
          stroke={stroke}
          className='circle'
          onMouseDown={ this.handleMouseDown }
          z-index={draggable ? "3" : "0"}
        />
        <text x={x} y={y} fill={fill} transform={`translate( ${size + 10} )`}>{ `x:${~~x}, y:${~~y} ` }</text>
      </React.Fragment>
    )
  }
}
