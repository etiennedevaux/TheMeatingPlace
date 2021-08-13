/*
    jQuery for MaterializeCSS initialization
*/

$(document).ready(function () {
    $(".sidenav").sidenav({edge: "right"});
    $(".collapsible").collapsible();
    $(".tooltipped").tooltip();
    $("select").formSelect();
    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });

    validateMaterializeSelect();
    function validateMaterializeSelect() {
        let classValid = { "border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50" };
        let classInvalid = { "border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336" };
        if ($("select.validate").prop("required")) {
            $("select.validate").css({ "display": "block", "height": "0", "padding": "0", "width": "0", "position": "absolute" });
        }
        $(".select-wrapper input.select-dropdown").on("focusin", function () {
            $(this).parent(".select-wrapper").on("change", function () {
                if ($(this).children("ul").children("li.selected:not(.disabled)").on("click", function () { })) {
                    $(this).children("input").css(classValid);
                }
            });
        }).on("click", function () {
            if ($(this).parent(".select-wrapper").children("ul").children("li.selected:not(.disabled)").css("background-color") === "rgba(0, 0, 0, 0.03)") {
                $(this).parent(".select-wrapper").children("input").css(classValid);
            } else {
                $(".select-wrapper input.select-dropdown").on("focusout", function () {
                    if ($(this).parent(".select-wrapper").children("select").prop("required")) {
                        if ($(this).css("border-bottom") != "1px solid rgb(76, 175, 80)") {
                            $(this).parent(".select-wrapper").children("input").css(classInvalid);
                        }
                    }
                });
            }
        });
    }
});

function deleteRecipe(url) {
    alert(url);
    window.open(url,"_self");
}

function deleteRecipeConfirm() {
    document.getElementById("mpl-recipe-delete").style.display="none";
    document.getElementById("mpl-recipe-update").style.display="none";
    document.getElementById("mpl-recipe-update-cancel").style.display="none";
    document.getElementById("mpl-recipe-confirm").style.display="block";
}

function deleteRecipe(url) {
    window.open(url,"_self");
}

function deleteRecipeCancel() {
    window.open("/","_self");
    jsFlash("Action Cancelled");
}

function jsFlash(message){
    document.getElementById("mpl-flashes").innerHTML="<div class='row flashes'><h4 class='lighten-4 center-align'>"+message+"</h4></div>";
    document.getElementById("mpl-flashes").style.display="block";

}