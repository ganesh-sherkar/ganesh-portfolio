import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const staticContent = {
  title: "Get In Touch",
  subtitle: "Contact Me",
  description:
    "Have a project in mind, a question, or an opportunity? Feel free to reach out and let's create something meaningful together.",
  contactInfo: [
    { icon: "📞", label: "Phone", value: "+91 9356102292" },
    { icon: "✉️", label: "Email", value: "ganeshdex9356@gmail.com" },
    {
      icon: "📍",
      label: "Address",
      value: "Ameerpet, Hyderabad, Telangana, India",
    },
  ],
  services: [
    "Full-Stack Web Development",
    "React Native App Development",
    "MERN Stack Solutions",
    "Frontend & UI Engineering",
  ],
};

// Async thunk for submitting contact form (graceful static simulation)
export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (formData) => {
    // Return simulated success instantly without hanging
    return { success: true, message: "Message sent successfully!", data: formData };
  }
);

// Async thunk for fetching contact page content (pure static)
export const fetchContactContent = createAsyncThunk(
  "contact/fetchContent",
  async () => {
    return staticContent;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    formStatus: "idle", // idle, loading, succeeded, failed
    formData: null,
    error: null,
    content: staticContent,
    contentLoading: false,
    contentError: null,
  },
  reducers: {
    resetFormStatus: (state) => {
      state.formStatus = "idle";
      state.formData = null;
      state.error = null;
    },
    updateContactContent: (state, action) => {
      state.content = { ...state.content, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // Submit contact form cases
      .addCase(submitContactForm.pending, (state) => {
        state.formStatus = "loading";
        state.error = null;
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.formStatus = "succeeded";
        state.formData = action.payload;
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.formStatus = "failed";
        state.error = action.payload?.error || "Failed to submit form";
      })

      // Fetch contact content cases
      .addCase(fetchContactContent.pending, (state) => {
        state.contentLoading = false;
        state.contentError = null;
      })
      .addCase(fetchContactContent.fulfilled, (state, action) => {
        state.contentLoading = false;
        state.content = action.payload;
      })
      .addCase(fetchContactContent.rejected, (state) => {
        state.contentLoading = false;
      });
  },
});

export const { resetFormStatus, updateContactContent } = contactSlice.actions;
export default contactSlice.reducer;
