<template>
    <video
      id="tcplayer-container"
      preload="auto"
      playsinline
      webkit-playsinline
      style="width: 400px;height: 300px;"
    ></video>
  </template>
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import {lazyLoadCDN} from '@/utils/import'

  const events = [
      'loadstart',
      'suspend',
      'abort',
      'error',
      'emptied',
      'stalled',
      'loadedmetadata',
      'loadeddata',
      'canplay',
      'canplaythrough',
      'playing',
      'waiting',
      'seeking',
      'seeked',
      'ended',
      'durationchange',
      'timeupdate',
      'progress',
      'play',
      'pause',
      'ratechange',
      'resize',
      'volumechange',
      'webrtcevent',
  ];
  
  
  onMounted(()=>{
    lazyLoadCDN('https://web.sdk.qcloud.com/player/tcplayer/release/v5.1.0/tcplayer.v5.1.0.min.js','TCPlayer').then(tcplayer=>{
      const rtcSrc='https://1500025293.vod-qcloud.com/6cbe695dvodcq1500025293/9dee4e111397757888328120904/playlist_eof.m3u8'
      const player = tcplayer('tcplayer-container', {
        controls: true,
        preload: 'auto',
        licenseUrl:
          'https://license.vod2.myqcloud.com/license/v2/1305072936_1/v_cube.license',
          });
          player.src(rtcSrc)
        events.forEach((type) => {
          player.on(type, (event: any) => {
            console.log(type, event);
          });
        });
    })
  });
  </script>
  <style>
  @import 'https://web.sdk.qcloud.com/player/tcplayer/release/v5.1.0/tcplayer.min.css';
  </style>
 