import { AppState } from "../AppState";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";

class ProfilesService {
  async getProfileById(profileId) {
    const response = await api.get(`api/profiles/${profileId}`);
    logger.log("GOT PROFILE", response.data);
  }
}

export const profilesService = new ProfilesService();
