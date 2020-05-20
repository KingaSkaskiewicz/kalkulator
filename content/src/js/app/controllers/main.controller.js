app.controller('mainCtrl', function ($scope) {

    $scope.model = {
        calculator: {
            numberButtonClicked: function (number) {

                var canAddNumber = true;

                if (this.operator == "") {


                    if (number === "0") {
                        canAddNumber = this.leftSide.length > 0
                    }
                    if (number === ".") {
                        canAddNumber = this.leftSide.length > 0 && this.leftSide.indexOf(number) === -1;
                    }
                    if (canAddNumber) {
                        this.leftSide += number;
                    }

                } else {
                    if (number === "0") {
                        canAddNumber = this.rightSide.length > 0
                    }
                    if (number === ".") {
                        canAddNumber = this.rightSide.length > 0 && this.rightSide.indexOf(number) === -1;
                    }
                    this.rightSide += number;
                }

                this.calculateResultText();
            },
            functionButtonClicked: function (functionType) {
                if (this.leftSide === "") {
                    return;
                }

                if (functionType === "+") {
                    this.operator = "+";
                    this.operatorFunction = this.add;
                }
                if (functionType === "-") {
                    this.operator = "-";
                    this.operatorFunction = this.substract;
                }
                if (functionType === "/") {
                    this.operator = "/";
                    this.operatorFunction = this.divide;
                }
                if (functionType === "x") {
                    this.operator = "x";
                    this.operatorFunction = this.multiply;
                }
                if (functionType === "c") {
                    this.operator = "";
                    this.operatorFunction = null;
                    this.leftSide = "";
                    this.rightSide = "";
                }
                if (functionType === "=") {

                    this.operatorFunction();

                    this.operator = "";
                    this.rightSide = "";
                    this.operatorFunction = null;
                }

                this.calculateResultText();

            },
            leftSide: "",
            operator: "",
            rightSide: "",
            resultText: "",
            calculateResultText: function () {
                this.resultText = this.leftSide + " " + this.operator + " " + this.rightSide;
            },
            operatorFunction: null,

            add: function () {
                this.leftSide = parseFloat(this.leftSide) + parseFloat(this.rightSide);
            },
            substract: function () {
                this.leftSide = parseFloat(this.leftSide) - parseFloat(this.rightSide);
            },
            divide: function () {
                this.leftSide = parseFloat(this.leftSide) / parseFloat(this.rightSide);
            },
            multiply: function () {
                this.leftSide = parseFloat(this.leftSide) * parseFloat(this.rightSide);
            }
        }
    };


    $scope.keyPressed = function ($event) {

        if ($event.keyCode === 49) {
            $scope.model.calculator.numberButtonClicked('1');
        }
        if ($event.keyCode === 27) {
            $scope.model.calculator.functionButtonClicked('c');
        }




        $scope.model.keyPressed = $event.keyCode;
    }

});