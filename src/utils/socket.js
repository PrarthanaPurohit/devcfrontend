import { io } from "socket.io-client";
import { BASE_URL } from "./constants";

export const createSocketConnection = () => {
  if (location.hostname === "localhost") {
    return io(BASE_URL, {
      withCredentials: true, // ✅ MUST
    });
  } else {
    return io("https://devconnectbackend-aryy.onrender.com", {
      withCredentials: true, // ✅ MUST
    });
  }
};
