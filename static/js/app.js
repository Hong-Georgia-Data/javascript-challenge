// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select(".table");
// function builttable(tableData){
// function maketable(tableData) {tableData.forEach((tableData) => {
// data.forEach((tableData) => {
 //   var date =tableData.datetime;


///////////....DECLARED THE ARRAYS
// var date= [];
// var shape = [];
// var duration = [];
// var comment = [];
// var city=[];
// var state=[];
// var country=[];
///////////////////////////........./////////////

///////////....FILLED THE ARRAYS

// for(i=0; i<tableData.length; i++) {
//     //New PSeudo code

//     date.push(tableData[i].datetime); city.push(tableData[i].city);
//     shape.push(tableData[i].shape);duration.push(tableData[i].durationMinutes);
//     state.push(tableData[i].state);country.push(tableData[i].country);
//     comment.push((tableData[i].comments))

//       };
    //   );
//  console.log(date); console.log(duration);console.log(tableData);
///////////////////////////........./////////////

///////////....Select the Filters
var button = d3.select("#button");

var form = d3.select("#form");


///////////////////////////........./////////////
//TO SEE THE TABLE ON SCREEN


// for(i=0; i<tableData.length; i++) {

//  //date
//   d3.select(".table").selectAll("#column-date").append("tr").append("td")
//       .text(function(d) {
//       return `${date[i]}`});  
//   //  //CITY
//   d3.select(".table").selectAll("#column-city").append("tr").append("td")
//       .text(function(d) {
//       return `${city[i]}`});  
//   // //STATE
//   d3.select(".table").selectAll("#column-state").append("tr").append("td")
//   .text(function(d) {
//   return `${state[i]}`});
//   // COUNTRY
//   d3.select(".table").selectAll("#column-country").append("tr").append("td")
//   .text(function(d) {
//   return `${country[i]}`});
//   // Shape
//   d3.select(".table").selectAll("#column-shape").append("tr").append("td")
//   .text(function(d) {
//   return `${shape[i]}`});
//   // Duration
//   d3.select(".table").selectAll("#column-duration").append("tr").append("td")
//   .text(function(d) {
//   return `${duration[i]}`});

// };
///////////////////////////........./////////////
///////// Assign the data from `data.js` to a descriptive variable
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");
// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);
// / Complete the event handler function for the form
function runEnter() {
 
  // Prevent the page from refreshing
  // d3.event.preventDefault();
  
    
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputElement);
  
  var filteredData = tableData.filter(d => d.datetime === inputValue);
  

  var date= [];
  var shape = [];
  var duration = [];
  var comment = [];
  var city=[];
  var state=[];
  var country=[];  var comment=[];


  var column_city=d3.select("tr").selectAll("#column-city");
  var column_date=d3.select("tr").selectAll("#column-date");
  var column_state= d3.select("tr").selectAll("#column-state");
  var column_country=d3.select("tr").selectAll("#column-country");
  var column_shape=d3.select("tr").selectAll("#column-shape");
  var column_duration=d3.select("tr").selectAll("#column-duration");
  var column_comment=d3.select("tr").selectAll("#column-comment");


  
  console.log(filteredData);

  ////Var Declared
  for(i=0; i<filteredData.length; i++) {

 
    //New PSeudo code

    date.push(filteredData[i].datetime); city.push(filteredData[i].city);
    shape.push(filteredData[i].shape);duration.push(filteredData[i].durationMinutes);
    state.push(filteredData[i].state);country.push(filteredData[i].country);
    comment.push(filteredData[i].comments);  comment.push(tableData[i].comments);

    //   );
  ////////Screen Table
    //date
    column_date.append("tr").append("td")
         .text(function(d) {
         return `${date[i]}`});  
     //  //CITY
    column_city.append("tr").append("td")
         .text(function(d) {
         return `${city[i]}`});  
     // //STATE
    column_state.append("tr").append("td")
     .text(function(d) {
     return `${state[i]}`});
     // COUNTRY
    column_country.append("tr").append("td")
     .text(function(d) {
     return `${country[i]}`});
     // Shape
     column_shape.append("tr").append("td")
     .text(function(d) {
     return `${shape[i]}`});
     // Duration
     column_duration.append("tr").append("td")
     .text(function(d) {
     return `${duration[i]}`});
     column_comment.append("tr").append("td")
     .text(function(d) {
     return `${comment[i]}`});

   }; 


};


////////////////////


//   // Comments
//   d3.select(".table").selectAll("#column-comment").append("tr").append("td")
//   .text(function(d) {
//   return `${comment[i]}`});
///////////////////////////........./////////////



// d3.select("th").selectAll(".table-head")
//       .data(data)
//       .enter()
//       .append("tr")
//       .html(function(d) {
//         return `<td>${city}</td>`;
//     });  








/////////////////////////////////
    // //Date
    // var column_date=d3.selectAll("#column-date").append("tr");

    // Object.entries(tableData.datetime).forEach(([key, value]) => {
    //     var date = column_date.append("td");
    //     date.text(value);
    //   });
     

    // // //CITY
    // var column_city=d3.select("#column-city").append("tr");

    // Object.entries(tableData.city).forEach(([key, value]) => {
    //     var city = column_city.append("td").text(value);
    //   });

    // //STATE
    // var column_city=d3.selectAll("#column-state").append("tr");

    //   Object.entries(tableData.state).forEach(([key, value]) => {
    //       var state = column_city.append("td");
    //       state.text(value);
    //     });
  
    // //COUNTRY
    // var column_country=d3.selectAll("#column-country").append("tr");

    // Object.entries(tableData.country).forEach(([key, value]) => {
    //     var country = column_country.append("td");
    //     country.text(value);
    //   });

    //     //SHAPE
    // var column_shape=d3.selectAll("#column-shape").append("tr");

    // Object.entries(tableData.shape).forEach(([key, value]) => {
    //     var shape = column_shape.append("td");
    //     shape.text(value);
    //   });

    // // Duration

    // var column_duration=d3.selectAll("#column-duration").append("tr");

    //   Object.entries(tableData.durationMinutes).forEach(([key, value]) => {
    //       var duration = column_duration.append("td").exit();
    //       duration.text(value);

    //     });

    // // Comment

    //     var column_comment=d3.selectAll("#column-comment").append("tr");
    
    //     Object.entries(tableData.comments).forEach(([key, value]) => {
    //         var comments = column_comment.append("td");
    //         comments.text(value);
    //       });
   /////////////////////////////////   



// var tbody = d3.select("tr")
//                 .selectAll("th")
//                 .data(tableData.city)
                
// d3.select("ul")
//     .selectAll("li")
//     .data(arr)
//     .enter()
//     .append("li")
//     .text(function(d) {
//       return d;
//     });

    //   var column_state = d3.selectAll("#column-state").append("tr").append("td")
    //     .text(function(d) {
    //     return `${state}`});  
    // var column_state = d3.selectAll("#column-state").append("tr").append("td").text();  
