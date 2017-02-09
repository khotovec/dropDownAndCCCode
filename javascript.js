/*jslint browser: true*/
/*global $, jQuery*/
/*jslint devel: true */

$(document).ready(function (main) {
    "use strict";
    if ($(".ClearingConfigCell")) {
        /* Hide the stock Clearing Center */
        $("#ctl00_cphMainContent_ctlClearingUserData10005_lblCostCenter").hide();
        $("#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter").hide();
        
        /* Append the Clearing Center with new content */
        $(".ClearingConfigCell").append("Select Code:  ");
        $(".ClearingConfigCell").append(function () {
            var codes = [ "", "MD-5629-03XXXX-XXX", "OH-5629-04XXXX-XXX", "PA-5629-00XXXX-XXX", "PA-5629-01XXXX-XXX", "PA-5629-99XXXX-XXX", "VA-5629-05XXXX-XXX", "WV-5629-02XXXX-XXX", "DE-5629-06XXXX-XXX"],
                cc = $("[name*='txtCostCenter']");
            if (cc.length > 0) {
                cc.hide();
                cc.parent().append("<select id='myCCselect'/>");
                $.each(codes, function (i, val) {
                    $('#myCCselect').append($('<option>', {value: val, text : val }));
                });
                $("#myCCselect").change(function () {
                    if ($(this).val() === "Please Select Cost Center Code: ") {
                        cc.val("");
                    } else {
                        if (xmp.sdk.storeFrontParams.currentUser.custom5 !== "****") {
                            cc.val(xmp.sdk.storeFrontParams.currentUser.custom5 + "-" + $(this).val());
                        }
                    }
                });
            }
        });
        $(".ClearingConfigCell").append("<br><br>Cost Center Code: <input type='text' id='customField2' maxlength='255' value='' class='customCostCenterField'>");
        $(".customCostCenterField").keyup(function () {
            $("#ctl00_cphMainContent_ctlClearingUserData10005_txtCostCenter").val("Code 1:" + $("#myCCselect").val() + " Code 2:" + $("#customField2").val());
        });
    }
});