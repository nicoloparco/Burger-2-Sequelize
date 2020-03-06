$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            name : $("#newburger").val().trim(), 
            devoured: 0,
        }

        $.ajax("/api/burgers/", {
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
        var devouredState = {
            devoured: 1
        }
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function() {
            console.log("Burger Devoured");
            location.reload();
        });

        var customerName = $("#customerName").val().trim();
        var burgerName = $(this).data("name")
        $.ajax("/api/customers/" + id, {
            type: "POST",
            data: {
                name: customerName,
                BurgerId: id,
                Burger: burgerName
            }
        }).then(function() {
            console.log(this);
            location.reload();
        });
    
    
    });


    $(".trashburger").on("click", function(event){
        event.preventDefault();

        var id= $(this).data("id")

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function() {
            console.log("Burger Deleted");
            location.reload();
        });
    });
    
})