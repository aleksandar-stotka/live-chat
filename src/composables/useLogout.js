import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    await projectAuth.signOut();
  } catch (err) {
    console.log(err.massage);
    error.value = err.massage;
  }
};

const useLogout = () => {
  return { logout, error };
};

export default useLogout;
