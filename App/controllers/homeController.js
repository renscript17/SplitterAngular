'use strict';
app.controller('homeController', [
    '$scope', function($scope) {

        $scope.post = {
            message: ""
        };

        $scope.tweet = [];

        $scope.postForm = function () {
            var message = $scope.post.message;
            var isplit = 0;
            if (message.length > 140) {
                isplit = Math.ceil((message.length / 4) / 30);
                $scope.str_split(message, isplit);
                //alert($scope.tweet[0]);

                for (var i = 0; i <= $scope.tweet.length - 1; i++) {
                    var count = $scope.tweet[i].length;
                    var tempappendchar = '';
                    while (count > 0) {
                        var lastchar = $scope.tweet[i].slice(-1);
                        if (!isNaN(parseFloat(lastchar)) && isFinite(lastchar)) {
                            tempappendchar = lastchar;
                            count = count - 1;
                            if (tempappendchar != '') {
                                $scope.tweet[i] = $scope.tweet[i].substring(0, $scope.tweet[i].length - tempappendchar.length);
                            }
                        } else {
                            count = 0;
                        }
                    }
                    if (tempappendchar != '') {
                        $scope.tweet[i + 1] = tempappendchar + ' ' + $scope.tweet[i + 1];
                    }
                }

                for (var i = 0; i <= $scope.tweet.length; i++) {
                    if ($scope.tweet[i] != undefined) {
                        $scope.tweet[i] = 'Tweet#' + ($scope.tweet.length - i) + '\n' + $scope.tweet[i] + '\n';
                    }
                }

            } else {
                $scope.tweet[0] = 'Tweet#1' + '\n' + $scope.post.message;
            }
            
        };

        $scope.str_split = function (str, chunk_size, join_with) {
            $scope.tweet = str.match(/.{1,137}/g);
        };

    }
]);