    let list_container = "";
    list_container = document.getElementById('results-list');

    $("button").click(function () {
        $.ajax({
            url: 'https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/prices?dno=10&voltage=HV&start=01-06-2022&end=03-06-2022',
            success: function (data) {
                console.log(JSON.stringify(data));
                document.getElementById("results-list").innerHTML = " ";
                var obj = data;
                if (obj.status == "success") {
                    var count = 0;
                    var data = obj.data.data;
                    data.forEach(function (item) {
                        count++;
                        var paragrah = document.createElement("p");
                        paragrah.innerHTML = count + ". Overall: " + item.Overall + ", Timestamp: " + item.Timestamp + ", unixTimestamp: " + item.unixTimestamp;
                        document.getElementById("results-list").appendChild(paragrah);
                        // or use appendChild:
                        //   document.body.appendChild(paragrah);
                    });
                }
            }

        })
    });