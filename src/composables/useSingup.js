import { ref } from "vue";
import { projectAuth } from "../firebase/config";
const error = ref(null);

const singup = async (email, password, displayName) => {
  //this parametar are store in Singup component
  error.value = null;

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!res) {
      throw new Error("Could not complete singup");
    }
    await res.user.updateProfile({
      displayName,
    });
    error.value = null;
    console.log(res.user);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const useSingup = () => {
  return { error, singup };
}; //when use this function on component we want this value back

export default useSingup;
