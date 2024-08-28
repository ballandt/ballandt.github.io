let docsVersion = "3.1";

function getParameter( parameterName ){
    let parameters = new URLSearchParams(window.location.search);
    return parameters.get(parameterName);
}

// if(getParameter("a" || !getParameter("s"))){
//     window.location.assign("./"+docsVersion+"#"+getParameter("a"));
if(getParameter("s")){
    window.location.assign("./"+docsVersion+"/"+getParameter("s")+"#"+getParameter("a"));
}else if(getParameter("a")){
    window.location.assign("./"+docsVersion+"#"+getParameter("a"));
}else{
    window.location.assign("./"+docsVersion+"/");
}