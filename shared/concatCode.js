export default (codes) => {
    return '{\nconst e={x:450,y:800,angle:0,img:undefined,drawImg:false,r:100,emoji:"😀"};\nI(e);\n' + codes.join('}\n{const e={x:450,y:800,angle:0,img:undefined,drawImg:false,r:100,emoji:"😀"};\nI(e);\n') + '\n}';
}