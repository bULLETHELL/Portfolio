$(document).ready(function(){
    // Show list of projects
    showProjects();
});

function showProjects(){
    $.getJSON("http://pmon01.skp-dp.sde.dk/yeet.php", function(data){
        var read_projects_html=`
            <table class='table table-bordered table-hover'>
                <tr>
                    <th class='w-10-pct'>Name</th>
                    <th class='w-15-pct'>Link</th>
                </tr>
            `;

        console.log("before loop");
        console.log(data);
        $.each(data, function(key, val) {

            console.log(key);
            console.log(val);

            read_projects_html+=`
                <tr>
                    <td>` + val.nameAssignment + `</td>
                    <td>
                        <a href="` + val.pathAssignment + `" download>
                        Download
                    </td>
                </tr>`
        });

        // end table
        read_projects_html+=`</table>`;

        // inject to 'page-content'
        $("#page-content").html(read_projects_html);
    });
}

