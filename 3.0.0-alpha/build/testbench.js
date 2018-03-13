(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var numRows = 10000;

var firstNames = ['', 'Olivia', 'Sophia', 'Ava', 'Isabella', 'Boy', 'Liam', 'Noah', 'Ethan', 'Mason', 'Logan', 'Moe', 'Larry', 'Curly', 'Shemp', 'Groucho', 'Harpo', 'Chico', 'Zeppo', 'Stanley', 'Hardy'];
var lastNames = ['', 'Wirts', 'Oneil', 'Smith', 'Barbarosa', 'Soprano', 'Gotti', 'Columbo', 'Luciano', 'Doerre', 'DePena'];
var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
var days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'];
var states = ['', 'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

var randomFunc = Math.random;
//var randomFunc = rnd;

var rnd = function (max) {
    return Math.floor(randomFunc() * max);
}

var randomPerson = function() {
    var firstName = Math.round((firstNames.length - 1) * randomFunc());
    //var lastName = 'a' + randomFunc() + 'b';
    var lastName = Math.round((lastNames.length - 1) * randomFunc());
    var pets = Math.round(10 * randomFunc());
    var height = 50 + Math.round(40 * randomFunc());
    var birthyear = 1900 + Math.round(randomFunc() * 114);
    var birthmonth = Math.round(randomFunc() * 11);
    var birthday = Math.round(randomFunc() * 29);
    var birthTime = Math.round(randomFunc() * 60 * 24);
    var birthstate = Math.round(randomFunc() * (states.length - 1));
    var residencestate = Math.round(randomFunc() * (states.length - 1));
    var travel = randomFunc() * 1000;
    var income = randomFunc() * 100000;
    var employed = Math.round(randomFunc());

    //Use this to test Sparkline or Sparkbar
    var sparkData =  (function () {
        var barRandomOffsets = [];
        //for (var i = 0; i < 20; i++) {
        //    barRandomOffsets.push([]);

        for (var r = 0; r < 10; r++) {
            barRandomOffsets.push(10 - rnd(20));
        }
        //}
        return barRandomOffsets
    })()
    var sliderData = Math.round(randomFunc() * 11);
    var person = {
        last_name: lastNames[lastName], //jshint ignore:line
        first_name: firstNames[firstName], //jshint ignore:line
        total_number_of_pets_owned: pets,
        height: height,
        birthDate: new Date(birthyear + '-' + months[birthmonth] + '-' + days[birthday]),
        birthTime: birthTime,
        birthState: states[birthstate],
        residenceState: states[residencestate],
        employed: employed === 1,
        income: income,
        travel: travel,
        squareOfIncome: 0,

        one_last_name: lastNames[lastName], //jshint ignore:line
        one_first_name: firstNames[firstName], //jshint ignore:line
        one_pets: pets,
        one_height: height,
        one_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        one_birthState: states[birthstate],
        one_birthTime: birthTime,
        one_residenceState: states[residencestate],
        one_employed: employed === 1,
        one_income: income,
        one_travel: travel,
        one_squareOfIncome: 0,

        two_last_name: lastNames[lastName], //jshint ignore:line
        two_first_name: firstNames[firstName], //jshint ignore:line
        two_pets: pets,
        two_height: height,
        two_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        two_birthState: states[birthstate],
        two_birthTime: birthTime,
        two_residenceState: states[residencestate],
        two_employed: employed === 1,
        two_income: income,
        two_travel: travel,
        two_squareOfIncome: 0,

        three_last_name: lastNames[lastName], //jshint ignore:line
        three_first_name: firstNames[firstName], //jshint ignore:line
        three_pets: pets,
        three_height: height,
        three_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        three_birthState: states[birthstate],
        three_birthTime: birthTime,
        three_residenceState: states[residencestate],
        three_employed: employed === 1,
        three_income: income,
        three_travel: travel,
        three_squareOfIncome: 0,

        four_last_name: lastNames[lastName], //jshint ignore:line
        four_first_name: firstNames[firstName], //jshint ignore:line
        four_pets: pets,
        four_height: height,
        four_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        four_birthState: states[birthstate],
        four_birthTime: birthTime,
        four_residenceState: states[residencestate],
        four_employed: employed === 1,
        four_income: income,
        four_travel: travel,
        four_squareOfIncome: 0,

        five_last_name: lastNames[lastName], //jshint ignore:line
        five_first_name: firstNames[firstName], //jshint ignore:line
        five_pets: pets,
        five_height: height,
        five_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        five_birthState: states[birthstate],
        five_birthTime: birthTime,
        five_residenceState: states[residencestate],
        five_employed: employed === 1,
        five_income: income,
        five_travel: travel,
        five_squareOfIncome: 0,

        six_last_name: lastNames[lastName], //jshint ignore:line
        six_first_name: firstNames[firstName], //jshint ignore:line
        six_pets: pets,
        six_height: height,
        six_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        six_birthState: states[birthstate],
        six_birthTime: birthTime,
        six_residenceState: states[residencestate],
        six_employed: employed === 1,
        six_income: income,
        six_travel: travel,
        six_squareOfIncome: 0,

        seven_last_name: lastNames[lastName], //jshint ignore:line
        seven_first_name: firstNames[firstName], //jshint ignore:line
        seven_pets: pets,
        seven_height: height,
        seven_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        seven_birthState: states[birthstate],
        seven_birthTime: birthTime,
        seven_residenceState: states[residencestate],
        seven_employed: employed === 1,
        seven_income: income,
        seven_travel: travel,
        seven_squareOfIncome: 0,

        eight_last_name: lastNames[lastName], //jshint ignore:line
        eight_first_name: firstNames[firstName], //jshint ignore:line
        eight_pets: pets,
        eight_height: height,
        eight_birthDate: birthyear + '-' + months[birthmonth] + '-' + days[birthday],
        eight_birthState: states[birthstate],
        eight_birthTime: birthTime,
        eight_residenceState: states[residencestate],
        eight_employed: employed === 1,
        eight_income: income,
        eight_travel: travel,
        eight_squareOfIncome: 0,
    };
    person.squareOfIncome = function() {
        return Math.sqrt(person.income);
    }
    return person;
};

var data = exports.people2 = [];
for (var i = 0; i < numRows; i++) {
    data.push(randomPerson());
}

data = exports.people1 = [];
for (var i = 0; i < numRows/2; i++) {
    data.push(randomPerson());
}

exports.states = states;
exports.firstNames = firstNames;
exports.lastNames = lastNames;

},{}],2:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports = function() {

    var demo = this,
        grid = demo.grid,
        schema = grid.behavior.schema,
        CellEditor = grid.cellEditors.BaseClass,
        Textfield = grid.cellEditors.get('textfield'),
        ColorText = Textfield.extend('colorText', {
            template: '<input type="text" lang="{{locale}}" style="color:{{textColor}}">'
        });

    grid.cellEditors.add(ColorText);

    var Time = Textfield.extend('Time', {
        template: [
            '<div class="hypergrid-textfield" style="text-align:right;">',
            '    <input type="text" lang="{{locale}}" style="background-color:transparent; width:75%; text-align:right; border:0; padding:0; outline:0; font-size:inherit; font-weight:inherit;' +
            '{{style}}">',
            '    <span>AM</span>',
            '</div>'
        ].join('\n'),

        initialize: function() {
            this.input = this.el.querySelector('input');
            this.meridian = this.el.querySelector('span');

            // Flip AM/PM on any click
            this.el.onclick = function() {
                this.meridian.textContent = this.meridian.textContent === 'AM' ? 'PM' : 'AM';
            }.bind(this);
            this.input.onclick = function(e) {
                e.stopPropagation(); // ignore clicks in the text field
            };
            this.input.onfocus = function(e) {
                var target = e.target;
                this.el.style.outline = this.outline = this.outline || window.getComputedStyle(target).outline;
                target.style.outline = 0;
            }.bind(this);
            this.input.onblur = function(e) {
                this.el.style.outline = 0;
            }.bind(this);
        },

        setEditorValue: function(value) {
            CellEditor.prototype.setEditorValue.call(this, value);
            var parts = this.input.value.split(' ');
            this.input.value = parts[0];
            this.meridian.textContent = parts[1];
        },

        getEditorValue: function(value) {
            value = CellEditor.prototype.getEditorValue.call(this, value);
            if (this.meridian.textContent === 'PM') {
                value += demo.NOON;
            }
            return value;
        }
    });

    grid.cellEditors.add(Time);

    // Used by the cellProvider.
    // `null` means column's data cells are not editable.
    var editorTypes = [
        null,
        'textfield',
        'textfield',
        'textfield',
        null,
        'time',
        'choice',
        'choice',
        'choice',
        'textfield',
        'textfield',
        'textfield'
    ];

    // Override to assign the the cell editors.
    grid.behavior.dataModel.getCellEditorAt = function(x, y, declaredEditorName, cellEvent) {
        var editorName = declaredEditorName || editorTypes[x % editorTypes.length];

        switch (x) {
            case schema.birthState.index:
                cellEvent.textColor = 'red';
                break;
        }

        var cellEditor = grid.cellEditors.create(editorName, cellEvent);

        if (cellEditor) {
            switch (x) {
                case schema.employed.index:
                    cellEditor = null;
                    break;

                case schema.totalNumberOfPetsOwned.index:
                    cellEditor.input.setAttribute('min', 0);
                    cellEditor.input.setAttribute('max', 10);
                    cellEditor.input.setAttribute('step', 0.01);
                    break;
            }
        }

        return cellEditor;
    };
};

},{}],3:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports = function() {

    var demo = this,
        grid = demo.grid,
        schema = grid.behavior.schema;

    //GET CELL
    //all formatting and rendering per cell can be overridden in here
    grid.behavior.dataModel.getCell = function(config, rendererName) {
        if (config.isUserDataArea) {
            var n, hex, travel,
                colIndex = config.dataCell.x,
                rowIndex = config.dataCell.y;

            if (demo.styleRowsFromData) {
                n = grid.behavior.getColumn(schema.totalNumberOfPetsOwned.index).getValue(rowIndex);
                hex = (155 + 10 * (n % 11)).toString(16);
                config.backgroundColor = '#' + hex + hex + hex;
            }

            switch (colIndex) {
                case schema.lastName.index:
                    config.color = config.value != null && (config.value + '')[0] === 'S' ? 'red' : '#191919';
                    config.link = true;
                    break;

                case schema.income.index:
                    travel = 60;
                    break;

                case schema.travel.index:
                    travel = 105;
                    break;
            }

            if (travel) {
                travel += Math.round(config.value * 150 / 100000);
                config.backgroundColor = '#00' + travel.toString(16) + '00';
                config.color = '#FFFFFF';
            }

            //Testing
            if (colIndex === schema.totalNumberOfPetsOwned.index) {
                /*
                 * Be sure to adjust the data set to the appropriate type and shape in widedata.js
                 */

                //return simpleCell; //WORKS
                //return emptyCell; //WORKS
                //return buttonCell; //WORKS
                //return errorCell; //WORKS: Noted that any error in this function steals the main thread by recursion
                //return sparkLineCell; // WORKS
                //return sparkBarCell; //WORKS
                //return sliderCell; //WORKS
                //return treeCell; //Need to figure out data shape to test


                /*
                 * Test of Customized Renderer
                 */
                // if (starry){
                //     config.domain = 5; // default is 100
                //     config.sizeFactor =  0.65; // default is 0.65; size of stars as fraction of height of cell
                //     config.darkenFactor = 0.75; // default is 0.75; star stroke color as fraction of star fill color
                //     config.color = 'gold'; // default is 'gold'; star fill color
                //     config.fgColor =  'grey'; // default is 'transparent' (not rendered); text color
                //     config.fgSelColor = 'yellow'; // default is 'transparent' (not rendered); text selection color
                //     config.bgColor = '#404040'; // default is 'transparent' (not rendered); background color
                //     config.bgSelColor = 'grey'; // default is 'transparent' (not rendered); background selection color
                //     config.shadowColor = 'transparent'; // default is 'transparent'
                //     return starry;
                // }
            }
        }

        return grid.cellRenderers.get(rendererName);
    };

    //END OF GET CELL


    // CUSTOM CELL RENDERER

    var REGEXP_CSS_HEX6 = /^#(..)(..)(..)$/,
        REGEXP_CSS_RGB = /^rgba\((\d+),(\d+),(\d+),\d+\)$/;

    function paintSparkRating(gc, config) {
        var x = config.bounds.x,
            y = config.bounds.y,
            width = config.bounds.width,
            height = config.bounds.height,
            options = config.value,
            domain = options.domain || config.domain || 100,
            sizeFactor = options.sizeFactor || config.sizeFactor || 0.65,
            darkenFactor = options.darkenFactor || config.darkenFactor || 0.75,
            color = options.color || config.color || 'gold',
            stroke = this.stroke = color === this.color ? this.stroke : getDarkenedColor(gc, this.color = color, darkenFactor),
            // bgColor = config.isSelected ? (options.bgSelColor || config.bgSelColor) : (options.bgColor || config.bgColor),
            fgColor = config.isSelected ? (options.fgSelColor || config.fgSelColor) : (options.fgColor || config.fgColor),
            shadowColor = options.shadowColor || config.shadowColor || 'transparent',
            // font = options.font || config.font || '11px verdana',
            middle = height / 2,
            diameter = sizeFactor * height,
            outerRadius = sizeFactor * middle,
            val = Number(options.val),
            points = this.points;

        if (!points) {
            var innerRadius = 3 / 7 * outerRadius;
            points = this.points = [];
            for (var i = 5, pi = Math.PI / 2, incr = Math.PI / 5; i; --i, pi += incr) {
                points.push({
                    x: outerRadius * Math.cos(pi),
                    y: middle - outerRadius * Math.sin(pi)
                });
                pi += incr;
                points.push({
                    x: innerRadius * Math.cos(pi),
                    y: middle - innerRadius * Math.sin(pi)
                });
            }
            points.push(points[0]); // close the path
        }

        gc.cache.shadowColor = 'transparent';

        gc.cache.lineJoin = 'round';
        gc.beginPath();
        for (var j = 5, sx = x + 5 + outerRadius; j; --j, sx += diameter) {
            points.forEach(function(point, index) { // eslint-disable-line
                gc[index ? 'lineTo' : 'moveTo'](sx + point.x, y + point.y); // eslint-disable-line
            }); // eslint-disable-line
        }
        gc.closePath();

        val = val / domain * 5;

        gc.cache.fillStyle = color;
        gc.save();
        gc.clip();
        gc.fillRect(x + 5, y,
            (Math.floor(val) + 0.25 + val % 1 * 0.5) * diameter, // adjust width to skip over star outlines and just meter their interiors
            height);
        gc.restore(); // remove clipping region

        gc.cache.strokeStyle = stroke;
        gc.cache.lineWidth = 1;
        gc.stroke();

        if (fgColor && fgColor !== 'transparent') {
            gc.cache.fillStyle = fgColor;
            gc.cache.font = '11px verdana';
            gc.cache.textAlign = 'right';
            gc.cache.textBaseline = 'middle';
            gc.cache.shadowColor = shadowColor;
            gc.cache.shadowOffsetX = gc.cache.shadowOffsetY = 1;
            gc.fillText(val.toFixed(1), x + width + 10, y + height / 2);
        }
    }

    function getDarkenedColor(gc, color, factor) {
        var rgba = getRGBA(gc, color);
        return 'rgba(' + Math.round(factor * rgba[0]) + ',' + Math.round(factor * rgba[1]) + ',' + Math.round(factor * rgba[2]) + ',' + (rgba[3] || 1) + ')';
    }

    function getRGBA(gc, colorSpec) {
        // Normalize variety of CSS color spec syntaxes to one of two
        gc.cache.fillStyle = colorSpec;

        var rgba = colorSpec.match(REGEXP_CSS_HEX6);
        if (rgba) {
            rgba.shift(); // remove whole match
            rgba.forEach(function(val, index) {
                rgba[index] = parseInt(val, 16);
            });
        } else {
            rgba = colorSpec.match(REGEXP_CSS_RGB);
            if (!rgba) {
                throw 'Unexpected format getting CanvasRenderingContext2D.fillStyle';
            }
            rgba.shift(); // remove whole match
        }

        return rgba;
    }


    //Extend HyperGrid's base Renderer
    var sparkStarRatingRenderer = grid.cellRenderers.BaseClass.extend({
        paint: paintSparkRating
    });

    //Register your renderer
    grid.cellRenderers.add('Starry', sparkStarRatingRenderer);

    // END OF CUSTOM CELL RENDERER
    return grid;
};

},{}],4:[function(require,module,exports){
/* eslint-env browser */
/* eslint-disable no-alert */

'use strict';

// Some DOM support functions...
// Besides the canvas, this test harness only has a handful of buttons and checkboxes.
// The following functions service these controls.

module.exports = function() {

    var demo = this,
        grid = demo.grid;

        // make buttons div absolute so buttons width of 100% doesn't stretch to width of dashboard
    var ctrlGroups = document.getElementById('ctrl-groups'),
        dashboard = document.getElementById('dashboard'),
        buttons = document.getElementById('buttons');

    ctrlGroups.style.top = ctrlGroups.getBoundingClientRect().top + 'px';
    //buttons.style.position = 'absolute';
    dashboard.style.display = 'none';

    function toggleRowStylingMethod() {
        demo.styleRowsFromData = !demo.styleRowsFromData;
        grid.repaint();
    }

    // List of properties to show as checkboxes in this demo's "dashboard"
    var toggleProps = [
        {
            label: 'Row styling',
            ctrls: [
                {name: '(Global setting)', label: 'base on data', setter: toggleRowStylingMethod}
            ]
        },
        {
            label: 'Column header rows',
            ctrls: [
                {name: 'showHeaderRow', label: 'header'}, // default "setter" is `setProp`
            ]
        },
        {
            label: 'Hover highlights',
            ctrls: [
                {name: 'hoverCellHighlight.enabled', label: 'cell'},
                {name: 'hoverRowHighlight.enabled', label: 'row'},
                {name: 'hoverColumnHighlight.enabled', label: 'column'}
            ]
        },
        {
            label: 'Link style',
            ctrls: [
                {name: 'linkOnHover', label: 'on hover'},
                {name: 'linkColor', type: 'text', label: 'color'},
                {name: 'linkColorOnHover', label: 'color on hover'}
            ]
        }, {
            label: 'Cell editing',
            ctrls: [
                {name: 'editable'},
                {name: 'editOnDoubleClick', label: 'requires double-click'},
                {name: 'editOnKeydown', label: 'type to edit'}
            ]
        }, {
            label: 'Selection',
            ctrls: [
                {
                    name: 'checkboxOnlyRowSelections', label: 'by row handles only', setter: setSelectionProp,
                    tooltip: 'Note that when this property is active, autoSelectRows will not work.'
                },
                {name: 'singleRowSelectionMode', label: 'one row at a time', setter: setSelectionProp},
                {
                    name: '!multipleSelections',
                    label: 'one cell region at a time',
                    setter: setSelectionProp,
                    checked: true
                },
                {
                    name: 'autoSelectRows', label: 'auto-select rows', setter: setSelectionProp,
                    tooltip: 'Notes:\n' +
                    '1. Requires that checkboxOnlyRowSelections be set to false (so checking this box automatically unchecks that one).\n' +
                    '2. Set singleRowSelectionMode to false to allow auto-select of multiple rows.'
                },
                {name: 'autoSelectColumns', label: 'auto-select columns', setter: setSelectionProp}
            ]
        }
    ];


    toggleProps.forEach(function(prop) {
        addToggle(prop);
    });


    [
        {
            label: 'Toggle Empty Data',
            onclick: demo.toggleEmptyData
        },
        {
            label: 'Set Data', onclick: function() {
            demo.resetData();
            }
        },
        {
            label: 'Set Data 1 (5000 rows)', onclick: function() {
            demo.setData(demo.data.people1);
            }
        },
        {
            label: 'Set Data 2 (10000 rows)', onclick: function() {
            demo.setData(demo.data.people2);
            }
        },
        {
            label: 'Reset Grid',
            onclick: demo.reset
        }
    ].forEach(function(item) {
        var button = document.createElement('button');
        button.innerHTML = item.label;
        button.onclick = item.onclick;
        if (item.title) {
            button.title = item.title;
        }
        buttons.appendChild(button);
    });


    function addToggle(ctrlGroup) {
        var input, label,
            container = document.createElement('div');

        container.className = 'ctrl-group';

        if (ctrlGroup.label) {
            label = document.createElement('div');
            label.className = 'twister';
            label.innerHTML = ctrlGroup.label;
            container.appendChild(label);
        }

        var choices = document.createElement('div');
        choices.className = 'choices';
        container.appendChild(choices);

        ctrlGroup.ctrls.forEach(function(ctrl) {
            if (!ctrl) {
                return;
            }

            var referenceElement,
                type = ctrl.type || 'checkbox',
                tooltip = 'Property name: ' + ctrl.name;

            if (ctrl.tooltip) {
                tooltip += '\n\n' + ctrl.tooltip;
            }

            input = document.createElement('input');
            input.type = type;
            input.id = ctrl.name;
            input.name = ctrlGroup.label;

            switch (type) {
                case 'text':
                    input.value = ctrl.value || getProperty(ctrl.name) || '';
                    input.style.width = '25px';
                    input.style.marginLeft = '4px';
                    input.style.marginRight = '4px';
                    referenceElement = input; // label goes after input
                    break;
                case 'checkbox':
                case 'radio':
                    input.checked = 'checked' in ctrl
                        ? ctrl.checked
                        : getProperty(ctrl.name);
                    referenceElement = null; // label goes before input
                    break;
            }

            input.onchange = function(event) {
                handleRadioClick.call(this, ctrl.setter || setProp, event);
            };

            label = document.createElement('label');
            label.title = tooltip;
            label.appendChild(input);
            label.insertBefore(
                document.createTextNode(' ' + (ctrl.label || ctrl.name)),
                referenceElement
            );

            choices.appendChild(label);

            if (ctrl.name === 'treeview') {
                label.onmousedown = input.onmousedown = function(event) {
                    if (!input.checked && grid.behavior.dataModel.data !== demo.treeData) {
                        alert('Load tree data first ("Set Data 3" button).');
                        event.preventDefault();
                    }
                };
            }
        });

        ctrlGroups.appendChild(container);
    }

    // reset dashboard checkboxes and radio buttons to match current values of grid properties
    Object.getPrototypeOf(demo).resetDashboard = function() {
        toggleProps.forEach(function(prop) {
            prop.ctrls.forEach(function(ctrl) {
                if (ctrl) {
                    switch (ctrl.setter) {
                        case setSelectionProp:
                        case setProp:
                        case undefined:
                            switch (ctrl.type) {
                                case 'radio':
                                case 'checkbox':
                                case undefined:
                                    var id = ctrl.name,
                                        polarity = (id[0] === '!');
                                    document.getElementById(id).checked = getProperty(id) ^ polarity;
                            }
                    }
                }
            });
        });
    };

    function getProperty(key) {
        var keys = key.split('.');
        var prop = grid.properties;

        while (keys.length) {
            prop = prop[keys.shift()];
        }

        return prop;
    }

    document.getElementById('tab-dashboard').addEventListener('click', function(event) {
        if (dashboard.style.display === 'none') {
            dashboard.style.display = 'block';
            grid.div.style.transition = 'margin-left .75s';
            grid.div.style.marginLeft = Math.max(180, dashboard.getBoundingClientRect().right + 8) + 'px';
        } else {
            setTimeout(function() {
                dashboard.style.display = 'none';
            }, 800);
            grid.div.style.marginLeft = '30px';
        }
    });

    var fpsTimer, secs, frames;
    document.getElementById('tab-fps').addEventListener('click', function(event) {
        var el = this, st = el.style;
        if ((grid.properties.enableContinuousRepaint ^= true)) {
            st.backgroundColor = '#666';
            st.textAlign = 'left';
            secs = frames = 0;
            code();
            fpsTimer = setInterval(code, 1000);
        } else {
            clearInterval(fpsTimer);
            st.backgroundColor = st.textAlign = null;
            el.innerHTML = 'FPS';
        }
        function code() {
            var fps = grid.canvas.currentFPS,
                bars = Array(Math.round(fps) + 1).join('I'),
                subrange, span;

            // first span holds the 30 background bars
            el.innerHTML = '';
            el.appendChild(document.createElement('span'));

            // 2nd span holds the numeric
            span = document.createElement('span');

            if (secs) {
                frames += fps;
                span.innerHTML = fps.toFixed(1);
                span.title = secs + '-second average = ' + (frames / secs).toFixed(1);
            }
            secs += 1;

            el.appendChild(span);

            // 0 to 4 color range bar subsets: 1..10:red, 11:20:yellow, 21:30:green
            while ((subrange = bars.substr(0, 12)).length) {
                span = document.createElement('span');
                span.innerHTML = subrange;
                el.appendChild(span);
                bars = bars.substr(12);
            }
        }
    });

    var height;
    document.getElementById('tab-grow-shrink').addEventListener('click', function(event) {
        var label;
        if (!height) {
            height = window.getComputedStyle(grid.div).height;
            grid.div.style.transition = 'height 1.5s linear';
            grid.div.style.height = window.innerHeight + 'px';
            label = 'Shrink';
        } else {
            grid.div.style.height = height;
            height = undefined;
            label = 'Grow';
        }
        this.innerHTML += ' ...';
        setTimeout(function() {
            this.innerHTML = label;
        }.bind(this), 1500);
    });

    document.getElementById('dashboard').addEventListener('click', function(event) {
        var ctrl = event.target;
        if (ctrl.classList.contains('twister')) {
            ctrl.nextElementSibling.style.display = ctrl.classList.toggle('open') ? 'block' : 'none';
            grid.div.style.marginLeft = Math.max(180, event.currentTarget.getBoundingClientRect().right + 8) + 'px';
        }
    });


    var radioGroup = {};

    function handleRadioClick(handler, event) {
        if (this.type === 'radio') {
            var lastRadio = radioGroup[this.name];
            if (lastRadio) {
                lastRadio.handler.call(lastRadio.ctrl);
            }
            radioGroup[this.name] = {ctrl: this, handler: handler};
        }
        handler.call(this, event);
    }

    function setProp() { // standard checkbox click handler
        var prop = grid.properties;
        var id = this.id;
        if (id[0] === '!') {
            if (this.type !== 'checkbox') {
                throw 'Expected inverse operator (!) on checkbox dashboard controls only but found on ' + this.type + '.';
            }
            id = id.substr(1);
            var inverse = true;
        }
        var keys = id.split('.');

        while (keys.length > 1) {
            prop = prop[keys.shift()];
        }

        switch (this.type) {
            case 'text':
                prop[keys.shift()] = this.value;
                break;
            case 'checkbox':
                prop[keys.shift()] = inverse ? !this.checked : this.checked;
                break;
        }

        grid.takeFocus();
        grid.behaviorChanged();
        grid.repaint();
    }

    function setSelectionProp() { // alternate checkbox click handler
        var ctrl;

        grid.selectionModel.clear();

        setProp.call(this);

        if (this.checked) {
            if (
                this.id === 'checkboxOnlyRowSelections' &&
                (ctrl = document.getElementById('autoSelectRows')).checked
            ) {
                alert('Note that autoSelectRows is ineffectual when checkboxOnlyRowSelections is on.');
            } else if (this.id === 'autoSelectRows') {
                if (
                    (ctrl = document.getElementById('checkboxOnlyRowSelections')).checked &&
                    confirm('Note that autoSelectRows is ineffectual when checkboxOnlyRowSelections is on.\n\nTurn off checkboxOnlyRowSelections?')
                ) {
                    ctrl.checked = false;
                    setProp.call(ctrl);
                }

                if (
                    (ctrl = document.getElementById('singleRowSelectionMode')).checked &&
                    confirm('Note that auto-selecting a range of rows by selecting a range of cells (with click + drag or shift + click) is not possible with singleRowSelectionMode is on.\n\nTurn off singleRowSelectionMode?')
                ) {
                    ctrl.checked = false;
                    setProp.call(ctrl);
                }
            }
        }
    }
};

},{}],5:[function(require,module,exports){
'use strict';

module.exports = function() {

    var demo = this,
        grid = demo.grid;

    grid.addEventListener('fin-button-pressed', function(e) {
        var cellEvent = e.detail;
        cellEvent.value = !cellEvent.value;
    });

    grid.addEventListener('fin-cell-enter', function(e) {
        var cellEvent = e.detail;

        //how to set the tooltip....
        grid.setAttribute('title', 'event name: "fin-cell-enter"\n' +
            'gridCell: { x: ' + cellEvent.gridCell.x + ', y: ' + cellEvent.gridCell.y + ' }\n' +
            'dataCell: { x: ' + cellEvent.dataCell.x + ', y: ' + cellEvent.dataCell.y + ' }\n' +
            'subgrid type: "' + cellEvent.subgrid.type + '"\n' +
            'subgrid name: ' + (cellEvent.subgrid.name ? '"' + cellEvent.subgrid.name + '"' : 'undefined')
        );
    });

    grid.addEventListener('fin-set-totals-value', function(e) {
        var detail = e.detail,
            areas = detail.areas || ['top', 'bottom'];

        areas.forEach(function(area) {
            var methodName = 'get' + area[0].toUpperCase() + area.substr(1) + 'Totals',
                totalsRow = grid.behavior.dataModel[methodName]();

            totalsRow[detail.y][detail.x] = detail.value;
        });

        grid.repaint();
    });

    /**
     * @summary Listen for certain key presses from grid or cell editor.
     * @desc NOTE: fincanvas's internal char map yields mixed case while fin-editor-key* events do not.
     * @return {boolean} Not handled.
     */
    function handleCursorKey(e) {
        var detail = e.detail,
            key = String.fromCharCode(detail.key).toUpperCase(),
            result = false; // means event handled herein

        if (detail.ctrl) {
            if (detail.shift) {
                switch (key) {
                    case '0': if (grid.stopEditing()) { grid.selectToViewportCell(0, 0); } break;
                    case '9': if (grid.stopEditing()) { grid.selectToFinalCell(); } break;
                    case '8': if (grid.stopEditing()) { grid.selectToFinalCellOfCurrentRow(); } break;
                    case '7': if (grid.stopEditing()) { grid.selectToFirstCellOfCurrentRow(); } break;
                    default: result = true;
                }
            } else {
                switch (key) {
                    case '0': if (grid.stopEditing()) { grid.selectViewportCell(0, 0); } break;
                    case '9': if (grid.stopEditing()) { grid.selectFinalCell(); } break;
                    case '8': if (grid.stopEditing()) { grid.selectFinalCellOfCurrentRow(); } break;
                    case '7': if (grid.stopEditing()) { grid.selectFirstCellOfCurrentRow(); } break;
                    default: result = true;
                }
            }
        }

        return result;
    }

    grid.addEventListener('fin-keydown', handleCursorKey);

    grid.addEventListener('fin-editor-keydown', function(e) {
        // var detail = e.detail,
        //     ke = detail.keyEvent;
        //
        // // more detail, please
        // detail.primitiveEvent = ke;
        // detail.key = ke.keyCode;
        // detail.shift = ke.shiftKey;
        //
        // handleCursorKey(e);
    });

    grid.addEventListener('fin-selection-changed', function(e) {

        if (e.detail.selections.length === 0) {
            console.log('no selections');
            return;
        }

        // to get the selected rows uncomment the below.....
        // console.log(grid.getRowSelectionMatrix());
        // console.log(grid.getRowSelection());

    });

    grid.addEventListener('fin-row-selection-changed', function(e) {
        var detail = e.detail;
        // Move cell selection with row selection
        var rows = detail.rows,
            selections = detail.selections;
        if (
            grid.properties.singleRowSelectionMode && // let's only attempt this when in this mode
            !grid.properties.multipleSelections && // and only when in single selection mode
            rows.length && // user just selected a row (must be single row due to mode we're in)
            selections.length  // there was a cell region selected (must be the only one)
        ) {
            var rect = grid.selectionModel.getLastSelection(), // the only cell selection
                x = rect.left,
                y = rows[0], // we know there's only 1 row selected
                width = rect.right - x,
                height = 0, // collapse the new region to occupy a single row
                fireSelectionChangedEvent = false;

            grid.selectionModel.select(x, y, width, height, fireSelectionChangedEvent);
            grid.repaint();
        }

        if (rows.length === 0) {
            console.log('no rows selected');
            return;
        }
        //we have a function call to create the selection matrix because
        //we don't want to create alot of needless garbage if the user
        //is just navigating around
        console.log(grid.getRowSelectionMatrix());
        console.log(grid.getRowSelection());
    });

    grid.addEventListener('fin-column-selection-changed', function(e) {
        if (e.detail.columns.length === 0) {
            console.log('no rows selected');
            return;
        }
        //we have a function call to create the selection matrix because
        //we don't want to create alot of needless garbage if the user
        //is just navigating around
        console.log(grid.getColumnSelectionMatrix());
        console.log(grid.getColumnSelection());
    });

    //uncomment to cancel editor popping up:
    // grid.addEventListener('fin-request-cell-edit', function(e) { e.preventDefault(); });

    //uncomment to cancel updating the model with the new data:
    // grid.addEventListener('fin-before-cell-edit', function(e) { e.preventDefault(); });
};

},{}],6:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports = function() {

    var demo = this,
        grid = demo.grid;

    var footInchPattern = /^\s*((((\d+)')?\s*((\d+)")?)|\d+)\s*$/;

    var footInchLocalizer = {
        format: function(value) {
            if (value != null) {
                var feet = Math.floor(value / 12);
                value = (feet ? feet + '\'' : '') + ' ' + (value % 12) + '"';
            } else {
                value = null;
            }
            return value;
        },
        parse: function(str) {
            var inches, feet,
                parts = str.match(footInchPattern);
            if (parts) {
                feet = parts[4];
                inches = parts[6];
                if (feet === undefined && inches === undefined) {
                    inches = Number(parts[1]);
                } else {
                    feet = Number(feet || 0);
                    inches = Number(inches || 0);
                    inches = 12 * feet + inches;
                }
            } else {
                inches = 0;
            }
            return inches;
        }
    };

    grid.localization.add('foot', footInchLocalizer);

    grid.localization.add('singdate', new grid.localization.DateFormatter('zh-SG'));

    grid.localization.add('pounds', new grid.localization.NumberFormatter('en-US', {
        style: 'currency',
        currency: 'USD'
    }));

    grid.localization.add('francs', new grid.localization.NumberFormatter('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }));

    grid.localization.add({
        name: 'hhmm', // alternative to having to hame localizer in `grid.localization.add`

        // returns formatted string from number
        format: function(mins) {
            var hh = Math.floor(mins / 60) % 12 || 12, // modulo 12 hrs with 0 becoming 12
                mm = (mins % 60 + 100 + '').substr(1, 2),
                AmPm = mins < demo.NOON ? 'AM' : 'PM';
            return hh + ':' + mm + ' ' + AmPm;
        },

        invalid: function(hhmm) {
            return !/^(0?[1-9]|1[0-2]):[0-5]\d$/.test(hhmm); // 12:59 max
        },

        // returns number from formatted string
        parse: function(hhmm) {
            var parts = hhmm.match(/^(\d+):(\d{2})$/);
            return Number(parts[1]) * 60 + Number(parts[2]);
        }
    });

    return grid;

};

},{}],7:[function(require,module,exports){
/* eslint-env browser */

'use strict';

window.onload = function() {
    window.demo = new Demo;
};

var Hypergrid = fin.Hypergrid;

function Demo() {
    var version = document.getElementById('version'),
        titleElement = document.querySelector('title');

    version.innerText = Hypergrid.prototype.version;
    titleElement.innerText = version.parentElement.innerText;

    var gridOptions = {
        // Because v3 defaults to use datasaur-local (which is still included in the build),
        // specifying it here is still optional, but may be required for v4.
        // Uncomment one of the following 2 lines to specify ("bring your own") data source:

        // dataModel: new (Hypergrid.require('datasaur-local'))(data.people1, getSchema(data.people1)),
        // DataModel: Hypergrid.require('datasaur-local'),

        data: this.data.people1,
        margin: { bottom: '17px', right: '17px' },
        plugins: this.plugins,
        // schema: myCustomSchema,
        state: { color: 'orange' }
    };

    var grid = new Hypergrid('div#hypergrid-example', gridOptions);

    Object.defineProperties(window, {
        grid: { get: function() { return grid; } },
        g: { get: function() { return grid; } },
        b: { get: function() { return grid.behavior; } },
        m: { get: function() { return grid.behavior.dataModel; } }
    });

    this.grid = grid;

    console.log('schema', grid.behavior.schema);

    this.initCellRenderers();
    this.initFormatters();
    this.initCellEditors();
    this.initEvents();
    this.initDashboard();
    this.initState();
}

Demo.prototype = {
    data: require('../../data/widedata'),
    initCellRenderers: require('./cellRenderers'),
    initFormatters: require('./formatters'),
    initCellEditors: require('./cellEditors'),
    initEvents: require('./events'),
    initDashboard: require('./dashboard'),
    initState: require('./setState'),

    plugins: require('fin-hypergrid-event-logger'),

    reset: function() {
        this.grid.reset();
        this.initEvents();
    },

    setData: function(data, options) {
        options = !data.length ? undefined : options || {
            schema: getSchema(data)
        };
        this.grid.setData(data, options);
    },

    toggleEmptyData: function toggleEmptyData() {
        var behavior = this.grid.behavior;

        if (!this.oldData) {
            this.oldData = {
                data: behavior.dataModel.data,
                schema: behavior.schema,
                activeColumns: behavior.getActiveColumns().map(function(column) { return column.index; })
            };
            //important to set top totals first
            setData([]);
        } else {
            //important to set top totals first
            this.setData(this.oldData.data, this.oldData.schema);
            behavior.setColumnIndexes(this.oldData.activeColumns);
            delete this.oldData;
        }
    },

    resetData: function() {
        this.setData(this.data.people1);
        this.initState();
    },

    set vent(start) {
        if (start) {
            this.grid.logStart();
        } else {
            this.grid.logStop();
        }
    }
};

},{"../../data/widedata":1,"./cellEditors":2,"./cellRenderers":3,"./dashboard":4,"./events":5,"./formatters":6,"./setState":8,"fin-hypergrid-event-logger":11}],8:[function(require,module,exports){
'use strict';

module.exports = function() {

    var demo = this,
        grid = demo.grid,
        schema = grid.behavior.schema,
        greenland = { color: '#116611', backgroundColor: '#e8ffe8', font: 'italic small garamond' };

    var state = {
        columnIndexes: [
            schema.lastName.index,
            schema.totalNumberOfPetsOwned.index,
            schema.height.index,
            schema.birthDate.index,
            schema.birthTime.index,
            schema.birthState.index,
            // schema.residenceState.index,
            schema.employed.index,
            // schema.firstName.index,
            schema.income.index,
            schema.travel.index,
            // schema.squareOfIncome.index
        ],

        noDataMessage: 'No Data to Display',
        backgroundColor: 'white',
        font: 'normal small garamond',
        rowStripes: [
            undefined,
            undefined,
            undefined,
            greenland,
            greenland,
            greenland
        ],

        fixedColumnCount: 1,
        fixedRowCount: 4,

        columnAutosizing: false,
        headerTextWrapping: true,

        halign: 'left',
        renderFalsy: true,

        scrollbarHoverOff: 'visible',
        scrollbarHoverOver: 'visible',
        columnHeaderBackgroundColor: 'pink',

        checkboxOnlyRowSelections: true,

        autoSelectRows: true,

        calculators: {
            Add10: add10.toString()
        },

        columns: {
            height: {
                halign: 'right',
                format: 'foot'
            },

            /* eslint-disable camelcase */
            last_name: {
                columnHeaderBackgroundColor: '#142B6F', //dark blue
                columnHeaderColor: 'white',
                columnHeaderHalign: 'left',
                rightIcon: 'down-rectangle',
                link: true
            },

            first_name: {

            },

            total_number_of_pets_owned: {
                halign: 'center',
                format: 'number',
                calculator: 'Add10',
                color: 'green'
            },

            birthDate: {
                format: 'singdate',
                rightIcon: 'calendar',
                //strikeThrough: true
            },

            birthTime: {
                halign: 'right',
                editor: 'time',
                format: 'hhmm'
            },

            birthState: {
                editor: 'colortext',
                rightIcon: 'down-rectangle'
            },

            residenceState: {
                rightIcon: 'down-rectangle'
            },

            employed: {
                halign: 'right',
                renderer: 'button',
                backgroundColor: 'white'
            },

            income: {
                halign: 'right',
                format: 'pounds'
            },

            travel: {
                halign: 'right',
                format: 'francs'
            }
        },

        /* Following `rows` and `cells` examples shows how to set row and cell properties declaratively,
         * useful for static grids when cell coordinates are known ahead of time.
         *
         * (There are as well several equivalent programmatic methods for setting cells props, such as
         * `cell.setProperty`,
         * `cell.setProperties`,
         * `behavior.setCellProperty`,
         * `behavior.setCellProperties`,
         * _etc._)
         *
         * Caveat: For dynamic grid data, when cell coordinates are *not* known at start up (when state is
         * usually applied), loading row and cell properties _with the data_ (as metadata) has advantages
         * and is, preferred especially for frequently changing rows and cells. In this paradigm, row and
         * cell properties are omitted here and the state object only loads grid and column properties.
         * (Metadata is supported in the data source when it implements `getRowMetaData` and `setRowMetaData`.)
         */
        rows: {
            header: { // subgrid key
                0: { // row index
                    // row properties
                    height: 40 // (height is the only supported row property at the current time)
                }
            }
        },
        cells: { // cell properties
            data: { // subgrid key
                16: { // row index
                    height: { // column name
                        // cell properties:
                        font: '10pt Tahoma',
                        color: 'lightblue',
                        backgroundColor: 'red',
                        halign: 'left'
                    }
                }
            }
        }
    };

    grid.setState(state);

    grid.takeFocus();

    demo.resetDashboard();
};

function add10(dataRow, columnName, subrow) {
    var val = dataRow[columnName];
    if (val.constructor === Array) { val = val[subrow]; }
    return val + 10;
}

},{}],9:[function(require,module,exports){
'use strict';

var catalog = require('object-catalog');
var find = require('match-point');
var Greylist = require('greylist');


var isDOM = (
    typeof window === 'object' &&
    Object.prototype.toString.call(window) === '[object Window]' &&
    typeof window.Node === 'function'
);

var isDomNode = isDOM ? function(obj) { return obj instanceof window.Node } : function() {};


/**
 * @summary Search an object's code for pattern matches.
 * @desc Searches all code in the visible execution context using the provided regex pattern, returning the entire pattern match.
 *
 * If capture groups are specified in the pattern, returns the last capture group match, unless `options.captureGroup` is defined, in which case returns the group with that index where `0` means the entire pattern, _etc._ (per `String.prototype.match`).
 *
 * @param {string|RegExp} pattern - Search argument.
 * Don't use global flag on RegExp; it's unnecessary and suppresses submatches of capture groups.
 *
 * @param [options]
 * @param {number} [options.captureGroup] - Iff defined, index of a specific capture group to return for each match.
 * @param {boolean} [options.recurse] - Equivalent to setting both `recurseOwn` and `recurseAncestors`.
 * @param {boolean} [options.recurseOwn] - Recurse own subobjects.
 * @param {boolean} [options.recurseAncestors] - Recurse subobjects of objects of the entire prototype chain.
 * @param {object} [options.greylist] - https://github.com/joneit/greylist
 * @param [options.greylist.white] - If given, only listed matches are included in the results.
 * @param [options.greylist.black] - If given, listed matches are excluded from the results.
 *
 * @param {object} [options.catalog] - https://github.com/joneit/object-catalog
 * @param {boolean} [options.catalog.own] - Only search own object; otherwise search own + entire prototype chain.
 * @param {object} [options.catalog.greylist] - https://github.com/joneit/greylist
 * @param [options.catalog.greylist.white] - If given, only listed members are cataloged.
 * @param [options.catalog.greylist.black] - If given, listed members are *not* cataloged.
 *
 * @returns {string[]} Pattern matches.
 */
function match(pattern, options, byGreylist, matches, scanned) {
    var topLevelCall = !matches;

    if (topLevelCall) {
        // this is the top-level (non-recursed) call so intialize:
        var greylist = new Greylist(options && options.greylist);
        byGreylist = greylist.test.bind(greylist);
        options = options || {};
        matches = [];
        scanned = [];
    }

    var root = this;
    var members = catalog.call(root, options.catalog);

    scanned.push(root);

    Object.keys(members).forEach(function (key) {
        var obj = members[key];
        var descriptor = Object.getOwnPropertyDescriptor(obj, key);

        if (descriptor.value === match) {
            return; // don't catalog self when found to have been mixed in
        }

        Object.keys(descriptor).forEach(function (propName) {
            var hits, prop = descriptor[propName];

            if (typeof prop === 'function') {
                // propName must be `get` or `set` or `value`
                hits = find(prop.toString(), pattern, options.captureGroup).filter(byGreylist);
                hits.forEach(function(hit) { matches.push(hit); });
            } else if (
                (options.recurse || options.recurseOwn && obj === root || options.recurseChain && obj !== root) &&
                typeof prop === 'object' &&
                !isDomNode(prop) && // don't search DOM objects
                scanned.indexOf(prop) < 0 // don't recurse on objects already scanned
            ) {
                // propName must be `value`
                match.call(prop, pattern, options, byGreylist, matches, scanned);
            }
        });
    });

    if (topLevelCall) {
        matches.sort();
    }

    return matches;
}

module.exports = match;
},{"greylist":12,"match-point":13,"object-catalog":14}],10:[function(require,module,exports){
'use strict';

function logEventObject(e) {
    this.log(e.type, '::', e);
}

function logDetail(e) {
    this.log(e.type, '::', e.detail);
}

function logScroll(e) {
    this.log(e.type, '::', e.detail.value);
}

function logCell(e) {
    var gCell = e.detail.gridCell;
    var dCell = e.detail.dataCell;
    this.log(e.type, '::',
        'grid-cell:', { x: gCell.x, y: gCell.y },
        'data-cell:', { x: dCell.x, y: dCell.y });
}

function logSelection(e) {
    this.log(e.type, '::', e.detail.rows, e.detail.columns, e.detail.selections);
}

function logRow(e) {
    var rowContext = e.detail.primitiveEvent.dataRow;
    this.log(e.type, '::', 'row-context:', rowContext);
}

module.exports = {
    'fin-cell-enter': logCell,
    'fin-click': logCell,
    'fin-double-click': logRow,
    'fin-selection-changed': logSelection,
    'fin-context-menu': logCell,

    'fin-scroll-x': logScroll,
    'fin-scroll-y': logScroll,

    'fin-row-selection-changed': logDetail,
    'fin-column-selection-changed': logDetail,
    'fin-editor-data-change': logDetail,
    'fin-editor-keyup': logDetail,
    'fin-editor-keypress': logDetail,
    'fin-editor-keydown': logDetail,
    'fin-groups-changed': logDetail,

    'fin-filter-applied': logEventObject,
    'fin-request-cell-edit': logEventObject,
    'fin-before-cell-edit': logEventObject,
    'fin-after-cell-edit': logEventObject
};

},{}],11:[function(require,module,exports){
'use strict';

var StarLog = require('starlog');

var eventLoggerPlugin = {

    start: function(options)
    {
        if (options && this.starlog) {
            this.starlog.stop(); // stop the old one before redefining it with new options object
        }

        if (!this.starlog || options) {
            options = Object.assign({}, options);

            // search grid object for "Event('yada-yada'" or "Event.call(this, 'yada-yada'"
            options.select = options.select || this;
            options.pattern = options.pattern || /Event(\.call\(this, |\()'(fin-[a-z-]+)'/;
            options.targets = options.targets || this.canvas.canvas;

            // mix options.listenerDictionary on top of some custom listeners
            options.listenerDictionary = Object.assign({}, require('./custom-listeners'), options.listenerDictionary);

            // mix fin-tick on top of options.match.greylist.black
            var black = ['fin-tick'];
            options.match = options.match || {};
            options.match.greylist = options.match.greylist || {};
            options.match.greylist.black = options.match.greylist.black ? black.concat(options.match.greylist.black) : black;

            this.starlog = new StarLog(options);
        }

        this.starlog.start();
    },

    stop: function() {
        this.starlog.stop();
    }

};

// Non-enumerable methods are not themselves installed:
Object.defineProperties(eventLoggerPlugin, {
    preinstall: {
        value: function(HypergridPrototype, BehaviorPrototype, methodPrefix) {
            install.call(this, HypergridPrototype, methodPrefix);
        }
    },

    install: {
        value: function(grid, methodPrefix) {
            install.call(this, grid, methodPrefix);
        }
    }
});

function install(target, methodPrefix) {
    if (methodPrefix === undefined) {
        methodPrefix = 'log';
    }
    Object.keys(this).forEach(function (key) {
        target[prefix(methodPrefix, key)] = this[key];
    }, this);
}

function prefix(prefix, name) {
    var capitalize = prefix.length && prefix[prefix.length - 1] !== '_';
    if (capitalize) {
        name = name.substr(0, 1).toUpperCase() + name.substr(1);
    }
    return prefix + name;
}

module.exports = eventLoggerPlugin;

},{"./custom-listeners":10,"starlog":15}],12:[function(require,module,exports){
'use strict';

/** Creates an object with a `test` method from optional whitelist and/or blacklist
 * @constructor
 * @param {object} [options] - If neither `white` nor `black` are given, all strings pass `test`.
 * @param [options.white] - If given, only listed strings pass `test`.
 * @param [options.black] - If given, listed strings fail `test`.
 */
function GreyList(options) {
    this.white = getFlatArrayOfRegexAndOrString(options && options.white);
    this.black = getFlatArrayOfRegexAndOrString(options && options.black);
}

GreyList.prototype.test = function(string) {
    this.string = string; // for match() use
    return (
        !(this.white && !this.white.some(match, this)) &&
        !(this.black && this.black.some(match, this))
    );
};

function match(pattern) {
    return typeof pattern.test === 'function'
        ? pattern.test(this.string) // typically a regex but could be anything that implements `test`
        : this.string === pattern + ''; // convert pattern to string even for edge cases
}

function getFlatArrayOfRegexAndOrString(array, flat) {
    if (!flat) {
        // this is the top-level (non-recursed) call so intialize:

        // `undefined` passes through without being converted to an array
        if (array === undefined) {
            return;
        }

        // arrayify given scalar string, regex, or object
        if (!Array.isArray(array)) {
            array = [array];
        }

        // initialize flat
        flat = [];
    }

    array.forEach(function (item) {
        // make sure all elements are either string or RegExp
        switch (Object.prototype.toString.call(item)) {
            case '[object String]':
            case '[object RegExp]':
                flat.push(item);
                break;
            case '[object Object]':
                // recurse on complex item (when an object or array)
                if (!Array.isArray(item)) {
                    // convert object into an array (of it's enumerable keys, but only when not undefined)
                    item = Object.keys(item).filter(function (key) { return item[key] !== undefined; });
                }
                getFlatArrayOfRegexAndOrString(item, flat);
                break;
            default:
                flat.push(item + ''); // convert to string
        }
    });

    return flat;
}

module.exports = GreyList;
},{}],13:[function(require,module,exports){
'use strict';

/**
 * @summary Find all pattern matches, return specified capture group for each.
 * @returns {string[]} An array containing all the pattern matches found in `string`.
 * The entire pattern match is returned unless the pattern contains one or more subgroups in which case the portion of the pattern matched by the last subgroup is returned unless `captureGroup` is defined.
 * @param {string} string
 * @param {RegExp} regex - Don't use global flag; it's unnecessary and suppresses submatches of capture groups.
 * @param {number} [captureGroup] - Iff defined, index of a specific capture group to return.
 */
module.exports = function(string, regex, captureGroup) {
    var matches = [];

    for (var match, i = 0; (match = string.substr(i).match(regex)); i += match.index + match[0].length) {
        matches.push(match[captureGroup === undefined ? match.length - 1 : captureGroup]);
    }

    return matches;
};

},{}],14:[function(require,module,exports){
'use strict';

var Greylist = require('greylist');

/** @summary Catalog the execution context object.
 * @returns {object} An object containing a member for each member of the execution context object
 * visible in the prototype chain (back to but not including Object), per whitelist and blacklist.
 * Each member's value is the object in the prototype chain where found.
 * @param [options]
 * @param {boolean} [options.own] - Restrict search for event type strings to own methods rather than entire prototype chain.
 * @param [options.greylist]
 * @param [options.greylist.white] - If given, only listed members are cataloged.
 * @param [options.greylist.black] - If given, listed members are *not* cataloged.
 */
module.exports = function objectCatalog(options) {
    options = options || {};

    var obj,
        catalog = Object.create(null), // KISS no prototype needed
        walkPrototypeChain = !options.own,
        greylist = new Greylist(options.greylist);

    for (obj = this; obj && obj !== Object.prototype; obj = walkPrototypeChain && Object.getPrototypeOf(obj)) {
        Object.getOwnPropertyNames(obj).forEach(function(key) {
            if (
                !(key in catalog) && // not shadowed by a member of a descendant object
                greylist.test(key) &&
                Object.getOwnPropertyDescriptor(obj, key).value !== objectCatalog
            ) {
                catalog[key] = obj;
            }
        });
    }

    return catalog;
};
},{"greylist":12}],15:[function(require,module,exports){
'use strict';

var match = require('code-match');

/** @typedef {object} starlogger
 * @desc An event listener for logging purposes, paired with the target(s) to listen to.
 * Each member of a logger object has the event string as its key and an object as its value.
 * @property {function} listener - A handler that logs the event.
 * @property {object|object[]} targets - A target or list of targets to attach the listener to.
 */

/** @typedef {object|object[]} eventTargets
 * Event target object(s) that implement `addEventListener` and `removeEventListener`,
 * typically a DOM node, but by no means limited to such.
 */

/** @typedef {string} eventType */

/** @typedef {object} starlogOptions
 *
 * @desc Must define `loggers`, `events`, or `pattern` and `select`; else error is thrown.
 *
 * @param {Object.<eventType, starlogger>} [loggers] - Logger dictionary.
 * @param {string[]} [events] - List of event strings from which to build a logger dictionary.
 * @param {object|object[]} [select] - Object or list of objects in which to search with `pattern`.
 * @param {RegExp} [pattern] - Event string pattern to search for in all visible getters, setters, and methods.
 * The results of the search are used to build a logger dictionary.
 * Example: `/'(fin-[a-z-]+)'/` means find all strings like `'fin-*'`, returning only the part inside the quotes.
 * See the README for additional examples.
 *
 * @param {function} [log] - Override {@link Starlog#log}.
 * @param {function} [listener] - Override {@link Starlog#listener}.
 * @param {object} [targets] - Override {@link Starlog#targets}.
 *
 * @param {Object.<eventType, function>} [listenerDictionary={}] - Custom listeners to override default listener.
 * @param {Object.<eventType, eventTargets>} [targetsDictionary={}] - Custom event target object(s) to override default targets.
 *
 * @param {object} [match] - https://github.com/joneit/code-match
 * @param {number} [match.captureGroup] - Iff defined, index of a specific capture group to return for each match.
 * @param {object} [match.greylist] - https://github.com/joneit/greylist
 * @param [match.greylist.white] - If given, only listed matches are included in the results.
 * @param [match.greylist.black] - If given, listed matches are excluded from the results.
 *
 * @param {object} [match.catalog] - https://github.com/joneit/object-catalog
 * @param {boolean} [match.catalog.own] - Only search own methods for event strings; otherwise entire prototype chain.
 * @param {object} [match.catalog.greylist] - https://github.com/joneit/greylist
 * @param [match.catalog.greylist.white] - If given, only listed members are cataloged.
 * @param [match.catalog.greylist.black] - If given, listed members are *not* cataloged.
 */

/**
 * @constructor
 * @summary Instance a logger.
 * @desc Consumes `options`, creating a dictionary of event strings in `this.events`.
 *
 * Sources for loggers:
 * * If `options.loggers` dictionary object is defined, deep clone it and make sure all members are logger objects, defaulting any missing members.
 * * Else if `options.events` (list of event strings) is defined, create an object with those keys, listeners, and targets.
 * * Else if `options.pattern` is defined, code found in the execution context object is searched for event strings that match it (per `options.match`).
 *
 * Events specified with `options.events` and `options.pattern` log using the default listener and event targets:
 * * `StarLog.prototype.listener`, unless overridden, just calls `this.log()` with the event string, which is sufficient for casual usage.
 * Override it by defining `options.listener` or directly by reassigning to `StarLog.prototype.listener` before instantiation.
 * * `StarLog.prototype.targets`, unless overridden, is `window.document` (when available),
 * which is only really useful if the event is dispatched directly to (or is allowed to bubble up to) `document`.
 * Override it by defining `options.targets` or directly by reassigning to `StarLog.prototype.targets` before instantiation.
 *
 * Events specified with `options.loggers` can each specify their own listener and/or targets, but if not specified, they too will also use the above defaults.
 *
 * @param {starlogOptions} [options]
 */
function StarLog(options) {
    options = options || {};

    // Override prototype definitions if and only if supplied in options
    ['log', 'targets', 'listener'].forEach(function(key) {
        if (options[key]) { this[key] = options[key]; }
    }, this);

    var defaultTarget = options.targets || this.targets,
        defaultListener = options.listener || this.listener,
        listenerDictionary = options.listenerDictionary || {},
        targetsDictionary = options.targetsDictionary || {},
        loggers = options.loggers,
        eventStrings;

    if (loggers) {
        eventStrings = Object.keys(loggers);
    } else if (options.events) {
        loggers = {};
        eventStrings = options.events;
    } else if (options.pattern && options.select) {
        loggers = {};
        eventStrings = arrayify(options.select).reduce(function(matches, object) {
            match.call(object, options.pattern, options.match).forEach(function (match) {
                if (matches.indexOf(match) < 0) {
                    matches.push(match);
                }
            });
            return matches;
        }, []);
    } else {
        throw new Error('Expected `options.loggers`, `options.events`, or `options.pattern` and `options.select` to be defined.');
    }

    var starlog = this;

    /**
     * Dictionary of event strings with listener and target(s).
     * @type {Object.<eventType, starlogger>}
     */
    this.events = eventStrings.reduce(function(clone, eventString) {
        var logger = Object.assign({}, loggers[eventString]); // clone each logger

        // bind the listener to starlog for `this.log` access to Starlog#log from within listener
        logger.listener = (logger.listener || listenerDictionary[eventString] || defaultListener).bind(starlog);
        logger.targets = arrayify(logger.targets || targetsDictionary[eventString] || defaultTarget);

        clone[eventString] = logger;

        return clone;
    }, {});
}

StarLog.prototype = {
    constructor: StarLog.prototype.constructor,

    /**
     * @type {function}
     * @default console.log.bind(console)
     */
    log: console.log.bind(console),

    /**
     * @type {function}
     * @default function(e) { this.log(e.type); };
     */
    listener: function(e) {
        this.log(e.type);
    },

    /**
     * @type {object}
     * @default window.document
     */
    targets: typeof window === 'object' && window.document,

    /**
     * @method Starlog#start
     * @summary Start logging events.
     * @desc Add new event listeners for logging purposes.
     * Old event listeners, if any, are removed first, before adding new ones.
     */
    start: function () {
        this.stop();
        eventListener(this.events, 'add');
    },

    /**
     * @method Starlog#stop
     * @summary Stop logging events.
     * @desc Event listeners are removed from targets and deleted.
     */
    stop: function () {
        eventListener(this.events, 'remove');
    }
};

function eventListener(dictionary, methodPrefix) {
    if (!dictionary) {
        return;
    }

    var method = methodPrefix + 'EventListener';

    Object.keys(dictionary).forEach(function(eventType) {
        var eventLogger = dictionary[eventType];
        eventLogger.targets.forEach(function(target) {
            target[method](eventType, eventLogger.listener);
        });
    });
}

function arrayify(x) {
    return Array.isArray(x) ? x : [x];
}

module.exports = StarLog;
},{"code-match":9}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImRlbW8vZGF0YS93aWRlZGF0YS5qcyIsImRlbW8vanMvdGVzdGJlbmNoL2NlbGxFZGl0b3JzLmpzIiwiZGVtby9qcy90ZXN0YmVuY2gvY2VsbFJlbmRlcmVycy5qcyIsImRlbW8vanMvdGVzdGJlbmNoL2Rhc2hib2FyZC5qcyIsImRlbW8vanMvdGVzdGJlbmNoL2V2ZW50cy5qcyIsImRlbW8vanMvdGVzdGJlbmNoL2Zvcm1hdHRlcnMuanMiLCJkZW1vL2pzL3Rlc3RiZW5jaC9pbmRleC5qcyIsImRlbW8vanMvdGVzdGJlbmNoL3NldFN0YXRlLmpzIiwibm9kZV9tb2R1bGVzL2NvZGUtbWF0Y2gvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZmluLWh5cGVyZ3JpZC1ldmVudC1sb2dnZXIvY3VzdG9tLWxpc3RlbmVycy5qcyIsIm5vZGVfbW9kdWxlcy9maW4taHlwZXJncmlkLWV2ZW50LWxvZ2dlci9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9ncmV5bGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9tYXRjaC1wb2ludC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9vYmplY3QtY2F0YWxvZy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zdGFybG9nL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBudW1Sb3dzID0gMTAwMDA7XG5cbnZhciBmaXJzdE5hbWVzID0gWycnLCAnT2xpdmlhJywgJ1NvcGhpYScsICdBdmEnLCAnSXNhYmVsbGEnLCAnQm95JywgJ0xpYW0nLCAnTm9haCcsICdFdGhhbicsICdNYXNvbicsICdMb2dhbicsICdNb2UnLCAnTGFycnknLCAnQ3VybHknLCAnU2hlbXAnLCAnR3JvdWNobycsICdIYXJwbycsICdDaGljbycsICdaZXBwbycsICdTdGFubGV5JywgJ0hhcmR5J107XG52YXIgbGFzdE5hbWVzID0gWycnLCAnV2lydHMnLCAnT25laWwnLCAnU21pdGgnLCAnQmFyYmFyb3NhJywgJ1NvcHJhbm8nLCAnR290dGknLCAnQ29sdW1ibycsICdMdWNpYW5vJywgJ0RvZXJyZScsICdEZVBlbmEnXTtcbnZhciBtb250aHMgPSBbJzAxJywgJzAyJywgJzAzJywgJzA0JywgJzA1JywgJzA2JywgJzA3JywgJzA4JywgJzA5JywgJzEwJywgJzExJywgJzEyJ107XG52YXIgZGF5cyA9IFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInLCAnMTMnLCAnMTQnLCAnMTUnLCAnMTYnLCAnMTcnLCAnMTgnLCAnMTknLCAnMjAnLCAnMjEnLCAnMjInLCAnMjMnLCAnMjQnLCAnMjUnLCAnMjYnLCAnMjcnLCAnMjgnLCAnMjknLCAnMzAnXTtcbnZhciBzdGF0ZXMgPSBbJycsICdBbGFiYW1hJywgJ0FsYXNrYScsICdBcml6b25hJywgJ0Fya2Fuc2FzJywgJ0NhbGlmb3JuaWEnLCAnQ29sb3JhZG8nLCAnQ29ubmVjdGljdXQnLCAnRGVsYXdhcmUnLCAnRmxvcmlkYScsICdHZW9yZ2lhJywgJ0hhd2FpaScsICdJZGFobycsICdJbGxpbm9pcycsICdJbmRpYW5hJywgJ0lvd2EnLCAnS2Fuc2FzJywgJ0tlbnR1Y2t5JywgJ0xvdWlzaWFuYScsICdNYWluZScsICdNYXJ5bGFuZCcsICdNYXNzYWNodXNldHRzJywgJ01pY2hpZ2FuJywgJ01pbm5lc290YScsICdNaXNzaXNzaXBwaScsICdNaXNzb3VyaScsICdNb250YW5hJywgJ05lYnJhc2thJywgJ05ldmFkYScsICdOZXcgSGFtcHNoaXJlJywgJ05ldyBKZXJzZXknLCAnTmV3IE1leGljbycsICdOZXcgWW9yaycsICdOb3J0aCBDYXJvbGluYScsICdOb3J0aCBEYWtvdGEnLCAnT2hpbycsICdPa2xhaG9tYScsICdPcmVnb24nLCAnUGVubnN5bHZhbmlhJywgJ1Job2RlIElzbGFuZCcsICdTb3V0aCBDYXJvbGluYScsICdTb3V0aCBEYWtvdGEnLCAnVGVubmVzc2VlJywgJ1RleGFzJywgJ1V0YWgnLCAnVmVybW9udCcsICdWaXJnaW5pYScsICdXYXNoaW5ndG9uJywgJ1dlc3QgVmlyZ2luaWEnLCAnV2lzY29uc2luJywgJ1d5b21pbmcnXTtcblxudmFyIHJhbmRvbUZ1bmMgPSBNYXRoLnJhbmRvbTtcbi8vdmFyIHJhbmRvbUZ1bmMgPSBybmQ7XG5cbnZhciBybmQgPSBmdW5jdGlvbiAobWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IocmFuZG9tRnVuYygpICogbWF4KTtcbn1cblxudmFyIHJhbmRvbVBlcnNvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmaXJzdE5hbWUgPSBNYXRoLnJvdW5kKChmaXJzdE5hbWVzLmxlbmd0aCAtIDEpICogcmFuZG9tRnVuYygpKTtcbiAgICAvL3ZhciBsYXN0TmFtZSA9ICdhJyArIHJhbmRvbUZ1bmMoKSArICdiJztcbiAgICB2YXIgbGFzdE5hbWUgPSBNYXRoLnJvdW5kKChsYXN0TmFtZXMubGVuZ3RoIC0gMSkgKiByYW5kb21GdW5jKCkpO1xuICAgIHZhciBwZXRzID0gTWF0aC5yb3VuZCgxMCAqIHJhbmRvbUZ1bmMoKSk7XG4gICAgdmFyIGhlaWdodCA9IDUwICsgTWF0aC5yb3VuZCg0MCAqIHJhbmRvbUZ1bmMoKSk7XG4gICAgdmFyIGJpcnRoeWVhciA9IDE5MDAgKyBNYXRoLnJvdW5kKHJhbmRvbUZ1bmMoKSAqIDExNCk7XG4gICAgdmFyIGJpcnRobW9udGggPSBNYXRoLnJvdW5kKHJhbmRvbUZ1bmMoKSAqIDExKTtcbiAgICB2YXIgYmlydGhkYXkgPSBNYXRoLnJvdW5kKHJhbmRvbUZ1bmMoKSAqIDI5KTtcbiAgICB2YXIgYmlydGhUaW1lID0gTWF0aC5yb3VuZChyYW5kb21GdW5jKCkgKiA2MCAqIDI0KTtcbiAgICB2YXIgYmlydGhzdGF0ZSA9IE1hdGgucm91bmQocmFuZG9tRnVuYygpICogKHN0YXRlcy5sZW5ndGggLSAxKSk7XG4gICAgdmFyIHJlc2lkZW5jZXN0YXRlID0gTWF0aC5yb3VuZChyYW5kb21GdW5jKCkgKiAoc3RhdGVzLmxlbmd0aCAtIDEpKTtcbiAgICB2YXIgdHJhdmVsID0gcmFuZG9tRnVuYygpICogMTAwMDtcbiAgICB2YXIgaW5jb21lID0gcmFuZG9tRnVuYygpICogMTAwMDAwO1xuICAgIHZhciBlbXBsb3llZCA9IE1hdGgucm91bmQocmFuZG9tRnVuYygpKTtcblxuICAgIC8vVXNlIHRoaXMgdG8gdGVzdCBTcGFya2xpbmUgb3IgU3BhcmtiYXJcbiAgICB2YXIgc3BhcmtEYXRhID0gIChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBiYXJSYW5kb21PZmZzZXRzID0gW107XG4gICAgICAgIC8vZm9yICh2YXIgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgIC8vICAgIGJhclJhbmRvbU9mZnNldHMucHVzaChbXSk7XG5cbiAgICAgICAgZm9yICh2YXIgciA9IDA7IHIgPCAxMDsgcisrKSB7XG4gICAgICAgICAgICBiYXJSYW5kb21PZmZzZXRzLnB1c2goMTAgLSBybmQoMjApKTtcbiAgICAgICAgfVxuICAgICAgICAvL31cbiAgICAgICAgcmV0dXJuIGJhclJhbmRvbU9mZnNldHNcbiAgICB9KSgpXG4gICAgdmFyIHNsaWRlckRhdGEgPSBNYXRoLnJvdW5kKHJhbmRvbUZ1bmMoKSAqIDExKTtcbiAgICB2YXIgcGVyc29uID0ge1xuICAgICAgICBsYXN0X25hbWU6IGxhc3ROYW1lc1tsYXN0TmFtZV0sIC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZXNbZmlyc3ROYW1lXSwgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgdG90YWxfbnVtYmVyX29mX3BldHNfb3duZWQ6IHBldHMsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICBiaXJ0aERhdGU6IG5ldyBEYXRlKGJpcnRoeWVhciArICctJyArIG1vbnRoc1tiaXJ0aG1vbnRoXSArICctJyArIGRheXNbYmlydGhkYXldKSxcbiAgICAgICAgYmlydGhUaW1lOiBiaXJ0aFRpbWUsXG4gICAgICAgIGJpcnRoU3RhdGU6IHN0YXRlc1tiaXJ0aHN0YXRlXSxcbiAgICAgICAgcmVzaWRlbmNlU3RhdGU6IHN0YXRlc1tyZXNpZGVuY2VzdGF0ZV0sXG4gICAgICAgIGVtcGxveWVkOiBlbXBsb3llZCA9PT0gMSxcbiAgICAgICAgaW5jb21lOiBpbmNvbWUsXG4gICAgICAgIHRyYXZlbDogdHJhdmVsLFxuICAgICAgICBzcXVhcmVPZkluY29tZTogMCxcblxuICAgICAgICBvbmVfbGFzdF9uYW1lOiBsYXN0TmFtZXNbbGFzdE5hbWVdLCAvL2pzaGludCBpZ25vcmU6bGluZVxuICAgICAgICBvbmVfZmlyc3RfbmFtZTogZmlyc3ROYW1lc1tmaXJzdE5hbWVdLCAvL2pzaGludCBpZ25vcmU6bGluZVxuICAgICAgICBvbmVfcGV0czogcGV0cyxcbiAgICAgICAgb25lX2hlaWdodDogaGVpZ2h0LFxuICAgICAgICBvbmVfYmlydGhEYXRlOiBiaXJ0aHllYXIgKyAnLScgKyBtb250aHNbYmlydGhtb250aF0gKyAnLScgKyBkYXlzW2JpcnRoZGF5XSxcbiAgICAgICAgb25lX2JpcnRoU3RhdGU6IHN0YXRlc1tiaXJ0aHN0YXRlXSxcbiAgICAgICAgb25lX2JpcnRoVGltZTogYmlydGhUaW1lLFxuICAgICAgICBvbmVfcmVzaWRlbmNlU3RhdGU6IHN0YXRlc1tyZXNpZGVuY2VzdGF0ZV0sXG4gICAgICAgIG9uZV9lbXBsb3llZDogZW1wbG95ZWQgPT09IDEsXG4gICAgICAgIG9uZV9pbmNvbWU6IGluY29tZSxcbiAgICAgICAgb25lX3RyYXZlbDogdHJhdmVsLFxuICAgICAgICBvbmVfc3F1YXJlT2ZJbmNvbWU6IDAsXG5cbiAgICAgICAgdHdvX2xhc3RfbmFtZTogbGFzdE5hbWVzW2xhc3ROYW1lXSwgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgdHdvX2ZpcnN0X25hbWU6IGZpcnN0TmFtZXNbZmlyc3ROYW1lXSwgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgdHdvX3BldHM6IHBldHMsXG4gICAgICAgIHR3b19oZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgdHdvX2JpcnRoRGF0ZTogYmlydGh5ZWFyICsgJy0nICsgbW9udGhzW2JpcnRobW9udGhdICsgJy0nICsgZGF5c1tiaXJ0aGRheV0sXG4gICAgICAgIHR3b19iaXJ0aFN0YXRlOiBzdGF0ZXNbYmlydGhzdGF0ZV0sXG4gICAgICAgIHR3b19iaXJ0aFRpbWU6IGJpcnRoVGltZSxcbiAgICAgICAgdHdvX3Jlc2lkZW5jZVN0YXRlOiBzdGF0ZXNbcmVzaWRlbmNlc3RhdGVdLFxuICAgICAgICB0d29fZW1wbG95ZWQ6IGVtcGxveWVkID09PSAxLFxuICAgICAgICB0d29faW5jb21lOiBpbmNvbWUsXG4gICAgICAgIHR3b190cmF2ZWw6IHRyYXZlbCxcbiAgICAgICAgdHdvX3NxdWFyZU9mSW5jb21lOiAwLFxuXG4gICAgICAgIHRocmVlX2xhc3RfbmFtZTogbGFzdE5hbWVzW2xhc3ROYW1lXSwgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgdGhyZWVfZmlyc3RfbmFtZTogZmlyc3ROYW1lc1tmaXJzdE5hbWVdLCAvL2pzaGludCBpZ25vcmU6bGluZVxuICAgICAgICB0aHJlZV9wZXRzOiBwZXRzLFxuICAgICAgICB0aHJlZV9oZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgdGhyZWVfYmlydGhEYXRlOiBiaXJ0aHllYXIgKyAnLScgKyBtb250aHNbYmlydGhtb250aF0gKyAnLScgKyBkYXlzW2JpcnRoZGF5XSxcbiAgICAgICAgdGhyZWVfYmlydGhTdGF0ZTogc3RhdGVzW2JpcnRoc3RhdGVdLFxuICAgICAgICB0aHJlZV9iaXJ0aFRpbWU6IGJpcnRoVGltZSxcbiAgICAgICAgdGhyZWVfcmVzaWRlbmNlU3RhdGU6IHN0YXRlc1tyZXNpZGVuY2VzdGF0ZV0sXG4gICAgICAgIHRocmVlX2VtcGxveWVkOiBlbXBsb3llZCA9PT0gMSxcbiAgICAgICAgdGhyZWVfaW5jb21lOiBpbmNvbWUsXG4gICAgICAgIHRocmVlX3RyYXZlbDogdHJhdmVsLFxuICAgICAgICB0aHJlZV9zcXVhcmVPZkluY29tZTogMCxcblxuICAgICAgICBmb3VyX2xhc3RfbmFtZTogbGFzdE5hbWVzW2xhc3ROYW1lXSwgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgZm91cl9maXJzdF9uYW1lOiBmaXJzdE5hbWVzW2ZpcnN0TmFtZV0sIC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIGZvdXJfcGV0czogcGV0cyxcbiAgICAgICAgZm91cl9oZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgZm91cl9iaXJ0aERhdGU6IGJpcnRoeWVhciArICctJyArIG1vbnRoc1tiaXJ0aG1vbnRoXSArICctJyArIGRheXNbYmlydGhkYXldLFxuICAgICAgICBmb3VyX2JpcnRoU3RhdGU6IHN0YXRlc1tiaXJ0aHN0YXRlXSxcbiAgICAgICAgZm91cl9iaXJ0aFRpbWU6IGJpcnRoVGltZSxcbiAgICAgICAgZm91cl9yZXNpZGVuY2VTdGF0ZTogc3RhdGVzW3Jlc2lkZW5jZXN0YXRlXSxcbiAgICAgICAgZm91cl9lbXBsb3llZDogZW1wbG95ZWQgPT09IDEsXG4gICAgICAgIGZvdXJfaW5jb21lOiBpbmNvbWUsXG4gICAgICAgIGZvdXJfdHJhdmVsOiB0cmF2ZWwsXG4gICAgICAgIGZvdXJfc3F1YXJlT2ZJbmNvbWU6IDAsXG5cbiAgICAgICAgZml2ZV9sYXN0X25hbWU6IGxhc3ROYW1lc1tsYXN0TmFtZV0sIC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIGZpdmVfZmlyc3RfbmFtZTogZmlyc3ROYW1lc1tmaXJzdE5hbWVdLCAvL2pzaGludCBpZ25vcmU6bGluZVxuICAgICAgICBmaXZlX3BldHM6IHBldHMsXG4gICAgICAgIGZpdmVfaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIGZpdmVfYmlydGhEYXRlOiBiaXJ0aHllYXIgKyAnLScgKyBtb250aHNbYmlydGhtb250aF0gKyAnLScgKyBkYXlzW2JpcnRoZGF5XSxcbiAgICAgICAgZml2ZV9iaXJ0aFN0YXRlOiBzdGF0ZXNbYmlydGhzdGF0ZV0sXG4gICAgICAgIGZpdmVfYmlydGhUaW1lOiBiaXJ0aFRpbWUsXG4gICAgICAgIGZpdmVfcmVzaWRlbmNlU3RhdGU6IHN0YXRlc1tyZXNpZGVuY2VzdGF0ZV0sXG4gICAgICAgIGZpdmVfZW1wbG95ZWQ6IGVtcGxveWVkID09PSAxLFxuICAgICAgICBmaXZlX2luY29tZTogaW5jb21lLFxuICAgICAgICBmaXZlX3RyYXZlbDogdHJhdmVsLFxuICAgICAgICBmaXZlX3NxdWFyZU9mSW5jb21lOiAwLFxuXG4gICAgICAgIHNpeF9sYXN0X25hbWU6IGxhc3ROYW1lc1tsYXN0TmFtZV0sIC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIHNpeF9maXJzdF9uYW1lOiBmaXJzdE5hbWVzW2ZpcnN0TmFtZV0sIC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIHNpeF9wZXRzOiBwZXRzLFxuICAgICAgICBzaXhfaGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHNpeF9iaXJ0aERhdGU6IGJpcnRoeWVhciArICctJyArIG1vbnRoc1tiaXJ0aG1vbnRoXSArICctJyArIGRheXNbYmlydGhkYXldLFxuICAgICAgICBzaXhfYmlydGhTdGF0ZTogc3RhdGVzW2JpcnRoc3RhdGVdLFxuICAgICAgICBzaXhfYmlydGhUaW1lOiBiaXJ0aFRpbWUsXG4gICAgICAgIHNpeF9yZXNpZGVuY2VTdGF0ZTogc3RhdGVzW3Jlc2lkZW5jZXN0YXRlXSxcbiAgICAgICAgc2l4X2VtcGxveWVkOiBlbXBsb3llZCA9PT0gMSxcbiAgICAgICAgc2l4X2luY29tZTogaW5jb21lLFxuICAgICAgICBzaXhfdHJhdmVsOiB0cmF2ZWwsXG4gICAgICAgIHNpeF9zcXVhcmVPZkluY29tZTogMCxcblxuICAgICAgICBzZXZlbl9sYXN0X25hbWU6IGxhc3ROYW1lc1tsYXN0TmFtZV0sIC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIHNldmVuX2ZpcnN0X25hbWU6IGZpcnN0TmFtZXNbZmlyc3ROYW1lXSwgLy9qc2hpbnQgaWdub3JlOmxpbmVcbiAgICAgICAgc2V2ZW5fcGV0czogcGV0cyxcbiAgICAgICAgc2V2ZW5faGVpZ2h0OiBoZWlnaHQsXG4gICAgICAgIHNldmVuX2JpcnRoRGF0ZTogYmlydGh5ZWFyICsgJy0nICsgbW9udGhzW2JpcnRobW9udGhdICsgJy0nICsgZGF5c1tiaXJ0aGRheV0sXG4gICAgICAgIHNldmVuX2JpcnRoU3RhdGU6IHN0YXRlc1tiaXJ0aHN0YXRlXSxcbiAgICAgICAgc2V2ZW5fYmlydGhUaW1lOiBiaXJ0aFRpbWUsXG4gICAgICAgIHNldmVuX3Jlc2lkZW5jZVN0YXRlOiBzdGF0ZXNbcmVzaWRlbmNlc3RhdGVdLFxuICAgICAgICBzZXZlbl9lbXBsb3llZDogZW1wbG95ZWQgPT09IDEsXG4gICAgICAgIHNldmVuX2luY29tZTogaW5jb21lLFxuICAgICAgICBzZXZlbl90cmF2ZWw6IHRyYXZlbCxcbiAgICAgICAgc2V2ZW5fc3F1YXJlT2ZJbmNvbWU6IDAsXG5cbiAgICAgICAgZWlnaHRfbGFzdF9uYW1lOiBsYXN0TmFtZXNbbGFzdE5hbWVdLCAvL2pzaGludCBpZ25vcmU6bGluZVxuICAgICAgICBlaWdodF9maXJzdF9uYW1lOiBmaXJzdE5hbWVzW2ZpcnN0TmFtZV0sIC8vanNoaW50IGlnbm9yZTpsaW5lXG4gICAgICAgIGVpZ2h0X3BldHM6IHBldHMsXG4gICAgICAgIGVpZ2h0X2hlaWdodDogaGVpZ2h0LFxuICAgICAgICBlaWdodF9iaXJ0aERhdGU6IGJpcnRoeWVhciArICctJyArIG1vbnRoc1tiaXJ0aG1vbnRoXSArICctJyArIGRheXNbYmlydGhkYXldLFxuICAgICAgICBlaWdodF9iaXJ0aFN0YXRlOiBzdGF0ZXNbYmlydGhzdGF0ZV0sXG4gICAgICAgIGVpZ2h0X2JpcnRoVGltZTogYmlydGhUaW1lLFxuICAgICAgICBlaWdodF9yZXNpZGVuY2VTdGF0ZTogc3RhdGVzW3Jlc2lkZW5jZXN0YXRlXSxcbiAgICAgICAgZWlnaHRfZW1wbG95ZWQ6IGVtcGxveWVkID09PSAxLFxuICAgICAgICBlaWdodF9pbmNvbWU6IGluY29tZSxcbiAgICAgICAgZWlnaHRfdHJhdmVsOiB0cmF2ZWwsXG4gICAgICAgIGVpZ2h0X3NxdWFyZU9mSW5jb21lOiAwLFxuICAgIH07XG4gICAgcGVyc29uLnNxdWFyZU9mSW5jb21lID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQocGVyc29uLmluY29tZSk7XG4gICAgfVxuICAgIHJldHVybiBwZXJzb247XG59O1xuXG52YXIgZGF0YSA9IGV4cG9ydHMucGVvcGxlMiA9IFtdO1xuZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Sb3dzOyBpKyspIHtcbiAgICBkYXRhLnB1c2gocmFuZG9tUGVyc29uKCkpO1xufVxuXG5kYXRhID0gZXhwb3J0cy5wZW9wbGUxID0gW107XG5mb3IgKHZhciBpID0gMDsgaSA8IG51bVJvd3MvMjsgaSsrKSB7XG4gICAgZGF0YS5wdXNoKHJhbmRvbVBlcnNvbigpKTtcbn1cblxuZXhwb3J0cy5zdGF0ZXMgPSBzdGF0ZXM7XG5leHBvcnRzLmZpcnN0TmFtZXMgPSBmaXJzdE5hbWVzO1xuZXhwb3J0cy5sYXN0TmFtZXMgPSBsYXN0TmFtZXM7XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRlbW8gPSB0aGlzLFxuICAgICAgICBncmlkID0gZGVtby5ncmlkLFxuICAgICAgICBzY2hlbWEgPSBncmlkLmJlaGF2aW9yLnNjaGVtYSxcbiAgICAgICAgQ2VsbEVkaXRvciA9IGdyaWQuY2VsbEVkaXRvcnMuQmFzZUNsYXNzLFxuICAgICAgICBUZXh0ZmllbGQgPSBncmlkLmNlbGxFZGl0b3JzLmdldCgndGV4dGZpZWxkJyksXG4gICAgICAgIENvbG9yVGV4dCA9IFRleHRmaWVsZC5leHRlbmQoJ2NvbG9yVGV4dCcsIHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbGFuZz1cInt7bG9jYWxlfX1cIiBzdHlsZT1cImNvbG9yOnt7dGV4dENvbG9yfX1cIj4nXG4gICAgICAgIH0pO1xuXG4gICAgZ3JpZC5jZWxsRWRpdG9ycy5hZGQoQ29sb3JUZXh0KTtcblxuICAgIHZhciBUaW1lID0gVGV4dGZpZWxkLmV4dGVuZCgnVGltZScsIHtcbiAgICAgICAgdGVtcGxhdGU6IFtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaHlwZXJncmlkLXRleHRmaWVsZFwiIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtcIj4nLFxuICAgICAgICAgICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBsYW5nPVwie3tsb2NhbGV9fVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDsgd2lkdGg6NzUlOyB0ZXh0LWFsaWduOnJpZ2h0OyBib3JkZXI6MDsgcGFkZGluZzowOyBvdXRsaW5lOjA7IGZvbnQtc2l6ZTppbmhlcml0OyBmb250LXdlaWdodDppbmhlcml0OycgK1xuICAgICAgICAgICAgJ3t7c3R5bGV9fVwiPicsXG4gICAgICAgICAgICAnICAgIDxzcGFuPkFNPC9zcGFuPicsXG4gICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblxuICAgICAgICAgICAgLy8gRmxpcCBBTS9QTSBvbiBhbnkgY2xpY2tcbiAgICAgICAgICAgIHRoaXMuZWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVyaWRpYW4udGV4dENvbnRlbnQgPSB0aGlzLm1lcmlkaWFuLnRleHRDb250ZW50ID09PSAnQU0nID8gJ1BNJyA6ICdBTSc7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gaWdub3JlIGNsaWNrcyBpbiB0aGUgdGV4dCBmaWVsZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQub25mb2N1cyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5vdXRsaW5lID0gdGhpcy5vdXRsaW5lID0gdGhpcy5vdXRsaW5lIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkub3V0bGluZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUub3V0bGluZSA9IDA7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Lm9uYmx1ciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLm91dGxpbmUgPSAwO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEVkaXRvclZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgQ2VsbEVkaXRvci5wcm90b3R5cGUuc2V0RWRpdG9yVmFsdWUuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSB0aGlzLmlucHV0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gcGFydHNbMF07XG4gICAgICAgICAgICB0aGlzLm1lcmlkaWFuLnRleHRDb250ZW50ID0gcGFydHNbMV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RWRpdG9yVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IENlbGxFZGl0b3IucHJvdG90eXBlLmdldEVkaXRvclZhbHVlLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWVyaWRpYW4udGV4dENvbnRlbnQgPT09ICdQTScpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBkZW1vLk5PT047XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGdyaWQuY2VsbEVkaXRvcnMuYWRkKFRpbWUpO1xuXG4gICAgLy8gVXNlZCBieSB0aGUgY2VsbFByb3ZpZGVyLlxuICAgIC8vIGBudWxsYCBtZWFucyBjb2x1bW4ncyBkYXRhIGNlbGxzIGFyZSBub3QgZWRpdGFibGUuXG4gICAgdmFyIGVkaXRvclR5cGVzID0gW1xuICAgICAgICBudWxsLFxuICAgICAgICAndGV4dGZpZWxkJyxcbiAgICAgICAgJ3RleHRmaWVsZCcsXG4gICAgICAgICd0ZXh0ZmllbGQnLFxuICAgICAgICBudWxsLFxuICAgICAgICAndGltZScsXG4gICAgICAgICdjaG9pY2UnLFxuICAgICAgICAnY2hvaWNlJyxcbiAgICAgICAgJ2Nob2ljZScsXG4gICAgICAgICd0ZXh0ZmllbGQnLFxuICAgICAgICAndGV4dGZpZWxkJyxcbiAgICAgICAgJ3RleHRmaWVsZCdcbiAgICBdO1xuXG4gICAgLy8gT3ZlcnJpZGUgdG8gYXNzaWduIHRoZSB0aGUgY2VsbCBlZGl0b3JzLlxuICAgIGdyaWQuYmVoYXZpb3IuZGF0YU1vZGVsLmdldENlbGxFZGl0b3JBdCA9IGZ1bmN0aW9uKHgsIHksIGRlY2xhcmVkRWRpdG9yTmFtZSwgY2VsbEV2ZW50KSB7XG4gICAgICAgIHZhciBlZGl0b3JOYW1lID0gZGVjbGFyZWRFZGl0b3JOYW1lIHx8IGVkaXRvclR5cGVzW3ggJSBlZGl0b3JUeXBlcy5sZW5ndGhdO1xuXG4gICAgICAgIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgY2FzZSBzY2hlbWEuYmlydGhTdGF0ZS5pbmRleDpcbiAgICAgICAgICAgICAgICBjZWxsRXZlbnQudGV4dENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2VsbEVkaXRvciA9IGdyaWQuY2VsbEVkaXRvcnMuY3JlYXRlKGVkaXRvck5hbWUsIGNlbGxFdmVudCk7XG5cbiAgICAgICAgaWYgKGNlbGxFZGl0b3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hLmVtcGxveWVkLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYS50b3RhbE51bWJlck9mUGV0c093bmVkLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdG9yLmlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgMCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxFZGl0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxFZGl0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgMC4wMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNlbGxFZGl0b3I7XG4gICAgfTtcbn07XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGRlbW8gPSB0aGlzLFxuICAgICAgICBncmlkID0gZGVtby5ncmlkLFxuICAgICAgICBzY2hlbWEgPSBncmlkLmJlaGF2aW9yLnNjaGVtYTtcblxuICAgIC8vR0VUIENFTExcbiAgICAvL2FsbCBmb3JtYXR0aW5nIGFuZCByZW5kZXJpbmcgcGVyIGNlbGwgY2FuIGJlIG92ZXJyaWRkZW4gaW4gaGVyZVxuICAgIGdyaWQuYmVoYXZpb3IuZGF0YU1vZGVsLmdldENlbGwgPSBmdW5jdGlvbihjb25maWcsIHJlbmRlcmVyTmFtZSkge1xuICAgICAgICBpZiAoY29uZmlnLmlzVXNlckRhdGFBcmVhKSB7XG4gICAgICAgICAgICB2YXIgbiwgaGV4LCB0cmF2ZWwsXG4gICAgICAgICAgICAgICAgY29sSW5kZXggPSBjb25maWcuZGF0YUNlbGwueCxcbiAgICAgICAgICAgICAgICByb3dJbmRleCA9IGNvbmZpZy5kYXRhQ2VsbC55O1xuXG4gICAgICAgICAgICBpZiAoZGVtby5zdHlsZVJvd3NGcm9tRGF0YSkge1xuICAgICAgICAgICAgICAgIG4gPSBncmlkLmJlaGF2aW9yLmdldENvbHVtbihzY2hlbWEudG90YWxOdW1iZXJPZlBldHNPd25lZC5pbmRleCkuZ2V0VmFsdWUocm93SW5kZXgpO1xuICAgICAgICAgICAgICAgIGhleCA9ICgxNTUgKyAxMCAqIChuICUgMTEpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgY29uZmlnLmJhY2tncm91bmRDb2xvciA9ICcjJyArIGhleCArIGhleCArIGhleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChjb2xJbmRleCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hLmxhc3ROYW1lLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICBjb25maWcuY29sb3IgPSBjb25maWcudmFsdWUgIT0gbnVsbCAmJiAoY29uZmlnLnZhbHVlICsgJycpWzBdID09PSAnUycgPyAncmVkJyA6ICcjMTkxOTE5JztcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmxpbmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hLmluY29tZS5pbmRleDpcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsID0gNjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWEudHJhdmVsLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICB0cmF2ZWwgPSAxMDU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJhdmVsKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVsICs9IE1hdGgucm91bmQoY29uZmlnLnZhbHVlICogMTUwIC8gMTAwMDAwKTtcbiAgICAgICAgICAgICAgICBjb25maWcuYmFja2dyb3VuZENvbG9yID0gJyMwMCcgKyB0cmF2ZWwudG9TdHJpbmcoMTYpICsgJzAwJztcbiAgICAgICAgICAgICAgICBjb25maWcuY29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVGVzdGluZ1xuICAgICAgICAgICAgaWYgKGNvbEluZGV4ID09PSBzY2hlbWEudG90YWxOdW1iZXJPZlBldHNPd25lZC5pbmRleCkge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogQmUgc3VyZSB0byBhZGp1c3QgdGhlIGRhdGEgc2V0IHRvIHRoZSBhcHByb3ByaWF0ZSB0eXBlIGFuZCBzaGFwZSBpbiB3aWRlZGF0YS5qc1xuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gc2ltcGxlQ2VsbDsgLy9XT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIGVtcHR5Q2VsbDsgLy9XT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIGJ1dHRvbkNlbGw7IC8vV09SS1NcbiAgICAgICAgICAgICAgICAvL3JldHVybiBlcnJvckNlbGw7IC8vV09SS1M6IE5vdGVkIHRoYXQgYW55IGVycm9yIGluIHRoaXMgZnVuY3Rpb24gc3RlYWxzIHRoZSBtYWluIHRocmVhZCBieSByZWN1cnNpb25cbiAgICAgICAgICAgICAgICAvL3JldHVybiBzcGFya0xpbmVDZWxsOyAvLyBXT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIHNwYXJrQmFyQ2VsbDsgLy9XT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIHNsaWRlckNlbGw7IC8vV09SS1NcbiAgICAgICAgICAgICAgICAvL3JldHVybiB0cmVlQ2VsbDsgLy9OZWVkIHRvIGZpZ3VyZSBvdXQgZGF0YSBzaGFwZSB0byB0ZXN0XG5cblxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogVGVzdCBvZiBDdXN0b21pemVkIFJlbmRlcmVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gaWYgKHN0YXJyeSl7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbmZpZy5kb21haW4gPSA1OyAvLyBkZWZhdWx0IGlzIDEwMFxuICAgICAgICAgICAgICAgIC8vICAgICBjb25maWcuc2l6ZUZhY3RvciA9ICAwLjY1OyAvLyBkZWZhdWx0IGlzIDAuNjU7IHNpemUgb2Ygc3RhcnMgYXMgZnJhY3Rpb24gb2YgaGVpZ2h0IG9mIGNlbGxcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnLmRhcmtlbkZhY3RvciA9IDAuNzU7IC8vIGRlZmF1bHQgaXMgMC43NTsgc3RhciBzdHJva2UgY29sb3IgYXMgZnJhY3Rpb24gb2Ygc3RhciBmaWxsIGNvbG9yXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbmZpZy5jb2xvciA9ICdnb2xkJzsgLy8gZGVmYXVsdCBpcyAnZ29sZCc7IHN0YXIgZmlsbCBjb2xvclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25maWcuZmdDb2xvciA9ICAnZ3JleSc7IC8vIGRlZmF1bHQgaXMgJ3RyYW5zcGFyZW50JyAobm90IHJlbmRlcmVkKTsgdGV4dCBjb2xvclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25maWcuZmdTZWxDb2xvciA9ICd5ZWxsb3cnOyAvLyBkZWZhdWx0IGlzICd0cmFuc3BhcmVudCcgKG5vdCByZW5kZXJlZCk7IHRleHQgc2VsZWN0aW9uIGNvbG9yXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbmZpZy5iZ0NvbG9yID0gJyM0MDQwNDAnOyAvLyBkZWZhdWx0IGlzICd0cmFuc3BhcmVudCcgKG5vdCByZW5kZXJlZCk7IGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnLmJnU2VsQ29sb3IgPSAnZ3JleSc7IC8vIGRlZmF1bHQgaXMgJ3RyYW5zcGFyZW50JyAobm90IHJlbmRlcmVkKTsgYmFja2dyb3VuZCBzZWxlY3Rpb24gY29sb3JcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnLnNoYWRvd0NvbG9yID0gJ3RyYW5zcGFyZW50JzsgLy8gZGVmYXVsdCBpcyAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBzdGFycnk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyaWQuY2VsbFJlbmRlcmVycy5nZXQocmVuZGVyZXJOYW1lKTtcbiAgICB9O1xuXG4gICAgLy9FTkQgT0YgR0VUIENFTExcblxuXG4gICAgLy8gQ1VTVE9NIENFTEwgUkVOREVSRVJcblxuICAgIHZhciBSRUdFWFBfQ1NTX0hFWDYgPSAvXiMoLi4pKC4uKSguLikkLyxcbiAgICAgICAgUkVHRVhQX0NTU19SR0IgPSAvXnJnYmFcXCgoXFxkKyksKFxcZCspLChcXGQrKSxcXGQrXFwpJC87XG5cbiAgICBmdW5jdGlvbiBwYWludFNwYXJrUmF0aW5nKGdjLCBjb25maWcpIHtcbiAgICAgICAgdmFyIHggPSBjb25maWcuYm91bmRzLngsXG4gICAgICAgICAgICB5ID0gY29uZmlnLmJvdW5kcy55LFxuICAgICAgICAgICAgd2lkdGggPSBjb25maWcuYm91bmRzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gY29uZmlnLmJvdW5kcy5oZWlnaHQsXG4gICAgICAgICAgICBvcHRpb25zID0gY29uZmlnLnZhbHVlLFxuICAgICAgICAgICAgZG9tYWluID0gb3B0aW9ucy5kb21haW4gfHwgY29uZmlnLmRvbWFpbiB8fCAxMDAsXG4gICAgICAgICAgICBzaXplRmFjdG9yID0gb3B0aW9ucy5zaXplRmFjdG9yIHx8IGNvbmZpZy5zaXplRmFjdG9yIHx8IDAuNjUsXG4gICAgICAgICAgICBkYXJrZW5GYWN0b3IgPSBvcHRpb25zLmRhcmtlbkZhY3RvciB8fCBjb25maWcuZGFya2VuRmFjdG9yIHx8IDAuNzUsXG4gICAgICAgICAgICBjb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgY29uZmlnLmNvbG9yIHx8ICdnb2xkJyxcbiAgICAgICAgICAgIHN0cm9rZSA9IHRoaXMuc3Ryb2tlID0gY29sb3IgPT09IHRoaXMuY29sb3IgPyB0aGlzLnN0cm9rZSA6IGdldERhcmtlbmVkQ29sb3IoZ2MsIHRoaXMuY29sb3IgPSBjb2xvciwgZGFya2VuRmFjdG9yKSxcbiAgICAgICAgICAgIC8vIGJnQ29sb3IgPSBjb25maWcuaXNTZWxlY3RlZCA/IChvcHRpb25zLmJnU2VsQ29sb3IgfHwgY29uZmlnLmJnU2VsQ29sb3IpIDogKG9wdGlvbnMuYmdDb2xvciB8fCBjb25maWcuYmdDb2xvciksXG4gICAgICAgICAgICBmZ0NvbG9yID0gY29uZmlnLmlzU2VsZWN0ZWQgPyAob3B0aW9ucy5mZ1NlbENvbG9yIHx8IGNvbmZpZy5mZ1NlbENvbG9yKSA6IChvcHRpb25zLmZnQ29sb3IgfHwgY29uZmlnLmZnQ29sb3IpLFxuICAgICAgICAgICAgc2hhZG93Q29sb3IgPSBvcHRpb25zLnNoYWRvd0NvbG9yIHx8IGNvbmZpZy5zaGFkb3dDb2xvciB8fCAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgLy8gZm9udCA9IG9wdGlvbnMuZm9udCB8fCBjb25maWcuZm9udCB8fCAnMTFweCB2ZXJkYW5hJyxcbiAgICAgICAgICAgIG1pZGRsZSA9IGhlaWdodCAvIDIsXG4gICAgICAgICAgICBkaWFtZXRlciA9IHNpemVGYWN0b3IgKiBoZWlnaHQsXG4gICAgICAgICAgICBvdXRlclJhZGl1cyA9IHNpemVGYWN0b3IgKiBtaWRkbGUsXG4gICAgICAgICAgICB2YWwgPSBOdW1iZXIob3B0aW9ucy52YWwpLFxuICAgICAgICAgICAgcG9pbnRzID0gdGhpcy5wb2ludHM7XG5cbiAgICAgICAgaWYgKCFwb2ludHMpIHtcbiAgICAgICAgICAgIHZhciBpbm5lclJhZGl1cyA9IDMgLyA3ICogb3V0ZXJSYWRpdXM7XG4gICAgICAgICAgICBwb2ludHMgPSB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDUsIHBpID0gTWF0aC5QSSAvIDIsIGluY3IgPSBNYXRoLlBJIC8gNTsgaTsgLS1pLCBwaSArPSBpbmNyKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBvdXRlclJhZGl1cyAqIE1hdGguY29zKHBpKSxcbiAgICAgICAgICAgICAgICAgICAgeTogbWlkZGxlIC0gb3V0ZXJSYWRpdXMgKiBNYXRoLnNpbihwaSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwaSArPSBpbmNyO1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogaW5uZXJSYWRpdXMgKiBNYXRoLmNvcyhwaSksXG4gICAgICAgICAgICAgICAgICAgIHk6IG1pZGRsZSAtIGlubmVyUmFkaXVzICogTWF0aC5zaW4ocGkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludHMucHVzaChwb2ludHNbMF0pOyAvLyBjbG9zZSB0aGUgcGF0aFxuICAgICAgICB9XG5cbiAgICAgICAgZ2MuY2FjaGUuc2hhZG93Q29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgICAgIGdjLmNhY2hlLmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgZ2MuYmVnaW5QYXRoKCk7XG4gICAgICAgIGZvciAodmFyIGogPSA1LCBzeCA9IHggKyA1ICsgb3V0ZXJSYWRpdXM7IGo7IC0taiwgc3ggKz0gZGlhbWV0ZXIpIHtcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50LCBpbmRleCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgZ2NbaW5kZXggPyAnbGluZVRvJyA6ICdtb3ZlVG8nXShzeCArIHBvaW50LngsIHkgKyBwb2ludC55KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBnYy5jbG9zZVBhdGgoKTtcblxuICAgICAgICB2YWwgPSB2YWwgLyBkb21haW4gKiA1O1xuXG4gICAgICAgIGdjLmNhY2hlLmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBnYy5zYXZlKCk7XG4gICAgICAgIGdjLmNsaXAoKTtcbiAgICAgICAgZ2MuZmlsbFJlY3QoeCArIDUsIHksXG4gICAgICAgICAgICAoTWF0aC5mbG9vcih2YWwpICsgMC4yNSArIHZhbCAlIDEgKiAwLjUpICogZGlhbWV0ZXIsIC8vIGFkanVzdCB3aWR0aCB0byBza2lwIG92ZXIgc3RhciBvdXRsaW5lcyBhbmQganVzdCBtZXRlciB0aGVpciBpbnRlcmlvcnNcbiAgICAgICAgICAgIGhlaWdodCk7XG4gICAgICAgIGdjLnJlc3RvcmUoKTsgLy8gcmVtb3ZlIGNsaXBwaW5nIHJlZ2lvblxuXG4gICAgICAgIGdjLmNhY2hlLnN0cm9rZVN0eWxlID0gc3Ryb2tlO1xuICAgICAgICBnYy5jYWNoZS5saW5lV2lkdGggPSAxO1xuICAgICAgICBnYy5zdHJva2UoKTtcblxuICAgICAgICBpZiAoZmdDb2xvciAmJiBmZ0NvbG9yICE9PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICBnYy5jYWNoZS5maWxsU3R5bGUgPSBmZ0NvbG9yO1xuICAgICAgICAgICAgZ2MuY2FjaGUuZm9udCA9ICcxMXB4IHZlcmRhbmEnO1xuICAgICAgICAgICAgZ2MuY2FjaGUudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIGdjLmNhY2hlLnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICAgICAgZ2MuY2FjaGUuc2hhZG93Q29sb3IgPSBzaGFkb3dDb2xvcjtcbiAgICAgICAgICAgIGdjLmNhY2hlLnNoYWRvd09mZnNldFggPSBnYy5jYWNoZS5zaGFkb3dPZmZzZXRZID0gMTtcbiAgICAgICAgICAgIGdjLmZpbGxUZXh0KHZhbC50b0ZpeGVkKDEpLCB4ICsgd2lkdGggKyAxMCwgeSArIGhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGFya2VuZWRDb2xvcihnYywgY29sb3IsIGZhY3Rvcikge1xuICAgICAgICB2YXIgcmdiYSA9IGdldFJHQkEoZ2MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyBNYXRoLnJvdW5kKGZhY3RvciAqIHJnYmFbMF0pICsgJywnICsgTWF0aC5yb3VuZChmYWN0b3IgKiByZ2JhWzFdKSArICcsJyArIE1hdGgucm91bmQoZmFjdG9yICogcmdiYVsyXSkgKyAnLCcgKyAocmdiYVszXSB8fCAxKSArICcpJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSR0JBKGdjLCBjb2xvclNwZWMpIHtcbiAgICAgICAgLy8gTm9ybWFsaXplIHZhcmlldHkgb2YgQ1NTIGNvbG9yIHNwZWMgc3ludGF4ZXMgdG8gb25lIG9mIHR3b1xuICAgICAgICBnYy5jYWNoZS5maWxsU3R5bGUgPSBjb2xvclNwZWM7XG5cbiAgICAgICAgdmFyIHJnYmEgPSBjb2xvclNwZWMubWF0Y2goUkVHRVhQX0NTU19IRVg2KTtcbiAgICAgICAgaWYgKHJnYmEpIHtcbiAgICAgICAgICAgIHJnYmEuc2hpZnQoKTsgLy8gcmVtb3ZlIHdob2xlIG1hdGNoXG4gICAgICAgICAgICByZ2JhLmZvckVhY2goZnVuY3Rpb24odmFsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJnYmFbaW5kZXhdID0gcGFyc2VJbnQodmFsLCAxNik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJnYmEgPSBjb2xvclNwZWMubWF0Y2goUkVHRVhQX0NTU19SR0IpO1xuICAgICAgICAgICAgaWYgKCFyZ2JhKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ1VuZXhwZWN0ZWQgZm9ybWF0IGdldHRpbmcgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELmZpbGxTdHlsZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2JhLnNoaWZ0KCk7IC8vIHJlbW92ZSB3aG9sZSBtYXRjaFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJnYmE7XG4gICAgfVxuXG5cbiAgICAvL0V4dGVuZCBIeXBlckdyaWQncyBiYXNlIFJlbmRlcmVyXG4gICAgdmFyIHNwYXJrU3RhclJhdGluZ1JlbmRlcmVyID0gZ3JpZC5jZWxsUmVuZGVyZXJzLkJhc2VDbGFzcy5leHRlbmQoe1xuICAgICAgICBwYWludDogcGFpbnRTcGFya1JhdGluZ1xuICAgIH0pO1xuXG4gICAgLy9SZWdpc3RlciB5b3VyIHJlbmRlcmVyXG4gICAgZ3JpZC5jZWxsUmVuZGVyZXJzLmFkZCgnU3RhcnJ5Jywgc3BhcmtTdGFyUmF0aW5nUmVuZGVyZXIpO1xuXG4gICAgLy8gRU5EIE9GIENVU1RPTSBDRUxMIFJFTkRFUkVSXG4gICAgcmV0dXJuIGdyaWQ7XG59O1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIFNvbWUgRE9NIHN1cHBvcnQgZnVuY3Rpb25zLi4uXG4vLyBCZXNpZGVzIHRoZSBjYW52YXMsIHRoaXMgdGVzdCBoYXJuZXNzIG9ubHkgaGFzIGEgaGFuZGZ1bCBvZiBidXR0b25zIGFuZCBjaGVja2JveGVzLlxuLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgc2VydmljZSB0aGVzZSBjb250cm9scy5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZW1vID0gdGhpcyxcbiAgICAgICAgZ3JpZCA9IGRlbW8uZ3JpZDtcblxuICAgICAgICAvLyBtYWtlIGJ1dHRvbnMgZGl2IGFic29sdXRlIHNvIGJ1dHRvbnMgd2lkdGggb2YgMTAwJSBkb2Vzbid0IHN0cmV0Y2ggdG8gd2lkdGggb2YgZGFzaGJvYXJkXG4gICAgdmFyIGN0cmxHcm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3RybC1ncm91cHMnKSxcbiAgICAgICAgZGFzaGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhc2hib2FyZCcpLFxuICAgICAgICBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbnMnKTtcblxuICAgIGN0cmxHcm91cHMuc3R5bGUudG9wID0gY3RybEdyb3Vwcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAncHgnO1xuICAgIC8vYnV0dG9ucy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVSb3dTdHlsaW5nTWV0aG9kKCkge1xuICAgICAgICBkZW1vLnN0eWxlUm93c0Zyb21EYXRhID0gIWRlbW8uc3R5bGVSb3dzRnJvbURhdGE7XG4gICAgICAgIGdyaWQucmVwYWludCgpO1xuICAgIH1cblxuICAgIC8vIExpc3Qgb2YgcHJvcGVydGllcyB0byBzaG93IGFzIGNoZWNrYm94ZXMgaW4gdGhpcyBkZW1vJ3MgXCJkYXNoYm9hcmRcIlxuICAgIHZhciB0b2dnbGVQcm9wcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdSb3cgc3R5bGluZycsXG4gICAgICAgICAgICBjdHJsczogW1xuICAgICAgICAgICAgICAgIHtuYW1lOiAnKEdsb2JhbCBzZXR0aW5nKScsIGxhYmVsOiAnYmFzZSBvbiBkYXRhJywgc2V0dGVyOiB0b2dnbGVSb3dTdHlsaW5nTWV0aG9kfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvbHVtbiBoZWFkZXIgcm93cycsXG4gICAgICAgICAgICBjdHJsczogW1xuICAgICAgICAgICAgICAgIHtuYW1lOiAnc2hvd0hlYWRlclJvdycsIGxhYmVsOiAnaGVhZGVyJ30sIC8vIGRlZmF1bHQgXCJzZXR0ZXJcIiBpcyBgc2V0UHJvcGBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdIb3ZlciBoaWdobGlnaHRzJyxcbiAgICAgICAgICAgIGN0cmxzOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICdob3ZlckNlbGxIaWdobGlnaHQuZW5hYmxlZCcsIGxhYmVsOiAnY2VsbCd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnaG92ZXJSb3dIaWdobGlnaHQuZW5hYmxlZCcsIGxhYmVsOiAncm93J30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdob3ZlckNvbHVtbkhpZ2hsaWdodC5lbmFibGVkJywgbGFiZWw6ICdjb2x1bW4nfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0xpbmsgc3R5bGUnLFxuICAgICAgICAgICAgY3RybHM6IFtcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xpbmtPbkhvdmVyJywgbGFiZWw6ICdvbiBob3Zlcid9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnbGlua0NvbG9yJywgdHlwZTogJ3RleHQnLCBsYWJlbDogJ2NvbG9yJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdsaW5rQ29sb3JPbkhvdmVyJywgbGFiZWw6ICdjb2xvciBvbiBob3Zlcid9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2VsbCBlZGl0aW5nJyxcbiAgICAgICAgICAgIGN0cmxzOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICdlZGl0YWJsZSd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnZWRpdE9uRG91YmxlQ2xpY2snLCBsYWJlbDogJ3JlcXVpcmVzIGRvdWJsZS1jbGljayd9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnZWRpdE9uS2V5ZG93bicsIGxhYmVsOiAndHlwZSB0byBlZGl0J31cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3Rpb24nLFxuICAgICAgICAgICAgY3RybHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdjaGVja2JveE9ubHlSb3dTZWxlY3Rpb25zJywgbGFiZWw6ICdieSByb3cgaGFuZGxlcyBvbmx5Jywgc2V0dGVyOiBzZXRTZWxlY3Rpb25Qcm9wLFxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiAnTm90ZSB0aGF0IHdoZW4gdGhpcyBwcm9wZXJ0eSBpcyBhY3RpdmUsIGF1dG9TZWxlY3RSb3dzIHdpbGwgbm90IHdvcmsuJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge25hbWU6ICdzaW5nbGVSb3dTZWxlY3Rpb25Nb2RlJywgbGFiZWw6ICdvbmUgcm93IGF0IGEgdGltZScsIHNldHRlcjogc2V0U2VsZWN0aW9uUHJvcH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnIW11bHRpcGxlU2VsZWN0aW9ucycsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnb25lIGNlbGwgcmVnaW9uIGF0IGEgdGltZScsXG4gICAgICAgICAgICAgICAgICAgIHNldHRlcjogc2V0U2VsZWN0aW9uUHJvcCxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnYXV0b1NlbGVjdFJvd3MnLCBsYWJlbDogJ2F1dG8tc2VsZWN0IHJvd3MnLCBzZXR0ZXI6IHNldFNlbGVjdGlvblByb3AsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdOb3RlczpcXG4nICtcbiAgICAgICAgICAgICAgICAgICAgJzEuIFJlcXVpcmVzIHRoYXQgY2hlY2tib3hPbmx5Um93U2VsZWN0aW9ucyBiZSBzZXQgdG8gZmFsc2UgKHNvIGNoZWNraW5nIHRoaXMgYm94IGF1dG9tYXRpY2FsbHkgdW5jaGVja3MgdGhhdCBvbmUpLlxcbicgK1xuICAgICAgICAgICAgICAgICAgICAnMi4gU2V0IHNpbmdsZVJvd1NlbGVjdGlvbk1vZGUgdG8gZmFsc2UgdG8gYWxsb3cgYXV0by1zZWxlY3Qgb2YgbXVsdGlwbGUgcm93cy4nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2F1dG9TZWxlY3RDb2x1bW5zJywgbGFiZWw6ICdhdXRvLXNlbGVjdCBjb2x1bW5zJywgc2V0dGVyOiBzZXRTZWxlY3Rpb25Qcm9wfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgXTtcblxuXG4gICAgdG9nZ2xlUHJvcHMuZm9yRWFjaChmdW5jdGlvbihwcm9wKSB7XG4gICAgICAgIGFkZFRvZ2dsZShwcm9wKTtcbiAgICB9KTtcblxuXG4gICAgW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1RvZ2dsZSBFbXB0eSBEYXRhJyxcbiAgICAgICAgICAgIG9uY2xpY2s6IGRlbW8udG9nZ2xlRW1wdHlEYXRhXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2V0IERhdGEnLCBvbmNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRlbW8ucmVzZXREYXRhKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2V0IERhdGEgMSAoNTAwMCByb3dzKScsIG9uY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGVtby5zZXREYXRhKGRlbW8uZGF0YS5wZW9wbGUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZXQgRGF0YSAyICgxMDAwMCByb3dzKScsIG9uY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGVtby5zZXREYXRhKGRlbW8uZGF0YS5wZW9wbGUyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdSZXNldCBHcmlkJyxcbiAgICAgICAgICAgIG9uY2xpY2s6IGRlbW8ucmVzZXRcbiAgICAgICAgfVxuICAgIF0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0ubGFiZWw7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gaXRlbS5vbmNsaWNrO1xuICAgICAgICBpZiAoaXRlbS50aXRsZSkge1xuICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIGFkZFRvZ2dsZShjdHJsR3JvdXApIHtcbiAgICAgICAgdmFyIGlucHV0LCBsYWJlbCxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY3RybC1ncm91cCc7XG5cbiAgICAgICAgaWYgKGN0cmxHcm91cC5sYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICd0d2lzdGVyJztcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGN0cmxHcm91cC5sYWJlbDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hvaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaG9pY2VzLmNsYXNzTmFtZSA9ICdjaG9pY2VzJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNob2ljZXMpO1xuXG4gICAgICAgIGN0cmxHcm91cC5jdHJscy5mb3JFYWNoKGZ1bmN0aW9uKGN0cmwpIHtcbiAgICAgICAgICAgIGlmICghY3RybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdHlwZSA9IGN0cmwudHlwZSB8fCAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXAgPSAnUHJvcGVydHkgbmFtZTogJyArIGN0cmwubmFtZTtcblxuICAgICAgICAgICAgaWYgKGN0cmwudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gJ1xcblxcbicgKyBjdHJsLnRvb2x0aXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgaW5wdXQuaWQgPSBjdHJsLm5hbWU7XG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gY3RybEdyb3VwLmxhYmVsO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjdHJsLnZhbHVlIHx8IGdldFByb3BlcnR5KGN0cmwubmFtZSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzI1cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzRweCc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLm1hcmdpblJpZ2h0ID0gJzRweCc7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBpbnB1dDsgLy8gbGFiZWwgZ29lcyBhZnRlciBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gJ2NoZWNrZWQnIGluIGN0cmxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY3RybC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGdldFByb3BlcnR5KGN0cmwubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBudWxsOyAvLyBsYWJlbCBnb2VzIGJlZm9yZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVJhZGlvQ2xpY2suY2FsbCh0aGlzLCBjdHJsLnNldHRlciB8fCBzZXRQcm9wLCBldmVudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC50aXRsZSA9IHRvb2x0aXA7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBsYWJlbC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnICsgKGN0cmwubGFiZWwgfHwgY3RybC5uYW1lKSksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlRWxlbWVudFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY2hvaWNlcy5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChjdHJsLm5hbWUgPT09ICd0cmVldmlldycpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5vbm1vdXNlZG93biA9IGlucHV0Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5jaGVja2VkICYmIGdyaWQuYmVoYXZpb3IuZGF0YU1vZGVsLmRhdGEgIT09IGRlbW8udHJlZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdMb2FkIHRyZWUgZGF0YSBmaXJzdCAoXCJTZXQgRGF0YSAzXCIgYnV0dG9uKS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjdHJsR3JvdXBzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgZGFzaGJvYXJkIGNoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMgdG8gbWF0Y2ggY3VycmVudCB2YWx1ZXMgb2YgZ3JpZCBwcm9wZXJ0aWVzXG4gICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKGRlbW8pLnJlc2V0RGFzaGJvYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRvZ2dsZVByb3BzLmZvckVhY2goZnVuY3Rpb24ocHJvcCkge1xuICAgICAgICAgICAgcHJvcC5jdHJscy5mb3JFYWNoKGZ1bmN0aW9uKGN0cmwpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3RybCkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN0cmwuc2V0dGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHNldFNlbGVjdGlvblByb3A6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHNldFByb3A6XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGN0cmwudHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWQgPSBjdHJsLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9sYXJpdHkgPSAoaWRbMF0gPT09ICchJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuY2hlY2tlZCA9IGdldFByb3BlcnR5KGlkKSBeIHBvbGFyaXR5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciBwcm9wID0gZ3JpZC5wcm9wZXJ0aWVzO1xuXG4gICAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJvcCA9IHByb3Bba2V5cy5zaGlmdCgpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwcm9wO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItZGFzaGJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgZ3JpZC5kaXYuc3R5bGUudHJhbnNpdGlvbiA9ICdtYXJnaW4tbGVmdCAuNzVzJztcbiAgICAgICAgICAgIGdyaWQuZGl2LnN0eWxlLm1hcmdpbkxlZnQgPSBNYXRoLm1heCgxODAsIGRhc2hib2FyZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCArIDgpICsgJ3B4JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9LCA4MDApO1xuICAgICAgICAgICAgZ3JpZC5kaXYuc3R5bGUubWFyZ2luTGVmdCA9ICczMHB4JztcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIGZwc1RpbWVyLCBzZWNzLCBmcmFtZXM7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi1mcHMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBlbCA9IHRoaXMsIHN0ID0gZWwuc3R5bGU7XG4gICAgICAgIGlmICgoZ3JpZC5wcm9wZXJ0aWVzLmVuYWJsZUNvbnRpbnVvdXNSZXBhaW50IF49IHRydWUpKSB7XG4gICAgICAgICAgICBzdC5iYWNrZ3JvdW5kQ29sb3IgPSAnIzY2Nic7XG4gICAgICAgICAgICBzdC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgICAgICAgICBzZWNzID0gZnJhbWVzID0gMDtcbiAgICAgICAgICAgIGNvZGUoKTtcbiAgICAgICAgICAgIGZwc1RpbWVyID0gc2V0SW50ZXJ2YWwoY29kZSwgMTAwMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGZwc1RpbWVyKTtcbiAgICAgICAgICAgIHN0LmJhY2tncm91bmRDb2xvciA9IHN0LnRleHRBbGlnbiA9IG51bGw7XG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSAnRlBTJztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBjb2RlKCkge1xuICAgICAgICAgICAgdmFyIGZwcyA9IGdyaWQuY2FudmFzLmN1cnJlbnRGUFMsXG4gICAgICAgICAgICAgICAgYmFycyA9IEFycmF5KE1hdGgucm91bmQoZnBzKSArIDEpLmpvaW4oJ0knKSxcbiAgICAgICAgICAgICAgICBzdWJyYW5nZSwgc3BhbjtcblxuICAgICAgICAgICAgLy8gZmlyc3Qgc3BhbiBob2xkcyB0aGUgMzAgYmFja2dyb3VuZCBiYXJzXG4gICAgICAgICAgICBlbC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cbiAgICAgICAgICAgIC8vIDJuZCBzcGFuIGhvbGRzIHRoZSBudW1lcmljXG4gICAgICAgICAgICBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgICAgICAgICBpZiAoc2Vjcykge1xuICAgICAgICAgICAgICAgIGZyYW1lcyArPSBmcHM7XG4gICAgICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBmcHMudG9GaXhlZCgxKTtcbiAgICAgICAgICAgICAgICBzcGFuLnRpdGxlID0gc2VjcyArICctc2Vjb25kIGF2ZXJhZ2UgPSAnICsgKGZyYW1lcyAvIHNlY3MpLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWNzICs9IDE7XG5cbiAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgICAgICAvLyAwIHRvIDQgY29sb3IgcmFuZ2UgYmFyIHN1YnNldHM6IDEuLjEwOnJlZCwgMTE6MjA6eWVsbG93LCAyMTozMDpncmVlblxuICAgICAgICAgICAgd2hpbGUgKChzdWJyYW5nZSA9IGJhcnMuc3Vic3RyKDAsIDEyKSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IHN1YnJhbmdlO1xuICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgICAgIGJhcnMgPSBiYXJzLnN1YnN0cigxMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBoZWlnaHQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhYi1ncm93LXNocmluaycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgdmFyIGxhYmVsO1xuICAgICAgICBpZiAoIWhlaWdodCkge1xuICAgICAgICAgICAgaGVpZ2h0ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZ3JpZC5kaXYpLmhlaWdodDtcbiAgICAgICAgICAgIGdyaWQuZGl2LnN0eWxlLnRyYW5zaXRpb24gPSAnaGVpZ2h0IDEuNXMgbGluZWFyJztcbiAgICAgICAgICAgIGdyaWQuZGl2LnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCArICdweCc7XG4gICAgICAgICAgICBsYWJlbCA9ICdTaHJpbmsnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ3JpZC5kaXYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgaGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgbGFiZWwgPSAnR3Jvdyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbm5lckhUTUwgKz0gJyAuLi4nO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBsYWJlbDtcbiAgICAgICAgfS5iaW5kKHRoaXMpLCAxNTAwKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXNoYm9hcmQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBjdHJsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAoY3RybC5jbGFzc0xpc3QuY29udGFpbnMoJ3R3aXN0ZXInKSkge1xuICAgICAgICAgICAgY3RybC5uZXh0RWxlbWVudFNpYmxpbmcuc3R5bGUuZGlzcGxheSA9IGN0cmwuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpID8gJ2Jsb2NrJyA6ICdub25lJztcbiAgICAgICAgICAgIGdyaWQuZGl2LnN0eWxlLm1hcmdpbkxlZnQgPSBNYXRoLm1heCgxODAsIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgKyA4KSArICdweCc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgdmFyIHJhZGlvR3JvdXAgPSB7fTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVJhZGlvQ2xpY2soaGFuZGxlciwgZXZlbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgdmFyIGxhc3RSYWRpbyA9IHJhZGlvR3JvdXBbdGhpcy5uYW1lXTtcbiAgICAgICAgICAgIGlmIChsYXN0UmFkaW8pIHtcbiAgICAgICAgICAgICAgICBsYXN0UmFkaW8uaGFuZGxlci5jYWxsKGxhc3RSYWRpby5jdHJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJhZGlvR3JvdXBbdGhpcy5uYW1lXSA9IHtjdHJsOiB0aGlzLCBoYW5kbGVyOiBoYW5kbGVyfTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb3AoKSB7IC8vIHN0YW5kYXJkIGNoZWNrYm94IGNsaWNrIGhhbmRsZXJcbiAgICAgICAgdmFyIHByb3AgPSBncmlkLnByb3BlcnRpZXM7XG4gICAgICAgIHZhciBpZCA9IHRoaXMuaWQ7XG4gICAgICAgIGlmIChpZFswXSA9PT0gJyEnKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50eXBlICE9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ0V4cGVjdGVkIGludmVyc2Ugb3BlcmF0b3IgKCEpIG9uIGNoZWNrYm94IGRhc2hib2FyZCBjb250cm9scyBvbmx5IGJ1dCBmb3VuZCBvbiAnICsgdGhpcy50eXBlICsgJy4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWQgPSBpZC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB2YXIgaW52ZXJzZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleXMgPSBpZC5zcGxpdCgnLicpO1xuXG4gICAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wW2tleXMuc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgcHJvcFtrZXlzLnNoaWZ0KCldID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICBwcm9wW2tleXMuc2hpZnQoKV0gPSBpbnZlcnNlID8gIXRoaXMuY2hlY2tlZCA6IHRoaXMuY2hlY2tlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGdyaWQudGFrZUZvY3VzKCk7XG4gICAgICAgIGdyaWQuYmVoYXZpb3JDaGFuZ2VkKCk7XG4gICAgICAgIGdyaWQucmVwYWludCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFNlbGVjdGlvblByb3AoKSB7IC8vIGFsdGVybmF0ZSBjaGVja2JveCBjbGljayBoYW5kbGVyXG4gICAgICAgIHZhciBjdHJsO1xuXG4gICAgICAgIGdyaWQuc2VsZWN0aW9uTW9kZWwuY2xlYXIoKTtcblxuICAgICAgICBzZXRQcm9wLmNhbGwodGhpcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuaWQgPT09ICdjaGVja2JveE9ubHlSb3dTZWxlY3Rpb25zJyAmJlxuICAgICAgICAgICAgICAgIChjdHJsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dG9TZWxlY3RSb3dzJykpLmNoZWNrZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdOb3RlIHRoYXQgYXV0b1NlbGVjdFJvd3MgaXMgaW5lZmZlY3R1YWwgd2hlbiBjaGVja2JveE9ubHlSb3dTZWxlY3Rpb25zIGlzIG9uLicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlkID09PSAnYXV0b1NlbGVjdFJvd3MnKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoY3RybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2JveE9ubHlSb3dTZWxlY3Rpb25zJykpLmNoZWNrZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybSgnTm90ZSB0aGF0IGF1dG9TZWxlY3RSb3dzIGlzIGluZWZmZWN0dWFsIHdoZW4gY2hlY2tib3hPbmx5Um93U2VsZWN0aW9ucyBpcyBvbi5cXG5cXG5UdXJuIG9mZiBjaGVja2JveE9ubHlSb3dTZWxlY3Rpb25zPycpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wLmNhbGwoY3RybCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAoY3RybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaW5nbGVSb3dTZWxlY3Rpb25Nb2RlJykpLmNoZWNrZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybSgnTm90ZSB0aGF0IGF1dG8tc2VsZWN0aW5nIGEgcmFuZ2Ugb2Ygcm93cyBieSBzZWxlY3RpbmcgYSByYW5nZSBvZiBjZWxscyAod2l0aCBjbGljayArIGRyYWcgb3Igc2hpZnQgKyBjbGljaykgaXMgbm90IHBvc3NpYmxlIHdpdGggc2luZ2xlUm93U2VsZWN0aW9uTW9kZSBpcyBvbi5cXG5cXG5UdXJuIG9mZiBzaW5nbGVSb3dTZWxlY3Rpb25Nb2RlPycpXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgIGN0cmwuY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRQcm9wLmNhbGwoY3RybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZW1vID0gdGhpcyxcbiAgICAgICAgZ3JpZCA9IGRlbW8uZ3JpZDtcblxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZmluLWJ1dHRvbi1wcmVzc2VkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgY2VsbEV2ZW50ID0gZS5kZXRhaWw7XG4gICAgICAgIGNlbGxFdmVudC52YWx1ZSA9ICFjZWxsRXZlbnQudmFsdWU7XG4gICAgfSk7XG5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1jZWxsLWVudGVyJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgY2VsbEV2ZW50ID0gZS5kZXRhaWw7XG5cbiAgICAgICAgLy9ob3cgdG8gc2V0IHRoZSB0b29sdGlwLi4uLlxuICAgICAgICBncmlkLnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnZXZlbnQgbmFtZTogXCJmaW4tY2VsbC1lbnRlclwiXFxuJyArXG4gICAgICAgICAgICAnZ3JpZENlbGw6IHsgeDogJyArIGNlbGxFdmVudC5ncmlkQ2VsbC54ICsgJywgeTogJyArIGNlbGxFdmVudC5ncmlkQ2VsbC55ICsgJyB9XFxuJyArXG4gICAgICAgICAgICAnZGF0YUNlbGw6IHsgeDogJyArIGNlbGxFdmVudC5kYXRhQ2VsbC54ICsgJywgeTogJyArIGNlbGxFdmVudC5kYXRhQ2VsbC55ICsgJyB9XFxuJyArXG4gICAgICAgICAgICAnc3ViZ3JpZCB0eXBlOiBcIicgKyBjZWxsRXZlbnQuc3ViZ3JpZC50eXBlICsgJ1wiXFxuJyArXG4gICAgICAgICAgICAnc3ViZ3JpZCBuYW1lOiAnICsgKGNlbGxFdmVudC5zdWJncmlkLm5hbWUgPyAnXCInICsgY2VsbEV2ZW50LnN1YmdyaWQubmFtZSArICdcIicgOiAndW5kZWZpbmVkJylcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZmluLXNldC10b3RhbHMtdmFsdWUnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBkZXRhaWwgPSBlLmRldGFpbCxcbiAgICAgICAgICAgIGFyZWFzID0gZGV0YWlsLmFyZWFzIHx8IFsndG9wJywgJ2JvdHRvbSddO1xuXG4gICAgICAgIGFyZWFzLmZvckVhY2goZnVuY3Rpb24oYXJlYSkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZE5hbWUgPSAnZ2V0JyArIGFyZWFbMF0udG9VcHBlckNhc2UoKSArIGFyZWEuc3Vic3RyKDEpICsgJ1RvdGFscycsXG4gICAgICAgICAgICAgICAgdG90YWxzUm93ID0gZ3JpZC5iZWhhdmlvci5kYXRhTW9kZWxbbWV0aG9kTmFtZV0oKTtcblxuICAgICAgICAgICAgdG90YWxzUm93W2RldGFpbC55XVtkZXRhaWwueF0gPSBkZXRhaWwudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGdyaWQucmVwYWludCgpO1xuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogQHN1bW1hcnkgTGlzdGVuIGZvciBjZXJ0YWluIGtleSBwcmVzc2VzIGZyb20gZ3JpZCBvciBjZWxsIGVkaXRvci5cbiAgICAgKiBAZGVzYyBOT1RFOiBmaW5jYW52YXMncyBpbnRlcm5hbCBjaGFyIG1hcCB5aWVsZHMgbWl4ZWQgY2FzZSB3aGlsZSBmaW4tZWRpdG9yLWtleSogZXZlbnRzIGRvIG5vdC5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBOb3QgaGFuZGxlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBoYW5kbGVDdXJzb3JLZXkoZSkge1xuICAgICAgICB2YXIgZGV0YWlsID0gZS5kZXRhaWwsXG4gICAgICAgICAgICBrZXkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRldGFpbC5rZXkpLnRvVXBwZXJDYXNlKCksXG4gICAgICAgICAgICByZXN1bHQgPSBmYWxzZTsgLy8gbWVhbnMgZXZlbnQgaGFuZGxlZCBoZXJlaW5cblxuICAgICAgICBpZiAoZGV0YWlsLmN0cmwpIHtcbiAgICAgICAgICAgIGlmIChkZXRhaWwuc2hpZnQpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICcwJzogaWYgKGdyaWQuc3RvcEVkaXRpbmcoKSkgeyBncmlkLnNlbGVjdFRvVmlld3BvcnRDZWxsKDAsIDApOyB9IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc5JzogaWYgKGdyaWQuc3RvcEVkaXRpbmcoKSkgeyBncmlkLnNlbGVjdFRvRmluYWxDZWxsKCk7IH0gYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzgnOiBpZiAoZ3JpZC5zdG9wRWRpdGluZygpKSB7IGdyaWQuc2VsZWN0VG9GaW5hbENlbGxPZkN1cnJlbnRSb3coKTsgfSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnNyc6IGlmIChncmlkLnN0b3BFZGl0aW5nKCkpIHsgZ3JpZC5zZWxlY3RUb0ZpcnN0Q2VsbE9mQ3VycmVudFJvdygpOyB9IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMCc6IGlmIChncmlkLnN0b3BFZGl0aW5nKCkpIHsgZ3JpZC5zZWxlY3RWaWV3cG9ydENlbGwoMCwgMCk7IH0gYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzknOiBpZiAoZ3JpZC5zdG9wRWRpdGluZygpKSB7IGdyaWQuc2VsZWN0RmluYWxDZWxsKCk7IH0gYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzgnOiBpZiAoZ3JpZC5zdG9wRWRpdGluZygpKSB7IGdyaWQuc2VsZWN0RmluYWxDZWxsT2ZDdXJyZW50Um93KCk7IH0gYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzcnOiBpZiAoZ3JpZC5zdG9wRWRpdGluZygpKSB7IGdyaWQuc2VsZWN0Rmlyc3RDZWxsT2ZDdXJyZW50Um93KCk7IH0gYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1rZXlkb3duJywgaGFuZGxlQ3Vyc29yS2V5KTtcblxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZmluLWVkaXRvci1rZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAvLyB2YXIgZGV0YWlsID0gZS5kZXRhaWwsXG4gICAgICAgIC8vICAgICBrZSA9IGRldGFpbC5rZXlFdmVudDtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gLy8gbW9yZSBkZXRhaWwsIHBsZWFzZVxuICAgICAgICAvLyBkZXRhaWwucHJpbWl0aXZlRXZlbnQgPSBrZTtcbiAgICAgICAgLy8gZGV0YWlsLmtleSA9IGtlLmtleUNvZGU7XG4gICAgICAgIC8vIGRldGFpbC5zaGlmdCA9IGtlLnNoaWZ0S2V5O1xuICAgICAgICAvL1xuICAgICAgICAvLyBoYW5kbGVDdXJzb3JLZXkoZSk7XG4gICAgfSk7XG5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1zZWxlY3Rpb24tY2hhbmdlZCcsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICBpZiAoZS5kZXRhaWwuc2VsZWN0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBzZWxlY3Rpb25zJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0byBnZXQgdGhlIHNlbGVjdGVkIHJvd3MgdW5jb21tZW50IHRoZSBiZWxvdy4uLi4uXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWQuZ2V0Um93U2VsZWN0aW9uTWF0cml4KCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkLmdldFJvd1NlbGVjdGlvbigpKTtcblxuICAgIH0pO1xuXG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdmaW4tcm93LXNlbGVjdGlvbi1jaGFuZ2VkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZGV0YWlsID0gZS5kZXRhaWw7XG4gICAgICAgIC8vIE1vdmUgY2VsbCBzZWxlY3Rpb24gd2l0aCByb3cgc2VsZWN0aW9uXG4gICAgICAgIHZhciByb3dzID0gZGV0YWlsLnJvd3MsXG4gICAgICAgICAgICBzZWxlY3Rpb25zID0gZGV0YWlsLnNlbGVjdGlvbnM7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGdyaWQucHJvcGVydGllcy5zaW5nbGVSb3dTZWxlY3Rpb25Nb2RlICYmIC8vIGxldCdzIG9ubHkgYXR0ZW1wdCB0aGlzIHdoZW4gaW4gdGhpcyBtb2RlXG4gICAgICAgICAgICAhZ3JpZC5wcm9wZXJ0aWVzLm11bHRpcGxlU2VsZWN0aW9ucyAmJiAvLyBhbmQgb25seSB3aGVuIGluIHNpbmdsZSBzZWxlY3Rpb24gbW9kZVxuICAgICAgICAgICAgcm93cy5sZW5ndGggJiYgLy8gdXNlciBqdXN0IHNlbGVjdGVkIGEgcm93IChtdXN0IGJlIHNpbmdsZSByb3cgZHVlIHRvIG1vZGUgd2UncmUgaW4pXG4gICAgICAgICAgICBzZWxlY3Rpb25zLmxlbmd0aCAgLy8gdGhlcmUgd2FzIGEgY2VsbCByZWdpb24gc2VsZWN0ZWQgKG11c3QgYmUgdGhlIG9ubHkgb25lKVxuICAgICAgICApIHtcbiAgICAgICAgICAgIHZhciByZWN0ID0gZ3JpZC5zZWxlY3Rpb25Nb2RlbC5nZXRMYXN0U2VsZWN0aW9uKCksIC8vIHRoZSBvbmx5IGNlbGwgc2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgeCA9IHJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5ID0gcm93c1swXSwgLy8gd2Uga25vdyB0aGVyZSdzIG9ubHkgMSByb3cgc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHJlY3QucmlnaHQgLSB4LFxuICAgICAgICAgICAgICAgIGhlaWdodCA9IDAsIC8vIGNvbGxhcHNlIHRoZSBuZXcgcmVnaW9uIHRvIG9jY3VweSBhIHNpbmdsZSByb3dcbiAgICAgICAgICAgICAgICBmaXJlU2VsZWN0aW9uQ2hhbmdlZEV2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGdyaWQuc2VsZWN0aW9uTW9kZWwuc2VsZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQsIGZpcmVTZWxlY3Rpb25DaGFuZ2VkRXZlbnQpO1xuICAgICAgICAgICAgZ3JpZC5yZXBhaW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocm93cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyByb3dzIHNlbGVjdGVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy93ZSBoYXZlIGEgZnVuY3Rpb24gY2FsbCB0byBjcmVhdGUgdGhlIHNlbGVjdGlvbiBtYXRyaXggYmVjYXVzZVxuICAgICAgICAvL3dlIGRvbid0IHdhbnQgdG8gY3JlYXRlIGFsb3Qgb2YgbmVlZGxlc3MgZ2FyYmFnZSBpZiB0aGUgdXNlclxuICAgICAgICAvL2lzIGp1c3QgbmF2aWdhdGluZyBhcm91bmRcbiAgICAgICAgY29uc29sZS5sb2coZ3JpZC5nZXRSb3dTZWxlY3Rpb25NYXRyaXgoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyaWQuZ2V0Um93U2VsZWN0aW9uKCkpO1xuICAgIH0pO1xuXG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdmaW4tY29sdW1uLXNlbGVjdGlvbi1jaGFuZ2VkJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5kZXRhaWwuY29sdW1ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyByb3dzIHNlbGVjdGVkJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy93ZSBoYXZlIGEgZnVuY3Rpb24gY2FsbCB0byBjcmVhdGUgdGhlIHNlbGVjdGlvbiBtYXRyaXggYmVjYXVzZVxuICAgICAgICAvL3dlIGRvbid0IHdhbnQgdG8gY3JlYXRlIGFsb3Qgb2YgbmVlZGxlc3MgZ2FyYmFnZSBpZiB0aGUgdXNlclxuICAgICAgICAvL2lzIGp1c3QgbmF2aWdhdGluZyBhcm91bmRcbiAgICAgICAgY29uc29sZS5sb2coZ3JpZC5nZXRDb2x1bW5TZWxlY3Rpb25NYXRyaXgoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyaWQuZ2V0Q29sdW1uU2VsZWN0aW9uKCkpO1xuICAgIH0pO1xuXG4gICAgLy91bmNvbW1lbnQgdG8gY2FuY2VsIGVkaXRvciBwb3BwaW5nIHVwOlxuICAgIC8vIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZmluLXJlcXVlc3QtY2VsbC1lZGl0JywgZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH0pO1xuXG4gICAgLy91bmNvbW1lbnQgdG8gY2FuY2VsIHVwZGF0aW5nIHRoZSBtb2RlbCB3aXRoIHRoZSBuZXcgZGF0YTpcbiAgICAvLyBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1iZWZvcmUtY2VsbC1lZGl0JywgZnVuY3Rpb24oZSkgeyBlLnByZXZlbnREZWZhdWx0KCk7IH0pO1xufTtcbiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVtbyA9IHRoaXMsXG4gICAgICAgIGdyaWQgPSBkZW1vLmdyaWQ7XG5cbiAgICB2YXIgZm9vdEluY2hQYXR0ZXJuID0gL15cXHMqKCgoKFxcZCspJyk/XFxzKigoXFxkKylcIik/KXxcXGQrKVxccyokLztcblxuICAgIHZhciBmb290SW5jaExvY2FsaXplciA9IHtcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmVldCA9IE1hdGguZmxvb3IodmFsdWUgLyAxMik7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSAoZmVldCA/IGZlZXQgKyAnXFwnJyA6ICcnKSArICcgJyArICh2YWx1ZSAlIDEyKSArICdcIic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKHN0cikge1xuICAgICAgICAgICAgdmFyIGluY2hlcywgZmVldCxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IHN0ci5tYXRjaChmb290SW5jaFBhdHRlcm4pO1xuICAgICAgICAgICAgaWYgKHBhcnRzKSB7XG4gICAgICAgICAgICAgICAgZmVldCA9IHBhcnRzWzRdO1xuICAgICAgICAgICAgICAgIGluY2hlcyA9IHBhcnRzWzZdO1xuICAgICAgICAgICAgICAgIGlmIChmZWV0ID09PSB1bmRlZmluZWQgJiYgaW5jaGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5jaGVzID0gTnVtYmVyKHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmZWV0ID0gTnVtYmVyKGZlZXQgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGluY2hlcyA9IE51bWJlcihpbmNoZXMgfHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGluY2hlcyA9IDEyICogZmVldCArIGluY2hlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGluY2hlcyA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5jaGVzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdyaWQubG9jYWxpemF0aW9uLmFkZCgnZm9vdCcsIGZvb3RJbmNoTG9jYWxpemVyKTtcblxuICAgIGdyaWQubG9jYWxpemF0aW9uLmFkZCgnc2luZ2RhdGUnLCBuZXcgZ3JpZC5sb2NhbGl6YXRpb24uRGF0ZUZvcm1hdHRlcignemgtU0cnKSk7XG5cbiAgICBncmlkLmxvY2FsaXphdGlvbi5hZGQoJ3BvdW5kcycsIG5ldyBncmlkLmxvY2FsaXphdGlvbi5OdW1iZXJGb3JtYXR0ZXIoJ2VuLVVTJywge1xuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnXG4gICAgfSkpO1xuXG4gICAgZ3JpZC5sb2NhbGl6YXRpb24uYWRkKCdmcmFuY3MnLCBuZXcgZ3JpZC5sb2NhbGl6YXRpb24uTnVtYmVyRm9ybWF0dGVyKCdmci1GUicsIHtcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeScsXG4gICAgICAgIGN1cnJlbmN5OiAnRVVSJ1xuICAgIH0pKTtcblxuICAgIGdyaWQubG9jYWxpemF0aW9uLmFkZCh7XG4gICAgICAgIG5hbWU6ICdoaG1tJywgLy8gYWx0ZXJuYXRpdmUgdG8gaGF2aW5nIHRvIGhhbWUgbG9jYWxpemVyIGluIGBncmlkLmxvY2FsaXphdGlvbi5hZGRgXG5cbiAgICAgICAgLy8gcmV0dXJucyBmb3JtYXR0ZWQgc3RyaW5nIGZyb20gbnVtYmVyXG4gICAgICAgIGZvcm1hdDogZnVuY3Rpb24obWlucykge1xuICAgICAgICAgICAgdmFyIGhoID0gTWF0aC5mbG9vcihtaW5zIC8gNjApICUgMTIgfHwgMTIsIC8vIG1vZHVsbyAxMiBocnMgd2l0aCAwIGJlY29taW5nIDEyXG4gICAgICAgICAgICAgICAgbW0gPSAobWlucyAlIDYwICsgMTAwICsgJycpLnN1YnN0cigxLCAyKSxcbiAgICAgICAgICAgICAgICBBbVBtID0gbWlucyA8IGRlbW8uTk9PTiA/ICdBTScgOiAnUE0nO1xuICAgICAgICAgICAgcmV0dXJuIGhoICsgJzonICsgbW0gKyAnICcgKyBBbVBtO1xuICAgICAgICB9LFxuXG4gICAgICAgIGludmFsaWQ6IGZ1bmN0aW9uKGhobW0pIHtcbiAgICAgICAgICAgIHJldHVybiAhL14oMD9bMS05XXwxWzAtMl0pOlswLTVdXFxkJC8udGVzdChoaG1tKTsgLy8gMTI6NTkgbWF4XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gcmV0dXJucyBudW1iZXIgZnJvbSBmb3JtYXR0ZWQgc3RyaW5nXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbihoaG1tKSB7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSBoaG1tLm1hdGNoKC9eKFxcZCspOihcXGR7Mn0pJC8pO1xuICAgICAgICAgICAgcmV0dXJuIE51bWJlcihwYXJ0c1sxXSkgKiA2MCArIE51bWJlcihwYXJ0c1syXSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBncmlkO1xuXG59O1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbid1c2Ugc3RyaWN0Jztcblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5kZW1vID0gbmV3IERlbW87XG59O1xuXG52YXIgSHlwZXJncmlkID0gZmluLkh5cGVyZ3JpZDtcblxuZnVuY3Rpb24gRGVtbygpIHtcbiAgICB2YXIgdmVyc2lvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2ZXJzaW9uJyksXG4gICAgICAgIHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG5cbiAgICB2ZXJzaW9uLmlubmVyVGV4dCA9IEh5cGVyZ3JpZC5wcm90b3R5cGUudmVyc2lvbjtcbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gdmVyc2lvbi5wYXJlbnRFbGVtZW50LmlubmVyVGV4dDtcblxuICAgIHZhciBncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gQmVjYXVzZSB2MyBkZWZhdWx0cyB0byB1c2UgZGF0YXNhdXItbG9jYWwgKHdoaWNoIGlzIHN0aWxsIGluY2x1ZGVkIGluIHRoZSBidWlsZCksXG4gICAgICAgIC8vIHNwZWNpZnlpbmcgaXQgaGVyZSBpcyBzdGlsbCBvcHRpb25hbCwgYnV0IG1heSBiZSByZXF1aXJlZCBmb3IgdjQuXG4gICAgICAgIC8vIFVuY29tbWVudCBvbmUgb2YgdGhlIGZvbGxvd2luZyAyIGxpbmVzIHRvIHNwZWNpZnkgKFwiYnJpbmcgeW91ciBvd25cIikgZGF0YSBzb3VyY2U6XG5cbiAgICAgICAgLy8gZGF0YU1vZGVsOiBuZXcgKEh5cGVyZ3JpZC5yZXF1aXJlKCdkYXRhc2F1ci1sb2NhbCcpKShkYXRhLnBlb3BsZTEsIGdldFNjaGVtYShkYXRhLnBlb3BsZTEpKSxcbiAgICAgICAgLy8gRGF0YU1vZGVsOiBIeXBlcmdyaWQucmVxdWlyZSgnZGF0YXNhdXItbG9jYWwnKSxcblxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEucGVvcGxlMSxcbiAgICAgICAgbWFyZ2luOiB7IGJvdHRvbTogJzE3cHgnLCByaWdodDogJzE3cHgnIH0sXG4gICAgICAgIHBsdWdpbnM6IHRoaXMucGx1Z2lucyxcbiAgICAgICAgLy8gc2NoZW1hOiBteUN1c3RvbVNjaGVtYSxcbiAgICAgICAgc3RhdGU6IHsgY29sb3I6ICdvcmFuZ2UnIH1cbiAgICB9O1xuXG4gICAgdmFyIGdyaWQgPSBuZXcgSHlwZXJncmlkKCdkaXYjaHlwZXJncmlkLWV4YW1wbGUnLCBncmlkT3B0aW9ucyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh3aW5kb3csIHtcbiAgICAgICAgZ3JpZDogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZ3JpZDsgfSB9LFxuICAgICAgICBnOiB7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBncmlkOyB9IH0sXG4gICAgICAgIGI6IHsgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIGdyaWQuYmVoYXZpb3I7IH0gfSxcbiAgICAgICAgbTogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZ3JpZC5iZWhhdmlvci5kYXRhTW9kZWw7IH0gfVxuICAgIH0pO1xuXG4gICAgdGhpcy5ncmlkID0gZ3JpZDtcblxuICAgIGNvbnNvbGUubG9nKCdzY2hlbWEnLCBncmlkLmJlaGF2aW9yLnNjaGVtYSk7XG5cbiAgICB0aGlzLmluaXRDZWxsUmVuZGVyZXJzKCk7XG4gICAgdGhpcy5pbml0Rm9ybWF0dGVycygpO1xuICAgIHRoaXMuaW5pdENlbGxFZGl0b3JzKCk7XG4gICAgdGhpcy5pbml0RXZlbnRzKCk7XG4gICAgdGhpcy5pbml0RGFzaGJvYXJkKCk7XG4gICAgdGhpcy5pbml0U3RhdGUoKTtcbn1cblxuRGVtby5wcm90b3R5cGUgPSB7XG4gICAgZGF0YTogcmVxdWlyZSgnLi4vLi4vZGF0YS93aWRlZGF0YScpLFxuICAgIGluaXRDZWxsUmVuZGVyZXJzOiByZXF1aXJlKCcuL2NlbGxSZW5kZXJlcnMnKSxcbiAgICBpbml0Rm9ybWF0dGVyczogcmVxdWlyZSgnLi9mb3JtYXR0ZXJzJyksXG4gICAgaW5pdENlbGxFZGl0b3JzOiByZXF1aXJlKCcuL2NlbGxFZGl0b3JzJyksXG4gICAgaW5pdEV2ZW50czogcmVxdWlyZSgnLi9ldmVudHMnKSxcbiAgICBpbml0RGFzaGJvYXJkOiByZXF1aXJlKCcuL2Rhc2hib2FyZCcpLFxuICAgIGluaXRTdGF0ZTogcmVxdWlyZSgnLi9zZXRTdGF0ZScpLFxuXG4gICAgcGx1Z2luczogcmVxdWlyZSgnZmluLWh5cGVyZ3JpZC1ldmVudC1sb2dnZXInKSxcblxuICAgIHJlc2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5ncmlkLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuaW5pdEV2ZW50cygpO1xuICAgIH0sXG5cbiAgICBzZXREYXRhOiBmdW5jdGlvbihkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSAhZGF0YS5sZW5ndGggPyB1bmRlZmluZWQgOiBvcHRpb25zIHx8IHtcbiAgICAgICAgICAgIHNjaGVtYTogZ2V0U2NoZW1hKGRhdGEpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ3JpZC5zZXREYXRhKGRhdGEsIG9wdGlvbnMpO1xuICAgIH0sXG5cbiAgICB0b2dnbGVFbXB0eURhdGE6IGZ1bmN0aW9uIHRvZ2dsZUVtcHR5RGF0YSgpIHtcbiAgICAgICAgdmFyIGJlaGF2aW9yID0gdGhpcy5ncmlkLmJlaGF2aW9yO1xuXG4gICAgICAgIGlmICghdGhpcy5vbGREYXRhKSB7XG4gICAgICAgICAgICB0aGlzLm9sZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogYmVoYXZpb3IuZGF0YU1vZGVsLmRhdGEsXG4gICAgICAgICAgICAgICAgc2NoZW1hOiBiZWhhdmlvci5zY2hlbWEsXG4gICAgICAgICAgICAgICAgYWN0aXZlQ29sdW1uczogYmVoYXZpb3IuZ2V0QWN0aXZlQ29sdW1ucygpLm1hcChmdW5jdGlvbihjb2x1bW4pIHsgcmV0dXJuIGNvbHVtbi5pbmRleDsgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvL2ltcG9ydGFudCB0byBzZXQgdG9wIHRvdGFscyBmaXJzdFxuICAgICAgICAgICAgc2V0RGF0YShbXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL2ltcG9ydGFudCB0byBzZXQgdG9wIHRvdGFscyBmaXJzdFxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHRoaXMub2xkRGF0YS5kYXRhLCB0aGlzLm9sZERhdGEuc2NoZW1hKTtcbiAgICAgICAgICAgIGJlaGF2aW9yLnNldENvbHVtbkluZGV4ZXModGhpcy5vbGREYXRhLmFjdGl2ZUNvbHVtbnMpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMub2xkRGF0YTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICByZXNldERhdGE6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNldERhdGEodGhpcy5kYXRhLnBlb3BsZTEpO1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSgpO1xuICAgIH0sXG5cbiAgICBzZXQgdmVudChzdGFydCkge1xuICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5sb2dTdGFydCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ncmlkLmxvZ1N0b3AoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cbiAgICB2YXIgZGVtbyA9IHRoaXMsXG4gICAgICAgIGdyaWQgPSBkZW1vLmdyaWQsXG4gICAgICAgIHNjaGVtYSA9IGdyaWQuYmVoYXZpb3Iuc2NoZW1hLFxuICAgICAgICBncmVlbmxhbmQgPSB7IGNvbG9yOiAnIzExNjYxMScsIGJhY2tncm91bmRDb2xvcjogJyNlOGZmZTgnLCBmb250OiAnaXRhbGljIHNtYWxsIGdhcmFtb25kJyB9O1xuXG4gICAgdmFyIHN0YXRlID0ge1xuICAgICAgICBjb2x1bW5JbmRleGVzOiBbXG4gICAgICAgICAgICBzY2hlbWEubGFzdE5hbWUuaW5kZXgsXG4gICAgICAgICAgICBzY2hlbWEudG90YWxOdW1iZXJPZlBldHNPd25lZC5pbmRleCxcbiAgICAgICAgICAgIHNjaGVtYS5oZWlnaHQuaW5kZXgsXG4gICAgICAgICAgICBzY2hlbWEuYmlydGhEYXRlLmluZGV4LFxuICAgICAgICAgICAgc2NoZW1hLmJpcnRoVGltZS5pbmRleCxcbiAgICAgICAgICAgIHNjaGVtYS5iaXJ0aFN0YXRlLmluZGV4LFxuICAgICAgICAgICAgLy8gc2NoZW1hLnJlc2lkZW5jZVN0YXRlLmluZGV4LFxuICAgICAgICAgICAgc2NoZW1hLmVtcGxveWVkLmluZGV4LFxuICAgICAgICAgICAgLy8gc2NoZW1hLmZpcnN0TmFtZS5pbmRleCxcbiAgICAgICAgICAgIHNjaGVtYS5pbmNvbWUuaW5kZXgsXG4gICAgICAgICAgICBzY2hlbWEudHJhdmVsLmluZGV4LFxuICAgICAgICAgICAgLy8gc2NoZW1hLnNxdWFyZU9mSW5jb21lLmluZGV4XG4gICAgICAgIF0sXG5cbiAgICAgICAgbm9EYXRhTWVzc2FnZTogJ05vIERhdGEgdG8gRGlzcGxheScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgZm9udDogJ25vcm1hbCBzbWFsbCBnYXJhbW9uZCcsXG4gICAgICAgIHJvd1N0cmlwZXM6IFtcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGdyZWVubGFuZCxcbiAgICAgICAgICAgIGdyZWVubGFuZCxcbiAgICAgICAgICAgIGdyZWVubGFuZFxuICAgICAgICBdLFxuXG4gICAgICAgIGZpeGVkQ29sdW1uQ291bnQ6IDEsXG4gICAgICAgIGZpeGVkUm93Q291bnQ6IDQsXG5cbiAgICAgICAgY29sdW1uQXV0b3NpemluZzogZmFsc2UsXG4gICAgICAgIGhlYWRlclRleHRXcmFwcGluZzogdHJ1ZSxcblxuICAgICAgICBoYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgcmVuZGVyRmFsc3k6IHRydWUsXG5cbiAgICAgICAgc2Nyb2xsYmFySG92ZXJPZmY6ICd2aXNpYmxlJyxcbiAgICAgICAgc2Nyb2xsYmFySG92ZXJPdmVyOiAndmlzaWJsZScsXG4gICAgICAgIGNvbHVtbkhlYWRlckJhY2tncm91bmRDb2xvcjogJ3BpbmsnLFxuXG4gICAgICAgIGNoZWNrYm94T25seVJvd1NlbGVjdGlvbnM6IHRydWUsXG5cbiAgICAgICAgYXV0b1NlbGVjdFJvd3M6IHRydWUsXG5cbiAgICAgICAgY2FsY3VsYXRvcnM6IHtcbiAgICAgICAgICAgIEFkZDEwOiBhZGQxMC50b1N0cmluZygpXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29sdW1uczoge1xuICAgICAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICAgICAgaGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ2Zvb3QnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbiAgICAgICAgICAgIGxhc3RfbmFtZToge1xuICAgICAgICAgICAgICAgIGNvbHVtbkhlYWRlckJhY2tncm91bmRDb2xvcjogJyMxNDJCNkYnLCAvL2RhcmsgYmx1ZVxuICAgICAgICAgICAgICAgIGNvbHVtbkhlYWRlckNvbG9yOiAnd2hpdGUnLFxuICAgICAgICAgICAgICAgIGNvbHVtbkhlYWRlckhhbGlnbjogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIHJpZ2h0SWNvbjogJ2Rvd24tcmVjdGFuZ2xlJyxcbiAgICAgICAgICAgICAgICBsaW5rOiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmaXJzdF9uYW1lOiB7XG5cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHRvdGFsX251bWJlcl9vZl9wZXRzX293bmVkOiB7XG4gICAgICAgICAgICAgICAgaGFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIGNhbGN1bGF0b3I6ICdBZGQxMCcsXG4gICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbidcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJpcnRoRGF0ZToge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogJ3NpbmdkYXRlJyxcbiAgICAgICAgICAgICAgICByaWdodEljb246ICdjYWxlbmRhcicsXG4gICAgICAgICAgICAgICAgLy9zdHJpa2VUaHJvdWdoOiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBiaXJ0aFRpbWU6IHtcbiAgICAgICAgICAgICAgICBoYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgZWRpdG9yOiAndGltZScsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnaGhtbSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJpcnRoU3RhdGU6IHtcbiAgICAgICAgICAgICAgICBlZGl0b3I6ICdjb2xvcnRleHQnLFxuICAgICAgICAgICAgICAgIHJpZ2h0SWNvbjogJ2Rvd24tcmVjdGFuZ2xlJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzaWRlbmNlU3RhdGU6IHtcbiAgICAgICAgICAgICAgICByaWdodEljb246ICdkb3duLXJlY3RhbmdsZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGVtcGxveWVkOiB7XG4gICAgICAgICAgICAgICAgaGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIHJlbmRlcmVyOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGluY29tZToge1xuICAgICAgICAgICAgICAgIGhhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdwb3VuZHMnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0cmF2ZWw6IHtcbiAgICAgICAgICAgICAgICBoYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnZnJhbmNzJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qIEZvbGxvd2luZyBgcm93c2AgYW5kIGBjZWxsc2AgZXhhbXBsZXMgc2hvd3MgaG93IHRvIHNldCByb3cgYW5kIGNlbGwgcHJvcGVydGllcyBkZWNsYXJhdGl2ZWx5LFxuICAgICAgICAgKiB1c2VmdWwgZm9yIHN0YXRpYyBncmlkcyB3aGVuIGNlbGwgY29vcmRpbmF0ZXMgYXJlIGtub3duIGFoZWFkIG9mIHRpbWUuXG4gICAgICAgICAqXG4gICAgICAgICAqIChUaGVyZSBhcmUgYXMgd2VsbCBzZXZlcmFsIGVxdWl2YWxlbnQgcHJvZ3JhbW1hdGljIG1ldGhvZHMgZm9yIHNldHRpbmcgY2VsbHMgcHJvcHMsIHN1Y2ggYXNcbiAgICAgICAgICogYGNlbGwuc2V0UHJvcGVydHlgLFxuICAgICAgICAgKiBgY2VsbC5zZXRQcm9wZXJ0aWVzYCxcbiAgICAgICAgICogYGJlaGF2aW9yLnNldENlbGxQcm9wZXJ0eWAsXG4gICAgICAgICAqIGBiZWhhdmlvci5zZXRDZWxsUHJvcGVydGllc2AsXG4gICAgICAgICAqIF9ldGMuXylcbiAgICAgICAgICpcbiAgICAgICAgICogQ2F2ZWF0OiBGb3IgZHluYW1pYyBncmlkIGRhdGEsIHdoZW4gY2VsbCBjb29yZGluYXRlcyBhcmUgKm5vdCoga25vd24gYXQgc3RhcnQgdXAgKHdoZW4gc3RhdGUgaXNcbiAgICAgICAgICogdXN1YWxseSBhcHBsaWVkKSwgbG9hZGluZyByb3cgYW5kIGNlbGwgcHJvcGVydGllcyBfd2l0aCB0aGUgZGF0YV8gKGFzIG1ldGFkYXRhKSBoYXMgYWR2YW50YWdlc1xuICAgICAgICAgKiBhbmQgaXMsIHByZWZlcnJlZCBlc3BlY2lhbGx5IGZvciBmcmVxdWVudGx5IGNoYW5naW5nIHJvd3MgYW5kIGNlbGxzLiBJbiB0aGlzIHBhcmFkaWdtLCByb3cgYW5kXG4gICAgICAgICAqIGNlbGwgcHJvcGVydGllcyBhcmUgb21pdHRlZCBoZXJlIGFuZCB0aGUgc3RhdGUgb2JqZWN0IG9ubHkgbG9hZHMgZ3JpZCBhbmQgY29sdW1uIHByb3BlcnRpZXMuXG4gICAgICAgICAqIChNZXRhZGF0YSBpcyBzdXBwb3J0ZWQgaW4gdGhlIGRhdGEgc291cmNlIHdoZW4gaXQgaW1wbGVtZW50cyBgZ2V0Um93TWV0YURhdGFgIGFuZCBgc2V0Um93TWV0YURhdGFgLilcbiAgICAgICAgICovXG4gICAgICAgIHJvd3M6IHtcbiAgICAgICAgICAgIGhlYWRlcjogeyAvLyBzdWJncmlkIGtleVxuICAgICAgICAgICAgICAgIDA6IHsgLy8gcm93IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIC8vIHJvdyBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAgLy8gKGhlaWdodCBpcyB0aGUgb25seSBzdXBwb3J0ZWQgcm93IHByb3BlcnR5IGF0IHRoZSBjdXJyZW50IHRpbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjZWxsczogeyAvLyBjZWxsIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGRhdGE6IHsgLy8gc3ViZ3JpZCBrZXlcbiAgICAgICAgICAgICAgICAxNjogeyAvLyByb3cgaW5kZXhcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB7IC8vIGNvbHVtbiBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjZWxsIHByb3BlcnRpZXM6XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250OiAnMTBwdCBUYWhvbWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdsaWdodGJsdWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbGlnbjogJ2xlZnQnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ3JpZC5zZXRTdGF0ZShzdGF0ZSk7XG5cbiAgICBncmlkLnRha2VGb2N1cygpO1xuXG4gICAgZGVtby5yZXNldERhc2hib2FyZCgpO1xufTtcblxuZnVuY3Rpb24gYWRkMTAoZGF0YVJvdywgY29sdW1uTmFtZSwgc3Vicm93KSB7XG4gICAgdmFyIHZhbCA9IGRhdGFSb3dbY29sdW1uTmFtZV07XG4gICAgaWYgKHZhbC5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHsgdmFsID0gdmFsW3N1YnJvd107IH1cbiAgICByZXR1cm4gdmFsICsgMTA7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjYXRhbG9nID0gcmVxdWlyZSgnb2JqZWN0LWNhdGFsb2cnKTtcbnZhciBmaW5kID0gcmVxdWlyZSgnbWF0Y2gtcG9pbnQnKTtcbnZhciBHcmV5bGlzdCA9IHJlcXVpcmUoJ2dyZXlsaXN0Jyk7XG5cblxudmFyIGlzRE9NID0gKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHdpbmRvdykgPT09ICdbb2JqZWN0IFdpbmRvd10nICYmXG4gICAgdHlwZW9mIHdpbmRvdy5Ob2RlID09PSAnZnVuY3Rpb24nXG4pO1xuXG52YXIgaXNEb21Ob2RlID0gaXNET00gPyBmdW5jdGlvbihvYmopIHsgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIHdpbmRvdy5Ob2RlIH0gOiBmdW5jdGlvbigpIHt9O1xuXG5cbi8qKlxuICogQHN1bW1hcnkgU2VhcmNoIGFuIG9iamVjdCdzIGNvZGUgZm9yIHBhdHRlcm4gbWF0Y2hlcy5cbiAqIEBkZXNjIFNlYXJjaGVzIGFsbCBjb2RlIGluIHRoZSB2aXNpYmxlIGV4ZWN1dGlvbiBjb250ZXh0IHVzaW5nIHRoZSBwcm92aWRlZCByZWdleCBwYXR0ZXJuLCByZXR1cm5pbmcgdGhlIGVudGlyZSBwYXR0ZXJuIG1hdGNoLlxuICpcbiAqIElmIGNhcHR1cmUgZ3JvdXBzIGFyZSBzcGVjaWZpZWQgaW4gdGhlIHBhdHRlcm4sIHJldHVybnMgdGhlIGxhc3QgY2FwdHVyZSBncm91cCBtYXRjaCwgdW5sZXNzIGBvcHRpb25zLmNhcHR1cmVHcm91cGAgaXMgZGVmaW5lZCwgaW4gd2hpY2ggY2FzZSByZXR1cm5zIHRoZSBncm91cCB3aXRoIHRoYXQgaW5kZXggd2hlcmUgYDBgIG1lYW5zIHRoZSBlbnRpcmUgcGF0dGVybiwgX2V0Yy5fIChwZXIgYFN0cmluZy5wcm90b3R5cGUubWF0Y2hgKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xSZWdFeHB9IHBhdHRlcm4gLSBTZWFyY2ggYXJndW1lbnQuXG4gKiBEb24ndCB1c2UgZ2xvYmFsIGZsYWcgb24gUmVnRXhwOyBpdCdzIHVubmVjZXNzYXJ5IGFuZCBzdXBwcmVzc2VzIHN1Ym1hdGNoZXMgb2YgY2FwdHVyZSBncm91cHMuXG4gKlxuICogQHBhcmFtIFtvcHRpb25zXVxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLmNhcHR1cmVHcm91cF0gLSBJZmYgZGVmaW5lZCwgaW5kZXggb2YgYSBzcGVjaWZpYyBjYXB0dXJlIGdyb3VwIHRvIHJldHVybiBmb3IgZWFjaCBtYXRjaC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVjdXJzZV0gLSBFcXVpdmFsZW50IHRvIHNldHRpbmcgYm90aCBgcmVjdXJzZU93bmAgYW5kIGByZWN1cnNlQW5jZXN0b3JzYC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVjdXJzZU93bl0gLSBSZWN1cnNlIG93biBzdWJvYmplY3RzLlxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5yZWN1cnNlQW5jZXN0b3JzXSAtIFJlY3Vyc2Ugc3Vib2JqZWN0cyBvZiBvYmplY3RzIG9mIHRoZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmdyZXlsaXN0XSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25laXQvZ3JleWxpc3RcbiAqIEBwYXJhbSBbb3B0aW9ucy5ncmV5bGlzdC53aGl0ZV0gLSBJZiBnaXZlbiwgb25seSBsaXN0ZWQgbWF0Y2hlcyBhcmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdHMuXG4gKiBAcGFyYW0gW29wdGlvbnMuZ3JleWxpc3QuYmxhY2tdIC0gSWYgZ2l2ZW4sIGxpc3RlZCBtYXRjaGVzIGFyZSBleGNsdWRlZCBmcm9tIHRoZSByZXN1bHRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5jYXRhbG9nXSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25laXQvb2JqZWN0LWNhdGFsb2dcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuY2F0YWxvZy5vd25dIC0gT25seSBzZWFyY2ggb3duIG9iamVjdDsgb3RoZXJ3aXNlIHNlYXJjaCBvd24gKyBlbnRpcmUgcHJvdG90eXBlIGNoYWluLlxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zLmNhdGFsb2cuZ3JleWxpc3RdIC0gaHR0cHM6Ly9naXRodWIuY29tL2pvbmVpdC9ncmV5bGlzdFxuICogQHBhcmFtIFtvcHRpb25zLmNhdGFsb2cuZ3JleWxpc3Qud2hpdGVdIC0gSWYgZ2l2ZW4sIG9ubHkgbGlzdGVkIG1lbWJlcnMgYXJlIGNhdGFsb2dlZC5cbiAqIEBwYXJhbSBbb3B0aW9ucy5jYXRhbG9nLmdyZXlsaXN0LmJsYWNrXSAtIElmIGdpdmVuLCBsaXN0ZWQgbWVtYmVycyBhcmUgKm5vdCogY2F0YWxvZ2VkLlxuICpcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gUGF0dGVybiBtYXRjaGVzLlxuICovXG5mdW5jdGlvbiBtYXRjaChwYXR0ZXJuLCBvcHRpb25zLCBieUdyZXlsaXN0LCBtYXRjaGVzLCBzY2FubmVkKSB7XG4gICAgdmFyIHRvcExldmVsQ2FsbCA9ICFtYXRjaGVzO1xuXG4gICAgaWYgKHRvcExldmVsQ2FsbCkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSB0b3AtbGV2ZWwgKG5vbi1yZWN1cnNlZCkgY2FsbCBzbyBpbnRpYWxpemU6XG4gICAgICAgIHZhciBncmV5bGlzdCA9IG5ldyBHcmV5bGlzdChvcHRpb25zICYmIG9wdGlvbnMuZ3JleWxpc3QpO1xuICAgICAgICBieUdyZXlsaXN0ID0gZ3JleWxpc3QudGVzdC5iaW5kKGdyZXlsaXN0KTtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgc2Nhbm5lZCA9IFtdO1xuICAgIH1cblxuICAgIHZhciByb290ID0gdGhpcztcbiAgICB2YXIgbWVtYmVycyA9IGNhdGFsb2cuY2FsbChyb290LCBvcHRpb25zLmNhdGFsb2cpO1xuXG4gICAgc2Nhbm5lZC5wdXNoKHJvb3QpO1xuXG4gICAgT2JqZWN0LmtleXMobWVtYmVycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBvYmogPSBtZW1iZXJzW2tleV07XG4gICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG5cbiAgICAgICAgaWYgKGRlc2NyaXB0b3IudmFsdWUgPT09IG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIGRvbid0IGNhdGFsb2cgc2VsZiB3aGVuIGZvdW5kIHRvIGhhdmUgYmVlbiBtaXhlZCBpblxuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmtleXMoZGVzY3JpcHRvcikuZm9yRWFjaChmdW5jdGlvbiAocHJvcE5hbWUpIHtcbiAgICAgICAgICAgIHZhciBoaXRzLCBwcm9wID0gZGVzY3JpcHRvcltwcm9wTmFtZV07XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vIHByb3BOYW1lIG11c3QgYmUgYGdldGAgb3IgYHNldGAgb3IgYHZhbHVlYFxuICAgICAgICAgICAgICAgIGhpdHMgPSBmaW5kKHByb3AudG9TdHJpbmcoKSwgcGF0dGVybiwgb3B0aW9ucy5jYXB0dXJlR3JvdXApLmZpbHRlcihieUdyZXlsaXN0KTtcbiAgICAgICAgICAgICAgICBoaXRzLmZvckVhY2goZnVuY3Rpb24oaGl0KSB7IG1hdGNoZXMucHVzaChoaXQpOyB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgKG9wdGlvbnMucmVjdXJzZSB8fCBvcHRpb25zLnJlY3Vyc2VPd24gJiYgb2JqID09PSByb290IHx8IG9wdGlvbnMucmVjdXJzZUNoYWluICYmIG9iaiAhPT0gcm9vdCkgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgICAgICAhaXNEb21Ob2RlKHByb3ApICYmIC8vIGRvbid0IHNlYXJjaCBET00gb2JqZWN0c1xuICAgICAgICAgICAgICAgIHNjYW5uZWQuaW5kZXhPZihwcm9wKSA8IDAgLy8gZG9uJ3QgcmVjdXJzZSBvbiBvYmplY3RzIGFscmVhZHkgc2Nhbm5lZFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJvcE5hbWUgbXVzdCBiZSBgdmFsdWVgXG4gICAgICAgICAgICAgICAgbWF0Y2guY2FsbChwcm9wLCBwYXR0ZXJuLCBvcHRpb25zLCBieUdyZXlsaXN0LCBtYXRjaGVzLCBzY2FubmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAodG9wTGV2ZWxDYWxsKSB7XG4gICAgICAgIG1hdGNoZXMuc29ydCgpO1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoOyIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gbG9nRXZlbnRPYmplY3QoZSkge1xuICAgIHRoaXMubG9nKGUudHlwZSwgJzo6JywgZSk7XG59XG5cbmZ1bmN0aW9uIGxvZ0RldGFpbChlKSB7XG4gICAgdGhpcy5sb2coZS50eXBlLCAnOjonLCBlLmRldGFpbCk7XG59XG5cbmZ1bmN0aW9uIGxvZ1Njcm9sbChlKSB7XG4gICAgdGhpcy5sb2coZS50eXBlLCAnOjonLCBlLmRldGFpbC52YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGxvZ0NlbGwoZSkge1xuICAgIHZhciBnQ2VsbCA9IGUuZGV0YWlsLmdyaWRDZWxsO1xuICAgIHZhciBkQ2VsbCA9IGUuZGV0YWlsLmRhdGFDZWxsO1xuICAgIHRoaXMubG9nKGUudHlwZSwgJzo6JyxcbiAgICAgICAgJ2dyaWQtY2VsbDonLCB7IHg6IGdDZWxsLngsIHk6IGdDZWxsLnkgfSxcbiAgICAgICAgJ2RhdGEtY2VsbDonLCB7IHg6IGRDZWxsLngsIHk6IGRDZWxsLnkgfSk7XG59XG5cbmZ1bmN0aW9uIGxvZ1NlbGVjdGlvbihlKSB7XG4gICAgdGhpcy5sb2coZS50eXBlLCAnOjonLCBlLmRldGFpbC5yb3dzLCBlLmRldGFpbC5jb2x1bW5zLCBlLmRldGFpbC5zZWxlY3Rpb25zKTtcbn1cblxuZnVuY3Rpb24gbG9nUm93KGUpIHtcbiAgICB2YXIgcm93Q29udGV4dCA9IGUuZGV0YWlsLnByaW1pdGl2ZUV2ZW50LmRhdGFSb3c7XG4gICAgdGhpcy5sb2coZS50eXBlLCAnOjonLCAncm93LWNvbnRleHQ6Jywgcm93Q29udGV4dCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgICdmaW4tY2VsbC1lbnRlcic6IGxvZ0NlbGwsXG4gICAgJ2Zpbi1jbGljayc6IGxvZ0NlbGwsXG4gICAgJ2Zpbi1kb3VibGUtY2xpY2snOiBsb2dSb3csXG4gICAgJ2Zpbi1zZWxlY3Rpb24tY2hhbmdlZCc6IGxvZ1NlbGVjdGlvbixcbiAgICAnZmluLWNvbnRleHQtbWVudSc6IGxvZ0NlbGwsXG5cbiAgICAnZmluLXNjcm9sbC14JzogbG9nU2Nyb2xsLFxuICAgICdmaW4tc2Nyb2xsLXknOiBsb2dTY3JvbGwsXG5cbiAgICAnZmluLXJvdy1zZWxlY3Rpb24tY2hhbmdlZCc6IGxvZ0RldGFpbCxcbiAgICAnZmluLWNvbHVtbi1zZWxlY3Rpb24tY2hhbmdlZCc6IGxvZ0RldGFpbCxcbiAgICAnZmluLWVkaXRvci1kYXRhLWNoYW5nZSc6IGxvZ0RldGFpbCxcbiAgICAnZmluLWVkaXRvci1rZXl1cCc6IGxvZ0RldGFpbCxcbiAgICAnZmluLWVkaXRvci1rZXlwcmVzcyc6IGxvZ0RldGFpbCxcbiAgICAnZmluLWVkaXRvci1rZXlkb3duJzogbG9nRGV0YWlsLFxuICAgICdmaW4tZ3JvdXBzLWNoYW5nZWQnOiBsb2dEZXRhaWwsXG5cbiAgICAnZmluLWZpbHRlci1hcHBsaWVkJzogbG9nRXZlbnRPYmplY3QsXG4gICAgJ2Zpbi1yZXF1ZXN0LWNlbGwtZWRpdCc6IGxvZ0V2ZW50T2JqZWN0LFxuICAgICdmaW4tYmVmb3JlLWNlbGwtZWRpdCc6IGxvZ0V2ZW50T2JqZWN0LFxuICAgICdmaW4tYWZ0ZXItY2VsbC1lZGl0JzogbG9nRXZlbnRPYmplY3Rcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBTdGFyTG9nID0gcmVxdWlyZSgnc3RhcmxvZycpO1xuXG52YXIgZXZlbnRMb2dnZXJQbHVnaW4gPSB7XG5cbiAgICBzdGFydDogZnVuY3Rpb24ob3B0aW9ucylcbiAgICB7XG4gICAgICAgIGlmIChvcHRpb25zICYmIHRoaXMuc3RhcmxvZykge1xuICAgICAgICAgICAgdGhpcy5zdGFybG9nLnN0b3AoKTsgLy8gc3RvcCB0aGUgb2xkIG9uZSBiZWZvcmUgcmVkZWZpbmluZyBpdCB3aXRoIG5ldyBvcHRpb25zIG9iamVjdFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLnN0YXJsb2cgfHwgb3B0aW9ucykge1xuICAgICAgICAgICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMpO1xuXG4gICAgICAgICAgICAvLyBzZWFyY2ggZ3JpZCBvYmplY3QgZm9yIFwiRXZlbnQoJ3lhZGEteWFkYSdcIiBvciBcIkV2ZW50LmNhbGwodGhpcywgJ3lhZGEteWFkYSdcIlxuICAgICAgICAgICAgb3B0aW9ucy5zZWxlY3QgPSBvcHRpb25zLnNlbGVjdCB8fCB0aGlzO1xuICAgICAgICAgICAgb3B0aW9ucy5wYXR0ZXJuID0gb3B0aW9ucy5wYXR0ZXJuIHx8IC9FdmVudChcXC5jYWxsXFwodGhpcywgfFxcKCknKGZpbi1bYS16LV0rKScvO1xuICAgICAgICAgICAgb3B0aW9ucy50YXJnZXRzID0gb3B0aW9ucy50YXJnZXRzIHx8IHRoaXMuY2FudmFzLmNhbnZhcztcblxuICAgICAgICAgICAgLy8gbWl4IG9wdGlvbnMubGlzdGVuZXJEaWN0aW9uYXJ5IG9uIHRvcCBvZiBzb21lIGN1c3RvbSBsaXN0ZW5lcnNcbiAgICAgICAgICAgIG9wdGlvbnMubGlzdGVuZXJEaWN0aW9uYXJ5ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVxdWlyZSgnLi9jdXN0b20tbGlzdGVuZXJzJyksIG9wdGlvbnMubGlzdGVuZXJEaWN0aW9uYXJ5KTtcblxuICAgICAgICAgICAgLy8gbWl4IGZpbi10aWNrIG9uIHRvcCBvZiBvcHRpb25zLm1hdGNoLmdyZXlsaXN0LmJsYWNrXG4gICAgICAgICAgICB2YXIgYmxhY2sgPSBbJ2Zpbi10aWNrJ107XG4gICAgICAgICAgICBvcHRpb25zLm1hdGNoID0gb3B0aW9ucy5tYXRjaCB8fCB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMubWF0Y2guZ3JleWxpc3QgPSBvcHRpb25zLm1hdGNoLmdyZXlsaXN0IHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5tYXRjaC5ncmV5bGlzdC5ibGFjayA9IG9wdGlvbnMubWF0Y2guZ3JleWxpc3QuYmxhY2sgPyBibGFjay5jb25jYXQob3B0aW9ucy5tYXRjaC5ncmV5bGlzdC5ibGFjaykgOiBibGFjaztcblxuICAgICAgICAgICAgdGhpcy5zdGFybG9nID0gbmV3IFN0YXJMb2cob3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0YXJsb2cuc3RhcnQoKTtcbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3RhcmxvZy5zdG9wKCk7XG4gICAgfVxuXG59O1xuXG4vLyBOb24tZW51bWVyYWJsZSBtZXRob2RzIGFyZSBub3QgdGhlbXNlbHZlcyBpbnN0YWxsZWQ6XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhldmVudExvZ2dlclBsdWdpbiwge1xuICAgIHByZWluc3RhbGw6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uKEh5cGVyZ3JpZFByb3RvdHlwZSwgQmVoYXZpb3JQcm90b3R5cGUsIG1ldGhvZFByZWZpeCkge1xuICAgICAgICAgICAgaW5zdGFsbC5jYWxsKHRoaXMsIEh5cGVyZ3JpZFByb3RvdHlwZSwgbWV0aG9kUHJlZml4KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBpbnN0YWxsOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihncmlkLCBtZXRob2RQcmVmaXgpIHtcbiAgICAgICAgICAgIGluc3RhbGwuY2FsbCh0aGlzLCBncmlkLCBtZXRob2RQcmVmaXgpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmZ1bmN0aW9uIGluc3RhbGwodGFyZ2V0LCBtZXRob2RQcmVmaXgpIHtcbiAgICBpZiAobWV0aG9kUHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbWV0aG9kUHJlZml4ID0gJ2xvZyc7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0YXJnZXRbcHJlZml4KG1ldGhvZFByZWZpeCwga2V5KV0gPSB0aGlzW2tleV07XG4gICAgfSwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIHByZWZpeChwcmVmaXgsIG5hbWUpIHtcbiAgICB2YXIgY2FwaXRhbGl6ZSA9IHByZWZpeC5sZW5ndGggJiYgcHJlZml4W3ByZWZpeC5sZW5ndGggLSAxXSAhPT0gJ18nO1xuICAgIGlmIChjYXBpdGFsaXplKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnN1YnN0cigwLCAxKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zdWJzdHIoMSk7XG4gICAgfVxuICAgIHJldHVybiBwcmVmaXggKyBuYW1lO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGV2ZW50TG9nZ2VyUGx1Z2luO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKiogQ3JlYXRlcyBhbiBvYmplY3Qgd2l0aCBhIGB0ZXN0YCBtZXRob2QgZnJvbSBvcHRpb25hbCB3aGl0ZWxpc3QgYW5kL29yIGJsYWNrbGlzdFxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdIC0gSWYgbmVpdGhlciBgd2hpdGVgIG5vciBgYmxhY2tgIGFyZSBnaXZlbiwgYWxsIHN0cmluZ3MgcGFzcyBgdGVzdGAuXG4gKiBAcGFyYW0gW29wdGlvbnMud2hpdGVdIC0gSWYgZ2l2ZW4sIG9ubHkgbGlzdGVkIHN0cmluZ3MgcGFzcyBgdGVzdGAuXG4gKiBAcGFyYW0gW29wdGlvbnMuYmxhY2tdIC0gSWYgZ2l2ZW4sIGxpc3RlZCBzdHJpbmdzIGZhaWwgYHRlc3RgLlxuICovXG5mdW5jdGlvbiBHcmV5TGlzdChvcHRpb25zKSB7XG4gICAgdGhpcy53aGl0ZSA9IGdldEZsYXRBcnJheU9mUmVnZXhBbmRPclN0cmluZyhvcHRpb25zICYmIG9wdGlvbnMud2hpdGUpO1xuICAgIHRoaXMuYmxhY2sgPSBnZXRGbGF0QXJyYXlPZlJlZ2V4QW5kT3JTdHJpbmcob3B0aW9ucyAmJiBvcHRpb25zLmJsYWNrKTtcbn1cblxuR3JleUxpc3QucHJvdG90eXBlLnRlc3QgPSBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZzsgLy8gZm9yIG1hdGNoKCkgdXNlXG4gICAgcmV0dXJuIChcbiAgICAgICAgISh0aGlzLndoaXRlICYmICF0aGlzLndoaXRlLnNvbWUobWF0Y2gsIHRoaXMpKSAmJlxuICAgICAgICAhKHRoaXMuYmxhY2sgJiYgdGhpcy5ibGFjay5zb21lKG1hdGNoLCB0aGlzKSlcbiAgICApO1xufTtcblxuZnVuY3Rpb24gbWF0Y2gocGF0dGVybikge1xuICAgIHJldHVybiB0eXBlb2YgcGF0dGVybi50ZXN0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGF0dGVybi50ZXN0KHRoaXMuc3RyaW5nKSAvLyB0eXBpY2FsbHkgYSByZWdleCBidXQgY291bGQgYmUgYW55dGhpbmcgdGhhdCBpbXBsZW1lbnRzIGB0ZXN0YFxuICAgICAgICA6IHRoaXMuc3RyaW5nID09PSBwYXR0ZXJuICsgJyc7IC8vIGNvbnZlcnQgcGF0dGVybiB0byBzdHJpbmcgZXZlbiBmb3IgZWRnZSBjYXNlc1xufVxuXG5mdW5jdGlvbiBnZXRGbGF0QXJyYXlPZlJlZ2V4QW5kT3JTdHJpbmcoYXJyYXksIGZsYXQpIHtcbiAgICBpZiAoIWZsYXQpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdG9wLWxldmVsIChub24tcmVjdXJzZWQpIGNhbGwgc28gaW50aWFsaXplOlxuXG4gICAgICAgIC8vIGB1bmRlZmluZWRgIHBhc3NlcyB0aHJvdWdoIHdpdGhvdXQgYmVpbmcgY29udmVydGVkIHRvIGFuIGFycmF5XG4gICAgICAgIGlmIChhcnJheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhcnJheWlmeSBnaXZlbiBzY2FsYXIgc3RyaW5nLCByZWdleCwgb3Igb2JqZWN0XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcbiAgICAgICAgICAgIGFycmF5ID0gW2FycmF5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluaXRpYWxpemUgZmxhdFxuICAgICAgICBmbGF0ID0gW107XG4gICAgfVxuXG4gICAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAvLyBtYWtlIHN1cmUgYWxsIGVsZW1lbnRzIGFyZSBlaXRoZXIgc3RyaW5nIG9yIFJlZ0V4cFxuICAgICAgICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKSkge1xuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBTdHJpbmddJzpcbiAgICAgICAgICAgIGNhc2UgJ1tvYmplY3QgUmVnRXhwXSc6XG4gICAgICAgICAgICAgICAgZmxhdC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgICAgICAgICAgICAvLyByZWN1cnNlIG9uIGNvbXBsZXggaXRlbSAod2hlbiBhbiBvYmplY3Qgb3IgYXJyYXkpXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgb2JqZWN0IGludG8gYW4gYXJyYXkgKG9mIGl0J3MgZW51bWVyYWJsZSBrZXlzLCBidXQgb25seSB3aGVuIG5vdCB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBPYmplY3Qua2V5cyhpdGVtKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gaXRlbVtrZXldICE9PSB1bmRlZmluZWQ7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBnZXRGbGF0QXJyYXlPZlJlZ2V4QW5kT3JTdHJpbmcoaXRlbSwgZmxhdCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZsYXQucHVzaChpdGVtICsgJycpOyAvLyBjb252ZXJ0IHRvIHN0cmluZ1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmxhdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBHcmV5TGlzdDsiLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQHN1bW1hcnkgRmluZCBhbGwgcGF0dGVybiBtYXRjaGVzLCByZXR1cm4gc3BlY2lmaWVkIGNhcHR1cmUgZ3JvdXAgZm9yIGVhY2guXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IEFuIGFycmF5IGNvbnRhaW5pbmcgYWxsIHRoZSBwYXR0ZXJuIG1hdGNoZXMgZm91bmQgaW4gYHN0cmluZ2AuXG4gKiBUaGUgZW50aXJlIHBhdHRlcm4gbWF0Y2ggaXMgcmV0dXJuZWQgdW5sZXNzIHRoZSBwYXR0ZXJuIGNvbnRhaW5zIG9uZSBvciBtb3JlIHN1Ymdyb3VwcyBpbiB3aGljaCBjYXNlIHRoZSBwb3J0aW9uIG9mIHRoZSBwYXR0ZXJuIG1hdGNoZWQgYnkgdGhlIGxhc3Qgc3ViZ3JvdXAgaXMgcmV0dXJuZWQgdW5sZXNzIGBjYXB0dXJlR3JvdXBgIGlzIGRlZmluZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmVnZXggLSBEb24ndCB1c2UgZ2xvYmFsIGZsYWc7IGl0J3MgdW5uZWNlc3NhcnkgYW5kIHN1cHByZXNzZXMgc3VibWF0Y2hlcyBvZiBjYXB0dXJlIGdyb3Vwcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbY2FwdHVyZUdyb3VwXSAtIElmZiBkZWZpbmVkLCBpbmRleCBvZiBhIHNwZWNpZmljIGNhcHR1cmUgZ3JvdXAgdG8gcmV0dXJuLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHN0cmluZywgcmVnZXgsIGNhcHR1cmVHcm91cCkge1xuICAgIHZhciBtYXRjaGVzID0gW107XG5cbiAgICBmb3IgKHZhciBtYXRjaCwgaSA9IDA7IChtYXRjaCA9IHN0cmluZy5zdWJzdHIoaSkubWF0Y2gocmVnZXgpKTsgaSArPSBtYXRjaC5pbmRleCArIG1hdGNoWzBdLmxlbmd0aCkge1xuICAgICAgICBtYXRjaGVzLnB1c2gobWF0Y2hbY2FwdHVyZUdyb3VwID09PSB1bmRlZmluZWQgPyBtYXRjaC5sZW5ndGggLSAxIDogY2FwdHVyZUdyb3VwXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgR3JleWxpc3QgPSByZXF1aXJlKCdncmV5bGlzdCcpO1xuXG4vKiogQHN1bW1hcnkgQ2F0YWxvZyB0aGUgZXhlY3V0aW9uIGNvbnRleHQgb2JqZWN0LlxuICogQHJldHVybnMge29iamVjdH0gQW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBtZW1iZXIgZm9yIGVhY2ggbWVtYmVyIG9mIHRoZSBleGVjdXRpb24gY29udGV4dCBvYmplY3RcbiAqIHZpc2libGUgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiAoYmFjayB0byBidXQgbm90IGluY2x1ZGluZyBPYmplY3QpLCBwZXIgd2hpdGVsaXN0IGFuZCBibGFja2xpc3QuXG4gKiBFYWNoIG1lbWJlcidzIHZhbHVlIGlzIHRoZSBvYmplY3QgaW4gdGhlIHByb3RvdHlwZSBjaGFpbiB3aGVyZSBmb3VuZC5cbiAqIEBwYXJhbSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMub3duXSAtIFJlc3RyaWN0IHNlYXJjaCBmb3IgZXZlbnQgdHlwZSBzdHJpbmdzIHRvIG93biBtZXRob2RzIHJhdGhlciB0aGFuIGVudGlyZSBwcm90b3R5cGUgY2hhaW4uXG4gKiBAcGFyYW0gW29wdGlvbnMuZ3JleWxpc3RdXG4gKiBAcGFyYW0gW29wdGlvbnMuZ3JleWxpc3Qud2hpdGVdIC0gSWYgZ2l2ZW4sIG9ubHkgbGlzdGVkIG1lbWJlcnMgYXJlIGNhdGFsb2dlZC5cbiAqIEBwYXJhbSBbb3B0aW9ucy5ncmV5bGlzdC5ibGFja10gLSBJZiBnaXZlbiwgbGlzdGVkIG1lbWJlcnMgYXJlICpub3QqIGNhdGFsb2dlZC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBvYmplY3RDYXRhbG9nKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIHZhciBvYmosXG4gICAgICAgIGNhdGFsb2cgPSBPYmplY3QuY3JlYXRlKG51bGwpLCAvLyBLSVNTIG5vIHByb3RvdHlwZSBuZWVkZWRcbiAgICAgICAgd2Fsa1Byb3RvdHlwZUNoYWluID0gIW9wdGlvbnMub3duLFxuICAgICAgICBncmV5bGlzdCA9IG5ldyBHcmV5bGlzdChvcHRpb25zLmdyZXlsaXN0KTtcblxuICAgIGZvciAob2JqID0gdGhpczsgb2JqICYmIG9iaiAhPT0gT2JqZWN0LnByb3RvdHlwZTsgb2JqID0gd2Fsa1Byb3RvdHlwZUNoYWluICYmIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSB7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhKGtleSBpbiBjYXRhbG9nKSAmJiAvLyBub3Qgc2hhZG93ZWQgYnkgYSBtZW1iZXIgb2YgYSBkZXNjZW5kYW50IG9iamVjdFxuICAgICAgICAgICAgICAgIGdyZXlsaXN0LnRlc3Qoa2V5KSAmJlxuICAgICAgICAgICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpLnZhbHVlICE9PSBvYmplY3RDYXRhbG9nXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBjYXRhbG9nW2tleV0gPSBvYmo7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBjYXRhbG9nO1xufTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBtYXRjaCA9IHJlcXVpcmUoJ2NvZGUtbWF0Y2gnKTtcblxuLyoqIEB0eXBlZGVmIHtvYmplY3R9IHN0YXJsb2dnZXJcbiAqIEBkZXNjIEFuIGV2ZW50IGxpc3RlbmVyIGZvciBsb2dnaW5nIHB1cnBvc2VzLCBwYWlyZWQgd2l0aCB0aGUgdGFyZ2V0KHMpIHRvIGxpc3RlbiB0by5cbiAqIEVhY2ggbWVtYmVyIG9mIGEgbG9nZ2VyIG9iamVjdCBoYXMgdGhlIGV2ZW50IHN0cmluZyBhcyBpdHMga2V5IGFuZCBhbiBvYmplY3QgYXMgaXRzIHZhbHVlLlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGhhbmRsZXIgdGhhdCBsb2dzIHRoZSBldmVudC5cbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fG9iamVjdFtdfSB0YXJnZXRzIC0gQSB0YXJnZXQgb3IgbGlzdCBvZiB0YXJnZXRzIHRvIGF0dGFjaCB0aGUgbGlzdGVuZXIgdG8uXG4gKi9cblxuLyoqIEB0eXBlZGVmIHtvYmplY3R8b2JqZWN0W119IGV2ZW50VGFyZ2V0c1xuICogRXZlbnQgdGFyZ2V0IG9iamVjdChzKSB0aGF0IGltcGxlbWVudCBgYWRkRXZlbnRMaXN0ZW5lcmAgYW5kIGByZW1vdmVFdmVudExpc3RlbmVyYCxcbiAqIHR5cGljYWxseSBhIERPTSBub2RlLCBidXQgYnkgbm8gbWVhbnMgbGltaXRlZCB0byBzdWNoLlxuICovXG5cbi8qKiBAdHlwZWRlZiB7c3RyaW5nfSBldmVudFR5cGUgKi9cblxuLyoqIEB0eXBlZGVmIHtvYmplY3R9IHN0YXJsb2dPcHRpb25zXG4gKlxuICogQGRlc2MgTXVzdCBkZWZpbmUgYGxvZ2dlcnNgLCBgZXZlbnRzYCwgb3IgYHBhdHRlcm5gIGFuZCBgc2VsZWN0YDsgZWxzZSBlcnJvciBpcyB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtPYmplY3QuPGV2ZW50VHlwZSwgc3RhcmxvZ2dlcj59IFtsb2dnZXJzXSAtIExvZ2dlciBkaWN0aW9uYXJ5LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gW2V2ZW50c10gLSBMaXN0IG9mIGV2ZW50IHN0cmluZ3MgZnJvbSB3aGljaCB0byBidWlsZCBhIGxvZ2dlciBkaWN0aW9uYXJ5LlxuICogQHBhcmFtIHtvYmplY3R8b2JqZWN0W119IFtzZWxlY3RdIC0gT2JqZWN0IG9yIGxpc3Qgb2Ygb2JqZWN0cyBpbiB3aGljaCB0byBzZWFyY2ggd2l0aCBgcGF0dGVybmAuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gW3BhdHRlcm5dIC0gRXZlbnQgc3RyaW5nIHBhdHRlcm4gdG8gc2VhcmNoIGZvciBpbiBhbGwgdmlzaWJsZSBnZXR0ZXJzLCBzZXR0ZXJzLCBhbmQgbWV0aG9kcy5cbiAqIFRoZSByZXN1bHRzIG9mIHRoZSBzZWFyY2ggYXJlIHVzZWQgdG8gYnVpbGQgYSBsb2dnZXIgZGljdGlvbmFyeS5cbiAqIEV4YW1wbGU6IGAvJyhmaW4tW2Etei1dKyknL2AgbWVhbnMgZmluZCBhbGwgc3RyaW5ncyBsaWtlIGAnZmluLSonYCwgcmV0dXJuaW5nIG9ubHkgdGhlIHBhcnQgaW5zaWRlIHRoZSBxdW90ZXMuXG4gKiBTZWUgdGhlIFJFQURNRSBmb3IgYWRkaXRpb25hbCBleGFtcGxlcy5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbbG9nXSAtIE92ZXJyaWRlIHtAbGluayBTdGFybG9nI2xvZ30uXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbbGlzdGVuZXJdIC0gT3ZlcnJpZGUge0BsaW5rIFN0YXJsb2cjbGlzdGVuZXJ9LlxuICogQHBhcmFtIHtvYmplY3R9IFt0YXJnZXRzXSAtIE92ZXJyaWRlIHtAbGluayBTdGFybG9nI3RhcmdldHN9LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0LjxldmVudFR5cGUsIGZ1bmN0aW9uPn0gW2xpc3RlbmVyRGljdGlvbmFyeT17fV0gLSBDdXN0b20gbGlzdGVuZXJzIHRvIG92ZXJyaWRlIGRlZmF1bHQgbGlzdGVuZXIuXG4gKiBAcGFyYW0ge09iamVjdC48ZXZlbnRUeXBlLCBldmVudFRhcmdldHM+fSBbdGFyZ2V0c0RpY3Rpb25hcnk9e31dIC0gQ3VzdG9tIGV2ZW50IHRhcmdldCBvYmplY3QocykgdG8gb3ZlcnJpZGUgZGVmYXVsdCB0YXJnZXRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWF0Y2hdIC0gaHR0cHM6Ly9naXRodWIuY29tL2pvbmVpdC9jb2RlLW1hdGNoXG4gKiBAcGFyYW0ge251bWJlcn0gW21hdGNoLmNhcHR1cmVHcm91cF0gLSBJZmYgZGVmaW5lZCwgaW5kZXggb2YgYSBzcGVjaWZpYyBjYXB0dXJlIGdyb3VwIHRvIHJldHVybiBmb3IgZWFjaCBtYXRjaC5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWF0Y2guZ3JleWxpc3RdIC0gaHR0cHM6Ly9naXRodWIuY29tL2pvbmVpdC9ncmV5bGlzdFxuICogQHBhcmFtIFttYXRjaC5ncmV5bGlzdC53aGl0ZV0gLSBJZiBnaXZlbiwgb25seSBsaXN0ZWQgbWF0Y2hlcyBhcmUgaW5jbHVkZWQgaW4gdGhlIHJlc3VsdHMuXG4gKiBAcGFyYW0gW21hdGNoLmdyZXlsaXN0LmJsYWNrXSAtIElmIGdpdmVuLCBsaXN0ZWQgbWF0Y2hlcyBhcmUgZXhjbHVkZWQgZnJvbSB0aGUgcmVzdWx0cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW21hdGNoLmNhdGFsb2ddIC0gaHR0cHM6Ly9naXRodWIuY29tL2pvbmVpdC9vYmplY3QtY2F0YWxvZ1xuICogQHBhcmFtIHtib29sZWFufSBbbWF0Y2guY2F0YWxvZy5vd25dIC0gT25seSBzZWFyY2ggb3duIG1ldGhvZHMgZm9yIGV2ZW50IHN0cmluZ3M7IG90aGVyd2lzZSBlbnRpcmUgcHJvdG90eXBlIGNoYWluLlxuICogQHBhcmFtIHtvYmplY3R9IFttYXRjaC5jYXRhbG9nLmdyZXlsaXN0XSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25laXQvZ3JleWxpc3RcbiAqIEBwYXJhbSBbbWF0Y2guY2F0YWxvZy5ncmV5bGlzdC53aGl0ZV0gLSBJZiBnaXZlbiwgb25seSBsaXN0ZWQgbWVtYmVycyBhcmUgY2F0YWxvZ2VkLlxuICogQHBhcmFtIFttYXRjaC5jYXRhbG9nLmdyZXlsaXN0LmJsYWNrXSAtIElmIGdpdmVuLCBsaXN0ZWQgbWVtYmVycyBhcmUgKm5vdCogY2F0YWxvZ2VkLlxuICovXG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAc3VtbWFyeSBJbnN0YW5jZSBhIGxvZ2dlci5cbiAqIEBkZXNjIENvbnN1bWVzIGBvcHRpb25zYCwgY3JlYXRpbmcgYSBkaWN0aW9uYXJ5IG9mIGV2ZW50IHN0cmluZ3MgaW4gYHRoaXMuZXZlbnRzYC5cbiAqXG4gKiBTb3VyY2VzIGZvciBsb2dnZXJzOlxuICogKiBJZiBgb3B0aW9ucy5sb2dnZXJzYCBkaWN0aW9uYXJ5IG9iamVjdCBpcyBkZWZpbmVkLCBkZWVwIGNsb25lIGl0IGFuZCBtYWtlIHN1cmUgYWxsIG1lbWJlcnMgYXJlIGxvZ2dlciBvYmplY3RzLCBkZWZhdWx0aW5nIGFueSBtaXNzaW5nIG1lbWJlcnMuXG4gKiAqIEVsc2UgaWYgYG9wdGlvbnMuZXZlbnRzYCAobGlzdCBvZiBldmVudCBzdHJpbmdzKSBpcyBkZWZpbmVkLCBjcmVhdGUgYW4gb2JqZWN0IHdpdGggdGhvc2Uga2V5cywgbGlzdGVuZXJzLCBhbmQgdGFyZ2V0cy5cbiAqICogRWxzZSBpZiBgb3B0aW9ucy5wYXR0ZXJuYCBpcyBkZWZpbmVkLCBjb2RlIGZvdW5kIGluIHRoZSBleGVjdXRpb24gY29udGV4dCBvYmplY3QgaXMgc2VhcmNoZWQgZm9yIGV2ZW50IHN0cmluZ3MgdGhhdCBtYXRjaCBpdCAocGVyIGBvcHRpb25zLm1hdGNoYCkuXG4gKlxuICogRXZlbnRzIHNwZWNpZmllZCB3aXRoIGBvcHRpb25zLmV2ZW50c2AgYW5kIGBvcHRpb25zLnBhdHRlcm5gIGxvZyB1c2luZyB0aGUgZGVmYXVsdCBsaXN0ZW5lciBhbmQgZXZlbnQgdGFyZ2V0czpcbiAqICogYFN0YXJMb2cucHJvdG90eXBlLmxpc3RlbmVyYCwgdW5sZXNzIG92ZXJyaWRkZW4sIGp1c3QgY2FsbHMgYHRoaXMubG9nKClgIHdpdGggdGhlIGV2ZW50IHN0cmluZywgd2hpY2ggaXMgc3VmZmljaWVudCBmb3IgY2FzdWFsIHVzYWdlLlxuICogT3ZlcnJpZGUgaXQgYnkgZGVmaW5pbmcgYG9wdGlvbnMubGlzdGVuZXJgIG9yIGRpcmVjdGx5IGJ5IHJlYXNzaWduaW5nIHRvIGBTdGFyTG9nLnByb3RvdHlwZS5saXN0ZW5lcmAgYmVmb3JlIGluc3RhbnRpYXRpb24uXG4gKiAqIGBTdGFyTG9nLnByb3RvdHlwZS50YXJnZXRzYCwgdW5sZXNzIG92ZXJyaWRkZW4sIGlzIGB3aW5kb3cuZG9jdW1lbnRgICh3aGVuIGF2YWlsYWJsZSksXG4gKiB3aGljaCBpcyBvbmx5IHJlYWxseSB1c2VmdWwgaWYgdGhlIGV2ZW50IGlzIGRpc3BhdGNoZWQgZGlyZWN0bHkgdG8gKG9yIGlzIGFsbG93ZWQgdG8gYnViYmxlIHVwIHRvKSBgZG9jdW1lbnRgLlxuICogT3ZlcnJpZGUgaXQgYnkgZGVmaW5pbmcgYG9wdGlvbnMudGFyZ2V0c2Agb3IgZGlyZWN0bHkgYnkgcmVhc3NpZ25pbmcgdG8gYFN0YXJMb2cucHJvdG90eXBlLnRhcmdldHNgIGJlZm9yZSBpbnN0YW50aWF0aW9uLlxuICpcbiAqIEV2ZW50cyBzcGVjaWZpZWQgd2l0aCBgb3B0aW9ucy5sb2dnZXJzYCBjYW4gZWFjaCBzcGVjaWZ5IHRoZWlyIG93biBsaXN0ZW5lciBhbmQvb3IgdGFyZ2V0cywgYnV0IGlmIG5vdCBzcGVjaWZpZWQsIHRoZXkgdG9vIHdpbGwgYWxzbyB1c2UgdGhlIGFib3ZlIGRlZmF1bHRzLlxuICpcbiAqIEBwYXJhbSB7c3RhcmxvZ09wdGlvbnN9IFtvcHRpb25zXVxuICovXG5mdW5jdGlvbiBTdGFyTG9nKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vIE92ZXJyaWRlIHByb3RvdHlwZSBkZWZpbml0aW9ucyBpZiBhbmQgb25seSBpZiBzdXBwbGllZCBpbiBvcHRpb25zXG4gICAgWydsb2cnLCAndGFyZ2V0cycsICdsaXN0ZW5lciddLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgIGlmIChvcHRpb25zW2tleV0pIHsgdGhpc1trZXldID0gb3B0aW9uc1trZXldOyB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICB2YXIgZGVmYXVsdFRhcmdldCA9IG9wdGlvbnMudGFyZ2V0cyB8fCB0aGlzLnRhcmdldHMsXG4gICAgICAgIGRlZmF1bHRMaXN0ZW5lciA9IG9wdGlvbnMubGlzdGVuZXIgfHwgdGhpcy5saXN0ZW5lcixcbiAgICAgICAgbGlzdGVuZXJEaWN0aW9uYXJ5ID0gb3B0aW9ucy5saXN0ZW5lckRpY3Rpb25hcnkgfHwge30sXG4gICAgICAgIHRhcmdldHNEaWN0aW9uYXJ5ID0gb3B0aW9ucy50YXJnZXRzRGljdGlvbmFyeSB8fCB7fSxcbiAgICAgICAgbG9nZ2VycyA9IG9wdGlvbnMubG9nZ2VycyxcbiAgICAgICAgZXZlbnRTdHJpbmdzO1xuXG4gICAgaWYgKGxvZ2dlcnMpIHtcbiAgICAgICAgZXZlbnRTdHJpbmdzID0gT2JqZWN0LmtleXMobG9nZ2Vycyk7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLmV2ZW50cykge1xuICAgICAgICBsb2dnZXJzID0ge307XG4gICAgICAgIGV2ZW50U3RyaW5ncyA9IG9wdGlvbnMuZXZlbnRzO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYXR0ZXJuICYmIG9wdGlvbnMuc2VsZWN0KSB7XG4gICAgICAgIGxvZ2dlcnMgPSB7fTtcbiAgICAgICAgZXZlbnRTdHJpbmdzID0gYXJyYXlpZnkob3B0aW9ucy5zZWxlY3QpLnJlZHVjZShmdW5jdGlvbihtYXRjaGVzLCBvYmplY3QpIHtcbiAgICAgICAgICAgIG1hdGNoLmNhbGwob2JqZWN0LCBvcHRpb25zLnBhdHRlcm4sIG9wdGlvbnMubWF0Y2gpLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZXMuaW5kZXhPZihtYXRjaCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChtYXRjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfSwgW10pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYG9wdGlvbnMubG9nZ2Vyc2AsIGBvcHRpb25zLmV2ZW50c2AsIG9yIGBvcHRpb25zLnBhdHRlcm5gIGFuZCBgb3B0aW9ucy5zZWxlY3RgIHRvIGJlIGRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHN0YXJsb2cgPSB0aGlzO1xuXG4gICAgLyoqXG4gICAgICogRGljdGlvbmFyeSBvZiBldmVudCBzdHJpbmdzIHdpdGggbGlzdGVuZXIgYW5kIHRhcmdldChzKS5cbiAgICAgKiBAdHlwZSB7T2JqZWN0LjxldmVudFR5cGUsIHN0YXJsb2dnZXI+fVxuICAgICAqL1xuICAgIHRoaXMuZXZlbnRzID0gZXZlbnRTdHJpbmdzLnJlZHVjZShmdW5jdGlvbihjbG9uZSwgZXZlbnRTdHJpbmcpIHtcbiAgICAgICAgdmFyIGxvZ2dlciA9IE9iamVjdC5hc3NpZ24oe30sIGxvZ2dlcnNbZXZlbnRTdHJpbmddKTsgLy8gY2xvbmUgZWFjaCBsb2dnZXJcblxuICAgICAgICAvLyBiaW5kIHRoZSBsaXN0ZW5lciB0byBzdGFybG9nIGZvciBgdGhpcy5sb2dgIGFjY2VzcyB0byBTdGFybG9nI2xvZyBmcm9tIHdpdGhpbiBsaXN0ZW5lclxuICAgICAgICBsb2dnZXIubGlzdGVuZXIgPSAobG9nZ2VyLmxpc3RlbmVyIHx8IGxpc3RlbmVyRGljdGlvbmFyeVtldmVudFN0cmluZ10gfHwgZGVmYXVsdExpc3RlbmVyKS5iaW5kKHN0YXJsb2cpO1xuICAgICAgICBsb2dnZXIudGFyZ2V0cyA9IGFycmF5aWZ5KGxvZ2dlci50YXJnZXRzIHx8IHRhcmdldHNEaWN0aW9uYXJ5W2V2ZW50U3RyaW5nXSB8fCBkZWZhdWx0VGFyZ2V0KTtcblxuICAgICAgICBjbG9uZVtldmVudFN0cmluZ10gPSBsb2dnZXI7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH0sIHt9KTtcbn1cblxuU3RhckxvZy5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IFN0YXJMb2cucHJvdG90eXBlLmNvbnN0cnVjdG9yLFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9ufVxuICAgICAqIEBkZWZhdWx0IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSlcbiAgICAgKi9cbiAgICBsb2c6IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSksXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQGRlZmF1bHQgZnVuY3Rpb24oZSkgeyB0aGlzLmxvZyhlLnR5cGUpOyB9O1xuICAgICAqL1xuICAgIGxpc3RlbmVyOiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHRoaXMubG9nKGUudHlwZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICogQGRlZmF1bHQgd2luZG93LmRvY3VtZW50XG4gICAgICovXG4gICAgdGFyZ2V0czogdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93LmRvY3VtZW50LFxuXG4gICAgLyoqXG4gICAgICogQG1ldGhvZCBTdGFybG9nI3N0YXJ0XG4gICAgICogQHN1bW1hcnkgU3RhcnQgbG9nZ2luZyBldmVudHMuXG4gICAgICogQGRlc2MgQWRkIG5ldyBldmVudCBsaXN0ZW5lcnMgZm9yIGxvZ2dpbmcgcHVycG9zZXMuXG4gICAgICogT2xkIGV2ZW50IGxpc3RlbmVycywgaWYgYW55LCBhcmUgcmVtb3ZlZCBmaXJzdCwgYmVmb3JlIGFkZGluZyBuZXcgb25lcy5cbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50cywgJ2FkZCcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIFN0YXJsb2cjc3RvcFxuICAgICAqIEBzdW1tYXJ5IFN0b3AgbG9nZ2luZyBldmVudHMuXG4gICAgICogQGRlc2MgRXZlbnQgbGlzdGVuZXJzIGFyZSByZW1vdmVkIGZyb20gdGFyZ2V0cyBhbmQgZGVsZXRlZC5cbiAgICAgKi9cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXIodGhpcy5ldmVudHMsICdyZW1vdmUnKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBldmVudExpc3RlbmVyKGRpY3Rpb25hcnksIG1ldGhvZFByZWZpeCkge1xuICAgIGlmICghZGljdGlvbmFyeSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1ldGhvZCA9IG1ldGhvZFByZWZpeCArICdFdmVudExpc3RlbmVyJztcblxuICAgIE9iamVjdC5rZXlzKGRpY3Rpb25hcnkpLmZvckVhY2goZnVuY3Rpb24oZXZlbnRUeXBlKSB7XG4gICAgICAgIHZhciBldmVudExvZ2dlciA9IGRpY3Rpb25hcnlbZXZlbnRUeXBlXTtcbiAgICAgICAgZXZlbnRMb2dnZXIudGFyZ2V0cy5mb3JFYWNoKGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgdGFyZ2V0W21ldGhvZF0oZXZlbnRUeXBlLCBldmVudExvZ2dlci5saXN0ZW5lcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhcnJheWlmeSh4KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoeCkgPyB4IDogW3hdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFN0YXJMb2c7Il19
