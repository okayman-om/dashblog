import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default function useBlogs() {
    const blogs = ref([]);
    const blog = ref([]);
    const router = useRouter();
    const errors = ref([]);

    const getBlogs = async () => {
        console.log("getblogs")
        try {
            let response = await axios.get("/api/blogs");
            console.log(response.data);

            blogs.value = response.data;
        } catch (error) {
            console.log(error.message);
        }
    };

    // const handleImageUpload = () => {

    // }

    const storeBlog = async (data) => {
        errors.value = []
        try {
            await axios.post('/api/blogs', data)
            await router.push({name: 'blogs.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const getBlog = async (id) => {
        console.log('getget')
        console.log(id)
        let response = await axios.get(`/api/blogs/${id}`)
        console.log(response.data)
        blog.value = response.data
        console.log(blog.value)
    }

    getBlog(8)

    console.log(blog)

    console.log(blogs)

    getBlogs();

    const destroyBlog = async (id) => {
        await axios.delete('api/blogs/' + id)
    }

    return {
        blogs,
        blog,
        getBlog,
        getBlogs,
        storeBlog,
        destroyBlog
    }
}
