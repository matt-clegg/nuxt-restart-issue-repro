<script setup lang="ts">

async function createUser() {
  await $fetch( "/api/users", {
    method: "POST",
    body: {
      name: "Person Name",
    },
  } );
}
</script>

<template>
  <div>
    <button @click="createUser">Create user</button>
  </div>
</template>
