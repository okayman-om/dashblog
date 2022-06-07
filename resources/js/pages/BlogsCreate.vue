<template>
  <div class="card">
    <div class="card-header">Add Blog</div>
    <div class="card-body">
      <!-- <div class="text-danger" v-if="errors.length !== 0">
        <ul>
          <li v-for="(err, index) in errors" :key="index">
            {{ err }}
          </li>
        </ul>
      </div> -->
      <form @submit.prevent="saveBlog">
        <div class="mb-3">
          <label for="inputTitle" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="InputTitle"
            aria-describedby="inputTitle"
            v-model="form.title"
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
            v-model="form.description"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import useBlogs from "../composables/blogs";
import { reactive, ref } from "vue";

export default {
  setup() {
    const imageUrl = ref("");
    const title = ref("");
    const description = ref("");
    var source = "Global";

    const form = reactive({
      title: "",
      description: "",
      //   src: source,
    });

    const { storeBlog } = useBlogs();

    const onChange = async (e) => {
      //   const files = e.target.files;
      //   const imageFile = files[0].name;
      //   console.log(imageFile);
      //   source = imageFile;
      //   console.log(source);

      //   imageUrl.value

      //   const fileReader = new FileReader();

      //   fileReader.addEventListener("load", () => {
      //     const imageUrl = fileReader.result;
      //     console.log("enter");
      //   });

      imageUrl.value = e.target.files[0];
      console.log(imageUrl.value);
    };

    const saveBlog = async () => {
      // src = imageUrl
      console.log(form);
      const formdata = new FormData();
      formdata.append("src", imageUrl.value);
    //   formdata.append("title", title.value);

    //   console.log(title)

    //   formdata.append("description", description.value);

      console.log(...formdata, ...form)
        
      //   this.$set(this.form, "src", "nothing");
      await storeBlog({ ...formdata });
    };

    return {
      form,
      title,
      description,
      imageUrl,
      saveBlog,
      onChange,
    };
  },
};
</script>