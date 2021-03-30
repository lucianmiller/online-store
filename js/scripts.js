$(document).ready(function()  {
  $("form#checkout").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    const shirtSize = $("#product").val();
    const receipt = `Thank you ${name} for ordering! You ${shirtSize} will be delivered to you at ${address} in three days!`

    $("#receipt").text(receipt);
  });
});