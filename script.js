
function getParameter( parameterName ){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

if(getParameter("docs") == "avmath"){
    if (!getParameter("v")){
        window.location.assign("./p/avmath/docs/");
    } else{
        window.location.assign("./p/avmath/docs/"+getParameter("v"));
    }
}

function update(selectId){
    let select = document.getElementById(selectId);
    return select.options[select.selectedIndex].value;
}

function selectVersion(){
    let docsVersion = update('version-select');
    window.location.assign("../"+docsVersion);
}
