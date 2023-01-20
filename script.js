    let list_container = "";
    list_container = document.getElementById('results-list');

    // var start_s = "01-06-2022";
    // var end_s = "03-06-2022";

    $("button").click(function () {
        $.ajax({
            // url: `https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/prices?dno=10&voltage=HV&start=${start_s}&end=${end_s}}`,
            url: 'https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/prices?dno=10&voltage=HV&start=01-06-2022&end=03-06-2022',
            // headers: {'Content-Type': 'application/json'},
            // type: "GET",
            // dataType: "json",
            success: function (data) {
                // print response data in the console
                console.log(JSON.stringify(data.status));
                console.log(JSON.stringify(data));
                // clear the content of the results list container
                let res_lst = document.getElementById("results-list");
                res_lst.innerHTML = " ";
                res_lst.insertAdjacentHTML('beforeend', `<p>What are DNOs? Distribution Network Operators (DNOs) are licensed companies that own and operate the network of towers, transformers, cables and meters that carry electricity from the national transmission system and distribute it throughout Britain.</p>`);
                res_lst.insertAdjacentHTML('beforeend', `<p>"Overall" price in p/kWh, the "unixTimestamp", and "Timestamp" with the specific time and date.</p>`);
                // append the response results objects in the HTML page
                var obj = data;
                if (obj.status == "success") {
                    var count = 0;
                    var data = obj.data.data;
                    data.forEach(function (item) {
                        count++;
                        var paragrah = document.createElement("p");
                        paragrah.style.backgroundColor = randomColor();
                        paragrah.style.padding = "0";
                        paragrah.style.margin = "1px auto 1px auto";
                        paragrah.innerHTML = count + ". Overall: " + item.Overall + ", Timestamp: " + item.Timestamp + ", unixTimestamp: " + item.unixTimestamp;
                        document.getElementById("results-list").appendChild(paragrah);
                        // or use appendChild:
                        //   document.body.appendChild(paragrah);
                    });
                }
            },
            error: function () {
                console.log("Error! Couldn't get data.");
                // console.trace();
            }

        })
    });
    function randomColor() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    }
    