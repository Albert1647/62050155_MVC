<template>
  <v-container>
    <h1 class="page-header">ชากังราวววว</h1>
    <v-row class="spacing">
        <v-card class="card">
            <h3 class="card-header">Insert เฉาก๊วย</h3>
            <v-text-field 
                class="text-field"
                placeholder="your text"
            >
            </v-text-field>
        </v-card>
    </v-row>
  </v-container>
</template>

<script>

export default {
};
</script>

<style scoped>
    .page-header{
        margin-bottom: 8px;
    }
    .card-header{
        padding-top: 16px;
    }

    .spacing{
        margin: 6px 0px;
    }
    .card {
        padding: 2px 30px;
    }
    .text-field{
    }
</style>

