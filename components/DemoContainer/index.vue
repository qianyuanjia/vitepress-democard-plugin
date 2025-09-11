<template>
    <div class="vp-doc">
        <details class="details custom-block">
            <summary>
                demo演示
            </summary>
            <slot></slot>
        </details>
        <details class="details custom-block">
            <summary>
                代码示例
            </summary>
            <div :class='`language-${lang}`'>
                <button title="复制代码" class="copy"></button>
                <span class="lang">{{lang}}</span>
                <div v-html="code"></div>
            </div>
        </details>
    </div>
</template>
<script setup lang="ts">
   defineProps<{
        code: string;
        lang: string;
    }>()
</script>
