onmessage=function(data){
    const sum = data.data.reduce((acc,item)=>item+acc,0);
    postMessage(sum);
}