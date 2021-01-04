const URL='https://covid19.mathdro.id/api';


let app= angular.module("MyApp",[]);

app.controller('myCtrl',($scope,$http)=>{
    //this is controller
    $scope.name="COVID-19 Data";

    //calling API

    $http.get(URL).then((response)=>{
        console.log(response.data);

        $scope.all_data= response.data;
    },(error)=>{
        console.log(error);
    });

    //get Country data
    // process covid data from covid-19 worldwide data API
    $scope.get_c_data= ()=>{
        let Country= $scope.c;

        if(Country == "")
        {
            $scope.c_data= undefined;
            return;
        }

        $http.get(`${URL}/countries/${Country}`).then((response)=>{
            console.log(response.data)
            $scope.c_data= response.data;

        },(error)=>{
            console.log(error );
        })

    }
})
