<template>
  <div class="flex flex-col justify-center">
    <h1>WebGL draws a rectangle</h1>
    <canvas ref="webgl" width="500" height="500"></canvas>
  </div>
</template>

<script setup lang="ts">
  import {
    vertexShader as vShader,
    fragmentShader as fShader,
  } from '@/shaders/point'
  const webgl = ref<HTMLCanvasElement>()
  const initShader = (gl: WebGLRenderingContext) => {
    // 引入顶点、片元着色器源代码
    const vertexShaderSource = vShader
    const fragmentShaderSource = fShader
    //创建顶点着色器对象
    const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader
    //创建片元着色器对象
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader
    //引入顶点、片元着色器源代码
    gl.shaderSource(vertexShader, vertexShaderSource)
    gl.shaderSource(fragmentShader, fragmentShaderSource)
    //编译顶点、片元着色器
    gl.compileShader(vertexShader)
    gl.compileShader(fragmentShader)

    //创建程序对象program
    const program = gl.createProgram() as WebGLProgram
    //附着顶点着色器和片元着色器到program
    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    //链接program
    gl.linkProgram(program)
    //使用program
    gl.useProgram(program)
    //返回程序program对象
    return program
  }
  onMounted(() => {
    const canvas = webgl.value
    if (canvas) {
      //获取绘图上下文
      let gl = canvas.getContext('webgl') as WebGLRenderingContext
      //创建着色器程序
      initShader(gl)
      //设置清屏颜色为黑色
      gl.clearColor(0, 0, 0, 1.0)
      //清屏
      gl.clear(gl.COLOR_BUFFER_BIT)
      //绘制一个点。
      gl.drawArrays(gl.POINTS, 0, 1)
    }
  })
</script>

<style scoped></style>
