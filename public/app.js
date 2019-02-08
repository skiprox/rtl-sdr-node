'use strict';

const io = require('socket.io-client');
const socket = io.connect();

class App {
	constructor() {
		this.canvas;
		this.ctx;
		this.setup();
		this.addListeners();
	}
	setup() {
		this.canvas = document.getElementById('canvas');
		this.ctx = canvas.getContext('2d');

		this.canvas.height = window.innerHeight;
		this.canvas.width = window.innerWidth;

		this.ctx.fillStyle = 'green';
		this.ctx.fillRect(10, 10, 150, 100);
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}
	addListeners() {
		socket.on('data', (data) => {
			var view = new Int8Array(data.buffer);
			//var view = new Int32Array(data.buffer);
			this.drawCanvas(view);
		});
	}
	drawCanvas(data) {
		let width = this.canvas.width;
		let height = this.canvas.height;
		this.ctx.fillStyle = "black";
		this.ctx.fillRect(0, 0, width, height);
		this.ctx.beginPath();
		this.ctx.lineWidth = 0.5;
		this.ctx.strokeStyle = '#52FF3E';
		this.ctx.moveTo(0, height/2);
		for (let i = 0; i < data.length; i++) {
		    this.ctx.lineTo((width/data.length) * i, (height/2 + data[i] * height/280));
		}
		this.ctx.stroke();
	}
}

const app = new App();