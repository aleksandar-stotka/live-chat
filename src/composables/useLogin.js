import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const error = ref(null);

const login = async (email, password) => {
  //first set error value  = null every tirm as we login reset a error
  error.value = null;
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password);
    error.value = null;
    console.log(res);
    return res;
    //this two parametar is to use inLiginForm
  } catch (err) {
    console.log(error.value);
    error.value = "Incorrect Login credentials";
  }
};

const useLogin = () => {
  return { error, login };
};

export default useLogin;
