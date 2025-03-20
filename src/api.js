import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Update with your backend URL

export const fetchProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const fetchCertifications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/certifications`);
    return response.data;
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return [];
  }
};

export const submitContactForm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contacts`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return null;
  }
};
