import * as React from 'react';

interface PropTypes {
    radius: number;
    edges: Edge[];
}

interface StateTypes {
    width: number;
}

interface Dot {
    x: number;
    y: number;
    label: string;
}

class Shape extends React.Component<PropTypes, StateTypes>{
    private textToShapeDistance: number = 10;
    private ctx: CanvasRenderingContext2D;
    private dots: Dot[] = [];
    private longestLabel: number = 0;

    constructor(props) {
        super(props);
        this.state = {
            width: 500
        }
    }

    renderLines() {
        const { radius } = this.props;
        const proportion = radius / 10
        for(let i=0; i < 10; i++) {
            this.ctx.beginPath();
            this.ctx.strokeStyle = '#ff0000';
            this.ctx.moveTo(this.dots[0].x * i * proportion + radius, this.dots[0].y * i * proportion + radius);
            for(let j=0; j< this.dots.length; j++) {
                this.ctx.lineTo(this.dots[j].x * i * proportion + radius, this.dots[j].y  * i * proportion + radius);
            }
            this.ctx.lineTo(this.dots[0].x * i * proportion + radius, this.dots[0].y * i * proportion + radius);
            this.ctx.stroke();
            this.ctx.closePath();
        }
    }

    renderArea() {
        const { radius, edges } = this.props;
        const proportion = radius / 10

        this.ctx.beginPath();
        this.ctx.moveTo(this.dots[0].x * edges[0].value * proportion + radius, this.dots[0].y  * edges[0].value * proportion  + radius);
        
        this.dots.forEach((dot, i) => this.ctx.lineTo(dot.x * edges[i].value * proportion + radius, dot.y * edges[i].value * proportion + radius));
        this.ctx.fill();
    }

    renderLabels() {
        const { radius } = this.props;
        this.ctx.font = '14px Arial';
        let text;
        let textWidth;
        let textOffset;
        this.dots.forEach((dot, i) => {
            text = dot.label;
            textWidth = this.ctx.measureText(text).width * Math.sign(dot.x);
            if (Math.sign(dot.x) < 0) {
                textOffset = textWidth + 10;
            } else {
                textOffset = 10;
            }
            console.log(this.ctx)
            this.ctx.fillText(text, dot.x * 10 * radius / 10 + textOffset + radius, dot.y * 10 * radius / 10 + radius)
        });
    }

    prepare() {
        const { edges, radius } = this.props;
        let text;
        for(let i=0; i < edges.length; i++) {
            text = this.ctx.measureText(edges[i].label).width;
            if(text > this.longestLabel) {
                this.longestLabel = text;
            }
            this.dots.push({
                x: Math.cos(i * 2 * Math.PI / edges.length),
                y: Math.sin(i * 2 * Math.PI / edges.length),
                label: edges[i].label
            })
        }
        this.setState({
            width: (radius + this.textToShapeDistance + this.longestLabel) * 2
        })
    }

    componentDidMount() {
        const canvas = (this.refs.canvas as HTMLCanvasElement);
        this.ctx = canvas.getContext('2d');
        this.prepare();
        this.renderArea();
        this.renderLines();
        this.renderLabels();
    }

    componentDidUpdate() {
        const canvas = (this.refs.canvas as HTMLCanvasElement);
        this.ctx = canvas.getContext('2d');
        this.renderArea();
        this.renderLines();
        this.renderLabels();
    }

    render() {
        const { width } = this.state;
        return (
            <div>
                <canvas ref="canvas" width={width} height={width}></canvas>
            </div>

        );
    }
}

export default Shape;

