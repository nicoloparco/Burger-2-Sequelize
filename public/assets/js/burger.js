$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name : $("#newburger").val().trim(), 
            devoured: 0
        }

        $.ajax("api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New Burger Added");
            location.reload()
        });
    });

    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devour = {
            devoured: 1
        };
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devour
        }).then(function() {
            console.log("Burger Devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function(event){
        event.preventDefault();

        var id= $(this).data("id")

        $.ajax({
            type: "DELETE",
            url: "api/burgers/" + id
        }).then(function() {
            console.log("Burger Deleted");
            location.reload();
        });
    });
    
})