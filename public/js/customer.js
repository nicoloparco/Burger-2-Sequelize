$(document).ready(function() {
    var customerName = $("#customerName");
    var customerList = $("#customerList");
    var customerContainer = $(".customerContainer")
    

    $(document).on("click", "deleteCustomer", handleDeleteButtonPress);

    getCustomers();

    
    $(document).ready(function() {
        $("#submitButton").click(function(event) {
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "/api/customers",
            data: {
                name: customerName.val().trim()
            }
        }).then(getCustomers)
    });
})

    function createCustomerRow(customer) {
        var newTr = $("<tr>");
        newTr.data("customer", customer);
        newTr.append("<td>" + customer.name + "</td>");
        if(customer.Burgers) {
            newTr.append("<td>" + customer.Burgers.length + "</td>")
        } else {
            newTr.append("<td>0</td>")
        }
        newTr.append("<td><a class='delete-author'>Delete Author</a></td>")
    }

    function getCustomers() {
        $.get("/api/customers", function(data) {
            var rowsToAdd = [];
            for(var i = 0; i < data.length; i++) {
                rowsToAdd.push(createCustomerRow(data[i]));
            }
            renderCustomerList(rowsToAdd);
            customerName.val("")
            console.log(data)
        })
    }

    function renderCustomerList(rows) {
        if(rows.length) {
            customerList.append(rows)
        } else {
            renderEmpty();
        }
    }

    function renderEmpty() {
        var alertDiv = $("<div>");
        alertDiv.addClass("alert");
        alertDiv.text("Customer must enter name before accessing Burgers.");
        customerContainer.append(alertDiv);
    }

    function handleDeleteButtonPress() {
        var listItemData = $(this).parent("td").parent("tr").data("customer");
        var id = listItemData.id;
        $.ajax({
            method: "DELETE",
            url: "/api/customers/" + id
        }).then(getCustomers);
    }
});