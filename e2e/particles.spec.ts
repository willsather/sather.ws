import { test, expect } from "@playwright/test";

test.describe("Particles", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("can turn off particles", async ({ page }) => {
    // particles are on
    await expect(page.getByTestId("tsparticles")).toBeVisible();

    // turn off particles
    await page.getByRole("button", { name: "particles" }).click();

    // particles ar eoff
    await expect(page.getByTestId("tsparticles")).not.toBeVisible();
  });
});
