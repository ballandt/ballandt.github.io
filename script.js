
function getParameter( parameterName ){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

if(getParameter("docs") == "avmath"){
    window.location.assign("./p/avmath/docs/");
}