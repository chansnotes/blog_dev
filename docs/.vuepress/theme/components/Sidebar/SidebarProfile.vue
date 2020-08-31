<template>
  <div class="flex flex-col p-5 items-center">
    <Logo :size="64" />
    <div class="flex flex-col items-center">
      <span class="font-bold text-xl">{{ $site.title }} (Seokchan Yoo)</span>
      <span class="text-xs mt-1 text-gray-700"
        >사업기획자 &#183; 바이오 엔지니어
      </span>
      <span class="text-xs mt-4 opacity-excerpt">
        헬스케어 / 농업기술 / IT기술에 관심이 많은 엔지니어이자 유탄이의 큰형님
      </span>
    </div>
  </div>
</template>

<script>
import Logo from '../Logo/Logo'

export default {
  components: {
    Logo,
  },
}
</script>
