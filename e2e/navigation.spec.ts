import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("should navigate to work page", async ({ page }) => {
    await page.getByRole("link", { name: "work" }).click();

    await expect(page).toHaveTitle(/Work/);
    await expect(page.getByRole("heading", { name: "work" })).toBeVisible();
  });

  test("should navigate to home page", async ({ page }) => {
    await page.getByRole("link", { name: "home" }).click();

    await expect(page).toHaveTitle(/Will Sather/);
    await expect(
      page.getByRole("heading", { name: "will sather" }),
    ).toBeVisible();
  });

  test("should navigate to blog page", async ({ page }) => {
    await page.getByRole("link", { name: "posts" }).click();

    await expect(page).toHaveTitle(/Posts/);
    await expect(page.getByRole("heading", { name: "posts" })).toBeVisible();
  });

  test("should navigate to about page", async ({ page }) => {
    await page.getByRole("link", { name: "about" }).click();

    await expect(page).toHaveTitle(/About/);
    await expect(page.getByRole("heading", { name: "about" })).toBeVisible();
  });
});
