import * as React from 'react';

interface PropTypes {
    radius: number;
    edges: Edge[];
}

interface StateTypes {
    dots: any[];
}

class Shape extends React.Component<PropTypes, StateTypes>{

    constructor(props) {
        super(props);
        this.state = {
            dots: [],
        }
    }

    renderLines() {
        const canvas = (this.refs.canvas as HTMLCanvasElement);
        const ctx = canvas.getContext('2d');
        const { radius } = this.props;
        const proportion = radius / 10
        for(let i=0; i < 10; i++) {
            ctx.beginPath();
            ctx.strokeStyle = '#ff0000';
            ctx.moveTo(this.dots[0].x * i * proportion + radius, this.dots[0].y * i * proportion + radius);
            for(let j=0; j< this.dots.length; j++) {
                ctx.lineTo(this.dots[j].x * i * proportion + radius, this.dots[j].y  * i * proportion + radius);
            }
            ctx.lineTo(this.dots[0].x * i * proportion + radius, this.dots[0].y * i * proportion + radius);
            ctx.stroke();
            ctx.closePath();
        }
    }

    renderArea() {
        const { radius, edges } = this.props;
        const canvas = (this.refs.canvas as HTMLCanvasElement);
        const ctx = canvas.getContext('2d');

        const proportion = radius / 10

        ctx.beginPath();
        ctx.moveTo(this.dots[0].x * edges[0].value * proportion + radius, this.dots[0].y  * edges[0].value * proportion  + radius);
        
        this.dots.forEach((dot, i) => ctx.lineTo(dot.x * edges[i].value * proportion + radius, dot.y * edges[i].value * proportion + radius));
        ctx.fill();
    }

    componentDidMount() {
        const { edges } = this.props;
        const dots = []
        for(let i=0; i < edges.length; i++) {
            dots.push({
                x: Math.cos(i * 2 * Math.PI / edges.length),
                y: Math.sin(i * 2 * Math.PI / edges.length),
            })
        }
        this.dots = dots;
        this.renderArea();
        this.renderLines();

    }

    render() {
        const { radius } = this.props;
        return (
            <div>
                <canvas ref="canvas" width={radius* 2 * 10} height={radius* 2 * 10}></canvas>
            </div>

        );
    }
}

export default Shape;

