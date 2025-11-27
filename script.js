$(function () {
  // Exercise 1
  $(".accordion-header").on("click", function () {
    $(".accordion-content").slideUp();
    if ($(this).next().is(":hidden")) {
      $(this).next().slideDown();
    } else {
      $(this).next().slideUp();
    }
  })

  // Exercise 2
  $(".todos").first().on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function (data) {
        data.todos.forEach(item => {
          $(".todos").find("ul").append("<li>" + item.todo + "</li>")
        })
      }
    })
  })
})
