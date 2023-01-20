# UK-Electricity-Costs-API
Testing the API

- Used the API to get the cost of electricity in the UK for a specified period in the script request URL
- API JavaScript base code used from documentation page for the [Electricity Costs API](https://electricitycosts.org.uk/api-documentation/)


```javascript
  $.ajax({ url: "https://odegdcpnma.execute-api.eu-west-2.amazonaws.com/development/prices?dno=10&voltage=HV&start=01-06-2021&end=03-06-2021", success: function(data) {console.log(JSON.stringify(data)); }})
```
- The request result is displayed in console, then rendered in the html document.
