<template>
  <div class="py-10 bg-gray-100 min-h-screen">
    <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      
      <h2 class="text-3xl font-bold text-center mb-8">Admissions Form</h2>

      <form @submit.prevent="submitForm" class="space-y-6">

        <!-- Name -->
        <div>
          <label class="block font-medium mb-1">Name</label>
          <input 
            type="text" 
            v-model="form.name"
            class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Email -->
        <div>
          <label class="block font-medium mb-1">Email</label>
          <input 
            type="email" 
            v-model="form.email"
            class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Country -->
        <div>
          <label class="block font-medium mb-1">Country</label>
          <select 
            v-model="form.country"
            class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Select Country</option>
            <option>Pakistan</option>
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>
        </div>

        <!-- City -->
        <div>
          <label class="block font-medium mb-1">City</label>
          <input 
            type="text" 
            v-model="form.city"
            class="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <!-- Courses (Checkbox) -->
        <div>
          <label class="block font-medium mb-2">Courses</label>
          <div class="flex flex-wrap gap-4">
            <label class="flex items-center gap-2">
              <input type="checkbox" value="Web Development" v-model="form.courses">
              Web Development
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" value="Graphic Design" v-model="form.courses">
              Graphic Design
            </label>
            <label class="flex items-center gap-2">
              <input type="checkbox" value="Digital Marketing" v-model="form.courses">
              Digital Marketing
            </label>
          </div>
        </div>

        <!-- Gender (Radio) -->
        <div>
          <label class="block font-medium mb-2">Gender</label>
          <div class="flex gap-6">
            <label class="flex items-center gap-2">
              <input type="radio" value="Male" v-model="form.gender">
              Male
            </label>
            <label class="flex items-center gap-2">
              <input type="radio" value="Female" v-model="form.gender">
              Female
            </label>
          </div>
        </div>

        <!-- Profile Image -->
        <div>
          <label class="block font-medium mb-1">Profile Image</label>
          <input 
            type="file" 
            accept="image/*"
            @change="handleProfileImage"
            class="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <!-- Multiple Images -->
        <div>
          <label class="block font-medium mb-1">Other Images</label>
          <input 
            type="file" 
            multiple
            accept="image/*"
            @change="handleMultipleImages"
            class="w-full border rounded-lg px-4 py-2"
          />
        </div>

        <!-- Submit -->
        <div>
          <button 
            type="submit"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  </div>

  
</template>

<script setup>
import { onMounted,onUnmounted, reactive, onBeforeUpdate,  } from "vue"


onMounted : {
    alert("Funning")
}



const form = reactive({
  name: "",
  email: "",
  country: "",
  city: "",
  courses: [],
  gender: "",
  profileImage: null,
  otherImages: []
})

const handleProfileImage = (e) => {
  form.profileImage = e.target.files[0]
}

const handleMultipleImages = (e) => {
  form.otherImages = Array.from(e.target.files)
}

const submitForm = () => {
  console.log("Form Data:", form)
  alert("Form Submitted! Check console.")
}
</script>