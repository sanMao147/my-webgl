/* // 数据类型为低精度浮点型
precision lowp float;
void main() {

    //gl_PointCoord是内置变量，表示顶点坐标 gl_PointCoord的最大值是(1.0,1.0)
    //gl_FragColor 也是内置变量，表示顶点坐标对应的像素的颜色值
    //计算顶点坐标到指定点(0.5,0.5)之间的距离,
    float r = distance(gl_PointCoord, vec2(0.5, 0.5));
    //根据距离设置片元
    if(r < 0.5) {
        // 方形区域片元距离几何中心半径小于0.5，像素颜色设置红色
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    } else {
        // 方形区域距离几何中心半径大于等于0.5的片元剪裁舍弃掉：
        discard;
    }
} */

//浮点数设置为中等精度
precision mediump float;
//全局变量，用来接收 JavaScript传递过来的颜色。
uniform vec4 u_Color;
void main() {
    // 将颜色处理成 GLSL 允许的范围[0， 1]。
    vec4 color = u_Color / vec4(255, 255, 255, 1);
    gl_FragColor = color;
}