<template>
  <CardContainer class="sellers-container">
    <Seller
      label="Retail"
      :sellers="[
        {
          label: 'amazon',
          img:
            'https://cdn4.iconfinder.com/data/icons/social-media-2146/512/31_social-512.png',
        },
        {
          label: 'bookwalker',
          img:
            'https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/cjp2yskz1puq5p1s5wai',
        },
        {
          label: 'ebookjapan',
          img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShbrQSUgSd6dEpnOFaR_Tsxa9OGkYawgOOcvO1BQ5lpKk8U-XnL_mk_dNazG8bTcauaHI&usqp=CAU',
        },
      ]"
    />
    <Seller
      label="Information"
      :sellers="[
        {
          label: 'anilist',
          img: 'https://anilist.co/img/icons/android-chrome-512x512.png',
        },
        {
          label: 'mangaupdates',
          img:
            'https://pbs.twimg.com/profile_images/1827331437/_ndice_400x400.jpeg',
        },
        {
          label: 'myanimelist',
          img:
            'https://store-images.s-microsoft.com/image/apps.63654.9007199266506523.6eac6b6a-8bb6-459f-b5bb-28383cc469bc.1da183a6-e5d8-4b93-8abd-3e2de0139603?mode=scale&q=90&h=200&w=200&background=%230078D7',
        },
        {
          label: 'kitsu',
          img:
            'https://kitsu.io/kitsu-256-ed442f7567271af715884ca3080e8240.png',
        },
      ]"
    />
  </CardContainer>
</template>

<script>
import CardContainer from "../../../shared/Card";
import Seller from "./item";

export default {
  name: "Sellers",
  components: {
    CardContainer,
    Seller,
  },
};
</script>

<style scoped>
.sellers-container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
