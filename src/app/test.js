var Validation;
(function (Validation) {
    var Foo = (function () {
        function Foo() {
        }
        Foo.prototype.bar = function (s) {
            console.log(s);
        };
        return Foo;
    })();
    Validation.Foo = Foo;
})(Validation || (Validation = {}));
//# sourceMappingURL=test.js.map