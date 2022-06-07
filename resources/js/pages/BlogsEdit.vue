<template>
  <div class="card">
    <div class="card-header">Edit Blog</div>
    <div class="card-body">
      <!-- <div class="text-danger" v-if="errors.length !== 0">
        <ul>
          <li v-for="(err, index) in errors" :key="index">
            {{ err }}
          </li>
        </ul>
      </div> -->
      <form @submit.prevent="">
        <div class="mb-3">
          <label for="inputTitle" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="InputTitle"
            aria-describedby="inputTitle"
            v-model="blog.title"
            required
          />
        </div>
        <div class="mb-3">
          <label for="formFile" class="form-label">Upload Image</label>
          <input
            class="form-control"
            type="file"
            id="formFile"
            accept="image/*"
            v-on:change="onChange"
          />
        </div>
        <div class="mb-3">
          <label for="inputPost" class="form-label">Post</label>
          <textarea
            class="form-control"
            id="PostTextarea"
            rows="3"
            v-model="blog.description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import useBlogs from "../composables/blogs";

export default {
  props: {
    id: {
      requred: true,
      type: String,
    },
  },

  setup(props) {
    const { blog, getBlog } = useBlogs();
    onMounted(() => getBlog(props.id));

    return {
      getBlog,
      blog,
    };
  },
};
</script>