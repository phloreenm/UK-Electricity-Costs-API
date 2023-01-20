# UK-Electricity-Costs-API
Testing the API

- Used the API to get the cost of electricity in the UK for a specified period in the script request URL

# **Credits**
- API JavaScript base code used from documentation page for the [Electricity Costs API](https://electricitycosts.org.uk/api-documentation/)
```javascript
  $.ajax({ url: "https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/prices?dno=10&voltage=HV&start=01-06-2021&end=03-06-2021", success: function(data) {console.log(JSON.stringify(data)); }})
```
- [Randomize color in JS](https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript)

# **Functionality**
- The API returns a JSON object with the cost of electricity for the specified period.
- The request result content is fully displayed in the console, then the data objects from the the response are written in the html document.

# **Issues:**
- In the Request URL to the API, I tried using template literals, but I'm getting an error. Code commented to come back later with a fix.
```
var start_s = "01-06-2022";
var end_s = "03-06-2022";
url: `https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/prices?dno=10&voltage=HV&start=${start_s}&end=${end_s}}`
```
```
Access to XMLHttpRequest at 'https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/prices?dno=10&voltage=HV&start=01-06-2022&end=03-06-2022}' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
