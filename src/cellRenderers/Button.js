'use strict';

var CellRenderer = require('./CellRenderer');

/**
 * @constructor
 * @extends CellRenderer
 */
var Button = CellRenderer.extend('Button', {

    paint: function(gc, config) {
        var val = config.value,
            c = config.dataCell.x,
            r = config.gridCell.y,
            bounds = config.bounds,
            x = bounds.x + 1,
            y = bounds.y + 1,
            width = bounds.width - 1 - config.lineWidth,
            height = bounds.height - 1 - config.lineWidth,
            radius = height / 2,
            arcGradient = gc.createLinearGradient(x, y, x, y + height);

        if (config.mouseDown) {
            arcGradient.addColorStop(0, '#B5CBED');
            arcGradient.addColorStop(1, '#4d74ea');
        } else {
            arcGradient.addColorStop(0, '#ffffff');
            arcGradient.addColorStop(1, '#aaaaaa');
        }

        // draw the background
        gc.cache.fillStyle = config.backgroundColor;
        gc.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);

        // draw the capsule
        gc.cache.fillStyle = arcGradient;
        gc.cache.strokeStyle = '#000000';
        this.roundRect(gc, x, y, width, height, radius, arcGradient, true);

        var ox = (width - gc.getTextWidth(val)) / 2;
        var oy = (height - gc.getTextHeight(gc.cache.font).descent) / 2;

        // draw the text
        gc.cache.textBaseline = 'middle';
        gc.cache.fillStyle = '#333333';
        gc.cache.font = height - 2 + 'px sans-serif';
        config.backgroundColor = 'rgba(0,0,0,0)';
        gc.fillText(val, x + ox, y + oy);

        // Identify that we are a button by inserting an array of bounds into buttonCells for this cell's coords,
        // one element per subrow. This will be a single-element array for a cell without `subrows`.
        var key = c + ',' + r,
            buttonCells = config.buttonCells,
            buttonSubrows = buttonCells[key] || (buttonCells[key] = []);

        buttonSubrows[config.subrow] = Object.assign({}, bounds);
    }
});

module.exports = Button;


