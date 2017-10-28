$(function () {

  $('.form').on('submit', function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $('#name').val()
    };

    $.ajax('/api/burgers', {
      type: 'POST',
      data: newBurger
    }).then(function () {
      console.log('Created new burger!');
      location.reload();
    });
  });

  $('.eat').on('submit', function (event) {
    event.preventDefault();

    var id = $(this).data('id');

    var newDevoured = true;

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("changed devoured to", newSleep);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })
});
