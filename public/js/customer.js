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

    function getCustomers() {
        $.get("/api/customers", function(data) {
            var rowsToAdd = [];
            for(var i = 0; i < data.length; i++) {
                
                var name = data[i].name;
                var burgers = data[i].Burgers
                var createdAt = new Date(data[i].createdAt)

                var customerRow = $("<div>")
                customerRow.append(
                    `<div class='row text-white inline'>
                    <div class="col-md-3 my-2 mx-2">
                        ${name}
                    </div>
                    <div class="col-md-3 my-2 mx-2 burgers">
                        Burgers: ${burgers}
                    </div>
                    <hr>
                    <div class="col-md-3 my-2 mx-2">
                        Customer Since: ${createdAt}
                    </div>
                    </div>`
                )
                customerRow.prepend($("<hr>"))
                rowsToAdd.push(customerRow)
                
            }
            renderCustomerList(rowsToAdd);
            customerName.val("")
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