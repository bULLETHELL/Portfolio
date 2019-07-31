$(document).ready(function(){
    var app_html=`
        <div class='container'>
            <div class='page-header'>
                <h1 id='page-title'>Projekter</h1>
            </div>
            
            <div id='page-content'></div>
        </div>`;
    // inject to app in index.html
    $("#app").html(app_html);
});

function changePageTitle(page_title){
    // Change page title
    $('#page-title').text(page_title);

    // Change title tag
    document.title=page_title;
}