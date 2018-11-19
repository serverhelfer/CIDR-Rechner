(function () {
    'use strict';

    angular
        .module('appCIDR', [

        ]);

    angular.module('appCIDR')
        .controller('ctrlCIDR', ctrlCIDR);

    ctrlCIDR.$inject = ['$scope'];

    function ctrlCIDR($scope) {
        var vm = this;

        vm.octetOne = randomVal(255);
        vm.octetTwo = randomVal(255);
        vm.octetThree = randomVal(150);
        vm.octetFour = randomVal(120);
        vm.prefix = randomVal(30);


        $scope.$watch('cidr.octetOne', function(newVal, oldVal){
            
            newVal = parseInt(newVal);
            oldVal = parseInt(oldVal);

            if(newVal > 255){
                vm.octetOne = oldVal;
            }else if(isNaN(newVal)){
                vm.octetOne = 0;
            }else{
                vm.octetOne = newVal;
            }
        });

        $scope.$watch('cidr.octetTwo', function(newVal, oldVal){
            
            newVal = parseInt(newVal);
            oldVal = parseInt(oldVal);

            if(newVal > 255){
                vm.octetTwo = oldVal;
            }else if(isNaN(newVal)){
                vm.octetTwo = 0;
            }else{
                vm.octetTwo = newVal;
            }
        });

        $scope.$watch('cidr.octetThree', function(newVal, oldVal){
            
            newVal = parseInt(newVal);
            oldVal = parseInt(oldVal);

            if(newVal > 255){
                vm.octetThree = oldVal;
            }else if(isNaN(newVal)){
                vm.octetThree = 0;
            }else{
                vm.octetThree = newVal;
            }
        });

        $scope.$watch('cidr.octetFour', function(newVal, oldVal){
            
            newVal = parseInt(newVal);
            oldVal = parseInt(oldVal);

            if(newVal > 255){
                vm.octetFour = oldVal;
            }else if(isNaN(newVal)){
                vm.octetFour = 0;
            }else{
                vm.octetFour = newVal;
            }
        });

        $scope.$watch('cidr.prefix', function(newVal, oldVal){
            
            newVal = parseInt(newVal);
            oldVal = parseInt(oldVal);

            if(newVal > 32){
                vm.prefix = oldVal;
            }else if(isNaN(newVal)){
                vm.prefix = 0;
            }else{
                vm.prefix = newVal;
            }
        });


        vm.calculate = calculate;

        calculate();

        function calculate() {
            var net = new Netmask(
                [vm.octetOne, vm.octetTwo, vm.octetThree, vm.octetFour].join('.'), vm.prefix);

            vm.mask = net.mask;
            vm.first = net.first;
            vm.last = net.last;
            vm.hosts = net.host;

        }

        function randomVal(val){
            return Math.floor((Math.random() * val) + 1);
        }

    }

}());