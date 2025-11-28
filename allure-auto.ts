import { execSync } from "node:child_process";

class AllureAutoReporter {
  async onEnd() {
    try {
      console.log("Generating Allure Report...");
      execSync("allure generate allure-results --clean -o allure-report --history allure-report/history", {
        stdio: "inherit",
      });
    } catch (error) {
      console.error("Allure auto report failed:", error);
    }
  }
}

export default AllureAutoReporter;
