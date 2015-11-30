var Filter = (function () {
    function Filter(options) {
        for (var option in options)
            this[option] = options[option];
    }
    return Filter;
})();
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map