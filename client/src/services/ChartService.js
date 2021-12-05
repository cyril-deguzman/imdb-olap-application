import axios from "axios";

const CHART_BASE_URL = "/api";

const ChartService = {
  getSampleData: () => axios.get(CHART_BASE_URL),
  getMFRatio: () => axios.get(`${CHART_BASE_URL}/getMFRatio`),
  getBestYears: () => axios.get(`${CHART_BASE_URL}/getBestYears`),
  getDirGenre: () => axios.get(`${CHART_BASE_URL}/getDirGenre`),
  getTopMusic: () => axios.get(`${CHART_BASE_URL}/getTopMusic`),
}

export default ChartService;