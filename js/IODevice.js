/**
 * jemul8 - JavaScript x86 Emulator
 * http://jemul8.com/
 *
 * Copyright 2013 jemul8.com (http://github.com/asmblah/jemul8)
 * Released under the MIT license
 * http://jemul8.com/MIT-LICENSE.txt
 */

/*global define */
define([
    "js/util",
    "js/Exception"
], function (
    util,
    Exception
) {
    "use strict";

    function IODevice(identifier, system, io, memory, options) {
        this.identifier = identifier;
        this.io = io;
        this.memory = memory;
        this.options = options || {};
        this.system = system;
    }

    util.extend(IODevice.prototype, {
        getIdentifier: function () {
            return this.identifier;
        },

        ioRead: function () {
            throw new Exception("IODevice.ioRead() :: Not implemented");
        },

        ioWrite: function () {
            throw new Exception("IODevice.ioWrite() :: Not implemented");
        }
    });

    return IODevice;
});
