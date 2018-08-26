function hasDocument(){
    return (typeof document !== "undefined");
}

function hasWindow(){
    return (typeof window !== "undefined");
}

export function getDocumentDir(){
    if(!hasDocument()){
        return "auto";
    }
    const  direction = (typeof document.dir !== "undefined") ?
        document.dir :
        document.getElementsByTagName("html")[0].getAttribute("dir");
    return direction;
}

export function setDocumentDir(dir: "ltr" | "rtl" | "auto"){
    if(!hasDocument){
        return;
    }

    const html = document.getElementsByTagName("html")[0];
    html.setAttribute("dir", dir);
}

export function addWindowEventListener(event:string, callback: () => mixed){
    if(!hasWindow){
        return;
    }
    window.addEventListener(event, callback);
}

export function removeWindowEventListener(event:string, callback: () => mixed){
    if(!hasWindow){
        return;
    }
    window.removeEventListener(event, callback);
}



