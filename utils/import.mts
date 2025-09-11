export const lazyLoadCDN=(cdn:string,glabalName?:string)=>{
    return new Promise((resolve,reject)=>{
        if(glabalName && window[glabalName]){
            resolve(window[glabalName]);
            return;
        };
        const script=document.createElement('script')
        script.src=cdn;
        script.onload=()=>{
            if(glabalName && window[glabalName]){
                resolve(window[glabalName])
            }else{
                resolve(true)
            }
        }
        script.onerror=()=>{
            reject(false)
        }
        document.body.appendChild(script)
    })
}