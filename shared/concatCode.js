export default (codes) => {
    return '{\n' + Object.keys(codes).map((c,i) => {window.workspaceToId[c] = i; return 'const e = {x:450,y:800,angle:0,img:undefined,drawImg:false,r:100,emoji:"😀"};\nI(e);\n' + codes[c];}).join('}\n{') + '\n}';
}