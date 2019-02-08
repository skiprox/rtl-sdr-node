# RTL-SDR Drawing in Node

> This repo is an attempt to draw things using SDR signals as input

## Overview

This repo uses [rtl-sdr library](https://github.com/watson/rtl-sdr), a Node wrapper for librtlsdr, to pull signals from an RTL-SDR dongle. It then uses Express and Socket to send those signals to a webpage where they are drawn to the screen using Canvas.

## How to use

If you have an RTL-SDR dongle and want to play around with this library, here's how to get started.

Clone this repo and install the dependencies using
```
$ npm install
```
If you have issues you might need to install [librtlsdr](https://github.com/steve-m/librtlsdr).

Next you'll want to build the front-end js, by doing
```
$ npm run js
```
Finally, start the server by doing
```
$ node index
```
and navigate to `localhost:8080` to see the signal.
