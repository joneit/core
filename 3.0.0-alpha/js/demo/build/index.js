(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports = function(demo, grid) {

    var schema = grid.behavior.schema;

    var CellEditor = grid.cellEditors.BaseClass;
    var Textfield = grid.cellEditors.get('textfield');

    var ColorText = Textfield.extend('colorText', {
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

},{}],2:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports = function(demo, grid) {

    var schema = grid.behavior.schema;

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

},{}],3:[function(require,module,exports){
/* eslint-env browser */

/* globals people1, people2 */

/* eslint-disable no-alert */

'use strict';

// Some DOM support functions...
// Besides the canvas, this test harness only has a handful of buttons and checkboxes.
// The following functions service these controls.

module.exports = function(demo, grid) {

    // make buttons div absolute so buttons width of 100% doesn't stretch to width of dashboard
    var ctrlGroups = document.getElementById('ctrl-groups'),
        dashboard = document.getElementById('dashboard'),
        buttons = document.getElementById('buttons');

    ctrlGroups.style.top = ctrlGroups.getBoundingClientRect().top + 'px';
    //buttons.style.position = 'absolute';
    dashboard.style.display = 'none';

    function toggleRowStylingMethod() {
        demo.styleRowsFromData = !demo.styleRowsFromData;
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
        {label: 'Toggle Empty Data', onclick: demo.toggleEmptyData},
        {
            label: 'Set Data', onclick: function() {
            demo.resetData();
            }
        },
        {
            label: 'Set Data 1 (5000 rows)', onclick: function() {
            demo.setData(people1);
            }
        },
        {
            label: 'Set Data 2 (10000 rows)', onclick: function() {
            demo.setData(people2);
            }
        },
        {label: 'Reset Grid', onclick: demo.reset}

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
    demo.resetDashboard = function() {
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
        var hash = {}, depth = hash;
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
            depth = depth[keys.shift()] = {};
        }

        switch (this.type) {
            case 'text':
                depth[keys.shift()] = this.value;
                break;
            case 'checkbox':
                depth[keys.shift()] = inverse ? !this.checked : this.checked;
                break;
        }

        grid.takeFocus();
        grid.addProperties(hash);
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


},{}],4:[function(require,module,exports){
'use strict';

module.exports = function(demo, grid) {

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

},{}],5:[function(require,module,exports){
/* eslint-env browser */

'use strict';

module.exports = function(demo, grid) {

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

},{}],6:[function(require,module,exports){
/* eslint-env browser */

/* globals fin, people1 */

/* eslint-disable no-alert*/

'use strict';

window.onload = function() {

    var demo = window.demo = {
        set vent(start) { window.grid[start ? 'logStart' : 'logStop'](); },
        reset: reset,
        setData: setData,
        toggleEmptyData: toggleEmptyData,
        resetData: resetData
    };

    var Hypergrid = fin.Hypergrid,
        getSchema = require('fin-hypergrid-field-tools').getSchema,
        initState = require('./setState'),
        initCellRenderers = require('./cellrenderers'),
        initFormatters = require('./formatters'),
        initCellEditors = require('./celleditors'),
        initDashboard = require('./dashboard'),
        initEvents = require('./events');

    document.getElementById('version').innerText = Hypergrid.prototype.version;

    var gridOptions = {
            // Because v3 defaults to use datasaur-local (which is still included in the build),
            // specifying it here is still optional, but may be required for v4.
            // Uncomment one of the following 2 lines to specify ("bring your own") data source:

            // dataModel: new (Hypergrid.require('datasaur-local'))(people1, getSchema(people1)),
            // DataModel: Hypergrid.require('datasaur-local'),

            data: people1,
            margin: { bottom: '17px', right: '17px' },
            plugins: require('fin-hypergrid-event-logger'),
            schema: getSchema(people1),
            state: { color: 'orange' }
        },
        grid = window.grid = window.g = new Hypergrid('div#json-example', gridOptions),
        behavior = grid.behavior,
        dataModel = behavior.dataModel;

    Object.defineProperties(window, {
        b: { get: function() { return grid.behavior; } },
        m: { get: function() { return grid.behavior.dataModel; } }
    });

    console.log('schema', behavior.schema);

    function setData(data, options) {
        options = !data.length ? undefined : options || {
            schema: getSchema(data)
        };
        grid.setData(data, options);
    }

    function reset() {
        grid.reset();
        initEvents(demo, grid);
    }

    var oldData;
    function toggleEmptyData() {
        if (!oldData) {
            oldData = {
                data: dataModel.data,
                schema: behavior.schema,
                activeColumns: behavior.getActiveColumns().map(function(column) { return column.index; })
            };
            //important to set top totals first
            setData([]);
        } else {
            //important to set top totals first
            setData(oldData.data, oldData.schema);
            behavior.setColumnIndexes(oldData.activeColumns);
            oldData = undefined;
        }
    }

    function resetData() {
        setData(people1);
        initState(demo, grid);
    }

    initCellRenderers(demo, grid);
    initFormatters(demo, grid);
    initCellEditors(demo, grid);
    initEvents(demo, grid);
    initDashboard(demo, grid);
    initState(demo, grid);

    // Following would be needed for row height changes made in data model subrows POC:
    // setTimeout(function() { grid.behaviorStateChanged(); });
};

},{"./celleditors":1,"./cellrenderers":2,"./dashboard":3,"./events":4,"./formatters":5,"./setState":7,"fin-hypergrid-event-logger":10,"fin-hypergrid-field-tools":11}],7:[function(require,module,exports){
'use strict';

module.exports = function(demo, grid) {

    var schema = grid.behavior.schema;

    var greenland = { color: '#116611', backgroundColor: '#e8ffe8', font: 'italic small garamond' };

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

},{}],8:[function(require,module,exports){
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
},{"greylist":12,"match-point":13,"object-catalog":14}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
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

},{"./custom-listeners":9,"starlog":15}],11:[function(require,module,exports){
'use strict';

/**
 * @name fields
 * @namespace
 */

var REGEXP_META_PREFIX = /^__/, // starts with double underscore
    REGEXP_WORD_SEPARATORS = /[\s\-_]*([^\s\-_])([^\s\-_]+)/g,
    REGEXP_CAPITAL_LETTERS = /[A-Z]/g,
    REGEXP_LOWER_CASE_LETTER = /[a-z]/;

/**
 * Returns an array of keys (field names) of the given data row object.
 * Field names beginning with double underscore (`__`) are considered reserved for system use and are excluded from the results.
 * @param {object} [dataRow] - If omitted or otherwise falsy, returns an empty array.
 * @returns {string[]} Member names from `dataRow` that do _not_ begin with double-underscore.
 * @memberOf namespace:fields
 */
function getFieldNames(dataRow) {
    return Object.keys(dataRow || []).filter(function(fieldName) {
        return !REGEXP_META_PREFIX.test(fieldName);
    });
}

// Replacement function for use in the default titleize function below.
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function capitalize(a, b, c) {
    return b.toUpperCase() + c;
}

var shortWords = ['of', 'at', 'by', 'from', 'and', 'but', 'for', 'a', 'an', 'the'];

/**
 * Separates camel case or white-space-, hypen-, or underscore-separated-words into truly separate words and capitalizing the first letter of each except for members of `shortWords`.
 * @param string
 * @returns {string}
 * @memberOf namespace:fields
 */
function titleize(string) {
    var title = (REGEXP_LOWER_CASE_LETTER.test(string) ? string : string.toLowerCase())
        .replace(REGEXP_WORD_SEPARATORS, capitalize)
        .replace(REGEXP_CAPITAL_LETTERS, ' $&')
        .trim();

    shortWords.forEach(function(word) {
        word = ' ' + word + ' ';
        title = title.replace(new RegExp(word, 'gi'), word);
    });

    return title;
}

/**
 * Derive a schema from field names, including derived header when field name unsuitable as such.
 * A suitable field name has no underscores _and_ contains spaces and/or mixed case (but not camelCase).
 * @param data
 * @returns {Array}
 * @memberOf namespace:fields
 */
function getSchema(data){
    // find first defined dataRow
    var dataRow = data.find(function(dataRow) { return dataRow; }) || {};

    return getFieldNames(dataRow).map(function(name) {
        return name.indexOf('_') < 0 && (
            name.indexOf(' ') >= 0 ||
            /[a-z]/.test(name) && /[A-Z]/.test(name) && !/[a-z][A-Z]/.test(name)
        ) ?
            {
                name: name
            } : {
                name: name,
                header: titleize(name)
            };
    });
}

module.exports = {
    getFieldNames: getFieldNames,
    titleize: titleize,  // override as needed for custom header titleization
    getSchema: getSchema
};

},{}],12:[function(require,module,exports){
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
},{"code-match":8}]},{},[6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL2pzL2RlbW8vY2VsbGVkaXRvcnMuanMiLCJkZW1vL2pzL2RlbW8vY2VsbHJlbmRlcmVycy5qcyIsImRlbW8vanMvZGVtby9kYXNoYm9hcmQuanMiLCJkZW1vL2pzL2RlbW8vZXZlbnRzLmpzIiwiZGVtby9qcy9kZW1vL2Zvcm1hdHRlcnMuanMiLCJkZW1vL2pzL2RlbW8vaW5kZXguanMiLCJkZW1vL2pzL2RlbW8vc2V0U3RhdGUuanMiLCJub2RlX21vZHVsZXMvY29kZS1tYXRjaC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9maW4taHlwZXJncmlkLWV2ZW50LWxvZ2dlci9jdXN0b20tbGlzdGVuZXJzLmpzIiwibm9kZV9tb2R1bGVzL2Zpbi1oeXBlcmdyaWQtZXZlbnQtbG9nZ2VyL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2Zpbi1oeXBlcmdyaWQtZmllbGQtdG9vbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZ3JleWxpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvbWF0Y2gtcG9pbnQvaW5kZXguanMiLCJub2RlX21vZHVsZXMvb2JqZWN0LWNhdGFsb2cvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3RhcmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkZW1vLCBncmlkKSB7XG5cbiAgICB2YXIgc2NoZW1hID0gZ3JpZC5iZWhhdmlvci5zY2hlbWE7XG5cbiAgICB2YXIgQ2VsbEVkaXRvciA9IGdyaWQuY2VsbEVkaXRvcnMuQmFzZUNsYXNzO1xuICAgIHZhciBUZXh0ZmllbGQgPSBncmlkLmNlbGxFZGl0b3JzLmdldCgndGV4dGZpZWxkJyk7XG5cbiAgICB2YXIgQ29sb3JUZXh0ID0gVGV4dGZpZWxkLmV4dGVuZCgnY29sb3JUZXh0Jywge1xuICAgICAgICB0ZW1wbGF0ZTogJzxpbnB1dCB0eXBlPVwidGV4dFwiIGxhbmc9XCJ7e2xvY2FsZX19XCIgc3R5bGU9XCJjb2xvcjp7e3RleHRDb2xvcn19XCI+J1xuICAgIH0pO1xuXG4gICAgZ3JpZC5jZWxsRWRpdG9ycy5hZGQoQ29sb3JUZXh0KTtcblxuICAgIHZhciBUaW1lID0gVGV4dGZpZWxkLmV4dGVuZCgnVGltZScsIHtcbiAgICAgICAgdGVtcGxhdGU6IFtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaHlwZXJncmlkLXRleHRmaWVsZFwiIHN0eWxlPVwidGV4dC1hbGlnbjpyaWdodDtcIj4nLFxuICAgICAgICAgICAgJyAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBsYW5nPVwie3tsb2NhbGV9fVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDsgd2lkdGg6NzUlOyB0ZXh0LWFsaWduOnJpZ2h0OyBib3JkZXI6MDsgcGFkZGluZzowOyBvdXRsaW5lOjA7IGZvbnQtc2l6ZTppbmhlcml0OyBmb250LXdlaWdodDppbmhlcml0OycgK1xuICAgICAgICAgICAgJ3t7c3R5bGV9fVwiPicsXG4gICAgICAgICAgICAnICAgIDxzcGFuPkFNPC9zcGFuPicsXG4gICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICBdLmpvaW4oJ1xcbicpLFxuXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICAgICAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcblxuICAgICAgICAgICAgLy8gRmxpcCBBTS9QTSBvbiBhbnkgY2xpY2tcbiAgICAgICAgICAgIHRoaXMuZWwub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVyaWRpYW4udGV4dENvbnRlbnQgPSB0aGlzLm1lcmlkaWFuLnRleHRDb250ZW50ID09PSAnQU0nID8gJ1BNJyA6ICdBTSc7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Lm9uY2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTsgLy8gaWdub3JlIGNsaWNrcyBpbiB0aGUgdGV4dCBmaWVsZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQub25mb2N1cyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgdGhpcy5lbC5zdHlsZS5vdXRsaW5lID0gdGhpcy5vdXRsaW5lID0gdGhpcy5vdXRsaW5lIHx8IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhcmdldCkub3V0bGluZTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3R5bGUub3V0bGluZSA9IDA7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0Lm9uYmx1ciA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsLnN0eWxlLm91dGxpbmUgPSAwO1xuICAgICAgICAgICAgfS5iaW5kKHRoaXMpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldEVkaXRvclZhbHVlOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgQ2VsbEVkaXRvci5wcm90b3R5cGUuc2V0RWRpdG9yVmFsdWUuY2FsbCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB2YXIgcGFydHMgPSB0aGlzLmlucHV0LnZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gcGFydHNbMF07XG4gICAgICAgICAgICB0aGlzLm1lcmlkaWFuLnRleHRDb250ZW50ID0gcGFydHNbMV07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0RWRpdG9yVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IENlbGxFZGl0b3IucHJvdG90eXBlLmdldEVkaXRvclZhbHVlLmNhbGwodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMubWVyaWRpYW4udGV4dENvbnRlbnQgPT09ICdQTScpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSBkZW1vLk5PT047XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGdyaWQuY2VsbEVkaXRvcnMuYWRkKFRpbWUpO1xuXG4gICAgLy8gVXNlZCBieSB0aGUgY2VsbFByb3ZpZGVyLlxuICAgIC8vIGBudWxsYCBtZWFucyBjb2x1bW4ncyBkYXRhIGNlbGxzIGFyZSBub3QgZWRpdGFibGUuXG4gICAgdmFyIGVkaXRvclR5cGVzID0gW1xuICAgICAgICBudWxsLFxuICAgICAgICAndGV4dGZpZWxkJyxcbiAgICAgICAgJ3RleHRmaWVsZCcsXG4gICAgICAgICd0ZXh0ZmllbGQnLFxuICAgICAgICBudWxsLFxuICAgICAgICAndGltZScsXG4gICAgICAgICdjaG9pY2UnLFxuICAgICAgICAnY2hvaWNlJyxcbiAgICAgICAgJ2Nob2ljZScsXG4gICAgICAgICd0ZXh0ZmllbGQnLFxuICAgICAgICAndGV4dGZpZWxkJyxcbiAgICAgICAgJ3RleHRmaWVsZCdcbiAgICBdO1xuXG4gICAgLy8gT3ZlcnJpZGUgdG8gYXNzaWduIHRoZSB0aGUgY2VsbCBlZGl0b3JzLlxuICAgIGdyaWQuYmVoYXZpb3IuZGF0YU1vZGVsLmdldENlbGxFZGl0b3JBdCA9IGZ1bmN0aW9uKHgsIHksIGRlY2xhcmVkRWRpdG9yTmFtZSwgY2VsbEV2ZW50KSB7XG4gICAgICAgIHZhciBlZGl0b3JOYW1lID0gZGVjbGFyZWRFZGl0b3JOYW1lIHx8IGVkaXRvclR5cGVzW3ggJSBlZGl0b3JUeXBlcy5sZW5ndGhdO1xuXG4gICAgICAgIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgY2FzZSBzY2hlbWEuYmlydGhTdGF0ZS5pbmRleDpcbiAgICAgICAgICAgICAgICBjZWxsRXZlbnQudGV4dENvbG9yID0gJ3JlZCc7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2VsbEVkaXRvciA9IGdyaWQuY2VsbEVkaXRvcnMuY3JlYXRlKGVkaXRvck5hbWUsIGNlbGxFdmVudCk7XG5cbiAgICAgICAgaWYgKGNlbGxFZGl0b3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoeCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hLmVtcGxveWVkLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIHNjaGVtYS50b3RhbE51bWJlck9mUGV0c093bmVkLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICBjZWxsRWRpdG9yLmlucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgMCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxFZGl0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGxFZGl0b3IuaW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgMC4wMSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNlbGxFZGl0b3I7XG4gICAgfTtcbn07XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRlbW8sIGdyaWQpIHtcblxuICAgIHZhciBzY2hlbWEgPSBncmlkLmJlaGF2aW9yLnNjaGVtYTtcblxuICAgIC8vR0VUIENFTExcbiAgICAvL2FsbCBmb3JtYXR0aW5nIGFuZCByZW5kZXJpbmcgcGVyIGNlbGwgY2FuIGJlIG92ZXJyaWRkZW4gaW4gaGVyZVxuICAgIGdyaWQuYmVoYXZpb3IuZGF0YU1vZGVsLmdldENlbGwgPSBmdW5jdGlvbihjb25maWcsIHJlbmRlcmVyTmFtZSkge1xuICAgICAgICBpZiAoY29uZmlnLmlzVXNlckRhdGFBcmVhKSB7XG4gICAgICAgICAgICB2YXIgbiwgaGV4LCB0cmF2ZWwsXG4gICAgICAgICAgICAgICAgY29sSW5kZXggPSBjb25maWcuZGF0YUNlbGwueCxcbiAgICAgICAgICAgICAgICByb3dJbmRleCA9IGNvbmZpZy5kYXRhQ2VsbC55O1xuXG4gICAgICAgICAgICBpZiAoZGVtby5zdHlsZVJvd3NGcm9tRGF0YSkge1xuICAgICAgICAgICAgICAgIG4gPSBncmlkLmJlaGF2aW9yLmdldENvbHVtbihzY2hlbWEudG90YWxOdW1iZXJPZlBldHNPd25lZC5pbmRleCkuZ2V0VmFsdWUocm93SW5kZXgpO1xuICAgICAgICAgICAgICAgIGhleCA9ICgxNTUgKyAxMCAqIChuICUgMTEpKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgY29uZmlnLmJhY2tncm91bmRDb2xvciA9ICcjJyArIGhleCArIGhleCArIGhleDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChjb2xJbmRleCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hLmxhc3ROYW1lLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICBjb25maWcuY29sb3IgPSBjb25maWcudmFsdWUgIT0gbnVsbCAmJiAoY29uZmlnLnZhbHVlICsgJycpWzBdID09PSAnUycgPyAncmVkJyA6ICcjMTkxOTE5JztcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmxpbmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2Ugc2NoZW1hLmluY29tZS5pbmRleDpcbiAgICAgICAgICAgICAgICAgICAgdHJhdmVsID0gNjA7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBzY2hlbWEudHJhdmVsLmluZGV4OlxuICAgICAgICAgICAgICAgICAgICB0cmF2ZWwgPSAxMDU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHJhdmVsKSB7XG4gICAgICAgICAgICAgICAgdHJhdmVsICs9IE1hdGgucm91bmQoY29uZmlnLnZhbHVlICogMTUwIC8gMTAwMDAwKTtcbiAgICAgICAgICAgICAgICBjb25maWcuYmFja2dyb3VuZENvbG9yID0gJyMwMCcgKyB0cmF2ZWwudG9TdHJpbmcoMTYpICsgJzAwJztcbiAgICAgICAgICAgICAgICBjb25maWcuY29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vVGVzdGluZ1xuICAgICAgICAgICAgaWYgKGNvbEluZGV4ID09PSBzY2hlbWEudG90YWxOdW1iZXJPZlBldHNPd25lZC5pbmRleCkge1xuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogQmUgc3VyZSB0byBhZGp1c3QgdGhlIGRhdGEgc2V0IHRvIHRoZSBhcHByb3ByaWF0ZSB0eXBlIGFuZCBzaGFwZSBpbiB3aWRlZGF0YS5qc1xuICAgICAgICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gc2ltcGxlQ2VsbDsgLy9XT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIGVtcHR5Q2VsbDsgLy9XT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIGJ1dHRvbkNlbGw7IC8vV09SS1NcbiAgICAgICAgICAgICAgICAvL3JldHVybiBlcnJvckNlbGw7IC8vV09SS1M6IE5vdGVkIHRoYXQgYW55IGVycm9yIGluIHRoaXMgZnVuY3Rpb24gc3RlYWxzIHRoZSBtYWluIHRocmVhZCBieSByZWN1cnNpb25cbiAgICAgICAgICAgICAgICAvL3JldHVybiBzcGFya0xpbmVDZWxsOyAvLyBXT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIHNwYXJrQmFyQ2VsbDsgLy9XT1JLU1xuICAgICAgICAgICAgICAgIC8vcmV0dXJuIHNsaWRlckNlbGw7IC8vV09SS1NcbiAgICAgICAgICAgICAgICAvL3JldHVybiB0cmVlQ2VsbDsgLy9OZWVkIHRvIGZpZ3VyZSBvdXQgZGF0YSBzaGFwZSB0byB0ZXN0XG5cblxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICogVGVzdCBvZiBDdXN0b21pemVkIFJlbmRlcmVyXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgLy8gaWYgKHN0YXJyeSl7XG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbmZpZy5kb21haW4gPSA1OyAvLyBkZWZhdWx0IGlzIDEwMFxuICAgICAgICAgICAgICAgIC8vICAgICBjb25maWcuc2l6ZUZhY3RvciA9ICAwLjY1OyAvLyBkZWZhdWx0IGlzIDAuNjU7IHNpemUgb2Ygc3RhcnMgYXMgZnJhY3Rpb24gb2YgaGVpZ2h0IG9mIGNlbGxcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnLmRhcmtlbkZhY3RvciA9IDAuNzU7IC8vIGRlZmF1bHQgaXMgMC43NTsgc3RhciBzdHJva2UgY29sb3IgYXMgZnJhY3Rpb24gb2Ygc3RhciBmaWxsIGNvbG9yXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbmZpZy5jb2xvciA9ICdnb2xkJzsgLy8gZGVmYXVsdCBpcyAnZ29sZCc7IHN0YXIgZmlsbCBjb2xvclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25maWcuZmdDb2xvciA9ICAnZ3JleSc7IC8vIGRlZmF1bHQgaXMgJ3RyYW5zcGFyZW50JyAobm90IHJlbmRlcmVkKTsgdGV4dCBjb2xvclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25maWcuZmdTZWxDb2xvciA9ICd5ZWxsb3cnOyAvLyBkZWZhdWx0IGlzICd0cmFuc3BhcmVudCcgKG5vdCByZW5kZXJlZCk7IHRleHQgc2VsZWN0aW9uIGNvbG9yXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbmZpZy5iZ0NvbG9yID0gJyM0MDQwNDAnOyAvLyBkZWZhdWx0IGlzICd0cmFuc3BhcmVudCcgKG5vdCByZW5kZXJlZCk7IGJhY2tncm91bmQgY29sb3JcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnLmJnU2VsQ29sb3IgPSAnZ3JleSc7IC8vIGRlZmF1bHQgaXMgJ3RyYW5zcGFyZW50JyAobm90IHJlbmRlcmVkKTsgYmFja2dyb3VuZCBzZWxlY3Rpb24gY29sb3JcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uZmlnLnNoYWRvd0NvbG9yID0gJ3RyYW5zcGFyZW50JzsgLy8gZGVmYXVsdCBpcyAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiBzdGFycnk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdyaWQuY2VsbFJlbmRlcmVycy5nZXQocmVuZGVyZXJOYW1lKTtcbiAgICB9O1xuXG4gICAgLy9FTkQgT0YgR0VUIENFTExcblxuXG4gICAgLy8gQ1VTVE9NIENFTEwgUkVOREVSRVJcblxuICAgIHZhciBSRUdFWFBfQ1NTX0hFWDYgPSAvXiMoLi4pKC4uKSguLikkLyxcbiAgICAgICAgUkVHRVhQX0NTU19SR0IgPSAvXnJnYmFcXCgoXFxkKyksKFxcZCspLChcXGQrKSxcXGQrXFwpJC87XG5cbiAgICBmdW5jdGlvbiBwYWludFNwYXJrUmF0aW5nKGdjLCBjb25maWcpIHtcbiAgICAgICAgdmFyIHggPSBjb25maWcuYm91bmRzLngsXG4gICAgICAgICAgICB5ID0gY29uZmlnLmJvdW5kcy55LFxuICAgICAgICAgICAgd2lkdGggPSBjb25maWcuYm91bmRzLndpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0ID0gY29uZmlnLmJvdW5kcy5oZWlnaHQsXG4gICAgICAgICAgICBvcHRpb25zID0gY29uZmlnLnZhbHVlLFxuICAgICAgICAgICAgZG9tYWluID0gb3B0aW9ucy5kb21haW4gfHwgY29uZmlnLmRvbWFpbiB8fCAxMDAsXG4gICAgICAgICAgICBzaXplRmFjdG9yID0gb3B0aW9ucy5zaXplRmFjdG9yIHx8IGNvbmZpZy5zaXplRmFjdG9yIHx8IDAuNjUsXG4gICAgICAgICAgICBkYXJrZW5GYWN0b3IgPSBvcHRpb25zLmRhcmtlbkZhY3RvciB8fCBjb25maWcuZGFya2VuRmFjdG9yIHx8IDAuNzUsXG4gICAgICAgICAgICBjb2xvciA9IG9wdGlvbnMuY29sb3IgfHwgY29uZmlnLmNvbG9yIHx8ICdnb2xkJyxcbiAgICAgICAgICAgIHN0cm9rZSA9IHRoaXMuc3Ryb2tlID0gY29sb3IgPT09IHRoaXMuY29sb3IgPyB0aGlzLnN0cm9rZSA6IGdldERhcmtlbmVkQ29sb3IoZ2MsIHRoaXMuY29sb3IgPSBjb2xvciwgZGFya2VuRmFjdG9yKSxcbiAgICAgICAgICAgIC8vIGJnQ29sb3IgPSBjb25maWcuaXNTZWxlY3RlZCA/IChvcHRpb25zLmJnU2VsQ29sb3IgfHwgY29uZmlnLmJnU2VsQ29sb3IpIDogKG9wdGlvbnMuYmdDb2xvciB8fCBjb25maWcuYmdDb2xvciksXG4gICAgICAgICAgICBmZ0NvbG9yID0gY29uZmlnLmlzU2VsZWN0ZWQgPyAob3B0aW9ucy5mZ1NlbENvbG9yIHx8IGNvbmZpZy5mZ1NlbENvbG9yKSA6IChvcHRpb25zLmZnQ29sb3IgfHwgY29uZmlnLmZnQ29sb3IpLFxuICAgICAgICAgICAgc2hhZG93Q29sb3IgPSBvcHRpb25zLnNoYWRvd0NvbG9yIHx8IGNvbmZpZy5zaGFkb3dDb2xvciB8fCAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgLy8gZm9udCA9IG9wdGlvbnMuZm9udCB8fCBjb25maWcuZm9udCB8fCAnMTFweCB2ZXJkYW5hJyxcbiAgICAgICAgICAgIG1pZGRsZSA9IGhlaWdodCAvIDIsXG4gICAgICAgICAgICBkaWFtZXRlciA9IHNpemVGYWN0b3IgKiBoZWlnaHQsXG4gICAgICAgICAgICBvdXRlclJhZGl1cyA9IHNpemVGYWN0b3IgKiBtaWRkbGUsXG4gICAgICAgICAgICB2YWwgPSBOdW1iZXIob3B0aW9ucy52YWwpLFxuICAgICAgICAgICAgcG9pbnRzID0gdGhpcy5wb2ludHM7XG5cbiAgICAgICAgaWYgKCFwb2ludHMpIHtcbiAgICAgICAgICAgIHZhciBpbm5lclJhZGl1cyA9IDMgLyA3ICogb3V0ZXJSYWRpdXM7XG4gICAgICAgICAgICBwb2ludHMgPSB0aGlzLnBvaW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDUsIHBpID0gTWF0aC5QSSAvIDIsIGluY3IgPSBNYXRoLlBJIC8gNTsgaTsgLS1pLCBwaSArPSBpbmNyKSB7XG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB4OiBvdXRlclJhZGl1cyAqIE1hdGguY29zKHBpKSxcbiAgICAgICAgICAgICAgICAgICAgeTogbWlkZGxlIC0gb3V0ZXJSYWRpdXMgKiBNYXRoLnNpbihwaSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwaSArPSBpbmNyO1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgeDogaW5uZXJSYWRpdXMgKiBNYXRoLmNvcyhwaSksXG4gICAgICAgICAgICAgICAgICAgIHk6IG1pZGRsZSAtIGlubmVyUmFkaXVzICogTWF0aC5zaW4ocGkpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb2ludHMucHVzaChwb2ludHNbMF0pOyAvLyBjbG9zZSB0aGUgcGF0aFxuICAgICAgICB9XG5cbiAgICAgICAgZ2MuY2FjaGUuc2hhZG93Q29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gICAgICAgIGdjLmNhY2hlLmxpbmVKb2luID0gJ3JvdW5kJztcbiAgICAgICAgZ2MuYmVnaW5QYXRoKCk7XG4gICAgICAgIGZvciAodmFyIGogPSA1LCBzeCA9IHggKyA1ICsgb3V0ZXJSYWRpdXM7IGo7IC0taiwgc3ggKz0gZGlhbWV0ZXIpIHtcbiAgICAgICAgICAgIHBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHBvaW50LCBpbmRleCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgZ2NbaW5kZXggPyAnbGluZVRvJyA6ICdtb3ZlVG8nXShzeCArIHBvaW50LngsIHkgKyBwb2ludC55KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgfVxuICAgICAgICBnYy5jbG9zZVBhdGgoKTtcblxuICAgICAgICB2YWwgPSB2YWwgLyBkb21haW4gKiA1O1xuXG4gICAgICAgIGdjLmNhY2hlLmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgICAgICBnYy5zYXZlKCk7XG4gICAgICAgIGdjLmNsaXAoKTtcbiAgICAgICAgZ2MuZmlsbFJlY3QoeCArIDUsIHksXG4gICAgICAgICAgICAoTWF0aC5mbG9vcih2YWwpICsgMC4yNSArIHZhbCAlIDEgKiAwLjUpICogZGlhbWV0ZXIsIC8vIGFkanVzdCB3aWR0aCB0byBza2lwIG92ZXIgc3RhciBvdXRsaW5lcyBhbmQganVzdCBtZXRlciB0aGVpciBpbnRlcmlvcnNcbiAgICAgICAgICAgIGhlaWdodCk7XG4gICAgICAgIGdjLnJlc3RvcmUoKTsgLy8gcmVtb3ZlIGNsaXBwaW5nIHJlZ2lvblxuXG4gICAgICAgIGdjLmNhY2hlLnN0cm9rZVN0eWxlID0gc3Ryb2tlO1xuICAgICAgICBnYy5jYWNoZS5saW5lV2lkdGggPSAxO1xuICAgICAgICBnYy5zdHJva2UoKTtcblxuICAgICAgICBpZiAoZmdDb2xvciAmJiBmZ0NvbG9yICE9PSAndHJhbnNwYXJlbnQnKSB7XG4gICAgICAgICAgICBnYy5jYWNoZS5maWxsU3R5bGUgPSBmZ0NvbG9yO1xuICAgICAgICAgICAgZ2MuY2FjaGUuZm9udCA9ICcxMXB4IHZlcmRhbmEnO1xuICAgICAgICAgICAgZ2MuY2FjaGUudGV4dEFsaWduID0gJ3JpZ2h0JztcbiAgICAgICAgICAgIGdjLmNhY2hlLnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICAgICAgZ2MuY2FjaGUuc2hhZG93Q29sb3IgPSBzaGFkb3dDb2xvcjtcbiAgICAgICAgICAgIGdjLmNhY2hlLnNoYWRvd09mZnNldFggPSBnYy5jYWNoZS5zaGFkb3dPZmZzZXRZID0gMTtcbiAgICAgICAgICAgIGdjLmZpbGxUZXh0KHZhbC50b0ZpeGVkKDEpLCB4ICsgd2lkdGggKyAxMCwgeSArIGhlaWdodCAvIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RGFya2VuZWRDb2xvcihnYywgY29sb3IsIGZhY3Rvcikge1xuICAgICAgICB2YXIgcmdiYSA9IGdldFJHQkEoZ2MsIGNvbG9yKTtcbiAgICAgICAgcmV0dXJuICdyZ2JhKCcgKyBNYXRoLnJvdW5kKGZhY3RvciAqIHJnYmFbMF0pICsgJywnICsgTWF0aC5yb3VuZChmYWN0b3IgKiByZ2JhWzFdKSArICcsJyArIE1hdGgucm91bmQoZmFjdG9yICogcmdiYVsyXSkgKyAnLCcgKyAocmdiYVszXSB8fCAxKSArICcpJztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRSR0JBKGdjLCBjb2xvclNwZWMpIHtcbiAgICAgICAgLy8gTm9ybWFsaXplIHZhcmlldHkgb2YgQ1NTIGNvbG9yIHNwZWMgc3ludGF4ZXMgdG8gb25lIG9mIHR3b1xuICAgICAgICBnYy5jYWNoZS5maWxsU3R5bGUgPSBjb2xvclNwZWM7XG5cbiAgICAgICAgdmFyIHJnYmEgPSBjb2xvclNwZWMubWF0Y2goUkVHRVhQX0NTU19IRVg2KTtcbiAgICAgICAgaWYgKHJnYmEpIHtcbiAgICAgICAgICAgIHJnYmEuc2hpZnQoKTsgLy8gcmVtb3ZlIHdob2xlIG1hdGNoXG4gICAgICAgICAgICByZ2JhLmZvckVhY2goZnVuY3Rpb24odmFsLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJnYmFbaW5kZXhdID0gcGFyc2VJbnQodmFsLCAxNik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJnYmEgPSBjb2xvclNwZWMubWF0Y2goUkVHRVhQX0NTU19SR0IpO1xuICAgICAgICAgICAgaWYgKCFyZ2JhKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgJ1VuZXhwZWN0ZWQgZm9ybWF0IGdldHRpbmcgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELmZpbGxTdHlsZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2JhLnNoaWZ0KCk7IC8vIHJlbW92ZSB3aG9sZSBtYXRjaFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJnYmE7XG4gICAgfVxuXG5cbiAgICAvL0V4dGVuZCBIeXBlckdyaWQncyBiYXNlIFJlbmRlcmVyXG4gICAgdmFyIHNwYXJrU3RhclJhdGluZ1JlbmRlcmVyID0gZ3JpZC5jZWxsUmVuZGVyZXJzLkJhc2VDbGFzcy5leHRlbmQoe1xuICAgICAgICBwYWludDogcGFpbnRTcGFya1JhdGluZ1xuICAgIH0pO1xuXG4gICAgLy9SZWdpc3RlciB5b3VyIHJlbmRlcmVyXG4gICAgZ3JpZC5jZWxsUmVuZGVyZXJzLmFkZCgnU3RhcnJ5Jywgc3BhcmtTdGFyUmF0aW5nUmVuZGVyZXIpO1xuXG4gICAgLy8gRU5EIE9GIENVU1RPTSBDRUxMIFJFTkRFUkVSXG4gICAgcmV0dXJuIGdyaWQ7XG59O1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qIGdsb2JhbHMgcGVvcGxlMSwgcGVvcGxlMiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8vIFNvbWUgRE9NIHN1cHBvcnQgZnVuY3Rpb25zLi4uXG4vLyBCZXNpZGVzIHRoZSBjYW52YXMsIHRoaXMgdGVzdCBoYXJuZXNzIG9ubHkgaGFzIGEgaGFuZGZ1bCBvZiBidXR0b25zIGFuZCBjaGVja2JveGVzLlxuLy8gVGhlIGZvbGxvd2luZyBmdW5jdGlvbnMgc2VydmljZSB0aGVzZSBjb250cm9scy5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkZW1vLCBncmlkKSB7XG5cbiAgICAvLyBtYWtlIGJ1dHRvbnMgZGl2IGFic29sdXRlIHNvIGJ1dHRvbnMgd2lkdGggb2YgMTAwJSBkb2Vzbid0IHN0cmV0Y2ggdG8gd2lkdGggb2YgZGFzaGJvYXJkXG4gICAgdmFyIGN0cmxHcm91cHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3RybC1ncm91cHMnKSxcbiAgICAgICAgZGFzaGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rhc2hib2FyZCcpLFxuICAgICAgICBidXR0b25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1dHRvbnMnKTtcblxuICAgIGN0cmxHcm91cHMuc3R5bGUudG9wID0gY3RybEdyb3Vwcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyAncHgnO1xuICAgIC8vYnV0dG9ucy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgZGFzaGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBmdW5jdGlvbiB0b2dnbGVSb3dTdHlsaW5nTWV0aG9kKCkge1xuICAgICAgICBkZW1vLnN0eWxlUm93c0Zyb21EYXRhID0gIWRlbW8uc3R5bGVSb3dzRnJvbURhdGE7XG4gICAgfVxuXG4gICAgLy8gTGlzdCBvZiBwcm9wZXJ0aWVzIHRvIHNob3cgYXMgY2hlY2tib3hlcyBpbiB0aGlzIGRlbW8ncyBcImRhc2hib2FyZFwiXG4gICAgdmFyIHRvZ2dsZVByb3BzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1JvdyBzdHlsaW5nJyxcbiAgICAgICAgICAgIGN0cmxzOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICcoR2xvYmFsIHNldHRpbmcpJywgbGFiZWw6ICdiYXNlIG9uIGRhdGEnLCBzZXR0ZXI6IHRvZ2dsZVJvd1N0eWxpbmdNZXRob2R9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29sdW1uIGhlYWRlciByb3dzJyxcbiAgICAgICAgICAgIGN0cmxzOiBbXG4gICAgICAgICAgICAgICAge25hbWU6ICdzaG93SGVhZGVyUm93JywgbGFiZWw6ICdoZWFkZXInfSwgLy8gZGVmYXVsdCBcInNldHRlclwiIGlzIGBzZXRQcm9wYFxuICAgICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ0hvdmVyIGhpZ2hsaWdodHMnLFxuICAgICAgICAgICAgY3RybHM6IFtcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2hvdmVyQ2VsbEhpZ2hsaWdodC5lbmFibGVkJywgbGFiZWw6ICdjZWxsJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdob3ZlclJvd0hpZ2hsaWdodC5lbmFibGVkJywgbGFiZWw6ICdyb3cnfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2hvdmVyQ29sdW1uSGlnaGxpZ2h0LmVuYWJsZWQnLCBsYWJlbDogJ2NvbHVtbid9XG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGluayBzdHlsZScsXG4gICAgICAgICAgICBjdHJsczogW1xuICAgICAgICAgICAgICAgIHtuYW1lOiAnbGlua09uSG92ZXInLCBsYWJlbDogJ29uIGhvdmVyJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdsaW5rQ29sb3InLCB0eXBlOiAndGV4dCcsIGxhYmVsOiAnY29sb3InfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2xpbmtDb2xvck9uSG92ZXInLCBsYWJlbDogJ2NvbG9yIG9uIGhvdmVyJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgbGFiZWw6ICdDZWxsIGVkaXRpbmcnLFxuICAgICAgICAgICAgY3RybHM6IFtcbiAgICAgICAgICAgICAgICB7bmFtZTogJ2VkaXRhYmxlJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdlZGl0T25Eb3VibGVDbGljaycsIGxhYmVsOiAncmVxdWlyZXMgZG91YmxlLWNsaWNrJ30sXG4gICAgICAgICAgICAgICAge25hbWU6ICdlZGl0T25LZXlkb3duJywgbGFiZWw6ICd0eXBlIHRvIGVkaXQnfVxuICAgICAgICAgICAgXVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBsYWJlbDogJ1NlbGVjdGlvbicsXG4gICAgICAgICAgICBjdHJsczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NoZWNrYm94T25seVJvd1NlbGVjdGlvbnMnLCBsYWJlbDogJ2J5IHJvdyBoYW5kbGVzIG9ubHknLCBzZXR0ZXI6IHNldFNlbGVjdGlvblByb3AsXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6ICdOb3RlIHRoYXQgd2hlbiB0aGlzIHByb3BlcnR5IGlzIGFjdGl2ZSwgYXV0b1NlbGVjdFJvd3Mgd2lsbCBub3Qgd29yay4nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7bmFtZTogJ3NpbmdsZVJvd1NlbGVjdGlvbk1vZGUnLCBsYWJlbDogJ29uZSByb3cgYXQgYSB0aW1lJywgc2V0dGVyOiBzZXRTZWxlY3Rpb25Qcm9wfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICchbXVsdGlwbGVTZWxlY3Rpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdvbmUgY2VsbCByZWdpb24gYXQgYSB0aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGVyOiBzZXRTZWxlY3Rpb25Qcm9wLFxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdhdXRvU2VsZWN0Um93cycsIGxhYmVsOiAnYXV0by1zZWxlY3Qgcm93cycsIHNldHRlcjogc2V0U2VsZWN0aW9uUHJvcCxcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogJ05vdGVzOlxcbicgK1xuICAgICAgICAgICAgICAgICAgICAnMS4gUmVxdWlyZXMgdGhhdCBjaGVja2JveE9ubHlSb3dTZWxlY3Rpb25zIGJlIHNldCB0byBmYWxzZSAoc28gY2hlY2tpbmcgdGhpcyBib3ggYXV0b21hdGljYWxseSB1bmNoZWNrcyB0aGF0IG9uZSkuXFxuJyArXG4gICAgICAgICAgICAgICAgICAgICcyLiBTZXQgc2luZ2xlUm93U2VsZWN0aW9uTW9kZSB0byBmYWxzZSB0byBhbGxvdyBhdXRvLXNlbGVjdCBvZiBtdWx0aXBsZSByb3dzLidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtuYW1lOiAnYXV0b1NlbGVjdENvbHVtbnMnLCBsYWJlbDogJ2F1dG8tc2VsZWN0IGNvbHVtbnMnLCBzZXR0ZXI6IHNldFNlbGVjdGlvblByb3B9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdO1xuXG5cbiAgICB0b2dnbGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgYWRkVG9nZ2xlKHByb3ApO1xuICAgIH0pO1xuXG5cbiAgICBbXG4gICAgICAgIHtsYWJlbDogJ1RvZ2dsZSBFbXB0eSBEYXRhJywgb25jbGljazogZGVtby50b2dnbGVFbXB0eURhdGF9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NldCBEYXRhJywgb25jbGljazogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkZW1vLnJlc2V0RGF0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1NldCBEYXRhIDEgKDUwMDAgcm93cyknLCBvbmNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRlbW8uc2V0RGF0YShwZW9wbGUxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbGFiZWw6ICdTZXQgRGF0YSAyICgxMDAwMCByb3dzKScsIG9uY2xpY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGVtby5zZXREYXRhKHBlb3BsZTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7bGFiZWw6ICdSZXNldCBHcmlkJywgb25jbGljazogZGVtby5yZXNldH1cblxuICAgIF0uZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGl0ZW0ubGFiZWw7XG4gICAgICAgIGJ1dHRvbi5vbmNsaWNrID0gaXRlbS5vbmNsaWNrO1xuICAgICAgICBpZiAoaXRlbS50aXRsZSkge1xuICAgICAgICAgICAgYnV0dG9uLnRpdGxlID0gaXRlbS50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIGFkZFRvZ2dsZShjdHJsR3JvdXApIHtcbiAgICAgICAgdmFyIGlucHV0LCBsYWJlbCxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnY3RybC1ncm91cCc7XG5cbiAgICAgICAgaWYgKGN0cmxHcm91cC5sYWJlbCkge1xuICAgICAgICAgICAgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxhYmVsLmNsYXNzTmFtZSA9ICd0d2lzdGVyJztcbiAgICAgICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGN0cmxHcm91cC5sYWJlbDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hvaWNlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjaG9pY2VzLmNsYXNzTmFtZSA9ICdjaG9pY2VzJztcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNob2ljZXMpO1xuXG4gICAgICAgIGN0cmxHcm91cC5jdHJscy5mb3JFYWNoKGZ1bmN0aW9uKGN0cmwpIHtcbiAgICAgICAgICAgIGlmICghY3RybCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlZmVyZW5jZUVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdHlwZSA9IGN0cmwudHlwZSB8fCAnY2hlY2tib3gnLFxuICAgICAgICAgICAgICAgIHRvb2x0aXAgPSAnUHJvcGVydHkgbmFtZTogJyArIGN0cmwubmFtZTtcblxuICAgICAgICAgICAgaWYgKGN0cmwudG9vbHRpcCkge1xuICAgICAgICAgICAgICAgIHRvb2x0aXAgKz0gJ1xcblxcbicgKyBjdHJsLnRvb2x0aXA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgaW5wdXQuaWQgPSBjdHJsLm5hbWU7XG4gICAgICAgICAgICBpbnB1dC5uYW1lID0gY3RybEdyb3VwLmxhYmVsO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBjdHJsLnZhbHVlIHx8IGdldFByb3BlcnR5KGN0cmwubmFtZSkgfHwgJyc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLndpZHRoID0gJzI1cHgnO1xuICAgICAgICAgICAgICAgICAgICBpbnB1dC5zdHlsZS5tYXJnaW5MZWZ0ID0gJzRweCc7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnN0eWxlLm1hcmdpblJpZ2h0ID0gJzRweCc7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBpbnB1dDsgLy8gbGFiZWwgZ29lcyBhZnRlciBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICBpbnB1dC5jaGVja2VkID0gJ2NoZWNrZWQnIGluIGN0cmxcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY3RybC5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGdldFByb3BlcnR5KGN0cmwubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZUVsZW1lbnQgPSBudWxsOyAvLyBsYWJlbCBnb2VzIGJlZm9yZSBpbnB1dFxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZVJhZGlvQ2xpY2suY2FsbCh0aGlzLCBjdHJsLnNldHRlciB8fCBzZXRQcm9wLCBldmVudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICBsYWJlbC50aXRsZSA9IHRvb2x0aXA7XG4gICAgICAgICAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgICAgICBsYWJlbC5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnICsgKGN0cmwubGFiZWwgfHwgY3RybC5uYW1lKSksXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlRWxlbWVudFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY2hvaWNlcy5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChjdHJsLm5hbWUgPT09ICd0cmVldmlldycpIHtcbiAgICAgICAgICAgICAgICBsYWJlbC5vbm1vdXNlZG93biA9IGlucHV0Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnB1dC5jaGVja2VkICYmIGdyaWQuYmVoYXZpb3IuZGF0YU1vZGVsLmRhdGEgIT09IGRlbW8udHJlZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdMb2FkIHRyZWUgZGF0YSBmaXJzdCAoXCJTZXQgRGF0YSAzXCIgYnV0dG9uKS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjdHJsR3JvdXBzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gcmVzZXQgZGFzaGJvYXJkIGNoZWNrYm94ZXMgYW5kIHJhZGlvIGJ1dHRvbnMgdG8gbWF0Y2ggY3VycmVudCB2YWx1ZXMgb2YgZ3JpZCBwcm9wZXJ0aWVzXG4gICAgZGVtby5yZXNldERhc2hib2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2dnbGVQcm9wcy5mb3JFYWNoKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgIHByb3AuY3RybHMuZm9yRWFjaChmdW5jdGlvbihjdHJsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN0cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdHJsLnNldHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBzZXRTZWxlY3Rpb25Qcm9wOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBzZXRQcm9wOlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjdHJsLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncmFkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gY3RybC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGFyaXR5ID0gKGlkWzBdID09PSAnIScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmNoZWNrZWQgPSBnZXRQcm9wZXJ0eShpZCkgXiBwb2xhcml0eTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdldFByb3BlcnR5KGtleSkge1xuICAgICAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgcHJvcCA9IGdyaWQucHJvcGVydGllcztcblxuICAgICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHByb3AgPSBwcm9wW2tleXMuc2hpZnQoKV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFiLWRhc2hib2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgaWYgKGRhc2hib2FyZC5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgIGRhc2hib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICAgIGdyaWQuZGl2LnN0eWxlLnRyYW5zaXRpb24gPSAnbWFyZ2luLWxlZnQgLjc1cyc7XG4gICAgICAgICAgICBncmlkLmRpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gTWF0aC5tYXgoMTgwLCBkYXNoYm9hcmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkucmlnaHQgKyA4KSArICdweCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGRhc2hib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfSwgODAwKTtcbiAgICAgICAgICAgIGdyaWQuZGl2LnN0eWxlLm1hcmdpbkxlZnQgPSAnMzBweCc7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBmcHNUaW1lciwgc2VjcywgZnJhbWVzO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItZnBzJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgZWwgPSB0aGlzLCBzdCA9IGVsLnN0eWxlO1xuICAgICAgICBpZiAoKGdyaWQucHJvcGVydGllcy5lbmFibGVDb250aW51b3VzUmVwYWludCBePSB0cnVlKSkge1xuICAgICAgICAgICAgc3QuYmFja2dyb3VuZENvbG9yID0gJyM2NjYnO1xuICAgICAgICAgICAgc3QudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgICAgICAgICAgc2VjcyA9IGZyYW1lcyA9IDA7XG4gICAgICAgICAgICBjb2RlKCk7XG4gICAgICAgICAgICBmcHNUaW1lciA9IHNldEludGVydmFsKGNvZGUsIDEwMDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChmcHNUaW1lcik7XG4gICAgICAgICAgICBzdC5iYWNrZ3JvdW5kQ29sb3IgPSBzdC50ZXh0QWxpZ24gPSBudWxsO1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gJ0ZQUyc7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gY29kZSgpIHtcbiAgICAgICAgICAgIHZhciBmcHMgPSBncmlkLmNhbnZhcy5jdXJyZW50RlBTLFxuICAgICAgICAgICAgICAgIGJhcnMgPSBBcnJheShNYXRoLnJvdW5kKGZwcykgKyAxKS5qb2luKCdJJyksXG4gICAgICAgICAgICAgICAgc3VicmFuZ2UsIHNwYW47XG5cbiAgICAgICAgICAgIC8vIGZpcnN0IHNwYW4gaG9sZHMgdGhlIDMwIGJhY2tncm91bmQgYmFyc1xuICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXG4gICAgICAgICAgICAvLyAybmQgc3BhbiBob2xkcyB0aGUgbnVtZXJpY1xuICAgICAgICAgICAgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgICAgICAgICAgaWYgKHNlY3MpIHtcbiAgICAgICAgICAgICAgICBmcmFtZXMgKz0gZnBzO1xuICAgICAgICAgICAgICAgIHNwYW4uaW5uZXJIVE1MID0gZnBzLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgc3Bhbi50aXRsZSA9IHNlY3MgKyAnLXNlY29uZCBhdmVyYWdlID0gJyArIChmcmFtZXMgLyBzZWNzKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VjcyArPSAxO1xuXG4gICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICAgICAgLy8gMCB0byA0IGNvbG9yIHJhbmdlIGJhciBzdWJzZXRzOiAxLi4xMDpyZWQsIDExOjIwOnllbGxvdywgMjE6MzA6Z3JlZW5cbiAgICAgICAgICAgIHdoaWxlICgoc3VicmFuZ2UgPSBiYXJzLnN1YnN0cigwLCAxMikpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBzdWJyYW5nZTtcbiAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgICAgICBiYXJzID0gYmFycy5zdWJzdHIoMTIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgaGVpZ2h0O1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWItZ3Jvdy1zaHJpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBsYWJlbDtcbiAgICAgICAgaWYgKCFoZWlnaHQpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGdyaWQuZGl2KS5oZWlnaHQ7XG4gICAgICAgICAgICBncmlkLmRpdi5zdHlsZS50cmFuc2l0aW9uID0gJ2hlaWdodCAxLjVzIGxpbmVhcic7XG4gICAgICAgICAgICBncmlkLmRpdi5zdHlsZS5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgbGFiZWwgPSAnU2hyaW5rJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGdyaWQuZGl2LnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgICAgIGhlaWdodCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGxhYmVsID0gJ0dyb3cnO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MICs9ICcgLi4uJztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHRoaXMuaW5uZXJIVE1MID0gbGFiZWw7XG4gICAgICAgIH0uYmluZCh0aGlzKSwgMTUwMCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFzaGJvYXJkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICB2YXIgY3RybCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKGN0cmwuY2xhc3NMaXN0LmNvbnRhaW5zKCd0d2lzdGVyJykpIHtcbiAgICAgICAgICAgIGN0cmwubmV4dEVsZW1lbnRTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSBjdHJsLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKSA/ICdibG9jaycgOiAnbm9uZSc7XG4gICAgICAgICAgICBncmlkLmRpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gTWF0aC5tYXgoMTgwLCBldmVudC5jdXJyZW50VGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnJpZ2h0ICsgOCkgKyAncHgnO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHZhciByYWRpb0dyb3VwID0ge307XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSYWRpb0NsaWNrKGhhbmRsZXIsIGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHZhciBsYXN0UmFkaW8gPSByYWRpb0dyb3VwW3RoaXMubmFtZV07XG4gICAgICAgICAgICBpZiAobGFzdFJhZGlvKSB7XG4gICAgICAgICAgICAgICAgbGFzdFJhZGlvLmhhbmRsZXIuY2FsbChsYXN0UmFkaW8uY3RybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByYWRpb0dyb3VwW3RoaXMubmFtZV0gPSB7Y3RybDogdGhpcywgaGFuZGxlcjogaGFuZGxlcn07XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRQcm9wKCkgeyAvLyBzdGFuZGFyZCBjaGVja2JveCBjbGljayBoYW5kbGVyXG4gICAgICAgIHZhciBoYXNoID0ge30sIGRlcHRoID0gaGFzaDtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5pZDtcbiAgICAgICAgaWYgKGlkWzBdID09PSAnIScpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgIT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyAnRXhwZWN0ZWQgaW52ZXJzZSBvcGVyYXRvciAoISkgb24gY2hlY2tib3ggZGFzaGJvYXJkIGNvbnRyb2xzIG9ubHkgYnV0IGZvdW5kIG9uICcgKyB0aGlzLnR5cGUgKyAnLic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZCA9IGlkLnN1YnN0cigxKTtcbiAgICAgICAgICAgIHZhciBpbnZlcnNlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIga2V5cyA9IGlkLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgZGVwdGggPSBkZXB0aFtrZXlzLnNoaWZ0KCldID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgZGVwdGhba2V5cy5zaGlmdCgpXSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgICAgICAgZGVwdGhba2V5cy5zaGlmdCgpXSA9IGludmVyc2UgPyAhdGhpcy5jaGVja2VkIDogdGhpcy5jaGVja2VkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgZ3JpZC50YWtlRm9jdXMoKTtcbiAgICAgICAgZ3JpZC5hZGRQcm9wZXJ0aWVzKGhhc2gpO1xuICAgICAgICBncmlkLmJlaGF2aW9yQ2hhbmdlZCgpO1xuICAgICAgICBncmlkLnJlcGFpbnQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRTZWxlY3Rpb25Qcm9wKCkgeyAvLyBhbHRlcm5hdGUgY2hlY2tib3ggY2xpY2sgaGFuZGxlclxuICAgICAgICB2YXIgY3RybDtcblxuICAgICAgICBncmlkLnNlbGVjdGlvbk1vZGVsLmNsZWFyKCk7XG5cbiAgICAgICAgc2V0UHJvcC5jYWxsKHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmlkID09PSAnY2hlY2tib3hPbmx5Um93U2VsZWN0aW9ucycgJiZcbiAgICAgICAgICAgICAgICAoY3RybCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRvU2VsZWN0Um93cycpKS5jaGVja2VkXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBhbGVydCgnTm90ZSB0aGF0IGF1dG9TZWxlY3RSb3dzIGlzIGluZWZmZWN0dWFsIHdoZW4gY2hlY2tib3hPbmx5Um93U2VsZWN0aW9ucyBpcyBvbi4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pZCA9PT0gJ2F1dG9TZWxlY3RSb3dzJykge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGN0cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tib3hPbmx5Um93U2VsZWN0aW9ucycpKS5jaGVja2VkICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oJ05vdGUgdGhhdCBhdXRvU2VsZWN0Um93cyBpcyBpbmVmZmVjdHVhbCB3aGVuIGNoZWNrYm94T25seVJvd1NlbGVjdGlvbnMgaXMgb24uXFxuXFxuVHVybiBvZmYgY2hlY2tib3hPbmx5Um93U2VsZWN0aW9ucz8nKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcC5jYWxsKGN0cmwpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgKGN0cmwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2luZ2xlUm93U2VsZWN0aW9uTW9kZScpKS5jaGVja2VkICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oJ05vdGUgdGhhdCBhdXRvLXNlbGVjdGluZyBhIHJhbmdlIG9mIHJvd3MgYnkgc2VsZWN0aW5nIGEgcmFuZ2Ugb2YgY2VsbHMgKHdpdGggY2xpY2sgKyBkcmFnIG9yIHNoaWZ0ICsgY2xpY2spIGlzIG5vdCBwb3NzaWJsZSB3aXRoIHNpbmdsZVJvd1NlbGVjdGlvbk1vZGUgaXMgb24uXFxuXFxuVHVybiBvZmYgc2luZ2xlUm93U2VsZWN0aW9uTW9kZT8nKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBjdHJsLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvcC5jYWxsKGN0cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkZW1vLCBncmlkKSB7XG5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1idXR0b24tcHJlc3NlZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGNlbGxFdmVudCA9IGUuZGV0YWlsO1xuICAgICAgICBjZWxsRXZlbnQudmFsdWUgPSAhY2VsbEV2ZW50LnZhbHVlO1xuICAgIH0pO1xuXG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdmaW4tY2VsbC1lbnRlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGNlbGxFdmVudCA9IGUuZGV0YWlsO1xuXG4gICAgICAgIC8vaG93IHRvIHNldCB0aGUgdG9vbHRpcC4uLi5cbiAgICAgICAgZ3JpZC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2V2ZW50IG5hbWU6IFwiZmluLWNlbGwtZW50ZXJcIlxcbicgK1xuICAgICAgICAgICAgJ2dyaWRDZWxsOiB7IHg6ICcgKyBjZWxsRXZlbnQuZ3JpZENlbGwueCArICcsIHk6ICcgKyBjZWxsRXZlbnQuZ3JpZENlbGwueSArICcgfVxcbicgK1xuICAgICAgICAgICAgJ2RhdGFDZWxsOiB7IHg6ICcgKyBjZWxsRXZlbnQuZGF0YUNlbGwueCArICcsIHk6ICcgKyBjZWxsRXZlbnQuZGF0YUNlbGwueSArICcgfVxcbicgK1xuICAgICAgICAgICAgJ3N1YmdyaWQgdHlwZTogXCInICsgY2VsbEV2ZW50LnN1YmdyaWQudHlwZSArICdcIlxcbicgK1xuICAgICAgICAgICAgJ3N1YmdyaWQgbmFtZTogJyArIChjZWxsRXZlbnQuc3ViZ3JpZC5uYW1lID8gJ1wiJyArIGNlbGxFdmVudC5zdWJncmlkLm5hbWUgKyAnXCInIDogJ3VuZGVmaW5lZCcpXG4gICAgICAgICk7XG4gICAgfSk7XG5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1zZXQtdG90YWxzLXZhbHVlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgZGV0YWlsID0gZS5kZXRhaWwsXG4gICAgICAgICAgICBhcmVhcyA9IGRldGFpbC5hcmVhcyB8fCBbJ3RvcCcsICdib3R0b20nXTtcblxuICAgICAgICBhcmVhcy5mb3JFYWNoKGZ1bmN0aW9uKGFyZWEpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gJ2dldCcgKyBhcmVhWzBdLnRvVXBwZXJDYXNlKCkgKyBhcmVhLnN1YnN0cigxKSArICdUb3RhbHMnLFxuICAgICAgICAgICAgICAgIHRvdGFsc1JvdyA9IGdyaWQuYmVoYXZpb3IuZGF0YU1vZGVsW21ldGhvZE5hbWVdKCk7XG5cbiAgICAgICAgICAgIHRvdGFsc1Jvd1tkZXRhaWwueV1bZGV0YWlsLnhdID0gZGV0YWlsLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBncmlkLnJlcGFpbnQoKTtcbiAgICB9KTtcblxuICAgIC8qKlxuICAgICAqIEBzdW1tYXJ5IExpc3RlbiBmb3IgY2VydGFpbiBrZXkgcHJlc3NlcyBmcm9tIGdyaWQgb3IgY2VsbCBlZGl0b3IuXG4gICAgICogQGRlc2MgTk9URTogZmluY2FudmFzJ3MgaW50ZXJuYWwgY2hhciBtYXAgeWllbGRzIG1peGVkIGNhc2Ugd2hpbGUgZmluLWVkaXRvci1rZXkqIGV2ZW50cyBkbyBub3QuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gTm90IGhhbmRsZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlQ3Vyc29yS2V5KGUpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IGUuZGV0YWlsLFxuICAgICAgICAgICAga2V5ID0gU3RyaW5nLmZyb21DaGFyQ29kZShkZXRhaWwua2V5KS50b1VwcGVyQ2FzZSgpLFxuICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7IC8vIG1lYW5zIGV2ZW50IGhhbmRsZWQgaGVyZWluXG5cbiAgICAgICAgaWYgKGRldGFpbC5jdHJsKSB7XG4gICAgICAgICAgICBpZiAoZGV0YWlsLnNoaWZ0KSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMCc6IGlmIChncmlkLnN0b3BFZGl0aW5nKCkpIHsgZ3JpZC5zZWxlY3RUb1ZpZXdwb3J0Q2VsbCgwLCAwKTsgfSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnOSc6IGlmIChncmlkLnN0b3BFZGl0aW5nKCkpIHsgZ3JpZC5zZWxlY3RUb0ZpbmFsQ2VsbCgpOyB9IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc4JzogaWYgKGdyaWQuc3RvcEVkaXRpbmcoKSkgeyBncmlkLnNlbGVjdFRvRmluYWxDZWxsT2ZDdXJyZW50Um93KCk7IH0gYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzcnOiBpZiAoZ3JpZC5zdG9wRWRpdGluZygpKSB7IGdyaWQuc2VsZWN0VG9GaXJzdENlbGxPZkN1cnJlbnRSb3coKTsgfSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzAnOiBpZiAoZ3JpZC5zdG9wRWRpdGluZygpKSB7IGdyaWQuc2VsZWN0Vmlld3BvcnRDZWxsKDAsIDApOyB9IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc5JzogaWYgKGdyaWQuc3RvcEVkaXRpbmcoKSkgeyBncmlkLnNlbGVjdEZpbmFsQ2VsbCgpOyB9IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc4JzogaWYgKGdyaWQuc3RvcEVkaXRpbmcoKSkgeyBncmlkLnNlbGVjdEZpbmFsQ2VsbE9mQ3VycmVudFJvdygpOyB9IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc3JzogaWYgKGdyaWQuc3RvcEVkaXRpbmcoKSkgeyBncmlkLnNlbGVjdEZpcnN0Q2VsbE9mQ3VycmVudFJvdygpOyB9IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdmaW4ta2V5ZG93bicsIGhhbmRsZUN1cnNvcktleSk7XG5cbiAgICBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1lZGl0b3Ita2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy8gdmFyIGRldGFpbCA9IGUuZGV0YWlsLFxuICAgICAgICAvLyAgICAga2UgPSBkZXRhaWwua2V5RXZlbnQ7XG4gICAgICAgIC8vXG4gICAgICAgIC8vIC8vIG1vcmUgZGV0YWlsLCBwbGVhc2VcbiAgICAgICAgLy8gZGV0YWlsLnByaW1pdGl2ZUV2ZW50ID0ga2U7XG4gICAgICAgIC8vIGRldGFpbC5rZXkgPSBrZS5rZXlDb2RlO1xuICAgICAgICAvLyBkZXRhaWwuc2hpZnQgPSBrZS5zaGlmdEtleTtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gaGFuZGxlQ3Vyc29yS2V5KGUpO1xuICAgIH0pO1xuXG4gICAgZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdmaW4tc2VsZWN0aW9uLWNoYW5nZWQnLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgaWYgKGUuZGV0YWlsLnNlbGVjdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gc2VsZWN0aW9ucycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdG8gZ2V0IHRoZSBzZWxlY3RlZCByb3dzIHVuY29tbWVudCB0aGUgYmVsb3cuLi4uLlxuICAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkLmdldFJvd1NlbGVjdGlvbk1hdHJpeCgpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZ3JpZC5nZXRSb3dTZWxlY3Rpb24oKSk7XG5cbiAgICB9KTtcblxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZmluLXJvdy1zZWxlY3Rpb24tY2hhbmdlZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGRldGFpbCA9IGUuZGV0YWlsO1xuICAgICAgICAvLyBNb3ZlIGNlbGwgc2VsZWN0aW9uIHdpdGggcm93IHNlbGVjdGlvblxuICAgICAgICB2YXIgcm93cyA9IGRldGFpbC5yb3dzLFxuICAgICAgICAgICAgc2VsZWN0aW9ucyA9IGRldGFpbC5zZWxlY3Rpb25zO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICBncmlkLnByb3BlcnRpZXMuc2luZ2xlUm93U2VsZWN0aW9uTW9kZSAmJiAvLyBsZXQncyBvbmx5IGF0dGVtcHQgdGhpcyB3aGVuIGluIHRoaXMgbW9kZVxuICAgICAgICAgICAgIWdyaWQucHJvcGVydGllcy5tdWx0aXBsZVNlbGVjdGlvbnMgJiYgLy8gYW5kIG9ubHkgd2hlbiBpbiBzaW5nbGUgc2VsZWN0aW9uIG1vZGVcbiAgICAgICAgICAgIHJvd3MubGVuZ3RoICYmIC8vIHVzZXIganVzdCBzZWxlY3RlZCBhIHJvdyAobXVzdCBiZSBzaW5nbGUgcm93IGR1ZSB0byBtb2RlIHdlJ3JlIGluKVxuICAgICAgICAgICAgc2VsZWN0aW9ucy5sZW5ndGggIC8vIHRoZXJlIHdhcyBhIGNlbGwgcmVnaW9uIHNlbGVjdGVkIChtdXN0IGJlIHRoZSBvbmx5IG9uZSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgcmVjdCA9IGdyaWQuc2VsZWN0aW9uTW9kZWwuZ2V0TGFzdFNlbGVjdGlvbigpLCAvLyB0aGUgb25seSBjZWxsIHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIHggPSByZWN0LmxlZnQsXG4gICAgICAgICAgICAgICAgeSA9IHJvd3NbMF0sIC8vIHdlIGtub3cgdGhlcmUncyBvbmx5IDEgcm93IHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgd2lkdGggPSByZWN0LnJpZ2h0IC0geCxcbiAgICAgICAgICAgICAgICBoZWlnaHQgPSAwLCAvLyBjb2xsYXBzZSB0aGUgbmV3IHJlZ2lvbiB0byBvY2N1cHkgYSBzaW5nbGUgcm93XG4gICAgICAgICAgICAgICAgZmlyZVNlbGVjdGlvbkNoYW5nZWRFdmVudCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBncmlkLnNlbGVjdGlvbk1vZGVsLnNlbGVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBmaXJlU2VsZWN0aW9uQ2hhbmdlZEV2ZW50KTtcbiAgICAgICAgICAgIGdyaWQucmVwYWludCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJvd3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gcm93cyBzZWxlY3RlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vd2UgaGF2ZSBhIGZ1bmN0aW9uIGNhbGwgdG8gY3JlYXRlIHRoZSBzZWxlY3Rpb24gbWF0cml4IGJlY2F1c2VcbiAgICAgICAgLy93ZSBkb24ndCB3YW50IHRvIGNyZWF0ZSBhbG90IG9mIG5lZWRsZXNzIGdhcmJhZ2UgaWYgdGhlIHVzZXJcbiAgICAgICAgLy9pcyBqdXN0IG5hdmlnYXRpbmcgYXJvdW5kXG4gICAgICAgIGNvbnNvbGUubG9nKGdyaWQuZ2V0Um93U2VsZWN0aW9uTWF0cml4KCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhncmlkLmdldFJvd1NlbGVjdGlvbigpKTtcbiAgICB9KTtcblxuICAgIGdyaWQuYWRkRXZlbnRMaXN0ZW5lcignZmluLWNvbHVtbi1zZWxlY3Rpb24tY2hhbmdlZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuZGV0YWlsLmNvbHVtbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gcm93cyBzZWxlY3RlZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vd2UgaGF2ZSBhIGZ1bmN0aW9uIGNhbGwgdG8gY3JlYXRlIHRoZSBzZWxlY3Rpb24gbWF0cml4IGJlY2F1c2VcbiAgICAgICAgLy93ZSBkb24ndCB3YW50IHRvIGNyZWF0ZSBhbG90IG9mIG5lZWRsZXNzIGdhcmJhZ2UgaWYgdGhlIHVzZXJcbiAgICAgICAgLy9pcyBqdXN0IG5hdmlnYXRpbmcgYXJvdW5kXG4gICAgICAgIGNvbnNvbGUubG9nKGdyaWQuZ2V0Q29sdW1uU2VsZWN0aW9uTWF0cml4KCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhncmlkLmdldENvbHVtblNlbGVjdGlvbigpKTtcbiAgICB9KTtcblxuICAgIC8vdW5jb21tZW50IHRvIGNhbmNlbCBlZGl0b3IgcG9wcGluZyB1cDpcbiAgICAvLyBncmlkLmFkZEV2ZW50TGlzdGVuZXIoJ2Zpbi1yZXF1ZXN0LWNlbGwtZWRpdCcsIGZ1bmN0aW9uKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcblxuICAgIC8vdW5jb21tZW50IHRvIGNhbmNlbCB1cGRhdGluZyB0aGUgbW9kZWwgd2l0aCB0aGUgbmV3IGRhdGE6XG4gICAgLy8gZ3JpZC5hZGRFdmVudExpc3RlbmVyKCdmaW4tYmVmb3JlLWNlbGwtZWRpdCcsIGZ1bmN0aW9uKGUpIHsgZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcbn07XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRlbW8sIGdyaWQpIHtcblxuICAgIHZhciBmb290SW5jaFBhdHRlcm4gPSAvXlxccyooKCgoXFxkKyknKT9cXHMqKChcXGQrKVwiKT8pfFxcZCspXFxzKiQvO1xuXG4gICAgdmFyIGZvb3RJbmNoTG9jYWxpemVyID0ge1xuICAgICAgICBmb3JtYXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBmZWV0ID0gTWF0aC5mbG9vcih2YWx1ZSAvIDEyKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IChmZWV0ID8gZmVldCArICdcXCcnIDogJycpICsgJyAnICsgKHZhbHVlICUgMTIpICsgJ1wiJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBwYXJzZTogZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgICAgICB2YXIgaW5jaGVzLCBmZWV0LFxuICAgICAgICAgICAgICAgIHBhcnRzID0gc3RyLm1hdGNoKGZvb3RJbmNoUGF0dGVybik7XG4gICAgICAgICAgICBpZiAocGFydHMpIHtcbiAgICAgICAgICAgICAgICBmZWV0ID0gcGFydHNbNF07XG4gICAgICAgICAgICAgICAgaW5jaGVzID0gcGFydHNbNl07XG4gICAgICAgICAgICAgICAgaWYgKGZlZXQgPT09IHVuZGVmaW5lZCAmJiBpbmNoZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpbmNoZXMgPSBOdW1iZXIocGFydHNbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZlZXQgPSBOdW1iZXIoZmVldCB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgaW5jaGVzID0gTnVtYmVyKGluY2hlcyB8fCAwKTtcbiAgICAgICAgICAgICAgICAgICAgaW5jaGVzID0gMTIgKiBmZWV0ICsgaW5jaGVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW5jaGVzID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBpbmNoZXM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ3JpZC5sb2NhbGl6YXRpb24uYWRkKCdmb290JywgZm9vdEluY2hMb2NhbGl6ZXIpO1xuXG4gICAgZ3JpZC5sb2NhbGl6YXRpb24uYWRkKCdzaW5nZGF0ZScsIG5ldyBncmlkLmxvY2FsaXphdGlvbi5EYXRlRm9ybWF0dGVyKCd6aC1TRycpKTtcblxuICAgIGdyaWQubG9jYWxpemF0aW9uLmFkZCgncG91bmRzJywgbmV3IGdyaWQubG9jYWxpemF0aW9uLk51bWJlckZvcm1hdHRlcignZW4tVVMnLCB7XG4gICAgICAgIHN0eWxlOiAnY3VycmVuY3knLFxuICAgICAgICBjdXJyZW5jeTogJ1VTRCdcbiAgICB9KSk7XG5cbiAgICBncmlkLmxvY2FsaXphdGlvbi5hZGQoJ2ZyYW5jcycsIG5ldyBncmlkLmxvY2FsaXphdGlvbi5OdW1iZXJGb3JtYXR0ZXIoJ2ZyLUZSJywge1xuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgICAgY3VycmVuY3k6ICdFVVInXG4gICAgfSkpO1xuXG4gICAgZ3JpZC5sb2NhbGl6YXRpb24uYWRkKHtcbiAgICAgICAgbmFtZTogJ2hobW0nLCAvLyBhbHRlcm5hdGl2ZSB0byBoYXZpbmcgdG8gaGFtZSBsb2NhbGl6ZXIgaW4gYGdyaWQubG9jYWxpemF0aW9uLmFkZGBcblxuICAgICAgICAvLyByZXR1cm5zIGZvcm1hdHRlZCBzdHJpbmcgZnJvbSBudW1iZXJcbiAgICAgICAgZm9ybWF0OiBmdW5jdGlvbihtaW5zKSB7XG4gICAgICAgICAgICB2YXIgaGggPSBNYXRoLmZsb29yKG1pbnMgLyA2MCkgJSAxMiB8fCAxMiwgLy8gbW9kdWxvIDEyIGhycyB3aXRoIDAgYmVjb21pbmcgMTJcbiAgICAgICAgICAgICAgICBtbSA9IChtaW5zICUgNjAgKyAxMDAgKyAnJykuc3Vic3RyKDEsIDIpLFxuICAgICAgICAgICAgICAgIEFtUG0gPSBtaW5zIDwgZGVtby5OT09OID8gJ0FNJyA6ICdQTSc7XG4gICAgICAgICAgICByZXR1cm4gaGggKyAnOicgKyBtbSArICcgJyArIEFtUG07XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW52YWxpZDogZnVuY3Rpb24oaGhtbSkge1xuICAgICAgICAgICAgcmV0dXJuICEvXigwP1sxLTldfDFbMC0yXSk6WzAtNV1cXGQkLy50ZXN0KGhobW0pOyAvLyAxMjo1OSBtYXhcbiAgICAgICAgfSxcblxuICAgICAgICAvLyByZXR1cm5zIG51bWJlciBmcm9tIGZvcm1hdHRlZCBzdHJpbmdcbiAgICAgICAgcGFyc2U6IGZ1bmN0aW9uKGhobW0pIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGhobW0ubWF0Y2goL14oXFxkKyk6KFxcZHsyfSkkLyk7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHBhcnRzWzFdKSAqIDYwICsgTnVtYmVyKHBhcnRzWzJdKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGdyaWQ7XG5cbn07XG4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cblxuLyogZ2xvYmFscyBmaW4sIHBlb3BsZTEgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQqL1xuXG4ndXNlIHN0cmljdCc7XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBkZW1vID0gd2luZG93LmRlbW8gPSB7XG4gICAgICAgIHNldCB2ZW50KHN0YXJ0KSB7IHdpbmRvdy5ncmlkW3N0YXJ0ID8gJ2xvZ1N0YXJ0JyA6ICdsb2dTdG9wJ10oKTsgfSxcbiAgICAgICAgcmVzZXQ6IHJlc2V0LFxuICAgICAgICBzZXREYXRhOiBzZXREYXRhLFxuICAgICAgICB0b2dnbGVFbXB0eURhdGE6IHRvZ2dsZUVtcHR5RGF0YSxcbiAgICAgICAgcmVzZXREYXRhOiByZXNldERhdGFcbiAgICB9O1xuXG4gICAgdmFyIEh5cGVyZ3JpZCA9IGZpbi5IeXBlcmdyaWQsXG4gICAgICAgIGdldFNjaGVtYSA9IHJlcXVpcmUoJ2Zpbi1oeXBlcmdyaWQtZmllbGQtdG9vbHMnKS5nZXRTY2hlbWEsXG4gICAgICAgIGluaXRTdGF0ZSA9IHJlcXVpcmUoJy4vc2V0U3RhdGUnKSxcbiAgICAgICAgaW5pdENlbGxSZW5kZXJlcnMgPSByZXF1aXJlKCcuL2NlbGxyZW5kZXJlcnMnKSxcbiAgICAgICAgaW5pdEZvcm1hdHRlcnMgPSByZXF1aXJlKCcuL2Zvcm1hdHRlcnMnKSxcbiAgICAgICAgaW5pdENlbGxFZGl0b3JzID0gcmVxdWlyZSgnLi9jZWxsZWRpdG9ycycpLFxuICAgICAgICBpbml0RGFzaGJvYXJkID0gcmVxdWlyZSgnLi9kYXNoYm9hcmQnKSxcbiAgICAgICAgaW5pdEV2ZW50cyA9IHJlcXVpcmUoJy4vZXZlbnRzJyk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmVyc2lvbicpLmlubmVyVGV4dCA9IEh5cGVyZ3JpZC5wcm90b3R5cGUudmVyc2lvbjtcblxuICAgIHZhciBncmlkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vIEJlY2F1c2UgdjMgZGVmYXVsdHMgdG8gdXNlIGRhdGFzYXVyLWxvY2FsICh3aGljaCBpcyBzdGlsbCBpbmNsdWRlZCBpbiB0aGUgYnVpbGQpLFxuICAgICAgICAgICAgLy8gc3BlY2lmeWluZyBpdCBoZXJlIGlzIHN0aWxsIG9wdGlvbmFsLCBidXQgbWF5IGJlIHJlcXVpcmVkIGZvciB2NC5cbiAgICAgICAgICAgIC8vIFVuY29tbWVudCBvbmUgb2YgdGhlIGZvbGxvd2luZyAyIGxpbmVzIHRvIHNwZWNpZnkgKFwiYnJpbmcgeW91ciBvd25cIikgZGF0YSBzb3VyY2U6XG5cbiAgICAgICAgICAgIC8vIGRhdGFNb2RlbDogbmV3IChIeXBlcmdyaWQucmVxdWlyZSgnZGF0YXNhdXItbG9jYWwnKSkocGVvcGxlMSwgZ2V0U2NoZW1hKHBlb3BsZTEpKSxcbiAgICAgICAgICAgIC8vIERhdGFNb2RlbDogSHlwZXJncmlkLnJlcXVpcmUoJ2RhdGFzYXVyLWxvY2FsJyksXG5cbiAgICAgICAgICAgIGRhdGE6IHBlb3BsZTEsXG4gICAgICAgICAgICBtYXJnaW46IHsgYm90dG9tOiAnMTdweCcsIHJpZ2h0OiAnMTdweCcgfSxcbiAgICAgICAgICAgIHBsdWdpbnM6IHJlcXVpcmUoJ2Zpbi1oeXBlcmdyaWQtZXZlbnQtbG9nZ2VyJyksXG4gICAgICAgICAgICBzY2hlbWE6IGdldFNjaGVtYShwZW9wbGUxKSxcbiAgICAgICAgICAgIHN0YXRlOiB7IGNvbG9yOiAnb3JhbmdlJyB9XG4gICAgICAgIH0sXG4gICAgICAgIGdyaWQgPSB3aW5kb3cuZ3JpZCA9IHdpbmRvdy5nID0gbmV3IEh5cGVyZ3JpZCgnZGl2I2pzb24tZXhhbXBsZScsIGdyaWRPcHRpb25zKSxcbiAgICAgICAgYmVoYXZpb3IgPSBncmlkLmJlaGF2aW9yLFxuICAgICAgICBkYXRhTW9kZWwgPSBiZWhhdmlvci5kYXRhTW9kZWw7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh3aW5kb3csIHtcbiAgICAgICAgYjogeyBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gZ3JpZC5iZWhhdmlvcjsgfSB9LFxuICAgICAgICBtOiB7IGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBncmlkLmJlaGF2aW9yLmRhdGFNb2RlbDsgfSB9XG4gICAgfSk7XG5cbiAgICBjb25zb2xlLmxvZygnc2NoZW1hJywgYmVoYXZpb3Iuc2NoZW1hKTtcblxuICAgIGZ1bmN0aW9uIHNldERhdGEoZGF0YSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gIWRhdGEubGVuZ3RoID8gdW5kZWZpbmVkIDogb3B0aW9ucyB8fCB7XG4gICAgICAgICAgICBzY2hlbWE6IGdldFNjaGVtYShkYXRhKVxuICAgICAgICB9O1xuICAgICAgICBncmlkLnNldERhdGEoZGF0YSwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAgIGdyaWQucmVzZXQoKTtcbiAgICAgICAgaW5pdEV2ZW50cyhkZW1vLCBncmlkKTtcbiAgICB9XG5cbiAgICB2YXIgb2xkRGF0YTtcbiAgICBmdW5jdGlvbiB0b2dnbGVFbXB0eURhdGEoKSB7XG4gICAgICAgIGlmICghb2xkRGF0YSkge1xuICAgICAgICAgICAgb2xkRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhTW9kZWwuZGF0YSxcbiAgICAgICAgICAgICAgICBzY2hlbWE6IGJlaGF2aW9yLnNjaGVtYSxcbiAgICAgICAgICAgICAgICBhY3RpdmVDb2x1bW5zOiBiZWhhdmlvci5nZXRBY3RpdmVDb2x1bW5zKCkubWFwKGZ1bmN0aW9uKGNvbHVtbikgeyByZXR1cm4gY29sdW1uLmluZGV4OyB9KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vaW1wb3J0YW50IHRvIHNldCB0b3AgdG90YWxzIGZpcnN0XG4gICAgICAgICAgICBzZXREYXRhKFtdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vaW1wb3J0YW50IHRvIHNldCB0b3AgdG90YWxzIGZpcnN0XG4gICAgICAgICAgICBzZXREYXRhKG9sZERhdGEuZGF0YSwgb2xkRGF0YS5zY2hlbWEpO1xuICAgICAgICAgICAgYmVoYXZpb3Iuc2V0Q29sdW1uSW5kZXhlcyhvbGREYXRhLmFjdGl2ZUNvbHVtbnMpO1xuICAgICAgICAgICAgb2xkRGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc2V0RGF0YSgpIHtcbiAgICAgICAgc2V0RGF0YShwZW9wbGUxKTtcbiAgICAgICAgaW5pdFN0YXRlKGRlbW8sIGdyaWQpO1xuICAgIH1cblxuICAgIGluaXRDZWxsUmVuZGVyZXJzKGRlbW8sIGdyaWQpO1xuICAgIGluaXRGb3JtYXR0ZXJzKGRlbW8sIGdyaWQpO1xuICAgIGluaXRDZWxsRWRpdG9ycyhkZW1vLCBncmlkKTtcbiAgICBpbml0RXZlbnRzKGRlbW8sIGdyaWQpO1xuICAgIGluaXREYXNoYm9hcmQoZGVtbywgZ3JpZCk7XG4gICAgaW5pdFN0YXRlKGRlbW8sIGdyaWQpO1xuXG4gICAgLy8gRm9sbG93aW5nIHdvdWxkIGJlIG5lZWRlZCBmb3Igcm93IGhlaWdodCBjaGFuZ2VzIG1hZGUgaW4gZGF0YSBtb2RlbCBzdWJyb3dzIFBPQzpcbiAgICAvLyBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBncmlkLmJlaGF2aW9yU3RhdGVDaGFuZ2VkKCk7IH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkZW1vLCBncmlkKSB7XG5cbiAgICB2YXIgc2NoZW1hID0gZ3JpZC5iZWhhdmlvci5zY2hlbWE7XG5cbiAgICB2YXIgZ3JlZW5sYW5kID0geyBjb2xvcjogJyMxMTY2MTEnLCBiYWNrZ3JvdW5kQ29sb3I6ICcjZThmZmU4JywgZm9udDogJ2l0YWxpYyBzbWFsbCBnYXJhbW9uZCcgfTtcblxuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgICAgY29sdW1uSW5kZXhlczogW1xuICAgICAgICAgICAgc2NoZW1hLmxhc3ROYW1lLmluZGV4LFxuICAgICAgICAgICAgc2NoZW1hLnRvdGFsTnVtYmVyT2ZQZXRzT3duZWQuaW5kZXgsXG4gICAgICAgICAgICBzY2hlbWEuaGVpZ2h0LmluZGV4LFxuICAgICAgICAgICAgc2NoZW1hLmJpcnRoRGF0ZS5pbmRleCxcbiAgICAgICAgICAgIHNjaGVtYS5iaXJ0aFRpbWUuaW5kZXgsXG4gICAgICAgICAgICBzY2hlbWEuYmlydGhTdGF0ZS5pbmRleCxcbiAgICAgICAgICAgIC8vIHNjaGVtYS5yZXNpZGVuY2VTdGF0ZS5pbmRleCxcbiAgICAgICAgICAgIHNjaGVtYS5lbXBsb3llZC5pbmRleCxcbiAgICAgICAgICAgIC8vIHNjaGVtYS5maXJzdE5hbWUuaW5kZXgsXG4gICAgICAgICAgICBzY2hlbWEuaW5jb21lLmluZGV4LFxuICAgICAgICAgICAgc2NoZW1hLnRyYXZlbC5pbmRleCxcbiAgICAgICAgICAgIC8vIHNjaGVtYS5zcXVhcmVPZkluY29tZS5pbmRleFxuICAgICAgICBdLFxuXG4gICAgICAgIG5vRGF0YU1lc3NhZ2U6ICdObyBEYXRhIHRvIERpc3BsYXknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGZvbnQ6ICdub3JtYWwgc21hbGwgZ2FyYW1vbmQnLFxuICAgICAgICByb3dTdHJpcGVzOiBbXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICBncmVlbmxhbmQsXG4gICAgICAgICAgICBncmVlbmxhbmQsXG4gICAgICAgICAgICBncmVlbmxhbmRcbiAgICAgICAgXSxcblxuICAgICAgICBmaXhlZENvbHVtbkNvdW50OiAxLFxuICAgICAgICBmaXhlZFJvd0NvdW50OiA0LFxuXG4gICAgICAgIGNvbHVtbkF1dG9zaXppbmc6IGZhbHNlLFxuICAgICAgICBoZWFkZXJUZXh0V3JhcHBpbmc6IHRydWUsXG5cbiAgICAgICAgaGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHJlbmRlckZhbHN5OiB0cnVlLFxuXG4gICAgICAgIHNjcm9sbGJhckhvdmVyT2ZmOiAndmlzaWJsZScsXG4gICAgICAgIHNjcm9sbGJhckhvdmVyT3ZlcjogJ3Zpc2libGUnLFxuICAgICAgICBjb2x1bW5IZWFkZXJCYWNrZ3JvdW5kQ29sb3I6ICdwaW5rJyxcblxuICAgICAgICBjaGVja2JveE9ubHlSb3dTZWxlY3Rpb25zOiB0cnVlLFxuXG4gICAgICAgIGF1dG9TZWxlY3RSb3dzOiB0cnVlLFxuXG4gICAgICAgIGNhbGN1bGF0b3JzOiB7XG4gICAgICAgICAgICBBZGQxMDogYWRkMTAudG9TdHJpbmcoKVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbHVtbnM6IHtcbiAgICAgICAgICAgIGhlaWdodDoge1xuICAgICAgICAgICAgICAgIGhhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdmb290J1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG4gICAgICAgICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgICAgICAgICBjb2x1bW5IZWFkZXJCYWNrZ3JvdW5kQ29sb3I6ICcjMTQyQjZGJywgLy9kYXJrIGJsdWVcbiAgICAgICAgICAgICAgICBjb2x1bW5IZWFkZXJDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgICAgICAgICBjb2x1bW5IZWFkZXJIYWxpZ246ICdsZWZ0JyxcbiAgICAgICAgICAgICAgICByaWdodEljb246ICdkb3duLXJlY3RhbmdsZScsXG4gICAgICAgICAgICAgICAgbGluazogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmlyc3RfbmFtZToge1xuXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0b3RhbF9udW1iZXJfb2ZfcGV0c19vd25lZDoge1xuICAgICAgICAgICAgICAgIGhhbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBjYWxjdWxhdG9yOiAnQWRkMTAnLFxuICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBiaXJ0aERhdGU6IHtcbiAgICAgICAgICAgICAgICBmb3JtYXQ6ICdzaW5nZGF0ZScsXG4gICAgICAgICAgICAgICAgcmlnaHRJY29uOiAnY2FsZW5kYXInLFxuICAgICAgICAgICAgICAgIC8vc3RyaWtlVGhyb3VnaDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmlydGhUaW1lOiB7XG4gICAgICAgICAgICAgICAgaGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGVkaXRvcjogJ3RpbWUnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ2hobW0nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBiaXJ0aFN0YXRlOiB7XG4gICAgICAgICAgICAgICAgZWRpdG9yOiAnY29sb3J0ZXh0JyxcbiAgICAgICAgICAgICAgICByaWdodEljb246ICdkb3duLXJlY3RhbmdsZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2lkZW5jZVN0YXRlOiB7XG4gICAgICAgICAgICAgICAgcmlnaHRJY29uOiAnZG93bi1yZWN0YW5nbGUnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBlbXBsb3llZDoge1xuICAgICAgICAgICAgICAgIGhhbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgICAgICAgICByZW5kZXJlcjogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpbmNvbWU6IHtcbiAgICAgICAgICAgICAgICBoYWxpZ246ICdyaWdodCcsXG4gICAgICAgICAgICAgICAgZm9ybWF0OiAncG91bmRzJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdHJhdmVsOiB7XG4gICAgICAgICAgICAgICAgaGFsaWduOiAncmlnaHQnLFxuICAgICAgICAgICAgICAgIGZvcm1hdDogJ2ZyYW5jcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKiBGb2xsb3dpbmcgYHJvd3NgIGFuZCBgY2VsbHNgIGV4YW1wbGVzIHNob3dzIGhvdyB0byBzZXQgcm93IGFuZCBjZWxsIHByb3BlcnRpZXMgZGVjbGFyYXRpdmVseSxcbiAgICAgICAgICogdXNlZnVsIGZvciBzdGF0aWMgZ3JpZHMgd2hlbiBjZWxsIGNvb3JkaW5hdGVzIGFyZSBrbm93biBhaGVhZCBvZiB0aW1lLlxuICAgICAgICAgKlxuICAgICAgICAgKiAoVGhlcmUgYXJlIGFzIHdlbGwgc2V2ZXJhbCBlcXVpdmFsZW50IHByb2dyYW1tYXRpYyBtZXRob2RzIGZvciBzZXR0aW5nIGNlbGxzIHByb3BzLCBzdWNoIGFzXG4gICAgICAgICAqIGBjZWxsLnNldFByb3BlcnR5YCxcbiAgICAgICAgICogYGNlbGwuc2V0UHJvcGVydGllc2AsXG4gICAgICAgICAqIGBiZWhhdmlvci5zZXRDZWxsUHJvcGVydHlgLFxuICAgICAgICAgKiBgYmVoYXZpb3Iuc2V0Q2VsbFByb3BlcnRpZXNgLFxuICAgICAgICAgKiBfZXRjLl8pXG4gICAgICAgICAqXG4gICAgICAgICAqIENhdmVhdDogRm9yIGR5bmFtaWMgZ3JpZCBkYXRhLCB3aGVuIGNlbGwgY29vcmRpbmF0ZXMgYXJlICpub3QqIGtub3duIGF0IHN0YXJ0IHVwICh3aGVuIHN0YXRlIGlzXG4gICAgICAgICAqIHVzdWFsbHkgYXBwbGllZCksIGxvYWRpbmcgcm93IGFuZCBjZWxsIHByb3BlcnRpZXMgX3dpdGggdGhlIGRhdGFfIChhcyBtZXRhZGF0YSkgaGFzIGFkdmFudGFnZXNcbiAgICAgICAgICogYW5kIGlzLCBwcmVmZXJyZWQgZXNwZWNpYWxseSBmb3IgZnJlcXVlbnRseSBjaGFuZ2luZyByb3dzIGFuZCBjZWxscy4gSW4gdGhpcyBwYXJhZGlnbSwgcm93IGFuZFxuICAgICAgICAgKiBjZWxsIHByb3BlcnRpZXMgYXJlIG9taXR0ZWQgaGVyZSBhbmQgdGhlIHN0YXRlIG9iamVjdCBvbmx5IGxvYWRzIGdyaWQgYW5kIGNvbHVtbiBwcm9wZXJ0aWVzLlxuICAgICAgICAgKiAoTWV0YWRhdGEgaXMgc3VwcG9ydGVkIGluIHRoZSBkYXRhIHNvdXJjZSB3aGVuIGl0IGltcGxlbWVudHMgYGdldFJvd01ldGFEYXRhYCBhbmQgYHNldFJvd01ldGFEYXRhYC4pXG4gICAgICAgICAqL1xuICAgICAgICByb3dzOiB7XG4gICAgICAgICAgICBoZWFkZXI6IHsgLy8gc3ViZ3JpZCBrZXlcbiAgICAgICAgICAgICAgICAwOiB7IC8vIHJvdyBpbmRleFxuICAgICAgICAgICAgICAgICAgICAvLyByb3cgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwIC8vIChoZWlnaHQgaXMgdGhlIG9ubHkgc3VwcG9ydGVkIHJvdyBwcm9wZXJ0eSBhdCB0aGUgY3VycmVudCB0aW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY2VsbHM6IHsgLy8gY2VsbCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBkYXRhOiB7IC8vIHN1YmdyaWQga2V5XG4gICAgICAgICAgICAgICAgMTY6IHsgLy8gcm93IGluZGV4XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogeyAvLyBjb2x1bW4gbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2VsbCBwcm9wZXJ0aWVzOlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udDogJzEwcHQgVGFob21hJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnbGlnaHRibHVlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxpZ246ICdsZWZ0J1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGdyaWQuc2V0U3RhdGUoc3RhdGUpO1xuXG4gICAgZ3JpZC50YWtlRm9jdXMoKTtcblxuICAgIGRlbW8ucmVzZXREYXNoYm9hcmQoKTtcbn07XG5cbmZ1bmN0aW9uIGFkZDEwKGRhdGFSb3csIGNvbHVtbk5hbWUsIHN1YnJvdykge1xuICAgIHZhciB2YWwgPSBkYXRhUm93W2NvbHVtbk5hbWVdO1xuICAgIGlmICh2YWwuY29uc3RydWN0b3IgPT09IEFycmF5KSB7IHZhbCA9IHZhbFtzdWJyb3ddOyB9XG4gICAgcmV0dXJuIHZhbCArIDEwO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2F0YWxvZyA9IHJlcXVpcmUoJ29iamVjdC1jYXRhbG9nJyk7XG52YXIgZmluZCA9IHJlcXVpcmUoJ21hdGNoLXBvaW50Jyk7XG52YXIgR3JleWxpc3QgPSByZXF1aXJlKCdncmV5bGlzdCcpO1xuXG5cbnZhciBpc0RPTSA9IChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh3aW5kb3cpID09PSAnW29iamVjdCBXaW5kb3ddJyAmJlxuICAgIHR5cGVvZiB3aW5kb3cuTm9kZSA9PT0gJ2Z1bmN0aW9uJ1xuKTtcblxudmFyIGlzRG9tTm9kZSA9IGlzRE9NID8gZnVuY3Rpb24ob2JqKSB7IHJldHVybiBvYmogaW5zdGFuY2VvZiB3aW5kb3cuTm9kZSB9IDogZnVuY3Rpb24oKSB7fTtcblxuXG4vKipcbiAqIEBzdW1tYXJ5IFNlYXJjaCBhbiBvYmplY3QncyBjb2RlIGZvciBwYXR0ZXJuIG1hdGNoZXMuXG4gKiBAZGVzYyBTZWFyY2hlcyBhbGwgY29kZSBpbiB0aGUgdmlzaWJsZSBleGVjdXRpb24gY29udGV4dCB1c2luZyB0aGUgcHJvdmlkZWQgcmVnZXggcGF0dGVybiwgcmV0dXJuaW5nIHRoZSBlbnRpcmUgcGF0dGVybiBtYXRjaC5cbiAqXG4gKiBJZiBjYXB0dXJlIGdyb3VwcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBwYXR0ZXJuLCByZXR1cm5zIHRoZSBsYXN0IGNhcHR1cmUgZ3JvdXAgbWF0Y2gsIHVubGVzcyBgb3B0aW9ucy5jYXB0dXJlR3JvdXBgIGlzIGRlZmluZWQsIGluIHdoaWNoIGNhc2UgcmV0dXJucyB0aGUgZ3JvdXAgd2l0aCB0aGF0IGluZGV4IHdoZXJlIGAwYCBtZWFucyB0aGUgZW50aXJlIHBhdHRlcm4sIF9ldGMuXyAocGVyIGBTdHJpbmcucHJvdG90eXBlLm1hdGNoYCkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8UmVnRXhwfSBwYXR0ZXJuIC0gU2VhcmNoIGFyZ3VtZW50LlxuICogRG9uJ3QgdXNlIGdsb2JhbCBmbGFnIG9uIFJlZ0V4cDsgaXQncyB1bm5lY2Vzc2FyeSBhbmQgc3VwcHJlc3NlcyBzdWJtYXRjaGVzIG9mIGNhcHR1cmUgZ3JvdXBzLlxuICpcbiAqIEBwYXJhbSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7bnVtYmVyfSBbb3B0aW9ucy5jYXB0dXJlR3JvdXBdIC0gSWZmIGRlZmluZWQsIGluZGV4IG9mIGEgc3BlY2lmaWMgY2FwdHVyZSBncm91cCB0byByZXR1cm4gZm9yIGVhY2ggbWF0Y2guXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJlY3Vyc2VdIC0gRXF1aXZhbGVudCB0byBzZXR0aW5nIGJvdGggYHJlY3Vyc2VPd25gIGFuZCBgcmVjdXJzZUFuY2VzdG9yc2AuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnJlY3Vyc2VPd25dIC0gUmVjdXJzZSBvd24gc3Vib2JqZWN0cy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMucmVjdXJzZUFuY2VzdG9yc10gLSBSZWN1cnNlIHN1Ym9iamVjdHMgb2Ygb2JqZWN0cyBvZiB0aGUgZW50aXJlIHByb3RvdHlwZSBjaGFpbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5ncmV5bGlzdF0gLSBodHRwczovL2dpdGh1Yi5jb20vam9uZWl0L2dyZXlsaXN0XG4gKiBAcGFyYW0gW29wdGlvbnMuZ3JleWxpc3Qud2hpdGVdIC0gSWYgZ2l2ZW4sIG9ubHkgbGlzdGVkIG1hdGNoZXMgYXJlIGluY2x1ZGVkIGluIHRoZSByZXN1bHRzLlxuICogQHBhcmFtIFtvcHRpb25zLmdyZXlsaXN0LmJsYWNrXSAtIElmIGdpdmVuLCBsaXN0ZWQgbWF0Y2hlcyBhcmUgZXhjbHVkZWQgZnJvbSB0aGUgcmVzdWx0cy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnMuY2F0YWxvZ10gLSBodHRwczovL2dpdGh1Yi5jb20vam9uZWl0L29iamVjdC1jYXRhbG9nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNhdGFsb2cub3duXSAtIE9ubHkgc2VhcmNoIG93biBvYmplY3Q7IG90aGVyd2lzZSBzZWFyY2ggb3duICsgZW50aXJlIHByb3RvdHlwZSBjaGFpbi5cbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9ucy5jYXRhbG9nLmdyZXlsaXN0XSAtIGh0dHBzOi8vZ2l0aHViLmNvbS9qb25laXQvZ3JleWxpc3RcbiAqIEBwYXJhbSBbb3B0aW9ucy5jYXRhbG9nLmdyZXlsaXN0LndoaXRlXSAtIElmIGdpdmVuLCBvbmx5IGxpc3RlZCBtZW1iZXJzIGFyZSBjYXRhbG9nZWQuXG4gKiBAcGFyYW0gW29wdGlvbnMuY2F0YWxvZy5ncmV5bGlzdC5ibGFja10gLSBJZiBnaXZlbiwgbGlzdGVkIG1lbWJlcnMgYXJlICpub3QqIGNhdGFsb2dlZC5cbiAqXG4gKiBAcmV0dXJucyB7c3RyaW5nW119IFBhdHRlcm4gbWF0Y2hlcy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2gocGF0dGVybiwgb3B0aW9ucywgYnlHcmV5bGlzdCwgbWF0Y2hlcywgc2Nhbm5lZCkge1xuICAgIHZhciB0b3BMZXZlbENhbGwgPSAhbWF0Y2hlcztcblxuICAgIGlmICh0b3BMZXZlbENhbGwpIHtcbiAgICAgICAgLy8gdGhpcyBpcyB0aGUgdG9wLWxldmVsIChub24tcmVjdXJzZWQpIGNhbGwgc28gaW50aWFsaXplOlxuICAgICAgICB2YXIgZ3JleWxpc3QgPSBuZXcgR3JleWxpc3Qob3B0aW9ucyAmJiBvcHRpb25zLmdyZXlsaXN0KTtcbiAgICAgICAgYnlHcmV5bGlzdCA9IGdyZXlsaXN0LnRlc3QuYmluZChncmV5bGlzdCk7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBtYXRjaGVzID0gW107XG4gICAgICAgIHNjYW5uZWQgPSBbXTtcbiAgICB9XG5cbiAgICB2YXIgcm9vdCA9IHRoaXM7XG4gICAgdmFyIG1lbWJlcnMgPSBjYXRhbG9nLmNhbGwocm9vdCwgb3B0aW9ucy5jYXRhbG9nKTtcblxuICAgIHNjYW5uZWQucHVzaChyb290KTtcblxuICAgIE9iamVjdC5rZXlzKG1lbWJlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgb2JqID0gbWVtYmVyc1trZXldO1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXG4gICAgICAgIGlmIChkZXNjcmlwdG9yLnZhbHVlID09PSBtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuOyAvLyBkb24ndCBjYXRhbG9nIHNlbGYgd2hlbiBmb3VuZCB0byBoYXZlIGJlZW4gbWl4ZWQgaW5cbiAgICAgICAgfVxuXG4gICAgICAgIE9iamVjdC5rZXlzKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKHByb3BOYW1lKSB7XG4gICAgICAgICAgICB2YXIgaGl0cywgcHJvcCA9IGRlc2NyaXB0b3JbcHJvcE5hbWVdO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvLyBwcm9wTmFtZSBtdXN0IGJlIGBnZXRgIG9yIGBzZXRgIG9yIGB2YWx1ZWBcbiAgICAgICAgICAgICAgICBoaXRzID0gZmluZChwcm9wLnRvU3RyaW5nKCksIHBhdHRlcm4sIG9wdGlvbnMuY2FwdHVyZUdyb3VwKS5maWx0ZXIoYnlHcmV5bGlzdCk7XG4gICAgICAgICAgICAgICAgaGl0cy5mb3JFYWNoKGZ1bmN0aW9uKGhpdCkgeyBtYXRjaGVzLnB1c2goaGl0KTsgfSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgIChvcHRpb25zLnJlY3Vyc2UgfHwgb3B0aW9ucy5yZWN1cnNlT3duICYmIG9iaiA9PT0gcm9vdCB8fCBvcHRpb25zLnJlY3Vyc2VDaGFpbiAmJiBvYmogIT09IHJvb3QpICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnICYmXG4gICAgICAgICAgICAgICAgIWlzRG9tTm9kZShwcm9wKSAmJiAvLyBkb24ndCBzZWFyY2ggRE9NIG9iamVjdHNcbiAgICAgICAgICAgICAgICBzY2FubmVkLmluZGV4T2YocHJvcCkgPCAwIC8vIGRvbid0IHJlY3Vyc2Ugb24gb2JqZWN0cyBhbHJlYWR5IHNjYW5uZWRcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIHByb3BOYW1lIG11c3QgYmUgYHZhbHVlYFxuICAgICAgICAgICAgICAgIG1hdGNoLmNhbGwocHJvcCwgcGF0dGVybiwgb3B0aW9ucywgYnlHcmV5bGlzdCwgbWF0Y2hlcywgc2Nhbm5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRvcExldmVsQ2FsbCkge1xuICAgICAgICBtYXRjaGVzLnNvcnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXRjaDsiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGxvZ0V2ZW50T2JqZWN0KGUpIHtcbiAgICB0aGlzLmxvZyhlLnR5cGUsICc6OicsIGUpO1xufVxuXG5mdW5jdGlvbiBsb2dEZXRhaWwoZSkge1xuICAgIHRoaXMubG9nKGUudHlwZSwgJzo6JywgZS5kZXRhaWwpO1xufVxuXG5mdW5jdGlvbiBsb2dTY3JvbGwoZSkge1xuICAgIHRoaXMubG9nKGUudHlwZSwgJzo6JywgZS5kZXRhaWwudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBsb2dDZWxsKGUpIHtcbiAgICB2YXIgZ0NlbGwgPSBlLmRldGFpbC5ncmlkQ2VsbDtcbiAgICB2YXIgZENlbGwgPSBlLmRldGFpbC5kYXRhQ2VsbDtcbiAgICB0aGlzLmxvZyhlLnR5cGUsICc6OicsXG4gICAgICAgICdncmlkLWNlbGw6JywgeyB4OiBnQ2VsbC54LCB5OiBnQ2VsbC55IH0sXG4gICAgICAgICdkYXRhLWNlbGw6JywgeyB4OiBkQ2VsbC54LCB5OiBkQ2VsbC55IH0pO1xufVxuXG5mdW5jdGlvbiBsb2dTZWxlY3Rpb24oZSkge1xuICAgIHRoaXMubG9nKGUudHlwZSwgJzo6JywgZS5kZXRhaWwucm93cywgZS5kZXRhaWwuY29sdW1ucywgZS5kZXRhaWwuc2VsZWN0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGxvZ1JvdyhlKSB7XG4gICAgdmFyIHJvd0NvbnRleHQgPSBlLmRldGFpbC5wcmltaXRpdmVFdmVudC5kYXRhUm93O1xuICAgIHRoaXMubG9nKGUudHlwZSwgJzo6JywgJ3Jvdy1jb250ZXh0OicsIHJvd0NvbnRleHQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnZmluLWNlbGwtZW50ZXInOiBsb2dDZWxsLFxuICAgICdmaW4tY2xpY2snOiBsb2dDZWxsLFxuICAgICdmaW4tZG91YmxlLWNsaWNrJzogbG9nUm93LFxuICAgICdmaW4tc2VsZWN0aW9uLWNoYW5nZWQnOiBsb2dTZWxlY3Rpb24sXG4gICAgJ2Zpbi1jb250ZXh0LW1lbnUnOiBsb2dDZWxsLFxuXG4gICAgJ2Zpbi1zY3JvbGwteCc6IGxvZ1Njcm9sbCxcbiAgICAnZmluLXNjcm9sbC15JzogbG9nU2Nyb2xsLFxuXG4gICAgJ2Zpbi1yb3ctc2VsZWN0aW9uLWNoYW5nZWQnOiBsb2dEZXRhaWwsXG4gICAgJ2Zpbi1jb2x1bW4tc2VsZWN0aW9uLWNoYW5nZWQnOiBsb2dEZXRhaWwsXG4gICAgJ2Zpbi1lZGl0b3ItZGF0YS1jaGFuZ2UnOiBsb2dEZXRhaWwsXG4gICAgJ2Zpbi1lZGl0b3Ita2V5dXAnOiBsb2dEZXRhaWwsXG4gICAgJ2Zpbi1lZGl0b3Ita2V5cHJlc3MnOiBsb2dEZXRhaWwsXG4gICAgJ2Zpbi1lZGl0b3Ita2V5ZG93bic6IGxvZ0RldGFpbCxcbiAgICAnZmluLWdyb3Vwcy1jaGFuZ2VkJzogbG9nRGV0YWlsLFxuXG4gICAgJ2Zpbi1maWx0ZXItYXBwbGllZCc6IGxvZ0V2ZW50T2JqZWN0LFxuICAgICdmaW4tcmVxdWVzdC1jZWxsLWVkaXQnOiBsb2dFdmVudE9iamVjdCxcbiAgICAnZmluLWJlZm9yZS1jZWxsLWVkaXQnOiBsb2dFdmVudE9iamVjdCxcbiAgICAnZmluLWFmdGVyLWNlbGwtZWRpdCc6IGxvZ0V2ZW50T2JqZWN0XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgU3RhckxvZyA9IHJlcXVpcmUoJ3N0YXJsb2cnKTtcblxudmFyIGV2ZW50TG9nZ2VyUGx1Z2luID0ge1xuXG4gICAgc3RhcnQ6IGZ1bmN0aW9uKG9wdGlvbnMpXG4gICAge1xuICAgICAgICBpZiAob3B0aW9ucyAmJiB0aGlzLnN0YXJsb2cpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhcmxvZy5zdG9wKCk7IC8vIHN0b3AgdGhlIG9sZCBvbmUgYmVmb3JlIHJlZGVmaW5pbmcgaXQgd2l0aCBuZXcgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5zdGFybG9nIHx8IG9wdGlvbnMpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zKTtcblxuICAgICAgICAgICAgLy8gc2VhcmNoIGdyaWQgb2JqZWN0IGZvciBcIkV2ZW50KCd5YWRhLXlhZGEnXCIgb3IgXCJFdmVudC5jYWxsKHRoaXMsICd5YWRhLXlhZGEnXCJcbiAgICAgICAgICAgIG9wdGlvbnMuc2VsZWN0ID0gb3B0aW9ucy5zZWxlY3QgfHwgdGhpcztcbiAgICAgICAgICAgIG9wdGlvbnMucGF0dGVybiA9IG9wdGlvbnMucGF0dGVybiB8fCAvRXZlbnQoXFwuY2FsbFxcKHRoaXMsIHxcXCgpJyhmaW4tW2Etei1dKyknLztcbiAgICAgICAgICAgIG9wdGlvbnMudGFyZ2V0cyA9IG9wdGlvbnMudGFyZ2V0cyB8fCB0aGlzLmNhbnZhcy5jYW52YXM7XG5cbiAgICAgICAgICAgIC8vIG1peCBvcHRpb25zLmxpc3RlbmVyRGljdGlvbmFyeSBvbiB0b3Agb2Ygc29tZSBjdXN0b20gbGlzdGVuZXJzXG4gICAgICAgICAgICBvcHRpb25zLmxpc3RlbmVyRGljdGlvbmFyeSA9IE9iamVjdC5hc3NpZ24oe30sIHJlcXVpcmUoJy4vY3VzdG9tLWxpc3RlbmVycycpLCBvcHRpb25zLmxpc3RlbmVyRGljdGlvbmFyeSk7XG5cbiAgICAgICAgICAgIC8vIG1peCBmaW4tdGljayBvbiB0b3Agb2Ygb3B0aW9ucy5tYXRjaC5ncmV5bGlzdC5ibGFja1xuICAgICAgICAgICAgdmFyIGJsYWNrID0gWydmaW4tdGljayddO1xuICAgICAgICAgICAgb3B0aW9ucy5tYXRjaCA9IG9wdGlvbnMubWF0Y2ggfHwge307XG4gICAgICAgICAgICBvcHRpb25zLm1hdGNoLmdyZXlsaXN0ID0gb3B0aW9ucy5tYXRjaC5ncmV5bGlzdCB8fCB7fTtcbiAgICAgICAgICAgIG9wdGlvbnMubWF0Y2guZ3JleWxpc3QuYmxhY2sgPSBvcHRpb25zLm1hdGNoLmdyZXlsaXN0LmJsYWNrID8gYmxhY2suY29uY2F0KG9wdGlvbnMubWF0Y2guZ3JleWxpc3QuYmxhY2spIDogYmxhY2s7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcmxvZyA9IG5ldyBTdGFyTG9nKG9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGFybG9nLnN0YXJ0KCk7XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnN0YXJsb2cuc3RvcCgpO1xuICAgIH1cblxufTtcblxuLy8gTm9uLWVudW1lcmFibGUgbWV0aG9kcyBhcmUgbm90IHRoZW1zZWx2ZXMgaW5zdGFsbGVkOlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZXZlbnRMb2dnZXJQbHVnaW4sIHtcbiAgICBwcmVpbnN0YWxsOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbihIeXBlcmdyaWRQcm90b3R5cGUsIEJlaGF2aW9yUHJvdG90eXBlLCBtZXRob2RQcmVmaXgpIHtcbiAgICAgICAgICAgIGluc3RhbGwuY2FsbCh0aGlzLCBIeXBlcmdyaWRQcm90b3R5cGUsIG1ldGhvZFByZWZpeCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgaW5zdGFsbDoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oZ3JpZCwgbWV0aG9kUHJlZml4KSB7XG4gICAgICAgICAgICBpbnN0YWxsLmNhbGwodGhpcywgZ3JpZCwgbWV0aG9kUHJlZml4KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG5mdW5jdGlvbiBpbnN0YWxsKHRhcmdldCwgbWV0aG9kUHJlZml4KSB7XG4gICAgaWYgKG1ldGhvZFByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG1ldGhvZFByZWZpeCA9ICdsb2cnO1xuICAgIH1cbiAgICBPYmplY3Qua2V5cyh0aGlzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGFyZ2V0W3ByZWZpeChtZXRob2RQcmVmaXgsIGtleSldID0gdGhpc1trZXldO1xuICAgIH0sIHRoaXMpO1xufVxuXG5mdW5jdGlvbiBwcmVmaXgocHJlZml4LCBuYW1lKSB7XG4gICAgdmFyIGNhcGl0YWxpemUgPSBwcmVmaXgubGVuZ3RoICYmIHByZWZpeFtwcmVmaXgubGVuZ3RoIC0gMV0gIT09ICdfJztcbiAgICBpZiAoY2FwaXRhbGl6ZSkge1xuICAgICAgICBuYW1lID0gbmFtZS5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyKDEpO1xuICAgIH1cbiAgICByZXR1cm4gcHJlZml4ICsgbmFtZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBldmVudExvZ2dlclBsdWdpbjtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAbmFtZSBmaWVsZHNcbiAqIEBuYW1lc3BhY2VcbiAqL1xuXG52YXIgUkVHRVhQX01FVEFfUFJFRklYID0gL15fXy8sIC8vIHN0YXJ0cyB3aXRoIGRvdWJsZSB1bmRlcnNjb3JlXG4gICAgUkVHRVhQX1dPUkRfU0VQQVJBVE9SUyA9IC9bXFxzXFwtX10qKFteXFxzXFwtX10pKFteXFxzXFwtX10rKS9nLFxuICAgIFJFR0VYUF9DQVBJVEFMX0xFVFRFUlMgPSAvW0EtWl0vZyxcbiAgICBSRUdFWFBfTE9XRVJfQ0FTRV9MRVRURVIgPSAvW2Etel0vO1xuXG4vKipcbiAqIFJldHVybnMgYW4gYXJyYXkgb2Yga2V5cyAoZmllbGQgbmFtZXMpIG9mIHRoZSBnaXZlbiBkYXRhIHJvdyBvYmplY3QuXG4gKiBGaWVsZCBuYW1lcyBiZWdpbm5pbmcgd2l0aCBkb3VibGUgdW5kZXJzY29yZSAoYF9fYCkgYXJlIGNvbnNpZGVyZWQgcmVzZXJ2ZWQgZm9yIHN5c3RlbSB1c2UgYW5kIGFyZSBleGNsdWRlZCBmcm9tIHRoZSByZXN1bHRzLlxuICogQHBhcmFtIHtvYmplY3R9IFtkYXRhUm93XSAtIElmIG9taXR0ZWQgb3Igb3RoZXJ3aXNlIGZhbHN5LCByZXR1cm5zIGFuIGVtcHR5IGFycmF5LlxuICogQHJldHVybnMge3N0cmluZ1tdfSBNZW1iZXIgbmFtZXMgZnJvbSBgZGF0YVJvd2AgdGhhdCBkbyBfbm90XyBiZWdpbiB3aXRoIGRvdWJsZS11bmRlcnNjb3JlLlxuICogQG1lbWJlck9mIG5hbWVzcGFjZTpmaWVsZHNcbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGROYW1lcyhkYXRhUm93KSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGFSb3cgfHwgW10pLmZpbHRlcihmdW5jdGlvbihmaWVsZE5hbWUpIHtcbiAgICAgICAgcmV0dXJuICFSRUdFWFBfTUVUQV9QUkVGSVgudGVzdChmaWVsZE5hbWUpO1xuICAgIH0pO1xufVxuXG4vLyBSZXBsYWNlbWVudCBmdW5jdGlvbiBmb3IgdXNlIGluIHRoZSBkZWZhdWx0IHRpdGxlaXplIGZ1bmN0aW9uIGJlbG93LlxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1N0cmluZy9yZXBsYWNlXG5mdW5jdGlvbiBjYXBpdGFsaXplKGEsIGIsIGMpIHtcbiAgICByZXR1cm4gYi50b1VwcGVyQ2FzZSgpICsgYztcbn1cblxudmFyIHNob3J0V29yZHMgPSBbJ29mJywgJ2F0JywgJ2J5JywgJ2Zyb20nLCAnYW5kJywgJ2J1dCcsICdmb3InLCAnYScsICdhbicsICd0aGUnXTtcblxuLyoqXG4gKiBTZXBhcmF0ZXMgY2FtZWwgY2FzZSBvciB3aGl0ZS1zcGFjZS0sIGh5cGVuLSwgb3IgdW5kZXJzY29yZS1zZXBhcmF0ZWQtd29yZHMgaW50byB0cnVseSBzZXBhcmF0ZSB3b3JkcyBhbmQgY2FwaXRhbGl6aW5nIHRoZSBmaXJzdCBsZXR0ZXIgb2YgZWFjaCBleGNlcHQgZm9yIG1lbWJlcnMgb2YgYHNob3J0V29yZHNgLlxuICogQHBhcmFtIHN0cmluZ1xuICogQHJldHVybnMge3N0cmluZ31cbiAqIEBtZW1iZXJPZiBuYW1lc3BhY2U6ZmllbGRzXG4gKi9cbmZ1bmN0aW9uIHRpdGxlaXplKHN0cmluZykge1xuICAgIHZhciB0aXRsZSA9IChSRUdFWFBfTE9XRVJfQ0FTRV9MRVRURVIudGVzdChzdHJpbmcpID8gc3RyaW5nIDogc3RyaW5nLnRvTG93ZXJDYXNlKCkpXG4gICAgICAgIC5yZXBsYWNlKFJFR0VYUF9XT1JEX1NFUEFSQVRPUlMsIGNhcGl0YWxpemUpXG4gICAgICAgIC5yZXBsYWNlKFJFR0VYUF9DQVBJVEFMX0xFVFRFUlMsICcgJCYnKVxuICAgICAgICAudHJpbSgpO1xuXG4gICAgc2hvcnRXb3Jkcy5mb3JFYWNoKGZ1bmN0aW9uKHdvcmQpIHtcbiAgICAgICAgd29yZCA9ICcgJyArIHdvcmQgKyAnICc7XG4gICAgICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZShuZXcgUmVnRXhwKHdvcmQsICdnaScpLCB3b3JkKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aXRsZTtcbn1cblxuLyoqXG4gKiBEZXJpdmUgYSBzY2hlbWEgZnJvbSBmaWVsZCBuYW1lcywgaW5jbHVkaW5nIGRlcml2ZWQgaGVhZGVyIHdoZW4gZmllbGQgbmFtZSB1bnN1aXRhYmxlIGFzIHN1Y2guXG4gKiBBIHN1aXRhYmxlIGZpZWxkIG5hbWUgaGFzIG5vIHVuZGVyc2NvcmVzIF9hbmRfIGNvbnRhaW5zIHNwYWNlcyBhbmQvb3IgbWl4ZWQgY2FzZSAoYnV0IG5vdCBjYW1lbENhc2UpLlxuICogQHBhcmFtIGRhdGFcbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqIEBtZW1iZXJPZiBuYW1lc3BhY2U6ZmllbGRzXG4gKi9cbmZ1bmN0aW9uIGdldFNjaGVtYShkYXRhKXtcbiAgICAvLyBmaW5kIGZpcnN0IGRlZmluZWQgZGF0YVJvd1xuICAgIHZhciBkYXRhUm93ID0gZGF0YS5maW5kKGZ1bmN0aW9uKGRhdGFSb3cpIHsgcmV0dXJuIGRhdGFSb3c7IH0pIHx8IHt9O1xuXG4gICAgcmV0dXJuIGdldEZpZWxkTmFtZXMoZGF0YVJvdykubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUuaW5kZXhPZignXycpIDwgMCAmJiAoXG4gICAgICAgICAgICBuYW1lLmluZGV4T2YoJyAnKSA+PSAwIHx8XG4gICAgICAgICAgICAvW2Etel0vLnRlc3QobmFtZSkgJiYgL1tBLVpdLy50ZXN0KG5hbWUpICYmICEvW2Etel1bQS1aXS8udGVzdChuYW1lKVxuICAgICAgICApID9cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgICAgICB9IDoge1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB0aXRsZWl6ZShuYW1lKVxuICAgICAgICAgICAgfTtcbiAgICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgZ2V0RmllbGROYW1lczogZ2V0RmllbGROYW1lcyxcbiAgICB0aXRsZWl6ZTogdGl0bGVpemUsICAvLyBvdmVycmlkZSBhcyBuZWVkZWQgZm9yIGN1c3RvbSBoZWFkZXIgdGl0bGVpemF0aW9uXG4gICAgZ2V0U2NoZW1hOiBnZXRTY2hlbWFcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKiBDcmVhdGVzIGFuIG9iamVjdCB3aXRoIGEgYHRlc3RgIG1ldGhvZCBmcm9tIG9wdGlvbmFsIHdoaXRlbGlzdCBhbmQvb3IgYmxhY2tsaXN0XG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc10gLSBJZiBuZWl0aGVyIGB3aGl0ZWAgbm9yIGBibGFja2AgYXJlIGdpdmVuLCBhbGwgc3RyaW5ncyBwYXNzIGB0ZXN0YC5cbiAqIEBwYXJhbSBbb3B0aW9ucy53aGl0ZV0gLSBJZiBnaXZlbiwgb25seSBsaXN0ZWQgc3RyaW5ncyBwYXNzIGB0ZXN0YC5cbiAqIEBwYXJhbSBbb3B0aW9ucy5ibGFja10gLSBJZiBnaXZlbiwgbGlzdGVkIHN0cmluZ3MgZmFpbCBgdGVzdGAuXG4gKi9cbmZ1bmN0aW9uIEdyZXlMaXN0KG9wdGlvbnMpIHtcbiAgICB0aGlzLndoaXRlID0gZ2V0RmxhdEFycmF5T2ZSZWdleEFuZE9yU3RyaW5nKG9wdGlvbnMgJiYgb3B0aW9ucy53aGl0ZSk7XG4gICAgdGhpcy5ibGFjayA9IGdldEZsYXRBcnJheU9mUmVnZXhBbmRPclN0cmluZyhvcHRpb25zICYmIG9wdGlvbnMuYmxhY2spO1xufVxuXG5HcmV5TGlzdC5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKHN0cmluZykge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nOyAvLyBmb3IgbWF0Y2goKSB1c2VcbiAgICByZXR1cm4gKFxuICAgICAgICAhKHRoaXMud2hpdGUgJiYgIXRoaXMud2hpdGUuc29tZShtYXRjaCwgdGhpcykpICYmXG4gICAgICAgICEodGhpcy5ibGFjayAmJiB0aGlzLmJsYWNrLnNvbWUobWF0Y2gsIHRoaXMpKVxuICAgICk7XG59O1xuXG5mdW5jdGlvbiBtYXRjaChwYXR0ZXJuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwYXR0ZXJuLnRlc3QgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBwYXR0ZXJuLnRlc3QodGhpcy5zdHJpbmcpIC8vIHR5cGljYWxseSBhIHJlZ2V4IGJ1dCBjb3VsZCBiZSBhbnl0aGluZyB0aGF0IGltcGxlbWVudHMgYHRlc3RgXG4gICAgICAgIDogdGhpcy5zdHJpbmcgPT09IHBhdHRlcm4gKyAnJzsgLy8gY29udmVydCBwYXR0ZXJuIHRvIHN0cmluZyBldmVuIGZvciBlZGdlIGNhc2VzXG59XG5cbmZ1bmN0aW9uIGdldEZsYXRBcnJheU9mUmVnZXhBbmRPclN0cmluZyhhcnJheSwgZmxhdCkge1xuICAgIGlmICghZmxhdCkge1xuICAgICAgICAvLyB0aGlzIGlzIHRoZSB0b3AtbGV2ZWwgKG5vbi1yZWN1cnNlZCkgY2FsbCBzbyBpbnRpYWxpemU6XG5cbiAgICAgICAgLy8gYHVuZGVmaW5lZGAgcGFzc2VzIHRocm91Z2ggd2l0aG91dCBiZWluZyBjb252ZXJ0ZWQgdG8gYW4gYXJyYXlcbiAgICAgICAgaWYgKGFycmF5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFycmF5aWZ5IGdpdmVuIHNjYWxhciBzdHJpbmcsIHJlZ2V4LCBvciBvYmplY3RcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSkge1xuICAgICAgICAgICAgYXJyYXkgPSBbYXJyYXldO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBmbGF0XG4gICAgICAgIGZsYXQgPSBbXTtcbiAgICB9XG5cbiAgICBhcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSBhbGwgZWxlbWVudHMgYXJlIGVpdGhlciBzdHJpbmcgb3IgUmVnRXhwXG4gICAgICAgIHN3aXRjaCAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZW0pKSB7XG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IFN0cmluZ10nOlxuICAgICAgICAgICAgY2FzZSAnW29iamVjdCBSZWdFeHBdJzpcbiAgICAgICAgICAgICAgICBmbGF0LnB1c2goaXRlbSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdbb2JqZWN0IE9iamVjdF0nOlxuICAgICAgICAgICAgICAgIC8vIHJlY3Vyc2Ugb24gY29tcGxleCBpdGVtICh3aGVuIGFuIG9iamVjdCBvciBhcnJheSlcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29udmVydCBvYmplY3QgaW50byBhbiBhcnJheSAob2YgaXQncyBlbnVtZXJhYmxlIGtleXMsIGJ1dCBvbmx5IHdoZW4gbm90IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9IE9iamVjdC5rZXlzKGl0ZW0pLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBpdGVtW2tleV0gIT09IHVuZGVmaW5lZDsgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGdldEZsYXRBcnJheU9mUmVnZXhBbmRPclN0cmluZyhpdGVtLCBmbGF0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZmxhdC5wdXNoKGl0ZW0gKyAnJyk7IC8vIGNvbnZlcnQgdG8gc3RyaW5nXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBmbGF0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEdyZXlMaXN0OyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBAc3VtbWFyeSBGaW5kIGFsbCBwYXR0ZXJuIG1hdGNoZXMsIHJldHVybiBzcGVjaWZpZWQgY2FwdHVyZSBncm91cCBmb3IgZWFjaC5cbiAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQW4gYXJyYXkgY29udGFpbmluZyBhbGwgdGhlIHBhdHRlcm4gbWF0Y2hlcyBmb3VuZCBpbiBgc3RyaW5nYC5cbiAqIFRoZSBlbnRpcmUgcGF0dGVybiBtYXRjaCBpcyByZXR1cm5lZCB1bmxlc3MgdGhlIHBhdHRlcm4gY29udGFpbnMgb25lIG9yIG1vcmUgc3ViZ3JvdXBzIGluIHdoaWNoIGNhc2UgdGhlIHBvcnRpb24gb2YgdGhlIHBhdHRlcm4gbWF0Y2hlZCBieSB0aGUgbGFzdCBzdWJncm91cCBpcyByZXR1cm5lZCB1bmxlc3MgYGNhcHR1cmVHcm91cGAgaXMgZGVmaW5lZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEBwYXJhbSB7UmVnRXhwfSByZWdleCAtIERvbid0IHVzZSBnbG9iYWwgZmxhZzsgaXQncyB1bm5lY2Vzc2FyeSBhbmQgc3VwcHJlc3NlcyBzdWJtYXRjaGVzIG9mIGNhcHR1cmUgZ3JvdXBzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtjYXB0dXJlR3JvdXBdIC0gSWZmIGRlZmluZWQsIGluZGV4IG9mIGEgc3BlY2lmaWMgY2FwdHVyZSBncm91cCB0byByZXR1cm4uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3RyaW5nLCByZWdleCwgY2FwdHVyZUdyb3VwKSB7XG4gICAgdmFyIG1hdGNoZXMgPSBbXTtcblxuICAgIGZvciAodmFyIG1hdGNoLCBpID0gMDsgKG1hdGNoID0gc3RyaW5nLnN1YnN0cihpKS5tYXRjaChyZWdleCkpOyBpICs9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoKSB7XG4gICAgICAgIG1hdGNoZXMucHVzaChtYXRjaFtjYXB0dXJlR3JvdXAgPT09IHVuZGVmaW5lZCA/IG1hdGNoLmxlbmd0aCAtIDEgOiBjYXB0dXJlR3JvdXBdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHcmV5bGlzdCA9IHJlcXVpcmUoJ2dyZXlsaXN0Jyk7XG5cbi8qKiBAc3VtbWFyeSBDYXRhbG9nIHRoZSBleGVjdXRpb24gY29udGV4dCBvYmplY3QuXG4gKiBAcmV0dXJucyB7b2JqZWN0fSBBbiBvYmplY3QgY29udGFpbmluZyBhIG1lbWJlciBmb3IgZWFjaCBtZW1iZXIgb2YgdGhlIGV4ZWN1dGlvbiBjb250ZXh0IG9iamVjdFxuICogdmlzaWJsZSBpbiB0aGUgcHJvdG90eXBlIGNoYWluIChiYWNrIHRvIGJ1dCBub3QgaW5jbHVkaW5nIE9iamVjdCksIHBlciB3aGl0ZWxpc3QgYW5kIGJsYWNrbGlzdC5cbiAqIEVhY2ggbWVtYmVyJ3MgdmFsdWUgaXMgdGhlIG9iamVjdCBpbiB0aGUgcHJvdG90eXBlIGNoYWluIHdoZXJlIGZvdW5kLlxuICogQHBhcmFtIFtvcHRpb25zXVxuICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5vd25dIC0gUmVzdHJpY3Qgc2VhcmNoIGZvciBldmVudCB0eXBlIHN0cmluZ3MgdG8gb3duIG1ldGhvZHMgcmF0aGVyIHRoYW4gZW50aXJlIHByb3RvdHlwZSBjaGFpbi5cbiAqIEBwYXJhbSBbb3B0aW9ucy5ncmV5bGlzdF1cbiAqIEBwYXJhbSBbb3B0aW9ucy5ncmV5bGlzdC53aGl0ZV0gLSBJZiBnaXZlbiwgb25seSBsaXN0ZWQgbWVtYmVycyBhcmUgY2F0YWxvZ2VkLlxuICogQHBhcmFtIFtvcHRpb25zLmdyZXlsaXN0LmJsYWNrXSAtIElmIGdpdmVuLCBsaXN0ZWQgbWVtYmVycyBhcmUgKm5vdCogY2F0YWxvZ2VkLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG9iamVjdENhdGFsb2cob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgdmFyIG9iaixcbiAgICAgICAgY2F0YWxvZyA9IE9iamVjdC5jcmVhdGUobnVsbCksIC8vIEtJU1Mgbm8gcHJvdG90eXBlIG5lZWRlZFxuICAgICAgICB3YWxrUHJvdG90eXBlQ2hhaW4gPSAhb3B0aW9ucy5vd24sXG4gICAgICAgIGdyZXlsaXN0ID0gbmV3IEdyZXlsaXN0KG9wdGlvbnMuZ3JleWxpc3QpO1xuXG4gICAgZm9yIChvYmogPSB0aGlzOyBvYmogJiYgb2JqICE9PSBPYmplY3QucHJvdG90eXBlOyBvYmogPSB3YWxrUHJvdG90eXBlQ2hhaW4gJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikpIHtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICEoa2V5IGluIGNhdGFsb2cpICYmIC8vIG5vdCBzaGFkb3dlZCBieSBhIG1lbWJlciBvZiBhIGRlc2NlbmRhbnQgb2JqZWN0XG4gICAgICAgICAgICAgICAgZ3JleWxpc3QudGVzdChrZXkpICYmXG4gICAgICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkudmFsdWUgIT09IG9iamVjdENhdGFsb2dcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNhdGFsb2dba2V5XSA9IG9iajtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhdGFsb2c7XG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIG1hdGNoID0gcmVxdWlyZSgnY29kZS1tYXRjaCcpO1xuXG4vKiogQHR5cGVkZWYge29iamVjdH0gc3RhcmxvZ2dlclxuICogQGRlc2MgQW4gZXZlbnQgbGlzdGVuZXIgZm9yIGxvZ2dpbmcgcHVycG9zZXMsIHBhaXJlZCB3aXRoIHRoZSB0YXJnZXQocykgdG8gbGlzdGVuIHRvLlxuICogRWFjaCBtZW1iZXIgb2YgYSBsb2dnZXIgb2JqZWN0IGhhcyB0aGUgZXZlbnQgc3RyaW5nIGFzIGl0cyBrZXkgYW5kIGFuIG9iamVjdCBhcyBpdHMgdmFsdWUuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBsaXN0ZW5lciAtIEEgaGFuZGxlciB0aGF0IGxvZ3MgdGhlIGV2ZW50LlxuICogQHByb3BlcnR5IHtvYmplY3R8b2JqZWN0W119IHRhcmdldHMgLSBBIHRhcmdldCBvciBsaXN0IG9mIHRhcmdldHMgdG8gYXR0YWNoIHRoZSBsaXN0ZW5lciB0by5cbiAqL1xuXG4vKiogQHR5cGVkZWYge29iamVjdHxvYmplY3RbXX0gZXZlbnRUYXJnZXRzXG4gKiBFdmVudCB0YXJnZXQgb2JqZWN0KHMpIHRoYXQgaW1wbGVtZW50IGBhZGRFdmVudExpc3RlbmVyYCBhbmQgYHJlbW92ZUV2ZW50TGlzdGVuZXJgLFxuICogdHlwaWNhbGx5IGEgRE9NIG5vZGUsIGJ1dCBieSBubyBtZWFucyBsaW1pdGVkIHRvIHN1Y2guXG4gKi9cblxuLyoqIEB0eXBlZGVmIHtzdHJpbmd9IGV2ZW50VHlwZSAqL1xuXG4vKiogQHR5cGVkZWYge29iamVjdH0gc3RhcmxvZ09wdGlvbnNcbiAqXG4gKiBAZGVzYyBNdXN0IGRlZmluZSBgbG9nZ2Vyc2AsIGBldmVudHNgLCBvciBgcGF0dGVybmAgYW5kIGBzZWxlY3RgOyBlbHNlIGVycm9yIGlzIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdC48ZXZlbnRUeXBlLCBzdGFybG9nZ2VyPn0gW2xvZ2dlcnNdIC0gTG9nZ2VyIGRpY3Rpb25hcnkuXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbZXZlbnRzXSAtIExpc3Qgb2YgZXZlbnQgc3RyaW5ncyBmcm9tIHdoaWNoIHRvIGJ1aWxkIGEgbG9nZ2VyIGRpY3Rpb25hcnkuXG4gKiBAcGFyYW0ge29iamVjdHxvYmplY3RbXX0gW3NlbGVjdF0gLSBPYmplY3Qgb3IgbGlzdCBvZiBvYmplY3RzIGluIHdoaWNoIHRvIHNlYXJjaCB3aXRoIGBwYXR0ZXJuYC5cbiAqIEBwYXJhbSB7UmVnRXhwfSBbcGF0dGVybl0gLSBFdmVudCBzdHJpbmcgcGF0dGVybiB0byBzZWFyY2ggZm9yIGluIGFsbCB2aXNpYmxlIGdldHRlcnMsIHNldHRlcnMsIGFuZCBtZXRob2RzLlxuICogVGhlIHJlc3VsdHMgb2YgdGhlIHNlYXJjaCBhcmUgdXNlZCB0byBidWlsZCBhIGxvZ2dlciBkaWN0aW9uYXJ5LlxuICogRXhhbXBsZTogYC8nKGZpbi1bYS16LV0rKScvYCBtZWFucyBmaW5kIGFsbCBzdHJpbmdzIGxpa2UgYCdmaW4tKidgLCByZXR1cm5pbmcgb25seSB0aGUgcGFydCBpbnNpZGUgdGhlIHF1b3Rlcy5cbiAqIFNlZSB0aGUgUkVBRE1FIGZvciBhZGRpdGlvbmFsIGV4YW1wbGVzLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtsb2ddIC0gT3ZlcnJpZGUge0BsaW5rIFN0YXJsb2cjbG9nfS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtsaXN0ZW5lcl0gLSBPdmVycmlkZSB7QGxpbmsgU3RhcmxvZyNsaXN0ZW5lcn0uXG4gKiBAcGFyYW0ge29iamVjdH0gW3RhcmdldHNdIC0gT3ZlcnJpZGUge0BsaW5rIFN0YXJsb2cjdGFyZ2V0c30uXG4gKlxuICogQHBhcmFtIHtPYmplY3QuPGV2ZW50VHlwZSwgZnVuY3Rpb24+fSBbbGlzdGVuZXJEaWN0aW9uYXJ5PXt9XSAtIEN1c3RvbSBsaXN0ZW5lcnMgdG8gb3ZlcnJpZGUgZGVmYXVsdCBsaXN0ZW5lci5cbiAqIEBwYXJhbSB7T2JqZWN0LjxldmVudFR5cGUsIGV2ZW50VGFyZ2V0cz59IFt0YXJnZXRzRGljdGlvbmFyeT17fV0gLSBDdXN0b20gZXZlbnQgdGFyZ2V0IG9iamVjdChzKSB0byBvdmVycmlkZSBkZWZhdWx0IHRhcmdldHMuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IFttYXRjaF0gLSBodHRwczovL2dpdGh1Yi5jb20vam9uZWl0L2NvZGUtbWF0Y2hcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF0Y2guY2FwdHVyZUdyb3VwXSAtIElmZiBkZWZpbmVkLCBpbmRleCBvZiBhIHNwZWNpZmljIGNhcHR1cmUgZ3JvdXAgdG8gcmV0dXJuIGZvciBlYWNoIG1hdGNoLlxuICogQHBhcmFtIHtvYmplY3R9IFttYXRjaC5ncmV5bGlzdF0gLSBodHRwczovL2dpdGh1Yi5jb20vam9uZWl0L2dyZXlsaXN0XG4gKiBAcGFyYW0gW21hdGNoLmdyZXlsaXN0LndoaXRlXSAtIElmIGdpdmVuLCBvbmx5IGxpc3RlZCBtYXRjaGVzIGFyZSBpbmNsdWRlZCBpbiB0aGUgcmVzdWx0cy5cbiAqIEBwYXJhbSBbbWF0Y2guZ3JleWxpc3QuYmxhY2tdIC0gSWYgZ2l2ZW4sIGxpc3RlZCBtYXRjaGVzIGFyZSBleGNsdWRlZCBmcm9tIHRoZSByZXN1bHRzLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBbbWF0Y2guY2F0YWxvZ10gLSBodHRwczovL2dpdGh1Yi5jb20vam9uZWl0L29iamVjdC1jYXRhbG9nXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFttYXRjaC5jYXRhbG9nLm93bl0gLSBPbmx5IHNlYXJjaCBvd24gbWV0aG9kcyBmb3IgZXZlbnQgc3RyaW5nczsgb3RoZXJ3aXNlIGVudGlyZSBwcm90b3R5cGUgY2hhaW4uXG4gKiBAcGFyYW0ge29iamVjdH0gW21hdGNoLmNhdGFsb2cuZ3JleWxpc3RdIC0gaHR0cHM6Ly9naXRodWIuY29tL2pvbmVpdC9ncmV5bGlzdFxuICogQHBhcmFtIFttYXRjaC5jYXRhbG9nLmdyZXlsaXN0LndoaXRlXSAtIElmIGdpdmVuLCBvbmx5IGxpc3RlZCBtZW1iZXJzIGFyZSBjYXRhbG9nZWQuXG4gKiBAcGFyYW0gW21hdGNoLmNhdGFsb2cuZ3JleWxpc3QuYmxhY2tdIC0gSWYgZ2l2ZW4sIGxpc3RlZCBtZW1iZXJzIGFyZSAqbm90KiBjYXRhbG9nZWQuXG4gKi9cblxuLyoqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzdW1tYXJ5IEluc3RhbmNlIGEgbG9nZ2VyLlxuICogQGRlc2MgQ29uc3VtZXMgYG9wdGlvbnNgLCBjcmVhdGluZyBhIGRpY3Rpb25hcnkgb2YgZXZlbnQgc3RyaW5ncyBpbiBgdGhpcy5ldmVudHNgLlxuICpcbiAqIFNvdXJjZXMgZm9yIGxvZ2dlcnM6XG4gKiAqIElmIGBvcHRpb25zLmxvZ2dlcnNgIGRpY3Rpb25hcnkgb2JqZWN0IGlzIGRlZmluZWQsIGRlZXAgY2xvbmUgaXQgYW5kIG1ha2Ugc3VyZSBhbGwgbWVtYmVycyBhcmUgbG9nZ2VyIG9iamVjdHMsIGRlZmF1bHRpbmcgYW55IG1pc3NpbmcgbWVtYmVycy5cbiAqICogRWxzZSBpZiBgb3B0aW9ucy5ldmVudHNgIChsaXN0IG9mIGV2ZW50IHN0cmluZ3MpIGlzIGRlZmluZWQsIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aG9zZSBrZXlzLCBsaXN0ZW5lcnMsIGFuZCB0YXJnZXRzLlxuICogKiBFbHNlIGlmIGBvcHRpb25zLnBhdHRlcm5gIGlzIGRlZmluZWQsIGNvZGUgZm91bmQgaW4gdGhlIGV4ZWN1dGlvbiBjb250ZXh0IG9iamVjdCBpcyBzZWFyY2hlZCBmb3IgZXZlbnQgc3RyaW5ncyB0aGF0IG1hdGNoIGl0IChwZXIgYG9wdGlvbnMubWF0Y2hgKS5cbiAqXG4gKiBFdmVudHMgc3BlY2lmaWVkIHdpdGggYG9wdGlvbnMuZXZlbnRzYCBhbmQgYG9wdGlvbnMucGF0dGVybmAgbG9nIHVzaW5nIHRoZSBkZWZhdWx0IGxpc3RlbmVyIGFuZCBldmVudCB0YXJnZXRzOlxuICogKiBgU3RhckxvZy5wcm90b3R5cGUubGlzdGVuZXJgLCB1bmxlc3Mgb3ZlcnJpZGRlbiwganVzdCBjYWxscyBgdGhpcy5sb2coKWAgd2l0aCB0aGUgZXZlbnQgc3RyaW5nLCB3aGljaCBpcyBzdWZmaWNpZW50IGZvciBjYXN1YWwgdXNhZ2UuXG4gKiBPdmVycmlkZSBpdCBieSBkZWZpbmluZyBgb3B0aW9ucy5saXN0ZW5lcmAgb3IgZGlyZWN0bHkgYnkgcmVhc3NpZ25pbmcgdG8gYFN0YXJMb2cucHJvdG90eXBlLmxpc3RlbmVyYCBiZWZvcmUgaW5zdGFudGlhdGlvbi5cbiAqICogYFN0YXJMb2cucHJvdG90eXBlLnRhcmdldHNgLCB1bmxlc3Mgb3ZlcnJpZGRlbiwgaXMgYHdpbmRvdy5kb2N1bWVudGAgKHdoZW4gYXZhaWxhYmxlKSxcbiAqIHdoaWNoIGlzIG9ubHkgcmVhbGx5IHVzZWZ1bCBpZiB0aGUgZXZlbnQgaXMgZGlzcGF0Y2hlZCBkaXJlY3RseSB0byAob3IgaXMgYWxsb3dlZCB0byBidWJibGUgdXAgdG8pIGBkb2N1bWVudGAuXG4gKiBPdmVycmlkZSBpdCBieSBkZWZpbmluZyBgb3B0aW9ucy50YXJnZXRzYCBvciBkaXJlY3RseSBieSByZWFzc2lnbmluZyB0byBgU3RhckxvZy5wcm90b3R5cGUudGFyZ2V0c2AgYmVmb3JlIGluc3RhbnRpYXRpb24uXG4gKlxuICogRXZlbnRzIHNwZWNpZmllZCB3aXRoIGBvcHRpb25zLmxvZ2dlcnNgIGNhbiBlYWNoIHNwZWNpZnkgdGhlaXIgb3duIGxpc3RlbmVyIGFuZC9vciB0YXJnZXRzLCBidXQgaWYgbm90IHNwZWNpZmllZCwgdGhleSB0b28gd2lsbCBhbHNvIHVzZSB0aGUgYWJvdmUgZGVmYXVsdHMuXG4gKlxuICogQHBhcmFtIHtzdGFybG9nT3B0aW9uc30gW29wdGlvbnNdXG4gKi9cbmZ1bmN0aW9uIFN0YXJMb2cob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy8gT3ZlcnJpZGUgcHJvdG90eXBlIGRlZmluaXRpb25zIGlmIGFuZCBvbmx5IGlmIHN1cHBsaWVkIGluIG9wdGlvbnNcbiAgICBbJ2xvZycsICd0YXJnZXRzJywgJ2xpc3RlbmVyJ10uZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKG9wdGlvbnNba2V5XSkgeyB0aGlzW2tleV0gPSBvcHRpb25zW2tleV07IH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHZhciBkZWZhdWx0VGFyZ2V0ID0gb3B0aW9ucy50YXJnZXRzIHx8IHRoaXMudGFyZ2V0cyxcbiAgICAgICAgZGVmYXVsdExpc3RlbmVyID0gb3B0aW9ucy5saXN0ZW5lciB8fCB0aGlzLmxpc3RlbmVyLFxuICAgICAgICBsaXN0ZW5lckRpY3Rpb25hcnkgPSBvcHRpb25zLmxpc3RlbmVyRGljdGlvbmFyeSB8fCB7fSxcbiAgICAgICAgdGFyZ2V0c0RpY3Rpb25hcnkgPSBvcHRpb25zLnRhcmdldHNEaWN0aW9uYXJ5IHx8IHt9LFxuICAgICAgICBsb2dnZXJzID0gb3B0aW9ucy5sb2dnZXJzLFxuICAgICAgICBldmVudFN0cmluZ3M7XG5cbiAgICBpZiAobG9nZ2Vycykge1xuICAgICAgICBldmVudFN0cmluZ3MgPSBPYmplY3Qua2V5cyhsb2dnZXJzKTtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZXZlbnRzKSB7XG4gICAgICAgIGxvZ2dlcnMgPSB7fTtcbiAgICAgICAgZXZlbnRTdHJpbmdzID0gb3B0aW9ucy5ldmVudHM7XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnBhdHRlcm4gJiYgb3B0aW9ucy5zZWxlY3QpIHtcbiAgICAgICAgbG9nZ2VycyA9IHt9O1xuICAgICAgICBldmVudFN0cmluZ3MgPSBhcnJheWlmeShvcHRpb25zLnNlbGVjdCkucmVkdWNlKGZ1bmN0aW9uKG1hdGNoZXMsIG9iamVjdCkge1xuICAgICAgICAgICAgbWF0Y2guY2FsbChvYmplY3QsIG9wdGlvbnMucGF0dGVybiwgb3B0aW9ucy5tYXRjaCkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlcy5pbmRleE9mKG1hdGNoKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKG1hdGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICB9LCBbXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgb3B0aW9ucy5sb2dnZXJzYCwgYG9wdGlvbnMuZXZlbnRzYCwgb3IgYG9wdGlvbnMucGF0dGVybmAgYW5kIGBvcHRpb25zLnNlbGVjdGAgdG8gYmUgZGVmaW5lZC4nKTtcbiAgICB9XG5cbiAgICB2YXIgc3RhcmxvZyA9IHRoaXM7XG5cbiAgICAvKipcbiAgICAgKiBEaWN0aW9uYXJ5IG9mIGV2ZW50IHN0cmluZ3Mgd2l0aCBsaXN0ZW5lciBhbmQgdGFyZ2V0KHMpLlxuICAgICAqIEB0eXBlIHtPYmplY3QuPGV2ZW50VHlwZSwgc3RhcmxvZ2dlcj59XG4gICAgICovXG4gICAgdGhpcy5ldmVudHMgPSBldmVudFN0cmluZ3MucmVkdWNlKGZ1bmN0aW9uKGNsb25lLCBldmVudFN0cmluZykge1xuICAgICAgICB2YXIgbG9nZ2VyID0gT2JqZWN0LmFzc2lnbih7fSwgbG9nZ2Vyc1tldmVudFN0cmluZ10pOyAvLyBjbG9uZSBlYWNoIGxvZ2dlclxuXG4gICAgICAgIC8vIGJpbmQgdGhlIGxpc3RlbmVyIHRvIHN0YXJsb2cgZm9yIGB0aGlzLmxvZ2AgYWNjZXNzIHRvIFN0YXJsb2cjbG9nIGZyb20gd2l0aGluIGxpc3RlbmVyXG4gICAgICAgIGxvZ2dlci5saXN0ZW5lciA9IChsb2dnZXIubGlzdGVuZXIgfHwgbGlzdGVuZXJEaWN0aW9uYXJ5W2V2ZW50U3RyaW5nXSB8fCBkZWZhdWx0TGlzdGVuZXIpLmJpbmQoc3RhcmxvZyk7XG4gICAgICAgIGxvZ2dlci50YXJnZXRzID0gYXJyYXlpZnkobG9nZ2VyLnRhcmdldHMgfHwgdGFyZ2V0c0RpY3Rpb25hcnlbZXZlbnRTdHJpbmddIHx8IGRlZmF1bHRUYXJnZXQpO1xuXG4gICAgICAgIGNsb25lW2V2ZW50U3RyaW5nXSA9IGxvZ2dlcjtcblxuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfSwge30pO1xufVxuXG5TdGFyTG9nLnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogU3RhckxvZy5wcm90b3R5cGUuY29uc3RydWN0b3IsXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb259XG4gICAgICogQGRlZmF1bHQgY29uc29sZS5sb2cuYmluZChjb25zb2xlKVxuICAgICAqL1xuICAgIGxvZzogY29uc29sZS5sb2cuYmluZChjb25zb2xlKSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtmdW5jdGlvbn1cbiAgICAgKiBAZGVmYXVsdCBmdW5jdGlvbihlKSB7IHRoaXMubG9nKGUudHlwZSk7IH07XG4gICAgICovXG4gICAgbGlzdGVuZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdGhpcy5sb2coZS50eXBlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge29iamVjdH1cbiAgICAgKiBAZGVmYXVsdCB3aW5kb3cuZG9jdW1lbnRcbiAgICAgKi9cbiAgICB0YXJnZXRzOiB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuZG9jdW1lbnQsXG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIFN0YXJsb2cjc3RhcnRcbiAgICAgKiBAc3VtbWFyeSBTdGFydCBsb2dnaW5nIGV2ZW50cy5cbiAgICAgKiBAZGVzYyBBZGQgbmV3IGV2ZW50IGxpc3RlbmVycyBmb3IgbG9nZ2luZyBwdXJwb3Nlcy5cbiAgICAgKiBPbGQgZXZlbnQgbGlzdGVuZXJzLCBpZiBhbnksIGFyZSByZW1vdmVkIGZpcnN0LCBiZWZvcmUgYWRkaW5nIG5ldyBvbmVzLlxuICAgICAqL1xuICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBldmVudExpc3RlbmVyKHRoaXMuZXZlbnRzLCAnYWRkJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBtZXRob2QgU3RhcmxvZyNzdG9wXG4gICAgICogQHN1bW1hcnkgU3RvcCBsb2dnaW5nIGV2ZW50cy5cbiAgICAgKiBAZGVzYyBFdmVudCBsaXN0ZW5lcnMgYXJlIHJlbW92ZWQgZnJvbSB0YXJnZXRzIGFuZCBkZWxldGVkLlxuICAgICAqL1xuICAgIHN0b3A6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50cywgJ3JlbW92ZScpO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGV2ZW50TGlzdGVuZXIoZGljdGlvbmFyeSwgbWV0aG9kUHJlZml4KSB7XG4gICAgaWYgKCFkaWN0aW9uYXJ5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWV0aG9kID0gbWV0aG9kUHJlZml4ICsgJ0V2ZW50TGlzdGVuZXInO1xuXG4gICAgT2JqZWN0LmtleXMoZGljdGlvbmFyeSkuZm9yRWFjaChmdW5jdGlvbihldmVudFR5cGUpIHtcbiAgICAgICAgdmFyIGV2ZW50TG9nZ2VyID0gZGljdGlvbmFyeVtldmVudFR5cGVdO1xuICAgICAgICBldmVudExvZ2dlci50YXJnZXRzLmZvckVhY2goZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXRbbWV0aG9kXShldmVudFR5cGUsIGV2ZW50TG9nZ2VyLmxpc3RlbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFycmF5aWZ5KHgpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh4KSA/IHggOiBbeF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhckxvZzsiXX0=
