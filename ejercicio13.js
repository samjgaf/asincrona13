let app = angular.module("app",[])

app.controller("controlador",function($scope){
    $scope.nameUser = "Clarl"
    let Tarifa = 250;
    $scope.montoTotal;
    montoTotal.totalMonto = function() {
        let distancia;
        if(distancia < 300){
            alert(Tarifa);
        }else if(distancia > 300 || distancia<1000){
            let val = userDistance-300;
            let monto1 = val*30;
            let monto2 = monto1+Tarifa;
            alert(monto2);
        }
    };
})