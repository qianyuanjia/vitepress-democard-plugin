<template>
    <canvas id="cvs-1" width="300" height="200"></canvas>
</template>
<script setup lang="ts">
  import {onMounted} from 'vue'
  onMounted(() =>{
    const cvs = document.getElementById("cvs-1") as HTMLCanvasElement;
    const ctx=cvs.getContext("2d") as CanvasRenderingContext2D;
    ctx.fillStyle = "red";
    //x, y, width, height
    ctx.fillRect(20,30,40,50);
  })
</script>