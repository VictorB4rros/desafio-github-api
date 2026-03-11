import axios from "axios";
import { BASE_URL } from "../utils/system";

export function findUser(username: string | undefined) {
    return axios.get(`${BASE_URL}/users/${username}`);
}