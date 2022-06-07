<template>
  <div class="card">
    <div class="card-header">View Blog</div>
    <div class="card-body">
      <table class="table table-bordered table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="blog in blogs" :key="blog.id">
            <th scope="row">{{ blog.id }}</th>
            <td>{{ blog.title }}</td>
            <td>{{ blog.description }}</td>
            <td>
              <router-link :to="{ name: 'blogs.edit', params: {id: blog.id} }" class="btn btn-primary">Edit</router-link>
              <button @click="deleteBlog(blog.id)" class="btn btn-danger ms-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import useBlogs from "../composables/blogs";
import { onMounted } from "vue";

console.log("red");

export default {
  setup() {
    const { blogs, getBlogs, destroyBlog } = useBlogs();
    onMounted(getBlogs);


    const deleteBlog = async (id) => {
      console.log('delete')
      await destroyBlog(id);
      await getBlogs();
    }

    return {
      blogs,
      deleteBlog
    };
  },
};
</script>