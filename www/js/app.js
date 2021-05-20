$(document).ready(function () {
    $("#addButton").on("click", function () {

        if ($("#task").val().length <= 0)
            alert("Veuillez renseigner une tâche");
        else {
            // Creating the new task and adding it to the list of tasks
            let item = document.createElement("li");
            item.innerHTML = $("#task").val();
            $("#taskList").append(item);
            $("#taskList").listview("refresh");
            $("#task").val("");

            // Marking task as finished
            $(item).on("swiperight", function () {
                $(this).toggleClass("done");
            });

            // Removing task
            $(item).on("swipeleft", function () {
                $(this).slideUp("slow", function () {
                    $(this).remove();
                })
            });
        }

    });
})