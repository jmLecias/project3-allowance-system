$(document).ready(function () {
    $(".tile-click").click(function (e) {
        e.stopPropagation();

        var allowanceID = $(this).data('id');
        var name = $(this).data('name');
        var desc = $(this).data('desc');
        var amount = parseInt($(this).data('amount'));
        var category = $(this).data('category');
        var expenses = $(this).data('expenses');
        var tExpenses = $(this).data('tExpenses');

        $(".edit-allowance-btn").attr("data-id", allowanceID);
        $(".info-name").html(name);
        $(".info-desc").html(desc);
        $(".info-amount-category").html("PHP " + amount.toLocaleString() + " - " + category);
        $(".info-expenses").html(expenses.toLocaleString() + " - expense items");
        // $(".info-total-expenses").html("PHP " + tExpenses.toLocaleString() + " - Total expenses");

        
        // unselect all first
        $(".tile-click .expenses-info").addClass("hide");
        $(".tile-click").removeClass("selected");

        // select the new tile and show allowance info
        $(".info-div").removeClass("hide");
        $(this).find(".expenses-info").removeClass("hide");
        $(this).addClass("selected");
    });
    $(".edit-allowance-btn").click(function (e) {
        e.stopPropagation();
        var allowanceID = $(this).data('id');
        window.location.href = "allowance-addedit.php?id="+allowanceID;
    });
    $("body").click(function (e) {
        // hides and unselects all
        $(".info-div").addClass("hide");
        $(".tile-click .expenses-info").addClass("hide");
        $(".tile-click").removeClass("selected");
    });
});