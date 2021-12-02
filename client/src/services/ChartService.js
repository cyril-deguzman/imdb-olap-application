import axios from "axios";

const CHART_BASE_URL = "/api";

const ChartService = {
  getSampleData: () => axios.get(CHART_BASE_URL),
}

export default ChartService;