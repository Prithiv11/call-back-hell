var i = 11;
setTimeout(function () {
    document.getElementById('hell').innerHTML = "Countdown Starts Now";
    setTimeout(function () {
        i--;
        document.getElementById('hell').innerHTML = i;
        setTimeout(function () {
            i--;
            document.getElementById('hell').innerHTML = i;
            setTimeout(function () {
                i--;
                document.getElementById('hell').innerHTML = i;
                setTimeout(function () {
                    i--;
                    document.getElementById('hell').innerHTML = i;
                    setTimeout(function () {
                        i--;
                        document.getElementById('hell').innerHTML = i;
                        setTimeout(function () {
                            i--;
                            document.getElementById('hell').innerHTML = i;
                            setTimeout(function () {
                                i--;
                                document.getElementById('hell').innerHTML = i;
                                setTimeout(function () {
                                    i--;
                                    document.getElementById('hell').innerHTML = i;
                                    setTimeout(function () {
                                        i--;
                                        document.getElementById('hell').innerHTML = i;
                                        setTimeout(function () {
                                            i--;
                                            document.getElementById('hell').innerHTML = i;
                                            setTimeout(function () {
                                                document.getElementById('hell').innerHTML = "Happy Birthday";
                                            }, 1300)
                                        }, 1300)
                                    }, 1300)
                                }, 1300)
                            }, 1300)
                        }, 1300)
                    }, 1300)
                }, 1300)
            }, 1300)
        }, 1300)
    }, 1300);
}, 1000);