<template>
  <div class="w-1/3 mx-auto min-w-fit">
    <div class="mt-1 relative rounded-md shadow-sm">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <MailIcon class="h-8 w-6 text-gray-500" aria-hidden="true" />
      </div>
      <input type="email" name="email" id="email" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 text-3xl border-gray-300 rounded-md placeholder:text-2xl placeholder:text-gray-400" placeholder="you@example.com" @keyup.enter="login"/>
    </div>
    <div class="mt-3 text-xl">
      <span v-if="isLoading">登入中...</span>
      <span v-else-if="isError" class="text-red-500">{{ error.message }}</span>
      <span v-else-if="isSuccess" class="text-green-500">登入成功！</span>
    </div>
  </div>
</template>

<script setup>
import { MailIcon } from '@heroicons/vue/solid'
import axios from 'redaxios';
import { useMutation } from "vue-query";

const apiEndPoint = import.meta.env.VITE_API_ENDPOINT;

function loginMutation() {
  return useMutation((email) => axios.post(`${apiEndPoint}/login`, JSON.stringify(email)), {
    onSuccess: (data) => {
      console.log(data.data)
    }
  });
}

const { isLoading, isError, error, isSuccess, mutate } = loginMutation();

function login(e) {
  mutate({email: e.target.value});
}
</script>