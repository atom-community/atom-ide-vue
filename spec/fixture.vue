<template>
  <splide :options="options">
    <splide-slide>
      <img src="image1.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="image2.jpg" />
    </splide-slide>
    <splide-slide>
      <img src="image3.jpg" />
    </splide-slide>
  </splide>
</template>

<script>
let x = 1
export default {
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        gap: "1rem",
      },
    }
  },
}
</script>
