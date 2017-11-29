'use strict';

var events = {
    vent: false, // set to true to log events

    init: function(grid, method) {
        method = method || 'addEventListener';
        Object.keys(events).forEach(function(type) {
            if (type !== 'vent') {
                grid[method](type, logEvent);
            }
        });
    },

    term: function(grid) {
        events.init(grid, 'removeEventListener');
    },

    'fin-click': ['gridCell'],

    'fin-double-click': ['dataRow'],

    'fin-button-pressed': function(e) {
        var cellEvent = e.detail;
        cellEvent.value = !cellEvent.value;
    },

    'fin-scroll-x': true,

    'fin-scroll-y': true,

    'fin-cell-enter': function(e) {
        var grid = getGridFromEvent(e);
        var cellEvent = e.detail;

        //if (demo.vent) { console.log('fin-cell-enter', cell.x, cell.y); }

        //how to set the tooltip....
        grid.setAttribute('title', 'event name: "fin-cell-enter"\n' +   
            'gridCell: { x: ' + cellEvent.gridCell.x + ', y: ' + cellEvent.gridCell.y + ' }\n' +
            'dataCell: { x: ' + cellEvent.dataCell.x + ', y: ' + cellEvent.dataCell.y + ' }\n' +
            'subgrid type: "' + cellEvent.subgrid.type + '"\n' +
            'subgrid name: ' + (cellEvent.subgrid.name ? '"' + cellEvent.subgrid.name + '"' : 'undefined')
        );
    },

    'fin-set-totals-value': function(e) {
        var grid = getGridFromEvent(e),
            detail = e.detail,
            areas = detail.areas || ['top', 'bottom'];

        areas.forEach(function(area) {
            var methodName = 'get' + area[0].toUpperCase() + area.substr(1) + 'Totals',
                totalsRow = grid.behavior.dataModel[methodName]();

            totalsRow[detail.y][detail.x] = detail.value;
        });

        grid.repaint();
    },

    'fin-filter-applied': true,

    'fin-keydown': handleCursorKey,

    'fin-selection-changed': function(e) {
        var grid = getGridFromEvent(e);

        console.log('fin-selection-changed', grid.getSelectedRows(), grid.getSelectedColumns(), grid.getSelections());

        if (e.detail.selections.length === 0) {
            console.log('no selections');
            return;
        }

        // to get the selected rows uncomment the below.....
        // console.log(grid.getRowSelectionMatrix());
        // console.log(grid.getRowSelection());

    },

    'fin-row-selection-changed': function(e) {
        var grid = getGridFromEvent(e),
            detail = e.detail;

        logEventDetails(e);

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
    },

    'fin-column-selection-changed': function(e) {
        var grid = getGridFromEvent(e);

        logEventDetails(e);

        if (e.detail.columns.length === 0) {
            console.log('no rows selected');
            return;
        }
        //we have a function call to create the selection matrix because
        //we don't want to create alot of needless garbage if the user
        //is just navigating around
        console.log(grid.getColumnSelectionMatrix());
        console.log(grid.getColumnSelection());
    },

    'fin-editor-data-change': true,
    'fin-request-cell-edit': true, // e.preventDefault() to cancel editor popping up
    'fin-before-cell-edit': true, // e.preventDefault() to cancel updating the model with the new data
    'fin-after-cell-edit': true,
    'fin-editor-keyup': true,
    'fin-editor-keypress': true,
    'fin-editor-keydown': true,
    'fin-groups-changed': true,

    'fin-context-menu': function(e) {
        logEventDetails(e, ['gridCell']);
    }
};

function getGridFromEvent(e) {
    var grid = e.grid || e.detail && e.detail.grid;
    if (!grid) {
        throw 'Grid object not found in event object!';
    }
    return grid;
}

function logEvent(e) {
    if (!events.vent) {
        return;
    }

    var handler = events[e.type];

    if (handler === true) {
        logEventDetails(e, ['value']);
    } else if (handler instanceof Array) {
        logEventDetails(e, handler);
    } else if (typeof handler === 'function') {
        handler(e);
    } else {
        throw 'Expected event logger to be `true`, array of string, or function';
    }
}

function logEventDetails(e, propNames) {
    console.log('\n' + e.type + ':', e);

    if (e.detail) {
        console.log('detail:', e.detail);
        if (propNames){
            propNames.forEach(function(propName) {
                if (propName in e.detail) {
                    console.log(propName + ':', e.detail[propName]);
                }
            });
        }
    }
}

/**
 * @summary Listen for certain key presses from grid or cell editor.
 * @desc NOTE: fincanvas's internal char map yields mixed case while fin-editor-key* events do not.
 * @this grid instance
 * @return {boolean} Not handled.
 */
function handleCursorKey(e) {
    var grid = getGridFromEvent(e),
        detail = e.detail,
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

module.exports = events;
