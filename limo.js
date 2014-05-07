var LIMOModule = angular.module('LIMO', ['ngCookies']);
LIMOModule.controller('SelectController', function ($scope, $http, $cookies) {
    $scope.institutions = [
        {group: 'libisnet', name: 'AB', code: 'AB', vid: 'AB', width: '60px', display: false},
        {group: 'libisnet', name: 'ACV', code: 'ACV', vid: 'ACV', width: '60px', display: true},
        {group: 'libisnet', name: 'Boerenbond', code: 'BB', vid: 'BB', width: '200px', display: true},
        {group: 'libisnet', name: 'Belgisch Parlement', code: 'BPB', vid: 'BPB', width: '110px', display: true},
        {group: 'libisnet', name: 'FARO', code: 'FARO', vid: 'FARO', width: '60px', display: true},
        {group: 'libisnet', name: 'Federale Overheidsdienst Financiën', code: 'FODFIN', vid: 'FODFIN', width: '80px', display: true},
        {group: 'kuleuven', name: 'Groep T', code: 'GROEPT', vid: 'GROEPT', width: '60px', display: true},
        {group: 'kuleuven', name: 'HUB / HUB', code: 'HUB_KAHO_HUB', vid: 'HUB_KAHO_HUB', width: '80px', display: true},
        {group: 'kuleuven', name: 'HUB / KAHO', code: 'HUB_KAHO_KAHO', vid: 'HUB_KAHO_KAHO', width: '80px', display: true},
        {group: 'libisnet', name: 'IMEC', code: 'IMEC', vid: 'IMEC', width: '60px', display: true},
        {group: 'kuleuven', name: 'KAHO Sint-Lieven', code: 'KAHOSL', vid: 'KAHOSL', width: '30px', display: false},
        {group: 'kuleuven', name: 'VIVES: Kortrijk, Roeselare, Tielt, Torhout', code: 'VIVES_KATHO', vid: 'VIVES_KATHO', width: '100px', display: true},
        {group: 'libisnet', name: 'KBC', code: 'KBC', vid: 'KBC', width: '60px', display: true},
        {group: 'kuleuven', name: 'VIVES: Brugge, Oostende', code: 'VIVES_KHBO', vid: 'VIVES_KHBO', width: '100px', display: true},
        {group: 'kuleuven', name: 'KHK', code: 'KHK', vid: 'KHK', width: '60px', display: false},
        {group: 'kuleuven', name: 'Katholieke Hogeschool Leuven', code: 'KHL', vid: 'KHL', width: '80px', display: true},
        {group: 'kuleuven', name: 'Katholieke Hogeschool Limburg', code: 'KHLIM', vid: 'KHLIM', width: '50px', display: true},
        {group: 'libisnet', name: 'Koninklijke Musea voor Kunst en Geschiedenis', code: 'KMKG', vid: 'KMKG', width: '90px', display: true},
        {group: 'kuleuven', name: 'Katholieke Universiteit Leuven', code: 'KULeuven', vid: 'KULeuven', width: '80px', display: true},
        {group: 'kuleuven', name: 'LESSA', code: 'LESSA', vid: 'LESSA', width: '60px', display: false},
        {group: 'kuleuven', name: 'LESSM', code: 'LESSM', vid: 'LESSM', width: '60px', display: false},
        {group: 'libisnet', name: 'Liberaal Archief', code: 'LIBAR', vid: 'LIBAR', width: '60px', display: true},
        {group: 'libisnet', name: 'LIBISnet', code: 'LIBISnet', vid: 'LIBISnet', width: '90px', display: false},
        {group: 'kuleuven', name: 'LUCA School of Arts', code: 'LUCA', vid: 'LUCA', width: '60px', display: true},
        {group: 'libisnet', name: 'Nationale Bank van België', code: 'NBB', vid: 'NBB', width: '120px', display: true},
        {group: 'libisnet', name: 'Studie- en Documentatiecentrum van de Federale Overheidsdienst Personeel en Organisatie', code: 'OFO', vid: 'OFO', width: '60px', display: true},
        {group: 'libisnet', name: 'Koninklijk Belgisch Instituut voor Natuurwetenschappen', code: 'RBINS', vid: 'RBINS', width: '120px', display: true},
        {group: 'libisnet', name: 'Religieuze instellingen', code: 'RELI', vid: 'RELI', width: '60px', display: false},
        {group: 'libisnet', name: 'Koninklijk Museum voor Midden-Afrika', code: 'RMCA', vid: 'RMCA', width: '60px', display: true},
        {group: 'libisnet', name: 'Sociaal-Economische Raad van Vlaanderen (SERV)', code: 'SERV', vid: 'SERV', width: '60px', display: true},
        {group: 'kuleuven', name: 'Thomas More', code: 'TMORE', vid: 'TMORE', width: '60px', display: false},
        {group: 'kuleuven', name: 'Thomas More Antwerpen', code: 'TMOREA', vid: 'TMOREA', width: '60px', display: true},
        {group: 'kuleuven', name: 'Thomas More Kempen', code: 'TMOREK', vid: 'TMOREK', width: '60px', display: true},
        {group: 'kuleuven', name: 'Thomas More Mechelen', code: 'TMOREM', vid: 'TMOREM', width: '60px', display: true},
        {group: 'libisnet', name: 'Vesalius Documentation and Information Center', code: 'VDIC', vid: 'VDIC', width: '100px', display: true},
        {group: 'kuleuven', name: 'VIVES', code: 'VIVES', vid: 'VIVES', width: '80px', display: false},
        {group: 'libisnet', name: 'Parlementair Informatiecentrum van het Vlaams Parlement', code: 'VLP', vid: 'VLP', width: '100px', display: true}
    ];

    $scope.storeInstitution = function () {
        $cookies.institution = JSON.stringify(this.institution);
    };


    $scope.view = 'unknown';
    try {
        $scope.storedInstitution = JSON.parse($cookies.institution);
    } catch (e) {
        $scope.storedInstitution = null;
    }

    $http({method: 'GET', url: '/robots.txt'}).
        success(function (data, status, headers, config) {
            $scope.view = headers(['x-primo-fe-environment']);
        }).error(function (data, status, headers, config) {
            $scope.view = headers(['x-primo-fe-environment']);
        });

    //jQuery.ajax({url:'/primo_library/libweb/rest/session', complete:function(xhr,status){$scope.view = xhr.getResponseHeader('X-PRIMO-FE-ENVIRONMENT');}});
});


LIMOModule.directive('thereIsMore', function ($timeout, $document, $window) {
    return {
        restrict: 'A',
        scope: true,
        compile: function (tElement) {
            tElement.append('<div ng-show="bottom" style="width:100%;text-align: center;position: fixed;bottom: 0;" class="well text-center" ><span class="glyphicon glyphicon-arrow-down"></span> More Institutions <span class="glyphicon glyphicon-arrow-down"></span></div>');

            return function (scope, element) {
                var elm = $('body')[0];
                var check = function () {
                    //scope.bottom = !(elm.offsetHeight + elm.scrollTop >= elm.scrollHeight);
                    scope.bottom = !($(window).scrollTop() >= elm.scrollHeight - 1000);
                };
                var appliedCheck = function () {
                    scope.$apply(check);
                };
                //element.bind('scroll', appliedCheck);
                $(window).scroll(appliedCheck);
                check();
                $timeout(check, 500);
                angular.element($window).bind('resize', appliedCheck);
            }; // end of link
        }
    };
});