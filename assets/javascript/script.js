
var database = firebase.database();

// Initial Values
var name = "";
var destination = "";
var first = "";
var frequency = "";

// Capture Button Click
$("#add").on("click", function() {

name = $("#name").val().trim();
destination = $("#destination").val().trim();
first = $("#first").val().trim();
frequency = $("#frequency").val().trim();

database.ref().push({
name: name,
destination: destination,
first: first,
frequency: frequency
});

});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
    var Tname = childSnapshot.val().name;
    var Tdest = childSnapshot.val().destination;
    var Tfirst = childSnapshot.val().first;
    var Tfreq = childSnapshot.val().frequency;

    var newrow = $("<tr>");
    newrow.append("<td>"+Tname);
    newrow.append("<td>"+Tdest);
    newrow.append("<td>"+Tfirst);
    newrow.append("<td>"+Tfreq);
    $("#newrow").prepend(newrow);    
});
